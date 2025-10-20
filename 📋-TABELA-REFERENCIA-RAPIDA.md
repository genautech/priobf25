# 📋 TABELA DE REFERÊNCIA RÁPIDA: Substituição de Catálogo

## 🎯 Imprima ou Salve Esta Página

---

## 📊 Comparativo das 3 Opções

| Critério | 🔴 Opção 1<br>Substituir Tudo | 🟡 Opção 2<br>Mesclar | 🟢 Opção 3<br>Adicionar |
|----------|-------------------------------|----------------------|------------------------|
| **Produtos mantidos** | 0 (nenhum) | Alguns escolhidos | 150 (todos) |
| **Produtos novos** | Todos do JSON | Selecionados + novos | Todos do JSON |
| **Total final** | = Produtos do JSON | = Mix personalizado | = 150 + novos |
| **Complexidade** | 🟢 Baixa | 🟡 Média | 🟢 Baixa |
| **Tempo** | ⚡ 5-10 min | ⏱️ 15-20 min | ⚡ 5-10 min |
| **Controle** | 🟡 Médio | 🔴 Alto | 🟢 Baixo |
| **Reversível** | ✅ Com backup | ✅ Com backup | ✅ Com backup |
| **Requer script** | ❌ Não | ⚠️ Opcional | ❌ Não |

---

## 🚀 Comandos Rápidos

### Backup
```bash
# Terminal (Linux/Mac)
cp produtos-v6.1.js produtos-v6.1-BACKUP-$(date +%Y%m%d).js

# Terminal (Windows PowerShell)
Copy-Item produtos-v6.1.js -Destination produtos-v6.1-BACKUP.js

# Via Admin
Admin → Ferramentas → Exportar Template → Salvar JSON
```

### Validar JSON Online
```
https://jsonlint.com/
```

### Limpar Cache
```bash
# Todos os navegadores
Ctrl + Shift + Delete (Windows/Linux)
Cmd + Shift + Delete (Mac)

# Hard Reload
Ctrl + F5 (Windows/Linux)
Cmd + Shift + R (Mac)
```

---

## 📝 Processo Passo a Passo

### 🔴 OPÇÃO 1: Substituir Tudo

```
1. Backup:
   cp produtos-v6.1.js BACKUP.js

2. Importar:
   Admin → Ferramentas → Importador → Upload JSON

3. Copiar código:
   Botão "Copiar Código JavaScript"

4. Editar produtos-v6.1.js:
   const produtosPlanilha = [
       // APAGAR TUDO AQUI
   ];
   
   const produtosPlanilha = [
       // COLAR CÓDIGO NOVO AQUI
   ];

5. Salvar: Ctrl + S

6. Testar:
   Ctrl + Shift + Delete → Ctrl + F5
   Abrir cliente-analise-v6.1.html
   Buscar produto novo
```

---

### 🟢 OPÇÃO 3: Adicionar (Mais Rápida)

```
1. Backup:
   cp produtos-v6.1.js BACKUP.js

2. Importar:
   Admin → Ferramentas → Importador → Upload JSON

3. Copiar código:
   Botão "Copiar Código JavaScript"

4. Editar produtos-v6.1.js:
   const produtosPlanilha = [
       { id: "BF001", ... },
       // ... 150 produtos ...
       { id: "BF150", ... }, // ← ADICIONAR VÍRGULA!
       
       // NOVOS PRODUTOS
       // COLAR CÓDIGO AQUI
   ];

5. Salvar: Ctrl + S

6. Testar:
   Ctrl + Shift + Delete → Ctrl + F5
   Abrir cliente-analise-v6.1.html
   Buscar produto novo
```

---

## ✅ Checklist de Verificação

### Antes de Começar
```
[ ] Tenho arquivo JSON pronto
[ ] JSON está no formato correto
[ ] Sei qual opção usar (1, 2 ou 3)
[ ] Tenho backup recente do sistema
[ ] Li documentação relevante
```

### Durante o Processo
```
[ ] Backup do produtos-v6.1.js feito
[ ] JSON validado (sem erros)
[ ] Importador aberto corretamente
[ ] Preview dos produtos OK
[ ] Código copiado
[ ] Arquivo editado corretamente
[ ] Arquivo salvo (Ctrl + S)
```

### Após Substituição
```
[ ] Cache limpo (Ctrl + Shift + Delete)
[ ] Hard reload (Ctrl + F5)
[ ] Produtos aparecem no cliente
[ ] Modal abre sem erros
[ ] Valores calculados OK (sem undefined/NaN)
[ ] Admin mostra produtos novos
[ ] Estatísticas atualizadas
[ ] Gráficos corretos
[ ] CRUD funciona
[ ] Tudo testado
```

---

## 🆘 Troubleshooting Rápido

| Problema | Solução Rápida |
|----------|----------------|
| **Produtos não aparecem** | Limpar cache + Ctrl+F5 |
| **"undefined" ou "NaN"** | Verificar campos: quantidade, custoBase, margem |
| **JSON inválido** | Validar em jsonlint.com |
| **Importador não converte** | Verificar estrutura: { "produtos": [...] } |
| **Erro ao salvar** | Verificar sintaxe JavaScript (vírgulas, colchetes) |
| **Cache não limpa** | Fechar navegador + Reabrir |
| **Modal não abre** | F12 → Console → Ver erro |
| **Gráficos vazios** | Recarregar admin + Limpar cache |

---

## 📊 Formato do JSON (Estrutura Mínima)

```json
{
  "produtos": [
    {
      "id": "novo-001",
      "sku": "SKU-001",
      "nome": "Nome do Produto",
      "categoria": "Eletrônicos",
      "subcategoria": "Smartphones",
      "estrategia_yoobe": {
        "quantidade_disponivel": 10,
        "custo_compra": 1500.00,
        "preco_mercado": 2000.00,
        "preco_venda_yoobe": 1800.00,
        "margem_lucro_percentual": 20,
        "preco_concorrente_prio": 1900.00
      },
      "imagem_url": "https://...",
      "link_compra": "https://...",
      "fornecedor": "Fornecedor",
      "descricao": "Descrição",
      "especificacoes_tecnicas": {}
    }
  ]
}
```

### ✅ Campos Obrigatórios
- `id` (único)
- `sku`
- `nome`
- `categoria`
- `estrategia_yoobe.quantidade_disponivel`
- `estrategia_yoobe.custo_compra`
- `estrategia_yoobe.margem_lucro_percentual`

---

## 🔗 Arquivos do Sistema

| Arquivo | Função |
|---------|--------|
| `produtos-v6.1.js` | ⚠️ Catálogo atual (EDITAR AQUI) |
| `importar-catalogo-produtos-v2.html` | 🛠️ Importador inteligente |
| `admin-v6.1.html` | 🔧 Painel admin |
| `cliente-analise-v6.1.html` | 👥 Interface cliente |

---

## 📚 Documentação

| Documento | Tamanho | Tempo | Função |
|-----------|---------|-------|--------|
| **📚 Índice** | 10 KB | 5 min | Navegação |
| **⚡ Resumo** | 4 KB | 2 min | Overview rápido |
| **📋 Plano** | 18 KB | 20 min | Detalhes completos |
| **⚡ Quick Start** | 6 KB | 5 min | Execução rápida |
| **🎨 Fluxo** | 23 KB | 10 min | Diagramas |
| **📋 Tabela** | 5 KB | 3 min | Referência (este) |

---

## ⏱️ Estimativa de Tempo

```
PRIMEIRA VEZ:
├─ Estudar documentação:  20 min
├─ Preparar JSON:         10 min
├─ Fazer backup:           1 min
├─ Importar:               2 min
├─ Editar array:           2 min
├─ Testar:                 5 min
└─ Total:                 40 min

SEGUNDA VEZ EM DIANTE:
├─ Backup:                 1 min
├─ Importar:               2 min
├─ Editar:                 1 min
├─ Testar:                 2 min
└─ Total:                 6-8 min ⚡
```

---

## 🎯 Fluxo de Decisão Rápido

```
Você tem JSON novo?
├─ SIM → Quer manter produtos atuais?
│        ├─ NÃO → 🔴 OPÇÃO 1 (Substituir Tudo)
│        └─ SIM → Quer manter TODOS?
│                  ├─ SIM → 🟢 OPÇÃO 3 (Adicionar)
│                  └─ NÃO → 🟡 OPÇÃO 2 (Mesclar)
└─ NÃO → Prepare JSON primeiro
```

---

## ⚠️ Avisos Importantes

```
⚠️ SEMPRE faça backup antes de qualquer alteração
⚠️ Valide JSON antes de importar (jsonlint.com)
⚠️ Limpe cache após mudanças (Ctrl+Shift+Delete)
⚠️ Teste em ambiente local antes de deploy
⚠️ Mantenha backup em local seguro
```

---

## 📞 Ajuda Rápida

**Erro comum?** Consulte tabela de Troubleshooting acima  
**Primeira vez?** Leia: `📚-INDICE-SUBSTITUICAO-CATALOGO.md`  
**Pressa?** Use: `⚡-QUICK-START-SUBSTITUICAO.md`  
**Quer entender?** Estude: `PLANO-SUBSTITUICAO-CATALOGO.md`  
**Visual?** Veja: `🎨-FLUXO-VISUAL-SUBSTITUICAO.md`

---

## ✅ Status de Sucesso

**Você conseguiu se:**
- ✅ Produtos aparecem na interface
- ✅ Modal abre corretamente
- ✅ Valores sem "undefined" ou "NaN"
- ✅ Admin mostra estatísticas corretas
- ✅ CRUD funciona normalmente
- ✅ Gráficos aparecem
- ✅ Filtros funcionam

**🎉 Parabéns! Substituição concluída com sucesso!**

---

*Tabela criada em: 17/10/2025*  
*Sistema: Black Friday PRIO v6.1.10*  
*Versão: 1.0*  

**💾 Salve este arquivo para consulta rápida!**
