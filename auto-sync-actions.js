// ═══════════════════════════════════════════════════════════════════════════
// 🔄 AUTO-SYNC VIA GITHUB ACTIONS - v6.4
// ═══════════════════════════════════════════════════════════════════════════
// 
// Toggle e gerenciamento de Auto-Sync usando GitHub Actions
// ✅ Modo SEGURO: Sem tokens expostos no código
// 
// ═══════════════════════════════════════════════════════════════════════════

// Estado global do Auto-Sync
window.autoSyncEnabled = false;
window.autoSyncDebounceTimer = null;

// ═══════════════════════════════════════════════════════════════════════════
// 🎛️ TOGGLE DO AUTO-SYNC
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Ativa/desativa Auto-Sync
 */
function toggleAutoSync(forceState = null) {
    const toggle = document.getElementById('auto-sync-toggle');
    const badge = document.getElementById('auto-sync-badge');
    const icon = document.getElementById('auto-sync-icon');
    
    if (!toggle || !badge || !icon) {
        console.warn('⚠️ Elementos do Auto-Sync não encontrados no DOM');
        return;
    }
    
    // Alternar estado
    window.autoSyncEnabled = forceState !== null ? forceState : !window.autoSyncEnabled;
    
    // Atualizar UI
    if (window.autoSyncEnabled) {
        toggle.classList.add('bg-green-500');
        toggle.classList.remove('bg-gray-400');
        badge.textContent = 'ON';
        badge.classList.add('text-green-600');
        badge.classList.remove('text-gray-600');
        icon.style.color = '#10b981';
        
        console.log('✅ Auto-Sync ATIVADO (via GitHub Actions)');
        showNotification('🔄 Auto-Sync ativado! Mudanças serão sincronizadas automaticamente', 'success');
    } else {
        toggle.classList.remove('bg-green-500');
        toggle.classList.add('bg-gray-400');
        badge.textContent = 'OFF';
        badge.classList.remove('text-green-600');
        badge.classList.add('text-gray-600');
        icon.style.color = '#9ca3af';
        
        console.log('⏸️ Auto-Sync DESATIVADO');
        showNotification('⏸️ Auto-Sync desativado', 'info');
    }
    
    // Salvar preferência
    localStorage.setItem('autoSyncEnabled', window.autoSyncEnabled.toString());
}

// ═══════════════════════════════════════════════════════════════════════════
// 🔄 SINCRONIZAÇÃO AUTOMÁTICA
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Aciona sincronização automática (com debounce)
 */
function triggerAutoSave() {
    if (!window.autoSyncEnabled) {
        console.log('⏸️ Auto-Sync desativado, pulando sincronização');
        return;
    }
    
    const badge = document.getElementById('auto-sync-badge');
    if (badge) {
        badge.textContent = '⏳ Aguardando...';
        badge.classList.add('text-yellow-600');
    }
    
    // Cancelar timer anterior (debounce)
    if (window.autoSyncDebounceTimer) {
        clearTimeout(window.autoSyncDebounceTimer);
    }
    
    // Aguardar 2 segundos antes de sincronizar
    window.autoSyncDebounceTimer = setTimeout(() => {
        executarSincronizacao();
    }, 2000);
}

/**
 * Executa sincronização via GitHub Actions
 */
async function executarSincronizacao() {
    const badge = document.getElementById('auto-sync-badge');
    
    try {
        if (badge) {
            badge.textContent = '🔄 Sincronizando...';
            badge.classList.remove('text-yellow-600');
            badge.classList.add('text-blue-600');
        }
        
        console.log('🔄 Iniciando sincronização via GitHub Actions...');
        
        // Obter todos os produtos
        const todosProdutos = obterTodosProdutos();
        console.log(`📦 Produtos para sincronizar: ${todosProdutos.length}`);
        
        // Verificar se GitHubSyncActions está disponível
        if (!window.gitHubSyncActions) {
            throw new Error('GitHubSyncActions não está disponível');
        }
        
        // Sincronizar via GitHub Actions
        const resultado = await window.gitHubSyncActions.salvarProdutos(todosProdutos);
        
        if (resultado.sucesso) {
            if (badge) {
                badge.textContent = '✅ Pronto';
                badge.classList.remove('text-blue-600');
                badge.classList.add('text-green-600');
            }
            
            console.log('✅ Sincronização preparada com sucesso!');
            
            // Resetar badge após 3 segundos
            setTimeout(() => {
                if (badge && window.autoSyncEnabled) {
                    badge.textContent = 'ON';
                }
            }, 3000);
            
        } else {
            throw new Error(resultado.mensagem || 'Erro desconhecido');
        }
        
    } catch (erro) {
        console.error('❌ Erro na sincronização:', erro);
        
        if (badge) {
            badge.textContent = '❌ Erro';
            badge.classList.remove('text-blue-600', 'text-yellow-600');
            badge.classList.add('text-red-600');
        }
        
        showNotification(`❌ Erro ao sincronizar: ${erro.message}`, 'error');
        
        // Resetar badge após 5 segundos
        setTimeout(() => {
            if (badge && window.autoSyncEnabled) {
                badge.textContent = 'ON';
                badge.classList.remove('text-red-600');
                badge.classList.add('text-green-600');
            }
        }, 5000);
    }
}

/**
 * Obtém todos os produtos do sistema
 */
function obterTodosProdutos() {
    let todosProdutos = [];
    
    // Tentar obter do CRUD primeiro
    if (window.produtoCRUD && typeof window.produtoCRUD.listar === 'function') {
        todosProdutos = window.produtoCRUD.listar();
        console.log(`📦 Produtos obtidos via produtoCRUD: ${todosProdutos.length}`);
    } 
    // Fallback: obter dos arrays globais
    else if (window.produtosPlanilha && window.produtosSugeridos) {
        todosProdutos = [
            ...(window.produtosPlanilha || []),
            ...(window.produtosSugeridos || [])
        ];
        console.log(`📦 Produtos obtidos via arrays globais: ${todosProdutos.length}`);
    }
    else {
        console.warn('⚠️ Nenhuma fonte de produtos encontrada');
    }
    
    return todosProdutos;
}

// ═══════════════════════════════════════════════════════════════════════════
// 🔗 INTEGRAÇÃO COM CRUD
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Conecta Auto-Sync aos eventos do CRUD
 */
function conectarEventosCRUD() {
    // Aguardar CRUD estar disponível
    if (!window.produtoCRUD) {
        console.log('⏳ Aguardando produtoCRUD...');
        setTimeout(conectarEventosCRUD, 100);
        return;
    }
    
    console.log('🔗 Conectando Auto-Sync aos eventos do CRUD...');
    
    // Interceptar métodos do CRUD
    const metodosParaInterceptar = ['criar', 'atualizar', 'deletar', 'importarPlanilha'];
    
    metodosParaInterceptar.forEach(metodo => {
        if (window.produtoCRUD[metodo]) {
            const metodoOriginal = window.produtoCRUD[metodo];
            
            window.produtoCRUD[metodo] = function(...args) {
                const resultado = metodoOriginal.apply(this, args);
                
                console.log(`🔄 CRUD.${metodo}() executado, acionando Auto-Sync...`);
                triggerAutoSave();
                
                return resultado;
            };
        }
    });
    
    console.log('✅ Auto-Sync conectado aos eventos do CRUD');
}

// ═══════════════════════════════════════════════════════════════════════════
// 🎨 NOTIFICAÇÕES
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Mostra notificação para o usuário
 */
function showNotification(mensagem, tipo = 'info') {
    // Criar container se não existir
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }
    
    // Criar notificação
    const notification = document.createElement('div');
    notification.style.cssText = `
        background: white;
        border-radius: 10px;
        padding: 15px 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border-left: 4px solid ${tipo === 'success' ? '#10b981' : tipo === 'error' ? '#ef4444' : '#3b82f6'};
        min-width: 300px;
        animation: slideIn 0.3s ease-out;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    notification.innerHTML = `
        <span style="font-size: 1.2em;">
            ${tipo === 'success' ? '✅' : tipo === 'error' ? '❌' : 'ℹ️'}
        </span>
        <span style="flex: 1; color: #333;">${mensagem}</span>
    `;
    
    // Adicionar CSS de animação
    if (!document.getElementById('notification-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-animation-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
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
    
    container.appendChild(notification);
    
    // Remover após 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ═══════════════════════════════════════════════════════════════════════════
// 🚀 INICIALIZAÇÃO
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Inicializa Auto-Sync ao carregar a página
 */
function initAutoSync() {
    console.log('🚀 Inicializando Auto-Sync via GitHub Actions...');
    
    // Verificar se GitHubSyncActions está disponível
    if (typeof window.gitHubSyncActions === 'undefined') {
        console.log('⏳ Aguardando GitHubSyncActions...');
        setTimeout(initAutoSync, 100);
        return;
    }
    
    console.log('✅ GitHubSyncActions disponível');
    
    // Restaurar estado do localStorage
    const estadoSalvo = localStorage.getItem('autoSyncEnabled');
    if (estadoSalvo === 'true') {
        console.log('💾 Restaurando Auto-Sync do localStorage...');
        setTimeout(() => {
            toggleAutoSync(true);
            showNotification('🔄 Auto-Sync restaurado da sessão anterior', 'info');
        }, 500);
    } else {
        // Ativar por padrão
        console.log('✨ Ativando Auto-Sync por padrão...');
        setTimeout(() => {
            toggleAutoSync(true);
            showNotification('🔄 Auto-Sync ativado por padrão! (GitHub Actions)', 'success');
        }, 500);
    }
    
    // Conectar aos eventos do CRUD
    setTimeout(() => {
        conectarEventosCRUD();
    }, 1000);
    
    // Adicionar event listener ao botão
    const toggleButton = document.getElementById('auto-sync-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => toggleAutoSync());
        console.log('✅ Event listener adicionado ao botão de toggle');
    } else {
        console.warn('⚠️ Botão de toggle não encontrado');
    }
    
    console.log('✅ Auto-Sync inicializado com sucesso!');
    console.log('🔒 Modo SEGURO: Sincronização via GitHub Actions');
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAutoSync);
} else {
    setTimeout(initAutoSync, 100);
}

// ═══════════════════════════════════════════════════════════════════════════
// 📤 EXPORTS GLOBAIS
// ═══════════════════════════════════════════════════════════════════════════

window.toggleAutoSync = toggleAutoSync;
window.triggerAutoSave = triggerAutoSave;
window.executarSincronizacao = executarSincronizacao;

console.log('✅ auto-sync-actions.js carregado');
console.log('🔒 Modo SEGURO ativado - GitHub Actions');
