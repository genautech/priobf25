#!/bin/bash

# ════════════════════════════════════════════════════════════════════════════
# 🔄 SCRIPT DE RESTAURAÇÃO DE BACKUP
# ════════════════════════════════════════════════════════════════════════════

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     🔄 RESTAURAÇÃO DE BACKUP - produtos-v6.1.js           ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Verificar se backup existe
if [ ! -f "BACKUP-produtos-v6.1.js" ]; then
    echo "❌ ERRO: Arquivo BACKUP-produtos-v6.1.js não encontrado!"
    echo ""
    echo "Crie o backup primeiro:"
    echo "  cp produtos-v6.1.js BACKUP-produtos-v6.1.js"
    exit 1
fi

# Verificar tamanho do backup
TAMANHO_BACKUP=$(wc -c < BACKUP-produtos-v6.1.js)
echo "📊 Tamanho do backup: $TAMANHO_BACKUP bytes"

if [ $TAMANHO_BACKUP -lt 100000 ]; then
    echo "⚠️  AVISO: Backup parece pequeno (esperado: >100KB)"
    read -p "Deseja continuar mesmo assim? (s/N): " CONFIRMA
    if [ "$CONFIRMA" != "s" ] && [ "$CONFIRMA" != "S" ]; then
        echo "❌ Restauração cancelada"
        exit 1
    fi
fi

# Fazer backup do arquivo atual antes de restaurar
if [ -f "produtos-v6.1.js" ]; then
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    cp produtos-v6.1.js "produtos-v6.1.js.old.$TIMESTAMP"
    echo "💾 Backup do arquivo atual salvo: produtos-v6.1.js.old.$TIMESTAMP"
fi

# Restaurar do backup
echo "🔄 Restaurando produtos-v6.1.js do backup..."
cp BACKUP-produtos-v6.1.js produtos-v6.1.js

if [ $? -eq 0 ]; then
    echo "✅ Arquivo restaurado com sucesso!"
    
    TAMANHO=$(wc -c < produtos-v6.1.js)
    LINHAS=$(wc -l < produtos-v6.1.js)
    
    echo ""
    echo "📊 Arquivo restaurado:"
    echo "   - Tamanho: $TAMANHO bytes"
    echo "   - Linhas: $LINHAS"
    echo ""
    
    read -p "Fazer commit e push automático? (s/N): " AUTO_COMMIT
    
    if [ "$AUTO_COMMIT" = "s" ] || [ "$AUTO_COMMIT" = "S" ]; then
        git add produtos-v6.1.js
        git commit -m "restore: restaurar produtos-v6.1.js do backup de segurança

- Restaurado do BACKUP-produtos-v6.1.js
- Tamanho: $TAMANHO bytes
- Linhas: $LINHAS"
        git push origin main
        
        echo ""
        echo "✅ Commit e push realizados!"
        echo "⏱️  Aguarde 2-3 minutos para o deploy no Cloudflare"
    else
        echo ""
        echo "⚠️  Lembre-se de fazer commit e push manualmente:"
        echo "   git add produtos-v6.1.js"
        echo "   git commit -m 'restore: restaurar do backup'"
        echo "   git push origin main"
    fi
    
    echo ""
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║              ✅ RESTAURAÇÃO CONCLUÍDA                     ║"
    echo "╚════════════════════════════════════════════════════════════╝"
else
    echo "❌ ERRO ao restaurar arquivo!"
    exit 1
fi
