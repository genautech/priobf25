# ✅ Checklist: Configuração do GitHub Token

## 🎯 **OBJETIVO**
Permitir que o Auto-Sync funcione sem precisar inserir API key toda hora.

---

## 📋 **CHECKLIST DE CONFIGURAÇÃO**

### ☐ **1. Criar GitHub Personal Access Token**

1. Acesse: https://github.com/settings/tokens
2. **Generate new token** → **Classic**
3. Configurações:
   - Nome: `Cloudflare Pages Auto-Sync`
   - Expiration: `No expiration`
   - Scopes: ✅ `repo` (marque TODOS os sub-items)
4. **Generate token**
5. **COPIE O TOKEN** (guarde em lugar seguro!)

---

### ☐ **2. Configurar no Cloudflare Pages**

1. Acesse: https://dash.cloudflare.com
2. **Pages** → **priobf25**
3. **Settings** → **Environment variables**
4. **Add variable**:
   - Variable name: `GITHUB_TOKEN`
   - Value: [Cole o token aqui]
   - Environment: **Production** + **Preview**
5. **Save**

---

### ☐ **3. Fazer Deploy para Ativar**

**IMPORTANTE**: A variável só fica ativa após um novo deploy!

Opção A - Via Git (recomendado):
```bash
git add .
git commit -m "docs: adicionar guia auto-sync"
git push origin main
```

Opção B - Via Cloudflare Dashboard:
1. Pages → priobf25 → Deployments
2. Clique no último deployment
3. **Retry deployment**

---

### ☐ **4. Testar Conectividade**

1. Acesse: `https://priobf25.pages.dev/admin-v6.10.html`
2. Abra o Console (F12)
3. Procure por:
   ```
   ✅ GitHubSyncWorker disponível
   ✅ Pages Function online
   ```

**Se ver erro "Pages Function offline"**:
- Token não está configurado OU
- Novo deploy ainda não foi feito

---

### ☐ **5. Testar Salvamento**

1. No Admin, edite um produto (ex: mude preço)
2. Clique em **"Salvar Alterações"**
3. Deve ver: `✅ Produtos salvos com sucesso!`
4. Vá no GitHub: https://github.com/genautech/priobf25/commits/main
5. Confirme novo commit com mensagem: `chore: atualização automática de produtos`

---

## 🎉 **RESULTADO ESPERADO**

✅ Console mostra "Pages Function online"  
✅ Salvamento funciona sem pedir API key  
✅ Commits aparecem automaticamente no GitHub  
✅ Deploy automático após cada salvamento  

---

## 🚨 **SE NÃO FUNCIONAR**

### Erro: "Pages Function offline"
→ Token não configurado ou deploy não foi feito

### Erro: "403 Forbidden"
→ Token sem permissão `repo`

### Erro: "401 Unauthorized"
→ Token inválido ou expirado

### Solução Geral:
1. Recrie o token com permissão `repo` completa
2. Atualize no Cloudflare Pages
3. Faça novo deploy (git push)
4. Aguarde 2-3 minutos
5. Teste novamente

---

## 💡 **DICA PRO**

Para verificar se o token está funcionando, teste diretamente a API:

```bash
curl -X POST https://priobf25.pages.dev/sync \
  -H "Content-Type: application/json" \
  -H "Origin: https://priobf25.pages.dev" \
  -d '{"produtos":[]}'
```

**Resposta esperada**:
- Se token configurado: `{"error":"Nenhum produto para sincronizar"}`
- Se token NÃO configurado: `{"error":"GITHUB_TOKEN não configurado"}`

---

**Status**: Pendente de configuração  
**Próximo passo**: Criar token no GitHub  
