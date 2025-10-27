#!/bin/bash

# ═══════════════════════════════════════════════════════════════════
#   ⚡ DEPLOY RÁPIDO - v6.10.3
# ═══════════════════════════════════════════════════════════════════
#
#   ANTES DE EXECUTAR:
#   1. Teste o sistema (⚡-TESTE-AGORA-v6.10.3.txt)
#   2. Confirme que tudo funciona
#   3. Execute este script
#
# ═══════════════════════════════════════════════════════════════════

echo "🚀 Iniciando deploy v6.10.3..."
echo ""

# Adicionar todos os arquivos modificados/criados
echo "📦 Adicionando arquivos..."
git add admin-v6.10.html
git add README.md
git add CORRECOES-v6.10.3-RESUMO.md
git add ⚡-TESTE-AGORA-v6.10.3.txt
git add 🔄-AUTO-SYNC-FUNCIONAMENTO-v6.10.3.md
git add 👉-LEIA-ISTO-PRIMEIRO-v6.10.3.md
git add 🎉-IMPLEMENTACAO-COMPLETA-v6.10.3.txt
git add ⚡-GIT-DEPLOY-v6.10.3.sh

echo "✅ Arquivos adicionados"
echo ""

# Commit com mensagem descritiva
echo "💾 Criando commit..."
git commit -m "✅ v6.10.3: Correções modais + sincronização automática

Implementações:
- Corrigido cálculos de preço e margem
- Modal azul agora é apenas visualização
- Sincronização automática em todas as abas
- Auto-sync do GitHub integrado e funcionando
- Documentação completa criada

Arquivos modificados:
- admin-v6.10.html (correções principais)
- README.md (documentação atualizada)

Arquivos criados:
- CORRECOES-v6.10.3-RESUMO.md
- ⚡-TESTE-AGORA-v6.10.3.txt
- 🔄-AUTO-SYNC-FUNCIONAMENTO-v6.10.3.md
- 👉-LEIA-ISTO-PRIMEIRO-v6.10.3.md
- 🎉-IMPLEMENTACAO-COMPLETA-v6.10.3.txt

Status: ✅ Testado e pronto para produção"

echo "✅ Commit criado"
echo ""

# Push para GitHub
echo "🚀 Enviando para GitHub..."
git push origin main

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo "  ✅ DEPLOY CONCLUÍDO!"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "Próximos passos:"
echo "1. Aguarde 1-2 minutos (deploy automático Cloudflare)"
echo "2. Acesse: https://priobf25.pages.dev"
echo "3. Teste em produção"
echo ""
echo "Documentação:"
echo "- 👉-LEIA-ISTO-PRIMEIRO-v6.10.3.md (visão geral)"
echo "- ⚡-TESTE-AGORA-v6.10.3.txt (testes rápidos)"
echo "- 🔄-AUTO-SYNC-FUNCIONAMENTO-v6.10.3.md (guia do auto-sync)"
echo ""
echo "🎉 Sistema v6.10.3 implantado com sucesso!"
echo "═══════════════════════════════════════════════════════════════"
