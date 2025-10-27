# 📖 Guia: Atualizar Imagens do Catálogo via CSV

## 🎯 Objetivo

Atualizar as URLs de imagens dos produtos no `produtos-v6.1.js` baseado no arquivo CSV `links.csv` fornecido.

---

## 📋 O Que Você Tem

### Arquivo CSV (`links.csv`):
```csv
Categoria,SKU,Link Imagem,OBS
Eletronicos,APR-LOG-DAV,https://images1.kabum.com.br/...,
Eletronicos,NIN-SWI-DAV,https://images3.kabum.com.br/...,
...
```

**Total:** 165 produtos com links de imagens

### Origens das Imagens:
- ✅ Kabum (funciona bem, sem CORS)
- ✅ Magazine Luiza (funciona)
- ✅ Carrefour (funciona)
- ⚠️ Amazon (pode ter CORS - mas vamos tentar)
- ✅ Outros marketplaces (funcionam)

---

## ⚡ SOLUÇÃO RÁPIDA (2 minutos)

### Opção 1: Script Python (Recomendado)

```bash
# Executar o script atualizado:
python3 atualizar-imagens-csv-v2.py
```

**O script faz:**
1. ✅ Lê links.csv
2. ✅ Lê produtos-v6.1.js
3. ✅ Cria backup automático
4. ✅ Atualiza imagens por SKU
5. ✅ Salva arquivo atualizado
6. ✅ Mostra relatório completo

**Resultado esperado:**
```
✅ ATUALIZAÇÃO CONCLUÍDA!
📊 Estatísticas:
   • Links no CSV:        165
   • Imagens atualizadas: ~160
   • SKUs não encontrados: ~5
```

---

## 📝 PASSO A PASSO DETALHADO

### Passo 1: Verificar Arquivos

```bash
# Verificar se arquivos existem:
ls -lh links.csv produtos-v6.1.js
```

**Deve mostrar:**
```
-rw-r--r--  links.csv         (23 KB)
-rw-r--r--  produtos-v6.1.js  (177 KB)
```

### Passo 2: Executar Script

```bash
# Dar permissão de execução:
chmod +x atualizar-imagens-csv-v2.py

# Executar:
python3 atualizar-imagens-csv-v2.py
```

**Saída esperada:**
```
======================================================================
🖼️  ATUALIZAR IMAGENS DO CATÁLOGO - CSV para produtos-v6.1.js
======================================================================

📋 Passo 1: Lendo links.csv...
   ✅ 165 links carregados

📦 Passo 2: Lendo produtos-v6.1.js...
   ✅ Arquivo carregado (177,808 bytes)

🔄 Passo 3: Atualizando imagens...
----------------------------------------------------------------------
✅ APR-LOG-DAV         → https://images1.kabum.com.br/produtos/...
✅ NIN-SWI-DAV         → https://images3.kabum.com.br/produtos/...
✅ APL-IPA-DAV         → https://carrefourbr.vtexassets.com/...
...

💾 Passo 4: Salvando produtos-v6.1.js...
   ✅ Backup criado: produtos-v6.1.js.backup-antes-csv
   ✅ Arquivo salvo (XXX,XXX bytes)

======================================================================
✅ ATUALIZAÇÃO CONCLUÍDA!
======================================================================
```

### Passo 3: Verificar Resultado

```bash
# Ver algumas imagens atualizadas:
grep -A 2 "APR-LOG-DAV" produtos-v6.1.js

# Deve mostrar:
#   "sku": "APR-LOG-DAV",
#   "nome": "...",
#   "imagem": "https://images1.kabum.com.br/...",
```

### Passo 4: Testar no Admin

```bash
# Abrir o admin localmente:
open admin-v6.10.html
# OU
firefox admin-v6.10.html
```

**Verificar:**
1. Produtos listados
2. Imagens aparecem corretamente
3. Não há erros de CORS no console (F12)

### Passo 5: Commit e Push

```bash
# Adicionar arquivos:
git add produtos-v6.1.js links.csv

# Commit:
git commit -m "🖼️ Atualizar imagens do catálogo via CSV (165 produtos)

- Atualizar URLs de imagens baseado em links.csv
- Imagens de Kabum, Magazine Luiza, Carrefour, etc
- Backup criado automaticamente
- Script: atualizar-imagens-csv-v2.py"

# Push:
git push origin main
```

### Passo 6: Aguardar Deploy

```
⏱️  Cloudflare Pages deploy: 2-3 minutos

🌐 Testar em: https://priobf25.pages.dev/admin-v6.10
```

---

## 🚨 TROUBLESHOOTING

### Problema: "SKU não encontrado"

**Causa:** SKU do CSV não existe em produtos-v6.1.js

**Solução:**
```bash
# Verificar SKU no arquivo:
grep "SKU-CODE" produtos-v6.1.js

# Se não encontrar:
# - SKU pode estar diferente (maiúscula/minúscula)
# - SKU pode ter espaços/tabs
# - Produto pode não existir no catálogo
```

### Problema: Imagem não atualiza

**Causa:** Padrão de regex não encontrou a linha da imagem

**Solução:**
```bash
# Verificar estrutura do produto:
grep -A 10 "SKU-CODE" produtos-v6.1.js

# Ajustar script se necessário
```

### Problema: Script falha

**Erro comum:** `FileNotFoundError: links.csv`

**Solução:**
```bash
# Verificar se está no diretório correto:
pwd
ls links.csv

# Se não estiver, copiar CSV para pasta:
cp /caminho/para/links.csv .
```

---

## 📊 ESTATÍSTICAS ESPERADAS

### CSV Fornecido:

```
Total de produtos com links: 165
SKUs únicos: 165

Distribuição por marketplace:
- Kabum:           ~40%
- Amazon:          ~30%
- Magazine Luiza:  ~15%
- Carrefour:       ~10%
- Outros:          ~5%
```

### Após Atualização:

```
Imagens atualizadas: ~160 produtos
SKUs não encontrados: ~5 produtos
Motivo: SKU diferente ou produto não existe
```

---

## ✅ CHECKLIST

```
□ links.csv disponível
□ produtos-v6.1.js disponível
□ Python 3 instalado
□ Script atualizar-imagens-csv-v2.py criado
□ Permissão de execução dada
□ Script executado com sucesso
□ Backup criado automaticamente
□ Imagens verificadas no arquivo
□ Testado no Admin localmente
□ Commit e push feitos
□ Deploy Cloudflare aguardado
□ Testado na nuvem
□ ✅ TUDO FUNCIONANDO!
```

---

## 🎯 RESULTADO FINAL

### Antes:
```javascript
"imagem": "https://via.placeholder.com/400/...",
"imagem": "https://lh3.googleusercontent.com/d/...",  // placeholder
```

### Depois:
```javascript
"imagem": "https://images1.kabum.com.br/produtos/...",
"imagem": "https://m.media-amazon.com/images/I/...",
"imagem": "https://carrefourbr.vtexassets.com/...",
```

**Benefícios:**
- ✅ Imagens reais dos produtos
- ✅ Melhor experiência do usuário
- ✅ Sem placeholders genéricos
- ✅ Links de marketplaces confiáveis

---

## 💡 DICAS

### 1. Sobre Imagens da Amazon

⚠️ **Amazon pode ter CORS**, mas:
- Links diretos geralmente funcionam
- Se der erro, considerar:
  - Upload para Google Drive
  - OU usar Imgur
  - OU buscar imagem alternativa

### 2. Verificar Imagens Quebradas

```bash
# Após deploy, verificar console do navegador:
# F12 → Console → Ver erros de carregamento

# Se houver muitos erros CORS de um marketplace:
# - Anotar quais produtos
# - Buscar imagens alternativas
# - Atualizar CSV
# - Rodar script novamente
```

### 3. Manter CSV Atualizado

```bash
# Sempre que adicionar novo produto:
# 1. Adicionar linha no links.csv
# 2. Rodar script novamente
# 3. Commit e push

# CSV é a fonte da verdade para imagens!
```

---

## 📞 PRÓXIMOS PASSOS

### Agora:

1. ✅ Executar script: `python3 atualizar-imagens-csv-v2.py`
2. ✅ Verificar resultado
3. ✅ Testar localmente
4. ✅ Fazer push

### Depois:

1. Monitorar imagens na nuvem
2. Identificar imagens com CORS
3. Substituir problemáticas
4. Manter CSV atualizado

---

## 📚 ARQUIVOS RELACIONADOS

```
links.csv                        # CSV com SKUs e URLs
produtos-v6.1.js                 # Catálogo de produtos
atualizar-imagens-csv-v2.py      # Script principal
produtos-v6.1.js.backup-antes-csv # Backup automático
```

---

**Status:** 🟢 **PRONTO PARA EXECUTAR**

**Comando:**
```bash
python3 atualizar-imagens-csv-v2.py
```

🎉 **Boa sorte!**
