// ============================================
// CATÁLOGO DE PRODUTOS - BLACK FRIDAY 2025
// Total: 164 produtos
// Gerado automaticamente a partir de planilha-nova.csv
// Data: 23/10/2025
// ============================================

// ============================================
// CUPONS DE DESCONTO
// ============================================
const cuponsDesconto = [
    { id: "CUP-001", loja: "Amazon", codigo: "BLACKFRIDAY25", desconto: "15%", validade: "2025-11-29", minimo: 200, maximo: 500, categorias: ["Eletrônicos", "Casa e Cozinha"], ativo: true, link: "https://www.amazon.com.br" },
    { id: "CUP-002", loja: "Magazine Luiza", codigo: "MAGALU15", desconto: "10%", validade: "2025-11-30", minimo: 150, maximo: 300, categorias: ["Eletrônicos"], ativo: true, link: "https://www.magazineluiza.com.br" },
    { id: "CUP-003", loja: "Mercado Livre", codigo: "MELI12", desconto: "12%", validade: "2025-11-28", minimo: 100, maximo: 400, categorias: ["Todos"], ativo: true, link: "https://www.mercadolivre.com.br" }
];

// ============================================
// PRODUTOS DA PLANILHA (164 produtos)
// ============================================
const produtosPlanilha = [
    { id: 1001, sku: "1MOR-EVO", nome: "1MORE EVO", categoria: "Eletrônicos", subcategoria: "Áudio", quantidade: 10, custoBase: 993.65, precoMercado: 1169, margem: 30, precoVenda: 1291.75, estoque: "Sob Consulta", fornecedor: "1MORE", imagem: "https://via.placeholder.com/400/667eea/ffffff?text=1MORE%20EVO", linkCompra: "", descricao: "1MORE EVO", especificacoes: { marketplace: "", prazoEntrega: "" } },
    { id: 1002, sku: "ACE-SWI", nome: "Acer Swift Edge 16", categoria: "Eletrônicos", subcategoria: "Laptops", quantidade: 10, custoBase: 6076.65, precoMercado: 7149, margem: 30, precoVenda: 7899.65, estoque: "Sob Consulta", fornecedor: "Acer", imagem: "https://via.placeholder.com/400/667eea/ffffff?text=Acer%20Swift%20Edge%2016", linkCompra: "", descricao: "Acer Swift Edge 16", especificacoes: { marketplace: "", prazoEntrega: "" } },
    { id: 1003, sku: "FRI-MON-DAV", nome: "Air Fryer Mondial AFN40BI Family Inox 4L Preta/Inox 110V", categoria: "Casa e Cozinha", subcategoria: "Fritadeiras", quantidade: 10, custoBase: 217.69, precoMercado: 256.11, margem: 30, precoVenda: 283, estoque: "Em Estoque", fornecedor: "Mondial", precoConcorrente: 222.13, imagem: "https://via.placeholder.com/400/667eea/ffffff?text=Air%20Fryer%20Mondial", linkCompra: "https://www.casasbahia.com.br/fritadeira-eletrica-sem-oleo-air-fryer-mondial-afn40bi-family-inox-4l-preta-inox/p/55032021", descricao: "Air Fryer Mondial AFN40BI Family Inox 4L Preta/Inox 110V", especificacoes: { marketplace: "Casas Bahia", prazoEntrega: "2 DIAS" } },
    { id: 1004, sku: "APD-3G", nome: "AirPods 3ª Geração", categoria: "Eletrônicos", subcategoria: "Áudio", quantidade: 10, custoBase: 1656.65, precoMercado: 1949, margem: 30, precoVenda: 2153.65, estoque: "Em Estoque", fornecedor: "Apple Store", precoConcorrente: 1188.3, imagem: "https://via.placeholder.com/400/667eea/ffffff?text=AirPods%203", linkCompra: "https://www.kabum.com.br/produto/425655/", descricao: "AirPods 3ª Geração", especificacoes: { marketplace: "Kabum", prazoEntrega: "7 A 10 DIAS" } },
    { id: 1005, sku: "APM-MAX", nome: "AirPods Max", categoria: "Eletrônicos", subcategoria: "Áudio", quantidade: 10, custoBase: 4402.15, precoMercado: 5179, margem: 30, precoVenda: 5722.80, estoque: "Em Estoque", fornecedor: "Apple", precoConcorrente: 3801, imagem: "https://via.placeholder.com/400/667eea/ffffff?text=AirPods%20Max", linkCompra: "https://www.mercadolivre.com.br/apple-bluetooth-airpods-max", descricao: "AirPods Max", especificacoes: { marketplace: "Mercado Livre", prazoEntrega: "7 A 10 DIAS" } }
];

// Carregar dados do CSV dinamicamente
(async function() {
    try {
        const response = await fetch('planilha-nova.csv');
        const text = await response.text();
        const lines = text.trim().split('\n');
        
        function limparPreco(valor) {
            if (!valor || valor === 'Não encontrado' || valor.trim() === '') return 0;
            return parseFloat(valor.replace(',', '.').replace(/[^\d.]/g, '')) || 0;
        }
        
        // Processar CSV (pular cabeçalho)
        for (let i = 1; i < lines.length && i <= 164; i++) {
            const cols = lines[i].split(';');
            if (cols.length < 6) continue;
            
            const [sku, nome, categoria, subcategoria, fornecedor, precoMercado, precoConcorrente, _, prazo, marketplace, link] = cols;
            
            const pm = limparPreco(precoMercado);
            const pc = limparPreco(precoConcorrente);
            const custoBase = pm > 0 ? pm * 0.85 : (pc > 0 ? pc * 0.98 : 1000);
            const precoVenda = custoBase * 1.3;
            
            const produto = {
                id: 1000 + i,
                sku: (sku || `SKU-${1000 + i}`).trim(),
                nome: (nome || 'Produto').trim(),
                categoria: (categoria || 'Eletrônicos').trim(),
                subcategoria: (subcategoria || 'Diversos').trim(),
                quantidade: 10,
                custoBase: Math.round(custoBase * 100) / 100,
                precoMercado: pm > 0 ? pm : Math.round(custoBase * 1.15 * 100) / 100,
                margem: 30,
                precoVenda: Math.round(precoVenda * 100) / 100,
                estoque: pc > 0 ? "Em Estoque" : "Sob Consulta",
                fornecedor: (fornecedor || marketplace || 'Amazon').trim(),
                imagem: `https://via.placeholder.com/400/667eea/ffffff?text=${encodeURIComponent((nome || 'Produto').trim())}`,
                linkCompra: (link || '').trim(),
                descricao: (nome || 'Produto importado').trim(),
                especificacoes: {
                    marketplace: (marketplace || '').trim(),
                    prazoEntrega: (prazo || '').trim()
                }
            };
            
            if (pc > 0) {
                produto.precoConcorrente = pc;
            }
            
            // Só adiciona se não existir (evita duplicatas)
            if (!produtosPlanilha.find(p => p.sku === produto.sku)) {
                produtosPlanilha.push(produto);
            }
        }
        
        // Atualizar variável global
        if (typeof window !== 'undefined') {
            window.produtosPlanilha = produtosPlanilha;
            window.todosOsProdutosV6 = [...produtosPlanilha, ...produtosSugeridos];
            
            console.log('✅ Catálogo atualizado:', {
                planilha: produtosPlanilha.length,
                sugeridos: produtosSugeridos.length,
                total: produtosPlanilha.length + produtosSugeridos.length
            });
        }
    } catch (error) {
        console.error('❌ Erro ao carregar CSV:', error);
    }
})();

// ============================================
// PRODUTOS SUGERIDOS
// ============================================
const produtosSugeridos = [];

// ============================================
// EXPORTAÇÃO PARA USO GLOBAL
// ============================================
if (typeof window !== 'undefined') {
    window.produtosPlanilha = produtosPlanilha;
    window.produtosSugeridos = produtosSugeridos;
    window.todosOsProdutosV6 = [...produtosPlanilha, ...produtosSugeridos];
    window.cuponsDesconto = cuponsDesconto;
    
    console.log('✅ Catálogo inicial carregado:', {
        planilha: produtosPlanilha.length,
        sugeridos: produtosSugeridos.length,
        total: produtosPlanilha.length + produtosSugeridos.length
    });
}

// Export para Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        produtosPlanilha,
        produtosSugeridos,
        todosOsProdutosV6: [...produtosPlanilha, ...produtosSugeridos],
        cuponsDesconto
    };
}
