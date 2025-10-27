# 🛍️ Sistema Black Friday PRIO 2025

**Sistema Completo de Gestão e Análise de Produtos - Versão 6.10.0**

[![Status](https://img.shields.io/badge/status-production-brightgreen)]()
[![Version](https://img.shields.io/badge/version-6.10.0-blue)]()
[![Deploy](https://img.shields.io/badge/deploy-cloudflare-yellow)]()
[![Sync](https://img.shields.io/badge/sync-100%25__automatic-success)]()
[![Security](https://img.shields.io/badge/security-SECURE-brightgreen)]()

🌐 **Site em Produção:** https://priobf25.pages.dev

---

## 🚀 VERSÃO 6.10.0 - ESTATÍSTICAS AVANÇADAS + CSV OTIMIZADO + FERRAMENTAS LIMPAS

### ✨ O QUE FAZ:

Sistema completo para gerenciar catálogo de produtos da Black Friday 2025:

✅ **CRUD Completo** - Adicionar, editar, duplicar, deletar produtos  
✅ **Sincronização Automática** - Salva no GitHub automaticamente (2 segundos)  
✅ **Importação de Planilhas** - Importar CSV/Excel direto no admin  
✅ **🆕 Conversor CSV Avançado** - Ferramenta standalone para substituição completa do catálogo  
✅ **Análise Avançada** - Gráficos, métricas e comparativos  
✅ **Catálogo Cliente** - Interface interativa para seleção de produtos com descrições  
✅ **100% Seguro** - Token protegido no servidor (Cloudflare Pages Function)  
✅ **Dados Sempre Atualizados** - Todas as abas mostram dados em tempo real  
✅ **Re-sincronização de Preços** - Atualizar múltiplos produtos com base nos links cadastrados  
✅ **Re-inserção de Produtos** - Recuperar produtos obsoletos do histórico  
✅ **Estatísticas em Tempo Real** - 4 cards com métricas ao vivo na aba Sugestões  
✅ **CSV Completo** - Exportação com 23 campos incluindo análise financeira  
✅ **Ferramentas Otimizadas** - Interface limpa com apenas 6 ferramentas essenciais

### 🆕 ÚLTIMA ATUALIZAÇÃO (2025-10-27):
**✅ CORREÇÕES CRÍTICAS + SUPORTE DESENVOLVIMENTO LOCAL** 🎉

**Status:** 100% Funcional | Dev: ✅ | Produção: ✅ | Modais: ✅ Corrigidos | Deploy: Pronto

⭐ **NOVIDADES v6.10.3.2 (2025-10-27):**

**1. 💻 Suporte Completo para Desenvolvimento Local:**
- ✅ **Detecção Automática:** Sistema detecta ambiente (dev/produção) automaticamente
- ✅ **Modo Desenvolvimento:** Salva em localStorage (sem necessidade de token ou Pages Function)
- ✅ **Modo Produção:** Salva no GitHub via Pages Function automaticamente
- ✅ **Sem Erros:** Funciona perfeitamente em preview/localhost/GenSpark
- ✅ **Logs Claros:** Console mostra exatamente o que está acontecendo em cada ambiente
- 📍 **Documentação:** `💡-DESENVOLVIMENTO-LOCAL-v6.10.3.2.md`

**Ambientes Detectados Automaticamente:**
```
Desenvolvimento: localhost, 127.0.0.1, file://, genspark, preview
Produção: priobf25.pages.dev (Cloudflare)
```

**Como Funciona:**
```
Desenvolvimento Local:
→ Edita produto → Salva em localStorage
→ Sincroniza UI em todas as abas
→ Console: "💾 Modo Desenvolvimento Local"
→ Sem erros, sem necessidade de configuração

Produção (priobf25.pages.dev):
→ Edita produto → Salva via Pages Function
→ Commit automático no GitHub (2-5s)
→ Deploy automático Cloudflare (1-2 min)
→ Site atualizado em produção
```

⭐ **NOVIDADES v6.10.3 (2025-10-27):**

**1. 🔧 Correções no Sistema de Edição de Produtos:**
- ✅ **Modal Azul (Visualização):** Removido todas funcionalidades de edição - agora é apenas para visualização
- ✅ **Edição de Margem Melhorada:** Ao salvar margem, sincroniza automaticamente em TODAS as páginas e modais
- ✅ **Sistema CRUD Integrado:** Todas as edições agora usam `window.produtoCRUD` garantindo consistência
- ✅ **Sincronização Automática:** Após salvar margem ou produto, interface atualiza completamente
- ✅ **Cálculo de Preço Corrigido:** Fórmula `precoVenda = custoBase * (1 + margem/100)` validada e funcionando
- ✅ **Mensagem Informativa:** Modal azul agora indica onde editar o produto (tabela ou Análise Comparativa)

**Como Funciona Agora:**
```
1. VISUALIZAR: Modal Azul → Apenas visualização (sem botões de edição)
2. EDITAR PRODUTO: Tabela → Botão "Editar" → Abre modal CRUD
3. EDITAR MARGEM: Análise Comparativa → Editor de Margem dedicado
4. SALVAR: Sincroniza automaticamente em Dashboard, Sugestões, Catálogo e Análise
5. ✅ Dados sempre consistentes em todas as abas!
```

**Arquivos Modificados:**
- `admin-v6.10.html` - Correções nos modais e sistema de sincronização

⭐ **NOVIDADES v6.10.2 (2025-10-24):**

**1. 🖼️ Sistema Completo para Imagens (Google Drive + Imgur):**
- ✅ **Auto-Conversão de URLs:** Links do Google Drive/Imgur convertidos automaticamente
- ✅ **Preview Melhorado:** Suporte para Google Drive (thumbnail), Imgur, detecção Base64
- ✅ **Ferramenta de Atualização em Massa:** Interface para gerenciar imagens de todos os produtos
- ✅ **Proteção CORS:** Soluções testadas (Google Drive thumbnail, Imgur)
- ✅ **Bloqueio Base64:** Detecta e substitui automaticamente por placeholder
- ✅ **Sincronização GitHub:** Git push manual (controle total)
- 📍 **Documentação:** `📌-LEIA-PRIMEIRO-SOLUCAO-FINAL.md` e `👉-RESPOSTA-FINAL-IMGUR-SOLUCAO.md`
- ⭐ **RECOMENDADO:** Use **Imgur** para imagens (funciona 100%, sem CORS)

**Como Usar com Imgur (Recomendado):**
```
1. Acesse: https://imgur.com → Upload imagem
2. Copiar URL direta (https://i.imgur.com/ABC123.jpg)
3. Cole no Admin → Preview instantâneo
4. Salvar produto
5. Git push quando quiser subir → Deploy automático
6. ✅ Imagens aparecem perfeitamente na nuvem!
```

**Alternativa - Google Drive:**
```
1. Upload para: https://drive.google.com/drive/folders/1CDQIFpTO_G8jw3v8AndRc0gHe4Uy1QCD
2. IMPORTANTE: Compartilhar como "Qualquer pessoa com o link" (público)
3. Cole no Admin → Conversão automática para googleusercontent
4. Preview + salvar
5. ✅ Formato: lh3.googleusercontent.com (melhor CORS)
6. 📖 Guia: 👉-GOOGLE-DRIVE-CONFIGURAR-AGORA.md
```

**Arquivos Modificados:**
- `admin-v6.10.html` - Google Drive thumbnail + conversões automáticas
- `ferramenta-atualizar-imagens.html` - Gerenciamento em massa de imagens

⭐ **NOVIDADES v6.10.1 (2025-10-22):**

**1. 🔄 Conversor CSV Avançado (Nova Ferramenta):**
- ✅ **Ferramenta Standalone:** Interface web completa para conversão de CSV
- ✅ **Substituição Completa:** Permite substituir todo o catálogo de produtos
- ✅ **Mapeamento Automático:** Converte 10 campos CSV para estrutura do sistema
- ✅ **Validação Inteligente:** Verifica dados, calcula preços e margens automaticamente
- ✅ **Drag & Drop:** Arraste CSV e converta instantaneamente
- ✅ **Estatísticas em Tempo Real:** Mostra análise dos dados antes de converter
- ✅ **100% Compatível:** Gera arquivo produtos-v6.1.js pronto para uso
- 📍 **Localização:** Arquivo `converter-planilha-para-sistema.html`
- 📖 **Documentação:** `GUIA-ATUALIZACAO-CATALOGO-CSV.md`

**Campos Convertidos Automaticamente:**
```
CSV → Sistema:
SKU → sku
Nome do Produto → nome
Categoria → categoria
Subcategoria → subcategoria
Fornecedor → fornecedor
Preço Mercado → custoBase + precoMercado
Menor preço Marketplaces → precoVenda (calculado)
Link de compra → linkCompra
Marketplace → especificacoes.marketplace
Prazo de entrega → especificacoes.prazoEntrega

Campos Calculados:
• margem (automático)
• quantidade (padrão: 10)
• estoque (baseado em preço)
• imagem (placeholder)
```

**Como Usar:**
```
1. Abra: converter-planilha-para-sistema.html
2. Arraste seu CSV (separador ";")
3. Clique: "Converter para Sistema"
4. Baixe: produtos-v6.1.js
5. Substitua o arquivo no projeto
6. Push para GitHub → Deploy automático!
```

⭐ **NOVIDADES v6.10.0 (2025-10-21):**

**1. 📊 Estatísticas em Tempo Real (Aba Sugestões):**
- ✅ **4 Cards Visuais:** Total de produtos, Novos, Investimento total, Lucro projetado
- ✅ **Gradientes Coloridos:** Azul (total), Verde (novos), Laranja (investimento), Roxo (lucro)
- ✅ **Atualização Automática:** Cálculos em tempo real ao filtrar/buscar
- ✅ **Cálculos Financeiros:** Investimento = Custo × Qtd, Lucro = (Venda - Custo) × Qtd
- ✅ **Badge NOVO:** Identifica automaticamente produtos com badge "NOVO"
- 📍 **Localização:** Aba "Sugestões & Inovações 2025" → Topo da página

**2. 📄 CSV Export Completo (23 Campos):**
- ✅ **Expandido:** De 13 para 23 campos com análise financeira completa
- ✅ **Novos Campos:** Investimento Total, Receita Total, Lucro Unitário, Lucro Total
- ✅ **Análise Competitiva:** Preço Concorrente, Diferença, Status Competitividade
- ✅ **Campos Editáveis:** Todos os novos campos do formulário incluídos
- ✅ **UTF-8 BOM:** Compatibilidade perfeita com Excel (acentos corretos)
- ✅ **Cálculos Automáticos:** Métricas financeiras calculadas automaticamente
- 📍 **Localização:** Aba Ferramentas → Card "Exportar CSV"

**3. 🧹 Ferramentas Otimizadas (11→6):**
- ✅ **Interface Limpa:** Removidas 5 ferramentas redundantes/externas
- ✅ **6 Ferramentas Essenciais:** Exportar Template, Importar Catálogo, Importador Inteligente, Corrigir Links, Re-sincronizar Preços, Exportar CSV
- ✅ **Removidas:** Atualizar Imagens, Buscar Imagens FINAL, Buscar Google/Bing, Importador Externo v2, Visualizar Imagens
- ✅ **Foco:** Apenas ferramentas integradas e essenciais ao workflow
- 📍 **Localização:** Aba Ferramentas → Layout de 2 colunas responsivo

⭐ **FUNCIONALIDADES v6.9.0 (Anteriores):**

**1. 💰 Re-sincronização de Preços:**
- ✅ **Interface intuitiva:** Modal com lista de todos os produtos que possuem links cadastrados
- ✅ **Seleção múltipla:** Escolha quais produtos atualizar com checkboxes
- ✅ **Acesso direto aos links:** Botão para abrir a página do fornecedor em nova aba
- ✅ **Atualização em lote:** Edite preços de vários produtos e aplique todos de uma vez
- ✅ **Campos atualizáveis:** Custo Base e Preço Mercado
- ✅ **Cálculo automático:** Preço de venda recalculado com base na margem
- ✅ **Validação inteligente:** Ignora produtos selecionados sem novos valores
- ✅ **Histórico registrado:** Todas as atualizações são registradas no histórico
- 📍 **Localização:** Aba Ferramentas → Card "Re-sincronizar Preços"

**2. 🔄 Re-inserção de Produtos Obsoletos:**
- ✅ **Detecção automática:** Identifica produtos removidos que ainda estão no histórico
- ✅ **Modal de seleção:** Interface para escolher quais produtos recuperar
- ✅ **Seleção individual:** Checkboxes para escolher produtos específicos
- ✅ **Botões de ação:** Selecionar todos, desmarcar todos
- ✅ **Duas opções:** Remover do histórico OU re-inserir no sistema
- ✅ **Re-criação inteligente:** Produtos re-inseridos com status "sugerido" para configuração
- ✅ **Badge visual:** Produtos re-inseridos recebem badge "🔄 REINSERIDO"
- ✅ **Dados preservados:** Nome e ID do produto original são mantidos
- 📍 **Localização:** Dashboard → Histórico de Atualizações → Botão "Re-sincronizar"

### 🚀 COMO USAR AS NOVAS FUNCIONALIDADES:

#### 💰 Re-sincronização de Preços
```
1. Abra o Admin → Aba "Ferramentas"
2. Clique no card "Re-sincronizar Preços" (verde esmeralda)
3. Selecione os produtos que deseja atualizar
4. Clique em "Abrir Link" para visitar a página do fornecedor
5. Consulte o preço atual e digite nos campos
6. Clique em "Aplicar Atualizações"
7. ✅ Pronto! Preços atualizados em lote
```

#### 🔄 Re-inserção de Produtos Obsoletos
```
1. Abra o Admin → Aba "Dashboard"
2. Expanda "Histórico de Atualizações"
3. Clique em "Re-sincronizar"
4. Se houver produtos obsoletos, um modal será aberto
5. Selecione os produtos que deseja recuperar
6. Escolha: "Remover do Histórico" OU "Re-inserir no Sistema"
7. ✅ Produtos recuperados com badge "🔄 REINSERIDO"
8. Configure manualmente os detalhes dos produtos re-inseridos
```

### 🚀 COMO USAR AS NOVAS FUNCIONALIDADES v6.10.0:

#### 📊 Estatísticas em Tempo Real
```
1. Abra o Admin → Aba "Sugestões & Inovações 2025"
2. Observe os 4 cards no topo da página:
   - 🔵 Total de Produtos: Quantidade total de sugestões
   - 🟢 Novos: Produtos marcados com badge "NOVO"
   - 🟠 Investimento: Soma de (Custo Base × Quantidade)
   - 🟣 Lucro Projetado: Soma de ((Preço Venda - Custo) × Quantidade)
3. Use filtros/busca: As estatísticas atualizam automaticamente
4. ✅ Visualização em tempo real dos números da sua operação!
```

#### 📄 CSV Export Completo (23 Campos)
```
1. Abra o Admin → Aba "Ferramentas"
2. Clique no card "Exportar CSV" (roxo)
3. Escolha "Produtos Planilha" ou "Produtos Sugeridos"
4. ✅ Arquivo baixado com 23 campos:
   • Básicos: ID, SKU, Nome, Categoria, Subcategoria, Fornecedor
   • Quantidades: Quantidade, Custo Base, Preço Mercado, Margem, Preço Venda
   • Financeiros: Investimento Total, Receita Total, Lucro Unitário, Lucro Total
   • Extras: Link, Imagem, Badge, Status, Origem
   • Competitivo: Preço Concorrente, Diferença, Status Competitividade
5. Abra no Excel/Google Sheets: Acentos perfeitos (UTF-8 BOM)
```

#### 🧹 Ferramentas Otimizadas
```
1. Abra o Admin → Aba "Ferramentas"
2. Veja apenas as 6 ferramentas essenciais:
   - 📋 Exportar Template CSV
   - 📥 Importar Catálogo de Produtos
   - 🤖 Importador Inteligente de Produtos
   - 🔗 Corrigir Links de Produtos
   - 💰 Re-sincronizar Preços
   - 📊 Exportar CSV
3. Interface mais limpa e focada
4. ✅ Workflow mais eficiente!
```

### 📚 Documentação Completa
- **⚡ COMECE AQUI:** `⚡-COMECE-AQUI-v6.10.txt` - Teste em 5 minutos
- **📋 Release Notes:** `RELEASE-v6.10.0.md` - Documentação técnica completa
- **👉 v6.9:** `👉-LEIA-PRIMEIRO-v6.9.txt` - Funcionalidades anteriores
- **Tutorial v6.9:** `GUIA-RAPIDO-v6.9.md` - Passo a passo com exemplos

---

### 📋 VERSÕES ANTERIORES:

**Versão 6.7.1 - Admin COMPLETO com Todas as Correções + v6.3.4 Carrinho Otimizado**

⭐ **ADMIN v6.7.1 - TODAS AS CORREÇÕES IMPLEMENTADAS:**
- ✅ **Análise Comparativa funcionando:** Botões Ver e Editar totalmente operacionais
- ✅ **Dashboard com edição direta:** Botão "Editar" direto na tabela + via modal de visualização
- ✅ **Modal de edição corrigido:** Não fecha mais ao clicar "Editar Produto"
- ✅ **Re-sincronização de histórico:** Novo botão para verificar produtos removidos
- ✅ **Indicadores de status:** Badges verde (visível) e vermelho (removido) no histórico
- ✅ **Sequenciamento de modais:** setTimeout implementado para transição suave
- 📚 Documentação: `💬-CORRECOES-v6.7.1.txt` e `⚡-RESUMO-v6.7.1.txt`

**ADMIN v6.7 - CORREÇÕES ANTERIORES:**
- ✅ **Modal fecha automaticamente:** Spinner "Salvando..." → Confirmação → Fecha em 500ms
- ✅ **Modal abre para produtos novos:** Usa dados dinâmicos do CRUD
- ✅ **Modal funciona em busca:** Função global acessível em todos elementos
- ✅ **Análise Comparativa com ações:** Botões Ver (👁️) e Editar (✏️) adicionados
- ✅ **Campos editáveis confirmados:** custoBase e precoMercado SÃO editáveis no modal CRUD
- ⚠️ **Importante:** Modal EDIÇÃO (roxo ✏️) = editável | Modal VISUALIZAÇÃO (azul 👁️) = read-only
- 📚 Documentação completa: `📝-CORRECOES-ADMIN-v6.7.md` e `🎨-GUIA-VISUAL-MODAIS.md`

---

🛒 **CARRINHO WHATSAPP OTIMIZADO (v6.3.4):**
- ✅ **Modal controlado:** Só abre ao clicar "Enviar ao Carrinho" (NÃO ao adicionar/mudar quantidade)
- ✅ **Links protegidos:** Links dos fornecedores NÃO aparecem na mensagem WhatsApp
- ✅ **Número WhatsApp configurado:** 5541987607512 já está no código
- ✅ **Botão "Enviar Pedido via WhatsApp"** dentro do modal (somente este abre WhatsApp)
- ✅ **Fluxo controlado:** Seleção → Ajuste quantidade → Botão → Modal → Revisão → WhatsApp
- ✅ **Cálculos automáticos** de investimento, lucro e margem
- ✅ **Sistema de notificações** toast para feedback visual
- ✅ **Privacidade:** Cliente vê só preços e quantidades, não os links de compra

🐛 **CORREÇÕES APLICADAS:**

**Admin v6.6.1:**
- ✅ **Corrigido:** Modal de detalhes não atualizava após edição
- ✅ **Solução:** Adicionado alias `abrirCrudModal()` para compatibilidade
- ✅ **Resultado:** Modal sempre exibe dados atualizados

**Cliente v6.3.4 - MODAL CONTROLADO:**
- ✅ **NOVO:** Modal SÓ abre ao clicar "Enviar ao Carrinho" (NÃO ao adicionar/mudar quantidade)
- ✅ **NOVO:** Links dos produtos REMOVIDOS da mensagem WhatsApp (proteção de fornecedores)
- ✅ **NOVO:** Número WhatsApp pré-configurado (5541987607512)
- ✅ **Mantido:** WhatsApp só abre ao clicar botão "Enviar Pedido via WhatsApp" dentro do modal
- ✅ **Mantido:** Controles de quantidade (+/- e input) funcionam perfeitamente
- ✅ **Mantido:** Modal "Minha Seleção" usa quantidades corretas do cliente
- ✅ **Mantido:** Gráficos, CSV e cálculos 100% precisos
- ✅ **Mantido:** Botões "Enviar ao Carrinho" e "Remover" separados
- ✅ **Resultado:** Fluxo mais controlado + Privacidade dos links de fornecedor

📄 **Documentação:**
- `💬-RESPOSTA-FINAL-v6.3.4.txt` - Modal controlado + Links protegidos
- `💬-RESPOSTA-FINAL-v6.3.3.txt` - Fluxo de 2 etapas (modal → WhatsApp)
- `✅-MELHORIAS-UX-v6.3.2.md` - Modal automático e sem confirmações
- `✅-CARRINHO-WHATSAPP-v6.3.md` - Nova funcionalidade de carrinho
- `✅-CORRECAO-QUANTIDADES-v6.3.1.md` - Correção quantidades no modal
- `✅-CORRECOES-BUGS-v6.2-v6.6.md` - Análise técnica das correções

---

### 🆕 ATUALIZAÇÃO ANTERIOR (2025-10-20):
**Versão 6.6 - Recursos de Coordenação para Multi-Computadores**

✅ **NOVO: Histórico de Atualizações**
- Widget retrátil mostrando últimos produtos modificados
- Registra todas as operações: criação, edição, duplicação
- Timestamps no fuso horário de Curitiba/PR (America/Sao_Paulo, UTC-3)
- Histórico persiste em localStorage (até 50 registros)
- Útil para coordenação entre diferentes computadores

✅ **NOVO: Data/Hora do Último Commit**
- Exibido no cabeçalho do dashboard
- Atualizado automaticamente após cada auto-sync
- Timezone de Curitiba/PR (America/Sao_Paulo, UTC-3)
- Permite verificar quando foi o último salvamento no GitHub

✅ **Correções Anteriores (v6.5)**
- Produtos carregam automaticamente (142 produtos)
- Dashboard renderiza corretamente
- Auto-sync com SHA obrigatório e retry automático
- Modal de edição reaberta automaticamente após salvar

📄 **Documentação completa:**
- `📝-RESUMO-COMPLETO-CORRECOES.md` - Histórico de todas as correções
- `🚀-TESTE-AGORA-CORRECAO-SHA.txt` - Como testar as correções
- `🧪-TESTE-TOKEN-GITHUB.txt` - Diagnóstico se houver problemas
- `📚-INDICE-DOCUMENTACAO-CORRECOES.md` - Índice completo  

---

## 📂 ARQUIVOS PRINCIPAIS (USE APENAS ESTES)

### 🆕 Ferramentas de Conversão:
- **`converter-planilha-para-sistema.html`** - Conversor CSV avançado ⭐ NOVO
- **`GUIA-ATUALIZACAO-CATALOGO-CSV.md`** - Documentação completa da conversão ⭐ NOVO
- **`COMECE-AQUI-ATUALIZACAO.txt`** - Início rápido (3 passos) ⭐ NOVO
- **`planilha-nova.csv`** - Planilha de exemplo anexada

### 🎯 Páginas Principais:
- **`index.html`** - Página inicial com links para admin e cliente
- **`admin-v6.10.html`** - Painel administrativo com estatísticas + CSV otimizado ⭐ ATUAL
- **`admin-v6.9.html`** - Versão anterior (bug fix re-sincronização)
- **`admin-v6.7.1.html`** - Versão anterior (todas correções)
- **`admin-v6.6.html`** - Versão anterior (funcional, com histórico)
- **`cliente-analise-v6.3.4.html`** - Catálogo com modal controlado + links protegidos ⭐ ATUAL
- **`cliente-analise-v6.3.3.html`** - Versão anterior (fluxo 2 etapas)
- **`admin-v6.5.html`** - Versão anterior do admin (funcional)

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

### 4️⃣ IMPORTAR/SUBSTITUIR CATÁLOGO:

**Opção A - Importação Incremental (pelo Admin):**
1. Vá em **"Ferramentas"**
2. Clique em **"Importar Planilha"**
3. Selecione seu arquivo CSV/Excel
4. Confirme a importação
5. Auto-Sync sincroniza automaticamente!

**Opção B - Substituição Completa (Conversor CSV):** 🆕
1. Abra **`converter-planilha-para-sistema.html`**
2. Arraste seu arquivo CSV (separador `;`)
3. Clique **"Converter para Sistema"**
4. Baixe **`produtos-v6.1.js`** gerado
5. Substitua o arquivo no projeto:
   ```bash
   cp produtos-v6.1.js.backup produtos-v6.1.js  # backup
   cp ~/Downloads/produtos-v6.1.js produtos-v6.1.js
   git add produtos-v6.1.js
   git commit -m "feat: Atualização catálogo via CSV"
   git push origin main
   ```
6. Aguarde deploy automático (3-4 min)

📖 **Documentação completa:** `GUIA-ATUALIZACAO-CATALOGO-CSV.md`

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

### Admin (admin-v6.10.html):
- ✅ Dashboard com métricas em tempo real
- ✅ CRUD completo (Create, Read, Update, Delete)
- ✅ Duplicação de produtos
- ✅ Importação de planilhas (CSV/Excel)
- ✅ Auto-Sync automático (toggle)
- ✅ Histórico de atualizações (widget retrátil)
- ✅ Exibição de data/hora do último commit (Curitiba/PR)
- ✅ **NOVO v6.10:** Estatísticas em tempo real (4 cards na aba Sugestões)
- ✅ **NOVO v6.10:** Exportação CSV completa (23 campos com análise financeira)
- ✅ **NOVO v6.10:** Ferramentas otimizadas (6 essenciais, interface limpa)
- ✅ Re-sincronização de preços (v6.9)
- ✅ Re-inserção de produtos obsoletos (v6.9)
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

### v6.10.0 (21/10/2025) - ATUAL ✅
- 📊 **Estatísticas em Tempo Real:** 4 cards na aba Sugestões (Total, Novos, Investimento, Lucro)
- 📄 **CSV Completo:** Exportação expandida de 13 para 23 campos com análise financeira
- 🧹 **Ferramentas Otimizadas:** Reduzidas de 11 para 6 ferramentas essenciais
- ✨ **Cálculos Automáticos:** Investimento e lucro calculados em tempo real
- 🎨 **Interface Limpa:** Cards com gradientes coloridos e layout responsivo
- 📋 **Campos Novos CSV:** Investimento Total, Receita Total, Lucro Unitário/Total, Análise Competitiva
- 🚀 **Performance:** Renderização otimizada com estatísticas antes da filtragem
- 📚 **Documentação:** Release notes completas + guia de início rápido (5 minutos)

### v6.9.1 (21/10/2025)
- 🐛 **Bug Fix Crítico:** Corrigido erro na re-sincronização de preços (editarProduto → atualizarProduto)
- 📝 **Logs Detalhados:** Console logs para debug de sincronização
- ✅ **Validações:** Verificação de produto existente antes de atualizar
- 🔄 **Sincronização:** Integração automática com GitHub após re-sincronização

### v6.9.0 (21/10/2025)
- 💰 **Re-sincronização de Preços:** Atualização em lote com modal de seleção
- 🔄 **Re-inserção de Produtos:** Recuperar produtos obsoletos do histórico
- 🎯 **Seleção Individual:** Checkboxes para escolher produtos específicos
- 📍 **Badge Reinserido:** Identificação visual de produtos recuperados
- 🔗 **Links Diretos:** Botão para abrir página do fornecedor

### v6.6.1 + v6.3.4 (21/10/2025)
- 🎯 Modal SÓ abre ao clicar "Enviar ao Carrinho" (NÃO ao adicionar/mudar quantidade)
- 🔒 Links dos fornecedores REMOVIDOS da mensagem WhatsApp (proteção)
- 📱 Número WhatsApp pré-configurado: 5541987607512
- 🔄 Fluxo controlado: Seleção → Ajuste → Botão → Modal → Revisão → WhatsApp
- 📝 Cliente tem mais controle sobre quando ver o carrinho
- 💰 Cálculos de investimento, lucro e margem no modal
- 📤 Exportação CSV mantida
- 🛡️ Privacidade: Cliente vê só preços, não links de compra

### v6.6.1 + v6.3.3 (21/10/2025)
- 🛒 Carrinho WhatsApp com fluxo de 2 etapas (revisão → envio)
- 👉 Botões "Enviar ao Carrinho" agora APENAS abrem modal
- ✅ WhatsApp só abre via botão dedicado dentro do modal
- 🔄 Fluxo otimizado: Produto → Modal → Revisão → WhatsApp
- 📝 Usuário pode revisar carrinho antes de enviar

### v6.6.0 (20/10/2025)
- 🆕 Widget de histórico de atualizações (retrátil)
- 🆕 Registro de todas as operações CRUD (criar, editar, duplicar)
- 🆕 Exibição de data/hora do último commit no header
- 🌍 Timezone de Curitiba/PR (America/Sao_Paulo, UTC-3)
- 💾 Persistência de histórico em localStorage (50 registros)
- 🔄 Auto-atualização do commit após cada sync
- 👥 Coordenação entre múltiplos computadores
- 🎨 Interface otimizada com informações de sincronização

### v6.5.0 (20/10/2025)
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
- **Versão:** 6.10.0
- **Data:** 21/10/2025
- **Status:** ✅ Produção
- **Timezone:** America/Sao_Paulo (Curitiba/PR, UTC-3)

---

## 🔧 CORREÇÕES RECENTES (v6.5 - 2025-10-20)

### Problemas Corrigidos

#### 1. ReferenceError: produtosPlanilha is not defined ✅
- **Causa**: produtos-v6.1.js exportava apenas `todosOsProdutosV6`, mas código esperava arrays separados
- **Solução**: Processamento automático em `loadProducts()` para separar produtos
- **Status**: ✅ Resolvido - 142 produtos carregando

#### 2. Dashboard vazio com "0 produtos" ✅
- **Causa**: Race condition - render chamado antes do CRUD inicializar
- **Solução**: Reordenada sequência de inicialização (CRUD antes do render)
- **Status**: ✅ Resolvido - Dashboard completo

#### 3. GitHub Auto-Sync: "sha wasn't supplied" 🔧
- **Causa**: Fetch do SHA falhava mas código continuava sem validar
- **Solução**: SHA obrigatório + retry automático (3x) + validação completa
- **Status**: 🔧 Implementado - Aguardando teste do usuário

### Como Testar
1. Atualizar página: `Ctrl+F5` (hard refresh)
2. Abrir console: `F12`
3. Editar um produto qualquer
4. Observar logs do auto-sync no console

Ver: `🚀-TESTE-AGORA-CORRECAO-SHA.txt` para instruções completas

---

## 🔧 CORREÇÕES IMPLEMENTADAS (v6.10.3 - 2025-10-27)

### 1. Separação de Modais: Visualização vs. Edição ✅

**Problema:**
- Modal azul de visualização tinha botões de edição, causando confusão
- Múltiplos pontos de entrada para edição geravam inconsistências

**Solução:**
- ✅ **Modal Azul (Visualização):** Removido botões "Editar Margem", "Editar Produto" e "Deletar Produto"
- ✅ **Mensagem Informativa:** Adicionada orientação clara de onde editar
- ✅ **Modal CRUD (Edição):** Único ponto centralizado para todas as edições

### 2. Sincronização Automática de Margem ✅

**Problema:**
- Ao salvar margem, valores atualizavam apenas no modal, não em outras abas
- Necessidade de recarregar página para ver mudanças

**Solução:**
- ✅ **Integração com produtoCRUD:** `salvarMargem()` agora usa sistema CRUD
- ✅ **Atualização Completa:** Chama `atualizarInterfaceCompleta()` após salvar
- ✅ **Sincronização Automática:** Todas as abas atualizam sem reload:
  - Dashboard
  - Sugestões e Inovações
  - Catálogo Completo
  - Análise Avançada
  - Análise Comparativa

### 3. Validação de Cálculos de Preço ✅

**Problema:**
- Margem não refletia corretamente no preço de venda final

**Solução:**
- ✅ **Fórmula Validada:** `precoVenda = custoBase * (1 + margem/100)`
- ✅ **Consistência:** Mesma fórmula em todos os pontos do sistema
- ✅ **Display Correto:** Modal CRUD e Modal Margem mostram valores corretos

### 4. Registro de Histórico ✅

**Solução:**
- ✅ **Rastreamento:** Todas as alterações de margem registradas no histórico
- ✅ **Auditoria:** Possível ver quando e quais produtos foram modificados

### Fluxo de Trabalho Atualizado:

```
VISUALIZAR PRODUTO:
1. Clique no card do produto → Abre Modal Azul
2. Visualize informações completas
3. Não é possível editar neste modal

EDITAR PRODUTO:
1. Na tabela → Clique em "Editar"
2. Abre Modal CRUD com todos os campos editáveis
3. Salve → Sincroniza automaticamente em todas as abas

EDITAR MARGEM:
1. Análise Comparativa → Selecione produto
2. Ajuste o slider de margem
3. Clique "Salvar Margem"
4. Sistema atualiza automaticamente:
   - Preço de venda calculado
   - Lucro unitário
   - Lucro total
   - Todas as abas do admin
```

---

## 📄 LICENÇA

Uso interno - Genautech / PRIO Black Friday 2025

---

**🎉 Sistema completo e otimizado - v6.10.3 com modais corrigidos e sincronização automática!**
