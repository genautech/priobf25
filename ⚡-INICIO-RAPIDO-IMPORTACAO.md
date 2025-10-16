# ⚡ Início Rápido - Importação de Catálogo

**Sistema Black Friday PRIO 2025 v6.1.2**

---

## 🎯 O que você precisa fazer

### 1️⃣ **Baixe o Template** (1 minuto)
```
📄 template-importacao-produtos.json
```

### 2️⃣ **Pesquise Produtos** (30-60 minutos)

Acesse os marketplaces e anote:

**Marketplaces:**
- 🛒 [Amazon](https://www.amazon.com.br)
- 🛍️ [Mercado Livre](https://www.mercadolivre.com.br)
- 🏪 [Magazine Luiza](https://www.magazineluiza.com.br)
- 🛵 [Shopee](https://shopee.com.br)

**Para cada produto anote:**
- ✅ Nome completo
- ✅ Preço atual
- ✅ Link do produto
- ✅ Avaliação (estrelas)
- ✅ Frete grátis?

### 3️⃣ **Preencha o JSON** (20-40 minutos)

Abra `template-importacao-produtos.json` e preencha:

```json
{
  "sku": "YB-001",
  "nome": "Nome do Produto",
  "marca": "Marca",
  "categoria": "Eletrônicos",
  
  "melhor_oferta": {
    "marketplace": "amazon",
    "preco_compra": 1299.00,
    "link": "https://..."
  },
  
  "comparacao_prio": {
    "preco_prio": 1499.00
  },
  
  "estrategia_yoobe": {
    "custo_total": 1299.00,
    "margem_lucro_percentual": 12
  },
  
  "status_importacao": {
    "importar": true,
    "estoque_inicial": 50
  }
}
```

### 4️⃣ **Calcule a Margem** (Automático)

**Fórmula:**
```
Preço Venda = Custo × (1 + Margem%)

Exemplo:
- Custo: R$ 1.299,00
- Margem: 12%
- Preço: R$ 1.454,88
```

**Compare com PRIO:**
```
PRIO: R$ 1.499,00
Yoobe: R$ 1.454,88
✅ R$ 44,12 mais barato - COMPETITIVO!
```

### 5️⃣ **Importe no Sistema** (5 minutos)

1. Abra: `importar-catalogo-produtos.html`
2. Arraste seu JSON
3. Confira análise automática
4. Clique em "Confirmar Importação"

---

## 📊 Critérios de Seleção

### ✅ Produtos Ideais:
- 💰 Desconto mínimo: 20%
- ⭐ Avaliação: 4.0+ estrelas
- 🚚 Frete grátis
- 📦 Em estoque
- 💵 Faixa: R$ 150 - R$ 20.000

### 🎯 Categorias Prioritárias:
- 📱 Eletrônicos (Smartphones, Laptops, Tablets)
- 🎧 Áudio (Fones, Caixas de Som)
- 🎮 Gaming (Consoles, Controles)
- 🏠 Casa (Cafeteiras, Eletrodomésticos)
- 🏃 Esporte (Smartwatches, Fitness)

---

## 💰 Margem de Lucro Recomendada

| Tipo de Produto | Margem | Exemplo |
|-----------------|--------|---------|
| Alta demanda | 10-15% | iPhone, AirPods |
| Popular | 15-25% | Smartwatch, Tablet |
| Exclusivo | 25-50% | Produtos únicos |
| Nicho | 50-70% | Produtos especializados |

---

## 🚨 Regra de Ouro

**Seu preço DEVE ser menor que o PRIO para ser competitivo!**

Se ficar mais caro:
1. ❌ Não importe OU
2. 🔧 Reduza a margem

---

## 📁 Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| `template-importacao-produtos.json` | 📄 Template para preencher |
| `importar-catalogo-produtos.html` | 🖥️ Interface de importação |
| `BF25-fornecedor-prio.csv` | 📋 Preços PRIO (referência) |
| `📦-GUIA-IMPORTACAO-CATALOGO.md` | 📖 Guia completo |

---

## ⏱️ Tempo Estimado

| Etapa | Tempo |
|-------|-------|
| Download template | 1 min |
| Pesquisa (10 produtos) | 30-60 min |
| Preencher JSON | 20-40 min |
| Importar no sistema | 5 min |
| **TOTAL** | **~1h30min** |

---

## 🎁 Exemplo Pronto

O template já vem com **2 produtos de exemplo**:

1. ✅ **Samsung Galaxy S24** (não competitivo)
   - Custo: R$ 2.850,00
   - Margem: 25% → R$ 3.562,50
   - PRIO: R$ 3.200,00
   - ❌ R$ 362,50 MAIS CARO

2. ✅ **AirPods Pro 2ª Gen** (competitivo)
   - Custo: R$ 1.299,00
   - Margem: 12% → R$ 1.454,88
   - PRIO: R$ 1.499,00
   - ✅ R$ 44,12 MAIS BARATO

---

## ❓ Dúvidas Frequentes

**P: Preciso pesquisar em todos os marketplaces?**  
R: Não! Pesquise em 2-3 e escolha o melhor preço.

**P: Como sei o preço do PRIO?**  
R: Consulte `BF25-fornecedor-prio.csv` ou o site da PRIO.

**P: Posso importar produtos não competitivos?**  
R: Pode, mas não é recomendado. Ajuste a margem primeiro.

**P: Quantos produtos devo importar?**  
R: Comece com 5-10 para testar, depois aumente.

**P: E se não encontrar o produto na PRIO?**  
R: Ainda pode importar! Será um produto exclusivo Yoobe.

---

## 📞 Precisa de Ajuda?

Leia a documentação completa:
```
📖 📦-GUIA-IMPORTACAO-CATALOGO.md
```

---

## ✅ Checklist Rápido

Antes de importar:

- [ ] Pesquisei em pelo menos 2 marketplaces
- [ ] Preenchi o template JSON
- [ ] Comparei com preços PRIO
- [ ] Margem calculada (10-70%)
- [ ] Produtos competitivos selecionados
- [ ] Fiz backup do catálogo atual
- [ ] Pronto para importar!

---

**🚀 Pronto! Agora é só pesquisar, preencher e importar!**

**Boa sorte nas vendas da Black Friday 2025!** 🎉

---

**Versão:** 1.0.0  
**Data:** 16/10/2025  
**Sistema:** Black Friday PRIO 2025 v6.1.2
