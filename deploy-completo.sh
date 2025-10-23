#!/bin/bash
# ==============================================================================
# SCRIPT DE DEPLOY COMPLETO - BLACK FRIDAY 2025
# Versão: 1.0
# Data: 2025-10-23
# Descrição: Gera produtos-v6.1.js e faz deploy completo para GitHub
# ==============================================================================

set -e  # Para se houver erro

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ==============================================================================
# FUNÇÕES AUXILIARES
# ==============================================================================

print_header() {
    echo -e "${BLUE}"
    echo "╔════════════════════════════════════════════════════════════════╗"
    echo "║                                                                ║"
    echo "║         🚀 DEPLOY COMPLETO - BLACK FRIDAY 2025 🚀              ║"
    echo "║                                                                ║"
    echo "╚════════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

print_step() {
    echo -e "\n${YELLOW}▶ $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# ==============================================================================
# PASSO 1: VERIFICAÇÕES INICIAIS
# ==============================================================================

print_header
print_step "PASSO 1: Verificações iniciais..."

# Verifica se está na pasta correta
if [ ! -f "planilha-nova.csv" ]; then
    print_error "Arquivo planilha-nova.csv não encontrado!"
    print_info "Execute este script na pasta priobf25"
    exit 1
fi

print_success "Pasta priobf25 identificada"

# Verifica se Python está instalado
if command -v python3 &> /dev/null; then
    print_success "Python 3 encontrado"
    HAS_PYTHON=true
else
    print_error "Python 3 não encontrado"
    print_info "O script tentará usar o conversor HTML manual"
    HAS_PYTHON=false
fi

# Verifica se Git está configurado
if ! git status &> /dev/null; then
    print_error "Não é um repositório Git!"
    exit 1
fi

print_success "Repositório Git identificado"

# ==============================================================================
# PASSO 2: FAZER BACKUP
# ==============================================================================

print_step "PASSO 2: Fazendo backup do arquivo atual..."

if [ -f "produtos-v6.1.js" ]; then
    BACKUP_NAME="produtos-v6.1.js.backup-$(date +%Y-%m-%d-%H%M%S)"
    cp produtos-v6.1.js "$BACKUP_NAME"
    print_success "Backup criado: $BACKUP_NAME"
else
    print_info "Arquivo produtos-v6.1.js não existe (primeira execução)"
fi

# ==============================================================================
# PASSO 3: GERAR ARQUIVO produtos-v6.1.js
# ==============================================================================

print_step "PASSO 3: Gerando arquivo produtos-v6.1.js..."

if [ "$HAS_PYTHON" = true ]; then
    # Gera usando Python
    python3 gerar-produtos-v6.1-completo.py
    
    if [ $? -eq 0 ]; then
        print_success "Arquivo gerado com sucesso via Python"
    else
        print_error "Erro ao gerar arquivo via Python"
        exit 1
    fi
else
    print_error "Python não disponível!"
    print_info "Por favor, use o conversor HTML manualmente:"
    print_info "1. Abra converter-csv-para-sistema-CORRETO.html no navegador"
    print_info "2. Selecione planilha-nova.csv"
    print_info "3. Clique 'Converter'"
    print_info "4. Salve como produtos-v6.1.js"
    print_info "5. Execute este script novamente"
    exit 1
fi

# ==============================================================================
# PASSO 4: VERIFICAR ARQUIVO GERADO
# ==============================================================================

print_step "PASSO 4: Verificando arquivo gerado..."

if [ ! -f "produtos-v6.1.js" ]; then
    print_error "Arquivo produtos-v6.1.js não foi gerado!"
    exit 1
fi

# Verifica tamanho
FILE_SIZE=$(ls -lh produtos-v6.1.js | awk '{print $5}')
print_success "Tamanho do arquivo: $FILE_SIZE"

# Verifica estrutura
if grep -q "window.todosOsProdutosV6" produtos-v6.1.js; then
    print_success "Estrutura correta identificada (window.todosOsProdutosV6)"
else
    print_error "Estrutura incorreta! Falta window.todosOsProdutosV6"
    exit 1
fi

# Conta produtos
TOTAL_PRODUTOS=$(grep -c "\"id\":" produtos-v6.1.js || echo "0")
print_success "Produtos no arquivo: $TOTAL_PRODUTOS"

# ==============================================================================
# PASSO 5: PREPARAR COMMIT
# ==============================================================================

print_step "PASSO 5: Preparando commit Git..."

# Adiciona todos os arquivos
git add .

# Mostra status
print_info "Arquivos que serão commitados:"
git status --short

# ==============================================================================
# PASSO 6: FAZER COMMIT
# ==============================================================================

print_step "PASSO 6: Fazendo commit..."

COMMIT_MSG="feat: atualizar catálogo com 165 produtos da planilha-nova.csv

- Substituir produtos-v6.1.js completo
- 165 produtos com preços reais de marketplaces
- Estrutura correta: produtosPlanilha, produtosSugeridos, todosOsProdutosV6
- Campos: precoConcorrente, marketplace, prazoEntrega
- Gerado automaticamente via script Python
- Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

git commit -m "$COMMIT_MSG"

if [ $? -eq 0 ]; then
    print_success "Commit criado com sucesso"
else
    print_error "Erro ao criar commit"
    exit 1
fi

# ==============================================================================
# PASSO 7: PUSH PARA GITHUB
# ==============================================================================

print_step "PASSO 7: Enviando para GitHub..."

# Primeiro, tenta pull
print_info "Sincronizando com servidor..."
git pull origin main --rebase || true

# Agora push
print_info "Enviando alterações..."
git push origin main

if [ $? -eq 0 ]; then
    print_success "Push concluído com sucesso!"
else
    print_error "Erro ao fazer push"
    print_info "Tente manualmente: git push origin main"
    exit 1
fi

# ==============================================================================
# PASSO 8: INFORMAÇÕES FINAIS
# ==============================================================================

print_step "PASSO 8: Deploy concluído!"

echo ""
print_success "🎉 DEPLOY REALIZADO COM SUCESSO!"
echo ""
print_info "📊 Resumo:"
echo "   • Produtos no catálogo: $TOTAL_PRODUTOS"
echo "   • Tamanho do arquivo: $FILE_SIZE"
echo "   • Backup criado: $BACKUP_NAME"
echo ""
print_info "⏰ Próximos passos:"
echo "   1. Aguarde 2-3 minutos para deploy no Cloudflare Pages"
echo "   2. Acesse: https://priobf25.pages.dev"
echo "   3. Limpe o cache: Cmd+Shift+R (Mac) ou Ctrl+Shift+R (Windows)"
echo "   4. Verifique o Console (F12): deve aparecer '✅ Catálogo carregado'"
echo ""
print_info "📡 Acompanhe o deploy:"
echo "   https://dash.cloudflare.com"
echo ""
print_success "✅ Script finalizado com sucesso!"
echo ""
