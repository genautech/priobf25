#!/bin/bash
# ═══════════════════════════════════════════════════════════════════
# 🚀 DEPLOY INDEX.HTML - Script Automático
# ═══════════════════════════════════════════════════════════════════
# 
# Para Mac/Linux
# 
# Como usar:
#   chmod +x deploy-index.sh
#   ./deploy-index.sh
# 
# ═══════════════════════════════════════════════════════════════════

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}═══════════════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}🚀 DEPLOY INDEX.HTML - Black Friday PRIO${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════════════${NC}"
echo ""

# Verificar se arquivo existe
if [ ! -f "index.html" ]; then
    echo -e "${RED}❌ ERRO: Arquivo index.html não encontrado!${NC}"
    echo -e "${YELLOW}   Certifique-se de estar na pasta correta do projeto.${NC}"
    exit 1
fi

echo -e "${YELLOW}📁 Arquivo encontrado: index.html${NC}"
echo ""

# Verificar status do Git
echo -e "${BLUE}🔍 Verificando status do Git...${NC}"
git status
echo ""

# Perguntar confirmação
echo -e "${YELLOW}⚠️  Você está prestes a fazer deploy APENAS do index.html${NC}"
echo -e "${YELLOW}   Outros arquivos modificados NÃO serão incluídos.${NC}"
echo ""
read -p "Deseja continuar? (s/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[SsYy]$ ]]; then
    echo -e "${RED}❌ Deploy cancelado pelo usuário.${NC}"
    exit 1
fi

# Adicionar index.html
echo ""
echo -e "${BLUE}📦 Adicionando index.html ao stage...${NC}"
git add index.html

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ ERRO ao adicionar arquivo!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Arquivo adicionado com sucesso!${NC}"
echo ""

# Verificar status novamente
echo -e "${BLUE}🔍 Verificando arquivos que serão commitados...${NC}"
git status
echo ""

# Fazer commit
echo -e "${BLUE}💾 Fazendo commit...${NC}"
git commit -m "feat: atualizar landing page index.html

- Deploy automatizado via script
- Atualização da página inicial
- Versão: $(date '+%Y-%m-%d %H:%M:%S')"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ ERRO ao fazer commit!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Commit realizado com sucesso!${NC}"
echo ""

# Fazer push
echo -e "${BLUE}🚀 Fazendo push para GitHub...${NC}"
git push origin main

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ ERRO ao fazer push!${NC}"
    echo -e "${YELLOW}   Tentando branch 'master'...${NC}"
    git push origin master
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ ERRO: Não foi possível fazer push!${NC}"
        exit 1
    fi
fi

echo -e "${GREEN}✅ Push realizado com sucesso!${NC}"
echo ""

# Informações finais
echo -e "${GREEN}═══════════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}🎉 DEPLOY CONCLUÍDO COM SUCESSO!${NC}"
echo -e "${GREEN}═══════════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE}📊 Próximos passos:${NC}"
echo -e "${YELLOW}   1. ⏱️  Aguarde 2-3 minutos para o deploy automático${NC}"
echo -e "${YELLOW}   2. 🔍 Verifique GitHub Actions: ${NC}https://github.com/genautech/priobf25/actions"
echo -e "${YELLOW}   3. 🌐 Acesse o site: ${NC}https://priobf25.pages.dev"
echo -e "${YELLOW}   4. 🔄 Limpe o cache: Ctrl+F5 (ou Cmd+Shift+R no Mac)${NC}"
echo ""
echo -e "${GREEN}✅ Tudo pronto!${NC}"
echo ""
