// ═══════════════════════════════════════════════════════════════════════════
// 📦 PRODUTOS - Base de Dados v6.1
// ═══════════════════════════════════════════════════════════════════════════
// 
// 🔄 ATUALIZADO AUTOMATICAMENTE via Cloudflare Pages Function
// ⚠️  NÃO EDITAR MANUALMENTE - Use o Admin para modificar produtos
// 
// Última atualização: 2025-10-23T23:54:44.603Z
// Sincronização: Cloudflare Pages Function → GitHub API → Deploy automático
// ═══════════════════════════════════════════════════════════════════════════

/**
 * 📋 Produtos da Planilha Original
 * Origem: Importação de spreadsheet
 * IDs: 1-1999
 * Total: 0
 */
const produtosPlanilha = [];

/**
 * 💡 Produtos Sugeridos pelo Admin
 * Origem: Cadastro manual via Admin
 * IDs: 2000+
 * Total: 1
 */
const produtosSugeridos = [
  {
    "id": 9999,
    "sku": "TEST-SYNC",
    "nome": "Produto Teste Auto-Sync",
    "categoria": "Teste",
    "subcategoria": "Teste",
    "quantidade": 1,
    "custoBase": 100,
    "precoMercado": 120,
    "margem": 30,
    "precoVenda": 130,
    "estoque": "Em Estoque",
    "fornecedor": "Teste",
    "imagem": "https://via.placeholder.com/400",
    "linkCompra": "",
    "descricao": "Teste",
    "especificacoes": {}
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// 🔧 UTILITÁRIOS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Retorna todos os produtos (planilha + sugeridos)
 * @returns {Array} Array com todos os produtos
 */
function obterTodosProdutos() {
    return [...produtosPlanilha, ...produtosSugeridos];
}

/**
 * Busca produto por ID
 * @param {number} id - ID do produto
 * @returns {Object|null} Produto encontrado ou null
 */
function obterProdutoPorId(id) {
    const todos = obterTodosProdutos();
    return todos.find(p => p.id === id) || null;
}

/**
 * Estatísticas dos produtos
 */
const estatisticasProdutos = {
    totalPlanilha: produtosPlanilha.length,
    totalSugeridos: produtosSugeridos.length,
    total: produtosPlanilha.length + produtosSugeridos.length,
    ultimaAtualizacao: '2025-10-23T23:54:44.603Z'
};

// Log de carregamento
console.log('📦 Produtos carregados:', estatisticasProdutos);

// ═══════════════════════════════════════════════════════════════════════════
// 📤 EXPORTS
// ═══════════════════════════════════════════════════════════════════════════

if (typeof window !== 'undefined') {
    window.produtosPlanilha = produtosPlanilha;
    window.produtosSugeridos = produtosSugeridos;
    window.obterTodosProdutos = obterTodosProdutos;
    window.obterProdutoPorId = obterProdutoPorId;
    window.estatisticasProdutos = estatisticasProdutos;
}

// Para uso com módulos ES6
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        produtosPlanilha,
        produtosSugeridos,
        obterTodosProdutos,
        obterProdutoPorId,
        estatisticasProdutos
    };
}
