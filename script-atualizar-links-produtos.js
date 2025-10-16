/**
 * Script Auxiliar para Atualizar Links no produtos-v6.1.js
 * 
 * USO:
 * 1. Abra corrigir-links-produtos.html no navegador
 * 2. Carregue os produtos e gere os links
 * 3. Abra Console do navegador (F12)
 * 4. Cole este script completo no console
 * 5. Execute: gerarScriptAtualizacao()
 * 6. Copie o resultado e use para atualizar produtos-v6.1.js
 */

function gerarScriptAtualizacao() {
    console.log('%c🚀 Gerando script de atualização...', 'color: blue; font-size: 16px; font-weight: bold');
    
    const todosProdutos = window.todosOsProdutosV6 || [];
    
    if (todosProdutos.length === 0) {
        console.error('❌ Nenhum produto carregado! Certifique-se de que produtos-v6.1.js está carregado.');
        return;
    }
    
    // Identificar produtos sem link
    const semLink = todosProdutos.filter(p => 
        !p.linkCompra || 
        p.linkCompra === "#" || 
        p.linkCompra === "" ||
        p.linkCompra.trim() === ""
    );
    
    console.log(`📊 Produtos sem link: ${semLink.length} de ${todosProdutos.length}`);
    
    if (semLink.length === 0) {
        console.log('✅ Todos os produtos já têm links válidos!');
        return;
    }
    
    // Gerar instruções de atualização
    console.log('\n%c📝 INSTRUÇÕES DE ATUALIZAÇÃO', 'color: green; font-size: 14px; font-weight: bold');
    console.log('Copie e cole as instruções abaixo para atualizar produtos-v6.1.js:\n');
    console.log('═'.repeat(80));
    
    semLink.forEach((produto, index) => {
        const link = document.getElementById(`link-${produto.id}`)?.value || '';
        
        if (!link || link === "" || link === "#") {
            console.warn(`⚠️ Produto ${produto.id} ainda não tem link preenchido`);
            return;
        }
        
        console.log(`\n// ${index + 1}. ${produto.nome} (ID: ${produto.id})`);
        console.log(`// Procure no produtos-v6.1.js por: id: ${produto.id},`);
        console.log(`// Adicione ou substitua a linha:`);
        console.log(`linkCompra: "${link}",`);
        console.log('─'.repeat(80));
    });
    
    console.log('\n' + '═'.repeat(80));
    console.log('%c✅ Script gerado com sucesso!', 'color: green; font-size: 14px; font-weight: bold');
    console.log(`Total de atualizações: ${semLink.filter(p => {
        const link = document.getElementById(`link-${p.id}`)?.value;
        return link && link !== "" && link !== "#";
    }).length}`);
}

function gerarJSONCompleto() {
    console.log('%c💾 Gerando JSON completo...', 'color: blue; font-size: 16px; font-weight: bold');
    
    const todosProdutos = window.todosOsProdutosV6 || [];
    
    if (todosProdutos.length === 0) {
        console.error('❌ Nenhum produto carregado!');
        return;
    }
    
    // Atualizar links dos produtos
    const produtosAtualizados = todosProdutos.map(produto => {
        const linkInput = document.getElementById(`link-${produto.id}`);
        const novoLink = linkInput?.value;
        
        if (novoLink && novoLink !== "" && novoLink !== "#" && novoLink !== produto.linkCompra) {
            return {
                ...produto,
                linkCompra: novoLink
            };
        }
        
        return produto;
    });
    
    // Contar atualizações
    const atualizados = produtosAtualizados.filter((p, i) => 
        p.linkCompra !== todosProdutos[i].linkCompra
    );
    
    console.log(`✅ ${atualizados.length} produtos atualizados`);
    
    // Baixar JSON
    const blob = new Blob([JSON.stringify(produtosAtualizados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `produtos-atualizados-completo-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    console.log('%c💾 JSON completo exportado!', 'color: green; font-size: 14px; font-weight: bold');
}

function validarLinksPreenchidos() {
    console.log('%c🔍 Validando links preenchidos...', 'color: blue; font-size: 16px; font-weight: bold');
    
    const todosProdutos = window.todosOsProdutosV6 || [];
    const semLink = todosProdutos.filter(p => 
        !p.linkCompra || p.linkCompra === "#" || p.linkCompra === ""
    );
    
    let validos = 0;
    let invalidos = 0;
    let vazios = 0;
    
    const erros = [];
    
    semLink.forEach(produto => {
        const link = document.getElementById(`link-${produto.id}`)?.value || '';
        
        if (!link || link === "" || link === "#") {
            vazios++;
            erros.push({
                produto: produto.nome,
                id: produto.id,
                erro: 'Link vazio ou não preenchido'
            });
        } else if (!link.startsWith('http://') && !link.startsWith('https://')) {
            invalidos++;
            erros.push({
                produto: produto.nome,
                id: produto.id,
                erro: 'Link não é uma URL válida (deve começar com http:// ou https://)'
            });
        } else {
            validos++;
        }
    });
    
    console.log('\n%c📊 RESULTADO DA VALIDAÇÃO', 'color: green; font-size: 14px; font-weight: bold');
    console.log('═'.repeat(80));
    console.log(`✅ Links válidos: ${validos}`);
    console.log(`❌ Links inválidos: ${invalidos}`);
    console.log(`⚠️ Links vazios: ${vazios}`);
    console.log('═'.repeat(80));
    
    if (erros.length > 0) {
        console.log('\n%c⚠️ ERROS ENCONTRADOS:', 'color: orange; font-size: 14px; font-weight: bold');
        erros.forEach((erro, index) => {
            console.log(`${index + 1}. ${erro.produto} (ID: ${erro.id})`);
            console.log(`   Erro: ${erro.erro}`);
        });
    } else {
        console.log('\n%c✅ Todos os links estão válidos!', 'color: green; font-size: 14px; font-weight: bold');
    }
}

function estatisticas() {
    console.log('%c📊 ESTATÍSTICAS GERAIS', 'color: blue; font-size: 16px; font-weight: bold');
    
    const todosProdutos = window.todosOsProdutosV6 || [];
    const semLinkOriginal = todosProdutos.filter(p => 
        !p.linkCompra || p.linkCompra === "#" || p.linkCompra === ""
    );
    
    let preenchidos = 0;
    semLinkOriginal.forEach(produto => {
        const link = document.getElementById(`link-${produto.id}`)?.value || '';
        if (link && link !== "" && link !== "#" && link.startsWith('http')) {
            preenchidos++;
        }
    });
    
    const progresso = semLinkOriginal.length > 0 
        ? Math.round((preenchidos / semLinkOriginal.length) * 100)
        : 100;
    
    console.log('═'.repeat(80));
    console.log(`📦 Total de produtos: ${todosProdutos.length}`);
    console.log(`❌ Produtos sem link (original): ${semLinkOriginal.length}`);
    console.log(`✅ Links preenchidos agora: ${preenchidos}`);
    console.log(`⏳ Links faltando: ${semLinkOriginal.length - preenchidos}`);
    console.log(`📈 Progresso: ${progresso}%`);
    console.log('═'.repeat(80));
    
    if (progresso === 100) {
        console.log('%c🎉 PARABÉNS! Todos os links foram preenchidos!', 'color: green; font-size: 16px; font-weight: bold');
    } else {
        console.log(`%c⚠️ Faltam ${semLinkOriginal.length - preenchidos} produtos para preencher`, 'color: orange; font-size: 14px');
    }
}

// ============================================
// MENU DE FUNÇÕES DISPONÍVEIS
// ============================================
console.log('%c╔════════════════════════════════════════════════════════════╗', 'color: blue');
console.log('%c║  🛠️  SCRIPT AUXILIAR DE ATUALIZAÇÃO DE LINKS            ║', 'color: blue; font-weight: bold');
console.log('%c╚════════════════════════════════════════════════════════════╝', 'color: blue');

console.log('\n%c📋 FUNÇÕES DISPONÍVEIS:', 'color: green; font-size: 14px; font-weight: bold');
console.log('');
console.log('1️⃣ gerarScriptAtualizacao()');
console.log('   → Gera instruções para atualizar produtos-v6.1.js manualmente');
console.log('');
console.log('2️⃣ gerarJSONCompleto()');
console.log('   → Exporta JSON completo com todos os produtos atualizados');
console.log('');
console.log('3️⃣ validarLinksPreenchidos()');
console.log('   → Valida se todos os links estão corretos');
console.log('');
console.log('4️⃣ estatisticas()');
console.log('   → Mostra estatísticas gerais de progresso');
console.log('');

console.log('%c💡 DICA:', 'color: orange; font-weight: bold');
console.log('Execute uma função digitando o nome e pressionando Enter.');
console.log('Exemplo: gerarScriptAtualizacao()');
console.log('');

// Executar estatísticas automaticamente
estatisticas();
