# 🚀 DEPLOY CLOUDFLARE WORKER - v6.5

## 🎯 Objetivo

Configurar Cloudflare Worker para sincronização **100% AUTOMÁTICA** de produtos.

**Tempo estimado:** 20 minutos

---

## ✅ Pré-requisitos

- ✅ Conta Cloudflare (gratuita)
- ✅ Token GitHub com permissão `repo`
- ✅ Node.js instalado (para Wrangler CLI)

---

## 🚀 Passo 1: Instalar Wrangler CLI (5 min)

### Instalar via npm:

```bash
npm install -g wrangler
```

### Verificar instalação:

```bash
wrangler --version
```

### Login no Cloudflare:

```bash
wrangler login
```

Isso abrirá o navegador para autorizar o CLI.

---

## 📦 Passo 2: Deploy do Worker (5 min)

### 1. Navegar até a pasta do projeto:

```bash
cd /caminho/para/seu/projeto
```

### 2. Verificar arquivos necessários:

```bash
ls -la
# Deve ter:
# - worker.js
# - wrangler.toml
```

### 3. Deploy:

```bash
wrangler deploy
```

### 4. Anotar a URL do Worker:

```
✨ Deployment complete!
https://produtos-sync.SEUUSUARIO.workers.dev
```

**IMPORTANTE:** Anote esta URL! Você vai precisar dela.

---

## 🔐 Passo 3: Configurar Secret (GITHUB_TOKEN) (3 min)

### Via CLI (Recomendado):

```bash
wrangler secret put GITHUB_TOKEN
```

Quando solicitado, cole seu token GitHub:
```
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
```

### Via Dashboard (Alternativa):

1. Acesse: https://dash.cloudflare.com/
2. Workers & Pages → produtos-sync
3. Settings → Variables
4. Add variable:
   - **Name:** `GITHUB_TOKEN`
   - **Value:** `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`
   - **Type:** Secret (criptografado)
5. Save

---

## 🧪 Passo 4: Testar Worker (3 min)

### Teste de Health Check:

```bash
curl https://produtos-sync.SEUUSUARIO.workers.dev/health
```

**Resposta esperada:**
```json
{
  "status": "ok",
  "version": "6.5.0"
}
```

### Teste de Info:

```bash
curl https://produtos-sync.SEUUSUARIO.workers.dev/
```

**Resposta esperada:**
```json
{
  "name": "Produtos Sync Worker",
  "version": "6.5.0",
  "description": "Sincronização automática de produtos via GitHub API",
  "endpoints": {
    "POST /sync": "Sincronizar produtos",
    "GET /health": "Health check",
    "GET /": "Informações"
  }
}
```

### Teste de Sincronização:

```bash
curl -X POST https://produtos-sync.SEUUSUARIO.workers.dev/sync \
  -H "Content-Type: application/json" \
  -d '{"produtos":[{"id":1,"nome":"Teste","preco":10,"origem":"planilha"}]}'
```

**Resposta esperada:**
```json
{
  "success": true,
  "message": "Produtos sincronizados com sucesso!",
  "details": {
    "total": 1,
    "planilha": 1,
    "sugeridos": 0,
    "commit": "abc123...",
    "url": "https://github.com/genautech/priobf25/...",
    "duration": "1234ms"
  }
}
```

---

## 🔗 Passo 5: Configurar Admin (2 min)

### 1. Abrir github-sync-worker.js:

```javascript
// Linha 10: Atualizar com SUA URL do Worker
workerUrl: 'https://produtos-sync.SEUUSUARIO.workers.dev',
```

### 2. Substituir `SEUUSUARIO` pela URL real:

Exemplo:
```javascript
workerUrl: 'https://produtos-sync.genautech.workers.dev',
```

### 3. Fazer commit e push:

```bash
git add github-sync-worker.js
git commit -m "feat: configurar URL do Cloudflare Worker"
git push origin main
```

### 4. Aguardar deploy (2-3 min):

Cloudflare Pages vai detectar o commit e fazer deploy automaticamente.

---

## ✅ Passo 6: Testar Fluxo Completo (5 min)

### 1. Abrir Admin:

```
https://priobf25.pages.dev/admin-v6.5.html
```

### 2. Verificar Console (F12):

Deve aparecer:
```
✅ github-sync-worker.js carregado
✅ Cloudflare Worker online (v6.5.0)
🚀 Sincronização automática pronta!
✅ auto-sync-worker.js carregado
🚀 Auto-Sync ativado por padrão! (Cloudflare Worker - 100% Automático)
```

### 3. Verificar Badge:

Canto superior direito deve mostrar:
```
🔄 Auto-Sync: ON
```

### 4. Editar Produto:

- Buscar qualquer produto
- Clicar em "Editar"
- Mudar preço (ex: de R$ 10 para R$ 15)
- Clicar em "Salvar"

### 5. Observar Sincronização:

**Badge deve mudar:**
```
⏳ Aguardando... (2 segundos)
🔄 Sincronizando... (3-5 segundos)
✅ Sincronizado (3 segundos)
ON (volta ao normal)
```

**Notificação deve aparecer:**
```
✅ X produtos sincronizados!
🤖 Commit automático realizado
🚀 Deploy em andamento (2-3 min)
```

### 6. Verificar GitHub:

Acessar: https://github.com/genautech/priobf25/commits/main

Deve ter novo commit:
```
chore: atualização automática de produtos via Worker 🤖

- Sincronizado via Cloudflare Worker
- Atualização automática do Admin
- Deploy em andamento
```

### 7. Aguardar Deploy (2-3 min)

### 8. Verificar Catálogo:

```
https://priobf25.pages.dev/catalogo-v6.html
```

Produto deve ter preço atualizado para R$ 15!

---

## 🎉 Conclusão

Se chegou até aqui, tudo está funcionando!

### ✅ O que você tem agora:

- 🚀 **Sincronização 100% automática**
- 🔒 **Token seguro** (não exposto no código)
- ⚡ **Rápido** (3-5 segundos para sincronizar)
- 🆓 **Gratuito** (500 requisições/dia no free tier)
- 🎯 **Sem etapas manuais!**

---

## 🐛 Troubleshooting

### Worker não responde

**Problema:** `curl` retorna erro 404

**Solução:**
```bash
# Verificar se worker foi deployed
wrangler list

# Re-deploy se necessário
wrangler deploy
```

### Erro: "GITHUB_TOKEN não configurado"

**Problema:** Worker retorna erro 500

**Solução:**
```bash
# Configurar secret novamente
wrangler secret put GITHUB_TOKEN
```

### Admin não conecta ao Worker

**Problema:** Console mostra "Worker offline"

**Solução:**
1. Verificar URL em `github-sync-worker.js`
2. Testar URL no navegador: `https://sua-url/health`
3. Verificar CORS (deve permitir origem do Cloudflare Pages)

### Commit não aparece no GitHub

**Problema:** Sincronização retorna sucesso mas sem commit

**Solução:**
1. Verificar permissões do token GitHub
2. Token deve ter permissão `repo` (full control)
3. Criar novo token se necessário: https://github.com/settings/tokens

---

## 📊 Logs e Monitoramento

### Ver logs do Worker:

```bash
wrangler tail
```

Isso mostra logs em tempo real.

### Via Dashboard:

1. Cloudflare Dashboard
2. Workers & Pages → produtos-sync
3. Logs

---

## 💰 Limites do Free Tier

### Cloudflare Workers (Free):
- ✅ 100.000 requisições/dia
- ✅ Unlimited workers
- ✅ 10ms CPU time por requisição

### Seu uso estimado:
- ~10-50 requisições/dia (sincronizações)
- **MUITO abaixo do limite!**

---

## 🔐 Segurança

### ✅ Boas Práticas Implementadas:

1. **Token no Secret** - Não exposto no código
2. **CORS Configurado** - Apenas origens permitidas
3. **Validação de Dados** - JSON validado antes de processar
4. **Rate Limiting** - Proteção contra abuso (implícito no Worker)
5. **Logs Detalhados** - Auditoria completa

---

## 🎯 URLs Importantes

### Worker:
```
https://produtos-sync.SEUUSUARIO.workers.dev
```

### Admin:
```
https://priobf25.pages.dev/admin-v6.5.html
```

### GitHub Repo:
```
https://github.com/genautech/priobf25
```

### Cloudflare Dashboard:
```
https://dash.cloudflare.com/
```

---

## 📚 Próximos Passos

1. ✅ **Testar em produção** por alguns dias
2. ✅ **Monitorar logs** para detectar problemas
3. ✅ **Documentar para equipe** o novo fluxo
4. ✅ **Celebrar!** 🎉 Sincronização automática funcionando!

---

**Desenvolvido com 💜 por genautech**
**v6.5.0 - Cloudflare Worker Edition**
**🚀 100% Automático + 🔒 100% Seguro**
