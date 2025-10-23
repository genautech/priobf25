#!/bin/bash
# 🚀 Script de Deploy Rápido - PRIO BF25
# Uso: chmod +x COMANDOS-RAPIDOS.sh && ./COMANDOS-RAPIDOS.sh

echo "🚀 Iniciando deploy no Git..."
echo ""

# 1. Verifica status
echo "📋 Status atual:"
git status
echo ""

# 2. Adiciona todos os arquivos
echo "➕ Adicionando arquivos..."
git add .
echo ""

# 3. Commit
echo "💾 Fazendo commit..."
git commit -m "feat: adiciona backup, CSV e ferramenta de conversão para 165 produtos"
echo ""

# 4. Push
echo "🚀 Enviando para GitHub..."
git push origin main
echo ""

# 5. Confirmação
if [ $? -eq 0 ]; then
    echo "✅ Deploy concluído com sucesso!"
    echo ""
    echo "📍 Próximos passos:"
    echo "1. Acesse: https://github.com/seu-usuario/priobf25"
    echo "2. Verifique os arquivos enviados"
    echo "3. Aguarde deploy automático no Cloudflare"
    echo "4. Baixe converter-planilha-para-sistema.html"
    echo "5. Baixe planilha-nova.csv"
    echo "6. Abra o HTML localmente e converta!"
    echo ""
else
    echo "❌ Erro no deploy!"
    echo ""
    echo "💡 Tente manualmente:"
    echo "   git pull origin main"
    echo "   git add ."
    echo "   git commit -m 'sua mensagem'"
    echo "   git push origin main"
    echo ""
fi
