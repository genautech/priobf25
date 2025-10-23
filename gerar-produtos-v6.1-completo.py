#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para gerar produtos-v6.1.js a partir de planilha-nova.csv
Versão: 1.0
Data: 2025-10-23
"""

import csv
import json
from datetime import datetime

def limpar_preco(valor):
    """Converte preço brasileiro (vírgula) para float"""
    if not valor or valor.strip() == '' or valor == 'Não encontrado':
        return 0
    
    # Remove caracteres especiais e converte vírgula para ponto
    valor_limpo = valor.replace('R$', '').replace('.', '').replace(',', '.').strip()
    try:
        return float(valor_limpo)
    except:
        return 0

def gerar_id(index):
    """Gera ID sequencial começando em 1001"""
    return 1000 + index + 1

def processar_csv():
    """Processa o CSV e retorna lista de produtos"""
    produtos = []
    
    with open('planilha-nova.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f, delimiter=';')
        
        for i, row in enumerate(reader):
            sku = row.get('SKU', f'SKU-{i+1}')
            nome = row.get('Nome do Produto', 'Produto')
            categoria = row.get('Categoria', 'Eletrônicos')
            subcategoria = row.get('Subcategoria', 'Diversos')
            fornecedor = row.get('Fornecedor') or row.get('Marketplace') or 'Amazon'
            
            preco_mercado = limpar_preco(row.get('Preço Mercado', '0'))
            preco_concorrente = limpar_preco(row.get('Menor preço Marketplaces', '0'))
            
            # Se não tem preço de mercado mas tem concorrente, usa o concorrente
            if preco_mercado == 0 and preco_concorrente > 0:
                preco_mercado = preco_concorrente * 1.15  # 15% acima
            
            # Se nenhum preço, define padrão
            if preco_mercado == 0:
                preco_mercado = 1000
            
            custo_base = preco_mercado * 0.85  # 85% do preço de mercado
            margem = 30
            preco_venda = custo_base * (1 + margem/100)
            
            # Determina estoque
            if preco_concorrente > 0:
                estoque = "Em Estoque"
            else:
                estoque = "Sob Consulta"
            
            link_compra = row.get('Link de compra', '').strip()
            prazo_entrega = row.get('Prazo de entrega marketplace', '').strip()
            marketplace = row.get('Marketplace', '').strip()
            
            produto = {
                'id': gerar_id(i),
                'sku': sku,
                'nome': nome,
                'categoria': categoria,
                'subcategoria': subcategoria,
                'quantidade': 10,
                'custoBase': round(custo_base, 2),
                'precoMercado': round(preco_mercado, 2),
                'margem': margem,
                'precoVenda': round(preco_venda, 2),
                'estoque': estoque,
                'fornecedor': fornecedor,
                'imagem': f'https://via.placeholder.com/400/667eea/ffffff?text={nome.replace(" ", "%20")}',
                'linkCompra': link_compra,
                'descricao': nome,
                'especificacoes': {
                    'marketplace': marketplace,
                    'prazoEntrega': prazo_entrega
                }
            }
            
            # Adiciona precoConcorrente se disponível
            if preco_concorrente > 0:
                produto['precoConcorrente'] = round(preco_concorrente, 2)
            
            produtos.append(produto)
    
    return produtos

def gerar_arquivo_js(produtos):
    """Gera o arquivo produtos-v6.1.js completo"""
    
    data_atual = datetime.now().strftime('%d/%m/%Y, %H:%M:%S')
    
    conteudo = f'''// ============================================
// CATÁLOGO DE PRODUTOS - BLACK FRIDAY 2025
// Total: {len(produtos)} produtos
// Gerado em: {data_atual}
// ============================================

// ============================================
// CUPONS DE DESCONTO DISPONÍVEIS
// ============================================
const cuponsDesconto = [
    {{
        id: "CUP-001",
        loja: "Amazon",
        codigo: "BLACKFRIDAY25",
        desconto: "15%",
        validade: "2025-11-29",
        minimo: 200,
        maximo: 500,
        categorias: ["Eletrônicos", "Casa e Cozinha"],
        ativo: true,
        link: "https://www.amazon.com.br"
    }},
    {{
        id: "CUP-002",
        loja: "Magazine Luiza",
        codigo: "MAGALU15",
        desconto: "10%",
        validade: "2025-11-30",
        minimo: 150,
        maximo: 300,
        categorias: ["Eletrônicos"],
        ativo: true,
        link: "https://www.magazineluiza.com.br"
    }},
    {{
        id: "CUP-003",
        loja: "Mercado Livre",
        codigo: "MELI12",
        desconto: "12%",
        validade: "2025-11-28",
        minimo: 100,
        maximo: 400,
        categorias: ["Todos"],
        ativo: true,
        link: "https://www.mercadolivre.com.br"
    }}
];

// ============================================
// PRODUTOS DA PLANILHA
// ============================================
const produtosPlanilha = ''' + json.dumps(produtos, indent=4, ensure_ascii=False) + ''';

// ============================================
// PRODUTOS SUGERIDOS (vazio por enquanto)
// ============================================
const produtosSugeridos = [];

// ============================================
// EXPORTAÇÃO PARA USO GLOBAL
// ============================================
// ============================================
// EXPORTAÇÃO PARA WINDOW (BROWSER)
// ============================================
if (typeof window !== 'undefined') {
    window.produtosPlanilha = produtosPlanilha;
    window.produtosSugeridos = produtosSugeridos;
    window.todosOsProdutosV6 = [...produtosPlanilha, ...produtosSugeridos];
    window.cuponsDesconto = cuponsDesconto;
    
    console.log('✅ Catálogo carregado:', {
        planilha: produtosPlanilha.length,
        sugeridos: produtosSugeridos.length,
        total: produtosPlanilha.length + produtosSugeridos.length
    });
}

// Export para Node.js (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        produtosPlanilha,
        produtosSugeridos,
        todosOsProdutosV6: [...produtosPlanilha, ...produtosSugeridos],
        cuponsDesconto
    };
}
'''
    
    with open('produtos-v6.1.js', 'w', encoding='utf-8') as f:
        f.write(conteudo)
    
    print(f'✅ Arquivo produtos-v6.1.js gerado com sucesso!')
    print(f'📊 Total: {len(produtos)} produtos')
    print(f'📝 Tamanho: {len(conteudo):,} bytes')

if __name__ == '__main__':
    print('🚀 Iniciando processamento do CSV...')
    produtos = processar_csv()
    print(f'✅ {len(produtos)} produtos processados')
    
    print('\n📝 Gerando arquivo JavaScript...')
    gerar_arquivo_js(produtos)
    
    print('\n🎉 CONCLUÍDO! Arquivo pronto para uso.')
    print('📁 Arquivo gerado: produtos-v6.1.js')
