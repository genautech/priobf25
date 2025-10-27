#!/usr/bin/env python3
"""
Script v2 para atualizar imagens dos produtos
Mais robusto e preciso
"""

import csv
import re

print("="*70)
print("🖼️  ATUALIZAR IMAGENS DO CATÁLOGO - CSV para produtos-v6.1.js")
print("="*70)

# 1. Ler CSV e criar dicionário SKU -> URL
print("\n📋 Passo 1: Lendo links.csv...")
links_map = {}

with open('links.csv', 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        sku = row['SKU'].strip()
        url = row['Link Imagem'].strip()
        if sku and url:
            links_map[sku] = url

print(f"   ✅ {len(links_map)} links carregados")

# 2. Ler produtos-v6.1.js
print("\n📦 Passo 2: Lendo produtos-v6.1.js...")
with open('produtos-v6.1.js', 'r', encoding='utf-8') as f:
    content = f.read()

original_size = len(content)
print(f"   ✅ Arquivo carregado ({original_size:,} bytes)")

# 3. Processar cada SKU
print("\n🔄 Passo 3: Atualizando imagens...")
print("-"*70)

atualizados = 0
nao_encontrados = []
skus_processados = set()

for sku, nova_url in sorted(links_map.items()):
    # Limpar SKU (remover tabs e espaços)
    sku_clean = sku.replace('\t', '').strip()
    
    # Procurar padrão: "sku": "SKU",
    sku_pattern = rf'"sku":\s*"{re.escape(sku_clean)}"'
    
    if re.search(sku_pattern, content):
        # Encontrou o produto!
        # Agora encontrar a linha "imagem" deste produto
        # Estratégia: encontrar o bloco do produto e substituir a imagem
        
        # Padrão: captura desde o SKU até a próxima chave "imagem"
        # e substitui o valor da URL
        pattern = (
            rf'("sku":\s*"{re.escape(sku_clean)}".*?'
            rf'"imagem":\s*)"([^"]*)"'
        )
        
        def replacer(match):
            return match.group(1) + f'"{nova_url}"'
        
        novo_content, count = re.subn(
            pattern, 
            replacer, 
            content, 
            count=1,
            flags=re.DOTALL
        )
        
        if count > 0:
            content = novo_content
            atualizados += 1
            skus_processados.add(sku_clean)
            # Mostrar URL encurtada
            url_display = nova_url if len(nova_url) <= 60 else nova_url[:57] + '...'
            print(f"✅ {sku_clean:20} → {url_display}")
        else:
            nao_encontrados.append(sku_clean)
            print(f"⚠️  {sku_clean:20} → Imagem não encontrada no bloco")
    else:
        nao_encontrados.append(sku_clean)
        print(f"❌ {sku_clean:20} → SKU não encontrado no arquivo")

# 4. Salvar arquivo
print("\n" + "-"*70)
print("\n💾 Passo 4: Salvando produtos-v6.1.js...")

# Backup primeiro
with open('produtos-v6.1.js.backup-antes-csv', 'w', encoding='utf-8') as f:
    # Ler o original novamente para backup
    with open('produtos-v6.1.js', 'r', encoding='utf-8') as orig:
        f.write(orig.read())
print("   ✅ Backup criado: produtos-v6.1.js.backup-antes-csv")

# Salvar atualizado
with open('produtos-v6.1.js', 'w', encoding='utf-8') as f:
    f.write(content)

novo_size = len(content)
print(f"   ✅ Arquivo salvo ({novo_size:,} bytes)")

# 5. Relatório Final
print("\n" + "="*70)
print("✅ ATUALIZAÇÃO CONCLUÍDA!")
print("="*70)
print(f"\n📊 Estatísticas:")
print(f"   • Links no CSV:        {len(links_map)}")
print(f"   • Imagens atualizadas: {atualizados}")
print(f"   • SKUs não encontrados: {len(nao_encontrados)}")
print(f"   • Tamanho original:    {original_size:,} bytes")
print(f"   • Tamanho novo:        {novo_size:,} bytes")
print(f"   • Diferença:           {novo_size - original_size:+,} bytes")

if nao_encontrados:
    print(f"\n⚠️  SKUs NÃO ENCONTRADOS ({len(nao_encontrados)}):")
    for i, sku in enumerate(nao_encontrados, 1):
        if i <= 20:  # Mostrar primeiros 20
            print(f"   {i:2}. {sku}")
    if len(nao_encontrados) > 20:
        print(f"   ... e mais {len(nao_encontrados) - 20}")

# 6. Próximos passos
print("\n" + "="*70)
print("📝 PRÓXIMOS PASSOS:")
print("="*70)
print("""
1. Verificar o arquivo:
   - Abrir produtos-v6.1.js e conferir algumas imagens

2. Testar no Admin:
   - Abrir admin-v6.10.html
   - Ver se produtos mostram novas imagens

3. Se estiver OK, fazer commit:
   git add produtos-v6.1.js links.csv
   git commit -m "🖼️ Atualizar imagens do catálogo via CSV ({} produtos)"
   git push origin main

4. Se algo der errado, restaurar backup:
   cp produtos-v6.1.js.backup-antes-csv produtos-v6.1.js
""".format(atualizados))

print("="*70)
print("✨ Script concluído com sucesso!")
print("="*70)
