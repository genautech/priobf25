# 🎯 Sistema Black Friday PRIO - v6.10

## 📊 **STATUS ATUAL**

✅ **164 produtos** carregados da planilha  
✅ **Auto-Sync** via Cloudflare Pages Function (sem API key exposta)  
✅ **CRUD completo** com salvamento automático no GitHub  
✅ **Deploy automático** após cada alteração  

---

## 🏗️ **ARQUITETURA COMPLETA**

### **1. Frontend (Públicos)**
- `index.html` - Página inicial com links para Admin e Cliente
- `admin-v6.10.html` - Dashboard administrativo completo
- `cliente-analise-v6.3.5.html` - Interface de análise de produtos

### **2. Base de Dados**
- `produtos-v6.1.js` - **164 produtos** gerados automaticamente
- `planilha-nova.csv` - Arquivo CSV fonte (165 linhas, 164 produtos)
- `gerar-produtos-v6.1-completo.py` - Script Python para conversão CSV → JS

### **3. Backend Serverless**
- `functions/sync.js` - Cloudflare Pages Function para auto-sync
  - URL: `https://priobf25.pages.dev/sync`
  - Recebe produtos do Admin
  - Faz commit automático no GitHub
  - **GITHUB_TOKEN** armazenado com segurança

### **4. Scripts de Sincronização**
- `github-sync-worker.js` - Cliente que chama /sync
- `auto-sync-worker.js` - Auto-save ao editar produtos
- `produto-crud-sync.js` - Sistema CRUD
- `produto-persistencia-local.js` - Cache local

---

## 🚀 **FUNCIONALIDADES**

### ✅ **Gestão de Produtos**
- CRUD completo (Criar, Ler, Atualizar, Deletar)
- Importação de CSV (164 produtos)
- Exportação para CSV com 23 campos
- Backup local automático

### ✅ **Auto-Sync sem API Key**
- **Salvamento automático** no GitHub
- **Token seguro** no Cloudflare (nunca exposto)
- **Deploy automático** após commit
- **Qualquer pessoa** pode salvar produtos

### ✅ **Análises e Estatísticas**
- Dashboard com métricas em tempo real
- Gráficos interativos
- Comparativo de preços
- Cálculo de margem e ROI

---

## 📁 **ESTRUTURA DE ARQUIVOS**

```
priobf25/
├── index.html                          # Página inicial
├── admin-v6.10.html                    # Admin completo
├── cliente-analise-v6.3.5.html         # Interface cliente
│
├── produtos-v6.1.js                    # ⚠️ GERADO AUTOMATICAMENTE
├── planilha-nova.csv                   # Fonte de dados (164 produtos)
├── gerar-produtos-v6.1-completo.py     # Script de conversão
│
├── functions/
│   └── sync.js                         # Cloudflare Pages Function
│
├── github-sync-worker.js               # Cliente auto-sync
├── auto-sync-worker.js                 # Auto-save
├── produto-crud-sync.js                # Sistema CRUD
├── produto-persistencia-local.js       # Cache local
│
├── GUIA-AUTO-SYNC-CLOUDFLARE.md       # 📖 Guia completo auto-sync
├── CHECKLIST-GITHUB-TOKEN.md          # ✅ Checklist configuração
└── README-FINAL.md                     # 📄 Este arquivo
```

---

## 🔧 **CONFIGURAÇÃO INICIAL**

### **1. Clonar Repositório**
```bash
git clone https://github.com/genautech/priobf25.git
cd priobf25
```

### **2. Gerar Produtos (se necessário)**
```bash
# Regenerar produtos-v6.1.js a partir do CSV
python3 gerar-produtos-v6.1-completo.py

# Verificar geração
ls -lh produtos-v6.1.js  # Deve ter ~186KB
wc -l produtos-v6.1.js   # Deve ter ~3.673 linhas
```

### **3. Configurar Auto-Sync** (Obrigatório!)

📖 **Ver guia completo**: `GUIA-AUTO-SYNC-CLOUDFLARE.md`

**Resumo**:
1. Criar GitHub Personal Access Token com permissão `repo`
2. Configurar no Cloudflare Pages como `GITHUB_TOKEN`
3. Fazer deploy para ativar
4. Testar no Admin

---

## 📝 **FLUXO DE TRABALHO**

### **Para Administradores**

#### 1. Editar Produtos via Admin
1. Acesse: `https://priobf25.pages.dev/admin-v6.10.html`
2. Edite produtos (preço, estoque, descrição, etc.)
3. Clique em **"Salvar Alterações"**
4. ✅ Commit automático no GitHub
5. ✅ Deploy automático (2-3 min)

#### 2. Adicionar Produtos via CSV
1. Edite `planilha-nova.csv` (adicione linhas)
2. Execute: `python3 gerar-produtos-v6.1-completo.py`
3. Commit e push:
   ```bash
   git add produtos-v6.1.js planilha-nova.csv
   git commit -m "feat: adicionar novos produtos"
   git push origin main
   ```
4. Aguarde deploy (2-3 min)

### **Para Usuários Finais**

#### Acessar Sistema
- **Admin**: `https://priobf25.pages.dev/admin-v6.10.html`
- **Cliente**: `https://priobf25.pages.dev/cliente-analise-v6.3.5.html`

#### Usar o Admin
1. Visualizar 164 produtos
2. Filtrar por categoria/subcategoria
3. Editar preços e informações
4. Salvar automaticamente (sem precisar de API key!)
5. Exportar para CSV (23 campos)

---

## 🔍 **VARIÁVEIS EXPORTADAS**

O arquivo `produtos-v6.1.js` exporta para `window`:

```javascript
window.produtosPlanilha     // Array com 164 produtos
window.produtosSugeridos    // Array com produtos do Admin
window.todosOsProdutosV6    // Todos os produtos (planilha + sugeridos)
window.cuponsDesconto       // Array de cupons disponíveis
```

---

## 📊 **ESTRUTURA DE PRODUTO**

Cada produto tem:

```javascript
{
  id: 1001,                           // ID único
  sku: "1MOR-EVO",                    // SKU do produto
  nome: "1MORE EVO",                  // Nome completo
  categoria: "Eletrônicos",           // Categoria principal
  subcategoria: "Áudio",              // Subcategoria
  quantidade: 10,                     // Quantidade padrão
  custoBase: 993.65,                  // Custo (85% do preço mercado)
  precoMercado: 1169,                 // Preço de referência
  margem: 30,                         // Margem (%)
  precoVenda: 1291.75,                // Preço venda (custo * 1.3)
  estoque: "Em Estoque",              // Status estoque
  fornecedor: "1MORE",                // Fornecedor
  precoConcorrente: 1188.3,           // Preço concorrente (opcional)
  imagem: "https://...",              // URL da imagem
  linkCompra: "https://...",          // Link marketplace
  descricao: "...",                   // Descrição
  especificacoes: {
    marketplace: "Kabum",             // Marketplace
    prazoEntrega: "7 A 10 DIAS"       // Prazo entrega
  }
}
```

---

## 🚨 **TROUBLESHOOTING**

### ❌ **Problema: Admin mostra "Pages Function offline"**

**Causa**: `GITHUB_TOKEN` não configurado no Cloudflare

**Solução**:
1. Siga o `CHECKLIST-GITHUB-TOKEN.md`
2. Configure token no Cloudflare Pages
3. Faça novo deploy
4. Teste novamente

### ❌ **Problema: Site não atualiza após salvar**

**Causa**: Deploy ainda não terminou

**Solução**:
1. Aguarde 2-3 minutos
2. Force refresh: `Cmd + Shift + R` (Mac)
3. Verifique Cloudflare → Deployments

### ❌ **Problema: produtos-v6.1.js com apenas 5 produtos**

**Causa**: Arquivo não foi regenerado após edição do CSV

**Solução**:
```bash
rm produtos-v6.1.js
python3 gerar-produtos-v6.1-completo.py
git add produtos-v6.1.js
git commit -m "fix: regenerar produtos com 164 itens"
git push origin main
```

---

## 📚 **DOCUMENTAÇÃO ADICIONAL**

- 📖 **Auto-Sync**: `GUIA-AUTO-SYNC-CLOUDFLARE.md`
- ✅ **Checklist Token**: `CHECKLIST-GITHUB-TOKEN.md`
- 🔧 **Deploy Manual**: `GUIA-RAPIDO-DEPLOY.txt`

---

## 🎯 **PRÓXIMOS PASSOS**

1. ✅ **Configurar GITHUB_TOKEN** (obrigatório para auto-sync)
2. ✅ **Testar salvamento** no Admin
3. ✅ **Adicionar mais produtos** via CSV (se necessário)
4. ✅ **Customizar categorias** conforme necessidade

---

## 📞 **SUPORTE**

**Problemas?**
1. Verifique console do navegador (F12)
2. Verifique logs do Cloudflare Pages
3. Consulte os guias em `/docs`

**Links Úteis**:
- Site: https://priobf25.pages.dev
- Repo: https://github.com/genautech/priobf25
- Cloudflare: https://dash.cloudflare.com

---

**Versão**: 6.10  
**Última Atualização**: 23/10/2025  
**Total de Produtos**: 164  
**Status**: ✅ Pronto para produção  
