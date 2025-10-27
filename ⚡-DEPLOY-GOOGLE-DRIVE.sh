#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════
# 🚀 GIT PUSH - GOOGLE DRIVE GOOGLEUSERCONTENT
# ═══════════════════════════════════════════════════════════════════════════

echo "════════════════════════════════════════════════════════════════"
echo "🚀 Deploy: Google Drive com Googleusercontent"
echo "════════════════════════════════════════════════════════════════"
echo ""

# Adicionar arquivos
echo "📦 Adicionando arquivos..."
git add admin-v6.10.html
git add ferramenta-atualizar-imagens.html
git add README.md
git add 🔧-GOOGLE-DRIVE-CONFIGURACAO-COMPLETA.md
git add 👉-GOOGLE-DRIVE-CONFIGURAR-AGORA.md
git add ⚡-RESPOSTA-GOOGLE-DRIVE.txt
git add GOOGLE-DRIVE-IMAGES-GUIA-COMPLETO.md
git add ⚡-INICIO-RAPIDO-GOOGLE-DRIVE.md
git add ✅-ENTREGA-FINAL-GOOGLE-DRIVE-IMAGES.md

echo "✅ Arquivos adicionados!"
echo ""

# Status
echo "📋 Arquivos que serão commitados:"
git status --short
echo ""

# Commit
echo "💾 Fazendo commit..."
git commit -m "✅ Google Drive com googleusercontent (melhor CORS)

🔧 Sistema atualizado:
- admin-v6.10.html: googleusercontent format
- ferramenta-atualizar-imagens.html: googleusercontent format
- Conversão automática de URLs
- Melhor compatibilidade CORS

📖 Documentação:
- Guia configuração completa
- Passo a passo 5 minutos
- Troubleshooting detalhado

Formato usado: lh3.googleusercontent.com/d/FILE_ID
(CDN do Google, melhor performance e CORS)"

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
echo "⏱️  Aguarde 2-3 minutos para deploy no Cloudflare Pages"
echo ""
echo "🌐 Acesse: https://priobf25.pages.dev/admin-v6.10"
echo ""
echo "🔧 ANTES DE USAR:"
echo ""
echo "   1. Configure imagem como PÚBLICA no Google Drive:"
echo "      → Botão direito → Compartilhar"
echo "      → 'Qualquer pessoa com o link'"
echo "      → Papel: 'Leitor'"
echo ""
echo "   2. Teste em aba anônima (Ctrl+Shift+N):"
echo "      → Cole URL da imagem"
echo "      → Deve aparecer SEM pedir login"
echo ""
echo "   3. Se funcionar → usar no Admin!"
echo ""
echo "📖 GUIA COMPLETO:"
echo "   → 👉-GOOGLE-DRIVE-CONFIGURAR-AGORA.md"
echo ""
echo "════════════════════════════════════════════════════════════════"
