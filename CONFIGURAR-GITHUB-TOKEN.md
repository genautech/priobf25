# 🔐 Como Configurar o GITHUB_TOKEN no Cloudflare Pages

**IMPORTANTE:** Sem esta configuração, a sincronização automática NÃO vai funcionar!

---

## 📋 Passo a Passo (5 minutos)

### 1️⃣ **Criar GitHub Personal Access Token**

Se você ainda não tem um token, crie agora:

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Configure:
   - **Note:** `Cloudflare Pages - priobf25`
   - **Expiration:** `No expiration` (ou escolha 90 dias)
   - **Scopes:** Marque apenas:
     - ✅ `repo` (acesso completo aos repositórios)
4. Clique em **"Generate token"**
5. **COPIE O TOKEN** (começa com `ghp_...`) - você não verá novamente!

---

### 2️⃣ **Configurar no Cloudflare Pages**

1. Acesse: https://dash.cloudflare.com
2. Navegue para: **Pages** → **priobf25**
3. Vá em: **Settings** → **Environment variables**
4. Clique em **"Add variable"**
5. Preencha:
   ```
   Variable name: GITHUB_TOKEN
   Value: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx (cole seu token aqui)
   ```
6. **IMPORTANTE:** Marque AMBOS os ambientes:
   - ✅ **Production**
   - ✅ **Preview**
7. Clique em **"Save"**

---

### 3️⃣ **Fazer Novo Deploy**

Depois de adicionar a variável, você precisa fazer um novo deploy:

**Opção A - Via Dashboard:**
1. No Cloudflare Dashboard → **priobf25** → **Deployments**
2. Clique nos **3 pontinhos** do último deploy
3. Clique em **"Retry deployment"**

**Opção B - Via Git Push:**
```bash
# Faça qualquer alteração e commit
git commit --allow-empty -m "chore: redeploy para carregar GITHUB_TOKEN"
git push origin main
```

---

### 4️⃣ **Testar a Sincronização**

Após o novo deploy (aguarde 1-2 minutos):

1. Acesse: https://priobf25.pages.dev/admin-v6.5.html
2. Ative o **Auto-Sync** (toggle verde no topo)
3. Edite qualquer produto
4. Aguarde 2 segundos
5. Verifique no GitHub se o commit foi criado: https://github.com/genautech/priobf25/commits/main

---

## ✅ Como Saber se Está Funcionando?

Quando você edita um produto, deve ver:

1. ⏳ Mensagem: "Sincronizando..."
2. ✅ Mensagem: "150 produtos sincronizados! Commit: abc123"
3. 🔗 Link para ver o commit no GitHub

---

## ❌ Problemas Comuns

### Erro: "GITHUB_TOKEN não está configurado"
- ✅ Verifique se adicionou a variável no Cloudflare
- ✅ Certifique-se que marcou **Production** e **Preview**
- ✅ Faça um novo deploy depois de adicionar

### Erro: "401 Unauthorized"
- ✅ Token inválido ou expirado
- ✅ Gere um novo token no GitHub
- ✅ Atualize a variável no Cloudflare

### Erro: "403 Forbidden"
- ✅ Token sem permissão `repo`
- ✅ Recrie o token marcando o scope `repo`

---

## 🔒 Segurança

✅ **Token está seguro:**
- Armazenado como variável de ambiente no servidor
- NÃO aparece no código frontend
- NÃO aparece nos commits do Git
- Apenas a Pages Function tem acesso

❌ **NUNCA:**
- Commite o token no código
- Compartilhe o token publicamente
- Use o token no JavaScript do cliente

---

## 📞 Precisa de Ajuda?

Se algo não funcionar:
1. Verifique os logs: Cloudflare Dashboard → priobf25 → Functions → Real-time Logs
2. Teste o endpoint: https://priobf25.pages.dev/sync
3. Verifique se a variável está salva corretamente

---

**Última atualização:** 20/10/2025 - v6.5.0
