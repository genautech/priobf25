// Script Node.js para limpar imagemPlaceholderOriginal do produtos-v6.1.js
const fs = require('fs');

// Ler o arquivo
const content = fs.readFileSync('produtos-v6.1.js', 'utf8');

// Remover todas as linhas "imagemPlaceholderOriginal"
// Usar regex para remover a linha inteira including comma e quebra de linha
const cleaned = content.replace(/,?\s*"imagemPlaceholderOriginal":\s*"[^"]*",?\s*\n/g, '');

// Escrever de volta
fs.writeFileSync('produtos-v6.1.js', cleaned, 'utf8');

console.log('✅ Arquivo limpo com sucesso!');
