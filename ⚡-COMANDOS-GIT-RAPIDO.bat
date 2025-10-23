@echo off
chcp 65001 >nul
REM ═══════════════════════════════════════════════════════════════════════════
REM 🚀 DEPLOY RÁPIDO - v6.10.0 + v6.3.5 (WINDOWS)
REM ═══════════════════════════════════════════════════════════════════════════
REM 
REM DUPLO CLIQUE neste arquivo para executar
REM Ou copie e cole os comandos git no CMD/PowerShell
REM 
REM ═══════════════════════════════════════════════════════════════════════════

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                                                                ║
echo ║         🚀 DEPLOY v6.10.0 + v6.3.5 - INICIANDO...             ║
echo ║                                                                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM ═══════════════════════════════════════════════════════════════════════════
REM PASSO 1: Verificar status
REM ═══════════════════════════════════════════════════════════════════════════

echo 📋 PASSO 1/4: Verificando arquivos modificados...
echo.
git status
echo.
echo ✅ Status verificado!
echo.
pause
echo.

REM ═══════════════════════════════════════════════════════════════════════════
REM PASSO 2: Adicionar arquivos
REM ═══════════════════════════════════════════════════════════════════════════

echo 📦 PASSO 2/4: Adicionando todos os arquivos...
echo.
git add .
echo.
echo ✅ Arquivos adicionados!
echo.
pause
echo.

REM ═══════════════════════════════════════════════════════════════════════════
REM PASSO 3: Fazer commit
REM ═══════════════════════════════════════════════════════════════════════════

echo 💾 PASSO 3/4: Fazendo commit...
echo.
git commit -m "v6.10.0 + v6.3.5: Estatísticas, CSV Otimizado, Header Atualizado"
echo.
echo ✅ Commit criado!
echo.
pause
echo.

REM ═══════════════════════════════════════════════════════════════════════════
REM PASSO 4: Fazer push
REM ═══════════════════════════════════════════════════════════════════════════

echo 🚀 PASSO 4/4: Enviando para GitHub...
echo.
echo ⚠️  ATENÇÃO: Se pedir senha, use o TOKEN do GitHub (não a senha)!
echo.
git push origin main
echo.

REM ═══════════════════════════════════════════════════════════════════════════
REM Verificar resultado
REM ═══════════════════════════════════════════════════════════════════════════

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ╔════════════════════════════════════════════════════════════════╗
    echo ║                                                                ║
    echo ║              ✅ PUSH BEM-SUCEDIDO! ✅                          ║
    echo ║                                                                ║
    echo ╚════════════════════════════════════════════════════════════════╝
    echo.
    echo ⏱️  Aguarde 3-4 minutos para o Cloudflare fazer o build...
    echo.
    echo 🌐 Depois acesse:
    echo    • https://priobf25.pages.dev/admin (v6.10.0^)
    echo    • https://priobf25.pages.dev/cliente (v6.3.5^)
    echo.
    echo 🧪 Teste:
    echo    • Admin → Aba Sugestões → 4 cards coloridos
    echo    • Admin → Aba Ferramentas → 6 cards apenas
    echo    • Cliente → Header "Black Friday Prio 2025"
    echo.
    echo 💡 Se não ver mudanças: Ctrl+Shift+R (hard refresh^)
    echo.
) else (
    echo.
    echo ╔════════════════════════════════════════════════════════════════╗
    echo ║                                                                ║
    echo ║              ❌ ERRO NO PUSH! ❌                               ║
    echo ║                                                                ║
    echo ╚════════════════════════════════════════════════════════════════╝
    echo.
    echo 📋 POSSÍVEIS CAUSAS:
    echo.
    echo 1. Autenticação não configurada
    echo    Solução: Configure GitHub CLI, Token, ou SSH
    echo    Guia: 🔥-DEPLOY-GIT-COMANDOS-PRONTOS.txt
    echo.
    echo 2. Sem permissão no repositório
    echo    Solução: Verifique acesso em github.com/genautech/priobf25
    echo.
    echo 3. Problemas de rede
    echo    Solução: Verifique conexão com internet
    echo.
    echo 💡 ALTERNATIVA FÁCIL:
    echo    Use a aba PUBLISH (sem git, sem comandos^)
    echo    Guia: ⚡-DEPLOY-3-PASSOS.txt
    echo.
)

echo ╔════════════════════════════════════════════════════════════════╗
echo ║                                                                ║
echo ║                    Script finalizado!                          ║
echo ║                                                                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.
pause
