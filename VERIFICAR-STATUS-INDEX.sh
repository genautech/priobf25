#!/bin/bash
# Script para verificar status do index.html

echo "🔍 Verificando status do index.html..."
echo ""

# Verificar se há mudanças
git diff index.html

if [ $? -eq 0 ] && [ -z "$(git diff index.html)" ]; then
    echo ""
    echo "✅ O arquivo index.html NÃO tem mudanças pendentes"
    echo "   (já está atualizado no GitHub)"
    echo ""
    echo "📊 Última modificação do index.html no Git:"
    git log -1 --format="%h - %an, %ar : %s" -- index.html
    echo ""
    echo "💡 OPÇÕES:"
    echo "   1. Se você NÃO modificou o arquivo: Está tudo OK!"
    echo "   2. Se você MODIFICOU mas não aparece: Salve o arquivo e tente novamente"
    echo ""
else
    echo ""
    echo "⚠️ Há mudanças pendentes no index.html"
    echo ""
fi
