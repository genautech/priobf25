#!/usr/bin/env python3
"""
Script para atualizar imagens dos produtos no produtos-v6.1.js
baseado no CSV de links fornecido
"""

import csv
import re
import json

# Ler o CSV
print("📋 Lendo arquivo links.csv...")
links_dict = {}

with open('links.csv', 'r', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        sku = row['SKU'].strip()
        link = row['Link Imagem'].strip()
        if sku and link:
            links_dict[sku] = link
            print(f"  ✓ {sku}: {link[:60]}...")

print(f"\n✅ Total de {len(links_dict)} links carregados do CSV")

# Ler produtos-v6.1.js
print("\n📦 Lendo produtos-v6.1.js...")
with open('produtos-v6.1.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Contar atualizações
atualizados = 0
nao_encontrados = []

# Processar cada SKU do CSV
print("\n🔄 Atualizando imagens...")
for sku, link_imagem in links_dict.items():
    # Procurar o produto por SKU no arquivo JS
    # Padrão: "sku": "SKU-CODE",
    pattern = rf'"sku":\s*"{re.escape(sku)}"'
    
    if re.search(pattern, content):
        # Encontrar a linha da imagem deste produto
        # Padrão complexo para capturar o produto completo
        produto_pattern = rf'(\{[^}}]*"sku":\s*"{re.escape(sku)}"[^}}]*"imagem":\s*")([^"]*)("}}'
        
        # Substituir a URL da imagem
        def replace_image(match):
            return match.group(1) + link_imagem + match.group(3)
        
        novo_content = re.sub(produto_pattern, replace_image, content, flags=re.DOTALL)
        
        if novo_content != content:
            content = novo_content
            atualizados += 1
            print(f"  ✓ {sku}: Imagem atualizada")
        else:
            # Tentar padrão alternativo (multiline)
            # Buscar o bloco do produto
            produto_block_pattern = rf'(\{{[^}}]*?"sku":\s*"{re.escape(sku)}".*?"imagem":\s*")([^"]*?)(")'
            match = re.search(produto_block_pattern, content, re.DOTALL)
            if match:
                old_image = match.group(2)
                content = content.replace(
                    f'"sku": "{sku}"',
                    f'"sku": "{sku}"',
                    1
                )
                # Agora substituir a imagem
                content = re.sub(
                    rf'("sku":\s*"{re.escape(sku)}".*?"imagem":\s*")([^"]*?)(")',
                    rf'\1{link_imagem}\3',
                    content,
                    count=1,
                    flags=re.DOTALL
                )
                atualizados += 1
                print(f"  ✓ {sku}: Imagem atualizada (método 2)")
            else:
                nao_encontrados.append(sku)
                print(f"  ⚠️  {sku}: Produto encontrado mas imagem não atualizada")
    else:
        nao_encontrados.append(sku)
        print(f"  ❌ {sku}: Produto não encontrado")

# Salvar arquivo atualizado
print(f"\n💾 Salvando produtos-v6.1.js...")
with open('produtos-v6.1.js', 'w', encoding='utf-8') as f:
    f.write(content)

# Relatório final
print("\n" + "="*60)
print("✅ ATUALIZAÇÃO CONCLUÍDA!")
print("="*60)
print(f"📊 Estatísticas:")
print(f"   Total de links no CSV: {len(links_dict)}")
print(f"   Produtos atualizados: {atualizados}")
print(f"   Não encontrados: {len(nao_encontrados)}")

if nao_encontrados:
    print(f"\n⚠️  SKUs não encontrados:")
    for sku in nao_encontrados[:10]:  # Mostrar apenas primeiros 10
        print(f"   - {sku}")
    if len(nao_encontrados) > 10:
        print(f"   ... e mais {len(nao_encontrados) - 10}")

print(f"\n💡 Próximo passo:")
print(f"   git add produtos-v6.1.js links.csv")
print(f"   git commit -m '🖼️ Atualizar {atualizados} imagens do catálogo'")
print(f"   git push origin main")
print("\n✨ Arquivo atualizado com sucesso!")
