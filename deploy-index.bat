@echo off
REM ═══════════════════════════════════════════════════════════════════
REM 🚀 DEPLOY INDEX.HTML - Script Automático
REM ═══════════════════════════════════════════════════════════════════
REM 
REM Para Windows
REM 
REM Como usar:
REM   Duplo clique no arquivo deploy-index.bat
REM   OU execute no CMD/PowerShell
REM 
REM ═══════════════════════════════════════════════════════════════════

chcp 65001 >nul
color 0A

echo.
echo ═══════════════════════════════════════════════════════════════════
echo 🚀 DEPLOY INDEX.HTML - Black Friday PRIO
echo ═══════════════════════════════════════════════════════════════════
echo.

REM Verificar se arquivo existe
if not exist "index.html" (
    color 0C
    echo ❌ ERRO: Arquivo index.html não encontrado!
    echo    Certifique-se de estar na pasta correta do projeto.
    echo.
    pause
    exit /b 1
)

echo 📁 Arquivo encontrado: index.html
echo.

REM Verificar status do Git
echo 🔍 Verificando status do Git...
echo.
git status
echo.

REM Perguntar confirmação
color 0E
echo ⚠️  Você está prestes a fazer deploy APENAS do index.html
echo    Outros arquivos modificados NÃO serão incluídos.
echo.
set /p confirm="Deseja continuar? (S/N): "

if /i not "%confirm%"=="S" (
    if /i not "%confirm%"=="s" (
        color 0C
        echo.
        echo ❌ Deploy cancelado pelo usuário.
        echo.
        pause
        exit /b 1
    )
)

color 0A

REM Adicionar index.html
echo.
echo 📦 Adicionando index.html ao stage...
git add index.html

if errorlevel 1 (
    color 0C
    echo.
    echo ❌ ERRO ao adicionar arquivo!
    echo.
    pause
    exit /b 1
)

echo ✅ Arquivo adicionado com sucesso!
echo.

REM Verificar status novamente
echo 🔍 Verificando arquivos que serão commitados...
git status
echo.

REM Fazer commit
echo 💾 Fazendo commit...
git commit -m "feat: atualizar landing page index.html" -m "Deploy automatizado via script" -m "Atualização da página inicial"

if errorlevel 1 (
    color 0C
    echo.
    echo ❌ ERRO ao fazer commit!
    echo.
    pause
    exit /b 1
)

echo ✅ Commit realizado com sucesso!
echo.

REM Fazer push
echo 🚀 Fazendo push para GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo ⚠️  Tentando branch 'master'...
    git push origin master
    
    if errorlevel 1 (
        color 0C
        echo.
        echo ❌ ERRO: Não foi possível fazer push!
        echo.
        pause
        exit /b 1
    )
)

color 0A
echo ✅ Push realizado com sucesso!
echo.

REM Informações finais
echo ═══════════════════════════════════════════════════════════════════
echo 🎉 DEPLOY CONCLUÍDO COM SUCESSO!
echo ═══════════════════════════════════════════════════════════════════
echo.
echo 📊 Próximos passos:
echo.
echo    1. ⏱️  Aguarde 2-3 minutos para o deploy automático
echo    2. 🔍 Verifique GitHub Actions:
echo       https://github.com/genautech/priobf25/actions
echo    3. 🌐 Acesse o site:
echo       https://priobf25.pages.dev
echo    4. 🔄 Limpe o cache: Ctrl+F5
echo.
echo ✅ Tudo pronto!
echo.
pause
