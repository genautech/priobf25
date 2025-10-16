# 📚 Documentação Completa - Sistema Black Friday 2025

**Versão:** 6.0.1  
**Data:** 15 de Outubro de 2025  
**Status:** ✅ Produção  
**URL:** https://priobf25.pages.dev

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura do Sistema](#arquitetura-do-sistema)
3. [Páginas e Funcionalidades](#páginas-e-funcionalidades)
4. [Sistema CRUD](#sistema-crud)
5. [Editor de Margem](#editor-de-margem)
6. [Formatação de Preços](#formatação-de-preços)
7. [Base de Dados](#base-de-dados)
8. [Guia de Uso](#guia-de-uso)
9. [Manutenção e Atualizações](#manutenção-e-atualizações)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Visão Geral

Sistema completo de gerenciamento de produtos para campanha Black Friday 2025, desenvolvido como **website estático** com funcionalidades avançadas de CRUD, análise de produtos e gestão de margem de lucro.

### Objetivos Principais

✅ **Gestão de Produtos**: Sistema CRUD completo sem necessidade de editar código  
✅ **Análise Estratégica**: Interface para clientes analisarem produtos e selecionarem itens  
✅ **Controle de Margem**: Editor visual para ajustar margem de lucro dinamicamente  
✅ **Privacidade**: Clientes veem preços finais sem visualizar margem de lucro  
✅ **Padrão Brasileiro**: Todos os preços formatados no padrão R$ 1.000,33  

### Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3 (Tailwind via CDN), JavaScript ES6+
- **Armazenamento**: localStorage (navegador)
- **Gráficos**: Chart.js 4.4.0
- **Ícones**: Font Awesome 6.4.0
- **Deploy**: Cloudflare Pages
- **Versionamento**: GitHub

---

## 🏗️ Arquitetura do Sistema

### Estrutura de Arquivos

```
priobf25/
├── index.html                          # Página inicial
├── admin-v6.html                       # Painel administrativo
├── cliente-analise-v6.html             # Interface para clientes
├── catalogo-v5.2.html                  # Catálogo público
├── produtos-v6.0.js                    # Base de dados (142 produtos)
├── _headers                            # Configuração de segurança
├── _redirects                          # Rotas limpas
├── README.md                           # Documentação principal
├── SPEC.md                             # Especificações técnicas
├── SPEC-COMPLETA.md                    # Especificações detalhadas
├── VERSAO-ATUAL.md                     # Status da versão
├── CRUD-PRODUTOS.md                    # Guia do CRUD
└── DEPLOY-CLOUDFLARE-PASSO-A-PASSO.md # Tutorial de deploy
```

### Rotas do Sistema

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | index.html | Página inicial com menu |
| `/admin` | admin-v6.html | Painel administrativo |
| `/cliente` | cliente-analise-v6.html | Área do cliente |
| `/catalogo` | catalogo-v5.2.html | Catálogo público |

### Fluxo de Dados

```
produtos-v6.0.js (Fonte de Dados)
        ↓
localStorage (Cache Local)
        ↓
    Interface Web
        ↓
  Cálculos Dinâmicos
        ↓
   Exibição Formatada
```

---

## 🌐 Páginas e Funcionalidades

### 1️⃣ index.html - Página Inicial

**Funcionalidades:**
- Design moderno com gradiente animado
- Menu de navegação principal
- Links para todas as áreas do sistema
- Responsivo (mobile-first)

**Elementos Visuais:**
- Hero section com título e subtítulo
- Cards de navegação com ícones
- Rodapé com informações

---

### 2️⃣ admin-v6.html - Painel Administrativo

**📊 Dashboard Principal**

Estatísticas em tempo real:
- Total de produtos
- Valor total de investimento
- Margem média aplicada
- Receita estimada
- Lucro projetado

**🔧 Funcionalidades Principais**

#### A. Sistema CRUD Completo

**CREATE - Adicionar Produto**
```javascript
Campos disponíveis:
- ID (auto-gerado: BF + número)
- SKU
- Nome do produto
- Categoria
- Subcategoria
- Quantidade em estoque
- Custo base (R$)
- Preço de mercado (R$)
- Margem de lucro (%)
- Badge promocional
- Fornecedor
- URL da imagem
- Descrição
- Especificações técnicas (dinâmicas)
```

**Validações:**
- Campos obrigatórios: nome, categoria, custo base
- Valores numéricos positivos
- ID único automático
- Preview de imagem em tempo real

**READ - Visualizar Produtos**
- Lista completa de produtos em cards
- Modal de detalhes expandido
- Filtros e busca
- Ordenação personalizável

**UPDATE - Editar Produto**
- Modal pré-preenchido com dados atuais
- Todos os campos editáveis
- Recalculo automático de preços
- Validação antes de salvar

**DELETE - Remover Produto**
- Confirmação obrigatória
- Remove de todas as visualizações
- Atualiza estatísticas automaticamente

#### B. Editor Visual de Margem

**Interface do Editor:**
```
┌──────────────────────────────────────┐
│  💰 EDITOR DE MARGEM DE LUCRO       │
├──────────────────────────────────────┤
│  Margem Atual: 35%                   │
│  ████████████░░░░░░░░░░░░ [Slider]  │
│                                       │
│  Presets Rápidos:                    │
│  [20%] [25%] [30%] [35%] [40%]      │
│                                       │
│  📊 Calculadora Instantânea          │
│  Custo: R$ 1.200,00                  │
│  Margem: 35%                         │
│  = Preço Venda: R$ 1.620,00          │
│                                       │
│  [Aplicar a Todos] [Salvar]          │
└──────────────────────────────────────┘
```

**Funcionalidades:**
- Slider interativo (0% - 100%)
- Input numérico direto
- Presets rápidos (20%, 25%, 30%, 35%, 40%)
- Calculadora em tempo real
- Aplicação em massa ou individual
- Persistência em localStorage

**Fórmula de Cálculo:**
```javascript
precoVenda = custoBase × (1 + margem/100)

Exemplo:
Custo Base: R$ 1.200,00
Margem: 35%
Preço Venda: R$ 1.200,00 × 1.35 = R$ 1.620,00
```

#### C. Gráficos e Visualizações

**Gráfico de Distribuição por Categoria:**
- Tipo: Doughnut (rosca)
- Mostra quantidade de produtos por categoria
- Cores distintas para cada categoria
- Interativo (hover mostra detalhes)

**Gráfico de Top 10 Produtos por Lucro:**
- Tipo: Barra horizontal
- Ordenado por lucro estimado
- Cores em gradiente
- Valores formatados em R$

#### D. Tabela Detalhada de Produtos

**Colunas:**
1. Imagem (thumbnail)
2. Nome + SKU
3. Categoria/Subcategoria
4. Estoque
5. Custo Base (R$)
6. Margem (%)
7. Preço Venda (R$)
8. Lucro Estimado (R$)
9. Ações (Editar/Excluir)

**Recursos:**
- Ordenação por coluna
- Busca em tempo real
- Filtro por categoria
- Paginação (10/25/50/100 itens)
- Export para CSV (futuro)

---

### 3️⃣ cliente-analise-v6.html - Área do Cliente

**🎯 Objetivo:** Interface onde clientes analisam produtos e fazem seleções sem visualizar margens de lucro.

**Funcionalidades Principais:**

#### A. Visualização de Produtos

**Produtos da Planilha (32 itens)**
- Grid responsivo de cards
- Cada card mostra:
  - Imagem do produto
  - Nome
  - Categoria
  - Badge promocional
  - **Custo base** (visível)
  - **Preço de venda** (visível)
  - **Lucro** (visível)
  - ⚠️ **Margem %** (OCULTA para cliente)
  
**Produtos Sugeridos (110 itens)**
- Mesma estrutura de visualização
- Separado em seção própria
- Identificação clara de "sugeridos"

#### B. Sistema de Seleção

**Funcionalidades:**
- Checkbox em cada produto
- Contador de selecionados
- Multi-seleção permitida
- Persistência em localStorage

**Estatísticas de Seleção:**
```
┌────────────────────────────────┐
│  📊 RESUMO DA SELEÇÃO         │
├────────────────────────────────┤
│  Produtos: 12 selecionados     │
│  Investimento: R$ 24.500,00    │
│  Receita Est.: R$ 33.075,00    │
│  Lucro Est.: R$ 8.575,00       │
└────────────────────────────────┘
```

#### C. Comparação Lado a Lado

**Tabela Comparativa:**
- Até 4 produtos simultaneamente
- Colunas: Nome, Categoria, Custo, Preço, Lucro
- Botão "Adicionar à seleção"
- Limpar comparação

#### D. Filtros e Busca

**Filtros Disponíveis:**
- Por categoria (dropdown)
- Por faixa de preço
- Por disponibilidade em estoque
- Busca por nome/descrição

**Ordenação:**
- Menor preço
- Maior preço
- Maior lucro
- Nome A-Z

---

### 4️⃣ catalogo-v5.2.html - Catálogo Público

**🏪 Objetivo:** Vitrine pública de produtos para visitantes.

**Funcionalidades:**
- Grid de produtos responsivo
- Modal de detalhes completo
- Filtros por categoria
- Busca por texto
- Sistema de badges
- Informações detalhadas

**Diferenças da área do cliente:**
- Não mostra informações financeiras
- Foco em características do produto
- Layout mais visual/comercial

---

## 🔧 Sistema CRUD

### Visão Técnica Detalhada

#### Estrutura de Dados

```javascript
// Modelo de Produto
const produto = {
    id: "BF001",                    // String única
    sku: "PROD-2024-001",           // String
    nome: "Nome do Produto",        // String (obrigatório)
    categoria: "Eletrônicos",       // String (obrigatório)
    subcategoria: "Smartphones",    // String
    quantidade: 50,                 // Number
    custoBase: 1200.00,            // Number (obrigatório)
    precoMercado: 1800.00,         // Number
    margem: 35,                     // Number (%)
    precoVenda: 1620.00,           // Number (calculado)
    badge: "Oferta Especial",      // String
    fornecedor: "Fornecedor XYZ",  // String
    imagem: "https://...",         // String (URL)
    descricao: "Descrição...",     // String
    especificacoes: [              // Array de objetos
        { chave: "Cor", valor: "Preto" },
        { chave: "Peso", valor: "200g" }
    ]
};
```

#### Funções Principais

**1. openCrudModal(mode, productId)**
```javascript
// Abre modal em modo CREATE ou EDIT
// mode: 'create' | 'edit'
// productId: ID do produto (apenas em EDIT)

Exemplo:
openCrudModal('create');           // Adicionar novo
openCrudModal('edit', 'BF001');    // Editar existente
```

**2. salvarProdutoCrud()**
```javascript
// Salva produto (novo ou editado)
// Executa validações
// Calcula preço de venda
// Atualiza arrays globais
// Persiste em localStorage
// Atualiza interface
```

**3. deletarProduto(productId)**
```javascript
// Remove produto
// Pede confirmação
// Remove de arrays
// Atualiza localStorage
// Atualiza interface
```

**4. calcularPrecoVenda()**
```javascript
// Calcula preço de venda em tempo real
// Chamado ao alterar custo ou margem
// Atualiza campo no formulário

Fórmula:
precoVenda = custoBase * (1 + margem/100)
```

**5. previewImage()**
```javascript
// Mostra preview da imagem ao digitar URL
// Valida URL
// Exibe mensagem de erro se inválida
```

**6. addEspecificacao(chave, valor)**
```javascript
// Adiciona par chave-valor de especificação
// Campos dinâmicos no formulário
// Permite múltiplas especificações
```

#### Validações Implementadas

```javascript
// Validações obrigatórias
✓ Nome não pode estar vazio
✓ Categoria não pode estar vazia
✓ Custo base deve ser número positivo
✓ Quantidade deve ser número inteiro positivo
✓ Margem deve estar entre 0 e 100
✓ ID deve ser único

// Validações de formato
✓ URLs de imagem devem ser válidas
✓ Números devem ter formato correto
✓ Especificações devem ter chave e valor
```

#### Persistência de Dados

```javascript
// Estrutura no localStorage
{
    "produtos-planilha": [...],      // Array de produtos da planilha
    "produtos-sugeridos": [...],     // Array de produtos sugeridos
    "margem-personalizada": 35,      // Margem atual em %
    "produtos-selecionados": [...]   // IDs dos produtos selecionados
}
```

---

## 💰 Editor de Margem

### Funcionamento Detalhado

#### Interface do Usuário

**Componentes:**
1. **Slider Visual** (0-100%)
2. **Input Numérico** (sincronizado com slider)
3. **Botões de Preset** (valores pré-definidos)
4. **Calculadora em Tempo Real**
5. **Botões de Ação**

#### Presets Disponíveis

```javascript
const presets = [
    { label: "20%", valor: 20, cor: "#10B981" },  // Verde
    { label: "25%", valor: 25, cor: "#3B82F6" },  // Azul
    { label: "30%", valor: 30, cor: "#8B5CF6" },  // Roxo
    { label: "35%", valor: 35, cor: "#F59E0B" },  // Laranja
    { label: "40%", valor: 40, cor: "#EF4444" }   // Vermelho
];
```

#### Aplicação de Margem

**Modo 1: Aplicar a Todos**
```javascript
function aplicarMargemGlobal(novaMargem) {
    // Atualiza todos os produtos
    produtosPlanilha.forEach(p => {
        p.margem = novaMargem;
        p.precoVenda = p.custoBase * (1 + novaMargem/100);
    });
    
    produtosSugeridos.forEach(p => {
        p.margem = novaMargem;
        p.precoVenda = p.custoBase * (1 + novaMargem/100);
    });
    
    // Salva em localStorage
    salvarDados();
    
    // Atualiza interface
    atualizarTodosOsComponentes();
}
```

**Modo 2: Margem Individual**
```javascript
function aplicarMargemIndividual(productId, novaMargem) {
    const produto = encontrarProduto(productId);
    produto.margem = novaMargem;
    produto.precoVenda = produto.custoBase * (1 + novaMargem/100);
    
    salvarDados();
    atualizarCard(productId);
}
```

#### Calculadora em Tempo Real

```javascript
function calcularExemplo(custoBase, margem) {
    const precoVenda = custoBase * (1 + margem/100);
    const lucro = precoVenda - custoBase;
    const margemReal = (lucro / custoBase) * 100;
    
    return {
        custoBase: formatarPreco(custoBase),
        margem: margem.toFixed(1) + '%',
        precoVenda: formatarPreco(precoVenda),
        lucro: formatarPreco(lucro),
        margemReal: margemReal.toFixed(2) + '%'
    };
}
```

**Exemplo Visual:**
```
┌────────────────────────────────────┐
│  Exemplo de Cálculo:               │
├────────────────────────────────────┤
│  Custo Base:    R$ 1.200,00       │
│  Margem:        35%                │
│  ─────────────────────────         │
│  Preço Venda:   R$ 1.620,00       │
│  Lucro:         R$ 420,00         │
│  ROI:           35,00%             │
└────────────────────────────────────┘
```

---

## 💵 Formatação de Preços

### Padrão Brasileiro Implementado

**Formato:** `R$ 1.234,56`

#### Função Principal

```javascript
function formatarPreco(valor) {
    // Converte para número se necessário
    if (typeof valor !== 'number') {
        valor = parseFloat(valor) || 0;
    }
    
    // Formata no padrão brasileiro
    return valor.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
```

#### Exemplos de Uso

```javascript
formatarPreco(1200);          // "R$ 1.200,00"
formatarPreco(1234.56);       // "R$ 1.234,56"
formatarPreco(999999.99);     // "R$ 999.999,99"
formatarPreco(0.50);          // "R$ 0,50"
formatarPreco("1500");        // "R$ 1.500,00"
```

#### Aplicação no Sistema

**Locais onde a formatação é aplicada:**

1. **admin-v6.html** (65+ pontos)
   - Cards de estatísticas
   - Tabela de produtos
   - Modal de detalhes
   - Formulário CRUD
   - Editor de margem
   - Gráficos (tooltips)
   - Calculadora

2. **cliente-analise-v6.html** (20+ pontos)
   - Cards de produtos
   - Modal de detalhes
   - Tabela de comparação
   - Estatísticas de seleção
   - Resumo de investimento

3. **catalogo-v5.2.html**
   - Preços de produtos
   - Ofertas especiais

#### Comparação Antes/Depois

```javascript
// ANTES (inconsistente)
"R$ 1200.5"
"1.200,50"
"R$1200,5"
"1200.50"

// DEPOIS (padronizado)
"R$ 1.200,50"
"R$ 1.200,50"
"R$ 1.200,50"
"R$ 1.200,50"
```

---

## 📦 Base de Dados

### produtos-v6.0.js

#### Estrutura Geral

```javascript
// Array 1: Produtos da Planilha (32 itens)
const produtosPlanilha = [
    {
        id: "BF001",
        sku: "PROD-2024-001",
        nome: "Smart TV 55\" 4K",
        categoria: "Eletrônicos",
        subcategoria: "TVs",
        quantidade: 20,
        custoBase: 1899.00,
        precoMercado: 2999.00,
        margem: 35,
        precoVenda: 2563.65,
        badge: "Oferta Black Friday",
        fornecedor: "Samsung Brasil",
        imagem: "https://m.media-amazon.com/images/...",
        descricao: "Smart TV 55 polegadas...",
        especificacoes: [
            { chave: "Resolução", valor: "4K UHD" },
            { chave: "Sistema", valor: "Tizen" }
        ]
    },
    // ... mais 31 produtos
];

// Array 2: Produtos Sugeridos (110 itens)
const produtosSugeridos = [
    {
        // Mesma estrutura
    },
    // ... mais 109 produtos
];
```

#### Categorias Disponíveis

```javascript
const categorias = {
    "Eletrônicos": {
        subcategorias: [
            "Smartphones",
            "TVs",
            "Notebooks",
            "Tablets",
            "Áudio"
        ],
        quantidade: 45
    },
    "Eletrodomésticos": {
        subcategorias: [
            "Refrigeradores",
            "Fogões",
            "Micro-ondas",
            "Lavadoras"
        ],
        quantidade: 28
    },
    "Casa e Decoração": {
        subcategorias: [
            "Móveis",
            "Iluminação",
            "Têxtil",
            "Organização"
        ],
        quantidade: 22
    },
    "Esportes": {
        subcategorias: [
            "Fitness",
            "Outdoor",
            "Equipamentos"
        ],
        quantidade: 18
    },
    "Beleza": {
        subcategorias: [
            "Perfumes",
            "Cosméticos",
            "Cuidados"
        ],
        quantidade: 15
    },
    "Moda": {
        subcategorias: [
            "Roupas",
            "Calçados",
            "Acessórios"
        ],
        quantidade: 14
    }
};

// Total: 142 produtos
```

#### Faixas de Preço

```javascript
const distribuicaoPrecos = {
    "R$ 0 - R$ 500": 38 produtos,
    "R$ 500 - R$ 1.000": 42 produtos,
    "R$ 1.000 - R$ 2.000": 35 produtos,
    "R$ 2.000 - R$ 5.000": 20 produtos,
    "R$ 5.000+": 7 produtos
};
```

#### Estatísticas da Base

```javascript
const estatisticas = {
    totalProdutos: 142,
    produtosPlanilha: 32,
    produtosSugeridos: 110,
    
    custoTotal: 178450.00,        // R$ 178.450,00
    receitaEstimada: 240907.50,   // R$ 240.907,50
    lucroEstimado: 62457.50,      // R$ 62.457,50
    margemMedia: 35,              // 35%
    
    menorPreco: 39.90,            // R$ 39,90
    maiorPreco: 8999.00,          // R$ 8.999,00
    precoMedio: 1257.04,          // R$ 1.257,04
    
    imagensAmazon: 142,           // 100% das imagens
    imagensVerificadas: true
};
```

#### Campos Detalhados

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `id` | String | ✅ | Identificador único (BF + número) |
| `sku` | String | ❌ | Código do produto |
| `nome` | String | ✅ | Nome do produto |
| `categoria` | String | ✅ | Categoria principal |
| `subcategoria` | String | ❌ | Subcategoria |
| `quantidade` | Number | ❌ | Quantidade em estoque |
| `custoBase` | Number | ✅ | Custo de aquisição (R$) |
| `precoMercado` | Number | ❌ | Preço de mercado (R$) |
| `margem` | Number | ✅ | Margem de lucro (%) |
| `precoVenda` | Number | ✅ | Preço final calculado (R$) |
| `badge` | String | ❌ | Badge promocional |
| `fornecedor` | String | ❌ | Nome do fornecedor |
| `imagem` | String | ❌ | URL da imagem (Amazon CDN) |
| `descricao` | String | ❌ | Descrição detalhada |
| `especificacoes` | Array | ❌ | Array de {chave, valor} |

---

## 📖 Guia de Uso

### Para Administradores

#### 1. Acessar o Painel Admin

```
URL: https://priobf25.pages.dev/admin
```

#### 2. Adicionar Novo Produto

**Passo a passo:**

1. Clique no botão "➕ Adicionar Produto"
2. Preencha o formulário:
   - **Aba 1 - Informações Básicas:**
     - Nome (obrigatório)
     - SKU
     - Categoria (obrigatório)
     - Subcategoria
     - Quantidade em estoque
   
   - **Aba 2 - Precificação:**
     - Custo base (obrigatório)
     - Preço de mercado
     - Margem de lucro (%)
     - Preço de venda (calculado automaticamente)
   
   - **Aba 3 - Imagem e Descrição:**
     - URL da imagem (mostra preview)
     - Descrição detalhada
     - Badge promocional
     - Fornecedor
   
   - **Aba 4 - Especificações Técnicas:**
     - Adicione pares chave-valor
     - Exemplo: Cor → Preto

3. Clique em "💾 Salvar Produto"
4. Produto aparece na lista automaticamente

#### 3. Editar Produto Existente

1. Localize o produto na lista/tabela
2. Clique no botão "✏️ Editar"
3. Modal abre com dados pré-preenchidos
4. Modifique os campos desejados
5. Clique em "💾 Atualizar Produto"

#### 4. Excluir Produto

1. Localize o produto
2. Clique no botão "🗑️ Excluir"
3. Confirme a exclusão
4. Produto é removido permanentemente

#### 5. Ajustar Margem de Lucro

**Método 1: Editor Visual**
1. Clique na aba "💰 Editor de Margem"
2. Use o slider ou digite o valor
3. Visualize o cálculo em tempo real
4. Clique em "Aplicar a Todos"

**Método 2: Presets Rápidos**
1. Clique em um dos botões de preset (20%, 25%, 30%, 35%, 40%)
2. Margem é aplicada instantaneamente

**Método 3: Margem Individual**
1. Edite um produto específico
2. Altere apenas a margem desse produto
3. Salve

#### 6. Visualizar Estatísticas

Dashboard mostra automaticamente:
- Total de produtos
- Investimento total
- Margem média
- Receita estimada
- Lucro projetado

#### 7. Analisar Gráficos

**Gráfico 1: Distribuição por Categoria**
- Visualize quantos produtos há em cada categoria
- Identifique categorias com mais/menos produtos

**Gráfico 2: Top 10 por Lucro**
- Veja os 10 produtos mais lucrativos
- Priorize esses produtos na campanha

---

### Para Clientes

#### 1. Acessar Área de Análise

```
URL: https://priobf25.pages.dev/cliente
```

#### 2. Visualizar Produtos

**Produtos da Planilha:**
- Seção com 32 produtos recomendados
- Cards coloridos com informações-chave

**Produtos Sugeridos:**
- Seção com 110 produtos adicionais
- Opções complementares

#### 3. Selecionar Produtos

1. Clique na checkbox do produto
2. Produto é marcado como selecionado
3. Estatísticas atualizam automaticamente

**Estatísticas mostram:**
- Quantidade de produtos selecionados
- Investimento total necessário
- Receita estimada
- Lucro estimado

#### 4. Comparar Produtos

1. Clique em "Comparar" em até 4 produtos
2. Tabela comparativa aparece
3. Analise lado a lado
4. Adicione à seleção se desejar

#### 5. Filtrar Produtos

**Filtros disponíveis:**
- Por categoria
- Por faixa de preço
- Por disponibilidade

**Buscar:**
- Digite nome ou palavra-chave
- Resultados filtram automaticamente

#### 6. Ver Detalhes

1. Clique em "Ver Detalhes" no card
2. Modal abre com informações completas:
   - Imagem grande
   - Descrição
   - Especificações técnicas
   - Preços e lucro
   - **Margem NÃO é mostrada**

---

### Para Visitantes (Catálogo Público)

#### 1. Acessar Catálogo

```
URL: https://priobf25.pages.dev/catalogo
```

#### 2. Navegar pelos Produtos

- Grid de produtos com imagens
- Informações básicas visíveis
- Badges promocionais destacados

#### 3. Ver Detalhes

- Clique em qualquer produto
- Modal com informações completas
- Sem informações financeiras sensíveis

---

## 🔄 Manutenção e Atualizações

### Atualizar Produtos via GitHub

#### Método 1: Interface Web

1. Acesse: https://github.com/genautech/priobf25
2. Navegue até `produtos-v6.0.js`
3. Clique no ícone de lápis (editar)
4. Faça as alterações necessárias
5. Adicione mensagem de commit
6. Clique em "Commit changes"
7. Aguarde 2-3 minutos
8. Cloudflare faz deploy automático

#### Método 2: Git Local

```bash
# Clone o repositório
git clone https://github.com/genautech/priobf25.git
cd priobf25

# Faça alterações
nano produtos-v6.0.js

# Commit e push
git add produtos-v6.0.js
git commit -m "Atualização de produtos"
git push origin main

# Deploy automático no Cloudflare
```

### Backup de Dados

#### Exportar localStorage

```javascript
// No console do navegador (F12)
const backup = {
    produtosPlanilha: JSON.parse(localStorage.getItem('produtos-planilha')),
    produtosSugeridos: JSON.parse(localStorage.getItem('produtos-sugeridos')),
    margem: localStorage.getItem('margem-personalizada'),
    selecao: JSON.parse(localStorage.getItem('produtos-selecionados'))
};

// Copie o resultado
console.log(JSON.stringify(backup, null, 2));
```

#### Restaurar Backup

```javascript
// Cole os dados
const backup = { /* seus dados */ };

// Restaure
localStorage.setItem('produtos-planilha', JSON.stringify(backup.produtosPlanilha));
localStorage.setItem('produtos-sugeridos', JSON.stringify(backup.produtosSugeridos));
localStorage.setItem('margem-personalizada', backup.margem);
localStorage.setItem('produtos-selecionados', JSON.stringify(backup.selecao));

// Recarregue a página
location.reload();
```

### Adicionar Nova Categoria

1. Abra `produtos-v6.0.js`
2. Adicione produtos com nova categoria
3. Salve e faça commit
4. Sistema detecta automaticamente

### Atualizar Imagens

**Processo recomendado:**

1. Hospede imagem no Amazon S3 ou CloudFront
2. Obtenha URL pública
3. Edite produto via CRUD
4. Insira nova URL
5. Salve

**URLs válidas:**
```
✅ https://m.media-amazon.com/images/...
✅ https://images-na.ssl-images-amazon.com/...
✅ https://cloudfront.net/...
❌ file:///local/image.jpg (não funciona)
❌ C:\Users\... (não funciona)
```

---

## 🐛 Troubleshooting

### Problema: Produtos não aparecem

**Causa possível:** Cache do navegador

**Solução:**
```
1. Pressione Ctrl + Shift + R (recarregar forçado)
2. Ou limpe o cache:
   - Chrome: Ctrl + Shift + Delete
   - Selecione "Imagens e arquivos em cache"
   - Clique em "Limpar dados"
```

---

### Problema: Preços não calculam

**Causa possível:** JavaScript desabilitado

**Solução:**
```
1. Verifique se JavaScript está habilitado
2. Chrome: chrome://settings/content/javascript
3. Ative "Sites podem usar JavaScript"
```

---

### Problema: CRUD não salva

**Causa possível:** localStorage cheio ou bloqueado

**Solução:**
```javascript
// Teste no console (F12)
try {
    localStorage.setItem('teste', 'teste');
    console.log('✅ localStorage funcionando');
} catch(e) {
    console.log('❌ localStorage bloqueado:', e);
}

// Se bloqueado:
// 1. Verifique modo anônimo (pode bloquear)
// 2. Verifique extensões que bloqueiam cookies
// 3. Limpe localStorage: localStorage.clear()
```

---

### Problema: Imagens não carregam

**Causa 1:** URL inválida

**Solução:**
```
1. Copie a URL da imagem
2. Cole em nova aba do navegador
3. Se não abrir, URL está incorreta
4. Obtenha URL correta da Amazon/CDN
```

**Causa 2:** CORS bloqueado

**Solução:**
```
Use apenas URLs de CDNs confiáveis:
✅ Amazon CDN (m.media-amazon.com)
✅ Cloudflare
✅ CloudFront
```

---

### Problema: Deploy falhou no Cloudflare

**Causa:** Configuração incorreta

**Solução:**
```
1. Delete o projeto no Cloudflare
2. Crie novamente
3. IMPORTANTE:
   Framework preset: None
   Build command: (vazio)
   Output directory: /
4. Salve e deploy
```

---

### Problema: Margem não aplica

**Causa:** Conflito de dados

**Solução:**
```javascript
// Resetar margem no console
localStorage.removeItem('margem-personalizada');
location.reload();

// Ou defina manualmente
localStorage.setItem('margem-personalizada', '35');
location.reload();
```

---

### Problema: Formatação de preço errada

**Causa:** Locale do navegador

**Solução:**
A função usa `pt-BR` forçado, mas verifique:
```javascript
// Teste no console
(1234.56).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});
// Deve retornar: "R$ 1.234,56"

// Se retornar diferente, atualize navegador
```

---

### Problema: Gráficos não aparecem

**Causa:** Chart.js não carregou

**Solução:**
```
1. Verifique conexão com internet
2. Chart.js vem de CDN
3. Verifique console (F12) por erros
4. Recarregue página
```

---

### Problema: Modal não fecha

**Causa:** JavaScript error

**Solução:**
```
1. Abra console (F12)
2. Procure por erros em vermelho
3. Recarregue página
4. Se persistir, limpe cache
```

---

## 📊 Métricas e Analytics

### Dados Rastreáveis

O sistema pode ser integrado com Google Analytics adicionando:

```html
<!-- No <head> de cada HTML -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Eventos Personalizados

```javascript
// Rastrear adição de produto
function trackAddProduct(productId, productName) {
    gtag('event', 'add_product', {
        'product_id': productId,
        'product_name': productName
    });
}

// Rastrear seleção de cliente
function trackClientSelection(productId, investment) {
    gtag('event', 'client_selection', {
        'product_id': productId,
        'value': investment
    });
}

// Rastrear alteração de margem
function trackMarginChange(oldMargin, newMargin) {
    gtag('event', 'margin_change', {
        'old_value': oldMargin,
        'new_value': newMargin
    });
}
```

---

## 🔐 Segurança

### Headers Implementados (_headers)

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable
```

### Boas Práticas

- ✅ Não armazena senhas ou dados sensíveis
- ✅ localStorage apenas para preferências
- ✅ Sem autenticação (sistema público)
- ✅ HTTPS forçado no Cloudflare
- ✅ Headers de segurança configurados
- ❌ Não usar para dados confidenciais

---

## 📞 Suporte e Contato

### Documentação

- **README.md**: Visão geral e início rápido
- **SPEC.md**: Especificações técnicas resumidas
- **SPEC-COMPLETA.md**: Este documento (completo)
- **CRUD-PRODUTOS.md**: Guia detalhado do CRUD
- **VERSAO-ATUAL.md**: Status da versão
- **DEPLOY-CLOUDFLARE-PASSO-A-PASSO.md**: Tutorial de deploy

### Links Úteis

- **Site Produção**: https://priobf25.pages.dev
- **Repositório**: https://github.com/genautech/priobf25
- **Cloudflare Dashboard**: https://dash.cloudflare.com

### Próximos Passos Sugeridos

1. ✅ Sistema está completo e funcional
2. 📊 Adicionar Google Analytics (opcional)
3. 🎨 Customizar cores/branding (opcional)
4. 📱 Testar em dispositivos móveis
5. 🔄 Treinar equipe no uso do sistema
6. 📈 Monitorar uso durante Black Friday
7. 🎯 Coletar feedback dos clientes
8. 🚀 Planejar melhorias para próxima campanha

---

## 📝 Notas da Versão 6.0.1

**Data de Lançamento:** 15/10/2025

**Melhorias Implementadas:**

✅ Sistema CRUD completo para produtos  
✅ Editor visual de margem de lucro  
✅ Formatação brasileira de preços (R$ 1.000,33)  
✅ Interface cliente sem exibição de margem  
✅ Preview de imagens ao adicionar URL  
✅ Calculadora de preços em tempo real  
✅ Especificações técnicas dinâmicas  
✅ Gráficos interativos com Chart.js  
✅ Validações de formulário robustas  
✅ Persistência em localStorage  
✅ Deploy automatizado no Cloudflare Pages  
✅ Documentação completa  

**Arquivos Principais:**

- admin-v6.html (87 KB)
- cliente-analise-v6.html (45 KB)
- produtos-v6.0.js (105 KB)
- 142 produtos com imagens verificadas

**Status:** ✅ Produção - Totalmente funcional

---

**Fim da Documentação Completa**

*Última atualização: 15/10/2025*  
*Versão: 6.0.1*  
*Autor: Genautech Development Team*
