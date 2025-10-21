# 🎨 GUIA VISUAL: DIFERENÇA ENTRE MODAIS

**Data:** 2025-10-21  
**Versão:** admin-v6.7.html  

---

## 🎯 DOIS TIPOS DE MODAL NO SISTEMA

O admin tem **2 modais diferentes** com propósitos diferentes:

| Modal | Cor Botão | Ícone | Propósito | Campos | Editável |
|-------|-----------|-------|-----------|--------|----------|
| **Visualização** | 🔵 Azul | 👁️ Olho | Ver detalhes | Texto | ❌ NÃO |
| **Edição/CRUD** | 🟣 Roxo | ✏️ Lápis | Editar dados | Input | ✅ SIM |

---

## 🔵 MODAL DE VISUALIZAÇÃO (Read-Only)

### Como Abrir:
1. Clique na **imagem** do produto
2. Clique no **nome** do produto
3. Clique no botão **azul com ícone de olho** (👁️)

### Aparência:

```
╔═══════════════════════════════════════════════════════════╗
║  Echo Dot 5ª Geração com Relógio                     [✕] ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  ┌────────────────┐  ┌─────────────────────────────────┐ ║
║  │                │  │  Informações Gerais             │ ║
║  │   [IMAGEM]     │  │  SKU:          ECHO-DOT-5       │ ║
║  │                │  │  Categoria:    Eletrônicos      │ ║
║  │                │  │  Fornecedor:   Amazon Brasil    │ ║
║  └────────────────┘  │  Quantidade:   50 unidades      │ ║
║                      └─────────────────────────────────┘ ║
║                                                           ║
║                      ┌─────────────────────────────────┐ ║
║                      │  💰 Precificação                │ ║
║                      │  Custo Base:    R$ 420,00       │ ║  ← TEXTO
║                      │  Preço Mercado: R$ 599,00       │ ║  ← TEXTO
║                      │  Preço Venda:   R$ 546,00       │ ║  ← TEXTO
║                      │  Lucro:         R$ 126,00 (30%) │ ║
║                      │  Margem:        30%             │ ║
║                      └─────────────────────────────────┘ ║
║                                                           ║
║  [🔗 Comprar Produto]  [🚀 Ir para Link Compra]         ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

### Características:
- ✅ Perfeito para **visualizar** informações rapidamente
- ❌ **NÃO permite edição** (todos os dados são texto estático)
- 📊 Mostra cálculos de lucro e margem
- 🔗 Botões de ação (comprar, ir para link)
- 🎨 Design limpo e organizado

### Quando Usar:
- ✓ Ver detalhes completos do produto
- ✓ Verificar preços e margens
- ✓ Acessar link de compra
- ✗ **NÃO use para editar dados**

---

## 🟣 MODAL DE EDIÇÃO/CRIAÇÃO (CRUD)

### Como Abrir:
1. Clique no botão **roxo com ícone de lápis** (✏️) **"Editar"**
2. Clique no botão **verde** **"+ Novo Produto"**

### Aparência:

```
╔═══════════════════════════════════════════════════════════╗
║  ✏️ Editar Produto - Echo Dot 5ª Geração             [✕] ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  📦 Informações Básicas                                   ║
║  ┌─────────────────────────────────────────────────────┐ ║
║  │ SKU *               Nome do Produto *               │ ║
║  │ ┌─────────────┐     ┌─────────────────────────────┐│ ║
║  │ │ ECHO-DOT-5  │     │ Echo Dot 5ª Geração        ││ ║  ← INPUT
║  │ └─────────────┘     └─────────────────────────────┘│ ║
║  │                                                     │ ║
║  │ Categoria *         Subcategoria *                 │ ║
║  │ ┌─────────────┐     ┌─────────────────────────────┐│ ║
║  │ │ Eletrônicos▼│     │ Smart Home                 ││ ║  ← SELECT
║  │ └─────────────┘     └─────────────────────────────┘│ ║
║  └─────────────────────────────────────────────────────┘ ║
║                                                           ║
║  💰 Precificação                                          ║
║  ┌─────────────────────────────────────────────────────┐ ║
║  │ Custo Base (R$) *   Preço Mercado (R$) *           │ ║
║  │ ┌─────────────┐     ┌─────────────────────────────┐│ ║
║  │ │ 420.00      │     │ 599.00                     ││ ║  ← INPUT EDITÁVEL ✅
║  │ └─────────────┘     └─────────────────────────────┘│ ║  ← INPUT EDITÁVEL ✅
║  │                                                     │ ║
║  │ Margem (%) *                                        │ ║
║  │ ┌─────────────┐                                    │ ║
║  │ │ 30          │                                    │ ║  ← INPUT EDITÁVEL ✅
║  │ └─────────────┘                                    │ ║
║  │                                                     │ ║
║  │ ┌───────────────────────────────────────────────┐ │ ║
║  │ │ Preço de Venda Calculado:   R$ 546,00       │ │ ║
║  │ └───────────────────────────────────────────────┘ │ ║
║  └─────────────────────────────────────────────────────┘ ║
║                                                           ║
║  📝 Descrição                                             ║
║  ┌─────────────────────────────────────────────────────┐ ║
║  │ Smart speaker com relógio LED e Alexa integrada...  │ ║  ← TEXTAREA
║  │                                                     │ ║
║  └─────────────────────────────────────────────────────┘ ║
║                                                           ║
║          [Cancelar]  [✅ Atualizar Produto]              ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

### Características:
- ✅ **TODOS os campos são editáveis** (inputs, selects, textareas)
- ✅ **custoBase:** Campo número editável
- ✅ **precoMercado:** Campo número editável
- ✅ **Recálculo automático:** Muda custoBase ou margem → precoVenda atualiza
- 💾 Botão "Atualizar Produto" ou "Adicionar Produto"
- ⏳ Loading spinner ao salvar
- ✅ Toast de confirmação

### Quando Usar:
- ✓ **Criar novo produto**
- ✓ **Editar dados de produto existente**
- ✓ **Alterar preços** (custoBase, precoMercado, margem)
- ✓ **Atualizar descrição e especificações**

---

## 🎬 FLUXO DE EDIÇÃO DE CUSTOS

### Passo a Passo:

```
1️⃣ Localizar Produto
   ↓
   Na lista de produtos, encontre o que deseja editar

2️⃣ Abrir Modal de Edição
   ↓
   Clique no botão ROXO ✏️ (NÃO no azul 👁️)

3️⃣ Editar Campos
   ↓
   ┌─────────────────────────────────┐
   │ Custo Base (R$) *               │
   │ ┌─────────────────────────────┐ │
   │ │ 420.00 ← CLIQUE AQUI       │ │  ← Campo editável
   │ └─────────────────────────────┘ │
   └─────────────────────────────────┘
   ↓
   Digite novo valor: 525.00
   ↓
   Preço Venda recalcula automaticamente

4️⃣ Salvar
   ↓
   Clique "Atualizar Produto"
   ↓
   Veja: [⏳ Salvando...]
   ↓
   Veja: ✅ Produto atualizado com sucesso!
   ↓
   Modal fecha automaticamente

5️⃣ Verificar
   ↓
   Produto atualizado na lista com novos valores
```

---

## 🔍 IDENTIFICAÇÃO RÁPIDA

### Como Saber Qual Modal Está Aberto?

| Elemento | Modal Visualização 🔵 | Modal Edição 🟣 |
|----------|----------------------|-----------------|
| **Título** | Nome do produto | "Editar Produto" ou "Novo Produto" |
| **Ícone no título** | Nenhum | ✏️ ou 🆕 |
| **Campos de preço** | Texto: "R$ 420,00" | Input: `[420.00]` com borda |
| **Botão principal** | "Comprar Produto" | "Atualizar Produto" / "Adicionar Produto" |
| **Pode digitar?** | ❌ NÃO | ✅ SIM |
| **Cursor ao passar** | Seta (→) | I-beam (I) |

### Teste Rápido:
```
Clique em um campo de preço:
→ Se NÃO aparece cursor piscando = Modal Visualização 🔵
→ Se aparece cursor piscando = Modal Edição 🟣 ✅
```

---

## 🎨 COMPARAÇÃO VISUAL: CAMPOS

### 🔵 Modal Visualização (Read-Only)

```
Custo Base: R$ 420,00
            ↑
            Texto estático
            Não tem borda
            Não pode clicar
```

### 🟣 Modal Edição (Editable)

```
Custo Base (R$) *
┌─────────────────────┐
│ 420.00             │ ← Input com borda
│                    │ ← Pode clicar e digitar
└─────────────────────┘
      ↑
   Campo editável
   Borda cinza
   Foco = borda verde
```

---

## 🧪 TESTE DEFINITIVO

### Para Confirmar que Campos São Editáveis:

1. Abra admin-v6.7.html
2. Encontre qualquer produto na lista
3. Clique no **botão ROXO ✏️** (não no azul!)
4. Veja o campo "Custo Base (R$)" com **borda cinza**
5. Clique dentro do campo
6. Veja **cursor piscando** (▮)
7. Veja borda mudar para **verde** (focus)
8. Digite qualquer número
9. Veja **texto mudando** enquanto digita
10. Veja **Preço de Venda** recalcular automaticamente

Se TODOS esses passos funcionam = ✅ **CAMPOS SÃO EDITÁVEIS**

Se algum passo falha:
- ⚠️ Pode estar no modal ERRADO (visualização em vez de edição)
- ⚠️ Pode estar usando versão antiga (não v6.7)
- ⚠️ Pode ter cache do navegador (pressione Ctrl+Shift+R)

---

## 📸 SCREENSHOT GUIDE

### O Que Você Deve Ver:

**❌ ERRADO - Modal de Visualização:**
```
╔════════════════════════════════╗
║  Echo Dot 5ª Geração      [✕] ║  ← Sem "Editar" no título
╠════════════════════════════════╣
║  Custo Base: R$ 420,00         ║  ← Texto, sem input
║  Preço Mercado: R$ 599,00      ║  ← Texto, sem input
╚════════════════════════════════╝
```

**✅ CORRETO - Modal de Edição:**
```
╔════════════════════════════════╗
║  ✏️ Editar Produto          [✕] ║  ← Tem "Editar" no título
╠════════════════════════════════╣
║  Custo Base (R$) *             ║  ← Label com asterisco
║  ┌──────────────────────────┐  ║
║  │ 420.00                   │  ║  ← Input com borda
║  └──────────────────────────┘  ║
║                                ║
║  Preço Mercado (R$) *          ║  ← Label com asterisco
║  ┌──────────────────────────┐  ║
║  │ 599.00                   │  ║  ← Input com borda
║  └──────────────────────────┘  ║
╚════════════════════════════════╝
```

---

## ✅ CHECKLIST DE VERIFICAÇÃO

Use este checklist para confirmar:

- [ ] Estou usando **admin-v6.7.html** (não v6.6 ou anterior)
- [ ] Cliquei no **botão ROXO ✏️** (não no azul 👁️)
- [ ] Vejo **"Editar Produto"** ou **"Novo Produto"** no título do modal
- [ ] Vejo **"Custo Base (R$) *"** com asterisco (campo obrigatório)
- [ ] Vejo **input com borda cinza** (não texto simples)
- [ ] Consigo **clicar dentro do campo** e ver cursor piscando
- [ ] Consigo **digitar números** no campo
- [ ] Vejo **Preço de Venda recalcular** quando mudo custoBase
- [ ] Consigo **salvar** as alterações com botão "Atualizar Produto"

Se TODOS os itens estão marcados ✅ = Campos são editáveis e funcionam perfeitamente!

---

## 🆘 TROUBLESHOOTING

### Problema: "Não consigo editar os campos"

**Diagnóstico:**

1. **Qual modal está aberto?**
   - Veja o título do modal
   - Se NÃO tem "Editar Produto" → Modal ERRADO
   - **Solução:** Feche e clique no botão ROXO ✏️

2. **Qual versão está usando?**
   - Olhe a URL: deve ser `/admin` ou `admin-v6.7.html`
   - Se for v6.6 ou anterior → Versão ERRADA
   - **Solução:** Acesse `/admin` ou limpe cache

3. **Cache do navegador?**
   - Navegador pode estar mostrando versão antiga
   - **Solução:** 
     - Ctrl + Shift + R (Windows/Linux)
     - Cmd + Shift + R (Mac)
     - F12 → Network → ✓ Disable cache

4. **CSS impedindo edição?**
   - Campos podem estar cobertos por elemento
   - **Solução:** F12 → Console → Ver erros

---

## 📞 SUPORTE

Se após todos esses testes você ainda não consegue editar:

1. **Tire screenshots:**
   - Tela completa do modal aberto
   - Console do navegador (F12)
   - URL da página

2. **Forneça informações:**
   - Navegador usado (Chrome, Firefox, etc.)
   - Versão do arquivo (admin-v6.7.html?)
   - Qual botão clicou para abrir modal
   - O que acontece quando tenta digitar

3. **Teste básico:**
   - Abra admin-v6.7.html em navegador privado/anônimo
   - Tente editar novamente
   - Se funcionar = problema de cache

---

**Resumo:** Os campos custoBase e precoMercado **SÃO editáveis** no modal de edição (botão roxo ✏️). Se você não consegue editar, está no modal errado (visualização, botão azul 👁️).

**Versão:** v6.7  
**Status:** ✅ FUNCIONANDO CORRETAMENTE  
**Última atualização:** 2025-10-21
