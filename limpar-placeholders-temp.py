#!/usr/bin/env python3
"""
Script para remover linhas imagemPlaceholderOriginal do produtos-v6.1.js
"""

import re

# Ler o arquivo
with open('produtos-v6.1.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Remover todas as linhas "imagemPlaceholderOriginal" (incluindo a linha completa)
# Padrão: linha inteira com imagemPlaceholderOriginal
pattern = r',\s*\n\s*"imagemPlaceholderOriginal":.*?"[^"]*"'
cleaned_content = re.sub(pattern, '', content)

# Escrever de volta
with open('produtos-v6.1.js', 'w', encoding='utf-8') as f:
    f.write(cleaned_content)

print("✅ Linhas 'imagemPlaceholderOriginal' removidas com sucesso!")
print(f"📊 Total de caracteres original: {len(content)}")
print(f"📊 Total de caracteres após limpeza: {len(cleaned_content)}")
print(f"📉 Redução: {len(content) - len(cleaned_content)} caracteres")
