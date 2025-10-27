#!/bin/bash
# Script para substituir TODOS os placeholders via.placeholder.com por Google Drive

GOOGLE_DRIVE_URL="https://drive.google.com/uc?export=view&id=1J5p6JhpvIhjmToS2Pxa-6lwcrYSwVol0"

# Fazer backup
cp produtos-v6.1.js produtos-v6.1.js.backup-before-placeholder-fix

# Usar sed para substituir todas as via.placeholder.com URLs
sed -i 's|"imagem": "https://via\.placeholder\.com/[^"]*"|"imagem": "'$GOOGLE_DRIVE_URL'"|g' produtos-v6.1.js

echo "✅ Substituição concluída!"
echo "📊 Verificando resultado..."
grep -c "via.placeholder.com" produtos-v6.1.js || echo "0 placeholders restantes"
grep -c "drive.google.com" produtos-v6.1.js
