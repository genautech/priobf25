#!/bin/bash
# Deploy com autenticação correta

echo "🚀 Fazendo push com autenticação..."

# Configurar remote com token temporariamente
git remote set-url origin https://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@github.com/genautech/priobf25.git

# Push
git push origin main

# Reverter remote para HTTPS normal (segurança)
git remote set-url origin https://github.com/genautech/priobf25.git

echo "✅ Deploy concluído!"
echo ""
echo "📍 Acesse em 1-2 minutos:"
echo "   https://genautech.github.io/priobf25/admin-v6.5.html"
