#!/usr/bin/env python3
"""
Script para substituir TODAS as imagens placeholder por Google Drive placeholder
Mantém imagens que não sejam via.placeholder.com
"""

import re
import json

# Placeholder do Google Drive
GOOGLE_DRIVE_PLACEHOLDER = "https://drive.google.com/uc?export=view&id=1J5p6JhpvIhjmToS2Pxa-6lwcrYSwVol0"

print("🔄 Carregando produtos-v6.1.js...")

# Ler o arquivo
with open('produtos-v6.1.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Contar quantas imagens placeholder existem
placeholder_count = len(re.findall(r'"imagem":\s*"https://via\.placeholder\.com/', content))
print(f"📊 Encontradas {placeholder_count} imagens placeholder")

# Substituir TODAS as via.placeholder.com por Google Drive placeholder
# Padrão: "imagem": "https://via.placeholder.com/...",
pattern = r'("imagem":\s*)"https://via\.placeholder\.com/[^"]*"'
replacement = r'\1"' + GOOGLE_DRIVE_PLACEHOLDER + '"'

new_content = re.sub(pattern, replacement, content)

# Contar quantas foram substituídas
remaining_placeholders = len(re.findall(r'"imagem":\s*"https://via\.placeholder\.com/', new_content))
google_drive_images = len(re.findall(r'"imagem":\s*"https://drive\.google\.com/uc\?export=view&id=', new_content))

print(f"\n✅ Substituição concluída!")
print(f"📊 Placeholders restantes: {remaining_placeholders}")
print(f"📊 Imagens Google Drive: {google_drive_images}")

# Escrever de volta
with open('produtos-v6.1.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\n💾 Arquivo salvo: produtos-v6.1.js")
print(f"📏 Tamanho: {len(new_content)} bytes")
print("\n✨ Processo concluído com sucesso!")
