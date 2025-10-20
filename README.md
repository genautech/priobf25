# 🛍️ Sistema Black Friday PRIO 2025

**Sistema Completo de Gestão e Análise de Produtos - Versão 6.5.0 FINAL**

[![Status](https://img.shields.io/badge/status-production-brightgreen)]()
[![Version](https://img.shields.io/badge/version-6.5.0-blue)]()
[![Deploy](https://img.shields.io/badge/deploy-cloudflare-yellow)]()
[![Sync](https://img.shields.io/badge/sync-100%25__automatic-success)]()
[![Security](https://img.shields.io/badge/security-SECURE-brightgreen)]()

🌐 **Site em Produção:** https://priobf25.pages.dev

---

## 🚀 VERSÃO 6.5.0 - SINCRONIZAÇÃO 100% AUTOMÁTICA (FINAL)

### ✨ O QUE FAZ:

Sistema completo para gerenciar catálogo de produtos da Black Friday 2025:

✅ **CRUD Completo** - Adicionar, editar, duplicar, deletar produtos  
✅ **Sincronização Automática** - Salva no GitHub automaticamente (2 segundos)  
✅ **Importação de Planilhas** - Importar CSV/Excel direto no admin  
✅ **Análise Avançada** - Gráficos, métricas e comparativos  
✅ **Catálogo Cliente** - Interface interativa para seleção de produtos  
✅ **100% Seguro** - Token protegido no servidor (Cloudflare Pages Function)  
✅ **Dados Sempre Atualizados** - Todas as abas mostram dados em tempo real

### 🆕 ÚLTIMA ATUALIZAÇÃO (2025-10-20):
**Correção Crítica: Sincronização de Dados em Tempo Real**

Implementamos correções críticas que garantem que **todos os dados são atualizados imediatamente** em todas as partes do sistema:

- ✅ **Aba Comparativo** agora mostra produtos adicionados/editados instantaneamente
- ✅ **Dashboard, Sugestões, Catálogo** sempre com dados atualizados
- ✅ **Estatísticas e Gráficos** refletem mudanças em tempo real
- ✅ **Exportação CSV** sempre com os dados mais recentes
- ✅ **CRUD unificado** usando `window.produtoCRUD` (sem lógicas duplicadas)

📄 **Detalhes técnicos:** Ver `CORRECOES-SISTEMA-v6.5-FINAL.md`  

---

## 📂 ARQUIVOS PRINCIPAIS (USE APENAS ESTES)

### 🎯 Páginas Principais:
- **`index.html`** - Página inicial com links para admin e cliente
- **`admin-v6.5.html`** - Painel administrativo (CRUD + Auto-Sync)
- **`cliente-analise-v6.1.html`** - Catálogo interativo para clientes

### 📦 Dados e Lógica:
- **`produtos-v6.1.js`** - Base de dados de produtos (atualizado automaticamente)
- **`produto-crud-sync.js`** - Sistema CRUD completo
- **`produto-persistencia-local.js`** - Salvamento local (backup)

### 🚀 Sincronização Automática:
- **`functions/sync.js`** - Cloudflare Pages Function (servidor)
- **`github-sync-worker.js`** - Cliente que envia para o servidor
- **`auto-sync-worker.js`** - Toggle e gerenciamento do Auto-Sync

### ⚙️ Configuração:
- **`_headers`** - Headers do Cloudflare (cache, CORS, segurança)
- **`_redirects`** - Redirects e atalhos de URL
- **`.gitignore`** - Arquivos que não vão para o Git
- **`CONFIGURAR-GITHUB-TOKEN.md`** - Guia de configuração do token

---

## 🎯 COMO USAR O SISTEMA

### 1️⃣ ACESSAR O ADMIN:

```
https://priobf25.pages.dev/admin
```

Ou use os atalhos:
- `/admin` → Painel administrativo
- `/painel` → Painel administrativo
- `/dashboard` → Painel administrativo

### 2️⃣ GERENCIAR PRODUTOS:

**No Admin:**
1. O **Auto-Sync está ATIVADO** automaticamente (toggle verde)
2. Adicione/edite produtos normalmente
3. Clique em **Salvar**
4. Aguarde 2 segundos → Sincronização automática!
5. Em 3-4 minutos, mudanças vão para produção

### 3️⃣ VISUALIZAR CATÁLOGO:

```
https://priobf25.pages.dev/cliente
```

Ou use os atalhos:
- `/cliente` → Catálogo interativo
- `/catalogo` → Catálogo interativo
- `/produtos` → Catálogo interativo

### 4️⃣ IMPORTAR PLANILHA:

**No Admin:**
1. Vá em **"Ferramentas"**
2. Clique em **"Importar Planilha"**
3. Selecione seu arquivo CSV/Excel
4. Confirme a importação
5. Auto-Sync sincroniza automaticamente!

---

## 🔐 CONFIGURAÇÃO INICIAL (UMA VEZ)

### Passo 1: Criar Token do GitHub

1. Acesse: https://github.com/settings/tokens
2. **Generate new token (classic)**
3. **Scopes:** Marque apenas ✅ `repo`
4. **Generate** e copie o token

### Passo 2: Configurar no Cloudflare

1. Acesse: https://dash.cloudflare.com
2. **Pages** → **priobf25** → **Settings** → **Environment variables**
3. **Add variable:**
   - Name: `GITHUB_TOKEN`
   - Value: [seu token]
   - Environments: ✅ Production ✅ Preview
4. **Save**
5. Faça um novo deploy (commit ou retry deployment)

**Pronto!** O sistema está 100% funcional! 🎉

---

## 🏗️ ARQUITETURA v6.5

```
┌─────────────────────────────────────────────────────────┐
│                     USUÁRIO (Admin)                      │
│             https://priobf25.pages.dev/admin            │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ 1. Edita produto
                     │ 2. Clica Salvar
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Auto-Sync (auto-sync-worker.js)            │
│         Detecta mudança → Aguarda 2 segundos            │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ 3. Envia todos os produtos
                     ▼
┌─────────────────────────────────────────────────────────┐
│          Pages Function (functions/sync.js)              │
│         🔐 Token seguro (env.GITHUB_TOKEN)              │
│         Recebe produtos → Gera arquivo JS                │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ 4. Commit automático
                     ▼
┌─────────────────────────────────────────────────────────┐
│                    GitHub API                            │
│            Atualiza produtos-v6.1.js                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ 5. Webhook de deploy
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Cloudflare Pages Deploy                     │
│           Build → Deploy → Produção (3-4 min)           │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ 6. Site atualizado
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  USUÁRIO (Cliente)                       │
│           https://priobf25.pages.dev/cliente            │
│               Vê produtos atualizados! ✅               │
└─────────────────────────────────────────────────────────┘
```

---

## 📊 ESTATÍSTICAS

- **Total de Produtos:** ~150
- **Produtos Planilha:** ~35 (ID 1-1999)
- **Produtos Sugeridos:** ~115 (ID 2000+)
- **Categorias:** 4 (Eletrônicos, Eletroportáteis, Utilidades, Outros)
- **Tempo de Sincronização:** 2 segundos (debounce)
- **Tempo de Deploy:** 3-4 minutos
- **Uptime:** 99.9% (Cloudflare Pages)

---

## 🔧 FUNCIONALIDADES

### Admin (admin-v6.5.html):
- ✅ Dashboard com métricas em tempo real
- ✅ CRUD completo (Create, Read, Update, Delete)
- ✅ Duplicação de produtos
- ✅ Importação de planilhas (CSV/Excel)
- ✅ Auto-Sync automático (toggle)
- ✅ Exportação para CSV
- ✅ Busca e filtros avançados
- ✅ Análise de rentabilidade
- ✅ Comparativo de preços com concorrentes
- ✅ Sistema de cupons dinâmicos

### Cliente (cliente-analise-v6.1.html):
- ✅ Catálogo interativo e responsivo
- ✅ Seleção múltipla de produtos
- ✅ Cálculo automático de investimento
- ✅ Análise de ROI e margem
- ✅ Exportação de seleção para CSV
- ✅ Filtros por categoria
- ✅ Ordenação por diversos critérios
- ✅ Visualização de preços e descontos

---

## 🗂️ ESTRUTURA DO PROJETO

```
priobf25/
├── 📄 index.html                      # Página inicial
├── 📄 admin-v6.5.html                 # Admin principal ⭐
├── 📄 cliente-analise-v6.1.html       # Catálogo cliente ⭐
│
├── 📦 Dados e CRUD
│   ├── produtos-v6.1.js               # Base de dados ⭐
│   ├── produto-crud-sync.js           # Sistema CRUD ⭐
│   └── produto-persistencia-local.js  # Backup local ⭐
│
├── 🚀 Sincronização Automática
│   ├── functions/
│   │   └── sync.js                    # Pages Function ⭐
│   ├── github-sync-worker.js          # Cliente HTTP ⭐
│   └── auto-sync-worker.js            # Toggle e gerenciamento ⭐
│
├── ⚙️ Configuração
│   ├── _headers                       # Headers HTTP ⭐
│   ├── _redirects                     # Redirects ⭐
│   ├── .gitignore                     # Git ignore ⭐
│   └── CONFIGURAR-GITHUB-TOKEN.md     # Guia de setup ⭐
│
├── 📚 Dados
│   ├── BF25-fornecedor-prio.csv       # Planilha de produtos
│   └── catalog_images.json            # Imagens dos produtos
│
└── 📖 Documentação
    ├── README.md                      # Este arquivo ⭐
    └── USAR-SISTEMA.md                # Guia rápido ⭐
```

**⭐ = Arquivos essenciais que você deve manter**

---

## 🗑️ ARQUIVOS OBSOLETOS (PODEM SER DELETADOS)

Estes arquivos são de versões antigas e não são mais usados na v6.5:

### Versões antigas do admin:
- `admin-v6.html`
- `admin-v6.1.html`
- `admin-v6.3.html`
- `admin-v6.4.html`

### Versões antigas do cliente:
- `cliente-analise-v6.html`

### Ferramentas auxiliares (não essenciais):
- `importar-catalogo-produtos.html`
- `importar-catalogo-produtos-v2.html`
- `gerar-csv-catalogo.html`
- `buscar-imagens-*.html` (vários arquivos)
- `executar-atualizacao-imagens.html`
- `corrigir-links-produtos.html`
- `test-botoes-ferramentas.html`
- `testar-*.html`

### Scripts auxiliares (não essenciais):
- `adicionar-links-automatico.js`
- `atualizar-imagens.js`
- `processar-atualizacao-imagens.js`
- `script-atualizar-*.js`
- `produtos-novos-upload.js`

### Arquivos de sincronização antiga (v6.3/v6.4):
- `github-sync.js` (substituído por github-sync-worker.js)
- `github-sync-actions.js` (v6.4, não usado mais)
- `auto-sync-actions.js` (v6.4, não usado mais)
- `auto-sync-toggle.js` (v6.3, não usado mais)
- `auto-sync-persistencia.js` (v6.3, não usado mais)
- `config-global.js` (v6.3, não usado mais)
- `produtos-sync-api.html`
- `produtos-sync.json`

### Worker standalone (não usado com Pages Function):
- `worker.js` (substituído por functions/sync.js)
- `wrangler.toml` (não necessário para Pages Function)

### Backups:
- `produtos-v6.1.js.backup-*` (todos os backups)

### Documentação antiga:
- Todos os arquivos `.md` e `.txt` de versões antigas (v6.0 a v6.4)
- Arquivos com emojis no nome (🚀, ⚡, ✅, etc.) - são documentação de desenvolvimento

**MANTENHA APENAS:** `README.md`, `CONFIGURAR-GITHUB-TOKEN.md`, `USAR-SISTEMA.md`

---

## 📝 CHANGELOG

### v6.5.0 (20/10/2025) - ATUAL ✅
- ✨ Sincronização 100% automática via Cloudflare Pages Function
- 🔐 Token seguro no servidor (não exposto no frontend)
- ⚡ Deploy ultra-simples via `git push` (sem Wrangler CLI)
- 🎯 Auto-Sync ativado por padrão
- 🔧 Toggle visual melhorado
- 📦 Cache busting no catálogo cliente
- ✅ Sistema completamente funcional

### v6.4.0 (20/10/2025)
- ❌ Tentativa com GitHub Actions (manual demais)
- ⚠️ Descontinuada em favor da v6.5

### v6.3.0 (20/10/2025)
- ⚠️ Auto-Sync funcional mas com token exposto
- ❌ Inseguro para produção
- ⚠️ Descontinuada em favor da v6.5

### v6.0-6.2 (15-18/10/2025)
- 📦 Sistema base e CRUD
- 📊 Dashboard e análises
- 📥 Importação de planilhas

---

## 🆘 SUPORTE E TROUBLESHOOTING

### Problema: Auto-Sync não funciona
**Solução:**
1. Verifique se o toggle está verde (ativado)
2. Abra o Console (F12) e veja se há erros
3. Verifique se `GITHUB_TOKEN` está configurado no Cloudflare
4. Faça um novo deploy após configurar o token

### Problema: Produtos não aparecem no cliente
**Solução:**
1. Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
2. Aguarde 3-4 minutos após a sincronização (tempo de deploy)
3. Verifique se o commit foi feito no GitHub

### Problema: Erro 401 na sincronização
**Solução:**
1. Token do GitHub inválido ou expirado
2. Crie um novo token: https://github.com/settings/tokens
3. Atualize no Cloudflare: Settings → Environment variables
4. Faça um novo deploy

### Problema: Erro 403 na sincronização
**Solução:**
1. Token sem permissão `repo`
2. Recrie o token marcando o scope `repo`
3. Atualize no Cloudflare

---

## 🔗 LINKS ÚTEIS

- **Site:** https://priobf25.pages.dev
- **Admin:** https://priobf25.pages.dev/admin
- **Cliente:** https://priobf25.pages.dev/cliente
- **GitHub:** https://github.com/genautech/priobf25
- **Cloudflare:** https://dash.cloudflare.com
- **Guia de Setup:** [CONFIGURAR-GITHUB-TOKEN.md](CONFIGURAR-GITHUB-TOKEN.md)
- **Guia de Uso:** [USAR-SISTEMA.md](USAR-SISTEMA.md)

---

## 📧 CONTATO

- **Desenvolvedor:** Sistema desenvolvido com IA
- **Versão:** 6.5.0 FINAL
- **Data:** 20/10/2025
- **Status:** ✅ Produção

---

## 📄 LICENÇA

Uso interno - Genautech / PRIO Black Friday 2025

---

**🎉 Sistema 100% funcional e pronto para uso!**
