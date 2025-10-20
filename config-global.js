/**
 * Configuração Global do Sistema v6.3.3
 * 
 * IMPORTANTE: Este arquivo contém configurações compartilhadas por todos os usuários
 * 
 * INSTRUÇÕES:
 * 1. Preencha os dados do GitHub abaixo
 * 2. Salve o arquivo
 * 3. Faça commit no GitHub
 * 4. Todos os usuários terão acesso às mesmas configurações
 * 
 * SEGURANÇA:
 * - Use um token do GitHub com permissões limitadas (apenas repo)
 * - Considere usar GitHub Actions para deploy automático (mais seguro)
 * - Este arquivo estará visível no código-fonte (não é ideal para produção)
 */

const CONFIG_GLOBAL = {
    // ════════════════════════════════════════════════════════════════════
    // CONFIGURAÇÃO DO GITHUB (PREENCHA AQUI)
    // ════════════════════════════════════════════════════════════════════
    
    github: {
        // Token de acesso do GitHub (com permissão 'repo')
        // Obtenha em: https://github.com/settings/tokens
        token: 'SEU_TOKEN_AQUI',  // ⚠️ PREENCHA COM SEU TOKEN
        
        // Usuário ou organização do GitHub
        owner: 'SEU_USUARIO_AQUI', // ⚠️ PREENCHA COM SEU USUÁRIO
        
        // Nome do repositório
        repo: 'priobf25',  // ⚠️ PREENCHA COM SEU REPOSITÓRIO
        
        // Branch para fazer commit
        branch: 'main',
        
        // Arquivo de produtos a ser atualizado
        produtosFile: 'produtos-v6.1.js',
        
        // Mensagem de commit padrão
        commitMessage: 'chore: atualização automática de produtos via admin'
    },
    
    // ════════════════════════════════════════════════════════════════════
    // CONFIGURAÇÃO DO AUTO-SYNC
    // ════════════════════════════════════════════════════════════════════
    
    autoSync: {
        // Auto-Sync ativo por padrão para TODOS os usuários
        enabledByDefault: true,  // ✅ SEMPRE ATIVO
        
        // Intervalo de salvamento automático (ms)
        debounceInterval: 1000,  // 1 segundo
        
        // Mostrar notificações visuais
        showNotifications: true,
        
        // Log detalhado no console
        verboseLogging: true
    },
    
    // ════════════════════════════════════════════════════════════════════
    // CONFIGURAÇÃO DO SISTEMA
    // ════════════════════════════════════════════════════════════════════
    
    sistema: {
        // Nome do projeto
        nome: 'Sistema Black Friday PRIO 2025',
        
        // Versão atual
        versao: '6.3.3',
        
        // Modo de operação
        modo: 'producao',  // 'producao' ou 'desenvolvimento'
        
        // URL do catálogo do cliente (para referência)
        urlCatalogo: 'https://priobf25.pages.dev/cliente'
    },
    
    // ════════════════════════════════════════════════════════════════════
    // FUNÇÕES AUXILIARES
    // ════════════════════════════════════════════════════════════════════
    
    /**
     * Verifica se as configurações do GitHub estão preenchidas
     * @returns {boolean}
     */
    isGitHubConfigured() {
        return this.github.token !== 'SEU_TOKEN_AQUI' &&
               this.github.owner !== 'SEU_USUARIO_AQUI' &&
               this.github.token.length > 0 &&
               this.github.owner.length > 0;
    },
    
    /**
     * Retorna as configurações do GitHub
     * @returns {Object}
     */
    getGitHubConfig() {
        if (!this.isGitHubConfigured()) {
            console.error('❌ GitHub não está configurado em config-global.js');
            return null;
        }
        return this.github;
    },
    
    /**
     * Retorna se o Auto-Sync deve estar ativo por padrão
     * @returns {boolean}
     */
    isAutoSyncEnabledByDefault() {
        return this.autoSync.enabledByDefault;
    },
    
    /**
     * Log informativo
     * @param {string} message
     */
    log(message) {
        if (this.autoSync.verboseLogging) {
            console.log(`[CONFIG] ${message}`);
        }
    }
};

// ════════════════════════════════════════════════════════════════════
// INICIALIZAÇÃO
// ════════════════════════════════════════════════════════════════════

// Torna a configuração disponível globalmente
window.CONFIG_GLOBAL = CONFIG_GLOBAL;

// Log de inicialização
console.log('✅ Configuração Global carregada');
console.log(`📦 Sistema: ${CONFIG_GLOBAL.sistema.nome} v${CONFIG_GLOBAL.sistema.versao}`);

if (CONFIG_GLOBAL.isGitHubConfigured()) {
    console.log('✅ GitHub configurado:', {
        owner: CONFIG_GLOBAL.github.owner,
        repo: CONFIG_GLOBAL.github.repo,
        branch: CONFIG_GLOBAL.github.branch
    });
    console.log(`🔄 Auto-Sync: ${CONFIG_GLOBAL.isAutoSyncEnabledByDefault() ? 'ATIVO por padrão' : 'Desativado por padrão'}`);
} else {
    console.warn('⚠️ GitHub NÃO configurado em config-global.js');
    console.warn('📝 Configure em: config-global.js (linhas 19-28)');
}

// ════════════════════════════════════════════════════════════════════
// INSTRUÇÕES DE CONFIGURAÇÃO
// ════════════════════════════════════════════════════════════════════

if (!CONFIG_GLOBAL.isGitHubConfigured()) {
    console.log('');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('📝 COMO CONFIGURAR O GITHUB:');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('');
    console.log('1. Obtenha um token do GitHub:');
    console.log('   https://github.com/settings/tokens');
    console.log('   - Clique: Generate new token (classic)');
    console.log('   - Marque: repo (Full control of private repositories)');
    console.log('   - Clique: Generate token');
    console.log('   - Copie o token gerado');
    console.log('');
    console.log('2. Abra: config-global.js');
    console.log('');
    console.log('3. Preencha (linhas 19-28):');
    console.log('   token: "ghp_seu_token_aqui",');
    console.log('   owner: "seu_usuario_github",');
    console.log('   repo: "priobf25",');
    console.log('');
    console.log('4. Salve e recarregue a página');
    console.log('');
    console.log('═══════════════════════════════════════════════════════════');
    console.log('');
}
