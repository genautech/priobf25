# 🔧 Solução: Produtos Aparecendo Sem Nome

## ❌ Problema Identificado

Ao importar o JSON no Admin, os produtos aparecem como "Produto sem nome".

### Causa Raiz:

Seu JSON gerado tem:
```json
{
  "Nome do Produto": "1MORE EVO"
}
```

Mas o sistema espera:
```json
{
  "nome": "1MORE EVO"
}
```

**O campo está com nome diferente!** 🎯

---

## ✅ SOLUÇÃO: Use o Conversor Correto

### Arquivo Correto: `converter-csv-para-sistema-CORRETO.html`

Este conversor faz o mapeamento correto:

| CSV | → | Sistema |
|-----|---|---------|
| `"Nome do Produto"` | → | `nome` |
| `"Preço Mercado"` | → | `custoBase` |
| `"Menor preço Marketplaces"` | → | `precoVenda` |
| `"Link de compra"` | → | `linkCompra` |

---

## 🚀 Como Usar (Passo a Passo)

### 1️⃣ Baixe o Conversor Correto

```bash
# Se já fez deploy no Git:
https://priobf25.pages.dev/converter-csv-para-sistema-CORRETO.html

# OU baixe do GitHub e abra localmente
```

### 2️⃣ Converta o CSV

1. Abra `converter-csv-para-sistema-CORRETO.html` no navegador
2. Arraste `planilha-nova.csv`
3. Clique em "Converter para produtos-v6.1.js"
4. Baixe o arquivo gerado

### 3️⃣ Substitua no Projeto

```bash
# Substitua o arquivo atual
cp ~/Downloads/produtos-v6.1.js ./produtos-v6.1.js

# Commit e push
git add produtos-v6.1.js
git commit -m "fix: substitui catálogo com 165 produtos - campos corretos"
git push origin main
```

### 4️⃣ Aguarde Deploy

- Aguarde 1-2 minutos para deploy automático
- Acesse: https://priobf25.pages.dev
- Verifique se os produtos aparecem com nomes corretos

---

## 📊 Diferença entre os Conversores

| Conversor | Saída | Para que serve |
|-----------|-------|----------------|
| `converter-csv-para-json.html` | JSON | ❌ Campos errados (não use!) |
| `converter-planilha-para-sistema.html` | produtos-v6.1.js | ⚠️ Campos antigos |
| **`converter-csv-para-sistema-CORRETO.html`** | produtos-v6.1.js | ✅ **USE ESTE!** |

---

## 🎯 Por que Aconteceu?

O Importador Inteligente do Admin tem 3 formatos:

1. **Formato complexo:** (melhor_oferta, estrategia_yoobe)
2. **Formato sistema:** (id, nome, preco, sku)
3. **Formato intermediário:** (tenta mapear, mas precisa dos nomes corretos)

Seu JSON caiu no formato 3, mas com nomes de campo errados.

---

## ✅ Mapeamento Correto (REFERÊNCIA)

```javascript
// CSV → Sistema
{
  "SKU": "1MOR-EVO",                        → sku: "1MOR-EVO"
  "Nome do Produto": "1MORE EVO",           → nome: "1MORE EVO" ✅
  "Categoria": "Eletrônicos",               → categoria: "Eletrônicos"
  "Subcategoria": "Áudio",                  → subcategoria: "Áudio"
  "Fornecedor": "1MORE",                    → fornecedor: "1MORE"
  "Preço Mercado": "1169",                  → custoBase: 1169
  "Menor preço Marketplaces": "1188,3",     → precoVenda: 1188.3
  "Link de compra": "https://...",          → linkCompra: "https://..."
  "Marketplace": "Kabum",                   → especificacoes.marketplace
  "Prazo de entrega marketplace": "7 DIAS"  → especificacoes.prazoEntrega
}
```

---

## 🔥 Ação Rápida (Copy/Paste)

```bash
# 1. Faça deploy do conversor correto
git add converter-csv-para-sistema-CORRETO.html
git commit -m "feat: adiciona conversor com mapeamento correto"
git push origin main

# 2. Aguarde 1-2 minutos

# 3. Baixe de:
# https://priobf25.pages.dev/converter-csv-para-sistema-CORRETO.html

# 4. Abra localmente, arraste CSV, baixe produtos-v6.1.js

# 5. Substitua e faça push
git add produtos-v6.1.js
git commit -m "fix: catálogo com nomes corretos"
git push origin main
```

---

## 🆘 Se Ainda Não Funcionar

Me envie:
1. Print dos produtos aparecendo sem nome
2. Qual conversor você usou
3. Primeiras 5 linhas do produtos-v6.1.js gerado

---

## ✅ Resumo Ultra Rápido

**Problema:** JSON com `"Nome do Produto"` em vez de `nome`  
**Solução:** Use `converter-csv-para-sistema-CORRETO.html`  
**Resultado:** Produtos com nomes corretos ✅

---

**📞 Precisa de ajuda?** Me avise!
