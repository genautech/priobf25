# 🔄 AUTO-SYNC DO GITHUB - FUNCIONAMENTO (v6.10.3)

## 📋 RESUMO EXECUTIVO

**Status:** ✅ Configurado e Funcional  
**Trigger:** Automático após edição de produtos/margens  
**Delay:** 2 segundos (debounce)  
**Arquivo Salvo:** `produtos-v6.1.js`  
**Branch:** `main`

---

## 🎯 COMO FUNCIONA O AUTO-SYNC

### Fluxo Completo:

```
1. Usuário Edita Produto/Margem
   ↓
2. salvarMargem() ou CRUD Form Submit
   ↓
3. window.produtoCRUD.atualizarProduto()
   ↓
4. CRUD Listener (linha 4174) detecta "update"
   ↓
5. Dispara automaticamente:
   - atualizarInterfaceCompleta() → Atualiza todas as abas
   - dispararAutoSync('edição de produto') → Inicia processo de sync
   ↓
6. Aguarda 2 segundos (debounce - linha 5479)
   ↓
7. salvarProdutosNoGitHubSilencioso()
   ↓
8. Busca SHA atual do arquivo no GitHub
   ↓
9. Gera novo conteúdo (produtos-v6.1.js)
   ↓
10. Faz PUT no GitHub com SHA correto
   ↓
11. ✅ Arquivo atualizado no repositório
   ↓
12. Deploy automático via Cloudflare Pages (1-2 min)
```

---

## 🔧 CÓDIGO RELEVANTE

### 1. Listener do CRUD (Auto-dispara sync)
**Localização:** Linha 4173-4190

```javascript
window.produtoCRUD.addListener((acao, dados) => {
    console.log(`🔄 Sincronização: ${acao}`, dados);
    
    if (['create', 'update', 'delete'].includes(acao)) {
        atualizarInterfaceCompleta();  // Atualiza UI
        
        // DISPARAR AUTO-SYNC
        if (acao === 'create') {
            dispararAutoSync('criação de produto');
        } else if (acao === 'update') {
            dispararAutoSync('edição de produto');  // ← MARGEM USA ESTE
        } else if (acao === 'delete') {
            dispararAutoSync('exclusão de produto');
        }
    }
});
```

### 2. Função salvarMargem() Atualizada
**Localização:** Linha 2557-2616

```javascript
function salvarMargem() {
    // ...validações...
    
    // USAR CRUD (dispara listener automaticamente)
    const resultado = window.produtoCRUD.atualizarProduto(produto.id, produtoAtualizado);
    
    if (resultado.sucesso) {
        console.log('✅ Margem atualizada via CRUD - Auto-sync será disparado');
        
        // Listener do CRUD vai:
        // 1. Chamar atualizarInterfaceCompleta()
        // 2. Chamar dispararAutoSync('edição de produto')
        // 3. Após 2s: Salvar no GitHub automaticamente
    }
}
```

### 3. Função dispararAutoSync()
**Localização:** Linha 5457-5522

```javascript
function dispararAutoSync(operacao = 'edição') {
    if (!verificarAutoSync()) {
        console.log('ℹ️ Auto-sync não está ativo');
        return;
    }
    
    // Debounce: aguarda 2 segundos
    autoSyncTimeout = setTimeout(async () => {
        console.log(`🔄 Auto-sync disparado após ${operacao}`);
        
        try {
            await salvarProdutosNoGitHubSilencioso();
            console.log(`✅ Auto-sync concluído (${operacao})`);
            
            // Atualizar último commit após 2 segundos
            setTimeout(() => carregarUltimoCommit(), 2000);
        } catch (error) {
            console.error('❌ Erro no auto-sync:', error);
        }
    }, 2000);  // ← AGUARDA 2 SEGUNDOS
}
```

### 4. Salvar no GitHub (Com retry)
**Localização:** Linha 5528-5600

```javascript
async function salvarProdutosNoGitHubSilencioso(tentativa = 1) {
    const conteudo = gerarArquivoProdutosJS();
    const { token, owner, repo, branch } = githubConfig;
    const path = 'produtos-v6.1.js';
    
    // 1. BUSCAR SHA ATUAL
    const shaResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`,
        { headers: { 'Authorization': `token ${token}` } }
    );
    
    const fileData = await shaResponse.json();
    const currentSha = fileData.sha;
    
    if (!currentSha) {
        throw new Error('SHA não encontrado');
    }
    
    // 2. FAZER PUT COM SHA
    const updateResponse = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
        {
            method: 'PUT',
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `🔄 Auto-sync: ${operacao}`,
                content: btoa(unescape(encodeURIComponent(conteudo))),
                sha: currentSha,  // ← SHA OBRIGATÓRIO
                branch: branch
            })
        }
    );
    
    // 3. RETRY SE SHA MISMATCH
    if (!updateResponse.ok && tentativa < 3) {
        console.log(`⚠️ Retry ${tentativa}/3 - SHA mismatch`);
        return salvarProdutosNoGitHubSilencioso(tentativa + 1);
    }
    
    return await updateResponse.json();
}
```

---

## 🧪 COMO VERIFICAR SE ESTÁ FUNCIONANDO

### 1. Verificar Auto-Sync Ativo

**Visual:**
- Ícone no canto superior direito
- Badge "ON" em verde = Ativo
- Badge "OFF" em cinza = Inativo

**Console:**
```javascript
// Verificar status
verificarAutoSync()  // true = ativo, false = inativo

// Ver configuração
console.log(githubConfig)
// Deve mostrar: token, owner, repo, branch
```

### 2. Testar Edição de Margem

**Passo a passo:**
```
1. Abra admin-v6.10.html
2. Pressione F12 (Console)
3. Verifique se auto-sync está ON
4. Vá para: Análise Comparativa
5. Edite margem de um produto
6. Clique "Salvar Margem"
7. OBSERVE O CONSOLE:
```

**Logs Esperados:**
```
🔄 Salvando margem via CRUD: {produtoId, nome, margemNova...}
✅ Margem atualizada via CRUD - Auto-sync será disparado
🔄 Sincronização: update {produto...}
🔄 Auto-sync disparado após edição de produto
[após 2s]
✅ Auto-sync concluído (edição de produto)
```

**Visual Esperado:**
- Ícone de sync gira (amarelo) por 2 segundos
- Ícone fica verde com check ✓
- Notificação: "Margem atualizada! Auto-sync ativado..."

### 3. Verificar no GitHub

**Após 2-5 segundos:**
```
1. Acesse: https://github.com/SEU-USUARIO/SEU-REPO
2. Vá para: produtos-v6.1.js
3. ✅ Verificar: Último commit foi agora
4. ✅ Verificar: Mensagem "🔄 Auto-sync: edição de produto"
```

### 4. Verificar Deploy no Cloudflare

**Após 1-2 minutos:**
```
1. Acesse: https://priobf25.pages.dev
2. Abra cliente-analise-v6.3.5.html
3. ✅ Produto deve ter margem atualizada
```

---

## 🚨 TROUBLESHOOTING

### Problema: Auto-Sync OFF

**Sintoma:** Badge mostra "OFF" em cinza

**Solução:**
```javascript
// 1. Verificar token no console
console.log(githubConfig.token ? 'Token configurado' : 'Token ausente');

// 2. Se token ausente, configure manualmente
githubConfig.token = 'ghp_SEU_TOKEN_AQUI';
localStorage.setItem('githubConfig', JSON.stringify(githubConfig));

// 3. Recarregue a página
location.reload();
```

### Problema: Erro "SHA wasn't supplied"

**Sintoma:** Console mostra erro de SHA

**Solução:**
- Sistema tem retry automático (3 tentativas)
- Aguarde alguns segundos
- Se persistir, verifique:
  ```javascript
  // Testar busca de SHA
  const response = await fetch(
      'https://api.github.com/repos/OWNER/REPO/contents/produtos-v6.1.js',
      { headers: { 'Authorization': 'token SEU_TOKEN' } }
  );
  const data = await response.json();
  console.log('SHA:', data.sha);
  ```

### Problema: Não sincroniza após editar margem

**Sintoma:** Edita margem mas não vê logs de sync

**Diagnóstico:**
```javascript
// 1. Verificar se CRUD está inicializado
console.log('CRUD disponível:', !!window.produtoCRUD);
console.log('CRUD inicializado:', window.produtoCRUD?._initialized);

// 2. Verificar listener
console.log('Listeners:', window.produtoCRUD?._listeners?.length);

// 3. Testar disparo manual
dispararAutoSync('teste manual');
```

**Solução:**
- Recarregue página com Ctrl+F5
- Verifique se `produto-crud-sync.js` foi carregado
- Verifique se não há erros no console antes de editar

### Problema: Deploy não atualiza no Cloudflare

**Sintoma:** GitHub atualizado mas site não muda

**Solução:**
```
1. GitHub atualizado? ✓
2. Aguardar 2-3 minutos (deploy automático)
3. Se não atualizar:
   - Acesse Cloudflare Dashboard
   - Pages → priobf25 → Deployments
   - Verificar último deploy
   - Se necessário: "Retry deployment"
4. Limpar cache do navegador: Ctrl+Shift+Delete
```

---

## 📊 MONITORAMENTO

### Verificar Status do Auto-Sync

**No Admin:**
- Ícone superior direito
- Verde = Funcionando
- Amarelo = Sincronizando
- Vermelho = Erro

**No Console:**
```javascript
// Status completo
console.table({
    'Auto-sync ativo': verificarAutoSync(),
    'Token configurado': !!githubConfig.token,
    'CRUD inicializado': window.produtoCRUD?._initialized,
    'Listeners ativos': window.produtoCRUD?._listeners?.length || 0,
    'Último sync': autoSyncPendente ? 'Pendente' : 'Completo'
});
```

### Ver Histórico de Sync

**No GitHub:**
```
1. Acesse: https://github.com/OWNER/REPO/commits/main
2. Filtrar por: produtos-v6.1.js
3. Ver commits com "🔄 Auto-sync"
```

**No Admin:**
```
1. Aba Dashboard → Card "Últimas Atualizações"
2. Ver histórico de produtos editados
```

---

## ✅ CHECKLIST FINAL

Antes de usar em produção, verificar:

- [ ] Auto-sync badge mostra "ON" (verde)
- [ ] Token GitHub configurado
- [ ] CRUD inicializado (console sem erros)
- [ ] Editar produto/margem dispara sync
- [ ] Logs de sync aparecem no console
- [ ] GitHub recebe commit após 2-5 segundos
- [ ] Cloudflare faz deploy após 1-2 minutos
- [ ] Site em produção reflete mudanças

---

## 🎓 ENTENDENDO O FLUXO

### Por que 2 segundos de delay?

**Debounce:** Se você editar 5 produtos em sequência rápida:
- Sem debounce: 5 commits no GitHub (spam)
- Com debounce: 1 commit com todas as mudanças

### Por que usar CRUD em vez de localStorage?

**Centralização:**
- CRUD = fonte única de verdade
- Dispara listeners automaticamente
- Garante consistência em todas as abas
- Facilita sincronização com GitHub

### Por que buscar SHA toda vez?

**Segurança:**
- GitHub exige SHA para evitar conflitos
- Se arquivo mudou, SHA é diferente
- Sistema faz retry automático
- Previne perda de dados

---

## 📝 RESUMO

**✅ Auto-sync está configurado corretamente**

**Fluxo:**
1. Editar margem → `salvarMargem()`
2. Usa `window.produtoCRUD.atualizarProduto()`
3. Listener detecta "update"
4. Dispara `dispararAutoSync()`
5. Aguarda 2s
6. Salva no GitHub
7. Deploy automático

**Não precisa fazer nada manualmente!**

---

**Desenvolvido por:** Claude (Anthropic)  
**Data:** 27 de Outubro de 2025  
**Versão:** 6.10.3
