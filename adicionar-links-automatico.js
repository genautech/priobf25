// Script para gerar links de compra e adicionar imagens reais dos produtos
// Este script deve ser rodado no produtos-v6.0.js

// ============================================
// 1. CARREGAR IMAGENS DO CATÁLOGO JSON
// ============================================
let imagensCatalogo = {};

// Carregar o arquivo JSON com as imagens extraídas
fetch('catalog_images.json')
    .then(response => response.json())
    .then(data => {
        // Criar mapa de imagens: nome do produto -> URL da imagem
        if (data.data && data.data.products) {
            data.data.products.forEach(product => {
                if (product.product_name && product.image_url) {
                    imagensCatalogo[product.product_name] = product.image_url;
                }
            });
            console.log(`✅ ${Object.keys(imagensCatalogo).length} imagens carregadas do catálogo`);
        }
    })
    .catch(err => console.error('❌ Erro ao carregar imagens:', err));

// ============================================
// 2. FUNÇÕES DE MATCHING E NORMALIZAÇÃO
// ============================================

// Normalizar nome do produto para comparação
function normalizarNome(nome) {
    return nome
        .toLowerCase()
        .replace(/[áàãâä]/g, 'a')
        .replace(/[éèêë]/g, 'e')
        .replace(/[íìîï]/g, 'i')
        .replace(/[óòõôö]/g, 'o')
        .replace(/[úùûü]/g, 'u')
        .replace(/ç/g, 'c')
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

// Verificar se a imagem é placeholder
function isPlaceholder(urlImagem) {
    if (!urlImagem) return true;
    const placeholders = [
        'via.placeholder.com',
        'placeholder.com',
        'placehold',
        'example.com',
        '/placeholder',
        'data:image'
    ];
    return placeholders.some(ph => urlImagem.includes(ph));
}

// Encontrar imagem compatível do catálogo
function encontrarImagemCompativel(nomeProduto) {
    // 1. Tentar match exato
    if (imagensCatalogo[nomeProduto]) {
        return imagensCatalogo[nomeProduto];
    }
    
    // 2. Tentar match normalizado
    const nomeNormalizado = normalizarNome(nomeProduto);
    for (const [nomeCatalogo, urlImagem] of Object.entries(imagensCatalogo)) {
        if (normalizarNome(nomeCatalogo) === nomeNormalizado) {
            return urlImagem;
        }
    }
    
    // 3. Tentar match parcial (pelo menos 70% de similaridade)
    const palavrasProduto = nomeNormalizado.split(' ').filter(p => p.length > 2);
    let melhorMatch = null;
    let melhorScore = 0;
    
    for (const [nomeCatalogo, urlImagem] of Object.entries(imagensCatalogo)) {
        const palavrasCatalogo = normalizarNome(nomeCatalogo).split(' ').filter(p => p.length > 2);
        let matches = 0;
        
        palavrasProduto.forEach(palavra => {
            if (palavrasCatalogo.some(pc => pc.includes(palavra) || palavra.includes(pc))) {
                matches++;
            }
        });
        
        const score = matches / Math.max(palavrasProduto.length, palavrasCatalogo.length);
        if (score > melhorScore && score >= 0.5) {
            melhorScore = score;
            melhorMatch = urlImagem;
        }
    }
    
    return melhorMatch;
}

// ============================================
// 3. FUNÇÃO PARA GERAR LINK DA AMAZON
// ============================================
function gerarLinkAmazon(nomeProduto) {
    const nomeParaURL = nomeProduto
        .replace(/\s+/g, '+')
        .replace(/[áàãâä]/gi, 'a')
        .replace(/[éèêë]/gi, 'e')
        .replace(/[íìîï]/gi, 'i')
        .replace(/[óòõôö]/gi, 'o')
        .replace(/[úùûü]/gi, 'u')
        .replace(/ç/gi, 'c')
        .replace(/[^a-zA-Z0-9+]/g, '');
    
    return `https://www.amazon.com.br/s?k=${nomeParaURL}`;
}

// ============================================
// 4. PROCESSAR PRODUTOS E ADICIONAR IMAGENS + LINKS
// ============================================
function processarProdutos(produtos) {
    let atualizadosImagem = 0;
    let atualizadosLink = 0;
    let placeholdersRestantes = 0;
    
    const produtosProcessados = produtos.map(p => {
        const produto = { ...p };
        
        // Adicionar link de compra se não existir
        if (!produto.linkCompra) {
            produto.linkCompra = gerarLinkAmazon(produto.nome);
            atualizadosLink++;
        }
        
        // Substituir imagem se for placeholder
        if (isPlaceholder(produto.imagem)) {
            const imagemCompativel = encontrarImagemCompativel(produto.nome);
            if (imagemCompativel) {
                produto.imagem = imagemCompativel;
                atualizadosImagem++;
                console.log(`✅ Imagem atualizada: ${produto.nome}`);
            } else {
                placeholdersRestantes++;
                console.log(`⚠️  Sem imagem para: ${produto.nome}`);
            }
        }
        
        return produto;
    });
    
    console.log('\n═══════════════════════════════════════');
    console.log('📊 RESUMO DO PROCESSAMENTO');
    console.log('═══════════════════════════════════════');
    console.log(`🖼️  Imagens atualizadas: ${atualizadosImagem}`);
    console.log(`🔗 Links adicionados: ${atualizadosLink}`);
    console.log(`⚠️  Placeholders restantes: ${placeholdersRestantes}`);
    console.log('═══════════════════════════════════════\n');
    
    return produtosProcessados;
}

// ============================================
// 5. APLICAR PROCESSAMENTO (após carregar JSON)
// ============================================
setTimeout(() => {
    console.log('\n🚀 Iniciando processamento de produtos...\n');
    
    // Processar produtosPlanilha
    if (typeof produtosPlanilha !== 'undefined') {
        console.log('📦 Processando produtosPlanilha...');
        const novoProdutosPlanilha = processarProdutos(produtosPlanilha);
        console.log('Copie o resultado acima e atualize produtosPlanilha\n');
    }
    
    // Processar produtosSugeridos
    if (typeof produtosSugeridos !== 'undefined') {
        console.log('💡 Processando produtosSugeridos...');
        const novoProdutosSugeridos = processarProdutos(produtosSugeridos);
        console.log('Copie o resultado acima e atualize produtosSugeridos\n');
    }
}, 1000); // Aguardar 1s para garantir que o JSON foi carregado
