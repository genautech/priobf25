@echo off
REM 🚀 Deploy do Conversor Correto - PRIO BF25 (Windows)
REM Este script faz o deploy do conversor que resolve o problema "Produto sem nome"

echo.
echo 🎯 ==========================================
echo    DEPLOY: Conversor Correto CSV - Sistema
echo ==========================================
echo.

REM Verifica se está no diretório Git
if not exist ".git" (
    echo ❌ Erro: Este não é um repositório Git!
    echo 💡 Execute este script na pasta raiz do projeto priobf25
    pause
    exit /b 1
)

echo 📋 Status atual do repositório:
git status --short
echo.

REM Adiciona arquivos específicos
echo ➕ Adicionando arquivos do conversor correto...
git add converter-csv-para-sistema-CORRETO.html
git add SOLUCAO-PRODUTO-SEM-NOME.md
git add DEPLOY-CONVERSOR-CORRETO.sh
git add DEPLOY-CONVERSOR-CORRETO.bat
echo    ✅ Arquivos adicionados
echo.

REM Commit
echo 💾 Criando commit...
git commit -m "fix: adiciona conversor correto que resolve problema 'Produto sem nome'" -m "- Novo conversor com mapeamento correto de campos CSV - Sistema" -m "- Mapeia 'Nome do Produto' - nome (corrige problema)" -m "- Mapeia 'Preço Mercado' - custoBase" -m "- Mapeia 'Menor preço Marketplaces' - precoVenda" -m "- Inclui documentação completa da solução" -m "- Gera produtos-v6.1.js pronto para substituição direta"
echo.

REM Push
echo 🚀 Enviando para GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ ==========================================
    echo    DEPLOY CONCLUÍDO COM SUCESSO!
    echo ==========================================
    echo.
    echo 📍 Próximos Passos:
    echo.
    echo 1️⃣  Aguarde 1-2 minutos para deploy automático no Cloudflare
    echo.
    echo 2️⃣  Acesse e baixe o conversor:
    echo     🔗 https://priobf25.pages.dev/converter-csv-para-sistema-CORRETO.html
    echo.
    echo 3️⃣  OU baixe diretamente do GitHub:
    echo     🔗 https://github.com/seu-usuario/priobf25/raw/main/converter-csv-para-sistema-CORRETO.html
    echo.
    echo 4️⃣  Abra o arquivo HTML localmente no seu navegador
    echo.
    echo 5️⃣  Arraste planilha-nova.csv para converter
    echo.
    echo 6️⃣  Baixe produtos-v6.1.js gerado
    echo.
    echo 7️⃣  Substitua no projeto e execute:
    echo     git add produtos-v6.1.js
    echo     git commit -m "fix: atualiza catálogo com 165 produtos - nomes corretos"
    echo     git push origin main
    echo.
    echo ✅ Produtos aparecerão com nomes corretos!
    echo.
    echo 📖 Leia: SOLUCAO-PRODUTO-SEM-NOME.md para mais detalhes
    echo.
) else (
    echo.
    echo ❌ ==========================================
    echo    ERRO NO DEPLOY!
    echo ==========================================
    echo.
    echo 💡 Soluções:
    echo.
    echo 1️⃣  Se houver conflitos, execute:
    echo     git pull origin main
    echo     REM Resolva conflitos manualmente
    echo     git add .
    echo     git commit -m "fix: resolve conflitos"
    echo     git push origin main
    echo.
    echo 2️⃣  Se precisar de autenticação:
    echo     REM Configure suas credenciais Git
    echo     git config user.name "Seu Nome"
    echo     git config user.email "seu@email.com"
    echo.
    echo 3️⃣  Se a branch for diferente:
    echo     git push origin master
    echo     REM ou
    echo     git push origin nome-da-sua-branch
    echo.
)

echo.
echo 🆘 Precisa de ajuda? Verifique:
echo    - SOLUCAO-PRODUTO-SEM-NOME.md
echo    - DEPLOY-GIT-PASSO-A-PASSO.md
echo.

pause
