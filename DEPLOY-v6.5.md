# 🚀 GUIA DE DEPLOY - Sistema Black Friday PRIO v6.5

**Versão:** 6.5.0 - Sincronização 100% Automática  
**Data:** 20/10/2025  
**Tempo estimado:** 15 minutos

---

## 📋 PRÉ-REQUISITOS

✅ Conta no GitHub  
✅ Conta no Cloudflare (gratuita)  
✅ Repositório: https://github.com/genautech/priobf25  
✅ Git instalado no Mac

---

## 🎯 PASSO 1: CONFIGURAR GITHUB TOKEN (5 min)

### 1.1 Criar Token no GitHub:

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token (classic)"**
3. Configure:
   - **Note:** `Cloudflare Pages - priobf25 - v6.5`
   - **Expiration:** `90 days` (ou No expiration)
   - **Scopes:** Marque APENAS:
     - ✅ **repo** (acesso completo aos repositórios)
4. Clique em **"Generate token"**
5. **COPIE o token** (começa com `ghp_...`)
6. **GUARDE COM SEGURANÇA** - você vai precisar dele!

---

## 🔐 PASSO 2: CONFIGURAR CLOUDFLARE PAGES (5 min)

### 2.1 Configurar Variável de Ambiente:

1. Acesse: https://dash.cloudflare.com
2. **Pages** → **priobf25**
3. **Settings** → **Environment variables**
4. Clique em **"Add variable"**
5. Preencha:
   ```
   Variable name: GITHUB_TOKEN
   Value: [cole seu token aqui - ghp_...]
   ```
6. **IMPORTANTE:** Marque AMBOS:
   - ✅ **Production**
   - ✅ **Preview**
7. Clique em **"Save"**

### 2.2 Verificar Configuração:

Após salvar, deve aparecer na lista:
```
GITHUB_TOKEN
Environments: Production, Preview
```

---

## 📦 PASSO 3: FAZER DEPLOY (5 min)

### 3.1 Fazer Push para o GitHub:

```bash
# 1. Entre na pasta do projeto
cd /Users/genautech/priobf25

# 2. Verifique o status
git status

# 3. Adicione todos os arquivos
git add -A

# 4. Commit
git commit -m "deploy: v6.5 - sincronização automática completa"

# 5. Push (substitua TOKEN pelo seu token do GitHub)
git push https://TOKEN@github.com/genautech/priobf25.git main
```

### 3.2 Aguardar Deploy Automático:

1. Acesse: https://dash.cloudflare.com
2. **Pages** → **priobf25** → **Deployments**
3. Aguarde o deploy aparecer
4. Espere mostrar **"Success"** (1-2 minutos)

---

## ✅ PASSO 4: TESTAR O SISTEMA (5 min)

### 4.1 Testar o Admin:

1. Acesse: https://priobf25.pages.dev/admin-v6.5.html
2. **Limpe o cache:** Cmd+Shift+R (Mac) ou Ctrl+Shift+R (Windows)
3. Verifique se o **toggle Auto-Sync** está no canto superior direito
4. O toggle deve ficar **VERDE** automaticamente
5. Edite um produto qualquer
6. Clique em **Salvar**
7. Aguarde 2 segundos
8. Deve aparecer: **"✅ 143 produtos sincronizados!"**

### 4.2 Verificar Commit no GitHub:

1. Acesse: https://github.com/genautech/priobf25/commits/main
2. Deve aparecer commit: **"chore: atualização automática de produtos via Pages Function"**
3. Horário deve ser recente (alguns segundos atrás)

### 4.3 Testar o Catálogo Cliente:

1. Aguarde **3-4 minutos** (deploy automático)
2. Abra em **aba anônima** ou **outro navegador:**
   - https://priobf25.pages.dev/cliente-analise-v6.1.html
3. Pressione **Cmd+Shift+R** para limpar cache
4. Procure o produto que você editou
5. Deve aparecer com as **alterações!** ✅

---

## 🎉 PRONTO! SISTEMA FUNCIONANDO

### ✅ O que está funcionando agora:

- ✅ **Admin v6.5** - Painel administrativo completo
- ✅ **Auto-Sync** - Sincronização automática em 2 segundos
- ✅ **Cloudflare Pages Function** - Servidor seguro
- ✅ **GitHub API** - Commits automáticos
- ✅ **Deploy automático** - Catálogo atualiza em 3-4 min
- ✅ **Cache otimizado** - Produtos sempre atualizados

### 📊 URLs do Sistema:

```
🏠 Página Inicial:
https://priobf25.pages.dev

📊 Admin (versão completa):
https://priobf25.pages.dev/admin-v6.5.html

📊 Admin (atalho):
https://priobf25.pages.dev/admin

🛍️ Catálogo Cliente:
https://priobf25.pages.dev/cliente-analise-v6.1.html

🛍️ Catálogo (atalho):
https://priobf25.pages.dev/cliente
```

---

## 🔧 TROUBLESHOOTING

### ❌ Erro: "Worker offline ou inacessível"

**Causa:** GITHUB_TOKEN não configurado ou deploy não terminou

**Solução:**
1. Verifique se a variável GITHUB_TOKEN está no Cloudflare
2. Aguarde o deploy terminar (Status: Success)
3. Limpe o cache do navegador (Cmd+Shift+R)

### ❌ Erro: "401 - Bad credentials"

**Causa:** Token do GitHub inválido ou sem permissões

**Solução:**
1. Crie um novo token no GitHub
2. Certifique-se de marcar o scope **repo**
3. Atualize a variável GITHUB_TOKEN no Cloudflare
4. Faça um novo deploy (commit vazio)

### ❌ Produtos não aparecem no cliente

**Causa:** Cache do navegador

**Solução:**
1. Pressione **Cmd+Shift+R** (Mac) ou **Ctrl+Shift+R** (Windows)
2. Aguarde 3-4 minutos após a sincronização
3. Verifique se o commit foi feito no GitHub

### ❌ Auto-Sync não ativa automaticamente

**Causa:** Configuração antiga no localStorage

**Solução:**
1. Abra o Console (F12)
2. Execute: `localStorage.removeItem('autoSyncEnabled')`
3. Recarregue a página: `location.reload()`

---

## 🔄 REDEPLOY (quando necessário)

Se precisar forçar um novo deploy:

```bash
cd /Users/genautech/priobf25

# Commit vazio para forçar redeploy
git commit --allow-empty -m "chore: redeploy v6.5"

# Push
git push https://TOKEN@github.com/genautech/priobf25.git main
```

---

## 📞 SUPORTE

**Documentação:**
- `README.md` - Documentação principal
- `CONFIGURAR-GITHUB-TOKEN.md` - Guia detalhado do token
- `ARQUIVOS-v6.5-ESSENCIAIS.md` - Lista de arquivos necessários

**Logs do Cloudflare:**
- Dashboard → Pages → priobf25 → Functions → Real-time Logs

**Commits do GitHub:**
- https://github.com/genautech/priobf25/commits/main

---

## 🎯 PRÓXIMOS PASSOS

Após deploy bem-sucedido:

1. ✅ **Teste completamente** - Edite vários produtos
2. ✅ **Monitore os commits** - Veja se estão sendo criados
3. ✅ **Verifique em múltiplos dispositivos** - Teste a sincronização
4. ✅ **Configure domínio personalizado** (opcional) - No Cloudflare Pages
5. ✅ **Faça backup regular** - Export de produtos via CSV

---

**Sistema v6.5 - 100% Automático | 100% Seguro | 100% Gratuito** 🚀

**Última atualização:** 20/10/2025
