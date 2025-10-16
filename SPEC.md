# Sistema Black Friday Prio 2025 - Especificação Técnica v6.0.1

**Documento de Referência para Desenvolvimento**  
**Data:** 2025-10-15  
**Versão Base:** 6.0.1  
**Última Atualização:** Adicionadas features CRUD e formatação de preços  

---

## 📋 Visão Geral do Sistema

Sistema completo de gerenciamento e análise de produtos para campanha Black Friday 2025, desenvolvido em HTML/CSS/JavaScript puro, sem backend, com funcionalidades administrativas e interface para clientes.

---

## 🎯 Objetivos do Sistema

1. **Gestão Administrativa:** Controle completo de produtos, preços, margens e estoque
2. **Análise para Clientes:** Interface intuitiva para seleção e comparação de produtos
3. **Transparência de Preços:** Sistema de margem dinâmica com cálculos automáticos
4. **Experiência Premium:** Design moderno, responsivo e interativo

---

## 🏗️ Arquitetura do Sistema

### Estrutura de Arquivos

```
/
├── index.html                    # Página inicial com navegação
├── admin-v6.html                 # Sistema administrativo
├── cliente-analise.html          # Área de análise para clientes
├── catalogo-v5.2.html           # Catálogo visual (legacy)
├── produtos-v6.0.js             # Base de dados de produtos
├── BF-25-Sheet1.csv             # Planilha original de produtos
├── README.md                     # Documentação principal
├── SPEC.md                       # Este arquivo de especificação
├── CHANGELOG-v5.2.md            # Histórico de versões
└── backups/                      # Versões anteriores
    ├── produtos-v6.0-backup.js
    ├── admin-v6-backup.html
    └── cliente-analise-backup.html
```

---

## 📊 Estrutura de Dados

### Objeto Produto

```javascript
{
    id: Number,                    // ID único (1001-1999: planilha, 2000+: sugeridos)
    sku: String,                   // Código SKU único
    nome: String,                  // Nome completo do produto
    categoria: String,             // Categoria principal
    subcategoria: String,          // Subcategoria específica
    quantidade: Number,            // Quantidade em estoque/disponível
    custoBase: Number,             // Custo de aquisição (R$)
    precoMercado: Number,          // Preço de referência/concorrente (R$)
    margem: Number,                // Margem de lucro (%)
    precoVenda: Number,            // Preço final calculado (R$)
    badge: String,                 // Badge especial (opcional)
    fornecedor: String,            // Nome do fornecedor
    imagem: String,                // URL da imagem do produto
    descricao: String,             // Descrição detalhada
    especificacoes: Object,        // Specs técnicas em chave-valor
    estoque: String                // "Em Estoque" ou "Para Compra" (opcional)
}
```

### Arrays de Dados

```javascript
// Produtos da planilha original
const produtosPlanilha = [...]

// Produtos sugeridos pelo sistema
const produtosSugeridos = [...]

// Array unificado (usado globalmente)
window.todosOsProdutosV6 = [...produtosPlanilha, ...produtosSugeridos]
```

---

## 🧮 Cálculo de Margens e Preços

### Fórmulas de Cálculo

```javascript
// Preço de Venda = Custo Base × (1 + Margem/100)
precoVenda = custoBase * (1 + margem/100)

// Economia = Preço Mercado - Preço Venda
economia = precoMercado - precoVenda

// Economia Percentual = (Economia / Preço Mercado) × 100
economiaPercent = (economia / precoMercado) * 100

// Valor Total = Preço Venda × Quantidade
valorTotal = precoVenda * quantidade
```

### Regras de Negócio

1. **Margem Padrão:** 30% para produtos eletrônicos
2. **Margem Mínima:** 25% (configurável)
3. **Margem Máxima:** 35% (configurável)
4. **Arredondamento:** Preços sempre com 2 casas decimais
5. **Atualização Dinâmica:** Todos os valores recalculados em tempo real

### Formatação de Preços (v6.0.1+)

**Padrão Brasileiro:** R$ 1.000,33

```javascript
// Função de formatação universal
function formatarPreco(valor) {
    if (typeof valor !== 'number') valor = parseFloat(valor);
    return valor.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Exemplos de uso:
formatarPreco(420)         // "R$ 420,00"
formatarPreco(1323.50)     // "R$ 1.323,50"
formatarPreco(25789.99)    // "R$ 25.789,99"
formatarPreco(1000000)     // "R$ 1.000.000,00"
```

**Aplicação:**
- ✅ Todos os modais de produtos
- ✅ Tabelas de listagem
- ✅ Cards de produtos
- ✅ Editor de margem
- ✅ Formulários CRUD
- ✅ Estatísticas do dashboard
- ✅ Projeções de vendas

---

## 🎨 Design System

### Paleta de Cores

**Cores Principais:**
- Primary Blue: `#2563eb`
- Primary Purple: `#667eea`, `#764ba2`
- Secondary Purple: `#8b5cf6`
- Success Green: `#10b981`
- Warning Orange: `#f59e0b`
- Error Red: `#ef4444`

**Gradientes:**
```css
/* Admin Gradient */
background: linear-gradient(135deg, #2563eb, #1e40af);

/* Cliente Gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Badge Gradient */
background: linear-gradient(135deg, #ef4444, #dc2626);
```

### Tipografia

- **Fonte Principal:** Inter (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700, 800, 900
- **Tamanhos Base:**
  - H1: 3rem (48px)
  - H2: 2rem (32px)
  - H3: 1.5rem (24px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

### Componentes UI

**Cards:**
```css
.product-card {
    background: white;
    border-radius: 16px;
    padding: 16px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

**Badges:**
```css
.badge-novo {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    padding: 4px 10px;
    border-radius: 12px;
    animation: pulse 2s infinite;
}
```

**Modals:**
```css
.modal {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
}

.modal-content {
    background: white;
    border-radius: 20px;
    max-width: 1200px;
    animation: slideUp 0.3s ease;
}
```

---

## 🔧 Funcionalidades Principais

### 1. Sistema Administrativo (admin-v6.html)

#### Aba Dashboard
- **Cards de Estatísticas:**
  - Total de produtos
  - Produtos planilha vs sugeridos
  - Valor médio
  - Margem média
  
- **Gráficos (Chart.js):**
  - Distribuição por categoria (doughnut)
  - Top 10 produtos por valor (bar horizontal)
  
- **Tabela Top 20:**
  - Produtos mais valiosos

#### Sistema CRUD Completo (v6.0.1+)

**Localização:** Aba "Sugestões & Inovações 2025"  
**Botão:** "Adicionar Produto" (topo da página)

##### CREATE - Adicionar Produto

```javascript
// Estrutura do modal de criação
{
    mode: 'create',
    id: null,
    
    // Modal contém:
    informacoesBasicas: {
        sku: String,
        nome: String,
        categoria: Select,
        subcategoria: String,
        fornecedor: String,
        quantidade: Number
    },
    
    precificacao: {
        custoBase: Number,
        precoMercado: Number,
        margem: Number,
        precoVendaCalculado: Display (auto-calculo)
    },
    
    midia: {
        urlImagem: URL,
        imagePreview: Image (tempo real),
        descricao: TextArea
    },
    
    especificacoes: {
        // Array dinâmico de pares key-value
        items: [
            { nome: String, valor: String }
        ],
        addButton: Function // Adiciona nova especificação
    }
}

// Ao salvar:
1. Valida todos os campos obrigatórios
2. Gera ID único (auto-incremento)
3. Adiciona badge "NOVO 2025"
4. Insere em produtosSugeridos[]
5. Atualiza allProducts[]
6. Refresh todos os displays
7. Notificação de sucesso
```

##### READ - Visualizar Produto

```javascript
// Modal de detalhes completo
function showProductModal(productId) {
    display: {
        imagem: 'URL alta resolução',
        badge: 'Se houver',
        informacoes: {
            sku: 'Código único',
            categoria: 'Principal',
            subcategoria: 'Específica',
            fornecedor: 'Nome',
            quantidade: 'Em estoque'
        },
        precificacao: {
            custoBase: 'formatarPreco()',
            precoMercado: 'formatarPreco()',
            precoVenda: 'formatarPreco()',
            lucroUnitario: 'formatarPreco()',
            margem: 'Percentual'
        },
        especificacoes: 'Lista completa',
        descricao: 'Texto completo',
        projecaoVendas: {
            investimentoTotal: 'custoBase × quantidade',
            receitaPotencial: 'precoVenda × quantidade',
            lucroTotal: 'lucro × quantidade'
        },
        acoes: {
            editarMargem: Button,
            editarProduto: Button,
            deletarProduto: Button
        }
    }
}
```

##### UPDATE - Editar Produto

```javascript
// Abre formulário preenchido
function openCrudModal('edit', productId) {
    1. Busca produto por ID
    2. Preenche todos os campos do formulário
    3. Carrega especificações existentes
    4. Preview de imagem
    5. Calcula preço de venda
    
    // Ao atualizar:
    1. Valida campos
    2. Mantém ID original
    3. Preserva badge original
    4. Atualiza objeto no array
    5. Sincroniza produtosPlanilha[] ou produtosSugeridos[]
    6. Refresh displays
    7. Notificação de sucesso
}

// Campos editáveis:
- Todos os campos do formulário CREATE
- Mantém: ID, badge (se já existir)
```

##### DELETE - Deletar Produto

```javascript
function deletarProduto(productId) {
    // 1. Confirmação de segurança
    confirm(`
        ⚠️ Tem certeza que deseja deletar:
        "${produto.nome}"
        Esta ação não pode ser desfeita!
    `);
    
    // 2. Se confirmado:
    remove(allProducts, productId);
    remove(produtosSugeridos, productId);
    // ou
    remove(produtosPlanilha, productId);
    
    // 3. Atualizar displays
    renderDashboard();
    renderSugestoes();
    renderCatalogo();
    renderAnalise();
    updateStats();
    
    // 4. Notificação
    showNotification('🗑️ Produto deletado com sucesso!');
    
    // 5. Fechar modal
    closeModal();
}

// ⚠️ IMPORTANTE: Deleção é PERMANENTE
```

##### Validações do CRUD

```javascript
// Campos obrigatórios (*)
required: [
    'sku',
    'nome',
    'categoria',
    'subcategoria',
    'fornecedor',
    'quantidade',
    'custoBase',
    'precoMercado',
    'margem',
    'imagem',
    'descricao'
]

// Validações de tipo
validations: {
    sku: String,
    nome: String,
    quantidade: Number >= 0,
    custoBase: Number > 0,
    precoMercado: Number > 0,
    margem: Number (0-100),
    imagem: URL válida,
    descricao: String (min 10 chars)
}

// Auto-cálculos
autoCalculate: {
    precoVenda: custoBase * (1 + margem/100),
    id: Math.max(...allProducts.map(p => p.id)) + 1,
    badge: 'NOVO 2025' (apenas CREATE)
}
```
  - Ordenação por valor total (preço × quantidade)

#### Aba Produtos
- **Grid Responsivo:** 1-4 colunas conforme viewport
- **Filtros:**
  - Busca textual (nome, SKU, descrição)
  - Categoria (dropdown)
  - Subcategoria (dropdown dinâmico)
  - Origem (planilha/sugeridos)
  
- **Cards de Produto:**
  - Imagem 120×120px
  - Badge (se aplicável)
  - Nome truncado em 2 linhas
  - Preço de venda destacado
  - Margem e quantidade
  
- **Modal Detalhado:**
  - Imagem 400×400px
  - Análise de preços completa
  - Especificações técnicas
  - Botão de edição (futuro)

#### Aba Catálogo
- Iframe do `catalogo-v5.2.html`
- Sincronização automática de dados

#### Aba Análise
- **Métricas:**
  - Produtos alta margem (>30%)
  - Produtos médio valor (R$ 1k-5k)
  - Produtos premium (>R$ 5k)
  
- **Gráficos:**
  - Distribuição de preços (bar)
  - Quantidade por categoria (bar horizontal)
  
- **Lista de Subcategorias:**
  - Grid com contadores

### 2. Área de Análise Cliente (cliente-analise.html)

#### Interface Principal
- **Header Fixo:**
  - Logo e título
  - Botão "Minha Seleção" com badge contador
  
- **Barra de Estatísticas:**
  - Total produtos disponíveis
  - Produtos selecionados
  - Valor total seleção
  - Economia média
  
- **Filtros:**
  - Busca inteligente
  - Categoria (dropdown)
  - Faixa de preço (dropdown)
  - Chips de subcategoria

#### Grid de Produtos
- **Cards Interativos:**
  - Imagem 200×200px
  - Badge destacado
  - Preço riscado (mercado)
  - Preço final (com margem aplicada)
  - Indicador de economia (%)
  - Estado visual quando selecionado
  
#### Modal de Produto
- **Análise de Preços:**
  - Preço de mercado
  - Nosso preço (com margem)
  - Economia em R$ e %
  - **NÃO mostra margem para cliente**
  
- **Informações:**
  - SKU, categoria, subcategoria
  - Fornecedor
  - Disponibilidade
  
- **Especificações Técnicas:**
  - Grid responsivo
  - Pares chave-valor
  
- **Botões de Ação:**
  - Adicionar à seleção
  - Remover da seleção

#### Carrinho de Seleção
- **Resumo:**
  - Total de itens
  - Valor total
  - Economia total
  
- **Lista de Produtos:**
  - Card compacto por produto
  - Botão remover individual
  
- **Ações:**
  - Exportar seleção (JSON)
  - Limpar tudo

#### Persistência
- **LocalStorage:**
  - Chave: `selectedProducts`
  - Valor: Array de IDs dos produtos
  - Auto-save ao adicionar/remover
  - Auto-load ao carregar página

---

## 🔍 Sistema de Busca e Filtros

### Algoritmo de Busca

```javascript
function applyFilters() {
    const search = searchInput.toLowerCase()
    
    filteredProducts = allProducts.filter(product => {
        // Busca em múltiplos campos
        const matchSearch = 
            product.nome.toLowerCase().includes(search) ||
            product.sku.toLowerCase().includes(search) ||
            product.descricao?.toLowerCase().includes(search) ||
            product.fornecedor?.toLowerCase().includes(search)
        
        // Filtros de categoria
        const matchCategory = !categoryFilter || 
            product.categoria === categoryFilter
        
        const matchSubcategory = !subcategoryFilter || 
            product.subcategoria === subcategoryFilter
        
        // Filtro de preço
        const matchPrice = checkPriceRange(product.precoVenda, priceFilter)
        
        return matchSearch && matchCategory && 
               matchSubcategory && matchPrice
    })
    
    renderProducts(filteredProducts)
}
```

### Filtros Dinâmicos

- **Subcategoria:** Atualizada automaticamente ao selecionar categoria
- **Preço:** Faixas predefinidas (R$ 0-500, 500-1k, 1k-2k, 2k-5k, 5k+)
- **Origem:** Planilha (1001-1999) vs Sugeridos (2000+)

---

## 📱 Responsividade

### Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) {  /* sm */
    /* 2 colunas grid */
}

@media (min-width: 768px) {  /* md */
    /* 3 colunas grid */
    /* Menu horizontal */
}

@media (min-width: 1024px) { /* lg */
    /* 4 colunas grid */
    /* Sidebar visível */
}

@media (min-width: 1280px) { /* xl */
    /* Layout wide */
}
```

### Adaptações Mobile

- Menu hamburguer em mobile
- Modais full-screen em mobile
- Grid 1-2 colunas em mobile
- Tabs horizontais scrolláveis
- Touch-friendly buttons (min 44×44px)
- Imagens otimizadas

---

## 🖼️ Sistema de Imagens

### Fontes Prioritárias

1. **Amazon CDN** (preferencial)
   ```
   https://m.media-amazon.com/images/I/{ID}_AC_SL1500_.jpg
   ```

2. **Fabricantes Oficiais:**
   - Apple, Samsung, Sony, etc.

3. **Fallback:**
   ```javascript
   imagem: imagem || 'https://via.placeholder.com/400x400?text=Produto'
   ```

### Especificações

- **Formato:** JPG ou PNG
- **Resolução Mínima:** 400×400px
- **Resolução Ideal:** 800×800px
- **Peso Máximo:** 200KB por imagem
- **Aspect Ratio:** 1:1 (quadrado)

### Otimização

```javascript
// Lazy loading (futuro)
<img loading="lazy" src="..." alt="...">

// Responsive images (futuro)
<img srcset="image-400.jpg 400w,
             image-800.jpg 800w"
     sizes="(max-width: 768px) 100vw, 400px">
```

---

## 💾 Persistência de Dados

### LocalStorage

**Chaves Utilizadas:**

```javascript
// Seleção de produtos do cliente
localStorage.setItem('selectedProducts', JSON.stringify(productIds))

// Filtros salvos (futuro)
localStorage.setItem('savedFilters', JSON.stringify(filters))

// Preferências de visualização (futuro)
localStorage.setItem('viewPreferences', JSON.stringify(prefs))
```

**Funções Helper:**

```javascript
function saveSelection() {
    const ids = selectedProducts.map(p => p.id)
    localStorage.setItem('selectedProducts', JSON.stringify(ids))
}

function loadSavedSelection() {
    const saved = localStorage.getItem('selectedProducts')
    if (saved) {
        const ids = JSON.parse(saved)
        selectedProducts = allProducts.filter(p => ids.includes(p.id))
    }
}
```

---

## 📊 Sistema de Gráficos (Chart.js)

### Configuração Global

```javascript
Chart.defaults.font.family = 'Inter'
Chart.defaults.font.size = 12
Chart.defaults.color = '#6b7280'
```

### Tipos de Gráficos

**1. Doughnut (Categorias):**
```javascript
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: categories,
        datasets: [{
            data: counts,
            backgroundColor: colorPalette
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'right' }
        }
    }
})
```

**2. Bar Horizontal (Top Produtos):**
```javascript
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: productNames,
        datasets: [{
            label: 'Valor Total (R$)',
            data: values,
            backgroundColor: '#3b82f6'
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false
    }
})
```

---

## 🔐 Segurança e Boas Práticas

### Sanitização de Dados

```javascript
function sanitizeHTML(str) {
    const div = document.createElement('div')
    div.textContent = str
    return div.innerHTML
}
```

### Validação de Inputs

```javascript
function validateProduct(product) {
    if (!product.id || !product.nome || !product.custoBase) {
        throw new Error('Produto inválido')
    }
    if (product.margem < 0 || product.margem > 100) {
        throw new Error('Margem inválida')
    }
    return true
}
```

### Tratamento de Erros

```javascript
try {
    // Operação
} catch (error) {
    console.error('Erro:', error)
    showNotification('Erro ao processar', 'error')
}
```

---

## 🚀 Performance

### Otimizações Implementadas

1. **Debounce em Busca:**
   ```javascript
   let searchTimeout
   searchInput.addEventListener('input', () => {
       clearTimeout(searchTimeout)
       searchTimeout = setTimeout(applyFilters, 300)
   })
   ```

2. **Lazy Rendering:**
   - Renderizar apenas produtos visíveis
   - Scroll infinito (futuro)

3. **Memoização:**
   ```javascript
   const memoizedCalculations = new Map()
   ```

4. **Evitar Re-renders:**
   - Comparar estados antes de atualizar DOM
   - Virtual scrolling para listas grandes

---

## 📦 Deploy Cloudflare Pages

### Estrutura para Deploy

```
/dist
├── index.html
├── admin-v6.html
├── cliente-analise.html
├── catalogo-v5.2.html
├── produtos-v6.0.js
├── assets/
│   ├── images/
│   └── fonts/
└── _headers (configuração Cloudflare)
```

### Headers (_headers)

```
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  
/*.js
  Content-Type: application/javascript; charset=utf-8
  Cache-Control: public, max-age=31536000
  
/*.html
  Content-Type: text/html; charset=utf-8
  Cache-Control: public, max-age=3600
```

### Build Command

```bash
# Não necessário (site estático)
# Build command: (none)
# Output directory: /
```

---

## 🧪 Testes

### Checklist de Testes

- [ ] Todos os 122+ produtos carregam corretamente
- [ ] Imagens carregam sem erros 404
- [ ] Filtros funcionam isoladamente e combinados
- [ ] Busca retorna resultados relevantes
- [ ] Modal abre/fecha corretamente
- [ ] Cálculos de margem estão corretos
- [ ] Seleção persiste após reload
- [ ] Exportação gera JSON válido
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Gráficos renderizam corretamente
- [ ] Performance adequada (< 3s load)

---

## 📋 Categorias e Subcategorias

### Hierarquia Completa

```
Eletrônicos
├── Wearables (15 produtos)
├── Tablets (10 produtos)
├── Laptops (10 produtos)
├── Áudio (15 produtos)
├── Câmeras (10 produtos)
├── Smart Home (10 produtos)
├── Gaming (10 produtos)
├── Acessórios (10 produtos)
├── Drones (5 produtos)
└── Projetores (5 produtos)

Nespresso
├── Máquinas de Café (variadas)
├── Acessórios Nespresso
└── Xícaras e Porta-cápsulas

Esporte
├── Mochilas
└── Acessórios fitness

Experiências
├── Restaurantes (vouchers)
├── Passeios e Tours
├── Spa e Bem-estar
└── Pousadas

Geral
├── Eletrodomésticos
├── Saúde e Bem-estar
└── Casa
```

---

## 🔄 Versionamento

### Convenção de Versões

**Formato:** `MAJOR.MINOR.PATCH`

- **MAJOR:** Mudanças incompatíveis (ex: 6.0)
- **MINOR:** Novas funcionalidades compatíveis (ex: 6.1)
- **PATCH:** Correções de bugs (ex: 6.0.1)

### Git Workflow (Futuro)

```bash
# Branch principal
main (production)

# Branch de desenvolvimento
develop

# Feature branches
feature/nome-da-feature

# Hotfix branches
hotfix/descricao
```

---

## 📚 Dependências Externas

### CDNs Utilizadas

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Awesome 6.4.0 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Google Fonts (Inter) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

---

## 🐛 Troubleshooting

### Problemas Comuns

**1. Produtos não carregam:**
```javascript
// Verificar se produtos-v6.0.js foi carregado
console.log(window.produtosPlanilha)
console.log(window.produtosSugeridos)
```

**2. Imagens não aparecem:**
```javascript
// Verificar URLs
allProducts.forEach(p => {
    if (!p.imagem || p.imagem.includes('placeholder')) {
        console.warn('Produto sem imagem:', p.nome)
    }
})
```

**3. Filtros não funcionam:**
```javascript
// Verificar event listeners
console.log('Search input:', document.getElementById('searchInput'))
```

---

## 📞 Contato e Suporte

**Desenvolvedor:** Sistema v6.0  
**Data Criação:** 2025-10-15  
**Última Atualização:** 2025-10-15  

---

## 📄 Licença

Propriedade de Prio - Black Friday 2025  
Todos os direitos reservados

---

**Este documento deve ser usado como referência para todas as futuras versões e modificações do sistema.**

**Versão do Documento:** 1.0  
**Status:** ✅ Completo e Validado
