#!/bin/bash

# ════════════════════════════════════════════════════════════════════════════
# 💾 SCRIPT DE CRIAÇÃO DE BACKUP
# ════════════════════════════════════════════════════════════════════════════

echo "╔════════════════════════════════════════════════════════════╗"
echo "║        💾 BACKUP DE SEGURANÇA - produtos-v6.1.js          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Verificar se arquivo existe
if [ ! -f "produtos-v6.1.js" ]; then
    echo "❌ ERRO: Arquivo produtos-v6.1.js não encontrado!"
    exit 1
fi

# Obter informações do arquivo
TAMANHO=$(wc -c < produtos-v6.1.js)
LINHAS=$(wc -l < produtos-v6.1.js)
PRODUTOS=$(grep -c '"id":' produtos-v6.1.js || echo "0")

echo "📊 Arquivo atual:"
echo "   - Tamanho: $TAMANHO bytes"
echo "   - Linhas: $LINHAS"
echo "   - Produtos: $PRODUTOS"
echo ""

# Validações
AVISOS=0

if [ $TAMANHO -lt 100000 ]; then
    echo "⚠️  AVISO: Arquivo pequeno (esperado: >100KB)"
    AVISOS=$((AVISOS + 1))
fi

if [ $LINHAS -lt 3000 ]; then
    echo "⚠️  AVISO: Poucas linhas (esperado: >3000)"
    AVISOS=$((AVISOS + 1))
fi

if [ $PRODUTOS -lt 150 ]; then
    echo "⚠️  AVISO: Poucos produtos (esperado: ≥164)"
    AVISOS=$((AVISOS + 1))
fi

if [ $AVISOS -gt 0 ]; then
    echo ""
    echo "⚠️  Arquivo pode estar corrompido ou incompleto!"
    read -p "Deseja continuar mesmo assim? (s/N): " CONFIRMA
    if [ "$CONFIRMA" != "s" ] && [ "$CONFIRMA" != "S" ]; then
        echo "❌ Backup cancelado"
        exit 1
    fi
fi

# Criar backup
echo ""
echo "💾 Criando backup..."
cp produtos-v6.1.js BACKUP-produtos-v6.1.js

if [ $? -eq 0 ]; then
    echo "✅ Backup criado: BACKUP-produtos-v6.1.js"
    
    # Criar backup com timestamp também
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    cp produtos-v6.1.js "backups/produtos-v6.1.js.$TIMESTAMP"
    
    if [ $? -eq 0 ]; then
        echo "✅ Backup com timestamp criado: backups/produtos-v6.1.js.$TIMESTAMP"
    fi
    
    echo ""
    read -p "Fazer commit do backup? (s/N): " COMMIT_BACKUP
    
    if [ "$COMMIT_BACKUP" = "s" ] || [ "$COMMIT_BACKUP" = "S" ]; then
        git add BACKUP-produtos-v6.1.js
        git commit -m "backup: atualizar BACKUP-produtos-v6.1.js

- Tamanho: $TAMANHO bytes
- Linhas: $LINHAS
- Produtos: $PRODUTOS
- Data: $(date '+%Y-%m-%d %H:%M:%S')"
        
        echo ""
        read -p "Fazer push? (s/N): " PUSH
        if [ "$PUSH" = "s" ] || [ "$PUSH" = "S" ]; then
            git push origin main
            echo "✅ Backup enviado para GitHub!"
        fi
    fi
    
    echo ""
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║               ✅ BACKUP CRIADO COM SUCESSO                ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo ""
    echo "Para restaurar este backup:"
    echo "  ./restaurar-backup.sh"
else
    echo "❌ ERRO ao criar backup!"
    exit 1
fi
