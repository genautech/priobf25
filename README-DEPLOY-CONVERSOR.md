# 🚀 Deploy do Conversor Correto - Guia Completo

## 📋 O Que Vai Acontecer

Você vai fazer o deploy do conversor que **resolve o problema "Produto sem nome"**.

---

## ⚡ OPÇÃO RÁPIDA (Recomendada)

### Windows:
```
Clique duas vezes em: DEPLOY-CONVERSOR-CORRETO.bat
```

### Mac/Linux:
```bash
chmod +x DEPLOY-CONVERSOR-CORRETO.sh
./DEPLOY-CONVERSOR-CORRETO.sh
```

---

## 📝 OPÇÃO MANUAL (Se preferir controle total)

### 1. Adicione os Arquivos

```bash
git add converter-csv-para-sistema-CORRETO.html
git add SOLUCAO-PRODUTO-SEM-NOME.md
git add DEPLOY-CONVERSOR-CORRETO.sh
git add DEPLOY-CONVERSOR-CORRETO.bat
git add COMANDOS-DEPLOY-AGORA.txt
git add README-DEPLOY-CONVERSOR.md
```

### 2. Faça o Commit

```bash
git commit -m "fix: adiciona conversor correto que resolve problema 'Produto sem nome'

- Novo conversor com mapeamento correto de campos
- Mapeia 'Nome do Produto' → nome
- Mapeia 'Preço Mercado' → custoBase  
- Mapeia 'Menor preço Marketplaces' → precoVenda
- Documentação completa incluída"
```

### 3. Envie para GitHub

```bash
git push origin main
```

---

## ⏱️ Depois do Push (Aguarde 1-2 minutos)

### O Cloudflare Pages fará deploy automático

Você poderá acessar:
- 🔗 https://priobf25.pages.dev/converter-csv-para-sistema-CORRETO.html

---

## 📥 Como Usar o Conversor

### 1. Baixe o Conversor

**Do site:**
```
https://priobf25.pages.dev/converter-csv-para-sistema-CORRETO.html
```

**Do GitHub:**
```
https://github.com/seu-usuario/priobf25/raw/main/converter-csv-para-sistema-CORRETO.html
```

Salve como: `converter-csv-para-sistema-CORRETO.html`

### 2. Abra Localmente

- Clique duas vezes no arquivo HTML
- Ele abrirá no seu navegador padrão
- **IMPORTANTE:** Precisa abrir localmente para poder arrastar arquivos!

### 3. Converta o CSV

1. Arraste `planilha-nova.csv` para a área indicada
2. Veja as estatísticas aparecerem (165 produtos)
3. Clique em "Converter para produtos-v6.1.js"
4. O arquivo será baixado automaticamente

### 4. Verifique o Arquivo Gerado

Abra `produtos-v6.1.js` em um editor de texto e confira:

```javascript
{
    id: 1001,
    sku: "1MOR-EVO",
    nome: "1MORE EVO",  // ✅ NOME CORRETO!
    categoria: "Eletrônicos",
    // ...
}
```

### 5. Substitua no Projeto

```bash
# Copie o arquivo baixado
cp ~/Downloads/produtos-v6.1.js ./produtos-v6.1.js

# Ou no Windows
copy %USERPROFILE%\Downloads\produtos-v6.1.js produtos-v6.1.js
```

### 6. Faça Push do Catálogo Atualizado

```bash
git add produtos-v6.1.js
git commit -m "fix: atualiza catálogo com 165 produtos - nomes corretos"
git push origin main
```

### 7. Aguarde Deploy Final (1-2 min)

Acesse: https://priobf25.pages.dev

**Verifique:**
- ✅ 165 produtos no catálogo
- ✅ Nomes corretos (não "Produto sem nome")
- ✅ Preços calculados
- ✅ Links funcionando

---

## 🎯 Fluxo Completo Visual

```
1. Execute script deploy → 2. Aguarde 1-2 min
         ↓
3. Baixe conversor do site → 4. Abra localmente
         ↓
5. Arraste CSV → 6. Baixe produtos-v6.1.js
         ↓
7. Substitua no projeto → 8. Push para GitHub
         ↓
9. Aguarde deploy → 10. Verifique site ✅
```

---

## 📊 Comparação: Antes vs Depois

### ❌ Antes (com problema):

```json
{
  "Nome do Produto": "1MORE EVO"  // ← Campo errado
}
```

Resultado: "Produto sem nome" 😢

### ✅ Depois (corrigido):

```javascript
{
  nome: "1MORE EVO"  // ← Campo correto
}
```

Resultado: "1MORE EVO" 🎉

---

## 🆘 Troubleshooting

### Erro: "Updates were rejected"

```bash
git pull origin main
git push origin main
```

### Erro: "Permission denied"

```bash
git config user.name "Seu Nome"
git config user.email "seu@email.com"
```

### Erro: "Branch 'main' not found"

```bash
# Descubra sua branch
git branch -a

# Use a branch correta
git push origin master
# ou
git push origin sua-branch
```

### Conversor não funciona online (drag & drop)

**Isso é normal!** Navegadores bloqueiam acesso a arquivos locais por segurança.

**Solução:** Baixe o conversor e abra localmente (clique duas vezes).

---

## 📖 Documentação Relacionada

- **SOLUCAO-PRODUTO-SEM-NOME.md** - Explica o problema detalhadamente
- **DEPLOY-GIT-PASSO-A-PASSO.md** - Guia completo de deploy Git
- **COMANDOS-DEPLOY-AGORA.txt** - Comandos prontos copy/paste

---

## ✅ Checklist Final

Antes de considerar concluído:

- [ ] Deploy do conversor feito com sucesso
- [ ] Conversor baixado e aberto localmente
- [ ] CSV convertido para produtos-v6.1.js
- [ ] Arquivo verificado (nomes corretos)
- [ ] Arquivo substituído no projeto
- [ ] Push do catálogo feito
- [ ] Site online verificado
- [ ] 165 produtos com nomes corretos
- [ ] Tudo funcionando perfeitamente ✅

---

## 💡 Dica Pro

Depois que tudo estiver funcionando, você pode:

1. **Adicionar imagens reais** aos produtos
2. **Ajustar preços** manualmente no Admin
3. **Configurar cupons** de desconto
4. **Personalizar** descrições
5. **Testar** o fluxo completo de compra

---

## 🎉 Sucesso!

Quando tudo estiver funcionando:

✅ Catálogo com 165 produtos  
✅ Nomes corretos  
✅ Preços calculados  
✅ Links funcionando  
✅ Sistema pronto para Black Friday! 🚀

---

**📞 Precisa de ajuda?** Me avise em qual etapa você está!
