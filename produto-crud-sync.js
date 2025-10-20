// ============================================
// SISTEMA CRUD + SINCRONIZAÇÃO AUTOMÁTICA
// Versão 6.3.0 - Black Friday PRIO
// ============================================
// Este módulo gerencia:
// - Criação, leitura, atualização e exclusão de produtos
// - Sincronização automática entre todas as áreas do sistema
// - Backup automático antes de modificações
// - Validação de dados
// - Geração automática de IDs e SKUs
// ============================================

class ProdutoCRUDSync {
    constructor() {
        this.produtos = [];
        this.produtosPlanilha = [];
        this.produtosSugeridos = [];
        this.listeners = [];
        this.backupHistory = [];
        this.maxBackups = 10;
    }

    // ============================================
    // INICIALIZAÇÃO
    // ============================================
    
    init(produtosPlanilha, produtosSugeridos) {
        this.produtosPlanilha = produtosPlanilha || [];
        this.produtosSugeridos = produtosSugeridos || [];
        this.produtos = [...this.produtosPlanilha, ...this.produtosSugeridos];
        this.createBackup('init');
        console.log(`✅ CRUD Sync inicializado: ${this.produtos.length} produtos`);
    }

    // ============================================
    // BACKUP AUTOMÁTICO
    // ============================================
    
    createBackup(reason = 'manual') {
        const backup = {
            timestamp: new Date().toISOString(),
            reason: reason,
            produtosPlanilha: JSON.parse(JSON.stringify(this.produtosPlanilha)),
            produtosSugeridos: JSON.parse(JSON.stringify(this.produtosSugeridos)),
            totalProdutos: this.produtos.length
        };
        
        this.backupHistory.push(backup);
        
        // Manter apenas os últimos backups
        if (this.backupHistory.length > this.maxBackups) {
            this.backupHistory.shift();
        }
        
        console.log(`📦 Backup criado: ${reason} (${this.produtos.length} produtos)`);
        return backup;
    }

    restoreBackup(index = -1) {
        if (this.backupHistory.length === 0) {
            console.error('❌ Nenhum backup disponível');
            return false;
        }
        
        const backupIndex = index < 0 ? this.backupHistory.length + index : index;
        const backup = this.backupHistory[backupIndex];
        
        if (!backup) {
            console.error('❌ Backup não encontrado no índice:', backupIndex);
            return false;
        }
        
        this.produtosPlanilha = JSON.parse(JSON.stringify(backup.produtosPlanilha));
        this.produtosSugeridos = JSON.parse(JSON.stringify(backup.produtosSugeridos));
        this.produtos = [...this.produtosPlanilha, ...this.produtosSugeridos];
        
        console.log(`✅ Backup restaurado: ${backup.reason} (${this.produtos.length} produtos)`);
        this.notifyListeners('restore', backup);
        return true;
    }

    // ============================================
    // GERAÇÃO DE IDs E SKUs
    // ============================================
    
    gerarNovoId(tipo = 'planilha') {
        let maxId = 1000;
        
        if (tipo === 'planilha') {
            // IDs da planilha: 1001-1999
            const ids = this.produtosPlanilha.map(p => p.id).filter(id => id >= 1000 && id < 2000);
            maxId = ids.length > 0 ? Math.max(...ids) : 1000;
        } else {
            // IDs sugeridos: 2000+
            const ids = this.produtosSugeridos.map(p => p.id).filter(id => id >= 2000);
            maxId = ids.length > 0 ? Math.max(...ids) : 1999;
        }
        
        return maxId + 1;
    }

    gerarNovoSKU(categoria, subcategoria) {
        // Gerar SKU baseado na categoria
        const prefixos = {
            'Eletrônicos': 'ELE',
            'Casa e Cozinha': 'CASA',
            'Geral': 'GRL',
            'Esporte': 'ESP'
        };
        
        const prefixo = prefixos[categoria] || 'PROD';
        const numero = String(this.produtos.length + 1).padStart(4, '0');
        
        return `${prefixo}-${numero}`;
    }

    // ============================================
    // VALIDAÇÃO DE DADOS
    // ============================================
    
    validarProduto(produto) {
        const erros = [];
        
        // Campos obrigatórios
        if (!produto.nome || produto.nome.trim() === '') {
            erros.push('Nome do produto é obrigatório');
        }
        
        if (!produto.categoria || produto.categoria.trim() === '') {
            erros.push('Categoria é obrigatória');
        }
        
        if (!produto.custoBase || produto.custoBase <= 0) {
            erros.push('Custo base deve ser maior que zero');
        }
        
        if (!produto.margem || produto.margem < 0) {
            erros.push('Margem deve ser maior ou igual a zero');
        }
        
        // Validação de SKU único
        if (produto.sku) {
            const skuExistente = this.produtos.find(p => 
                p.sku === produto.sku && p.id !== produto.id
            );
            if (skuExistente) {
                erros.push(`SKU ${produto.sku} já está em uso pelo produto ID ${skuExistente.id}`);
            }
        }
        
        return {
            valido: erros.length === 0,
            erros: erros
        };
    }

    // ============================================
    // CRUD - CREATE (Criar)
    // ============================================
    
    criarProduto(dadosProduto, tipo = 'planilha') {
        this.createBackup('antes_criar_produto');
        
        try {
            // Preparar dados do produto
            const novoProduto = {
                id: this.gerarNovoId(tipo),
                sku: dadosProduto.sku || this.gerarNovoSKU(dadosProduto.categoria, dadosProduto.subcategoria),
                nome: dadosProduto.nome,
                categoria: dadosProduto.categoria,
                subcategoria: dadosProduto.subcategoria || '',
                quantidade: dadosProduto.quantidade || 0,
                custoBase: parseFloat(dadosProduto.custoBase) || 0,
                precoMercado: parseFloat(dadosProduto.precoMercado) || 0,
                margem: parseFloat(dadosProduto.margem) || 0,
                precoVenda: 0, // Será calculado
                estoque: dadosProduto.estoque || 'Para Compra',
                fornecedor: dadosProduto.fornecedor || '',
                imagem: dadosProduto.imagem || '',
                linkCompra: dadosProduto.linkCompra || '',
                descricao: dadosProduto.descricao || '',
                especificacoes: dadosProduto.especificacoes || {},
                dataCriacao: new Date().toISOString(),
                dataAtualizacao: new Date().toISOString()
            };
            
            // Calcular preço de venda
            novoProduto.precoVenda = novoProduto.custoBase * (1 + novoProduto.margem / 100);
            
            // Validar produto
            const validacao = this.validarProduto(novoProduto);
            if (!validacao.valido) {
                throw new Error('Validação falhou: ' + validacao.erros.join(', '));
            }
            
            // Adicionar à lista apropriada
            if (tipo === 'planilha') {
                this.produtosPlanilha.push(novoProduto);
            } else {
                this.produtosSugeridos.push(novoProduto);
            }
            
            // Atualizar lista unificada
            this.produtos = [...this.produtosPlanilha, ...this.produtosSugeridos];
            
            // Notificar listeners
            this.notifyListeners('create', novoProduto);
            
            console.log(`✅ Produto criado: ${novoProduto.nome} (ID: ${novoProduto.id})`);
            return { sucesso: true, produto: novoProduto };
            
        } catch (erro) {
            console.error('❌ Erro ao criar produto:', erro);
            this.restoreBackup(-1); // Restaurar último backup
            return { sucesso: false, erro: erro.message };
        }
    }

    // ============================================
    // CRUD - READ (Ler)
    // ============================================
    
    obterProduto(id) {
        return this.produtos.find(p => p.id === id);
    }

    obterProdutoPorSKU(sku) {
        return this.produtos.find(p => p.sku === sku);
    }

    listarProdutos(filtros = {}) {
        let produtosFiltrados = [...this.produtos];
        
        // Filtro por categoria
        if (filtros.categoria) {
            produtosFiltrados = produtosFiltrados.filter(p => 
                p.categoria === filtros.categoria
            );
        }
        
        // Filtro por subcategoria
        if (filtros.subcategoria) {
            produtosFiltrados = produtosFiltrados.filter(p => 
                p.subcategoria === filtros.subcategoria
            );
        }
        
        // Filtro por texto (busca em nome, descrição, SKU)
        if (filtros.texto) {
            const textoLower = filtros.texto.toLowerCase();
            produtosFiltrados = produtosFiltrados.filter(p => 
                p.nome.toLowerCase().includes(textoLower) ||
                p.sku.toLowerCase().includes(textoLower) ||
                (p.descricao && p.descricao.toLowerCase().includes(textoLower))
            );
        }
        
        // Filtro por faixa de preço
        if (filtros.precoMin !== undefined) {
            produtosFiltrados = produtosFiltrados.filter(p => 
                p.precoVenda >= filtros.precoMin
            );
        }
        
        if (filtros.precoMax !== undefined) {
            produtosFiltrados = produtosFiltrados.filter(p => 
                p.precoVenda <= filtros.precoMax
            );
        }
        
        // Ordenação
        if (filtros.ordenar) {
            const campo = filtros.ordenar;
            const direcao = filtros.direcao || 'asc';
            
            produtosFiltrados.sort((a, b) => {
                let valorA = a[campo];
                let valorB = b[campo];
                
                if (typeof valorA === 'string') {
                    valorA = valorA.toLowerCase();
                    valorB = valorB.toLowerCase();
                }
                
                if (direcao === 'asc') {
                    return valorA > valorB ? 1 : -1;
                } else {
                    return valorA < valorB ? 1 : -1;
                }
            });
        }
        
        return produtosFiltrados;
    }

    // ============================================
    // CRUD - UPDATE (Atualizar)
    // ============================================
    
    atualizarProduto(id, dadosAtualizados) {
        this.createBackup('antes_atualizar_produto');
        
        try {
            // Encontrar produto
            const produto = this.obterProduto(id);
            if (!produto) {
                throw new Error(`Produto com ID ${id} não encontrado`);
            }
            
            // Criar cópia com atualizações
            const produtoAtualizado = {
                ...produto,
                ...dadosAtualizados,
                id: produto.id, // Garantir que ID não muda
                dataAtualizacao: new Date().toISOString()
            };
            
            // Recalcular preço de venda se necessário
            if (dadosAtualizados.custoBase !== undefined || dadosAtualizados.margem !== undefined) {
                produtoAtualizado.precoVenda = produtoAtualizado.custoBase * (1 + produtoAtualizado.margem / 100);
            }
            
            // Validar produto atualizado
            const validacao = this.validarProduto(produtoAtualizado);
            if (!validacao.valido) {
                throw new Error('Validação falhou: ' + validacao.erros.join(', '));
            }
            
            // Atualizar na lista apropriada
            let lista = this.produtosPlanilha;
            let index = lista.findIndex(p => p.id === id);
            
            if (index === -1) {
                lista = this.produtosSugeridos;
                index = lista.findIndex(p => p.id === id);
            }
            
            if (index !== -1) {
                lista[index] = produtoAtualizado;
            }
            
            // Atualizar lista unificada
            this.produtos = [...this.produtosPlanilha, ...this.produtosSugeridos];
            
            // Notificar listeners
            this.notifyListeners('update', produtoAtualizado);
            
            console.log(`✅ Produto atualizado: ${produtoAtualizado.nome} (ID: ${id})`);
            return { sucesso: true, produto: produtoAtualizado };
            
        } catch (erro) {
            console.error('❌ Erro ao atualizar produto:', erro);
            this.restoreBackup(-1);
            return { sucesso: false, erro: erro.message };
        }
    }

    // ============================================
    // CRUD - DELETE (Excluir)
    // ============================================
    
    excluirProduto(id, excluirPermanente = false) {
        this.createBackup('antes_excluir_produto');
        
        try {
            const produto = this.obterProduto(id);
            if (!produto) {
                throw new Error(`Produto com ID ${id} não encontrado`);
            }
            
            if (excluirPermanente) {
                // Remover permanentemente
                this.produtosPlanilha = this.produtosPlanilha.filter(p => p.id !== id);
                this.produtosSugeridos = this.produtosSugeridos.filter(p => p.id !== id);
            } else {
                // Soft delete (marcar como excluído)
                this.atualizarProduto(id, { 
                    excluido: true,
                    dataExclusao: new Date().toISOString()
                });
            }
            
            // Atualizar lista unificada
            this.produtos = [...this.produtosPlanilha, ...this.produtosSugeridos];
            
            // Notificar listeners
            this.notifyListeners('delete', { id, produto, permanente: excluirPermanente });
            
            console.log(`✅ Produto excluído: ${produto.nome} (ID: ${id}) - Permanente: ${excluirPermanente}`);
            return { sucesso: true, produto: produto };
            
        } catch (erro) {
            console.error('❌ Erro ao excluir produto:', erro);
            this.restoreBackup(-1);
            return { sucesso: false, erro: erro.message };
        }
    }

    // ============================================
    // DUPLICAÇÃO DE PRODUTOS
    // ============================================
    
    duplicarProduto(id) {
        try {
            const produtoOriginal = this.obterProduto(id);
            if (!produtoOriginal) {
                throw new Error(`Produto com ID ${id} não encontrado`);
            }
            
            // Criar cópia
            const produtoDuplicado = {
                ...produtoOriginal,
                id: undefined, // Será gerado novo ID
                sku: `${produtoOriginal.sku}-COPIA`,
                nome: `${produtoOriginal.nome} (Cópia)`,
                dataCriacao: new Date().toISOString(),
                dataAtualizacao: new Date().toISOString()
            };
            
            // Determinar tipo baseado no ID original
            const tipo = produtoOriginal.id < 2000 ? 'planilha' : 'sugerido';
            
            return this.criarProduto(produtoDuplicado, tipo);
            
        } catch (erro) {
            console.error('❌ Erro ao duplicar produto:', erro);
            return { sucesso: false, erro: erro.message };
        }
    }

    // ============================================
    // SINCRONIZAÇÃO E NOTIFICAÇÕES
    // ============================================
    
    addListener(callback) {
        this.listeners.push(callback);
    }

    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    notifyListeners(acao, dados) {
        this.listeners.forEach(listener => {
            try {
                listener(acao, dados);
            } catch (erro) {
                console.error('Erro ao notificar listener:', erro);
            }
        });
    }

    // ============================================
    // EXPORTAÇÃO PARA JAVASCRIPT
    // ============================================
    
    exportarParaJS() {
        const template = `// ============================================
// VERSÃO 6.3.0 - PRODUTOS BLACK FRIDAY PRIO 2025
// Total: ${this.produtos.length} produtos (${this.produtosPlanilha.length} planilha + ${this.produtosSugeridos.length} sugestões)
// Atualizado: ${new Date().toISOString().split('T')[0]}
// ============================================

const produtosPlanilha = ${JSON.stringify(this.produtosPlanilha, null, 4)};

const produtosSugeridos = ${JSON.stringify(this.produtosSugeridos, null, 4)};

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.produtosPlanilha = produtosPlanilha;
    window.produtosSugeridos = produtosSugeridos;
}
`;
        
        return template;
    }

    // ============================================
    // IMPORTAÇÃO EM MASSA
    // ============================================
    
    importarProdutos(produtos, tipo = 'planilha', substituir = false) {
        this.createBackup('antes_importacao_massa');
        
        try {
            const resultados = {
                sucesso: [],
                erros: [],
                total: produtos.length
            };
            
            produtos.forEach((produto, index) => {
                const resultado = this.criarProduto(produto, tipo);
                
                if (resultado.sucesso) {
                    resultados.sucesso.push({
                        index: index,
                        produto: resultado.produto
                    });
                } else {
                    resultados.erros.push({
                        index: index,
                        produto: produto,
                        erro: resultado.erro
                    });
                }
            });
            
            console.log(`✅ Importação concluída: ${resultados.sucesso.length} sucessos, ${resultados.erros.length} erros`);
            return resultados;
            
        } catch (erro) {
            console.error('❌ Erro na importação em massa:', erro);
            this.restoreBackup(-1);
            return { sucesso: false, erro: erro.message };
        }
    }
}

// ============================================
// INSTÂNCIA GLOBAL
// ============================================

const produtoCRUD = new ProdutoCRUDSync();

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.produtoCRUD = produtoCRUD;
    window.ProdutoCRUDSync = ProdutoCRUDSync;
}

console.log('✅ Sistema CRUD + Sincronização carregado com sucesso!');
