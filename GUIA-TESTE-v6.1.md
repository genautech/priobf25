# 🧪 GUIA DE TESTES - Sistema v6.1.0

## ✅ Checklist de Validação Completa

---

## 1. 🏠 TESTE DA PÁGINA INICIAL (index.html)

### Verificações:
- [ ] Página carrega corretamente
- [ ] Título mostra "Versão 6.1.0"
- [ ] Estatísticas mostram 142 produtos
- [ ] Card Admin redireciona para `admin-v6.1.html`
- [ ] Card Cliente redireciona para `cliente-analise-v6.1.html`
- [ ] Design responsivo funciona em mobile

**Como testar:**
1. Abra `index.html` no navegador
2. Verifique se o título mostra v6.1.0
3. Clique nos dois cards e confirme redirecionamento
4. Teste em tela mobile (F12 → Toggle device toolbar)

---

## 2. 👨‍💼 TESTE DO ADMIN (admin-v6.1.html)

### A. Carregamento Inicial
- [ ] Página carrega sem erros
- [ ] 6 abas visíveis no menu:
  - Dashboard
  - Sugestões & Inovações
  - Catálogo Cliente
  - Análise Avançada
  - **Comparativo Preços** (NOVA)
  - **Cupons Desconto** (NOVA)
- [ ] Orçamento total calculado
- [ ] Total de produtos mostra 142

**Como testar:**
1. Abra `admin-v6.1.html`
2. Abra Console (F12) e verifique se NÃO há erros
3. Conte as abas no menu
4. Verifique número no header

### B. Aba Dashboard (Funcionalidade Existente)
- [ ] Produtos carregam corretamente
- [ ] Filtro por categoria funciona
- [ ] Busca por nome funciona
- [ ] Cards de produtos mostram imagens
- [ ] Botão "Ver Detalhes" abre modal
- [ ] Modal mostra informações completas
- [ ] Botão "Editar Margem" funciona

**Como testar:**
1. Na aba Dashboard, use a busca
2. Teste filtros de categoria
3. Clique em "Ver Detalhes" de um produto
4. Verifique se modal abre com todas informações

### C. Aba Sugestões (Funcionalidade Existente)
- [ ] 110 produtos sugeridos aparecem
- [ ] Filtro por subcategoria funciona
- [ ] Filtro "Somente Novos" funciona
- [ ] Badge "🔥 NOVO!" visível em produtos novos

**Como testar:**
1. Clique na aba "Sugestões & Inovações"
2. Use filtros e verifique se funciona
3. Procure produtos com badge "NOVO"

### D. Aba Catálogo Cliente (Funcionalidade Existente)
- [ ] Produtos organizados por categoria
- [ ] Ordenação funciona (preço, margem, etc)
- [ ] Filtros funcionam
- [ ] Visualização em grid responsivo

**Como testar:**
1. Clique na aba "Catálogo Cliente"
2. Teste ordenação por preço
3. Teste filtros

### E. Aba Análise Avançada (Funcionalidade Existente)
- [ ] Top 10 produtos por margem carregam
- [ ] Análise de estoque aparece
- [ ] Gráfico de margem renderiza
- [ ] Tabela de performance por subcategoria completa

**Como testar:**
1. Clique na aba "Análise Avançada"
2. Aguarde gráficos carregarem
3. Verifique se todas seções aparecem

### F. 🆕 Aba Comparativo Preços (NOVA)
- [ ] Aba carrega sem erros
- [ ] Estatísticas aparecem:
  - Vantagem Yoobe (número em verde)
  - Preço Igual (número em amarelo)
  - Desvantagem (número em vermelho)
  - Exclusivo Yoobe (número em azul)
- [ ] Tabela comparativa carrega
- [ ] Produtos mostram:
  - Imagem
  - Nome
  - Preço Yoobe
  - Preço Concorrente
  - Diferença
  - Status com ícone (✅/⚠️/❌/🌟)
  - Recomendação
  - Link de compra (quando disponível)
- [ ] Filtros funcionam:
  - Filtro por Status
  - Filtro por Categoria
  - Busca por nome
- [ ] Links "Comprar" abrem em nova aba
- [ ] Produtos sem concorrente mostram "Exclusivo"

**Como testar:**
1. Clique na aba "Comparativo Preços"
2. Verifique se estatísticas carregam (4 cards)
3. Role a tabela e confira se produtos aparecem
4. Teste filtro de status:
   - Selecione "Vantagem Yoobe"
   - Confirme que só aparecem produtos verdes
5. Teste busca digitando "Echo Dot"
6. Clique em "Comprar" e veja se abre link
7. Procure produtos "Exclusivo Yoobe" (sem concorrente)

**Produtos para testar:**
- **Echo Dot** (deve ter preço concorrente R$ 420)
- **JBL Wave Buds** (deve ter preço concorrente R$ 300)
- Qualquer produto de sugestões (deve ser "Exclusivo")

### G. 🆕 Aba Cupons Desconto (NOVA)
- [ ] Aba carrega sem erros
- [ ] Total de cupons mostra 12
- [ ] 12 cards de cupons aparecem em grid
- [ ] Cada card mostra:
  - Nome da loja
  - Status (Ativo/Inativo)
  - Percentual de desconto destacado
  - Código do cupom em destaque
  - Validade
  - Valor mínimo e máximo
  - Categorias aplicáveis (tags)
  - Observação (quando houver)
  - Botão "Acessar Loja"
- [ ] Botões "Acessar Loja" abrem links em nova aba
- [ ] Design responsivo (3 colunas → 2 → 1)

**Como testar:**
1. Clique na aba "Cupons Desconto"
2. Verifique se 12 cupons aparecem
3. Confira se card da Amazon mostra:
   - BLACKFRIDAY25
   - 15% de desconto
   - Validade 2025-11-29
4. Clique em "Acessar Loja" de qualquer cupom
5. Redimensione janela e veja grid adaptando

**Cupons para validar:**
- Amazon: BLACKFRIDAY25 (15%)
- Shopee: SHOPEE30 (30%)
- Casas Bahia: CB25OFF (25%)

### H. CRUDs e Modais
- [ ] Botão "Adicionar Produto" abre modal
- [ ] Formulário CRUD tem todos campos
- [ ] Salvar produto funciona
- [ ] Editar produto funciona
- [ ] Excluir produto funciona
- [ ] Editor de margem funciona

**Como testar:**
1. No Dashboard, clique "+ Adicionar Produto"
2. Preencha formulário e salve
3. Edite um produto existente
4. Teste exclusão
5. Teste editor de margem

---

## 3. 👤 TESTE DO CLIENTE (cliente-analise-v6.1.html)

### A. Carregamento
- [ ] Página carrega sem erros
- [ ] Produtos carregam
- [ ] Filtros aparecem
- [ ] Botão "Minha Seleção" visível

**Como testar:**
1. Abra `cliente-analise-v6.1.html`
2. Verifique Console (F12) - sem erros
3. Aguarde produtos carregarem

### B. Funcionalidades Existentes
- [ ] Clicar em produto adiciona à seleção
- [ ] Contador de seleção atualiza
- [ ] Filtros funcionam
- [ ] Busca funciona
- [ ] Ordenação funciona

**Como testar:**
1. Clique em 3 produtos diferentes
2. Veja contador aumentando
3. Teste filtros e busca

### C. 🆕 Verificação de Fornecedor
- [ ] Produtos COM concorrente mostram fornecedor normal
- [ ] Produtos SEM concorrente mostram "Yoobe Warehouse Connect"
- [ ] NENHUM link de compra aparece para cliente

**Como testar:**
1. Procure "Echo Dot" → deve mostrar "Amazon.com.br"
2. Procure produto de sugestões → deve mostrar "Yoobe Warehouse Connect"
3. Inspecione page (Ctrl+U) e confirme que NÃO há links de compra (atributo href para lojas)

### D. Minha Seleção
- [ ] Modal abre com produtos selecionados
- [ ] Total de investimento calculado
- [ ] Economia mostrada
- [ ] Exportar CSV funciona
- [ ] CSV baixado contém dados corretos

**Como testar:**
1. Selecione 5 produtos
2. Clique "Minha Seleção"
3. Verifique totais
4. Exporte para CSV
5. Abra CSV e verifique dados

---

## 4. 📊 TESTE DE DADOS (produtos-v6.1.js)

### Verificações no Console:
Abra Console (F12) no Admin e execute:

```javascript
// 1. Verificar produtos enriquecidos
console.log('Total produtos:', window.todosOsProdutosV6Enriquecidos.length);
// Deve mostrar: 142

// 2. Verificar cupons
console.log('Total cupons:', window.cuponsDesconto.length);
// Deve mostrar: 12

// 3. Verificar produto com concorrente
const echoDot = window.todosOsProdutosV6Enriquecidos.find(p => p.nome.includes('Echo Dot'));
console.log('Echo Dot:', {
    nome: echoDot.nome,
    precoYoobe: echoDot.precoVenda,
    precoConcorrente: echoDot.precoConcorrente,
    status: echoDot.status,
    recomendacao: echoDot.recomendacao
});
// Deve mostrar preço concorrente R$ 420

// 4. Verificar produto exclusivo
const exclusivo = window.todosOsProdutosV6Enriquecidos.find(p => !p.temNoConcorrente);
console.log('Produto Exclusivo:', {
    nome: exclusivo.nome,
    temNoConcorrente: exclusivo.temNoConcorrente,
    status: exclusivo.status
});
// Status deve ser "Exclusivo Yoobe"

// 5. Verificar função de comparação
console.log('Função comparação:', typeof window.calcularStatusComparativo);
// Deve mostrar: "function"
```

**Checklist:**
- [ ] `todosOsProdutosV6Enriquecidos` existe e tem 142 produtos
- [ ] `cuponsDesconto` existe e tem 12 cupons
- [ ] Produtos têm todos novos campos
- [ ] Função `calcularStatusComparativo` existe
- [ ] Echo Dot tem `precoConcorrente: 420`
- [ ] Produtos de sugestões têm `temNoConcorrente: false`

---

## 5. 🌐 TESTE DE RESPONSIVIDADE

### Desktop (1920x1080)
- [ ] Admin: 6 abas em linha única
- [ ] Cliente: Grid 4 colunas
- [ ] Cupons: Grid 3 colunas
- [ ] Tabela comparativa: Todas colunas visíveis

### Tablet (768px)
- [ ] Admin: Abas podem quebrar em 2 linhas
- [ ] Cliente: Grid 2-3 colunas
- [ ] Cupons: Grid 2 colunas
- [ ] Tabela com scroll horizontal

### Mobile (375px)
- [ ] Admin: Abas empilhadas/scroll horizontal
- [ ] Cliente: Grid 1 coluna
- [ ] Cupons: Grid 1 coluna
- [ ] Tabela com scroll horizontal funcional

**Como testar:**
1. F12 → Toggle device toolbar
2. Teste diferentes resoluções
3. Verifique se layout se adapta

---

## 6. 🔍 TESTE DE PERFORMANCE

### Verificações:
- [ ] Admin carrega em menos de 3 segundos
- [ ] Cliente carrega em menos de 2 segundos
- [ ] Trocar de aba é instantâneo
- [ ] Filtros respondem rapidamente (< 500ms)
- [ ] Sem travamentos ao scrollar

**Como testar:**
1. F12 → Network → Reload
2. Veja tempo de carregamento
3. Use Performance tab para analisar

---

## 7. 🐛 TESTE DE ERROS

### No Console (F12):
- [ ] ZERO erros JavaScript
- [ ] ZERO warnings críticos
- [ ] Imagens carregam (ou mostram placeholder)
- [ ] Fontes carregam

**Como testar:**
1. Abra cada página
2. F12 → Console
3. Verifique se há erros em vermelho
4. Recarregue página e observe

---

## 8. ✅ VALIDAÇÃO FINAL

### Checklist Geral:
- [ ] Todas 142 produtos estão presentes
- [ ] Nenhuma funcionalidade antiga foi removida
- [ ] Novas abas funcionam perfeitamente
- [ ] Comparativo mostra dados corretos
- [ ] Cupons estão todos visíveis
- [ ] Cliente não vê informações de admin
- [ ] Links de compra só no admin
- [ ] Exportação CSV funciona
- [ ] Modais abrem e fecham
- [ ] Design está consistente

---

## 📝 RELATÓRIO DE BUGS

Se encontrar problemas, documente:

### Template de Bug:
```
**Onde:** [Admin/Cliente/Index]
**Aba/Seção:** [Nome da aba]
**O que esperava:** [Comportamento esperado]
**O que aconteceu:** [Comportamento real]
**Passos para reproduzir:** 
1. ...
2. ...
**Console errors:** [Copiar erros do console]
```

---

## 🎯 TESTES PRIORITÁRIOS (Mínimo)

Se tempo limitado, teste PELO MENOS:

### Alta Prioridade:
1. ✅ Admin → Aba Comparativo Preços
   - Tabela carrega
   - Filtros funcionam
   - Produtos com preço concorrente aparecem

2. ✅ Admin → Aba Cupons
   - 12 cupons aparecem
   - Informações corretas

3. ✅ Cliente → Fornecedor
   - "Yoobe Warehouse Connect" aparece quando apropriado
   - SEM links de compra visíveis

4. ✅ Dados
   - Console: `window.todosOsProdutosV6Enriquecidos.length === 142`
   - Console: `window.cuponsDesconto.length === 12`

### Média Prioridade:
5. Filtros no comparativo
6. Modais de CRUD
7. Responsividade básica

### Baixa Prioridade:
8. Performance detalhada
9. Edge cases
10. Testes em múltiplos navegadores

---

## 🎉 CRITÉRIOS DE SUCESSO

Sistema aprovado se:
- ✅ ZERO erros no console
- ✅ Todas 6 abas funcionam
- ✅ 142 produtos carregam
- ✅ 12 cupons aparecem
- ✅ Comparativo mostra dados
- ✅ Cliente não vê links de compra
- ✅ Funcionalidades antigas intactas

---

**Última atualização:** 2025-10-15  
**Versão testada:** 6.1.0  
**Status:** Pronto para testes
