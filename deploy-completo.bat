@echo off
REM ==============================================================================
REM SCRIPT DE DEPLOY COMPLETO - BLACK FRIDAY 2025
REM Versao: 1.0
REM Data: 2025-10-23
REM Descricao: Gera produtos-v6.1.js e faz deploy completo para GitHub
REM ==============================================================================

setlocal enabledelayedexpansion

REM ==============================================================================
REM CABECALHO
REM ==============================================================================

echo.
echo ========================================================================
echo.
echo          DEPLOY COMPLETO - BLACK FRIDAY 2025
echo.
echo ========================================================================
echo.

REM ==============================================================================
REM PASSO 1: VERIFICACOES INICIAIS
REM ==============================================================================

echo [PASSO 1] Verificacoes iniciais...
echo.

REM Verifica se esta na pasta correta
if not exist "planilha-nova.csv" (
    echo [ERRO] Arquivo planilha-nova.csv nao encontrado!
    echo [INFO] Execute este script na pasta priobf25
    pause
    exit /b 1
)

echo [OK] Pasta priobf25 identificada
echo.

REM Verifica se Python esta instalado
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Python encontrado
    set HAS_PYTHON=true
) else (
    echo [AVISO] Python nao encontrado
    echo [INFO] O script tentara usar o conversor HTML manual
    set HAS_PYTHON=false
)
echo.

REM Verifica se Git esta configurado
git status >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Nao e um repositorio Git!
    pause
    exit /b 1
)

echo [OK] Repositorio Git identificado
echo.

REM ==============================================================================
REM PASSO 2: FAZER BACKUP
REM ==============================================================================

echo [PASSO 2] Fazendo backup do arquivo atual...
echo.

if exist "produtos-v6.1.js" (
    for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
    for /f "tokens=1-2 delims=/: " %%a in ('time /t') do (set mytime=%%a%%b)
    set BACKUP_NAME=produtos-v6.1.js.backup-!mydate!-!mytime!
    copy produtos-v6.1.js "!BACKUP_NAME!" >nul
    echo [OK] Backup criado: !BACKUP_NAME!
) else (
    echo [INFO] Arquivo produtos-v6.1.js nao existe ^(primeira execucao^)
)
echo.

REM ==============================================================================
REM PASSO 3: GERAR ARQUIVO produtos-v6.1.js
REM ==============================================================================

echo [PASSO 3] Gerando arquivo produtos-v6.1.js...
echo.

if "!HAS_PYTHON!"=="true" (
    REM Gera usando Python
    python gerar-produtos-v6.1-completo.py
    
    if !errorlevel! equ 0 (
        echo [OK] Arquivo gerado com sucesso via Python
    ) else (
        echo [ERRO] Erro ao gerar arquivo via Python
        pause
        exit /b 1
    )
) else (
    echo [ERRO] Python nao disponivel!
    echo [INFO] Por favor, use o conversor HTML manualmente:
    echo [INFO] 1. Abra converter-csv-para-sistema-CORRETO.html no navegador
    echo [INFO] 2. Selecione planilha-nova.csv
    echo [INFO] 3. Clique 'Converter'
    echo [INFO] 4. Salve como produtos-v6.1.js
    echo [INFO] 5. Execute este script novamente
    pause
    exit /b 1
)
echo.

REM ==============================================================================
REM PASSO 4: VERIFICAR ARQUIVO GERADO
REM ==============================================================================

echo [PASSO 4] Verificando arquivo gerado...
echo.

if not exist "produtos-v6.1.js" (
    echo [ERRO] Arquivo produtos-v6.1.js nao foi gerado!
    pause
    exit /b 1
)

REM Verifica tamanho
for %%A in ("produtos-v6.1.js") do set FILE_SIZE=%%~zA
echo [OK] Tamanho do arquivo: !FILE_SIZE! bytes
echo.

REM Verifica estrutura
findstr /C:"window.todosOsProdutosV6" produtos-v6.1.js >nul
if %errorlevel% equ 0 (
    echo [OK] Estrutura correta identificada ^(window.todosOsProdutosV6^)
) else (
    echo [ERRO] Estrutura incorreta! Falta window.todosOsProdutosV6
    pause
    exit /b 1
)
echo.

REM ==============================================================================
REM PASSO 5: PREPARAR COMMIT
REM ==============================================================================

echo [PASSO 5] Preparando commit Git...
echo.

REM Adiciona todos os arquivos
git add .

REM Mostra status
echo [INFO] Arquivos que serao commitados:
git status --short
echo.

REM ==============================================================================
REM PASSO 6: FAZER COMMIT
REM ==============================================================================

echo [PASSO 6] Fazendo commit...
echo.

git commit -m "feat: atualizar catalogo com 165 produtos da planilha-nova.csv" -m "- Substituir produtos-v6.1.js completo" -m "- 165 produtos com precos reais de marketplaces" -m "- Estrutura correta: produtosPlanilha, produtosSugeridos, todosOsProdutosV6" -m "- Campos: precoConcorrente, marketplace, prazoEntrega" -m "- Gerado automaticamente via script Python"

if %errorlevel% equ 0 (
    echo [OK] Commit criado com sucesso
) else (
    echo [ERRO] Erro ao criar commit
    pause
    exit /b 1
)
echo.

REM ==============================================================================
REM PASSO 7: PUSH PARA GITHUB
REM ==============================================================================

echo [PASSO 7] Enviando para GitHub...
echo.

REM Primeiro, tenta pull
echo [INFO] Sincronizando com servidor...
git pull origin main --rebase
echo.

REM Agora push
echo [INFO] Enviando alteracoes...
git push origin main

if %errorlevel% equ 0 (
    echo [OK] Push concluido com sucesso!
) else (
    echo [ERRO] Erro ao fazer push
    echo [INFO] Tente manualmente: git push origin main
    pause
    exit /b 1
)
echo.

REM ==============================================================================
REM PASSO 8: INFORMACOES FINAIS
REM ==============================================================================

echo [PASSO 8] Deploy concluido!
echo.
echo ========================================================================
echo.
echo   DEPLOY REALIZADO COM SUCESSO!
echo.
echo ========================================================================
echo.
echo [RESUMO]
echo   - Tamanho do arquivo: !FILE_SIZE! bytes
if defined BACKUP_NAME echo   - Backup criado: !BACKUP_NAME!
echo.
echo [PROXIMOS PASSOS]
echo   1. Aguarde 2-3 minutos para deploy no Cloudflare Pages
echo   2. Acesse: https://priobf25.pages.dev
echo   3. Limpe o cache: Ctrl+Shift+R
echo   4. Verifique o Console ^(F12^): deve aparecer 'Catalogo carregado'
echo.
echo [ACOMPANHE O DEPLOY]
echo   https://dash.cloudflare.com
echo.
echo Script finalizado com sucesso!
echo.
pause
