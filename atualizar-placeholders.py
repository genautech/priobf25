#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para substituir placeholders por imagem do Google Drive
"""

import re

# Imagem placeholder do Google Drive
PLACEHOLDER_GDRIVE = 'https://drive.google.com/uc?export=view&id=1J5p6JhpvIhjmToS2Pxa-6lwcrYSwVol0'

def substituir_placeholders():
    print('📝 Lendo produtos-v6.1.js...')
    
    with open('produtos-v6.1.js', 'r', encoding='utf-8') as f:
        conteudo = f.read()
    
    # Contar placeholders antes
    placeholders_antes = conteudo.count('via.placeholder.com')
    print(f'🔍 Encontrados {placeholders_antes} placeholders')
    
    # Substituir todos os via.placeholder.com pelo Google Drive
    conteudo = re.sub(
        r'"imagem":\s*"https://via\.placeholder\.com/[^"]+?"',
        f'"imagem": "{PLACEHOLDER_GDRIVE}"',
        conteudo
    )
    
    # Contar placeholders depois
    placeholders_depois = conteudo.count('via.placeholder.com')
    substituidos = placeholders_antes - placeholders_depois
    
    # Salvar arquivo atualizado
    with open('produtos-v6.1.js', 'w', encoding='utf-8') as f:
        f.write(conteudo)
    
    print(f'✅ {substituidos} placeholders substituídos com sucesso!')
    print(f'📦 Arquivo produtos-v6.1.js atualizado')
    print(f'🖼️ Nova imagem padrão: {PLACEHOLDER_GDRIVE}')

if __name__ == '__main__':
    substituir_placeholders()
