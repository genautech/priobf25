# 🧪 Guia de Teste - Admin v6.1.2

## 🎯 Objetivo

Testar as novas funcionalidades implementadas na área administrativa de Análise Comparativa.

---

## ✅ CHECKLIST DE TESTES

### 1. 🏷️ Coluna "Melhor Opção de Compra"

#### Teste A: Verificar Existência da Coluna
```
1. Abra: admin-v6.1.html
2. Clique na aba "Comparativo Preços"
3. Localize a coluna "Melhor Opção"
```

**✅ Resultado Esperado:**
- Coluna "Melhor Opção" aparece entre "Preço Concorrente" e "Diferença de Preço"
- Cabeçalho mostra: "Melhor Opção (+ barato)"

---

#### Teste B: Link Clicável
```
1. Na coluna "Melhor Opção"
2. Localize um produto com preço exibido
3. Clique no preço
```

**✅ Resultado Esperado:**
- Link abre em nova aba
- Se for 🟢 verde: abre busca no Mercado Livre
- Se for 🟣 roxo: abre link do fornecedor atual
- Se for 🟠 laranja: abre busca no Google

---

#### Teste C: Cores de Identificação
```
1. Observe os badges de preço na coluna
2. Identifique as cores
```

**✅ Resultado Esperado:**
- **Verde (bg-green-100)**: Marketplace (ML/Shopee)
- **Roxo (bg-purple-100)**: Fornecedor Atual
- **Laranja (bg-orange-100)**: Concorrente (Prio)

---

#### Teste D: Botão "Ver Todas"
```
1. Localize produto com botão "Ver todas (3)"
2. Clique no botão
```

**✅ Resultado Esperado:**
- Alert/popup aparece
- Mostra lista com 3 alternativas
- Cada linha mostra: Fonte + Preço + Observação
- Exemplo:
  ```
  Alternativas disponíveis:
  
  1. Mercado Livre / Shopee: R$ 357,00 (~15% desconto)
  2. Amazon.com.br: R$ 420,00
  3. Prio (Concorrente): R$ 599,00
  ```

---

#### Teste E: Ordenação por Preço
```
1. Verifique vários produtos
2. Compare preços na coluna "Melhor Opção"
```

**✅ Resultado Esperado:**
- SEMPRE mostra a opção MAIS BARATA primeiro
- Preço mais baixo entre as 3 alternativas
- Se houver empate, ordem: Marketplace > Fornecedor > Concorrente

---

### 2. 🖼️ Imagens Incrementais

#### Teste F: Produtos COM Imagem
```
1. Localize produtos com imagem original (ex: Echo Dot, JBL)
2. Verifique se imagem carrega
```

**✅ Resultado Esperado:**
- Imagem original do produto carrega normalmente
- Não é substituída por placeholder
- Imagens reais de produtos aparecem

---

#### Teste G: Produtos SEM Imagem
```
1. Localize produtos SEM imagem (imagem = '#' ou vazio)
2. Verifique se placeholder aparece
```

**✅ Resultado Esperado:**
- Placeholder adequado à categoria aparece
- Imagens variam baseado no ID do produto
- Nenhum produto fica sem imagem

---

#### Teste H: Categorias de Imagens
```
1. Filtre por categoria "Smartphones"
2. Observe imagens de produtos sem foto original
3. Repita para outras categorias
```

**✅ Resultado Esperado:**

**Smartphones:**
- Imagens de smartphones reais da Amazon

**Laptops:**
- Imagens de notebooks reais

**Tablets:**
- Imagens de tablets reais

**Áudio:**
- Imagens de fones/caixas de som reais

**Smart Home:**
- Imagens de dispositivos smart home

**Default:**
- Placeholders coloridos com texto

---

#### Teste I: Fallback de Erro
```
1. Abra DevTools (F12)
2. Vá para Network
3. Bloqueie carregamento de imagens
4. Recarregue a página
```

**✅ Resultado Esperado:**
- Fallback aparece: placeholder roxo com texto "Produto"
- URL: `https://via.placeholder.com/100x100/667eea/ffffff?text=Produto`
- Nenhum erro de JavaScript no console

---

### 3. 🔍 Alternativas Mais Baratas

#### Teste J: Cálculo de Desconto (15%)
```
1. Localize um produto
2. Anote o "Custo Loja"
3. Verifique se alternativa de marketplace = Custo * 0.85
```

**✅ Resultado Esperado:**

Exemplo:
```
Custo Loja: R$ 420,00
Alternativa ML: R$ 357,00 (420 * 0.85 = 357)
Observação: "~15% desconto"
```

---

#### Teste K: Comparação de 3 Fontes
```
1. Produto com:
   - Custo Loja: R$ 420
   - Preço Concorrente: R$ 599
2. Clique em "Ver todas"
```

**✅ Resultado Esperado:**
```
Lista com 3 alternativas:
1. R$ 357,00 - ML/Shopee (~15% desconto) ← MAIS BARATO
2. R$ 420,00 - Fornecedor Atual
3. R$ 599,00 - Prio (Concorrente)
```

---

#### Teste L: Produto Exclusivo (Sem Concorrente)
```
1. Localize produto sem precoConcorrente
2. Verifique alternativas
```

**✅ Resultado Esperado:**
```
Lista com 2 alternativas:
1. R$ XXX - ML/Shopee (~15% desconto) ← MAIS BARATO
2. R$ YYY - Fornecedor Atual

Não mostra: Prio (Concorrente)
```

---

### 4. 📊 Integração Geral

#### Teste M: Filtros
```
1. Use filtro "Status" = "Vantagem Yoobe"
2. Verifique se coluna "Melhor Opção" permanece
```

**✅ Resultado Esperado:**
- Coluna "Melhor Opção" aparece em todos os produtos filtrados
- Links funcionam após filtro
- Imagens carregam corretamente

---

#### Teste N: Ordenação
```
1. Clique no cabeçalho "Preço Yoobe" para ordenar
2. Verifique coluna "Melhor Opção"
```

**✅ Resultado Esperado:**
- Coluna "Melhor Opção" permanece alinhada ao produto
- Valores corretos após reordenação
- Links funcionam após ordenar

---

#### Teste O: Performance
```
1. Carregue todos os 142 produtos
2. Observe tempo de carregamento
3. Verifique console para erros
```

**✅ Resultado Esperado:**
- Página carrega em < 2 segundos
- Nenhum erro no console
- Tabela renderiza suavemente
- Hover effects funcionam

---

## 🎨 TESTES VISUAIS

### Layout da Nova Coluna

**Estrutura Esperada:**
```
┌──────────────────────────────────────────────────────┐
│ Produto │ Custo │ Margem │ Yoobe │ Conc. │ MELHOR │ Dif │
├─────────┼───────┼────────┼───────┼───────┼────────┼─────┤
│ [IMG]   │ R$420 │  30%   │ R$546 │ R$599 │🟢R$357│+R$53│
│ Echo    │       │        │       │       │ML/Shop│     │
│         │       │        │       │       │~15%   │     │
│         │       │        │       │       │Ver(3) │     │
└──────────────────────────────────────────────────────────┘
```

### Cores e Badges

**Verde (Marketplace):**
```css
background: rgb(220, 252, 231) /* bg-green-100 */
color: rgb(21, 128, 61)        /* text-green-700 */
```

**Roxo (Fornecedor Atual):**
```css
background: rgb(243, 232, 255) /* bg-purple-100 */
color: rgb(109, 40, 217)       /* text-purple-700 */
```

**Laranja (Concorrente):**
```css
background: rgb(255, 237, 213) /* bg-orange-100 */
color: rgb(194, 65, 12)        /* text-orange-700 */
```

---

## 🔗 TESTES DE LINKS

### Link do Mercado Livre
```
URL Esperada:
https://lista.mercadolivre.com.br/[NOME_DO_PRODUTO_ENCODED]

Exemplo:
https://lista.mercadolivre.com.br/Echo%20Dot%205%C2%AA%20Gera%C3%A7%C3%A3o
```

**Teste:**
```
1. Clique no link verde (ML)
2. Verifica se abre busca no Mercado Livre
3. Verifica se nome do produto está na URL
```

### Link do Fornecedor
```
URL Esperada:
linkCompraAdmin do produto

Exemplo:
https://www.amazon.com.br/s?k=Echo+Dot+5+Geração
```

**Teste:**
```
1. Clique no link roxo (Fornecedor)
2. Verifica se abre página do fornecedor
3. Verifica se é o link correto do produto
```

### Link do Concorrente
```
URL Esperada:
https://www.google.com/search?q=[NOME_DO_PRODUTO_ENCODED]+preço

Exemplo:
https://www.google.com/search?q=Echo%20Dot%20pre%C3%A7o
```

**Teste:**
```
1. Clique no link laranja (Concorrente)
2. Verifica se abre busca no Google
3. Verifica se termo "preço" está incluído
```

---

## 🐛 TESTES DE EDGE CASES

### Caso 1: Produto Sem Custo Loja
```
Cenário:
- custoLoja = 0 ou null
- precoConcorrente = 599

Resultado Esperado:
- Mostra apenas: Concorrente (laranja)
- Não mostra: Fornecedor Atual ou Marketplace
```

### Caso 2: Produto Sem Nenhum Preço
```
Cenário:
- custoLoja = 0
- precoConcorrente = null

Resultado Esperado:
- Coluna "Melhor Opção" mostra: "-" (traço cinza)
- Sem links clicáveis
```

### Caso 3: Todos os Preços Iguais
```
Cenário:
- custoLoja = 420
- precoConcorrente = 420
- marketplace = 357 (420 * 0.85)

Resultado Esperado:
- Mostra marketplace (mais barato)
- Badge verde com R$ 357,00
```

### Caso 4: Produto com Nome Muito Longo
```
Cenário:
- nome = "Super Ultra Mega Smartphone Android 5G 128GB 6GB RAM Câmera 108MP"

Resultado Esperado:
- URL do Mercado Livre funciona (encoded)
- Link não quebra layout
- Hover tooltip mostra nome completo
```

---

## 📱 TESTES RESPONSIVOS

### Desktop (>1024px)
```
✅ Coluna "Melhor Opção" visível
✅ Todos os textos legíveis
✅ Badges não quebram
✅ Botão "Ver todas" aparece
```

### Tablet (768px-1024px)
```
✅ Tabela tem scroll horizontal
✅ Coluna "Melhor Opção" mantém largura
✅ Textos reduzidos mas legíveis
✅ Links clicáveis
```

### Mobile (<768px)
```
⚠️ Não recomendado para mobile
✅ Scroll horizontal funciona
✅ Pode ocultar colunas menos importantes
```

---

## 🎯 TESTE RÁPIDO (2 MINUTOS)

### Passo 1: Abrir Admin
```
1. Abra: admin-v6.1.html
2. Clique: "Comparativo Preços"
```

### Passo 2: Verificar Coluna
```
1. Localize coluna "Melhor Opção"
2. Veja se aparece entre "Concorrente" e "Diferença"
```

### Passo 3: Testar Link
```
1. Clique em qualquer preço verde
2. Deve abrir Mercado Livre em nova aba
```

### Passo 4: Testar Imagens
```
1. Role a tabela
2. Verifique se TODOS os produtos têm imagem
3. Nenhum produto deve estar sem foto
```

### Passo 5: Ver Alternativas
```
1. Clique em "Ver todas (3)"
2. Popup deve mostrar 3 alternativas
```

**✅ Se todos os 5 passos funcionarem: TESTE PASSOU!**

---

## 📊 CHECKLIST FINAL

### Funcionalidades Principais:
- [ ] Coluna "Melhor Opção" aparece
- [ ] Links são clicáveis
- [ ] Cores corretas (verde/roxo/laranja)
- [ ] Botão "Ver todas" funciona
- [ ] Imagens incrementais funcionam
- [ ] Nenhum produto sem imagem
- [ ] Fallback funciona
- [ ] Links do ML abrem busca
- [ ] Cálculo 15% desconto correto
- [ ] Ordenação mantém integridade

### Performance:
- [ ] Página carrega < 2s
- [ ] Sem erros no console
- [ ] Hover effects suaves
- [ ] Filtros funcionam

### Segurança:
- [ ] Dados visíveis APENAS no admin
- [ ] Cliente não vê alternativas
- [ ] Links protegidos

---

## 🚨 PROBLEMAS COMUNS

### Problema: Coluna não aparece
```
❌ Causa: Cache do navegador
✅ Solução: Ctrl+F5 (hard refresh)
```

### Problema: Links não funcionam
```
❌ Causa: JavaScript desabilitado
✅ Solução: Habilitar JavaScript no navegador
```

### Problema: Imagens não carregam
```
❌ Causa: URLs de imagem inválidas
✅ Solução: Verificar console para erros 404
```

### Problema: Botão "Ver todas" não aparece
```
❌ Causa: Produto tem apenas 1 alternativa
✅ Solução: Normal - botão só aparece se houver 2+ alternativas
```

---

## 📝 RELATÓRIO DE TESTE

Após concluir os testes, preencha:

```
Data do Teste: ___/___/_____
Versão Testada: 6.1.2
Navegador: _________________
Resolução: _________________

✅ Testes Passados: _____ / 20
❌ Testes Falhados: _____ / 20

Observações:
_________________________________
_________________________________
_________________________________

Conclusão: [APROVADO / REPROVADO]
```

---

**Tempo Estimado:** 15-20 minutos  
**Última Atualização:** 15/10/2025  
**Versão:** 6.1.2  
**Status:** ✅ PRONTO PARA TESTE
