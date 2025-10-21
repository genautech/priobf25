# ⚡ CORREÇÃO: Erro "SHA wasn't supplied" no Auto-Sync GitHub

## 🔴 Problema Original

```
❌ Erro no auto-sync: Error: Invalid request.
"sha" wasn't supplied.
```

### O que estava acontecendo:

1. **Fetch do SHA falhava** (erro "Failed to fetch")
   - Possíveis causas: CORS, token inválido, rede instável
   
2. **Código continuava sem o SHA**
   - `sha = null` quando o fetch falhava
   - GitHub **EXIGE** SHA para atualizar arquivos existentes
   
3. **GitHub rejeitava a atualização**
   - "sha wasn't supplied" porque `sha: null` não foi enviado

---

## ✅ Solução Implementada

### 1. **SHA Agora é OBRIGATÓRIO**

```javascript
// ANTES (permitia sha = null)
...(sha && { sha: sha })

// DEPOIS (SHA obrigatório)
sha: sha  // Sempre enviado, nunca null
```

### 2. **Validação de SHA**

```javascript
if (!sha) {
    console.error('❌ SHA não foi obtido. Impossível atualizar arquivo no GitHub.');
    throw new Error('SHA não disponível. Não é possível atualizar o arquivo.');
}
```

### 3. **Retry Automático para Busca de SHA**

Se falhar ao buscar SHA:
- **Tenta novamente** até 3 vezes
- **Espera 1 segundo** entre tentativas
- **Aborta** se não conseguir SHA após 3 tentativas

```javascript
} catch (e) {
    console.error('❌ ERRO CRÍTICO ao buscar SHA:', e.message);
    
    if (tentativa < 3) {
        console.log(`🔄 Tentando novamente buscar SHA (tentativa ${tentativa + 1})...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return await salvarProdutosNoGitHubSilencioso(tentativa + 1);
    }
    
    throw new Error(`Não foi possível buscar SHA: ${e.message}`);
}
```

### 4. **Modo CORS Explícito**

```javascript
const getResponse = await fetch(url, {
    headers: { /* ... */ },
    mode: 'cors'  // ✅ Explicitamente definir modo CORS
});
```

### 5. **Logs Detalhados**

Agora você verá no console:

**Sucesso:**
```
🔄 Tentativa 1 de salvar no GitHub...
📥 Buscando SHA mais recente do arquivo...
✅ SHA obtido com sucesso: 7669cca2...
📤 Enviando arquivo para GitHub com SHA: 7669cca2...
✅ Arquivo salvo com sucesso no GitHub!
   📝 SHA antigo: 7669cca2...
   📝 SHA novo: abc12345...
```

**Retry em caso de falha:**
```
🔄 Tentativa 1 de salvar no GitHub...
📥 Buscando SHA mais recente do arquivo...
❌ ERRO CRÍTICO ao buscar SHA: Failed to fetch
🔄 Tentando novamente buscar SHA (tentativa 2)...
🔄 Tentativa 2 de salvar no GitHub...
📥 Buscando SHA mais recente do arquivo...
✅ SHA obtido com sucesso: 7669cca2...
```

**Falha após 3 tentativas:**
```
❌ ERRO CRÍTICO ao buscar SHA: Failed to fetch
🔄 Tentando novamente buscar SHA (tentativa 2)...
[...]
❌ Não foi possível buscar SHA: Failed to fetch. 
   Verifique: 1) Token GitHub válido, 2) Permissões CORS, 3) Conexão de rede
```

---

## 🧪 Como Testar

1. **Abra o admin-v6.5.html** no navegador
2. **Faça uma alteração** em qualquer produto
3. **Observe o console**:
   - Deve buscar SHA primeiro
   - Depois enviar atualização com SHA
   - Sucesso ou retry automático

---

## 🔍 Diagnóstico de Problemas

Se ainda houver erro "Failed to fetch":

### ✅ Verifique o Token GitHub:
```javascript
// No console do navegador:
console.log(githubConfig.token);
// Deve mostrar um token válido (ghp_...)
```

### ✅ Verifique as Permissões do Token:
O token precisa ter permissão `repo` (acesso completo aos repositórios)

### ✅ Verifique CORS:
GitHub API normalmente permite CORS, mas pode haver:
- Extensões de navegador bloqueando (AdBlock, Privacy Badger)
- Configurações de rede/firewall
- VPN ou proxy interferindo

### ✅ Teste Manual da API:
```javascript
// No console do navegador:
fetch('https://api.github.com/repos/genautech/priobf25/contents/produtos-v6.1.js', {
    headers: {
        'Authorization': 'token SEU_TOKEN_AQUI',
        'Accept': 'application/vnd.github.v3+json'
    }
})
.then(r => r.json())
.then(d => console.log('SHA:', d.sha))
.catch(e => console.error('Erro:', e));
```

---

## 📋 Resumo das Mudanças

| Antes | Depois |
|-------|--------|
| SHA opcional (`...(sha && { sha })`) | SHA obrigatório (`sha: sha`) |
| Falha silenciosa ao buscar SHA | Validação e erro explícito |
| Uma tentativa única | Até 3 tentativas com retry |
| Erro genérico | Logs detalhados de cada etapa |
| Sem modo CORS explícito | `mode: 'cors'` definido |
| Cache-busting ausente | `&_=${Date.now()}` em GET |

## 🔧 Funções Corrigidas

1. **`salvarProdutosNoGitHubSilencioso()`** (linha ~5110)
   - Salvamento **automático** (auto-sync)
   - Retry automático em caso de falha
   - Usado quando o usuário edita produtos

2. **`salvarProdutosNoGitHub()`** (linha ~4812)
   - Salvamento **manual** (botão "Salvar no GitHub")
   - Validação de SHA obrigatória
   - Mensagens de erro mais claras

---

## 🎯 Resultado Esperado

✅ **Auto-sync funcionando perfeitamente**
- SHA sempre obtido antes de salvar
- Retry automático em caso de falha temporária
- Erros claros para diagnóstico
- Sincronização confiável com GitHub

🔄 **Atualizado em:** 2025-10-20
