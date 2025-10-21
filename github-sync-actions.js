// ═══════════════════════════════════════════════════════════════════════════
// 🔒 GITHUB SYNC VIA ACTIONS - v6.4
// ═══════════════════════════════════════════════════════════════════════════
// 
// Sincronização SEGURA de produtos usando GitHub Actions
// 
// ✅ Vantagens:
//    - Sem tokens expostos no código
//    - GitHub Actions gerencia permissões
//    - Commits automáticos com auditoria
//    - Escalável e seguro
// 
// 🔄 Fluxo:
//    1. Admin salva produtos → produtos-sync.json
//    2. GitHub Actions detecta mudança
//    3. Atualiza produtos-v6.1.js automaticamente
//    4. Cloudflare faz deploy automático
// 
// ═══════════════════════════════════════════════════════════════════════════

class GitHubSyncActions {
    constructor() {
        this.config = {
            // GitHub API (apenas para LEITURA - sem token necessário)
            owner: 'genautech',
            repo: 'priobf25',
            branch: 'main',
            syncFile: 'produtos-sync.json',
            
            // Configurações de sincronização
            autoSyncInterval: 5000, // 5 segundos
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
        
        this._log('✅ GitHubSyncActions inicializado (modo seguro)');
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // 📤 SINCRONIZAÇÃO VIA GITHUB ACTIONS
    // ═══════════════════════════════════════════════════════════════════════════
    
    /**
     * Salva produtos via GitHub Actions
     * @param {Array} produtos - Array de produtos para salvar
     * @returns {Promise<Object>} Resultado da operação
     */
    async salvarProdutos(produtos) {
        try {
            this._log('🔄 Iniciando sincronização via GitHub Actions...');
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
            // Método 1: Usar localStorage + commit manual
            const resultado = await this._salvarViaLocalStorage(ultimaRequisicao.produtos);
            
            // Método 2 (futuro): Usar API serverless
            // const resultado = await this._salvarViaServerless(ultimaRequisicao.produtos);
            
            this.lastSyncTime = Date.now();
            this.isSyncing = false;
            
            return resultado;
            
        } catch (erro) {
            this.isSyncing = false;
            throw erro;
        }
    }
    
    /**
     * MÉTODO 1: Salva via localStorage e instrui commit manual
     * (Método temporário até implementar serverless)
     */
    async _salvarViaLocalStorage(produtos) {
        try {
            this._log('💾 Salvando produtos no localStorage...');
            
            // Salvar no localStorage
            const produtosJSON = JSON.stringify(produtos, null, 2);
            localStorage.setItem('produtos_para_sincronizar', produtosJSON);
            localStorage.setItem('produtos_sync_timestamp', Date.now().toString());
            
            this._log('✅ Produtos salvos no localStorage');
            
            // Gerar conteúdo para produtos-sync.json
            const conteudoSyncJSON = this._gerarConteudoSyncJSON(produtos);
            
            // Mostrar instruções
            this._mostrarInstrucoesSincronizacao(conteudoSyncJSON);
            
            return {
                sucesso: true,
                mensagem: 'Produtos prontos para sincronização',
                total: produtos.length,
                proximoPasso: 'Copie o conteúdo e atualize produtos-sync.json no GitHub'
            };
            
        } catch (erro) {
            this._logError('❌ Erro ao salvar no localStorage:', erro);
            throw erro;
        }
    }
    
    /**
     * MÉTODO 2: Salva via API serverless (implementação futura)
     * Requer configurar Cloudflare Workers ou similar
     */
    async _salvarViaServerless(produtos) {
        // TODO: Implementar quando tiver API serverless
        this._log('⚠️ Método serverless ainda não implementado');
        
        throw new Error('Método serverless ainda não disponível. Use sincronização manual.');
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // 🔧 UTILITÁRIOS
    // ═══════════════════════════════════════════════════════════════════════════
    
    /**
     * Gera conteúdo do produtos-sync.json
     */
    _gerarConteudoSyncJSON(produtos) {
        return JSON.stringify(produtos, null, 2);
    }
    
    /**
     * Mostra instruções de sincronização
     */
    _mostrarInstrucoesSincronizacao(conteudoJSON) {
        console.log('\n═══════════════════════════════════════════════════════════════');
        console.log('🔄 INSTRUÇÕES DE SINCRONIZAÇÃO');
        console.log('═══════════════════════════════════════════════════════════════\n');
        console.log('1. Copie o conteúdo JSON abaixo:');
        console.log('\n--- INÍCIO DO JSON ---');
        console.log(conteudoJSON);
        console.log('--- FIM DO JSON ---\n');
        console.log('2. Acesse: https://github.com/genautech/priobf25/edit/main/produtos-sync.json');
        console.log('3. Cole o conteúdo copiado');
        console.log('4. Clique em "Commit changes"');
        console.log('5. GitHub Actions atualizará produtos-v6.1.js automaticamente');
        console.log('6. Cloudflare fará deploy em 2-3 minutos\n');
        console.log('═══════════════════════════════════════════════════════════════\n');
        
        // Criar modal com instruções
        if (this.config.showNotifications) {
            this._criarModalInstrucoes(conteudoJSON);
        }
    }
    
    /**
     * Cria modal com instruções e botão de copiar
     */
    _criarModalInstrucoes(conteudoJSON) {
        // Verificar se já existe
        let modal = document.getElementById('modal-sync-instrucoes');
        if (modal) {
            modal.remove();
        }
        
        // Criar modal
        modal = document.createElement('div');
        modal.id = 'modal-sync-instrucoes';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s;
        `;
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            border-radius: 15px;
            padding: 30px;
            max-width: 800px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        `;
        
        modalContent.innerHTML = `
            <h2 style="margin-bottom: 20px; color: #667eea;">
                🔄 Sincronização Pronta!
            </h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h3 style="margin-bottom: 15px; color: #333;">📋 Passos para sincronizar:</h3>
                <ol style="line-height: 2; color: #666;">
                    <li>Clique em <strong>"Copiar JSON"</strong> abaixo</li>
                    <li>Acesse: <a href="https://github.com/genautech/priobf25/edit/main/produtos-sync.json" target="_blank" style="color: #667eea;">produtos-sync.json no GitHub</a></li>
                    <li>Cole o conteúdo copiado</li>
                    <li>Clique em <strong>"Commit changes"</strong></li>
                    <li>Aguarde 2-3 minutos para o deploy automático</li>
                </ol>
            </div>
            
            <div style="position: relative;">
                <textarea id="json-para-copiar" readonly style="
                    width: 100%;
                    height: 200px;
                    font-family: monospace;
                    font-size: 12px;
                    padding: 15px;
                    border: 2px solid #ddd;
                    border-radius: 8px;
                    background: #f8f9fa;
                    resize: vertical;
                ">${conteudoJSON}</textarea>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 20px; justify-content: flex-end;">
                <button id="btn-copiar-json" style="
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s;
                ">
                    📋 Copiar JSON
                </button>
                
                <button id="btn-abrir-github" style="
                    background: #28a745;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s;
                ">
                    🚀 Abrir GitHub
                </button>
                
                <button id="btn-fechar-modal" style="
                    background: #6c757d;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.3s;
                ">
                    ✖️ Fechar
                </button>
            </div>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Event listeners
        document.getElementById('btn-copiar-json').addEventListener('click', () => {
            const textarea = document.getElementById('json-para-copiar');
            textarea.select();
            document.execCommand('copy');
            
            const btn = document.getElementById('btn-copiar-json');
            btn.textContent = '✅ Copiado!';
            btn.style.background = '#28a745';
            
            setTimeout(() => {
                btn.textContent = '📋 Copiar JSON';
                btn.style.background = '#667eea';
            }, 2000);
        });
        
        document.getElementById('btn-abrir-github').addEventListener('click', () => {
            window.open('https://github.com/genautech/priobf25/edit/main/produtos-sync.json', '_blank');
        });
        
        document.getElementById('btn-fechar-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        // Fechar ao clicar fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
    
    /**
     * Verifica se há produtos pendentes de sincronização
     */
    hasProdutosPendentes() {
        return localStorage.getItem('produtos_para_sincronizar') !== null;
    }
    
    /**
     * Obtém produtos pendentes de sincronização
     */
    obterProdutosPendentes() {
        const produtosJSON = localStorage.getItem('produtos_para_sincronizar');
        if (!produtosJSON) return null;
        
        try {
            return JSON.parse(produtosJSON);
        } catch (erro) {
            this._logError('❌ Erro ao parsear produtos pendentes:', erro);
            return null;
        }
    }
    
    /**
     * Limpa produtos pendentes após sincronização manual
     */
    limparProdutosPendentes() {
        localStorage.removeItem('produtos_para_sincronizar');
        localStorage.removeItem('produtos_sync_timestamp');
        this._log('🗑️ Produtos pendentes limpos');
    }
    
    /**
     * Obtém estatísticas de sincronização
     */
    obterEstatisticas() {
        return {
            ultimaSincronizacao: this.lastSyncTime ? new Date(this.lastSyncTime) : null,
            filaAtual: this.syncQueue.length,
            sincronizandoAgora: this.isSyncing,
            produtosPendentes: this.hasProdutosPendentes()
        };
    }
    
    // ═══════════════════════════════════════════════════════════════════════════
    // 📝 LOGGING
    // ═══════════════════════════════════════════════════════════════════════════
    
    _log(mensagem) {
        if (this.config.verboseLogging) {
            console.log(`[GitHubSyncActions] ${mensagem}`);
        }
    }
    
    _logError(mensagem, erro) {
        console.error(`[GitHubSyncActions] ${mensagem}`, erro);
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// 🚀 INICIALIZAÇÃO GLOBAL
// ═══════════════════════════════════════════════════════════════════════════

// Criar instância global
window.gitHubSyncActions = new GitHubSyncActions();

console.log('✅ github-sync-actions.js carregado');
console.log('📖 Use: window.gitHubSyncActions.salvarProdutos(produtos)');
console.log('🔒 Modo SEGURO: Sem tokens expostos!');

// Verificar produtos pendentes ao carregar
setTimeout(() => {
    if (window.gitHubSyncActions.hasProdutosPendentes()) {
        console.log('\n⚠️ Você tem produtos pendentes de sincronização!');
        console.log('📋 Use: window.gitHubSyncActions.obterProdutosPendentes()');
        console.log('🔄 Para sincronizar, atualize produtos-sync.json no GitHub\n');
    }
}, 1000);
