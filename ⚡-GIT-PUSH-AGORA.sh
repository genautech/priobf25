#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
# 🚀 GIT PUSH - CORREÇÕES GOOGLE DRIVE + IMGUR
# ═══════════════════════════════════════════════════════════════════════════

echo "🔧 Preparando deploy das correções..."
echo ""

# Adicionar arquivos corrigidos
echo "📦 Adicionando arquivos..."
git add admin-v6.10.html
git add ferramenta-atualizar-imagens.html
git add README.md
git add 🚨-CORRECOES-URGENTES-IMAGENS.md
git add 👉-RESPOSTA-FINAL-IMGUR-SOLUCAO.md
git add GOOGLE-DRIVE-IMAGES-GUIA-COMPLETO.md
git add ⚡-INICIO-RAPIDO-GOOGLE-DRIVE.md
git add ✅-ENTREGA-FINAL-GOOGLE-DRIVE-IMAGES.md
git add 👉-LEIA-ISTO-AGORA-RESUMO-FINAL.md

echo "✅ Arquivos adicionados!"
echo ""

# Verificar o que será commitado
echo "📋 Arquivos que serão commitados:"
git status --short
echo ""

# Commit
echo "💾 Fazendo commit..."
git commit -m "🔧 Corrigir Google Drive (thumbnail) + Documentação Imgur

✅ Correções aplicadas:
- Google Drive: mudar para formato thumbnail (melhor CORS)
- Placeholder atualizado para thumbnail
- Ferramenta de imagens atualizada

✅ Documentação completa:
- Guia de correções urgentes
- Solução Imgur (recomendada)
- Guias Google Drive completos
- README atualizado

Arquivos:
- admin-v6.10.html (corrigido)
- ferramenta-atualizar-imagens.html (corrigido)
- 5 guias de documentação"

echo "✅ Commit realizado!"
echo ""

# Push
echo "🚀 Fazendo push para GitHub..."
git push origin main

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "✅ DEPLOY CONCLUÍDO!"
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "⏱️  Aguarde 2-3 minutos para o Cloudflare Pages fazer o deploy"
echo ""
echo "🌐 Acesse: https://priobf25.pages.dev/admin-v6.10"
echo ""
echo "🖼️  PARA IMAGENS, USE IMGUR:"
echo "   1. Upload: https://imgur.com"
echo "   2. Copiar URL direta (https://i.imgur.com/...)"
echo "   3. Colar no Admin"
echo "   4. ✅ Funciona perfeitamente!"
echo ""
echo "════════════════════════════════════════════════════════════════"
