# 🎨 FLUXO VISUAL: Substituição de Catálogo

## 📊 Diagrama de Fluxo Completo

```
┌─────────────────────────────────────────────────────────────────┐
│                    🎯 INÍCIO DO PROCESSO                        │
│                 Tenho um JSON com novos produtos                 │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│              ⚠️ PASSO CRÍTICO: BACKUP                           │
├─────────────────────────────────────────────────────────────────┤
│  Via Terminal:                                                   │
│  $ cp produtos-v6.1.js produtos-v6.1-BACKUP.js                  │
│                                                                  │
│  Via Admin:                                                      │
│  Admin → Ferramentas → Exportar Template → Salvar JSON         │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│              🔍 VALIDAR FORMATO DO JSON                         │
├─────────────────────────────────────────────────────────────────┤
│  ✅ Estrutura: { "produtos": [...] }                            │
│  ✅ Campos obrigatórios presentes:                              │
│     - id, sku, nome, categoria                                  │
│     - estrategia_yoobe.*                                        │
│  ✅ IDs únicos                                                  │
│  ✅ JSON válido (sem erros de sintaxe)                          │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
                    ┌────┴────┐
                    │ Válido? │
                    └────┬────┘
                         │
           ┌─────────────┼─────────────┐
           │ NÃO                     SIM│
           ▼                            ▼
┌──────────────────────┐    ┌──────────────────────────────┐
│  ❌ CORRIGIR JSON    │    │  ✅ PROSSEGUIR               │
│                      │    └──────────┬───────────────────┘
│  - Verificar sintaxe │               │
│  - Adicionar campos  │               ▼
│  - Testar em         │    ┌──────────────────────────────────┐
│    jsonlint.com      │    │  🚀 ABRIR IMPORTADOR             │
│                      │    ├──────────────────────────────────┤
│  Depois voltar ↑     │    │  Admin → Ferramentas →           │
└──────────────────────┘    │  "Importador Inteligente" →      │
                             │  "Importador Avançado"           │
                             └──────────┬───────────────────────┘
                                        │
                                        ▼
                             ┌──────────────────────────────────┐
                             │  📤 UPLOAD DO JSON               │
                             ├──────────────────────────────────┤
                             │  1. Arrastar arquivo OU          │
                             │  2. "Escolher Arquivo JSON"      │
                             │  3. Selecionar seu arquivo       │
                             └──────────┬───────────────────────┘
                                        │
                                        ▼
                             ┌──────────────────────────────────┐
                             │  ⚙️ CONVERSÃO AUTOMÁTICA         │
                             ├──────────────────────────────────┤
                             │  Sistema processa e converte     │
                             │  Aguardar 2-3 segundos           │
                             │  🔄 Barra de progresso...        │
                             └──────────┬───────────────────────┘
                                        │
                                        ▼
                             ┌──────────────────────────────────┐
                             │  👀 PREVIEW DOS PRODUTOS         │
                             ├──────────────────────────────────┤
                             │  ✅ Ver tabela com produtos      │
                             │  ✅ Verificar quantidade         │
                             │  ✅ Conferir estatísticas:       │
                             │     - Total produtos             │
                             │     - Investimento total         │
                             │     - Receita estimada           │
                             │     - Lucro estimado             │
                             └──────────┬───────────────────────┘
                                        │
                                        ▼
                                ┌───────┴────────┐
                                │ Preview OK?    │
                                └───────┬────────┘
                                        │
                          ┌─────────────┼─────────────┐
                          │ NÃO                    SIM│
                          ▼                           ▼
               ┌──────────────────┐      ┌────────────────────────┐
               │  ❌ REVISAR      │      │  ✅ COPIAR CÓDIGO      │
               │                  │      ├────────────────────────┤
               │  Verificar:      │      │  Clicar botão:         │
               │  - Campos        │      │  "Copiar Código        │
               │  - Valores       │      │   JavaScript"          │
               │  - Quantidades   │      │                        │
               │                  │      │  Mensagem:             │
               │  Voltar ↑        │      │  "Código copiado! ✅"  │
               └──────────────────┘      └────────┬───────────────┘
                                                  │
                                                  ▼
                                       ┌──────────────────────────┐
                                       │  🎯 ESCOLHER ESTRATÉGIA  │
                                       └──────────┬───────────────┘
                                                  │
                    ┌─────────────────────────────┼─────────────────────────────┐
                    │                             │                             │
                    ▼                             ▼                             ▼
         ┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
         │ 🔴 OPÇÃO 1:      │          │ 🟡 OPÇÃO 2:      │          │ 🟢 OPÇÃO 3:      │
         │ SUBSTITUIR TUDO  │          │ MESCLAR          │          │ ADICIONAR        │
         ├──────────────────┤          ├──────────────────┤          ├──────────────────┤
         │ Apagar TUDO      │          │ Combinar atual   │          │ Manter 150       │
         │ entre [ e ]      │          │ com novo         │          │ atuais           │
         │                  │          │                  │          │                  │
         │ Colar código     │          │ Criar JSON       │          │ Adicionar vírgula│
         │ novo             │          │ mesclado manual  │          │ após último      │
         │                  │          │ ou com script    │          │                  │
         │ = Catálogo       │          │                  │          │ Colar código     │
         │   100% novo      │          │ = Parte antiga   │          │ novo no final    │
         │                  │          │   + Parte nova   │          │                  │
         │                  │          │                  │          │ = 150 + novos    │
         └────────┬─────────┘          └────────┬─────────┘          └────────┬─────────┘
                  │                             │                             │
                  └─────────────────────────────┼─────────────────────────────┘
                                                │
                                                ▼
                                  ┌──────────────────────────────┐
                                  │  📝 EDITAR produtos-v6.1.js  │
                                  ├──────────────────────────────┤
                                  │  1. Abrir arquivo            │
                                  │  2. Localizar array:         │
                                  │     const produtosPlanilha   │
                                  │  3. Aplicar estratégia       │
                                  │     escolhida                │
                                  │  4. Salvar: Ctrl + S         │
                                  └──────────┬───────────────────┘
                                             │
                                             ▼
                                  ┌──────────────────────────────┐
                                  │  🧪 TESTAR LOCALMENTE        │
                                  ├──────────────────────────────┤
                                  │  1. Limpar cache:            │
                                  │     Ctrl+Shift+Delete        │
                                  │                              │
                                  │  2. Hard reload:             │
                                  │     Ctrl + F5                │
                                  │                              │
                                  │  3. Abrir cliente:           │
                                  │     cliente-analise-v6.1.html│
                                  │                              │
                                  │  4. Buscar produto novo      │
                                  └──────────┬───────────────────┘
                                             │
                                             ▼
                                      ┌──────┴──────┐
                                      │ Funciona?   │
                                      └──────┬──────┘
                                             │
                               ┌─────────────┼─────────────┐
                               │ NÃO                    SIM│
                               ▼                           ▼
                    ┌──────────────────┐      ┌────────────────────────┐
                    │  ❌ REVERTER     │      │  ✅ TESTAR ADMIN       │
                    │                  │      ├────────────────────────┤
                    │  Restaurar:      │      │  1. Abrir admin        │
                    │  produtos-v6.1-  │      │  2. Ver estatísticas   │
                    │  BACKUP.js       │      │  3. Testar CRUD        │
                    │                  │      │  4. Verificar gráficos │
                    │  Analisar erro   │      └────────┬───────────────┘
                    │  no console F12  │               │
                    │                  │               ▼
                    │  Corrigir e      │      ┌────────────────────────┐
                    │  tentar ↑        │      │  ✅ TUDO OK?           │
                    └──────────────────┘      └────────┬───────────────┘
                                                       │
                                         ┌─────────────┼─────────────┐
                                         │ NÃO                    SIM│
                                         ▼                           ▼
                              ┌──────────────────┐      ┌────────────────────┐
                              │  🔧 DEBUG        │      │  🎉 SUCESSO!       │
                              │                  │      ├────────────────────┤
                              │  1. F12 console  │      │  ✅ Backup feito   │
                              │  2. Ver erros    │      │  ✅ JSON importado │
                              │  3. Conferir     │      │  ✅ Array atualiz. │
                              │     campos       │      │  ✅ Testes OK      │
                              │  4. Verificar    │      │  ✅ Admin OK       │
                              │     sintaxe      │      │                    │
                              │                  │      │  📦 PRONTO PARA    │
                              │  Corrigir ↑      │      │     DEPLOY         │
                              └──────────────────┘      └────────────────────┘
```

---

## 🎯 Fluxo de Decisão: Qual Opção Escolher?

```
                        Tenho JSON novo
                              │
                              ▼
              ┌───────────────────────────────┐
              │   Quero manter produtos       │
              │   atuais?                     │
              └───────┬────────────┬──────────┘
                      │            │
                  NÃO │            │ SIM
                      │            │
                      ▼            ▼
           ┌──────────────┐   ┌──────────────────┐
           │ 🔴 OPÇÃO 1   │   │ Quero manter     │
           │ Substituir   │   │ TODOS os atuais? │
           │ TUDO         │   └────┬─────────┬───┘
           └──────────────┘        │         │
                                NÃO│         │SIM
                                   │         │
                                   ▼         ▼
                        ┌────────────┐  ┌──────────┐
                        │ 🟡 OPÇÃO 2 │  │🟢 OPÇÃO 3│
                        │ Mesclar    │  │Adicionar │
                        │ (controle  │  │no final  │
                        │  fino)     │  │          │
                        └────────────┘  └──────────┘
```

---

## 📊 Comparativo Visual das Opções

```
┌────────────────────────────────────────────────────────────────────┐
│                      ANTES DA IMPORTAÇÃO                           │
├────────────────────────────────────────────────────────────────────┤
│  produtosPlanilha = [                                              │
│    { id: "BF001", nome: "Smart TV" },                             │
│    { id: "BF002", nome: "iPhone 15" },                            │
│    { id: "BF003", nome: "iPad Pro" },                             │
│    ... (150 produtos)                                              │
│  ]                                                                  │
└────────────────────────────────────────────────────────────────────┘

          JSON NOVO:                    JSON NOVO:              JSON NOVO:
          10 produtos                   10 produtos             10 produtos
                │                            │                       │
                ▼                            ▼                       ▼
      
┌─────────────────────┐      ┌──────────────────────┐      ┌─────────────────────┐
│  🔴 OPÇÃO 1         │      │  🟡 OPÇÃO 2          │      │  🟢 OPÇÃO 3         │
│  SUBSTITUIR TUDO    │      │  MESCLAR             │      │  ADICIONAR          │
├─────────────────────┤      ├──────────────────────┤      ├─────────────────────┤
│  produtosPlanilha   │      │  produtosPlanilha    │      │  produtosPlanilha   │
│  = [                │      │  = [                 │      │  = [                │
│    ❌ BF001 REMOVIDO│      │    ✅ BF001 mantido │      │    ✅ BF001 mantido │
│    ❌ BF002 REMOVIDO│      │    ❌ BF002 removido│      │    ✅ BF002 mantido │
│    ❌ BF003 REMOVIDO│      │    ✅ BF003 mantido │      │    ✅ BF003 mantido │
│    ❌ ... (0 antigos)│     │    ... (alguns)      │      │    ✅ ... (150)     │
│    ✅ new-001       │      │    ✅ new-001        │      │    ✅ new-001       │
│    ✅ new-002       │      │    ✅ new-002        │      │    ✅ new-002       │
│    ... (10 novos)   │      │    ... (10 novos)    │      │    ... (10 novos)   │
│  ]                  │      │  ]                   │      │  ]                  │
│                     │      │                      │      │                     │
│  TOTAL: 10          │      │  TOTAL: ~80          │      │  TOTAL: 160         │
│  (só novos)         │      │  (selecionados +     │      │  (todos antigos +   │
│                     │      │   novos)             │      │   todos novos)      │
└─────────────────────┘      └──────────────────────┘      └─────────────────────┘
```

---

## 🔍 Timeline Estimado

```
Tempo Total: 5-30 minutos (dependendo da opção)

┌─────────────────────────────────────────────────────────────────┐
│ OPÇÃO 1: SUBSTITUIR TUDO                                        │
├─────────────────────────────────────────────────────────────────┤
│ [■■░░░░░░░░] Backup           (30 seg)                         │
│ [■■░░░░░░░░] Validar JSON     (1 min)                          │
│ [■■■░░░░░░░] Importar         (1 min)                          │
│ [■■░░░░░░░░] Substituir array (1 min)                          │
│ [■■░░░░░░░░] Testar           (1 min)                          │
│ [■░░░░░░░░░] Verificar admin  (30 seg)                         │
│                                                                  │
│ TOTAL: ~5-6 minutos ⚡                                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ OPÇÃO 2: MESCLAR                                                │
├─────────────────────────────────────────────────────────────────┤
│ [■■░░░░░░░░] Backup           (30 seg)                         │
│ [■■░░░░░░░░] Exportar atual   (1 min)                          │
│ [■■■■■■■■░░] Mesclar JSONs    (5-10 min) ← MAIS DEMORADO      │
│ [■■■░░░░░░░] Importar         (1 min)                          │
│ [■■░░░░░░░░] Substituir array (1 min)                          │
│ [■■░░░░░░░░] Testar           (1 min)                          │
│ [■░░░░░░░░░] Verificar admin  (30 seg)                         │
│                                                                  │
│ TOTAL: ~15-20 minutos ⏱️                                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ OPÇÃO 3: ADICIONAR                                              │
├─────────────────────────────────────────────────────────────────┤
│ [■■░░░░░░░░] Backup           (30 seg)                         │
│ [■■░░░░░░░░] Validar JSON     (1 min)                          │
│ [■■■░░░░░░░] Importar         (1 min)                          │
│ [■░░░░░░░░░] Adicionar vírgula (30 seg)                        │
│ [■░░░░░░░░░] Colar no final   (30 seg)                         │
│ [■■░░░░░░░░] Testar           (1 min)                          │
│ [■░░░░░░░░░] Verificar admin  (30 seg)                         │
│                                                                  │
│ TOTAL: ~5-6 minutos ⚡ (MAIS RÁPIDA)                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📋 Checklist Visual

```
ANTES DE COMEÇAR:
┌──────────────────────────────────────────┐
│  [ ]  Tenho arquivo JSON pronto          │
│  [ ]  JSON está no formato correto       │
│  [ ]  Todos os campos obrigatórios OK    │
│  [ ]  IDs são únicos                     │
│  [ ]  Sei qual opção usar (1, 2 ou 3)    │
└──────────────────────────────────────────┘

DURANTE O PROCESSO:
┌──────────────────────────────────────────┐
│  [ ]  ✅ Backup feito                    │
│  [ ]  ✅ JSON validado                   │
│  [ ]  ✅ Importador aberto               │
│  [ ]  ✅ Arquivo carregado               │
│  [ ]  ✅ Conversão OK                    │
│  [ ]  ✅ Preview verificado              │
│  [ ]  ✅ Código copiado                  │
│  [ ]  ✅ Array atualizado                │
│  [ ]  ✅ Arquivo salvo                   │
└──────────────────────────────────────────┘

TESTES:
┌──────────────────────────────────────────┐
│  [ ]  ✅ Cache limpo                     │
│  [ ]  ✅ Hard reload feito               │
│  [ ]  ✅ Produtos aparecem no cliente    │
│  [ ]  ✅ Modal abre corretamente         │
│  [ ]  ✅ Valores calculados OK           │
│  [ ]  ✅ Sem "undefined" ou "NaN"        │
│  [ ]  ✅ Admin mostra produtos           │
│  [ ]  ✅ Estatísticas atualizadas        │
│  [ ]  ✅ Gráficos corretos               │
│  [ ]  ✅ CRUD funciona                   │
└──────────────────────────────────────────┘

FINALIZAÇÃO:
┌──────────────────────────────────────────┐
│  [ ]  ✅ Todos os testes passaram        │
│  [ ]  ✅ README.md atualizado            │
│  [ ]  ✅ Commit feito (se usar Git)      │
│  [ ]  ✅ Deploy realizado                │
│  [ ]  ✅ Produção testada                │
└──────────────────────────────────────────┘
```

---

## 🎯 Legenda de Símbolos

```
✅  Ação concluída / OK
❌  Erro / Não fazer
⚠️  Atenção / Importante
🔴  Opção 1: Substituir tudo
🟡  Opção 2: Mesclar
🟢  Opção 3: Adicionar
⚡  Rápido (5-10 min)
⏱️  Médio (15-20 min)
🐌  Demorado (30+ min)
🛠️  Ferramenta
📁  Arquivo
📊  Dados / Estatísticas
🧪  Teste
🔧  Configuração
💾  Salvar / Backup
```

---

## 🚨 Pontos Críticos de Atenção

```
┌─────────────────────────────────────────────────────────────┐
│  ⚠️ SEMPRE FAÇA BACKUP ANTES!                               │
│                                                              │
│  Sem backup = Sem volta se der errado                       │
│                                                              │
│  ✅ Backup via terminal: cp produtos-v6.1.js BACKUP.js     │
│  ✅ Backup via admin: Exportar Template                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ⚠️ VALIDAR JSON É OBRIGATÓRIO                              │
│                                                              │
│  JSON inválido = Importador não funciona                    │
│                                                              │
│  ✅ Usar: https://jsonlint.com/                            │
│  ✅ Verificar estrutura { "produtos": [...] }              │
│  ✅ Confirmar campos obrigatórios                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ⚠️ LIMPAR CACHE APÓS ALTERAÇÃO                             │
│                                                              │
│  Cache não limpo = Produtos antigos aparecem                │
│                                                              │
│  ✅ Ctrl + Shift + Delete                                  │
│  ✅ Ctrl + F5 (hard reload)                                │
└─────────────────────────────────────────────────────────────┘
```

---

*Criado em: 17/10/2025*  
*Versão: 1.0*  
*Sistema: Black Friday PRIO v6.1.10*
