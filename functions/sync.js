// ═══════════════════════════════════════════════════════════════════════════
// 🚀 CLOUDFLARE PAGES FUNCTION - SINCRONIZAÇÃO AUTOMÁTICA v6.5
// ═══════════════════════════════════════════════════════════════════════════
// 
// Pages Function que recebe produtos do Admin e faz commit automático no GitHub
// 
// ✅ Totalmente automático
// ✅ Token seguro (environment variable do Pages)
// ✅ CORS configurado
// ✅ Integrado ao Cloudflare Pages
// 
// URL: https://priobf25.pages.dev/sync
// 
// ═══════════════════════════════════════════════════════════════════════════

export async function onRequestPost(context) {
  const { request, env } = context;
  
  // ═══════════════════════════════════════════════════════════════════════
  // 🔧 CONFIGURAÇÃO
  // ═══════════════════════════════════════════════════════════════════════
  
  const config = {
    owner: 'genautech',
    repo: 'priobf25',
    branch: 'main',
    file: 'produtos-v6.1.js',
    
    // Domínios permitidos (CORS)
    allowedOrigins: [
      'https://priobf25.pages.dev',
      'http://localhost:8080',
      'http://127.0.0.1:8080',
      'http://localhost:5500',
      'http://127.0.0.1:5500'
    ]
  };
  
  const startTime = Date.now();
  const origin = request.headers.get('Origin');
  
  try {
    // 1. Validar CORS
    if (!config.allowedOrigins.includes(origin)) {
      console.error('❌ Origem não permitida:', origin);
      return jsonResponse(
        { error: 'Origem não permitida', origin }, 
        403,
        getCORSHeaders(origin, config.allowedOrigins)
      );
    }
    
    // 2. Validar token de API
    if (!env.GITHUB_TOKEN) {
      console.error('❌ GITHUB_TOKEN não configurado');
      return jsonResponse(
        { error: 'GITHUB_TOKEN não configurado nas variáveis de ambiente' }, 
        500,
        getCORSHeaders(origin, config.allowedOrigins)
      );
    }
    
    // 3. Parsear body
    const body = await request.json();
    
    if (!body.produtos || !Array.isArray(body.produtos)) {
      return jsonResponse(
        { error: 'Formato inválido. Esperado: { produtos: [...] }' }, 
        400,
        getCORSHeaders(origin, config.allowedOrigins)
      );
    }
    
    const produtos = body.produtos;
    console.log(`📦 Recebidos ${produtos.length} produtos para sincronização`);
    
    // 4. Validar produtos
    if (produtos.length === 0) {
      return jsonResponse(
        { error: 'Nenhum produto para sincronizar' }, 
        400,
        getCORSHeaders(origin, config.allowedOrigins)
      );
    }
    
    // 5. Gerar conteúdo do arquivo produtos-v6.1.js
    const conteudoJS = gerarConteudoProdutos(produtos);
    
    // 6. Obter SHA do arquivo atual
    console.log('🔍 Obtendo SHA do arquivo atual...');
    let sha = await obterSHAArquivo(env, config);
    
    // 7. Fazer commit no GitHub (com retry se SHA mudar)
    console.log('📤 Fazendo commit no GitHub...');
    let resultado;
    let tentativas = 0;
    const maxTentativas = 3;
    
    while (tentativas < maxTentativas) {
      try {
        resultado = await fazerCommit(env, config, conteudoJS, sha);
        break; // Sucesso, sair do loop
      } catch (erro) {
        tentativas++;
        
        // Se erro for SHA mismatch, pegar novo SHA e tentar novamente
        if (erro.message.includes('does not match') && tentativas < maxTentativas) {
          console.log(`⚠️ SHA mismatch detectado, obtendo novo SHA (tentativa ${tentativas}/${maxTentativas})...`);
          sha = await obterSHAArquivo(env, config);
          continue;
        }
        
        // Outros erros ou máximo de tentativas atingido
        throw erro;
      }
    }
    
    // 8. Resposta de sucesso
    const duration = Date.now() - startTime;
    
    return jsonResponse({
      success: true,
      message: 'Produtos sincronizados com sucesso!',
      details: {
        total: produtos.length,
        planilha: produtos.filter(p => p.origem === 'planilha' || p.id < 2000).length,
        sugeridos: produtos.filter(p => p.origem === 'sugerido' || p.id >= 2000).length,
        commit: resultado.commit.sha,
        url: resultado.content.html_url,
        duration: `${duration}ms`
      }
    }, 200, getCORSHeaders(origin, config.allowedOrigins));
    
  } catch (erro) {
    console.error('❌ Erro na sincronização:', erro);
    
    const duration = Date.now() - startTime;
    
    return jsonResponse({
      error: 'Erro ao sincronizar produtos',
      message: erro.message,
      duration: `${duration}ms`
    }, 500, getCORSHeaders(origin, config.allowedOrigins));
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// 🔧 PREFLIGHT (OPTIONS)
// ═══════════════════════════════════════════════════════════════════════════

export async function onRequestOptions(context) {
  const allowedOrigins = [
    'https://priobf25.pages.dev',
    'http://localhost:8080',
    'http://127.0.0.1:8080',
    'http://localhost:5500',
    'http://127.0.0.1:5500'
  ];
  
  const origin = context.request.headers.get('Origin');
  
  return new Response(null, {
    status: 204,
    headers: getCORSHeaders(origin, allowedOrigins)
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// 📝 GERAR CONTEÚDO DO ARQUIVO
// ═══════════════════════════════════════════════════════════════════════════

function gerarConteudoProdutos(produtos) {
  // Separar produtos por origem
  const produtosPlanilha = produtos.filter(p => 
    p.origem === 'planilha' || p.id < 2000
  );
  
  const produtosSugeridos = produtos.filter(p => 
    p.origem === 'sugerido' || p.id >= 2000
  );
  
  // Gerar timestamp
  const now = new Date().toISOString();
  
  // Gerar conteúdo JavaScript
  return `// ═══════════════════════════════════════════════════════════════════════════
// 📦 PRODUTOS - Base de Dados v6.1
// ═══════════════════════════════════════════════════════════════════════════
// 
// 🔄 ATUALIZADO AUTOMATICAMENTE via Cloudflare Pages Function
// ⚠️  NÃO EDITAR MANUALMENTE - Use o Admin para modificar produtos
// 
// Última atualização: ${now}
// Sincronização: Cloudflare Pages Function → GitHub API → Deploy automático
// ═══════════════════════════════════════════════════════════════════════════

/**
 * 📋 Produtos da Planilha Original
 * Origem: Importação de spreadsheet
 * IDs: 1-1999
 * Total: ${produtosPlanilha.length}
 */
const produtosPlanilha = ${JSON.stringify(produtosPlanilha, null, 2)};

/**
 * 💡 Produtos Sugeridos pelo Admin
 * Origem: Cadastro manual via Admin
 * IDs: 2000+
 * Total: ${produtosSugeridos.length}
 */
const produtosSugeridos = ${JSON.stringify(produtosSugeridos, null, 2)};

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
    ultimaAtualizacao: '${now}'
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
`;
}

// ═══════════════════════════════════════════════════════════════════════════
// 🔍 OBTER SHA DO ARQUIVO ATUAL
// ═══════════════════════════════════════════════════════════════════════════

async function obterSHAArquivo(env, config) {
  const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${config.file}?ref=${config.branch}`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `token ${env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Cloudflare-Pages-Function'
    }
  });
  
  if (!response.ok) {
    const erro = await response.text();
    throw new Error(`Erro ao obter SHA: ${response.status} - ${erro}`);
  }
  
  const data = await response.json();
  return data.sha;
}

// ═══════════════════════════════════════════════════════════════════════════
// 📤 FAZER COMMIT NO GITHUB
// ═══════════════════════════════════════════════════════════════════════════

async function fazerCommit(env, config, conteudo, sha) {
  const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${config.file}`;
  
  // Codificar conteúdo em base64
  const conteudoBase64 = btoa(unescape(encodeURIComponent(conteudo)));
  
  // Preparar body do commit
  const body = {
    message: 'chore: atualização automática de produtos via Pages Function 🤖\n\n- Sincronizado via Cloudflare Pages Function\n- Atualização automática do Admin\n- Deploy em andamento',
    content: conteudoBase64,
    branch: config.branch,
    sha: sha
  };
  
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `token ${env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'Cloudflare-Pages-Function'
    },
    body: JSON.stringify(body)
  });
  
  if (!response.ok) {
    const erro = await response.text();
    throw new Error(`Erro ao fazer commit: ${response.status} - ${erro}`);
  }
  
  return await response.json();
}

// ═══════════════════════════════════════════════════════════════════════════
// 🛡️ CORS HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function getCORSHeaders(origin, allowedOrigins) {
  const headers = {
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };
  
  if (allowedOrigins.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  
  return headers;
}

// ═══════════════════════════════════════════════════════════════════════════
// 📝 RESPONSE HELPER
// ═══════════════════════════════════════════════════════════════════════════

function jsonResponse(data, status = 200, additionalHeaders = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status: status,
    headers: {
      'Content-Type': 'application/json',
      ...additionalHeaders
    }
  });
}
