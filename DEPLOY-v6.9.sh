#!/bin/bash

# ════════════════════════════════════════════════════════════
# 🚀 Script de Deploy - Sistema Black Friday PRIO v6.9.0
# ════════════════════════════════════════════════════════════
# Data: 2025-10-21
# Versão: 6.9.0
# Novas funcionalidades:
#   - Re-sincronização de Preços
#   - Re-inserção de Produtos Obsoletos
# ════════════════════════════════════════════════════════════

echo "════════════════════════════════════════════════════════════"
echo "  🚀 Deploy Sistema Black Friday PRIO v6.9.0"
echo "════════════════════════════════════════════════════════════"
echo ""

# Verificar se está no diretório correto
if [ ! -f "admin-v6.9.html" ]; then
    echo "❌ Erro: arquivo admin-v6.9.html não encontrado!"
    echo "Execute este script no diretório raiz do projeto."
    exit 1
fi

echo "✅ Arquivos principais encontrados"
echo ""

# Mostrar status atual
echo "📊 Status atual do Git:"
git status --short
echo ""

# Listar arquivos que serão commitados
echo "📦 Arquivos da versão 6.9.0:"
echo "  ✅ admin-v6.9.html (NOVO)"
echo "  ✅ index.html (ATUALIZADO)"
echo "  ✅ README.md (ATUALIZADO)"
echo "  ✅ NOVAS-FUNCIONALIDADES-v6.9.md (NOVO)"
echo "  ✅ GUIA-RAPIDO-v6.9.md (NOVO)"
echo "  ✅ RESUMO-v6.9.txt (NOVO)"
echo "  ✅ 👉-LEIA-PRIMEIRO-v6.9.txt (NOVO)"
echo "  ✅ DEPLOY-v6.9.sh (NOVO - este arquivo)"
echo ""

# Perguntar confirmação
read -p "🤔 Deseja continuar com o deploy? (s/n): " confirmacao
if [ "$confirmacao" != "s" ] && [ "$confirmacao" != "S" ]; then
    echo "❌ Deploy cancelado pelo usuário"
    exit 0
fi

echo ""
echo "🔄 Iniciando processo de deploy..."
echo ""

# Add arquivos novos e modificados
echo "📝 Adicionando arquivos ao stage..."
git add admin-v6.9.html
git add index.html
git add README.md
git add NOVAS-FUNCIONALIDADES-v6.9.md
git add GUIA-RAPIDO-v6.9.md
git add RESUMO-v6.9.txt
git add 👉-LEIA-PRIMEIRO-v6.9.txt
git add DEPLOY-v6.9.sh

echo "✅ Arquivos adicionados"
echo ""

# Commit
echo "💾 Criando commit..."
git commit -m "🚀 Release v6.9.0 - Re-sincronização de Preços + Re-inserção de Produtos

✨ Novas Funcionalidades:

1. 💰 Re-sincronização de Preços
   - Atualizar múltiplos produtos de uma vez
   - Interface intuitiva com seleção de produtos
   - Links diretos para páginas dos fornecedores
   - Atualização em lote de Custo Base e Preço Mercado
   - Validação inteligente de campos
   - Registro automático no histórico

2. 🔄 Re-inserção de Produtos Obsoletos
   - Detectar produtos removidos no histórico
   - Seleção individual de produtos para recuperar
   - Opção de remover do histórico OU re-inserir
   - Produtos re-inseridos com badge especial
   - Status 'sugerido' para configuração manual
   - Preservação de nome e ID original

📦 Arquivos:
- admin-v6.9.html (NOVO - interface principal)
- index.html (ATUALIZADO - redirecionamento)
- README.md (ATUALIZADO - versão 6.9.0)
- Documentação completa (4 novos arquivos)

🎯 Benefícios:
- Economia de tempo na atualização de preços
- Recuperação de dados removidos acidentalmente
- Interface intuitiva para operações em lote
- Rastreabilidade completa de ações

📚 Documentação:
- 👉-LEIA-PRIMEIRO-v6.9.txt (guia de início)
- GUIA-RAPIDO-v6.9.md (tutorial passo a passo)
- NOVAS-FUNCIONALIDADES-v6.9.md (técnica detalhada)
- RESUMO-v6.9.txt (visão geral completa)

✅ Compatibilidade: Retrocompatível com versões anteriores
✅ Histórico: Preservado
✅ Dados: Seguros

Status: PRONTO PARA PRODUÇÃO 🚀"

if [ $? -eq 0 ]; then
    echo "✅ Commit criado com sucesso"
else
    echo "❌ Erro ao criar commit"
    exit 1
fi

echo ""

# Push
echo "🌐 Enviando para o GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Push realizado com sucesso"
else
    echo "❌ Erro ao fazer push"
    echo "Tente: git push origin main"
    exit 1
fi

echo ""
echo "════════════════════════════════════════════════════════════"
echo "  ✅ DEPLOY CONCLUÍDO COM SUCESSO!"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "🎉 Sistema v6.9.0 está no ar!"
echo ""
echo "📍 Próximos passos:"
echo "   1. Aguarde o deploy automático do Cloudflare Pages"
echo "   2. Acesse: https://priobf25.pages.dev"
echo "   3. Teste as novas funcionalidades"
echo ""
echo "🆕 Novidades:"
echo "   • Re-sincronização de Preços (Aba Ferramentas)"
echo "   • Re-inserção de Produtos (Dashboard → Histórico)"
echo ""
echo "📚 Documentação disponível:"
echo "   • 👉-LEIA-PRIMEIRO-v6.9.txt"
echo "   • GUIA-RAPIDO-v6.9.md"
echo "   • NOVAS-FUNCIONALIDADES-v6.9.md"
echo "   • RESUMO-v6.9.txt"
echo ""
echo "════════════════════════════════════════════════════════════"
