# 🚀 Deploy do index.html - Guia Rápido

## 📋 O Que Vamos Fazer

Fazer commit e push **APENAS** do arquivo `index.html` para o GitHub, sem afetar outros arquivos.

---

## ⚡ MÉTODO 1: Linha de Comando (Recomendado)

### Passo 1: Abrir Terminal

**Windows:**
```bash
# Abrir PowerShell ou Git Bash na pasta do projeto
# (Clique com botão direito na pasta → "Git Bash Here")
```

**Mac/Linux:**
```bash
# Abrir Terminal e navegar até a pasta
cd /caminho/para/seu/projeto
```

### Passo 2: Verificar Status

```bash
git status
```

**O que você verá:**
```
Changes not staged for commit:
  modified:   index.html
  modified:   admin-v6.10.html
  modified:   (outros arquivos...)
```

### Passo 3: Adicionar APENAS index.html

```bash
git add index.html
```

### Passo 4: Verificar (Opcional mas Recomendado)

```bash
git status
```

**Agora deve mostrar:**
```
Changes to be committed:
  modified:   index.html

Changes not staged for commit:
  modified:   admin-v6.10.html
  (outros arquivos não serão commitados)
```

✅ **Perfeito!** Apenas `index.html` será commitado.

### Passo 5: Fazer Commit

```bash
git commit -m "feat: atualizar landing page index.html"
```

### Passo 6: Fazer Push

```bash
git push origin main
```

**OU se sua branch principal é `master`:**
```bash
git push origin master
```

### Passo 7: Aguardar Deploy

```
⏱️ Aguarde 2-3 minutos
🌐 Cloudflare Pages fará deploy automático
✅ Acesse: https://priobf25.pages.dev
```

---

## 🖱️ MÉTODO 2: GitHub Desktop (Visual)

### Passo 1: Abrir GitHub Desktop

1. Abra o aplicativo GitHub Desktop
2. Selecione o repositório `priobf25`

### Passo 2: Visualizar Mudanças

- Você verá lista de arquivos modificados
- Encontre `index.html` na lista

### Passo 3: Selecionar APENAS index.html

- ✅ **Marque** o checkbox do `index.html`
- ❌ **Desmarque** todos os outros arquivos

### Passo 4: Fazer Commit

1. No campo de mensagem, escreva:
   ```
   feat: atualizar landing page index.html
   ```
2. Clique em "Commit to main"

### Passo 5: Push

1. Clique em "Push origin" (botão azul no topo)
2. Aguarde upload

### Passo 6: Aguardar Deploy

```
⏱️ 2-3 minutos
✅ https://priobf25.pages.dev
```

---

## 🌐 MÉTODO 3: Interface Web do GitHub (Mais Simples)

### Passo 1: Acessar GitHub

1. Vá para: https://github.com/genautech/priobf25
2. Faça login

### Passo 2: Navegar até index.html

1. Na lista de arquivos, clique em `index.html`

### Passo 3: Editar

1. Clique no ícone de lápis (✏️) no canto superior direito
2. Deleta todo o conteúdo
3. Copie o conteúdo atualizado do seu `index.html` local
4. Cole no editor

### Passo 4: Commit

1. Role até o final da página
2. No campo "Commit changes":
   ```
   feat: atualizar landing page index.html
   ```
3. Deixe marcado "Commit directly to the main branch"
4. Clique em "Commit changes"

### Passo 5: Aguardar Deploy

```
⏱️ 2-3 minutos
✅ https://priobf25.pages.dev
```

---

## ⚡ COMANDOS RÁPIDOS (Copiar e Colar)

### Para Windows (PowerShell/Git Bash):

```bash
# 1. Adicionar apenas index.html
git add index.html

# 2. Fazer commit
git commit -m "feat: atualizar landing page index.html"

# 3. Fazer push
git push origin main

# ✅ Pronto! Aguarde 2-3 minutos
```

### Para Mac/Linux (Terminal):

```bash
# 1. Adicionar apenas index.html
git add index.html

# 2. Fazer commit
git commit -m "feat: atualizar landing page index.html"

# 3. Fazer push
git push origin main

# ✅ Pronto! Aguarde 2-3 minutos
```

---

## 🔍 Verificar Deploy

### 1. GitHub Actions

1. Vá para: https://github.com/genautech/priobf25/actions
2. Veja o workflow em execução
3. Aguarde aparecer ✅ verde

### 2. Cloudflare Pages

1. Acesse: https://dash.cloudflare.com
2. Vá em "Pages"
3. Selecione "priobf25"
4. Veja status do deploy

### 3. Testar Site

```bash
# Abra no navegador:
https://priobf25.pages.dev

# Limpe cache se necessário:
Ctrl+F5 (Windows)
Cmd+Shift+R (Mac)
```

---

## ❌ Problemas Comuns

### Erro: "nothing to commit"

**Causa:** Você não modificou o arquivo ou já foi commitado

**Solução:**
```bash
# Verificar status
git status

# Se index.html não aparece, está tudo commitado já
```

### Erro: "Your branch is behind"

**Causa:** Versão local desatualizada

**Solução:**
```bash
# Puxar mudanças primeiro
git pull origin main

# Depois fazer push
git push origin main
```

### Erro: "authentication failed"

**Causa:** Credenciais não configuradas

**Solução:**
```bash
# Configurar nome
git config --global user.name "Seu Nome"

# Configurar email
git config --global user.email "seu@email.com"

# Tentar push novamente
git push origin main
```

### Erro: "Permission denied"

**Causa:** Token de autenticação expirado

**Solução:**
1. Gerar novo Personal Access Token no GitHub
2. Usar token como senha ao fazer push

---

## 🎯 Checklist de Deploy

- [ ] Abrir terminal na pasta do projeto
- [ ] Verificar status: `git status`
- [ ] Adicionar index.html: `git add index.html`
- [ ] Verificar novamente: `git status`
- [ ] Fazer commit: `git commit -m "feat: atualizar landing page"`
- [ ] Fazer push: `git push origin main`
- [ ] Aguardar 2-3 minutos
- [ ] Verificar GitHub Actions (✅ verde)
- [ ] Testar site: https://priobf25.pages.dev
- [ ] Limpar cache do navegador (Ctrl+F5)

---

## 📝 Mensagens de Commit Recomendadas

Escolha uma que faça sentido:

```bash
# Atualização geral
git commit -m "feat: atualizar landing page index.html"

# Correção de bug
git commit -m "fix: corrigir links na landing page"

# Nova funcionalidade
git commit -m "feat: adicionar nova seção na landing page"

# Melhoria visual
git commit -m "style: melhorar design da landing page"

# Atualização de conteúdo
git commit -m "docs: atualizar informações na landing page"
```

---

## ⏱️ Timeline do Deploy

```
00:00 → git push (seu comando)
00:05 → GitHub recebe commit
00:10 → GitHub Actions inicia
00:30 → Build completa
01:00 → Cloudflare recebe arquivos
02:00 → Deploy em andamento
03:00 → ✅ Site atualizado!
```

**Total:** ~2-3 minutos

---

## 🎉 Verificação Final

Após deploy bem-sucedido:

1. ✅ Acesse: https://priobf25.pages.dev
2. ✅ Pressione Ctrl+F5 (limpar cache)
3. ✅ Verifique se as mudanças aparecem
4. ✅ Teste os links (Admin e Cliente)
5. ✅ Confirme que tudo funciona

---

## 📞 Suporte Rápido

**Se precisar de ajuda:**

1. Verifique mensagens de erro no terminal
2. Consulte GitHub Actions para logs
3. Verifique status do Cloudflare Pages
4. Limpe cache do navegador (Ctrl+F5)

---

## ✅ Resumo Ultra-Rápido

```bash
# 3 comandos e pronto:
git add index.html
git commit -m "feat: atualizar landing page"
git push origin main

# Aguarde 2-3 minutos
# Acesse: https://priobf25.pages.dev
```

**👉 É só isso!** Simples e rápido! 🚀
