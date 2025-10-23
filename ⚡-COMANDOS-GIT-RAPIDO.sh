#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
# 🚀 DEPLOY RÁPIDO - v6.10.0 + v6.3.5
# ═══════════════════════════════════════════════════════════════════════════
# 
# COPIE E COLE ESTES COMANDOS NO TERMINAL (um de cada vez)
# Ou execute este script: bash ⚡-COMANDOS-GIT-RAPIDO.sh
# 
# ═══════════════════════════════════════════════════════════════════════════

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                                                                ║"
echo "║         🚀 DEPLOY v6.10.0 + v6.3.5 - INICIANDO...             ║"
echo "║                                                                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 1: Verificar status
# ═══════════════════════════════════════════════════════════════════════════

echo "📋 PASSO 1/4: Verificando arquivos modificados..."
echo ""
git status
echo ""
echo "✅ Status verificado!"
echo ""
read -p "Pressione ENTER para continuar..."
echo ""

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 2: Adicionar arquivos
# ═══════════════════════════════════════════════════════════════════════════

echo "📦 PASSO 2/4: Adicionando todos os arquivos..."
echo ""
git add .
echo ""
echo "✅ Arquivos adicionados!"
echo ""
read -p "Pressione ENTER para continuar..."
echo ""

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 3: Fazer commit
# ═══════════════════════════════════════════════════════════════════════════

echo "💾 PASSO 3/4: Fazendo commit..."
echo ""
git commit -m "v6.10.0 + v6.3.5: Estatísticas, CSV Otimizado, Header Atualizado

- Admin v6.10.0:
  * Estatísticas em tempo real (4 cards)
  * CSV expandido de 13 para 23 campos
  * Ferramentas otimizadas (11→6)
  * Bug fix re-sincronização de preços

- Cliente v6.3.5:
  * Header atualizado: Black Friday Prio 2025
  * Gradiente colorido no título
  * Subtítulo: Catálogo de produtos a serem ativados

- Documentação:
  * README.md atualizado
  * Release notes completas
  * Guias de teste e deploy"
echo ""
echo "✅ Commit criado!"
echo ""
read -p "Pressione ENTER para fazer PUSH..."
echo ""

# ═══════════════════════════════════════════════════════════════════════════
# PASSO 4: Fazer push
# ═══════════════════════════════════════════════════════════════════════════

echo "🚀 PASSO 4/4: Enviando para GitHub..."
echo ""
echo "⚠️  ATENÇÃO: Se pedir senha, use o TOKEN do GitHub (não a senha da conta)!"
echo ""
git push origin main
echo ""

# ═══════════════════════════════════════════════════════════════════════════
# Verificar resultado
# ═══════════════════════════════════════════════════════════════════════════

if [ $? -eq 0 ]; then
    echo ""
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║                                                                ║"
    echo "║              ✅ PUSH BEM-SUCEDIDO! ✅                          ║"
    echo "║                                                                ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""
    echo "⏱️  Aguarde 3-4 minutos para o Cloudflare fazer o build..."
    echo ""
    echo "🌐 Depois acesse:"
    echo "   • https://priobf25.pages.dev/admin (v6.10.0)"
    echo "   • https://priobf25.pages.dev/cliente (v6.3.5)"
    echo ""
    echo "🧪 Teste:"
    echo "   • Admin → Aba Sugestões → 4 cards coloridos"
    echo "   • Admin → Aba Ferramentas → 6 cards apenas"
    echo "   • Admin → Exportar CSV → 23 colunas"
    echo "   • Cliente → Header colorido 'Black Friday Prio 2025'"
    echo ""
    echo "💡 Se não ver mudanças: Ctrl+Shift+R (hard refresh)"
    echo ""
else
    echo ""
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║                                                                ║"
    echo "║              ❌ ERRO NO PUSH! ❌                               ║"
    echo "║                                                                ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo ""
    echo "📋 POSSÍVEIS CAUSAS:"
    echo ""
    echo "1. Autenticação não configurada"
    echo "   Solução: Configure GitHub CLI, Token, ou SSH"
    echo "   Guia: 🔥-DEPLOY-GIT-COMANDOS-PRONTOS.txt"
    echo ""
    echo "2. Problemas de permissão"
    echo "   Solução: Verifique se tem acesso ao repositório"
    echo ""
    echo "3. Problemas de rede"
    echo "   Solução: Verifique sua conexão com internet"
    echo ""
    echo "💡 ALTERNATIVA FÁCIL:"
    echo "   Use a aba PUBLISH (sem git, sem comandos)"
    echo "   Guia: ⚡-DEPLOY-3-PASSOS.txt"
    echo ""
fi

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                                                                ║"
echo "║                    Script finalizado!                          ║"
echo "║                                                                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
