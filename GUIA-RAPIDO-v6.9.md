# ⚡ Guia Rápido - Admin v6.9.0

**Sistema Black Friday PRIO 2025**  
**Versão:** 6.9.0  
**Data:** 2025-10-21

---

## 🆕 O QUE HÁ DE NOVO?

### 1. 💰 Re-sincronização de Preços
Atualize preços de múltiplos produtos de uma só vez!

### 2. 🔄 Re-inserção de Produtos Obsoletos
Recupere produtos removidos do histórico!

---

## 🚀 INÍCIO RÁPIDO

### Como Re-sincronizar Preços

```
1. Abra o Admin → Aba "Ferramentas"
2. Clique em "Re-sincronizar Preços" (card verde)
3. Selecione os produtos desejados
4. Clique "Abrir Link" para cada produto
5. Consulte o preço no site do fornecedor
6. Digite os novos valores
7. Clique "Aplicar Atualizações"
8. Pronto! ✅
```

**Dica:** Você pode atualizar apenas o Custo Base, apenas o Preço Mercado, ou ambos!

### Como Re-inserir Produtos Obsoletos

```
1. Abra o Admin → Aba "Dashboard"
2. Expanda "Histórico de Atualizações"
3. Clique em "Re-sincronizar"
4. Revise os produtos removidos (badge vermelho)
5. Selecione os que deseja recuperar
6. Clique "Re-inserir Selecionados"
7. Configure os detalhes dos produtos
8. Pronto! ✅
```

**Atenção:** Produtos re-inseridos precisam ser configurados manualmente!

---

## 💡 DICAS DE USO

### Re-sincronização de Preços

✅ **Selecione vários produtos** de uma vez para economizar tempo  
✅ **Use "Selecionar Todos"** se quiser atualizar tudo  
✅ **Abra múltiplas abas** dos fornecedores simultaneamente  
✅ **Deixe campos vazios** se não quiser atualizar aquele valor  
✅ **Produtos sem valores** serão automaticamente ignorados

### Re-inserção de Produtos

✅ **Revise cuidadosamente** antes de re-inserir  
✅ **Use "Remover"** para limpar produtos antigos do histórico  
✅ **Configure imediatamente** após re-inserir  
✅ **Badge "🔄 REINSERIDO"** identifica produtos recuperados  
✅ **Status "sugerido"** indica que precisa configuração

---

## 🎯 CASOS DE USO

### Cenário 1: Atualização Mensal de Preços
```
Problema: 50 produtos com preços desatualizados
Solução: Re-sincronização de Preços

Passos:
1. Abra todos os links dos fornecedores em abas
2. Anote os novos preços
3. Selecione todos os produtos no modal
4. Digite todos os novos valores
5. Aplique tudo de uma vez
6. ✅ 50 produtos atualizados em minutos!
```

### Cenário 2: Produto Removido por Engano
```
Problema: Deletei um produto importante acidentalmente
Solução: Re-inserção de Produtos

Passos:
1. Vá em Histórico de Atualizações
2. Clique em "Re-sincronizar"
3. Encontre o produto na lista (badge vermelho)
4. Selecione e clique "Re-inserir"
5. Configure os detalhes do produto
6. ✅ Produto recuperado!
```

### Cenário 3: Limpeza do Histórico
```
Problema: Histórico cheio de produtos antigos
Solução: Re-inserção de Produtos (modo remover)

Passos:
1. Vá em Histórico de Atualizações
2. Clique em "Re-sincronizar"
3. Selecione produtos antigos que não voltarão
4. Clique "Remover Selecionados"
5. ✅ Histórico limpo e organizado!
```

---

## ⚠️ AVISOS IMPORTANTES

### Re-sincronização de Preços
- ⚠️ Não faz busca automática de preços (você precisa consultar manualmente)
- ⚠️ Certifique-se de ter acesso aos sites dos fornecedores
- ⚠️ Sempre confirme os valores antes de aplicar
- ⚠️ Mudanças são permanentes após salvar

### Re-inserção de Produtos
- ⚠️ Produtos re-inseridos vêm VAZIOS (só nome e ID preservados)
- ⚠️ Configure TUDO: preços, categoria, fornecedor, imagem, etc.
- ⚠️ SKU automático pode precisar ser ajustado
- ⚠️ Não remove da lixeira automaticamente (use com cautela)

---

## 🔍 LOCALIZAÇÃO NO SISTEMA

### Re-sincronização de Preços
```
Admin → Aba "Ferramentas" → Card "Re-sincronizar Preços"
```
- **Cor:** Verde esmeralda
- **Ícone:** 🔄 Setas circulares
- **Badge:** "NOVO v6.9" (vermelho pulsante)
- **Posição:** 7º card na grade

### Re-inserção de Produtos
```
Admin → Aba "Dashboard" → "Histórico de Atualizações" → Botão "Re-sincronizar"
```
- **Ícone:** 🔄 Setas circulares
- **Cor:** Azul (botão de texto)
- **Posição:** Ao lado do botão "Limpar"

---

## 📊 EXEMPLOS PRÁTICOS

### Exemplo 1: Atualizar 3 Produtos

**Situação:** Echo Dot, JBL Wave Buds e Kindle com preços desatualizados

```
1. Ferramentas → Re-sincronizar Preços
2. Selecionar: ☑️ Echo Dot, ☑️ JBL, ☑️ Kindle
3. Abrir links de cada um
4. Consultar preços:
   - Echo Dot: R$ 450 (novo)
   - JBL: R$ 320 (novo)
   - Kindle: R$ 480 (novo)
5. Digitar valores nos campos
6. Aplicar Atualizações
7. ✅ Sucesso: 3 produtos atualizados!
```

### Exemplo 2: Recuperar 1 Produto

**Situação:** Deletei "Nespresso Vertuo Pop" sem querer

```
1. Dashboard → Histórico de Atualizações
2. Clicar "Re-sincronizar"
3. Ver modal com produtos obsoletos
4. Encontrar: "Nespresso Vertuo Pop" (badge vermelho)
5. Selecionar: ☑️ Nespresso Vertuo Pop
6. Clicar "Re-inserir Selecionados"
7. Confirmar: "Sim, re-inserir 1 produto"
8. ✅ Produto re-inserido com badge "🔄 REINSERIDO"
9. Ir em Dashboard → Editar produto
10. Configurar: preços, imagem, detalhes
11. ✅ Produto completamente recuperado!
```

---

## 🎨 VISUAL RÁPIDO

### Modal de Re-sincronização de Preços
```
┌──────────────────────────────────────────┐
│ 🔄 Re-sincronização de Preços            │
│ 15 produtos com link disponível          │
├──────────────────────────────────────────┤
│ [✓ Selecionar Todos] [Desmarcar Todos]  │
├──────────────────────────────────────────┤
│ ☑️ Echo Dot 5ª Gen                       │
│    Preço Atual: R$ 420,00                │
│    Novo Custo: [____] Novo Preço: [____] │
│    [Abrir Link do Fornecedor]            │
├──────────────────────────────────────────┤
│ ☑️ JBL Wave Buds                         │
│    Preço Atual: R$ 300,00                │
│    Novo Custo: [____] Novo Preço: [____] │
│    [Abrir Link do Fornecedor]            │
├──────────────────────────────────────────┤
│          [Cancelar] [Aplicar Atualizações]│
└──────────────────────────────────────────┘
```

### Modal de Re-inserção
```
┌──────────────────────────────────────────┐
│ ⚠️ Produtos Obsoletos Encontrados        │
│ 3 produtos no histórico não existem mais │
├──────────────────────────────────────────┤
│ [✓ Selecionar Todos] [Desmarcar Todos]  │
├──────────────────────────────────────────┤
│ ☑️ Nespresso Vertuo Pop                  │
│    ID: 1005 • 20/10/2025 15:30          │
│    🔴 Removido                           │
├──────────────────────────────────────────┤
│ ☑️ Apple Watch S9                        │
│    ID: 1020 • 18/10/2025 10:15          │
│    🔴 Removido                           │
├──────────────────────────────────────────┤
│   [Cancelar] [Remover] [Re-inserir]     │
└──────────────────────────────────────────┘
```

---

## ❓ PERGUNTAS FREQUENTES

**P: Posso atualizar só o Custo Base?**  
R: Sim! Deixe o Preço Mercado em branco.

**P: E se eu errar um valor?**  
R: Cancele e abra novamente, ou edite o produto depois.

**P: Produtos re-inseridos perdem as imagens?**  
R: Sim, você precisa adicionar tudo manualmente.

**P: Quantos produtos posso atualizar de uma vez?**  
R: Todos! Não há limite.

**P: O histórico some ao re-inserir?**  
R: Não, o histórico é preservado.

**P: Preciso preencher todos os campos?**  
R: Não, apenas os que você quer atualizar.

---

## 🎯 PRÓXIMOS PASSOS

Após usar as novas funcionalidades:

1. ✅ Verifique se os preços estão corretos no Dashboard
2. ✅ Confira o Histórico de Atualizações
3. ✅ Teste a sincronização automática (se ativada)
4. ✅ Revise produtos re-inseridos e complete as informações
5. ✅ Faça backup antes de grandes atualizações

---

## 📞 SUPORTE

**Dúvidas?** Consulte: `NOVAS-FUNCIONALIDADES-v6.9.md`  
**Problemas?** Verifique o console do navegador (F12)  
**Arquivo:** `admin-v6.9.html`

---

**Sistema Black Friday PRIO 2025 v6.9.0**  
✅ Re-sincronização de Preços  
✅ Re-inserção de Produtos Obsoletos  
🚀 Pronto para usar!
