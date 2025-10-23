# 🚀 Deploy no Git - Passo a Passo

## 📋 Arquivos que Serão Enviados

✅ Backup criado: `produtos-v6.1.js.backup-2025-10-23-pre-conversao`
✅ CSV para conversão: `planilha-nova.csv`
✅ Ferramenta de conversão: `converter-planilha-para-sistema.html`
✅ Instruções: `INSTRUCOES-CONVERSAO-MANUAL.md`
✅ Este guia: `DEPLOY-GIT-PASSO-A-PASSO.md`

## 🎯 Comandos Git - Copie e Cole no Terminal

### 1️⃣ Navegue até a pasta do projeto

```bash
cd caminho/para/seu/projeto/priobf25
```

### 2️⃣ Verifique o status atual

```bash
git status
```

### 3️⃣ Adicione todos os arquivos novos/modificados

```bash
git add .
```

**OU adicione arquivos específicos:**

```bash
git add produtos-v6.1.js.backup-2025-10-23-pre-conversao
git add planilha-nova.csv
git add converter-planilha-para-sistema.html
git add INSTRUCOES-CONVERSAO-MANUAL.md
git add DEPLOY-GIT-PASSO-A-PASSO.md
```

### 4️⃣ Faça o commit com mensagem descritiva

```bash
git commit -m "feat: adiciona backup e ferramenta de conversão CSV para 165 produtos"
```

### 5️⃣ Envie para o GitHub

```bash
git push origin main
```

**OU se sua branch for `master`:**

```bash
git push origin master
```

## 🔄 Se Precisar Atualizar do Repositório Remoto Primeiro

```bash
git pull origin main
```

## ⚠️ Se Houver Conflitos

```bash
# Veja os conflitos
git status

# Resolva manualmente os arquivos com conflito
# Depois:
git add .
git commit -m "fix: resolve conflitos de merge"
git push origin main
```

## 🎉 Após o Push

1. **Acesse o GitHub:** https://github.com/seu-usuario/priobf25
2. **Verifique se os arquivos estão lá**
3. **Aguarde o deploy automático** (Cloudflare Pages)
4. **Acesse:** https://priobf25.pages.dev

## 📥 Depois do Deploy - Como Usar a Ferramenta

### Opção A: Baixar e Usar Localmente

1. No GitHub, clique em **Code** → **Download ZIP**
2. Extraia o arquivo
3. Abra `converter-planilha-para-sistema.html` no navegador
4. Arraste `planilha-nova.csv` para converter

### Opção B: Acessar Diretamente Online

Se o Cloudflare Pages estiver configurado:

```
https://priobf25.pages.dev/converter-planilha-para-sistema.html
```

**Mas lembre-se:** Para arrastar arquivos locais, você precisará baixar a página!

## 🆘 Comandos Úteis de Emergência

### Ver histórico de commits
```bash
git log --oneline
```

### Desfazer último commit (mantém alterações)
```bash
git reset --soft HEAD~1
```

### Desfazer alterações não commitadas
```bash
git checkout -- nome-do-arquivo
```

### Ver diferenças antes de commitar
```bash
git diff
```

## ✅ Checklist Final

- [ ] Navegou até a pasta do projeto
- [ ] Executou `git status` para ver alterações
- [ ] Executou `git add .` para adicionar arquivos
- [ ] Executou `git commit -m "mensagem"` para commitar
- [ ] Executou `git push origin main` para enviar
- [ ] Verificou no GitHub se os arquivos estão lá
- [ ] Aguardou deploy automático no Cloudflare Pages
- [ ] Testou o site em produção

## 🎯 Próximos Passos Após Deploy

1. ✅ Baixe `converter-planilha-para-sistema.html` do GitHub
2. ✅ Baixe `planilha-nova.csv` do GitHub
3. ✅ Abra o HTML localmente no navegador
4. ✅ Converta o CSV
5. ✅ Baixe o `produtos-v6.1.js` gerado
6. ✅ Substitua no projeto
7. ✅ Faça novo commit e push
8. ✅ Deploy automático! 🚀

---

## 💡 Dica Pro

Para facilitar, crie um script shell:

```bash
#!/bin/bash
# salve como: deploy.sh

git add .
git commit -m "update: $1"
git push origin main

echo "✅ Deploy concluído!"
```

**Uso:**
```bash
chmod +x deploy.sh
./deploy.sh "minha mensagem de commit"
```

---

**📞 Precisa de ajuda?** Me avise em qual passo você está!
