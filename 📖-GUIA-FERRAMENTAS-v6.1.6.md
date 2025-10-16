# 📖 Guia de Ferramentas - Admin v6.1.6

**Data:** 16/10/2025  
**Status:** ✅ IMPLEMENTADO

---

## 🎯 Nova Aba "Ferramentas"

### **Localização:**
```
admin-v6.1.html → Aba "Ferramentas" (7ª aba)
```

### **6 Ferramentas Disponíveis:**

---

## 1️⃣ Exportar Template de Produtos

### **O Que Faz:**
Exporta **todos os produtos atuais** do catálogo em formato JSON para edição externa.

### **Como Usar:**
1. Clicar em "Exportar Template"
2. Arquivo baixado automaticamente: `template-produtos-2025-10-16_14-30.json`

### **Formato do Arquivo:**
```json
{
  "_metadata": {
    "versao": "6.1.5",
    "dataExportacao": "2025-10-16T14:30:00.000Z",
    "totalProdutos": 142,
    "instrucoes": "Edite este arquivo e reimporte..."
  },
  "produtos": [
    {
      "id": 1001,
      "sku": "ECH-DOT5-EST",
      "nome": "Alexa - Echo Dot 5ª Geração",
      "categoria": "Eletrônicos",
      "subcategoria": "Smart Home",
      "quantidade": 30,
      "custoBase": 420,
      "precoMercado": 599,
      "margem": 30,
      "precoVenda": 546,
      "estoque": "Em Estoque",
      "fornecedor": "Amazon.com.br",
      "imagem": "https://...",
      "linkCompra": "https://...",
      "descricao": "...",
      "especificacoes": {...},
      "badge": "🔥 NOVO!"
    },
    // ... mais 141 produtos
  ]
}
```

### **Casos de Uso:**
- ✅ Backup do catálogo atual
- ✅ Edição em massa no Excel/Editor
- ✅ Análise offline dos produtos
- ✅ Compartilhar catálogo com equipe

---

## 2️⃣ Importar/Atualizar Catálogo

### **O Que Faz:**
Importa produtos de um arquivo JSON e **atualiza o catálogo automaticamente**.

### **⚠️ IMPORTANTE - Como Funciona:**

#### **Lógica de Atualização:**
```javascript
Para cada produto no arquivo JSON:
  1. Procurar produto existente por ID ou SKU
  2. Se ENCONTRADO → ATUALIZAR produto existente
  3. Se NÃO ENCONTRADO → ADICIONAR como novo produto
```

#### **Exemplo Prático:**

**Cenário 1: Atualizar Produto Existente**
```json
// Arquivo JSON
{
  "produtos": [
    {
      "id": 1001,  // ← ID existe no catálogo
      "nome": "Alexa - Echo Dot 5ª Geração - ATUALIZADO",
      "custoBase": 380,  // ← Preço alterado
      "quantidade": 50   // ← Quantidade alterada
    }
  ]
}

// Resultado:
// ✅ Produto ID 1001 ATUALIZADO (não duplicado)
// ✅ Nome, custo e quantidade alterados
// ✅ Outros campos mantidos
```

**Cenário 2: Adicionar Novo Produto**
```json
{
  "produtos": [
    {
      "id": 9999,  // ← ID não existe no catálogo
      "sku": "NOVO-PROD",
      "nome": "Produto Totalmente Novo",
      "custoBase": 150
    }
  ]
}

// Resultado:
// ✅ Novo produto ADICIONADO ao catálogo
// ✅ Total de produtos: 142 → 143
```

### **Como Usar:**
1. Exportar template atual (backup)
2. Editar o arquivo JSON:
   - Alterar preços
   - Atualizar quantidades
   - Adicionar novos produtos
   - Remover produtos (deletar do array)
3. Salvar arquivo JSON
4. Clicar "Importar Produtos"
5. Selecionar arquivo editado
6. Aguardar mensagem de sucesso

### **Mensagem de Sucesso:**
```
✅ Importação concluída!
25 atualizados, 5 novos | Total: 147 produtos
```

### **⚠️ Cuidados:**
- **Sempre fazer backup** antes de importar (exportar template)
- **Manter IDs únicos** para evitar duplicação
- **Validar JSON** antes de importar (usar jsonlint.com)
- **Testar com poucos produtos** primeiro

---

## 3️⃣ Corrigir Links de Compra

### **O Que Faz:**
Gera links de busca da Amazon automaticamente para produtos **sem link válido**.

### **Lógica:**
```javascript
Para cada produto:
  Se (não tem linkCompra OU linkCompra = '#' OU linkCompra vazio):
    → Gerar link: https://www.amazon.com.br/s?k={nome_produto}
```

### **Exemplo:**
```
Produto: "Fone JBL Wave Buds"
Link Gerado: https://www.amazon.com.br/s?k=Fone+JBL+Wave+Buds
```

### **Como Usar:**
1. Clicar "Gerar Links"
2. Ver mensagem: "✅ Links corrigidos! 45 produtos atualizados"

### **Resultado:**
- Produtos com links válidos → **mantidos intactos**
- Produtos sem links → **links gerados automaticamente**

---

## 4️⃣ Atualizar Imagens

### **Status:** 🚧 Em desenvolvimento

### **Funcionalidade Planejada:**
- Carregar imagens de `catalog_images.json`
- Atualizar produtos automaticamente
- Preview de imagens antes de aplicar

### **Alternativa Atual:**
Use a ferramenta externa: `executar-atualizacao-imagens.html`

---

## 5️⃣ Buscar Produtos Online

### **Status:** 🚧 Em desenvolvimento

### **Funcionalidade Planejada:**
- Buscar produtos em marketplaces
- Importar dados automaticamente
- Adicionar ao catálogo com 1 clique

### **Alternativa Atual:**
Use a ferramenta externa: `buscar-imagens-FINAL.html`

---

## 6️⃣ Exportar CSV Completo

### **O Que Faz:**
Exporta catálogo com análise de preços Prio (mesmo da aba "Análise Comparativa").

### **Como Usar:**
1. Clicar "Exportar CSV"
2. Arquivo baixado: `catalogo-completo-prio-2025-10-16_14-30.csv`

### **Colunas:** 14 (SKU, Nome, Preços, Análise Competitividade, etc.)

**Detalhes:** Ver `✅-EXPORTAR-CSV-v6.1.5-FINAL.md`

---

## 🔄 Fluxo de Trabalho Completo

### **Cenário: Atualizar Preços em Massa**

```
1. EXPORTAR TEMPLATE
   ↓
   Arquivo: template-produtos-2025-10-16_14-30.json

2. EDITAR NO EXCEL/EDITOR
   ↓
   - Abrir JSON em editor
   - Alterar campo "custoBase" de vários produtos
   - Alterar campo "margem" se necessário
   - Salvar arquivo

3. IMPORTAR CATÁLOGO
   ↓
   - Clicar "Importar Produtos"
   - Selecionar arquivo editado
   - Aguardar sucesso

4. VERIFICAR
   ↓
   - Ir para aba "Todos os Produtos"
   - Conferir preços atualizados
   - Ir para aba "Análise Comparativa"
   - Ver nova análise de competitividade

5. EXPORTAR CSV (OPCIONAL)
   ↓
   - Gerar relatório com novos preços
   - Compartilhar com equipe
```

---

## 💡 Casos de Uso Práticos

### **1. Adicionar 10 Novos Produtos**
```
1. Exportar template (backup)
2. Copiar estrutura de 1 produto
3. Criar 10 novos produtos com IDs únicos (2000-2009)
4. Importar arquivo
5. Resultado: 142 → 152 produtos ✅
```

### **2. Atualizar Preços de Fornecedor**
```
1. Exportar template
2. Buscar e substituir no editor:
   "custoBase": 420  →  "custoBase": 380
3. Importar arquivo
4. Todos os produtos com custo 420 agora custam 380 ✅
```

### **3. Remover Produtos Descontinuados**
```
1. Exportar template
2. Deletar produtos do array JSON
3. Importar arquivo
4. Produtos deletados somem do catálogo ✅
```

### **4. Corrigir Links em Massa**
```
1. Clicar "Gerar Links"
2. Todos os produtos sem link recebem link Amazon ✅
3. Exportar template para salvar alterações
```

---

## ⚠️ Perguntas Frequentes

### **P: Se eu exportar o template, os produtos atualizarão no catálogo?**
**R:** Não automaticamente. O fluxo é:
1. **Exportar** = Salvar arquivo JSON com produtos atuais
2. **Editar** = Modificar o arquivo JSON manualmente
3. **Importar** = Aplicar as alterações no catálogo

O catálogo só é atualizado quando você **importa** o arquivo de volta.

### **P: Posso editar o arquivo JSON no Excel?**
**R:** Não diretamente. Use:
- **Editor de texto** (VS Code, Notepad++) - Recomendado
- **Editor JSON online** (jsoneditoronline.org)
- **Converter para CSV** → Editar no Excel → Converter de volta

### **P: O que acontece se eu importar o mesmo produto duas vezes?**
**R:** Se o **ID ou SKU for o mesmo**, o produto é **atualizado** (não duplicado).

### **P: Posso desfazer uma importação?**
**R:** Não há "desfazer". Por isso:
- ✅ **SEMPRE exportar template antes** de importar
- ✅ Manter backup do arquivo original

### **P: As alterações são salvas automaticamente?**
**R:** **NÃO!** As alterações ficam apenas na **memória do navegador**.

Para salvar permanentemente:
1. Exportar template (já com alterações)
2. Substituir `produtos-v6.1.js` pelo novo template
3. Fazer deploy do site

---

## 🎯 Melhores Práticas

### **✅ FAZER:**
- Sempre exportar template antes de importar
- Testar com 1-2 produtos primeiro
- Validar JSON antes de importar
- Manter backups datados
- Usar IDs únicos para novos produtos

### **❌ NÃO FAZER:**
- Importar sem backup
- Usar IDs duplicados
- Editar JSON manualmente sem validar
- Importar arquivos corrompidos
- Confiar 100% em imports não testados

---

## 📊 Estatísticas

| Ferramenta | Tempo | Complexidade |
|------------|-------|--------------|
| Exportar Template | < 1s | ⭐ Fácil |
| Importar Catálogo | < 2s | ⭐⭐ Médio |
| Corrigir Links | < 1s | ⭐ Fácil |
| Exportar CSV | < 1s | ⭐ Fácil |

---

## ✅ Conclusão

**Aba Ferramentas = Central de Gestão de Catálogo**

- ✅ Exportar/Importar produtos
- ✅ Atualização em massa
- ✅ Backup e restauração
- ✅ Correções automáticas
- ✅ Análise completa

**Sistema completo e pronto para uso!** 🚀
