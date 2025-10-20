/**
 * Auto-Sync Toggle v6.3.3
 * Função para ativar/desativar o Auto-Sync e salvar o estado
 * 
 * INTEGRAÇÃO:
 * - Trabalha junto com auto-sync-persistencia.js
 * - Trabalha junto com produto-persistencia-local.js
 * - Trabalha junto com config-global.js (configuração compartilhada)
 * - Trabalha junto com github-sync.js (sincronização direta com GitHub)
 */

// Estado global do Auto-Sync - Ativa por padrão se configurado
window.autoSyncEnabled = false; // Será configurado na inicialização

/**
 * Toggle do Auto-Sync
 * @param {boolean} forceState - (Opcional) Força um estado específico true/false
 */
function toggleAutoSync(forceState) {
    // Determina o novo estado
    const newState = typeof forceState === 'boolean' ? forceState : !window.autoSyncEnabled;
    
    window.autoSyncEnabled = newState;
    
    // Atualiza o badge visual
    updateAutoSyncBadge(newState);
    
    // Salva o estado no localStorage
    if (window.autoSyncPersistence) {
        window.autoSyncPersistence.save(newState);
    }
    
    // Mostra notificação
    const message = newState ? '✅ Auto-Sync ATIVADO! Salvamentos automáticos no GitHub' : '⚠️ Auto-Sync DESATIVADO';
    const type = newState ? 'success' : 'warning';
    showNotification(message, type);
    
    console.log(`🔄 Auto-Sync ${newState ? 'ATIVADO' : 'DESATIVADO'}`);
    
    // Se ativar, configura o listener para chamadas do CRUD
    if (newState) {
        setupAutoSyncListeners();
    }
}

/**
 * Atualiza o badge visual do Auto-Sync
 * @param {boolean} isEnabled - Se o Auto-Sync está ativado
 */
function updateAutoSyncBadge(isEnabled) {
    const badge = document.getElementById('auto-sync-badge');
    if (!badge) {
        console.warn('⚠️ Badge auto-sync-badge não encontrado');
        return;
    }
    
    if (isEnabled) {
        badge.className = 'px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full cursor-pointer hover:opacity-80 transition-all inline-block';
        badge.textContent = '🔄 Auto-Sync: ON';
    } else {
        badge.className = 'px-3 py-1 bg-gray-400 text-white text-xs font-bold rounded-full cursor-pointer hover:opacity-80 transition-all inline-block';
        badge.textContent = '🔄 Auto-Sync: OFF';
    }
}

/**
 * Configura os listeners para Auto-Sync
 */
function setupAutoSyncListeners() {
    // Se o ProdutoCRUDSync está disponível, adiciona listener
    if (window.produtoCRUD && typeof window.produtoCRUD.addListener === 'function') {
        window.produtoCRUD.addListener('auto-sync', (event) => {
            if (!window.autoSyncEnabled) return;
            
            console.log(`🔄 Auto-Sync detectou mudança: ${event.type}`);
            
            // Aguarda 1 segundo para agrupar múltiplas mudanças
            if (window.autoSyncTimer) {
                clearTimeout(window.autoSyncTimer);
            }
            
            window.autoSyncTimer = setTimeout(() => {
                triggerAutoSave();
            }, 1000);
        });
        
        console.log('✅ Auto-Sync listeners configurados');
    } else {
        console.warn('⚠️ ProdutoCRUDSync não disponível, tentando novamente em 1s...');
        setTimeout(setupAutoSyncListeners, 1000);
    }
}

/**
 * Obtém todos os produtos do sistema (planilha + sugeridos)
 * @returns {Array}
 */
function obterTodosProdutos() {
    let todosProdutos = [];
    
    // Tenta obter do produtoCRUD primeiro
    if (window.produtoCRUD && typeof window.produtoCRUD.listar === 'function') {
        todosProdutos = window.produtoCRUD.listar();
        console.log(`📦 Produtos obtidos do CRUD: ${todosProdutos.length}`);
    }
    // Fallback: obtém das variáveis globais
    else if (window.produtosPlanilha && window.produtosSugeridos) {
        todosProdutos = [
            ...(window.produtosPlanilha || []),
            ...(window.produtosSugeridos || [])
        ];
        console.log(`📦 Produtos obtidos das variáveis globais: ${todosProdutos.length}`);
    }
    
    return todosProdutos;
}

/**
 * Aciona o salvamento automático
 */
function triggerAutoSave() {
    if (!window.autoSyncEnabled) {
        console.log('ℹ️ Auto-Sync desativado, pulando salvamento');
        return;
    }
    
    // Atualiza o badge para mostrar que está salvando
    const badge = document.getElementById('auto-sync-badge');
    if (badge) {
        const originalText = badge.textContent;
        const originalClass = badge.className;
        
        badge.textContent = '⏳ Salvando...';
        badge.className = 'px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full cursor-pointer animate-pulse inline-block';
        
        // Verifica se o GitHubSync está disponível
        if (window.gitHubSync && window.gitHubSync.isConfigured()) {
            console.log('💾 Iniciando salvamento automático no GitHub...');
            
            // Obtém todos os produtos do sistema
            const todosProdutos = obterTodosProdutos();
            
            // Salva no GitHub
            window.gitHubSync.salvarProdutos(todosProdutos)
                .then(() => {
                    console.log('✅ Auto-Save concluído com sucesso!');
                    badge.textContent = '✅ Sincronizado';
                    badge.className = 'px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full cursor-pointer inline-block';
                    
                    showNotification('✅ Produtos salvos no GitHub! Deploy em andamento...', 'success');
                    
                    setTimeout(() => {
                        badge.textContent = originalText;
                        badge.className = originalClass;
                    }, 3000);
                })
                .catch((error) => {
                    console.error('❌ Erro no Auto-Save:', error);
                    badge.textContent = '❌ Erro';
                    badge.className = 'px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full cursor-pointer inline-block';
                    
                    showNotification(`❌ Erro ao salvar: ${error.message}`, 'error');
                    
                    setTimeout(() => {
                        badge.textContent = originalText;
                        badge.className = originalClass;
                    }, 3000);
                });
        } else {
            console.warn('⚠️ GitHub não configurado em config-global.js');
            badge.textContent = originalText;
            badge.className = originalClass;
            showNotification('⚠️ Configure GitHub em config-global.js para usar Auto-Sync', 'warning');
        }
    }
}

/**
 * Mostra uma notificação para o usuário
 * @param {string} message - Mensagem a exibir
 * @param {string} type - Tipo da notificação (success, info, warning, error)
 */
function showNotification(message, type = 'info') {
    // Remove notificações anteriores
    const existingNotifications = document.querySelectorAll('.notification-toast');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    const colors = {
        success: 'bg-green-500',
        info: 'bg-blue-500',
        warning: 'bg-yellow-500',
        error: 'bg-red-500'
    };
    
    const icons = {
        success: '✅',
        info: 'ℹ️',
        warning: '⚠️',
        error: '❌'
    };
    
    notification.className = `notification-toast fixed top-24 right-4 ${colors[type] || colors.info} text-white px-6 py-4 rounded-lg shadow-2xl z-50 transform transition-all duration-300 ease-in-out`;
    notification.style.animation = 'slideInRight 0.3s ease-out';
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <span class="text-2xl">${icons[type] || icons.info}</span>
            <span class="font-semibold">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove após 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Adiciona animações CSS
if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Log de inicialização
console.log('✅ Auto-Sync Toggle v6.3.3 carregado');
console.log('🔧 Função toggleAutoSync() disponível globally');

// ════════════════════════════════════════════════════════════════
// INICIALIZAÇÃO AUTOMÁTICA (v6.3.3)
// ════════════════════════════════════════════════════════════════

/**
 * Inicializa o Auto-Sync automaticamente se configurado
 */
function initAutoSync() {
    // Aguarda a configuração global estar disponível
    if (typeof window.CONFIG_GLOBAL === 'undefined') {
        console.log('⏳ Aguardando config-global.js...');
        setTimeout(initAutoSync, 100);
        return;
    }
    
    // Verifica se o GitHub está configurado
    if (!window.CONFIG_GLOBAL.isGitHubConfigured()) {
        console.warn('⚠️ GitHub não configurado em config-global.js');
        console.warn('📝 Configure o arquivo para ativar Auto-Sync por padrão');
        return;
    }
    
    // Verifica se Auto-Sync deve estar ativo por padrão
    if (window.CONFIG_GLOBAL.isAutoSyncEnabledByDefault()) {
        console.log('🔄 Ativando Auto-Sync por padrão (config-global.js)...');
        
        // Aguarda o DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    toggleAutoSync(true);
                    showNotification('🔄 Auto-Sync ativado automaticamente por configuração global!', 'success');
                }, 500);
            });
        } else {
            setTimeout(() => {
                toggleAutoSync(true);
                showNotification('🔄 Auto-Sync ativado automaticamente por configuração global!', 'success');
            }, 500);
        }
    }
}

// Inicia o processo de inicialização
setTimeout(initAutoSync, 100);
