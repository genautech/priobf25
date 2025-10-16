# ⚡ Gerar CSV do Catálogo - v6.1.5

**Tempo:** 2 minutos  
**Objetivo:** Exportar todos os produtos com preços Prio e análise comparativa

---

## 🚀 Como Usar (2 minutos)

### 1️⃣ **Abrir o Gerador**
```
Arquivo: gerar-csv-catalogo.html
Abrir no navegador (Chrome/Edge/Firefox)
```

### 2️⃣ **Ver Estatísticas**
A página mostra automaticamente:
- ✅ **Total de Produtos:** 142
- ✅ **Com Preço Prio:** 40-60 produtos
- ✅ **Sem Preço Prio:** 80-100 produtos

### 3️⃣ **Visualizar Preview**
- Tabela mostra primeiros 10 produtos
- Preview dos dados que serão exportados
- Valores com preço Prio em verde ✅

### 4️⃣ **Gerar e Baixar CSV**
```
Clicar no botão:
"Gerar e Baixar CSV Completo"
```

**Resultado:**
- ✅ Arquivo baixado automaticamente
- ✅ Nome: `catalogo-completo-prio-2025-10-16_14-30.csv`
- ✅ Codificação UTF-8 (acentos corretos)
- ✅ Compatível com Excel e Google Sheets

---

## 📊 Colunas do CSV

### **Informações Básicas**
1. **SKU** - Código do produto
2. **Nome do Produto** - Nome completo
3. **Categoria** - Categoria principal
4. **Subcategoria** - Subcategoria específica
5. **Fornecedor** - Nome do fornecedor
6. **Quantidade** - Estoque disponível

### **Preços e Custos**
7. **Custo Fornecedor Prio (R$)** - Preço que o fornecedor Prio cobra
8. **Margem (%)** - Margem de lucro aplicada
9. **Preço Venda Yoobe (R$)** - Preço final de venda na Yoobe
10. **Preço Mercado (R$)** - Preço de referência no mercado

### **Análise Comparativa**
11. **Link de Compra** - URL para comprar o produto
12. **Tem Preço Prio** - Sim/Não (se encontramos o preço)
13. **Diferença Yoobe vs Prio (R$)** - Diferença de preço em R$
14. **Status Competitividade** - Análise:
    - ✅ "Yoobe mais barato"
    - ⚠️ "Preço igual"
    - ❌ "Yoobe mais caro"
    - ℹ️ "Sem comparação" (sem preço Prio)

---

## 📈 Exemplo de Dados

```csv
SKU,Nome do Produto,Categoria,Subcategoria,Fornecedor,Quantidade,Custo Fornecedor Prio (R$),Margem (%),Preço Venda Yoobe (R$),Preço Mercado (R$),Link de Compra,Tem Preço Prio,Diferença Yoobe vs Prio (R$),Status Competitividade
ECH-DOT5-EST,"Alexa - Echo Dot 5ª Geração",Eletrônicos,Smart Home,Amazon.com.br,30,"420,00",30,"546,00","599,00",https://www.amazon.com.br/...,Sim,"126,00",Yoobe mais caro
JBL-WAVE,"Fone JBL Wave Buds",Eletrônicos,Áudio,JBL Brasil,41,"300,00",30,"390,00","499,00",https://www.amazon.com.br/...,Sim,"90,00",Yoobe mais caro
```

---

## 🎯 Casos de Uso

### 1. **Análise de Competitividade**
```
Abrir CSV no Excel → Filtrar por "Status Competitividade"
→ Ver quais produtos Yoobe é mais barato
```

### 2. **Planejamento de Compras**
```
Ordenar por "Diferença Yoobe vs Prio" (maior → menor)
→ Identificar produtos onde economizamos mais
```

### 3. **Relatório para Gestão**
```
Criar gráficos no Excel:
- Pizza: Distribuição de status
- Barras: Top 10 maiores economias
- Linha: Evolução de preços
```

### 4. **Compartilhar com Equipe**
```
Enviar CSV por email → Equipe pode analisar
→ Decisões baseadas em dados reais
```

---

## 💡 Dicas

### **Excel / Google Sheets**

1. **Abrir com acentos corretos:**
   - Excel: Dados → De Texto/CSV → Codificação UTF-8
   - Google Sheets: Upload direto (detecta automático)

2. **Formatar valores monetários:**
   ```
   Selecionar colunas de preço → Formatar Células → Moeda → R$
   ```

3. **Filtros automáticos:**
   ```
   Selecionar cabeçalho → Dados → Filtro
   ```

4. **Criar tabela dinâmica:**
   ```
   Selecionar dados → Inserir → Tabela Dinâmica
   Linhas: Status Competitividade
   Valores: Soma de Diferença
   ```

---

## 🔍 Análises Sugeridas

### **1. Taxa de Competitividade**
```
Contar quantos produtos em cada status:
- Yoobe mais barato: X produtos (Y%)
- Preço igual: X produtos (Y%)
- Yoobe mais caro: X produtos (Y%)
```

### **2. Economia Total Possível**
```
Somar "Diferença Yoobe vs Prio" onde "Yoobe mais caro"
= Quanto podemos economizar comprando do Prio
```

### **3. Produtos Prioritários**
```
Filtrar:
- Status = "Yoobe mais caro"
- Diferença > R$ 100
- Quantidade > 20

= Produtos onde temos prejuízo significativo
```

### **4. Fornecedores Mais Competitivos**
```
Agrupar por Fornecedor
Calcular média de "Diferença"
= Quais fornecedores têm melhores preços
```

---

## ✅ Checklist de Uso

- [ ] Abrir `gerar-csv-catalogo.html`
- [ ] Ver estatísticas (142 produtos)
- [ ] Conferir preview (primeiros 10)
- [ ] Clicar "Gerar e Baixar CSV"
- [ ] Arquivo baixado com sucesso ✅
- [ ] Abrir no Excel/Google Sheets
- [ ] Formatar colunas de preço
- [ ] Aplicar filtros
- [ ] Realizar análises

---

## 🐛 Troubleshooting

### **Problema: Acentos errados no Excel**
**Solução:**
```
1. Excel → Dados → De Texto/CSV
2. Origem do Arquivo: 65001 (UTF-8)
3. Delimitador: Vírgula
4. Avançar → Concluir
```

### **Problema: CSV vazio**
**Solução:**
```
1. Verificar se produtos-v6.1.js está carregando
2. F12 → Console → Ver erros
3. Recarregar página
```

### **Problema: Preços sem vírgula**
**Solução:**
```
Excel já usa vírgula como separador de campo.
Os preços estão corretos (com vírgula).
Ex: "420,00" = R$ 420,00
```

---

## 📊 Estatísticas Esperadas

| Métrica | Valor Esperado |
|---------|---------------|
| **Total Produtos** | 142 |
| **Com Preço Prio** | 40-60 (28-42%) |
| **Sem Preço Prio** | 80-100 (58-72%) |
| **Tamanho Arquivo** | ~50-100 KB |
| **Tempo Geração** | < 1 segundo |

---

## 🎁 Bônus: Análise Rápida no Excel

### **Criar Dashboard Automático**

```
1. Abrir CSV no Excel
2. Selecionar todos os dados (Ctrl+A)
3. Inserir → Tabela Dinâmica
4. Criar análises:

┌─────────────────────────────────────┐
│ Status Competitividade │ Qtd │ % │
├─────────────────────────────────────┤
│ Yoobe mais barato      │ 15  │25%│
│ Preço igual            │ 5   │ 8%│
│ Yoobe mais caro        │ 25  │42%│
│ Sem comparação         │ 97  │68%│
└─────────────────────────────────────┘

5. Inserir → Gráfico → Pizza
```

---

## ✅ Resultado Final

**Você terá:**
- ✅ CSV completo com 142 produtos
- ✅ Preços Prio + Preços Yoobe
- ✅ Análise de competitividade
- ✅ Dados prontos para análise
- ✅ Base para decisões estratégicas

**Pronto para usar!** 🚀

---

## 📞 Suporte

Se precisar de ajuda:
1. Ver console do navegador (F12)
2. Verificar se produtos-v6.1.js carregou
3. Testar em navegador diferente

**Sistema 100% funcional!** ✅
