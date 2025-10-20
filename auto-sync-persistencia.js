/**
 * Auto-Sync Persistência v6.3.2
 * Sistema de persistência do estado do Auto-Sync no navegador
 * 
 * FUNCIONALIDADE:
 * - Salva automaticamente o estado do Auto-Sync (ON/OFF)
 * - Restaura o estado quando a página é recarregada
 * - Notifica o usuário sobre a restauração automática
 * 
 * USO:
 * Este arquivo é carregado automaticamente pelo admin-v6.3.html
 */

class AutoSyncPersistence {
    constructor() {
        this.storageKey = 'auto-sync-state';
        this.init();
    }

    /**
     * Inicializa o sistema de persistência
     */
    init() {
        // Aguarda o DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.restore());
        } else {
            this.restore();
        }
    }

    /**
     * Salva o estado atual do Auto-Sync
     * @param {boolean} isEnabled - Se o Auto-Sync está ativado
     */
    save(isEnabled) {
        try {
            const state = {
                enabled: isEnabled,
                savedAt: new Date().toISOString(),
                version: '6.3.2'
            };
            localStorage.setItem(this.storageKey, JSON.stringify(state));
            console.log('✅ Auto-Sync state saved:', state);
            return true;
        } catch (error) {
            console.error('❌ Erro ao salvar estado do Auto-Sync:', error);
            return false;
        }
    }

    /**
     * Restaura o estado salvo do Auto-Sync
     */
    restore() {
        try {
            const savedState = localStorage.getItem(this.storageKey);
            
            if (!savedState) {
                console.log('ℹ️ Nenhum estado de Auto-Sync salvo encontrado');
                return false;
            }

            const state = JSON.parse(savedState);
            
            // Verifica se o estado é válido
            if (typeof state.enabled !== 'boolean') {
                console.warn('⚠️ Estado do Auto-Sync inválido, ignorando');
                return false;
            }

            console.log('🔄 Restaurando estado do Auto-Sync:', state);

            // Se estava ativado, reativa
            if (state.enabled) {
                // Aguarda a função toggleAutoSync estar disponível
                const checkAndRestore = () => {
                    if (typeof window.toggleAutoSync === 'function') {
                        // Se já está ativado, apenas atualiza a UI
                        if (window.autoSyncEnabled) {
                            this.updateBadgeUI(true);
                            this.showNotification('Auto-Sync já estava ativo', 'info');
                        } else {
                            // Ativa o Auto-Sync
                            window.toggleAutoSync(true); // Passa true para forçar ativação
                            this.showNotification('Auto-Sync reativado automaticamente! 🔄', 'success');
                        }
                    } else {
                        // Tenta novamente em 100ms
                        setTimeout(checkAndRestore, 100);
                    }
                };
                
                // Aguarda 500ms para garantir que todos os scripts estão carregados
                setTimeout(checkAndRestore, 500);
            } else {
                console.log('ℹ️ Auto-Sync estava desativado, mantendo desativado');
            }

            return true;
        } catch (error) {
            console.error('❌ Erro ao restaurar estado do Auto-Sync:', error);
            return false;
        }
    }

    /**
     * Atualiza a UI do badge de Auto-Sync
     * @param {boolean} isEnabled - Se o Auto-Sync está ativado
     */
    updateBadgeUI(isEnabled) {
        const badge = document.getElementById('auto-sync-badge');
        if (!badge) return;

        if (isEnabled) {
            badge.className = 'px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full cursor-pointer hover:opacity-80 transition-all inline-block';
            badge.textContent = '🔄 Auto-Sync: ON';
        } else {
            badge.className = 'px-3 py-1 bg-gray-400 text-white text-xs font-bold rounded-full cursor-pointer hover:opacity-80 transition-all inline-block';
            badge.textContent = '🔄 Auto-Sync: OFF';
        }
    }

    /**
     * Mostra uma notificação para o usuário
     * @param {string} message - Mensagem a exibir
     * @param {string} type - Tipo da notificação (success, info, warning, error)
     */
    showNotification(message, type = 'info') {
        // Verifica se a função de notificação global existe
        if (typeof window.showNotification === 'function') {
            window.showNotification(message, type);
            return;
        }

        // Fallback: cria notificação simples
        const notification = document.createElement('div');
        const colors = {
            success: 'bg-green-500',
            info: 'bg-blue-500',
            warning: 'bg-yellow-500',
            error: 'bg-red-500'
        };
        
        notification.className = `fixed top-4 right-4 ${colors[type] || colors.info} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }

    /**
     * Limpa o estado salvo (útil para debug)
     */
    clear() {
        try {
            localStorage.removeItem(this.storageKey);
            console.log('🗑️ Estado do Auto-Sync limpo');
            return true;
        } catch (error) {
            console.error('❌ Erro ao limpar estado do Auto-Sync:', error);
            return false;
        }
    }

    /**
     * Retorna o estado atual salvo
     * @returns {Object|null} - Estado salvo ou null se não existir
     */
    getState() {
        try {
            const savedState = localStorage.getItem(this.storageKey);
            return savedState ? JSON.parse(savedState) : null;
        } catch (error) {
            console.error('❌ Erro ao ler estado do Auto-Sync:', error);
            return null;
        }
    }
}

// Cria instância global
window.autoSyncPersistence = new AutoSyncPersistence();

// Adiciona ao console para debug
console.log('✅ Auto-Sync Persistência v6.3.2 carregado');
console.log('🔧 Debug commands:');
console.log('  - autoSyncPersistence.getState() - Ver estado salvo');
console.log('  - autoSyncPersistence.clear() - Limpar estado salvo');
console.log('  - autoSyncPersistence.save(true/false) - Salvar estado manualmente');
