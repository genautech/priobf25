# ⚡ GUIA RÁPIDO DE DEPLOY - v6.4 (GitHub Actions)

## 🎯 O Que Você Vai Fazer

Configurar sincronização **SEGURA** de produtos usando GitHub Actions em **3 passos simples**.

**Tempo estimado:** 10-15 minutos

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ Conta no GitHub
- ✅ Repositório: `genautech/priobf25`
- ✅ Site hospedado no Cloudflare Pages
- ✅ Acesso de escrita ao repositório

---

## 🚀 Passo 1: Upload dos Arquivos (5 min)

### Arquivos Essenciais

Faça upload destes 5 arquivos para seu repositório:

```
📂 Seu Repositório
├── .github/
│   └── workflows/
│       └── sync-produtos.yml          ← NOVO ⭐
├── produtos-sync.json                 ← NOVO ⭐
├── github-sync-actions.js             ← NOVO ⭐
├── auto-sync-actions.js               ← NOVO ⭐
└── admin-v6.4.html                    ← NOVO ⭐
```

### Como Fazer Upload

#### Opção A: Via GitHub Web (Recomendado)

1. **Criar pasta workflows:**
   ```
   https://github.com/genautech/priobf25/new/main
   ```
   - Nome do arquivo: `.github/workflows/sync-produtos.yml`
   - Copiar conteúdo de `sync-produtos.yml`
   - Commit: `feat: adicionar workflow de sincronização`

2. **Upload dos arquivos JS e HTML:**
   ```
   https://github.com/genautech/priobf25/upload/main
   ```
   - Arrastar: `produtos-sync.json`, `github-sync-actions.js`, `auto-sync-actions.js`, `admin-v6.4.html`
   - Commit: `feat: adicionar arquivos v6.4`

#### Opção B: Via Git CLI

```bash
# Clonar repositório
git clone https://github.com/genautech/priobf25.git
cd priobf25

# Criar pasta workflows
mkdir -p .github/workflows

# Copiar arquivos (ajuste caminhos)
cp /caminho/para/.github/workflows/sync-produtos.yml .github/workflows/
cp /caminho/para/produtos-sync.json .
cp /caminho/para/github-sync-actions.js .
cp /caminho/para/auto-sync-actions.js .
cp /caminho/para/admin-v6.4.html .

# Commit e push
git add .
git commit -m "feat: implementar v6.4 com GitHub Actions"
git push origin main
```

---

## 🔐 Passo 2: Configurar Permissões do GitHub Actions (3 min)

### 2.1. Habilitar Actions

1. Acesse:
   ```
   https://github.com/genautech/priobf25/settings/actions
   ```

2. Em **"Actions permissions"**, selecione:
   - ✅ **Allow all actions and reusable workflows**

3. Clique em **Save**

### 2.2. Configurar Permissões de Escrita

1. Na mesma página, role até **"Workflow permissions"**

2. Selecione:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

3. Clique em **Save**

### 2.3. Verificar Configuração

```
✅ Actions habilitado
✅ Read and write permissions
✅ Create pull requests permitido
```

---

## 🧪 Passo 3: Testar a Configuração (5 min)

### 3.1. Teste Manual do Workflow

1. **Editar produtos-sync.json:**
   ```
   https://github.com/genautech/priobf25/edit/main/produtos-sync.json
   ```

2. **Colar este JSON de teste:**
   ```json
   [
     {
       "id": 1,
       "nome": "Produto Teste v6.4",
       "preco": 10.00,
       "categoria": "Eletrônicos",
       "descricao": "Teste da sincronização via GitHub Actions",
       "imagem": "https://via.placeholder.com/300",
       "origem": "planilha"
     }
   ]
   ```

3. **Commit:**
   - Message: `test: verificar workflow de sincronização`
   - Clicar em **Commit changes**

### 3.2. Verificar Workflow

1. **Ir para aba Actions:**
   ```
   https://github.com/genautech/priobf25/actions
   ```

2. **Deve aparecer:**
   - 🔄 Workflow: "🔄 Sincronizar Produtos"
   - Status: 🟡 In progress → 🟢 Success

3. **Clicar no workflow para ver logs:**
   ```
   ✅ Checkout do código
   ✅ Ler dados dos produtos
   ✅ Gerar produtos-v6.1.js
   ✅ Commit e Push
   ```

### 3.3. Verificar Resultado

1. **Ver produtos-v6.1.js atualizado:**
   ```
   https://github.com/genautech/priobf25/blob/main/produtos-v6.1.js
   ```

2. **Deve conter:**
   ```javascript
   const produtosPlanilha = [
     {
       "id": 1,
       "nome": "Produto Teste v6.4",
       ...
     }
   ];
   ```

3. **Aguardar deploy do Cloudflare (2-3 min)**

4. **Verificar no catálogo:**
   ```
   https://seu-dominio.pages.dev/catalogo-v6.html
   ```

---

## ✅ Checklist de Verificação

Após os 3 passos, verifique:

### GitHub
- [ ] Arquivos `.github/workflows/sync-produtos.yml` existe
- [ ] Arquivo `produtos-sync.json` existe
- [ ] Arquivo `github-sync-actions.js` existe
- [ ] Arquivo `auto-sync-actions.js` existe
- [ ] Arquivo `admin-v6.4.html` existe

### GitHub Actions
- [ ] Actions está habilitado
- [ ] Workflow permissions: Read and write
- [ ] Workflow "🔄 Sincronizar Produtos" executou com sucesso
- [ ] Arquivo `produtos-v6.1.js` foi atualizado automaticamente

### Admin
- [ ] `admin-v6.4.html` abre sem erros
- [ ] Console mostra: `✅ github-sync-actions.js carregado`
- [ ] Console mostra: `✅ auto-sync-actions.js carregado`
- [ ] Botão "🔄 Auto-Sync" aparece no canto superior direito

### Funcionalidade
- [ ] Ao editar produto, modal de sincronização aparece
- [ ] Modal tem botão "Copiar JSON"
- [ ] Modal tem botão "Abrir GitHub"
- [ ] Após commitar produtos-sync.json, workflow executa
- [ ] Produtos aparecem no catálogo após 2-3 minutos

---

## 🎮 Como Usar no Dia a Dia

### Fluxo Completo

```
1. Abrir admin-v6.4.html
2. Verificar Auto-Sync: ON ✅
3. Editar produto
4. Clicar em "Salvar"
5. Modal aparece automaticamente
6. Clicar em "Copiar JSON"
7. Clicar em "Abrir GitHub"
8. Colar JSON em produtos-sync.json
9. Clicar em "Commit changes"
10. Aguardar 2-3 minutos
11. Ver produto atualizado no catálogo ✅
```

### Exemplo Prático

**Cenário:** Mudar preço do Produto #42 de R$ 50 para R$ 45

```
10:00 - Abrir admin-v6.4.html
10:01 - Buscar Produto #42
10:02 - Clicar em "Editar"
10:03 - Mudar preço para R$ 45,00
10:04 - Clicar em "Salvar"
10:05 - Modal aparece
10:06 - Copiar JSON
10:07 - Abrir GitHub
10:08 - Colar e commitar
10:09 - Workflow executa (1 min)
10:11 - Cloudflare deploy (2 min)
10:13 - Produto #42 agora R$ 45,00 ✅
```

**Total: ~13 minutos**

---

## 🐛 Problemas Comuns

### Workflow Não Executa

**Sintoma:** Commit feito mas workflow não aparece

**Solução:**
1. Verificar se Actions está habilitado
2. Verificar se arquivo `.github/workflows/sync-produtos.yml` existe
3. Verificar sintaxe do YAML em https://www.yamllint.com/

### Workflow Falha com "Permission Denied"

**Sintoma:** ❌ Permission denied while trying to write

**Solução:**
1. Ir em Settings → Actions → General
2. Workflow permissions → **Read and write permissions**
3. Salvar

### Modal Não Aparece

**Sintoma:** Salva produto mas modal não abre

**Solução:**
1. Abrir console (F12)
2. Verificar se aparece: `✅ github-sync-actions.js carregado`
3. Se não, limpar cache: Ctrl + Shift + R
4. Verificar se arquivo está carregado na aba Network

### JSON Inválido

**Sintoma:** Workflow falha com "JSON inválido"

**Solução:**
1. Copiar JSON do modal
2. Validar em https://jsonlint.com/
3. Corrigir erros (vírgulas, chaves, aspas)
4. Commitar JSON corrigido

### Deploy Não Atualiza

**Sintoma:** Workflow OK mas catálogo não muda

**Solução:**
1. Limpar cache: Ctrl + Shift + R
2. Verificar deploy no Cloudflare Dashboard
3. Purgar cache do Cloudflare
4. Aguardar 5 minutos (às vezes demora)

---

## 📊 Comparação com v6.3

| Aspecto | v6.3 | v6.4 |
|---------|------|------|
| **Segurança** | ⚠️ Token exposto | ✅ Token protegido |
| **Setup** | 5 min | 15 min |
| **Sincronização** | Automática | Semi-automática |
| **Produção** | ❌ Não recomendado | ✅ Recomendado |

**Quando usar v6.4:**
- ✅ Site em produção
- ✅ Repositório público
- ✅ Múltiplos administradores
- ✅ Requisitos de segurança

---

## 🎯 Próximos Passos

Após configurar v6.4:

### 1. Importar Produtos Existentes
```
1. Abrir admin-v6.3.html (ou versão antiga)
2. Exportar produtos
3. Abrir admin-v6.4.html
4. Importar produtos
5. Sincronizar via modal
```

### 2. Migrar para Produção
```
1. Testar completamente em staging
2. Fazer backup dos produtos atuais
3. Atualizar links para admin-v6.4.html
4. Monitorar primeiro deploy
5. Comunicar time sobre novo fluxo
```

### 3. Documentar para Equipe
```
1. Compartilhar este guia
2. Fazer treinamento rápido (10 min)
3. Criar vídeo demonstrativo (opcional)
4. Adicionar link na intranet
```

---

## 📞 Suporte

**Problemas?**
- 📖 Veja documentação completa: `🔒-GITHUB-ACTIONS-v6.4.md`
- 🐛 Troubleshooting: Seção "Problemas Comuns" acima
- 💬 Abra issue no GitHub

**Funcionando?**
- ⭐ Dê star no repositório
- 📢 Compartilhe com a comunidade
- 💬 Deixe feedback

---

## ✨ Resumo

✅ **3 Passos Simples:**
1. Upload de 5 arquivos (5 min)
2. Configurar permissões (3 min)
3. Testar workflow (5 min)

✅ **Resultado:**
- 🔒 Sincronização SEGURA
- 📊 Auditoria completa
- 🤖 Deploy automático
- ✅ Pronto para produção!

---

**Desenvolvido com 💜 por genautech**
**v6.4 - GitHub Actions Edition**
**⚡ Deploy em 15 minutos**
