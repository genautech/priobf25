# 🚀 GUIA RÁPIDO - Como Usar o Sistema v6.5

**5 minutos para começar a usar!**

---

## 🎯 ACESSOS PRINCIPAIS

### 👨‍💼 Admin (Gerenciar Produtos):
```
https://priobf25.pages.dev/admin
```

### 👥 Cliente (Ver Catálogo):
```
https://priobf25.pages.dev/cliente
```

### 🏠 Página Inicial:
```
https://priobf25.pages.dev
```

---

## 📝 COMO ADICIONAR PRODUTOS

1. Acesse: https://priobf25.pages.dev/admin
2. Clique em **"+ Adicionar Produto"**
3. Preencha:
   - Nome do produto
   - Categoria
   - Preço de custo
   - Preço de venda
   - Outros dados opcionais
4. Clique em **"Salvar"**
5. **Aguarde 2 segundos** → Sincronização automática!
6. Em 3-4 minutos, o produto aparece no catálogo cliente

---

## ✏️ COMO EDITAR PRODUTOS

1. No Admin, encontre o produto na lista
2. Clique no botão **"Editar"** (ícone de lápis)
3. Modifique os dados necessários
4. Clique em **"Salvar"**
5. Sincronização automática em 2 segundos!

---

## 🗑️ COMO DELETAR PRODUTOS

1. No Admin, encontre o produto na lista
2. Clique no botão **"Deletar"** (ícone de lixeira)
3. Confirme a exclusão
4. Sincronização automática!

---

## 📋 COMO IMPORTAR PLANILHA

### Passo 1: Preparar planilha CSV/Excel

Sua planilha deve ter estas colunas:
```
id, nome, categoria, preco_custo, preco_venda
```

Exemplo:
```csv
id,nome,categoria,preco_custo,preco_venda
1,Smart TV 55,Eletrônicos,2000,2999
2,Cafeteira Elétrica,Eletroportáteis,150,249
```

### Passo 2: Importar no Admin

1. Acesse: https://priobf25.pages.dev/admin
2. Vá na aba **"Ferramentas"**
3. Clique em **"Importar Planilha"**
4. Selecione seu arquivo CSV/Excel
5. Revise os dados
6. Clique em **"Confirmar Importação"**
7. Sincronização automática!

---

## 🔄 AUTO-SYNC - Como Funciona

### O que é?
Sistema que salva **automaticamente** suas alterações no GitHub.

### Como saber se está ativo?
No topo do Admin, procure o **toggle "Auto-Sync"**:
- 🟢 **Verde = ATIVADO** (salva automaticamente)
- ⚪ **Cinza = DESATIVADO** (não salva)

### Como ativar/desativar?
Clique no toggle para alternar.

### Quando ele sincroniza?
- Ao **adicionar** um produto → 2 segundos → Sincroniza
- Ao **editar** um produto → 2 segundos → Sincroniza
- Ao **deletar** um produto → 2 segundos → Sincroniza
- Ao **importar** planilha → 2 segundos → Sincroniza

### Como saber se sincronizou?
Você verá uma notificação verde:
```
✅ 150 produtos sincronizados!
🤖 Commit automático realizado
🚀 Deploy em andamento (2-3 min)
```

---

## 👥 COMO CLIENTES USAM O CATÁLOGO

1. Compartilhe o link: https://priobf25.pages.dev/cliente
2. Cliente navega pelos produtos
3. Cliente seleciona produtos (clicando nos cards)
4. Sistema calcula automaticamente:
   - Investimento total
   - Lucro esperado
   - Margem de lucro
   - ROI
5. Cliente exporta seleção em CSV

---

## 🔍 COMO BUSCAR PRODUTOS

### No Admin:
1. Use o campo de busca no topo
2. Digite nome, categoria, SKU, etc.
3. Resultados aparecem em tempo real

### Filtros disponíveis:
- Por categoria
- Por faixa de preço
- Por margem de lucro
- Por fornecedor

---

## 📊 COMO ANALISAR DADOS

### Dashboard:
1. Acesse a aba **"Dashboard"**
2. Veja métricas em tempo real:
   - Total de produtos
   - Investimento total
   - Lucro projetado
   - Margem média
   - ROI médio

### Gráficos:
- **Distribuição por categoria** - Pizza
- **Top 10 produtos** - Barras
- **Margem de lucro** - Linha
- **Investimento vs Retorno** - Barras empilhadas

### Análise Avançada:
1. Vá na aba **"Análise Avançada"**
2. Veja análises detalhadas:
   - Produtos mais lucrativos
   - Produtos com melhor ROI
   - Análise por categoria
   - Comparativo de preços

---

## 💾 COMO EXPORTAR DADOS

### Exportar todos os produtos:
1. No Admin, vá em **"Ferramentas"**
2. Clique em **"Exportar CSV"**
3. Baixe o arquivo

### Exportar seleção (no Cliente):
1. Selecione os produtos desejados
2. Clique em **"Exportar Seleção"**
3. Baixe o arquivo CSV

---

## ⚠️ PROBLEMAS COMUNS

### "Auto-Sync não está sincronizando"
**Solução:**
1. Verifique se o toggle está 🟢 **verde**
2. Abra o Console (F12) e veja se há erros
3. Se houver erro "401", contate o administrador do sistema

### "Produtos não aparecem no catálogo cliente"
**Solução:**
1. Limpe o cache: **Ctrl+Shift+R** (ou **Cmd+Shift+R** no Mac)
2. Aguarde 3-4 minutos após sincronização
3. Recarregue a página

### "Importação de planilha falhou"
**Solução:**
1. Verifique se a planilha tem as colunas corretas
2. Verifique se os IDs são únicos
3. Verifique se os preços são números (não texto)
4. Remova linhas vazias

### "Sistema está lento"
**Solução:**
1. Limpe o cache do navegador
2. Feche outras abas/programas
3. Use Google Chrome ou Firefox

---

## 🎓 DICAS PRO

### 1. Duplicar produtos rapidamente
- Encontre um produto similar
- Clique em **"Duplicar"**
- Edite apenas os dados diferentes
- Salve!

### 2. Importar atualizações de preços
- Exporte a planilha atual
- Atualize os preços no Excel
- Importe a planilha atualizada
- Produtos serão atualizados automaticamente!

### 3. Usar cupons dinâmicos
- No Admin, vá em **"Cupons"**
- Configure descontos automáticos
- Sistema aplica descontos ao gerar links

### 4. Comparar com concorrentes
- Vá na aba **"Comparativo Preços"**
- Veja produtos com melhores margens vs. concorrentes
- Ajuste preços estrategicamente

### 5. Analisar rentabilidade
- Ordene produtos por margem de lucro
- Foque nos produtos mais rentáveis
- Remova produtos com margem negativa

---

## 📱 ACESSO MOBILE

O sistema funciona perfeitamente em smartphones e tablets!

- **Admin:** Totalmente responsivo
- **Cliente:** Otimizado para touch
- **Sincronização:** Funciona mesmo em 4G

---

## 🆘 PRECISA DE AJUDA?

1. **Documentação completa:** [README.md](README.md)
2. **Configuração inicial:** [CONFIGURAR-GITHUB-TOKEN.md](CONFIGURAR-GITHUB-TOKEN.md)
3. **Console do navegador:** F12 para ver erros detalhados

---

## ✅ CHECKLIST DIÁRIO

- [ ] Verificar se Auto-Sync está 🟢 ativo
- [ ] Revisar produtos adicionados hoje
- [ ] Analisar métricas do Dashboard
- [ ] Comparar preços com concorrentes
- [ ] Exportar relatório de produtos

---

**🎉 Agora você sabe tudo o que precisa para usar o sistema!**

**Qualquer dúvida, consulte o [README.md](README.md) completo.**
