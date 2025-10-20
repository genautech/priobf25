# ⚡ QUICK START: Substituir Produtos do Catálogo

## 🎯 Guia Rápido de 5 Minutos

Este guia é a versão **ultra-resumida** do plano completo. Para detalhes, veja: `PLANO-SUBSTITUICAO-CATALOGO.md`

---

## 📋 Pré-Requisitos

- ✅ Ter um arquivo JSON com os novos produtos
- ✅ JSON no formato correto (veja seção abaixo)
- ✅ Importador Inteligente v2.0 disponível

---

## 🚀 Processo em 6 Passos

### 1️⃣ BACKUP (30 segundos)

```bash
# Terminal
cp produtos-v6.1.js produtos-v6.1-BACKUP.js
```

**OU** via Admin:
```
Admin → Ferramentas → Exportar Template → Salvar JSON
```

---

### 2️⃣ VALIDAR JSON (1 minuto)

Seu JSON deve ter esta estrutura:

```json
{
  "produtos": [
    {
      "id": "novo-001",
      "sku": "NOVO-001",
      "nome": "Nome do Produto",
      "categoria": "Eletrônicos",
      "estrategia_yoobe": {
        "quantidade_disponivel": 10,
        "custo_compra": 1500,
        "preco_venda_yoobe": 1800,
        "margem_lucro_percentual": 20
      }
    }
  ]
}
```

**✅ Campos obrigatórios**:
- `id`, `sku`, `nome`, `categoria`
- `estrategia_yoobe.quantidade_disponivel`
- `estrategia_yoobe.custo_compra`
- `estrategia_yoobe.margem_lucro_percentual`

---

### 3️⃣ IMPORTAR (1 minuto)

```
1. Abrir: admin-v6.1.html
2. Aba: "Ferramentas"
3. Card: "Importador Inteligente" (índigo)
4. Botão: "Importador Avançado"
```

Na nova aba:
```
1. Arrastar JSON OU "Escolher Arquivo"
2. Aguardar conversão (2-3 seg)
3. Ver preview dos produtos
4. Clicar: "Copiar Código JavaScript"
```

---

### 4️⃣ SUBSTITUIR ARRAY (2 minutos)

Abrir: `produtos-v6.1.js`

**Localizar**:
```javascript
const produtosPlanilha = [
    // ... produtos atuais (150 itens) ...
];
```

**Escolha sua estratégia**:

#### 🔴 OPÇÃO A: Substituir TUDO
```javascript
// Apague TUDO entre [ e ]
const produtosPlanilha = [
    // COLE AQUI o código copiado
];
```

#### 🟡 OPÇÃO B: Adicionar no Final
```javascript
const produtosPlanilha = [
    // ... mantém 150 produtos atuais ...
    { id: "BF150", ... }, // ← Adiciona vírgula
    
    // NOVOS PRODUTOS - 17/10/2025
    // COLE AQUI o código copiado
];
```

**Salvar arquivo**: `Ctrl + S`

---

### 5️⃣ TESTAR (1 minuto)

```
1. Limpar cache: Ctrl + Shift + Delete
2. Hard reload: Ctrl + F5
3. Abrir: cliente-analise-v6.1.html
4. Buscar algum produto novo
5. Produto aparece? ✅
6. Abrir modal do produto
7. Valores corretos? (sem "undefined" ou "NaN") ✅
```

---

### 6️⃣ VERIFICAR ADMIN (30 segundos)

```
1. Abrir: admin-v6.1.html
2. Aba: "Todos os Produtos"
3. Ver total de produtos (atualizado?)
4. Estatísticas corretas?
5. Tentar editar um produto novo
6. Funciona? ✅
```

---

## 🎯 Escolha Rápida de Estratégia

| Seu Caso | Use |
|----------|-----|
| Tenho lista completa nova, quero descartar tudo | 🔴 Opção A |
| Quero manter atuais + adicionar novos | 🟡 Opção B |
| Quero controle fino (manter alguns, substituir outros) | 📄 Ver plano completo |

---

## 📊 Formato do JSON (Referência Rápida)

### ✅ Estrutura Mínima Válida

```json
{
  "produtos": [
    {
      "id": "id-unico",
      "sku": "SKU-001",
      "nome": "Nome Produto",
      "categoria": "Eletrônicos",
      "subcategoria": "Smartphones",
      "estrategia_yoobe": {
        "quantidade_disponivel": 10,
        "custo_compra": 1500.00,
        "preco_mercado": 2000.00,
        "preco_venda_yoobe": 1800.00,
        "margem_lucro_percentual": 20
      },
      "imagem_url": "https://...",
      "link_compra": "https://...",
      "fornecedor": "Nome",
      "descricao": "Descrição",
      "especificacoes_tecnicas": {
        "chave": "valor"
      }
    }
  ]
}
```

### ❌ Erros Comuns

```json
// ❌ ERRADO: Sem array "produtos"
[
  { "id": "001", ... }
]

// ❌ ERRADO: Estrutura JavaScript (não é JSON)
{
    id: "001",  // ← aspas faltando
    nome: 'Produto'  // ← aspas simples (use duplas)
}

// ❌ ERRADO: Campo obrigatório faltando
{
  "produtos": [
    {
      "id": "001",
      "nome": "Produto"
      // ❌ Falta "estrategia_yoobe"
    }
  ]
}

// ✅ CORRETO
{
  "produtos": [
    {
      "id": "001",
      "sku": "SKU-001",
      "nome": "Produto",
      "estrategia_yoobe": { ... }
    }
  ]
}
```

---

## 🆘 Troubleshooting Rápido

### ❌ "Produtos não aparecem"
```bash
Solução:
1. Ctrl + Shift + Delete (limpar cache)
2. Ctrl + F5 (hard reload)
3. F12 → Console → Ver erros
```

### ❌ "undefined" ou "NaN"
```bash
Causa: Campo "quantidade" ou "custoBase" faltando

Solução:
1. Verificar estrutura "estrategia_yoobe"
2. Garantir campos: quantidade_disponivel, custo_compra, margem_lucro_percentual
```

### ❌ "Importador não converte"
```bash
Causa: JSON inválido

Solução:
1. Verificar estrutura: { "produtos": [...] }
2. Validar em: https://jsonlint.com/
3. Garantir que é arquivo .json (não .js)
```

---

## 📞 Precisa de Ajuda?

**Guias disponíveis**:
- 📄 **PLANO-SUBSTITUICAO-CATALOGO.md** - Plano completo detalhado
- 📄 **COMO-IMPORTAR-PRODUTOS-NOVOS.md** - Guia de importação passo a passo
- 📄 **README.md** - Documentação geral do sistema

**Ferramentas úteis**:
- 🛠️ **importar-catalogo-produtos-v2.html** - Importador inteligente
- 🛠️ **admin-v6.1.html** - Ferramentas admin
- 🧪 **validar-json.html** - Validador de JSON (criar se necessário)

---

## ✅ Checklist Final

Após substituição:

- [ ] Backup do arquivo original feito
- [ ] JSON validado e convertido
- [ ] Código copiado e colado em produtos-v6.1.js
- [ ] Arquivo salvo
- [ ] Cache limpo
- [ ] Produtos aparecem na interface cliente
- [ ] Modal abre sem erros
- [ ] Valores calculados corretamente
- [ ] Admin mostra produtos novos
- [ ] CRUD funciona normalmente
- [ ] Estatísticas atualizadas
- [ ] Gráficos OK

---

## 🎉 Pronto!

**Tempo total**: ~5-10 minutos  
**Complexidade**: 🟢 Baixa (se seguir o passo a passo)  
**Resultado**: ✅ Catálogo completamente renovado!

---

## 💡 Dica Pro

**Teste primeiro em ambiente local**:
1. Faça substituição localmente
2. Teste tudo funciona
3. Depois faça commit/deploy

**Use Git para segurança**:
```bash
git add produtos-v6.1.js
git commit -m "Atualização do catálogo com novos produtos"
git push
```

Assim você pode reverter facilmente se algo der errado:
```bash
git revert HEAD  # Volta para versão anterior
```

---

*Criado em: 17/10/2025*  
*Versão: 1.0*  
*Tempo estimado: 5-10 minutos*
