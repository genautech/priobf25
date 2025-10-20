// ============================================
// SISTEMA DE PERSISTÊNCIA LOCAL v1.0
// Salvar produtos SEM BACKEND
// ============================================
// Três estratégias implementadas:
// 1. LocalStorage (automático)
// 2. Download JS (manual)
// 3. GitHub API (automático)
// ============================================

class ProdutoPersistenciaLocal {
    constructor() {
        this.STORAGE_KEY = 'priobf25_produtos';
        this.STORAGE_VERSION_KEY = 'priobf25_produtos_version';
        this.CURRENT_VERSION = '6.3.0';
        this.autoSaveEnabled = true;
        this.autoSaveDelay = 2000; // 2 segundos após mudança
        this.autoSaveTimer = null;
    }

    // ============================================
    // OPÇÃO 1: LOCALSTORAGE (RECOMENDADO)
    // ============================================
    
    /**
     * Salvar produtos no LocalStorage do navegador
     * Automático, rápido, persiste entre sessões
     */
    salvarNoLocalStorage(produtosPlanilha, produtosSugeridos) {
        try {
            const dados = {
                versao: this.CURRENT_VERSION,
                timestamp: new Date().toISOString(),
                produtosPlanilha: produtosPlanilha,
                produtosSugeridos: produtosSugeridos,
                totalProdutos: produtosPlanilha.length + produtosSugeridos.length
            };
            
            const dadosJSON = JSON.stringify(dados);
            
            // Verificar tamanho (LocalStorage tem limite de ~5-10MB)
            const tamanhoMB = new Blob([dadosJSON]).size / 1024 / 1024;
            
            if (tamanhoMB > 5) {
                console.warn(`⚠️ Dados muito grandes: ${tamanhoMB.toFixed(2)}MB. Considere outra opção.`);
                return { sucesso: false, erro: 'Dados excedem limite do LocalStorage' };
            }
            
            localStorage.setItem(this.STORAGE_KEY, dadosJSON);
            localStorage.setItem(this.STORAGE_VERSION_KEY, this.CURRENT_VERSION);
            
            console.log(`✅ Produtos salvos no LocalStorage: ${dados.totalProdutos} produtos (${tamanhoMB.toFixed(2)}MB)`);
            
            return { 
                sucesso: true, 
                metodo: 'localStorage',
                totalProdutos: dados.totalProdutos,
                tamanhoMB: tamanhoMB.toFixed(2)
            };
            
        } catch (erro) {
            console.error('❌ Erro ao salvar no LocalStorage:', erro);
            
            if (erro.name === 'QuotaExceededError') {
                return { sucesso: false, erro: 'LocalStorage cheio. Use opção de Download.' };
            }
            
            return { sucesso: false, erro: erro.message };
        }
    }

    /**
     * Carregar produtos do LocalStorage
     */
    carregarDoLocalStorage() {
        try {
            const dadosJSON = localStorage.getItem(this.STORAGE_KEY);
            
            if (!dadosJSON) {
                console.log('ℹ️ Nenhum dado salvo no LocalStorage');
                return { sucesso: false, dados: null };
            }
            
            const dados = JSON.parse(dadosJSON);
            
            // Verificar versão
            const versaoSalva = localStorage.getItem(this.STORAGE_VERSION_KEY);
            if (versaoSalva !== this.CURRENT_VERSION) {
                console.warn(`⚠️ Versão diferente: salva=${versaoSalva}, atual=${this.CURRENT_VERSION}`);
            }
            
            console.log(`✅ Produtos carregados do LocalStorage: ${dados.totalProdutos} produtos`);
            console.log(`📅 Última atualização: ${dados.timestamp}`);
            
            return {
                sucesso: true,
                dados: dados,
                produtosPlanilha: dados.produtosPlanilha,
                produtosSugeridos: dados.produtosSugeridos
            };
            
        } catch (erro) {
            console.error('❌ Erro ao carregar do LocalStorage:', erro);
            return { sucesso: false, erro: erro.message };
        }
    }

    /**
     * Limpar dados do LocalStorage
     */
    limparLocalStorage() {
        localStorage.removeItem(this.STORAGE_KEY);
        localStorage.removeItem(this.STORAGE_VERSION_KEY);
        console.log('🗑️ LocalStorage limpo');
    }

    /**
     * Verificar espaço disponível no LocalStorage
     */
    verificarEspacoLocalStorage() {
        let total = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                total += localStorage[key].length + key.length;
            }
        }
        
        const totalMB = (total / 1024 / 1024).toFixed(2);
        const limiteMB = 5; // Aproximado
        const disponivelMB = (limiteMB - totalMB).toFixed(2);
        
        return {
            usadoMB: totalMB,
            disponivelMB: disponivelMB,
            limiteMB: limiteMB,
            percentualUsado: ((totalMB / limiteMB) * 100).toFixed(1)
        };
    }

    // ============================================
    // OPÇÃO 2: DOWNLOAD AUTOMÁTICO DE ARQUIVO JS
    // ============================================
    
    /**
     * Baixar arquivo produtos-v6.1.js atualizado
     * Usuário salva manualmente no projeto
     */
    baixarArquivoJS(produtosPlanilha, produtosSugeridos) {
        try {
            const conteudoJS = this.gerarConteudoJS(produtosPlanilha, produtosSugeridos);
            
            // Criar blob
            const blob = new Blob([conteudoJS], { type: 'text/javascript' });
            const url = URL.createObjectURL(blob);
            
            // Criar link de download
            const a = document.createElement('a');
            a.href = url;
            a.download = `produtos-v6.1-${Date.now()}.js`;
            a.style.display = 'none';
            
            document.body.appendChild(a);
            a.click();
            
            // Limpar
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 100);
            
            console.log('✅ Arquivo JS gerado para download');
            
            return {
                sucesso: true,
                metodo: 'download',
                nomeArquivo: a.download
            };
            
        } catch (erro) {
            console.error('❌ Erro ao gerar download:', erro);
            return { sucesso: false, erro: erro.message };
        }
    }

    /**
     * Gerar conteúdo do arquivo JavaScript
     */
    gerarConteudoJS(produtosPlanilha, produtosSugeridos) {
        const timestamp = new Date().toISOString().split('T')[0];
        const total = produtosPlanilha.length + produtosSugeridos.length;
        
        return `// ============================================
// VERSÃO 6.3.0 - PRODUTOS BLACK FRIDAY PRIO 2025
// Total: ${total} produtos (${produtosPlanilha.length} planilha + ${produtosSugeridos.length} sugestões)
// Atualizado: ${timestamp}
// Salvo automaticamente pelo sistema de persistência local
// ============================================

// ============================================
// CUPONS DE DESCONTO DISPONÍVEIS
// ============================================
const cuponsDesconto = ${JSON.stringify(window.cuponsDesconto || [], null, 4)};

// ============================================
// PREÇOS CONCORRENTE (PRIO)
// ============================================
const precosConcorrente = ${JSON.stringify(window.precosConcorrente || {}, null, 4)};

// ============================================
// PRODUTOS DA PLANILHA (Em Estoque + Para Compra)
// ============================================
const produtosPlanilha = ${JSON.stringify(produtosPlanilha, null, 4)};

// ============================================
// PRODUTOS SUGERIDOS 2025 (Inovações e Tendências)
// ============================================
const produtosSugeridos = ${JSON.stringify(produtosSugeridos, null, 4)};

// ============================================
// EXPORTAR PARA USO GLOBAL
// ============================================
if (typeof window !== 'undefined') {
    window.cuponsDesconto = cuponsDesconto;
    window.precosConcorrente = precosConcorrente;
    window.produtosPlanilha = produtosPlanilha;
    window.produtosSugeridos = produtosSugeridos;
    
    // Array unificado
    window.allProducts = [...produtosPlanilha, ...produtosSugeridos];
    
    console.log('✅ Produtos carregados: ' + window.allProducts.length);
}
`;
    }

    // ============================================
    // OPÇÃO 3: GITHUB API (AVANÇADO)
    // ============================================
    
    /**
     * Salvar direto no GitHub via API
     * Requer token de acesso pessoal
     */
    async salvarNoGitHub(produtosPlanilha, produtosSugeridos, config) {
        try {
            // Validar configuração
            if (!config.token || !config.owner || !config.repo) {
                throw new Error('Configuração incompleta. Necessário: token, owner, repo');
            }
            
            const conteudoJS = this.gerarConteudoJS(produtosPlanilha, produtosSugeridos);
            const conteudoBase64 = btoa(unescape(encodeURIComponent(conteudoJS)));
            
            // Obter SHA do arquivo atual (necessário para atualizar)
            const shaAtual = await this.obterSHAArquivoGitHub(config);
            
            // Preparar requisição
            const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/produtos-v6.1.js`;
            
            const body = {
                message: `chore: atualizar produtos via sistema CRUD - ${new Date().toISOString()}`,
                content: conteudoBase64,
                branch: config.branch || 'main'
            };
            
            // Incluir SHA se arquivo já existe
            if (shaAtual) {
                body.sha = shaAtual;
            }
            
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${config.token}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/vnd.github.v3+json'
                },
                body: JSON.stringify(body)
            });
            
            if (!response.ok) {
                const erro = await response.json();
                throw new Error(`GitHub API erro: ${erro.message}`);
            }
            
            const resultado = await response.json();
            
            console.log('✅ Arquivo salvo no GitHub:', resultado.content.html_url);
            
            return {
                sucesso: true,
                metodo: 'github',
                url: resultado.content.html_url,
                sha: resultado.content.sha
            };
            
        } catch (erro) {
            console.error('❌ Erro ao salvar no GitHub:', erro);
            return { sucesso: false, erro: erro.message };
        }
    }

    /**
     * Obter SHA do arquivo atual no GitHub
     */
    async obterSHAArquivoGitHub(config) {
        try {
            const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/produtos-v6.1.js`;
            
            const response = await fetch(url, {
                headers: {
                    'Authorization': `token ${config.token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                return data.sha;
            }
            
            return null; // Arquivo não existe
            
        } catch (erro) {
            console.warn('⚠️ Não foi possível obter SHA:', erro.message);
            return null;
        }
    }

    // ============================================
    // AUTO-SAVE (SALVAR AUTOMATICAMENTE)
    // ============================================
    
    /**
     * Configurar auto-save
     */
    configurarAutoSave(produtoCRUD, metodo = 'localStorage', config = {}) {
        if (!produtoCRUD) {
            console.error('❌ produtoCRUD não fornecido');
            return;
        }
        
        // Adicionar listener para mudanças
        produtoCRUD.addListener((acao, dados) => {
            if (['create', 'update', 'delete', 'import'].includes(acao)) {
                this.agendarAutoSave(produtoCRUD, metodo, config);
            }
        });
        
        console.log(`✅ Auto-save configurado: ${metodo}`);
    }

    /**
     * Agendar auto-save (debounce)
     */
    agendarAutoSave(produtoCRUD, metodo, config) {
        if (!this.autoSaveEnabled) return;
        
        // Cancelar timer anterior
        if (this.autoSaveTimer) {
            clearTimeout(this.autoSaveTimer);
        }
        
        // Agendar novo save
        this.autoSaveTimer = setTimeout(() => {
            this.executarAutoSave(produtoCRUD, metodo, config);
        }, this.autoSaveDelay);
    }

    /**
     * Executar auto-save
     */
    async executarAutoSave(produtoCRUD, metodo, config) {
        console.log(`💾 Salvando automaticamente via ${metodo}...`);
        
        const produtosPlanilha = produtoCRUD.produtosPlanilha;
        const produtosSugeridos = produtoCRUD.produtosSugeridos;
        
        let resultado;
        
        switch (metodo) {
            case 'localStorage':
                resultado = this.salvarNoLocalStorage(produtosPlanilha, produtosSugeridos);
                break;
                
            case 'download':
                resultado = this.baixarArquivoJS(produtosPlanilha, produtosSugeridos);
                break;
                
            case 'github':
                resultado = await this.salvarNoGitHub(produtosPlanilha, produtosSugeridos, config);
                break;
                
            default:
                console.error('❌ Método desconhecido:', metodo);
                return;
        }
        
        if (resultado.sucesso) {
            this.mostrarNotificacao('💾 Salvo automaticamente!', 'success');
        } else {
            this.mostrarNotificacao('❌ Erro ao salvar: ' + resultado.erro, 'error');
        }
    }

    /**
     * Mostrar notificação
     */
    mostrarNotificacao(mensagem, tipo = 'info') {
        if (typeof window.mostrarNotificacao === 'function') {
            window.mostrarNotificacao(mensagem, tipo);
        } else {
            console.log(`[${tipo.toUpperCase()}] ${mensagem}`);
        }
    }

    // ============================================
    // INICIALIZAÇÃO AUTOMÁTICA
    // ============================================
    
    /**
     * Inicializar sistema de persistência
     */
    inicializar(produtoCRUD, opcoes = {}) {
        const {
            metodo = 'localStorage',
            autoSave = true,
            autoLoad = true,
            githubConfig = null
        } = opcoes;
        
        this.autoSaveEnabled = autoSave;
        
        console.log('🔧 Inicializando sistema de persistência...');
        console.log(`   Método: ${metodo}`);
        console.log(`   Auto-save: ${autoSave ? 'Ativado' : 'Desativado'}`);
        console.log(`   Auto-load: ${autoLoad ? 'Ativado' : 'Desativado'}`);
        
        // Carregar dados salvos (se habilitado)
        if (autoLoad && metodo === 'localStorage') {
            const resultado = this.carregarDoLocalStorage();
            
            if (resultado.sucesso && produtoCRUD) {
                // Sobrescrever produtos com dados salvos
                produtoCRUD.produtosPlanilha = resultado.produtosPlanilha;
                produtoCRUD.produtosSugeridos = resultado.produtosSugeridos;
                produtoCRUD.produtos = [...resultado.produtosPlanilha, ...resultado.produtosSugeridos];
                
                console.log('✅ Produtos carregados do LocalStorage');
                this.mostrarNotificacao('📦 Produtos carregados do armazenamento local', 'info');
            }
        }
        
        // Configurar auto-save
        if (autoSave && produtoCRUD) {
            this.configurarAutoSave(produtoCRUD, metodo, githubConfig);
        }
        
        // Verificar espaço
        if (metodo === 'localStorage') {
            const espaco = this.verificarEspacoLocalStorage();
            console.log(`📊 LocalStorage: ${espaco.usadoMB}MB usado de ${espaco.limiteMB}MB (${espaco.percentualUsado}%)`);
        }
        
        console.log('✅ Sistema de persistência inicializado');
    }
}

// ============================================
// INSTÂNCIA GLOBAL
// ============================================

const produtoPersistencia = new ProdutoPersistenciaLocal();

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.produtoPersistencia = produtoPersistencia;
    window.ProdutoPersistenciaLocal = ProdutoPersistenciaLocal;
}

console.log('✅ Sistema de Persistência Local carregado!');
