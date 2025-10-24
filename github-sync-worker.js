// ═══════════════════════════════════════════════════════════════════════════
// 🚀 GITHUB SYNC VIA CLOUDFLARE WORKER - v6.5
// ═══════════════════════════════════════════════════════════════════════════
// 
// Cliente JavaScript que envia produtos para o Cloudflare Worker,
// que por sua vez faz commit automático no GitHub.
// 
// ✅ Totalmente automático
// ✅ Sem tokens no frontend
// ✅ Sem etapas manuais
// ✅ Deploy automático
// 
// ═══════════════════════════════════════════════════════════════════════════

class GitHubSyncWorker {
    constructor() {
        this.config = {
            // URL da Cloudflare Pages Function
            workerUrl: 'https://priobf25.pages.dev',
            
            // Configurações de sincronização
            autoSyncInterval: 2000, // 2 segundos de debounce
            maxRetries: 3,
            retryDelay: 2000,
            
            // Logs
            verboseLogging: true,
            showNotifications: true
        };
        
        this.syncQueue = [];
        this.isSyncing = false;
        this.lastSyncTime = null;
        this.syncTimer = null;
        
        this._log('✅ GitHubSyncWorker inicializado (v6.5 - Totalmente Automático)');
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // 📤 SINCRONIZAÇÃO VIA CLOUDFLARE WORKER
    // ═══════════════════════════════════════════════════════════════════════════
    
    /**
     * Salva produtos via Cloudflare Worker
     * @param {Array} produtos - Array de produtos para salvar
     * @returns {Promise<Object>} Resultado da operação
     */
    async salvarProdutos(produtos) {
        try {
            this._log('🔄 Iniciando sincronização via Cloudflare Worker...');
            this._log(`📦 Total de produtos: ${produtos.length}`);
            
            // Adicionar à fila
            this.syncQueue.push({
                produtos: produtos,
                timestamp: Date.now()
            });
            
            // Processar fila
            return await this._processarFila();
            
        } catch (erro) {
            this._logError('❌ Erro ao salvar produtos:', erro);
            throw erro;
        }
    }
    
    /**
     * Processa fila de sincronização (debouncing)
     */
    async _processarFila() {
        // Se já está sincronizando, aguardar
        if (this.isSyncing) {
            this._log('⏳ Sincronização em andamento, aguardando...');
            return { sucesso: false, mensagem: 'Sincronização em andamento' };
        }
        
        // Pegar último item da fila (mais recente)
        if (this.syncQueue.length === 0) {
            this._log('📭 Fila vazia, nada para sincronizar');
            return { sucesso: true, mensagem: 'Nenhuma mudança pendente' };
        }
        
        const ultimaRequisicao = this.syncQueue[this.syncQueue.length - 1];
        this.syncQueue = []; // Limpar fila
        
        this.isSyncing = true;
        
        try {
            const resultado = await this._enviarParaWorker(ultimaRequisicao.produtos);
            
            this.lastSyncTime = Date.now();
            this.isSyncing = false;
            
            return resultado;
            
        } catch (erro) {
            this.isSyncing = false;
            throw erro;
        }
    }
    
    /**
     * Envia produtos para o Cloudflare Worker
     */
    async _enviarParaWorker(produtos, tentativa = 1) {
        try {
            this._log(`📤 Enviando ${produtos.length} produtos para Worker...`);
            this._log(`🔗 URL: ${this.config.workerUrl}/sync`);
            
            const response = await fetch(`${this.config.workerUrl}/sync`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    produtos: produtos
                })
            });
            
            // Parsear resposta
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || `Erro HTTP ${response.status}`);
            }
            
            this._log('✅ Resposta do Worker recebida:', data);
            
            return {
                sucesso: true,
                mensagem: 'Produtos sincronizados automaticamente!',
                detalhes: data.details,
                total: produtos.length
            };
            
        } catch (erro) {
            this._logError(`❌ Erro na tentativa ${tentativa}:`, erro);
            
            // Retry logic
            if (tentativa < this.config.maxRetries) {
                this._log(`🔄 Tentando novamente em ${this.config.retryDelay}ms...`);
                await this._sleep(this.config.retryDelay);
                return await this._enviarParaWorker(produtos, tentativa + 1);
            }
            
            throw erro;
        }
    }
    
    /**
     * Verifica se Worker está acessível
     */
    async verificarWorker() {
        try {
            this._log('🔍 Verificando conectividade com Pages Function...');
            
            // Testar endpoint /sync com método OPTIONS (não faz commit)
            const response = await fetch(`${this.config.workerUrl}/sync`, {
                method: 'OPTIONS'
            });
            
            // Qualquer resposta (mesmo 405) significa que está acessível
            this._log('✅ Pages Function está acessível');
            
            return {
                online: true,
                version: 'v6.5',
                status: 'ready'
            };
            
        } catch (erro) {
            this._logError('❌ Pages Function offline ou inacessível:', erro);
            
            return {
                online: false,
                erro: erro.message
            };
        }
    }
    
    /**
     * Obtém informações do Worker
     */
    async obterInfoWorker() {
        try {
            const response = await fetch(this.config.workerUrl, {
                method: 'GET'
            });
            
            if (!response.ok) {
                throw new Error(`Erro ${response.status}`);
            }
            
            return await response.json();
            
        } catch (erro) {
            this._logError('❌ Erro ao obter info do Worker:', erro);
            throw erro;
        }
    }
    
    /**
     * Configura URL do Worker
     */
    configurarWorkerUrl(url) {
        this.config.workerUrl = url.replace(/\/$/, ''); // Remove trailing slash
        this._log(`⚙️ Worker URL configurada: ${this.config.workerUrl}`);
    }
    
    /**
     * Verifica se Worker/Pages Function está configurado
     */
    isConfigurado() {
        return this.config.workerUrl && 
               this.config.workerUrl !== '' &&
               (this.config.workerUrl.includes('workers.dev') || 
                this.config.workerUrl.includes('pages.dev'));
    }
    
    /**
     * Obtém estatísticas de sincronização
     */
    obterEstatisticas() {
        return {
            ultimaSincronizacao: this.lastSyncTime ? new Date(this.lastSyncTime) : null,
            filaAtual: this.syncQueue.length,
            sincronizandoAgora: this.isSyncing,
            workerUrl: this.config.workerUrl,
            configurado: this.isConfigurado()
        };
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // 🔧 UTILITÁRIOS
    // ═══════════════════════════════════════════════════════════════════════════
    
    _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    _log(mensagem, ...args) {
        if (this.config.verboseLogging) {
            console.log(`[GitHubSyncWorker] ${mensagem}`, ...args);
        }
    }
    
    _logError(mensagem, erro) {
        console.error(`[GitHubSyncWorker] ${mensagem}`, erro);
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// 🚀 INICIALIZAÇÃO GLOBAL
// ═══════════════════════════════════════════════════════════════════════════

// Criar instância global
window.gitHubSyncWorker = new GitHubSyncWorker();

console.log('✅ github-sync-worker.js carregado');
console.log('📖 Use: window.gitHubSyncWorker.salvarProdutos(produtos)');
console.log('🚀 Modo AUTOMÁTICO: Cloudflare Worker');
console.log('🔒 Modo SEGURO: Token no Worker (não exposto)');

// Verificar Worker ao carregar
setTimeout(async () => {
    try {
        const status = await window.gitHubSyncWorker.verificarWorker();
        
        if (status.online) {
            console.log(`✅ Cloudflare Pages Function online (v${status.version})`);
            console.log('🚀 Sincronização automática via /sync pronta!');
        } else {
            console.warn('⚠️ Pages Function /sync pode estar offline');
            console.warn('   Verifique se GITHUB_TOKEN está configurado no Cloudflare');
        }
    } catch (erro) {
        console.error('❌ Erro ao verificar Worker:', erro);
    }
}, 1000);
