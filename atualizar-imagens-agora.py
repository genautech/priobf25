#!/usr/bin/env python3
"""
Script para atualizar imagens dos produtos baseado em links.csv
"""

import csv
import re
import os

print("="*70)
print("🖼️  ATUALIZAR IMAGENS DO CATÁLOGO")
print("="*70)

# Verificar se arquivos existem
if not os.path.exists('links.csv'):
    print("❌ ERRO: links.csv não encontrado!")
    print("   Por favor, certifique-se que o arquivo está no diretório atual.")
    exit(1)

if not os.path.exists('produtos-v6.1.js'):
    print("❌ ERRO: produtos-v6.1.js não encontrado!")
    print("   Por favor, certifique-se que o arquivo está no diretório atual.")
    exit(1)

print("\n✅ Arquivos encontrados!")

# 1. Ler CSV
print("\n📋 Lendo links.csv...")
links_map = {}

try:
    with open('links.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            sku = row['SKU'].strip().replace('\t', '')
            url = row['Link Imagem'].strip()
            if sku and url:
                links_map[sku] = url
    print(f"   ✅ {len(links_map)} links carregados")
except Exception as e:
    print(f"❌ ERRO ao ler CSV: {e}")
    exit(1)

# 2. Ler produtos-v6.1.js
print("\n📦 Lendo produtos-v6.1.js...")
try:
    with open('produtos-v6.1.js', 'r', encoding='utf-8') as f:
        content = f.read()
    print(f"   ✅ {len(content):,} bytes carregados")
except Exception as e:
    print(f"❌ ERRO ao ler arquivo: {e}")
    exit(1)

# 3. Criar backup
print("\n💾 Criando backup...")
try:
    with open('produtos-v6.1.js.backup-antes-csv', 'w', encoding='utf-8') as f:
        f.write(content)
    print("   ✅ Backup criado: produtos-v6.1.js.backup-antes-csv")
except Exception as e:
    print(f"⚠️  Aviso: não foi possível criar backup: {e}")

# 4. Atualizar imagens
print("\n🔄 Atualizando imagens...")
print("-"*70)

atualizados = 0
nao_encontrados = []
erros = []

for sku, nova_url in sorted(links_map.items()):
    try:
        # Procurar o produto por SKU
        sku_pattern = rf'"sku":\s*"{re.escape(sku)}"'
        
        if re.search(sku_pattern, content):
            # Padrão para capturar e substituir a imagem
            pattern = (
                rf'("sku":\s*"{re.escape(sku)}".*?'
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
                # Mostrar progresso a cada 10
                if atualizados % 10 == 0:
                    print(f"✅ {atualizados} produtos atualizados...")
            else:
                nao_encontrados.append(sku)
        else:
            nao_encontrados.append(sku)
    except Exception as e:
        erros.append(f"{sku}: {str(e)}")

print(f"✅ Total: {atualizados} produtos atualizados")

# 5. Salvar arquivo
print("\n💾 Salvando produtos-v6.1.js...")
try:
    with open('produtos-v6.1.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("   ✅ Arquivo salvo!")
except Exception as e:
    print(f"❌ ERRO ao salvar: {e}")
    print("   Restaurando backup...")
    with open('produtos-v6.1.js.backup-antes-csv', 'r', encoding='utf-8') as f:
        backup = f.read()
    with open('produtos-v6.1.js', 'w', encoding='utf-8') as f:
        f.write(backup)
    exit(1)

# 6. Relatório
print("\n" + "="*70)
print("✅ ATUALIZAÇÃO CONCLUÍDA!")
print("="*70)
print(f"\n📊 Estatísticas:")
print(f"   • Links no CSV:        {len(links_map)}")
print(f"   • Imagens atualizadas: {atualizados}")
print(f"   • SKUs não encontrados: {len(nao_encontrados)}")

if nao_encontrados and len(nao_encontrados) <= 10:
    print(f"\n⚠️  SKUs não encontrados:")
    for sku in nao_encontrados:
        print(f"   - {sku}")

if erros:
    print(f"\n⚠️  Erros:")
    for erro in erros[:5]:
        print(f"   - {erro}")

print(f"\n📝 Próximos passos:")
print(f"   1. Verificar: grep 'APR-LOG-DAV' produtos-v6.1.js")
print(f"   2. Testar no Admin: open admin-v6.10.html")
print(f"   3. Se OK:")
print(f"      git add produtos-v6.1.js links.csv")
print(f"      git commit -m '🖼️ Atualizar {atualizados} imagens via CSV'")
print(f"      git push origin main")

print("\n" + "="*70)
print("✨ Script concluído!")
print("="*70)
