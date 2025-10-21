# 📦 ARQUIVOS ESSENCIAIS - Sistema Black Friday PRIO v6.5

## ✅ ARQUIVOS NECESSÁRIOS PARA PRODUÇÃO

### 🏠 **Páginas Principais**
```
index.html                    - Página inicial do sistema
admin-v6.5.html              - Painel administrativo (v6.5 - ATUAL)
cliente-analise-v6.1.html    - Catálogo/análise de produtos para clientes
```

### 📊 **Dados**
```
produtos-v6.1.js             - Base de dados de produtos (atualizado automaticamente)
```

### 🔧 **Scripts Funcionais v6.5**
```
produto-crud-sync.js         - CRUD de produtos
produto-persistencia-local.js - Persistência em localStorage
github-sync-worker.js        - Cliente de sincronização (v6.5)
auto-sync-worker.js          - Auto-sync automático (v6.5)
```

### ⚙️ **Configuração**
```
_headers                     - Headers HTTP (cache configurado)
_redirects                   - Redirects do Cloudflare Pages
.gitignore                   - Arquivos ignorados pelo Git
```

### 🚀 **Cloudflare Pages Function**
```
functions/
  └── sync.js               - Pages Function para sincronização automática
```

### 📚 **Documentação Essencial**
```
README.md                    - Documentação principal do projeto
CONFIGURAR-GITHUB-TOKEN.md   - Guia de configuração do token
DEPLOY-v6.5.md              - Guia de deploy simplificado (NOVO)
```

---

## ❌ ARQUIVOS OBSOLETOS (Podem ser deletados)

### 🗑️ **Versões Antigas do Admin**
```
admin-v6.html               - Versão 6.0 (obsoleta)
admin-v6.1.html             - Versão 6.1 (obsoleta)
admin-v6.3.html             - Versão 6.3 (obsoleta)
admin-v6.4.html             - Versão 6.4 (obsoleta)
```

### 🗑️ **Versões Antigas do Cliente**
```
cliente-analise-v6.html     - Versão antiga (obsoleta)
catalogo-v5.2.html          - Versão 5.2 (obsoleta)
```

### 🗑️ **Scripts Obsoletos**
```
github-sync-actions.js      - Versão 6.4 com GitHub Actions (obsoleta)
auto-sync-actions.js        - Versão 6.4 (obsoleta)
github-sync.js              - Versão 6.3 (obsoleta)
auto-sync-toggle.js         - Versão 6.3 (obsoleta)
auto-sync-persistencia.js   - Versão 6.3 (obsoleta)
config-global.js            - Configuração antiga (obsoleta)
```

### 🗑️ **Arquivos de Workers Obsoletos**
```
worker.js                   - Worker separado (não usado em Pages Function)
wrangler.toml               - Configuração de Worker (não necessário)
produtos-sync.json          - Arquivo temporário vazio
produtos-sync-api.html      - Ferramenta antiga
```

### 🗑️ **Ferramentas de Utilidade (Opcionais)**
```
adicionar-links-automatico.js
atualizar-imagens.js
atualizar-imagens-automatico.html
buscar-imagens-*.html       - Múltiplos arquivos de busca de imagens
corrigir-links-produtos.html
executar-atualizacao-imagens.html
gerar-csv-catalogo.html
importar-catalogo-produtos.html
importar-catalogo-produtos-v2.html
preparar-links-imagens.html
processar-atualizacao-imagens.js
script-atualizar-imagens-produtos.html
script-atualizar-links-produtos.js
test-botoes-ferramentas.html
testar-imagens.html
testar-produtos.html
visualizar-imagens-catalogo.html
```

### 🗑️ **Dados Temporários/Backup**
```
produtos-v6.0.js
produtos-v6.1.js.backup-*   - Múltiplos backups
produtos-competitivos-*.json
produtos-novos-*.json
produtos-novos-upload.js
catalog_images.json
imagens-produtos-extraidas.json
template-*.json
```

### 🗑️ **CSV de Importação (Manter apenas se usar)**
```
BF25-fornecedor-concorrente.csv
BF25-fornecedor-prio.csv
BF25-fornecedor-prio-novo.csv
TEMPLATE-IMPORTACAO-PRODUTOS.csv
```

### 🗑️ **Documentação Antiga (300+ arquivos MD/TXT)**
```
ANTES-DEPOIS-*.md
ARQUIVOS-*.md
ATUALIZACAO-*.md
CHANGELOG-*.md
CHECKLIST-*.md
COMANDOS-*.txt
COMECE-AQUI-*.md
CONFIGURAR-*.md
CORRECAO-*.md
CORRECOES-*.md
CRUD-*.md
DEBUG-*.md
DEPLOY-*.md
DOCUMENTACAO-*.md
ENTREGA-*.md
FAQ-*.md
FLUXO-*.md
GIT-*.md
GUIA-*.md
IMPORTACAO-*.md
INDEX-*.md
INDICE-*.md
INTEGRACAO-*.md
LISTA-*.txt
NOVO-*.txt
PLANO-*.md
PROMPT-*.md
QUICK-*.md
README-*.md
RESUMO-*.md
SOLUCAO-*.txt
SPEC-*.md
SUAS-*.md
TEMPLATE-*.csv
TESTE-*.md
TUTORIAL-*.md
VERSAO-*.md
VISUALIZACAO-*.md
```

E todos os arquivos com emojis:
```
📋-*.md
📊-*.md
📚-*.md
📝-*.md
📦-*.md
📸-*.md
🎁-*.md
🎉-*.md
🎨-*.md
🎯-*.txt
🎯-*.md
🐛-*.md
💡-*.md
💬-*.md
📁-*.md
📂-*.md
🔍-*.md
🔒-*.md
🔥-*.md
🔧-*.md
🖼️-*.md
🗂️-*.md
🚀-*.md
🚨-*.md
🧪-*.md
✅-*.md
✨-*.md
⭐-*.md
⚡-*.md
▶️-*.txt
```

---

## 🎯 ESTRUTURA LIMPA RECOMENDADA

```
priobf25/
├── functions/
│   └── sync.js                          ← Pages Function
├── index.html                            ← Página inicial
├── admin-v6.5.html                       ← Admin v6.5
├── cliente-analise-v6.1.html             ← Catálogo cliente
├── produtos-v6.1.js                      ← Dados (auto-atualizado)
├── produto-crud-sync.js                  ← CRUD
├── produto-persistencia-local.js         ← Persistência
├── github-sync-worker.js                 ← Sync v6.5
├── auto-sync-worker.js                   ← Auto-sync v6.5
├── _headers                              ← Config HTTP
├── _redirects                            ← Redirects
├── .gitignore                            ← Git ignore
├── README.md                             ← Documentação principal
├── CONFIGURAR-GITHUB-TOKEN.md            ← Guia token
└── DEPLOY-v6.5.md                        ← Guia deploy
```

**Total:** 15 arquivos essenciais + 1 pasta

---

## 🗑️ COMANDO PARA LIMPAR ARQUIVOS OBSOLETOS

```bash
cd /Users/genautech/priobf25

# ATENÇÃO: Revise antes de executar!
# Este comando remove TODOS os arquivos obsoletos listados acima

# Remover versões antigas de admin/cliente
rm -f admin-v6.html admin-v6.1.html admin-v6.3.html admin-v6.4.html
rm -f cliente-analise-v6.html catalogo-v5.2.html

# Remover scripts obsoletos
rm -f github-sync-actions.js auto-sync-actions.js github-sync.js
rm -f auto-sync-toggle.js auto-sync-persistencia.js config-global.js
rm -f worker.js wrangler.toml produtos-sync.json produtos-sync-api.html

# Remover ferramentas opcionais
rm -f adicionar-links-automatico.js atualizar-imagens.js
rm -f atualizar-imagens-automatico.html
rm -f buscar-imagens-*.html
rm -f corrigir-links-produtos.html
rm -f executar-atualizacao-imagens.html
rm -f gerar-csv-catalogo.html
rm -f importar-catalogo-produtos*.html
rm -f preparar-links-imagens.html
rm -f processar-atualizacao-imagens.js
rm -f script-atualizar-*.html script-atualizar-*.js
rm -f test-botoes-ferramentas.html
rm -f testar-*.html
rm -f visualizar-imagens-catalogo.html

# Remover backups e dados temporários
rm -f produtos-v6.0.js produtos-v6.1.js.backup-*
rm -f produtos-competitivos-*.json produtos-novos-*.json
rm -f produtos-novos-upload.js
rm -f catalog_images.json imagens-produtos-extraidas.json
rm -f template-*.json

# Remover documentação antiga (CUIDADO!)
rm -f ANTES-DEPOIS-*.md ARQUIVOS-*.md ATUALIZACAO-*.md
rm -f CHANGELOG-*.md CHECKLIST-*.md COMANDOS-*.txt
rm -f COMECE-AQUI-*.md CORRECAO-*.md CORRECOES-*.md
rm -f CRUD-*.md DEBUG-*.md DEPLOY-*.md
rm -f DOCUMENTACAO-*.md ENTREGA-*.md FAQ-*.md
rm -f FLUXO-*.md GIT-*.md GUIA-*.md
rm -f IMPORTACAO-*.md INDEX-*.md INDICE-*.md
rm -f INTEGRACAO-*.md LISTA-*.txt NOVO-*.txt
rm -f PLANO-*.md PROMPT-*.md QUICK-*.md
rm -f README-*.md RESUMO-*.md SOLUCAO-*.txt
rm -f SPEC-*.md SUAS-*.md TESTE-*.md
rm -f TUTORIAL-*.md VERSAO-*.md VISUALIZACAO-*.md

# Remover arquivos com emojis
rm -f *-*.md *-*.txt

# Commitar limpeza
git add -A
git commit -m "chore: limpar arquivos obsoletos - manter apenas v6.5 essenciais"
git push origin main
```

---

## ⚠️ IMPORTANTE

**ANTES DE DELETAR:**
1. Faça backup local completo
2. Revise os arquivos que serão removidos
3. Confirme que não há dependências não listadas

**Arquivos CSV:** Mantenha apenas se você usa importação de planilhas regularmente.

**Documentação antiga:** Mova para uma pasta `docs-historico/` em vez de deletar, caso precise consultar depois.

---

**Última atualização:** 20/10/2025 - v6.5.0
