# 📋 Guia de Atualização do Catálogo via CSV

**Data:** 2025-10-22  
**Versão Sistema:** 6.10.0  
**Status:** ✅ Pronto para uso

---

## 🎯 Objetivo

Este guia explica como **substituir completamente o catálogo de produtos** do sistema PRIO Black Friday 2025 usando a planilha CSV fornecida.

---

## 📊 Análise da Planilha CSV

### Estrutura Identificada

A planilha **"Pesquisa de Produtos e Preços - David (1).csv"** possui:

- **Total de produtos:** ~150 produtos
- **Formato:** CSV com separador `;` (ponto-e-vírgula)
- **Encoding:** UTF-8
- **Tamanho:** 85.844 bytes

### Campos da Planilha CSV

| Campo CSV | Tipo | Exemplo |
|-----------|------|---------|
| SKU | Texto | `1MOR-EVO`, `ACE-SWI` |
| Nome do Produto | Texto | `1MORE EVO`, `Acer Swift Edge 16` |
| Categoria | Texto | `Eletrônicos`, `Casa e Cozinha` |
| Subcategoria | Texto | `Áudio`, `Laptops`, `Fritadeiras` |
| Fornecedor | Texto | `1MORE`, `Acer`, `Mondial` |
| Preço Mercado | Número | `1169`, `7149` |
| Menor preço Marketplaces | Número | `1188,3`, `222,13` (vazio se não encontrado) |
| Prazo de entrega marketplace | Texto | `7 A 10 DIAS`, `2 DIAS` |
| Marketplace | Texto | `Kabum`, `Casas Bahia`, `Mercado Livre` |
| Link de compra | URL | URLs completas dos marketplaces |

---

## 🔄 Mapeamento de Campos

### Conversão CSV → Sistema

| Campo CSV | Campo Sistema | Transformação |
|-----------|---------------|---------------|
| **SKU** | `sku` | Direto |
| **Nome do Produto** | `nome` | Direto |
| **Categoria** | `categoria` | Direto |
| **Subcategoria** | `subcategoria` | Direto |
| **Fornecedor** | `fornecedor` | Direto |
| **Preço Mercado** | `custoBase` | ⚠️ Preço Mercado vira custo base |
| **Preço Mercado** | `precoMercado` | Direto |
| **Menor preço Marketplaces** | `precoVenda` | Cálculo: `menorPreco` ou `custoBase * 1.3` |
| **Link de compra** | `linkCompra` | Direto |
| **Marketplace** | `especificacoes.marketplace` | Metadado |
| **Prazo de entrega** | `especificacoes.prazoEntrega` | Metadado |

### Campos Calculados

```javascript
// Lógica de conversão
custoBase = precoMercado || menorPreco || 0
precoVenda = menorPreco || (custoBase * 1.3)
margem = ((precoVenda - custoBase) / custoBase) * 100
quantidade = 10 (padrão)
estoque = custoBase > 0 ? 'Disponível' : 'A Definir'
```

### Campos com Valores Padrão

| Campo | Valor Padrão | Razão |
|-------|--------------|-------|
| `id` | Auto-incremento (1001+) | Identificador único |
| `quantidade` | `10` | Quantidade inicial padrão |
| `margem` | `30%` | Margem padrão se não calculável |
| `imagem` | Placeholder | `https://via.placeholder.com/500x500` |
| `estoque` | `'Disponível'` ou `'A Definir'` | Baseado no preço |

---

## 🚀 Como Usar

### Passo 1: Acessar o Conversor

1. Abra o arquivo: `converter-planilha-para-sistema.html`
2. Use um navegador moderno (Chrome, Edge, Firefox)

### Passo 2: Carregar a Planilha CSV

**Opção A - Arrastar e Soltar:**
```
Arraste o arquivo "Pesquisa de Produtos e Preços - David (1).csv"
para a área de upload
```

**Opção B - Selecionar Arquivo:**
```
Clique em "Selecionar Arquivo"
→ Navegue até o CSV
→ Clique em "Abrir"
```

### Passo 3: Verificar Estatísticas

Após o carregamento, o conversor mostrará:

- ✅ **Total de Produtos:** Quantidade total encontrada
- 📦 **Com Link de Compra:** Produtos com URL válida
- ⚠️ **Sem Preço Definido:** Produtos que precisam de atenção
- 🏷️ **Categorias Diferentes:** Diversidade do catálogo

### Passo 4: Converter

```
Clique em "🔄 Converter para Sistema"
```

O sistema irá:
1. Parsear todos os produtos
2. Aplicar transformações de campos
3. Calcular preços e margens
4. Validar dados
5. Gerar arquivo JavaScript

### Passo 5: Baixar o Arquivo

```
Clique em "💾 Baixar produtos-v6.1.js"
```

Um arquivo `produtos-v6.1.js` será baixado com todos os produtos convertidos.

### Passo 6: Substituir no Sistema

⚠️ **IMPORTANTE: Faça backup antes!**

```bash
# 1. Faça backup do arquivo atual
cp produtos-v6.1.js produtos-v6.1.js.backup-$(date +%Y%m%d-%H%M%S)

# 2. Substitua pelo novo arquivo
mv ~/Downloads/produtos-v6.1.js produtos-v6.1.js

# 3. Commit e push para GitHub
git add produtos-v6.1.js
git commit -m "feat: Atualização completa do catálogo via CSV"
git push origin main
```

### Passo 7: Sincronização Automática

O sistema **Auto-Sync** detectará as mudanças automaticamente:

1. ✅ Detecta alteração no arquivo
2. ⏱️ Aguarda 2 segundos
3. 🚀 Envia para GitHub via Cloudflare Pages Function
4. ⏳ Deploy automático em 3-4 minutos
5. ✅ Catálogo atualizado em produção

---

## 📦 Estrutura do Arquivo Gerado

### Formato do produtos-v6.1.js

```javascript
// ============================================
// VERSÃO 6.1.1 - PRODUTOS BLACK FRIDAY PRIO 2025
// Total: 150 produtos (Atualizado via CSV)
// Atualizado: 2025-10-22
// FONTE: Planilha CSV "Pesquisa de Produtos e Preços"
// ============================================

const cuponsDesconto = [...]; // Mantidos do sistema atual

const produtosPlanilha = [
    {
        id: 1001,
        sku: "1MOR-EVO",
        nome: "1MORE EVO",
        categoria: "Eletrônicos",
        subcategoria: "Áudio",
        quantidade: 10,
        custoBase: 1169,
        precoMercado: 1169,
        margem: 30,
        precoVenda: 1519.7,
        estoque: "Disponível",
        fornecedor: "1MORE",
        imagem: "https://via.placeholder.com/500x500?text=1MORE+EVO",
        linkCompra: "",
        descricao: "1MORE EVO - Eletrônicos - Áudio",
        especificacoes: {
            marca: "1MORE",
            marketplace: "",
            prazoEntrega: ""
        }
    },
    // ... mais 149 produtos
];

const produtosSugeridos = []; // Vazio inicialmente

if (typeof window !== 'undefined') {
    window.produtosPlanilha = produtosPlanilha;
    window.produtosSugeridos = produtosSugeridos;
    window.todosOsProdutosV6 = [...produtosPlanilha, ...produtosSugeridos];
    window.cuponsDesconto = cuponsDesconto;
}
```

---

## ⚠️ Pontos de Atenção

### 1. Produtos Sem Preço

**Situação:** Alguns produtos não têm "Preço Mercado" nem "Menor preço Marketplaces"

**Solução aplicada:**
```javascript
custoBase = 0
precoVenda = 0
estoque = "A Definir"
```

**Ação necessária:** Preencher preços manualmente no Admin após importação

### 2. Produtos Sem Link

**Situação:** Produtos com "Link de compra" vazio

**Impacto:**
- ✅ Produto será cadastrado normalmente
- ⚠️ Botão "Abrir Link" não funcionará no Admin
- ⚠️ Funcionalidade "Re-sincronizar Preços" não terá onde buscar

**Ação recomendada:** Adicionar links via Admin quando disponíveis

### 3. Imagens Placeholder

**Situação:** Sistema gera URLs de placeholder automáticas

**Formato:**
```
https://via.placeholder.com/500x500?text=Nome+do+Produto
```

**Ação necessária:**
1. Usar ferramenta "Buscar Imagens" no Admin
2. Ou atualizar imagens manualmente produto por produto

### 4. Valores com Vírgula

**Situação:** CSV usa vírgula como separador decimal (padrão BR)

**Solução aplicada:**
```javascript
parseFloat(valor.replace(',', '.'))
```

**Resultado:** Conversão automática de `1.188,30` para `1188.30`

---

## 🔍 Validações Automáticas

O conversor realiza as seguintes validações:

### ✅ Validações de Entrada

1. **Arquivo válido:** Verifica se é CSV legível
2. **Encoding:** Detecta e corrige UTF-8
3. **Estrutura:** Valida cabeçalhos esperados
4. **Dados:** Conta produtos não-vazios

### ✅ Validações de Conversão

1. **SKU único:** Garante IDs incrementais únicos
2. **Preços válidos:** Converte vírgulas e valida números
3. **URLs:** Preserva links intactos (não valida acesso)
4. **Categorias:** Normaliza textos

### ✅ Validações de Saída

1. **JSON válido:** Garante JavaScript syntacticamente correto
2. **Campos obrigatórios:** Todos os campos do sistema presentes
3. **Estrutura:** Compatível com versão 6.1 do sistema

---

## 📊 Comparação: Antes vs Depois

### Sistema Atual (antes)

```
Total: 150 produtos
  • 32 produtos da planilha (ID 1001-1032)
  • 118 produtos sugeridos (ID 2000+)
Fonte: Cadastro manual + importações parciais
```

### Sistema Novo (depois)

```
Total: ~150 produtos (exato da planilha CSV)
  • Todos vindo da planilha CSV atualizada
  • 0 produtos sugeridos (adicionar depois se necessário)
Fonte: Planilha "Pesquisa de Produtos e Preços - David"
```

### Impacto

| Aspecto | Antes | Depois |
|---------|-------|--------|
| **Dados** | Mistura de fontes | Fonte única confiável |
| **Preços** | Alguns desatualizados | Todos da pesquisa recente |
| **Links** | Parcialmente preenchidos | Conforme planilha |
| **Consistência** | Média | Alta |
| **Manutenibilidade** | Manual | Automatizável via CSV |

---

## 🛠️ Manutenção Pós-Importação

### Tarefas Imediatas

1. ✅ **Verificar produtos sem preço**
   - Admin → Aba Dashboard
   - Filtrar por `estoque: "A Definir"`
   - Preencher custos manualmente

2. ✅ **Adicionar imagens reais**
   - Admin → Aba Ferramentas
   - Usar "Buscar Imagens FINAL"
   - Ou adicionar URLs manualmente

3. ✅ **Validar links de compra**
   - Admin → Aba Ferramentas
   - Usar "Corrigir Links de Produtos"
   - Testar links quebrados

4. ✅ **Configurar produtos prioritários**
   - Adicionar badges: `🔥 NOVO!`, `⚡ PROMOÇÃO`
   - Definir quantidades realistas
   - Ajustar margens se necessário

### Tarefas Contínuas

- 📅 **Semanal:** Re-sincronizar preços dos marketplaces
- 📅 **Mensal:** Atualizar imagens de produtos novos
- 📅 **Trimestral:** Revisar catálogo completo

---

## 🔒 Segurança e Backup

### Antes da Atualização

```bash
# Backup completo
cp produtos-v6.1.js produtos-v6.1.js.backup-$(date +%Y%m%d-%H%M%S)

# Commit do estado atual
git add produtos-v6.1.js
git commit -m "backup: Estado antes da atualização CSV"
git push origin main
```

### Recuperação em Caso de Problema

```bash
# Restaurar do backup
cp produtos-v6.1.js.backup-YYYYMMDD-HHMMSS produtos-v6.1.js

# Ou reverter commit Git
git revert HEAD
git push origin main
```

---

## 📞 Suporte

### Problemas Comuns

**Problema:** Arquivo CSV não carrega

**Solução:**
- Verificar encoding (deve ser UTF-8)
- Verificar separador (deve ser `;`)
- Abrir em editor de texto e verificar formato

**Problema:** Produtos com preço R$ 0,00

**Solução:**
- Preencher "Preço Mercado" no CSV antes de converter
- Ou preencher manualmente no Admin após importação

**Problema:** Links não funcionam

**Solução:**
- Verificar se URLs estão completas no CSV
- Usar ferramenta "Corrigir Links" no Admin

---

## ✅ Checklist de Implementação

- [ ] 1. Baixar planilha CSV atualizada
- [ ] 2. Abrir `converter-planilha-para-sistema.html`
- [ ] 3. Carregar arquivo CSV
- [ ] 4. Verificar estatísticas apresentadas
- [ ] 5. Clicar em "Converter para Sistema"
- [ ] 6. Baixar `produtos-v6.1.js` gerado
- [ ] 7. Fazer backup do arquivo atual
- [ ] 8. Substituir arquivo no projeto
- [ ] 9. Testar localmente (opcional)
- [ ] 10. Commit e push para GitHub
- [ ] 11. Aguardar deploy automático (3-4 min)
- [ ] 12. Verificar catálogo em produção
- [ ] 13. Preencher produtos sem preço
- [ ] 14. Adicionar imagens reais
- [ ] 15. Validar links de compra
- [ ] 16. Ajustar margens e quantidades

---

## 📝 Log de Mudanças

### 2025-10-22 - Criação da Ferramenta
- ✅ Criado conversor HTML interativo
- ✅ Implementado parser CSV com separador `;`
- ✅ Adicionado mapeamento automático de campos
- ✅ Implementada lógica de cálculo de preços e margens
- ✅ Criada documentação completa

---

## 🎯 Próximos Passos

Após a importação estar completa:

1. **Enriquecer dados:**
   - Adicionar descrições detalhadas
   - Incluir especificações técnicas
   - Preencher badges de destaque

2. **Otimizar catálogo:**
   - Definir produtos prioritários
   - Configurar cupons por categoria
   - Ajustar estratégias de precificação

3. **Integrar análises:**
   - Associar preços do concorrente
   - Habilitar análise comparativa
   - Configurar alertas de preço

---

**Ferramenta:** `converter-planilha-para-sistema.html`  
**Documentação:** `GUIA-ATUALIZACAO-CATALOGO-CSV.md`  
**Versão Sistema:** 6.10.0  
**Data:** 2025-10-22

✅ **Sistema pronto para atualização completa do catálogo!**
