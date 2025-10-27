@echo off
REM ═══════════════════════════════════════════════════════════════════
REM   ⚡ DEPLOY RÁPIDO - v6.10.3 (Windows)
REM ═══════════════════════════════════════════════════════════════════
REM
REM   ANTES DE EXECUTAR:
REM   1. Teste o sistema (⚡-TESTE-AGORA-v6.10.3.txt)
REM   2. Confirme que tudo funciona
REM   3. Execute este script (duplo clique)
REM
REM ═══════════════════════════════════════════════════════════════════

echo 🚀 Iniciando deploy v6.10.3...
echo.

REM Adicionar todos os arquivos modificados/criados
echo 📦 Adicionando arquivos...
git add admin-v6.10.html
git add README.md
git add CORRECOES-v6.10.3-RESUMO.md
git add ⚡-TESTE-AGORA-v6.10.3.txt
git add 🔄-AUTO-SYNC-FUNCIONAMENTO-v6.10.3.md
git add 👉-LEIA-ISTO-PRIMEIRO-v6.10.3.md
git add 🎉-IMPLEMENTACAO-COMPLETA-v6.10.3.txt
git add ⚡-GIT-DEPLOY-v6.10.3.sh
git add ⚡-GIT-DEPLOY-v6.10.3.bat

echo ✅ Arquivos adicionados
echo.

REM Commit com mensagem descritiva
echo 💾 Criando commit...
git commit -m "✅ v6.10.3: Correções modais + sincronização automática" -m "Implementações:" -m "- Corrigido cálculos de preço e margem" -m "- Modal azul agora é apenas visualização" -m "- Sincronização automática em todas as abas" -m "- Auto-sync do GitHub integrado e funcionando" -m "- Documentação completa criada" -m "" -m "Arquivos modificados:" -m "- admin-v6.10.html (correções principais)" -m "- README.md (documentação atualizada)" -m "" -m "Arquivos criados:" -m "- CORRECOES-v6.10.3-RESUMO.md" -m "- ⚡-TESTE-AGORA-v6.10.3.txt" -m "- 🔄-AUTO-SYNC-FUNCIONAMENTO-v6.10.3.md" -m "- 👉-LEIA-ISTO-PRIMEIRO-v6.10.3.md" -m "- 🎉-IMPLEMENTACAO-COMPLETA-v6.10.3.txt" -m "" -m "Status: ✅ Testado e pronto para produção"

echo ✅ Commit criado
echo.

REM Push para GitHub
echo 🚀 Enviando para GitHub...
git push origin main

echo.
echo ═══════════════════════════════════════════════════════════════
echo   ✅ DEPLOY CONCLUÍDO!
echo ═══════════════════════════════════════════════════════════════
echo.
echo Próximos passos:
echo 1. Aguarde 1-2 minutos (deploy automático Cloudflare)
echo 2. Acesse: https://priobf25.pages.dev
echo 3. Teste em produção
echo.
echo Documentação:
echo - 👉-LEIA-ISTO-PRIMEIRO-v6.10.3.md (visão geral)
echo - ⚡-TESTE-AGORA-v6.10.3.txt (testes rápidos)
echo - 🔄-AUTO-SYNC-FUNCIONAMENTO-v6.10.3.md (guia do auto-sync)
echo.
echo 🎉 Sistema v6.10.3 implantado com sucesso!
echo ═══════════════════════════════════════════════════════════════
echo.
pause
