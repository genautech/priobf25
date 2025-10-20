/**
 * GitHub Sync v6.3.3
 * Sistema de sincronização direta com GitHub usando configuração global
 * 
 * FUNÇÃO:
 * - Salva produtos diretamente no GitHub via API
 * - Usa credenciais do config-global.js
 * - Dispara deploy automático no Cloudflare Pages
 */

class GitHubSync {
    constructor() {
        this.config = null;
        this.init();
    }
    
    /**
     * Inicializa o sistema
     */
    init() {
        // Aguarda a configuração global estar disponível
        if (typeof window.CONFIG_GLOBAL === 'undefined') {
            setTimeout(() => this.init(), 100);
            return;
        }
        
        this.config = window.CONFIG_GLOBAL.getGitHubConfig();
        
        if (this.config) {
            console.log('✅ GitHub Sync inicializado');
            console.log(`📦 Repositório: ${this.config.owner}/${this.config.repo}`);
        } else {
            console.warn('⚠️ GitHub Sync: Configuração não disponível');
        }
    }
    
    /**
     * Salva produtos no GitHub
     * @param {Array} produtos - Array de produtos
     * @returns {Promise}
     */
    async salvarProdutos(produtos) {
        if (!this.config) {
            throw new Error('GitHub não está configurado em config-global.js');
        }
        
        console.log('💾 Iniciando salvamento no GitHub...');
        console.log(`📊 Total de produtos: ${produtos.length}`);
        
        try {
            // 1. Gera o conteúdo do arquivo JavaScript
            const conteudoJS = this.gerarConteudoJS(produtos);
            
            // 2. Obtém o SHA do arquivo atual (necessário para atualizar)
            const sha = await this.obterSHAArquivo();
            
            // 3. Faz commit do arquivo atualizado
            const resultado = await this.fazerCommit(conteudoJS, sha);
            
            console.log('✅ Produtos salvos no GitHub com sucesso!');
            console.log('🚀 Deploy automático será iniciado em instantes...');
            console.log('⏱️ Catálogo do cliente será atualizado em 2-3 minutos');
            
            return resultado;
        } catch (error) {
            console.error('❌ Erro ao salvar no GitHub:', error);
            throw error;
        }
    }
    
    /**
     * Gera o conteúdo do arquivo produtos-v6.1.js
     * @param {Array} produtos - Array de produtos
     * @returns {string}
     */
    gerarConteudoJS(produtos) {
        // Separa produtos por origem
        const produtosPlanilha = produtos.filter(p => p.origem === 'planilha' || p.id < 2000);
        const produtosSugeridos = produtos.filter(p => p.origem === 'sugerido' || p.id >= 2000);
        
        const js = `/**
 * Base de Produtos - Black Friday PRIO 2025
 * Versão: 6.3.3
 * Última atualização: ${new Date().toISOString()}
 * Total de produtos: ${produtos.length}
 * - Produtos da planilha: ${produtosPlanilha.length}
 * - Produtos sugeridos: ${produtosSugeridos.length}
 * 
 * ATENÇÃO: Este arquivo é atualizado automaticamente pelo sistema Admin
 * Não edite manualmente - use o painel admin para fazer alterações
 */

// Produtos da Planilha Original (${produtosPlanilha.length} produtos)
const produtosPlanilha = ${JSON.stringify(produtosPlanilha, null, 2)};

// Produtos Sugeridos & Inovações (${produtosSugeridos.length} produtos)
const produtosSugeridos = ${JSON.stringify(produtosSugeridos, null, 2)};

// Exporta para uso global
if (typeof window !== 'undefined') {
    window.produtosPlanilha = produtosPlanilha;
    window.produtosSugeridos = produtosSugeridos;
    
    console.log('✅ Produtos carregados:');
    console.log(\`   Planilha: \${produtosPlanilha.length} produtos\`);
    console.log(\`   Sugeridos: \${produtosSugeridos.length} produtos\`);
    console.log(\`   Total: \${produtosPlanilha.length + produtosSugeridos.length} produtos\`);
}
`;
        
        return js;
    }
    
    /**
     * Obtém o SHA do arquivo atual no GitHub
     * @returns {Promise<string>}
     */
    async obterSHAArquivo() {
        const url = `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/${this.config.produtosFile}?ref=${this.config.branch}`;
        
        console.log('📥 Obtendo SHA do arquivo atual...');
        
        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${this.config.token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            if (response.status === 404) {
                console.log('ℹ️ Arquivo não existe, será criado');
                return null; // Arquivo não existe, será criado
            }
            throw new Error(`Erro ao obter SHA: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('✅ SHA obtido:', data.sha);
        return data.sha;
    }
    
    /**
     * Faz commit do arquivo no GitHub
     * @param {string} conteudo - Conteúdo do arquivo
     * @param {string|null} sha - SHA do arquivo (null para criar novo)
     * @returns {Promise<Object>}
     */
    async fazerCommit(conteudo, sha) {
        const url = `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/${this.config.produtosFile}`;
        
        console.log('📤 Enviando arquivo para GitHub...');
        
        // Converte conteúdo para Base64
        const conteudoBase64 = btoa(unescape(encodeURIComponent(conteudo)));
        
        const body = {
            message: this.config.commitMessage,
            content: conteudoBase64,
            branch: this.config.branch
        };
        
        // Se arquivo já existe, precisa do SHA
        if (sha) {
            body.sha = sha;
        }
        
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${this.config.token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Erro ao fazer commit: ${response.status} - ${error.message}`);
        }
        
        const data = await response.json();
        console.log('✅ Commit realizado:', data.commit.sha);
        console.log('🔗 URL:', data.content.html_url);
        
        return data;
    }
    
    /**
     * Verifica se está configurado
     * @returns {boolean}
     */
    isConfigured() {
        return this.config !== null;
    }
}

// Cria instância global
window.gitHubSync = new GitHubSync();

console.log('✅ GitHub Sync v6.3.3 carregado');
