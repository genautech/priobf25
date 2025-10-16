#!/usr/bin/env node

const fs = require('fs');

// Mapa de imagens extraídas
const imagensMap = {
    "Alexa - Echo Dot 5ª Geração": "https://m.media-amazon.com/images/I/61U6MFMI8tL._AC_SL1000_.jpg",
    "Fone JBL Wave Buds": "https://m.media-amazon.com/images/I/51gzQ8vZVjL._AC_SL1500_.jpg",
    "JBL Wave Buds Intra": "https://m.media-amazon.com/images/I/61QGQJYZfxL._AC_SL1500_.jpg",
    "Kindle 11ª Geração": "https://m.media-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg",
    "Nespresso Vertuo Pop Branca": "https://m.media-amazon.com/images/I/61h6L-WqV0L._AC_SL1500_.jpg",
    "Nespresso Vertuo Pop Preta": "https://m.media-amazon.com/images/I/71cjGFaoURL._AC_SL1500_.jpg",
    "Caixa de Som JBL Flip 6": "https://m.media-amazon.com/images/I/81g0NixQBTL._AC_SL1500_.jpg",
    "Robô Aspirador Eletrônico": "https://m.media-amazon.com/images/I/61V3QKJvZYL._AC_SL1500_.jpg",
    "Câmera Polaroid Instax Mini 11": "https://m.media-amazon.com/images/I/71L9yC35cqL._AC_SL1500_.jpg",
    "AirPods 3ª Geração": "https://m.media-amazon.com/images/I/61hFO9ZfEEL._AC_SL1500_.jpg",
    "Apple Watch Series 9 45mm Preta": "https://m.media-amazon.com/images/I/71HnNm+Lv0L._AC_SL1500_.jpg",
    "Apple Watch Series 9 41mm Branca": "https://m.media-amazon.com/images/I/71e+7z6LHML._AC_SL1500_.jpg",
    "Robô Aspirador Eletrônico Inteligente": "https://m.media-amazon.com/images/I/61Y3SzfC+TL._AC_SL1200_.jpg",
    "Câmera Polaroid - Instax Mini 11": "https://m.media-amazon.com/images/I/71Q7k1YSCDL._AC_SL1500_.jpg",
    "Caixa de Som JBL Xtreme 3 Portátil": "https://m.media-amazon.com/images/I/81VZ5V9KZSL._AC_SL1500_.jpg",
    "Garmin Forerunner 165 GPS Running Watch": "https://m.media-amazon.com/images/I/71m5fY5MKOL._AC_SL1500_.jpg",
    "Fone de Ouvido Bluetooth com Cancelamento de Ruído Ativo": "https://m.media-amazon.com/images/I/61vEU91AfnL._AC_SL1500_.jpg",
    "Fone de Ouvido JBL com Condução Óssea": "https://m.media-amazon.com/images/I/61h+RwMqZnL._AC_SL1500_.jpg",
    "Geonav Power Bank Carregador Portátil 20.000mAh": "https://m.media-amazon.com/images/I/61H3DqJ7PjL._AC_SL1500_.jpg",
    "Tablet Samsung Galaxy Tab S6 Lite 64GB + Caneta S Pen": "https://m.media-amazon.com/images/I/61vVMJdGLuL._AC_SL1500_.jpg",
    "Robô Aspirador Eletrolux com 2h20min de Autonomia": "https://m.media-amazon.com/images/I/61Hxkz8IojL._AC_SL1500_.jpg",
    "Smart Display com Alexa (Echo Show 8)": "https://m.media-amazon.com/images/I/61DXNhHYmaL._AC_SL1500_.jpg",
    "Controle Sony DualSense Sem Fio PlayStation 5 Branco": "https://m.media-amazon.com/images/I/61gJN+FJPSL._AC_SL1500_.jpg",
    "Controle Sem Fio Microsoft Xbox Wireless Carbon Black": "https://m.media-amazon.com/images/I/61KL2WAJG6L._AC_SL1500_.jpg",
    "Nintendo Switch OLED 64GB Standard Branco": "https://m.media-amazon.com/images/I/61KKpV3p7UL._AC_SL1500_.jpg",
    "Chaleira Elétrica Térmica CE-06 Mondial Preto/Inox 2L 127V": "https://m.media-amazon.com/images/I/51Y8RhMxkbL._AC_SL1200_.jpg",
    "Almofada Massageadora Shiatsu Dellamed Preta": "https://m.media-amazon.com/images/I/61hnAKQKRsL._AC_SL1200_.jpg",
    "Balança Digital Xiaomi com Bioimpedância Scale 2 Original": "https://m.media-amazon.com/images/I/51V8HnBNkPL._AC_SL1200_.jpg",
    "Kindle Paperwhite 11ª Geração": "https://m.media-amazon.com/images/I/51QCk82iGcL._AC_SL1000_.jpg",
    "Pipoqueira Mondial PopFlix PP-03 Vermelha 110V": "https://m.media-amazon.com/images/I/61NfPpHBk6L._AC_SL1500_.jpg",
    "Lâmpada Wi-Fi Inteligente TP-Link Tapo L530E Ajuste Cor Bivolt": "https://m.media-amazon.com/images/I/51MPw9H9W2L._AC_SL1500_.jpg",
    "Mochila de Hidratação Track&Field": "https://m.media-amazon.com/images/I/71NMGj+8mSL._AC_SL1500_.jpg",
    "iPhone 16 Pro Max 256GB": "https://m.media-amazon.com/images/I/81IJSYW-VvL._AC_SL1500_.jpg",
    "Samsung Galaxy S24 Ultra": "https://m.media-amazon.com/images/I/71Hx87J8OYL._AC_SL1500_.jpg",
    "Samsung Galaxy Z Fold 5": "https://m.media-amazon.com/images/I/61V7-soHNYL._AC_SL1500_.jpg",
    "Xiaomi 14 Pro": "https://m.media-amazon.com/images/I/71kZXRu3xjL._AC_SL1500_.jpg",
    "Google Pixel 8 Pro": "https://m.media-amazon.com/images/I/71AJnVwWDyL._AC_SL1500_.jpg",
    "OnePlus 12 Pro": "https://m.media-amazon.com/images/I/61xB1hgPmJL._AC_SL1500_.jpg",
    "Motorola Edge 14 Ultra": "https://m.media-amazon.com/images/I/61VC8pC3iLL._AC_SL1500_.jpg",
    "ASUS ROG Phone 8": "https://m.media-amazon.com/images/I/71mXjqVEYzL._AC_SL1500_.jpg",
    "Nothing Phone (3)": "https://m.media-amazon.com/images/I/61KhRU+UJVL._AC_SL1500_.jpg",
    "OPPO Find X7 Ultra": "https://m.media-amazon.com/images/I/61TnC0F-TuL._AC_SL1500_.jpg",
    "🔥 NOVO! Oura Ring 4 - Smart Ring Premium": "https://m.media-amazon.com/images/I/51-7ivDG+6L._AC_SL1500_.jpg",
    "Apple Watch Series 10": "https://m.media-amazon.com/images/I/71HnNm+Lv0L._AC_SL1500_.jpg",
    "Samsung Galaxy Ring": "https://m.media-amazon.com/images/I/51oHqZT8yEL._AC_SL1500_.jpg",
    "Garmin Forerunner 965": "https://m.media-amazon.com/images/I/71xo4e+UuqL._AC_SL1500_.jpg",
    "WHOOP 4.0": "https://m.media-amazon.com/images/I/61R+V5pQzqL._AC_SL1500_.jpg",
    "Fitbit Charge 6": "https://m.media-amazon.com/images/I/61YRCy6GFZL._AC_SL1500_.jpg",
    "Amazfit GTR 5 Pro": "https://m.media-amazon.com/images/I/61XvC7VfYrL._AC_SL1500_.jpg",
    "Polar Vantage V3": "https://m.media-amazon.com/images/I/61RN+q-rBJL._AC_SL1500_.jpg",
    "Suunto 9 Peak Pro": "https://m.media-amazon.com/images/I/61ks7MHFAML._AC_SL1500_.jpg",
    "Xiaomi Smart Band 8 Pro": "https://m.media-amazon.com/images/I/71c9ro4AwVL._AC_SL1500_.jpg",
    "Huawei Watch Fit 5": "https://m.media-amazon.com/images/I/61M+FxQhkjL._AC_SL1500_.jpg",
    "Samsung Galaxy Watch 6 Classic": "https://m.media-amazon.com/images/I/71vYDRBxJOL._AC_SL1500_.jpg",
    "Coros Vertix 2S": "https://m.media-amazon.com/images/I/61eqiU8kfVL._AC_SL1500_.jpg",
    "Withings ScanWatch 2": "https://m.media-amazon.com/images/I/71HdXLPcVWL._AC_SL1500_.jpg",
    "TicWatch Pro 5 Ultra": "https://m.media-amazon.com/images/I/61NyMHqnQoL._AC_SL1500_.jpg",
    "iPad Pro 13\" M4": "https://m.media-amazon.com/images/I/81RKl3FvFGL._AC_SL1500_.jpg",
    "iPad Air 11\" M2": "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg",
    "Samsung Galaxy Tab S9 Ultra": "https://m.media-amazon.com/images/I/71L+MqVI9LL._AC_SL1500_.jpg",
    "Samsung Galaxy Tab S9": "https://m.media-amazon.com/images/I/71ZcQ9h4sHL._AC_SL1500_.jpg",
    "Microsoft Surface Pro 9": "https://m.media-amazon.com/images/I/61gtIkVdK7L._AC_SL1500_.jpg",
    "Lenovo Tab P12 Pro": "https://m.media-amazon.com/images/I/71NMF3vLBtL._AC_SL1500_.jpg",
    "Huawei MatePad Pro 13.2": "https://m.media-amazon.com/images/I/61wP9mwCmwL._AC_SL1500_.jpg",
    "OnePlus Pad": "https://m.media-amazon.com/images/I/61r4W-fq9eL._AC_SL1500_.jpg",
    "Xiaomi Pad 6": "https://m.media-amazon.com/images/I/61cRnup8LzL._AC_SL1500_.jpg",
    "Amazon Fire Max 11": "https://m.media-amazon.com/images/I/61QPqVJhKbL._AC_SL1000_.jpg",
    "MacBook Pro 16\" M3 Pro": "https://m.media-amazon.com/images/I/61RJn0ofUsL._AC_SL1500_.jpg",
    "MacBook Air 15\" M3": "https://m.media-amazon.com/images/I/71f5Eu5lJtL._AC_SL1500_.jpg",
    "Dell XPS 15 9530": "https://m.media-amazon.com/images/I/71JCNVJtIBL._AC_SL1500_.jpg",
    "Lenovo ThinkPad X1 Carbon Gen 11": "https://m.media-amazon.com/images/I/61FhYJypRwL._AC_SL1500_.jpg",
    "ASUS ZenBook 14 OLED": "https://m.media-amazon.com/images/I/71cSV+-YZDL._AC_SL1500_.jpg",
    "HP Spectre x360 14": "https://m.media-amazon.com/images/I/71wkh7W3nIL._AC_SL1500_.jpg",
    "Razer Blade 14 Gaming": "https://m.media-amazon.com/images/I/71RGFlqXgvL._AC_SL1500_.jpg",
    "MSI Prestige 16 Studio": "https://m.media-amazon.com/images/I/71TlQZE0GiL._AC_SL1500_.jpg",
    "Acer Swift Edge 16": "https://m.media-amazon.com/images/I/71ZnQtHdj5L._AC_SL1500_.jpg",
    "Samsung Galaxy Book3 Ultra": "https://m.media-amazon.com/images/I/71IjKM6sOiL._AC_SL1500_.jpg",
    "AirPods Max": "https://m.media-amazon.com/images/I/81EbEV5y3aL._AC_SL1500_.jpg",
    "Sony WH-1000XM5": "https://m.media-amazon.com/images/I/61vEU91AfnL._AC_SL1500_.jpg",
    "Bose QuietComfort 45": "https://m.media-amazon.com/images/I/51JkkCRQJjL._AC_SL1200_.jpg",
    "Sennheiser Momentum 4 Wireless": "https://m.media-amazon.com/images/I/61v-3HbgXfL._AC_SL1500_.jpg",
    "Samsung Galaxy Buds2 Pro": "https://m.media-amazon.com/images/I/61PomnXks7L._AC_SL1500_.jpg",
    "JBL Tour One M2": "https://m.media-amazon.com/images/I/61xRQ8sPTvL._AC_SL1500_.jpg",
    "Jabra Elite 85t": "https://m.media-amazon.com/images/I/61LrBFLh-cL._AC_SL1500_.jpg",
    "Anker Soundcore Liberty 3 Pro": "https://m.media-amazon.com/images/I/61MYWEWYnXL._AC_SL1500_.jpg",
    "Beats Powerbeats Pro": "https://m.media-amazon.com/images/I/71pGiOpq6CL._AC_SL1500_.jpg",
    "Edifier NeoBuds Pro 2": "https://m.media-amazon.com/images/I/61xkBYLM3lL._AC_SL1500_.jpg",
    "Honor Earbuds X6": "https://m.media-amazon.com/images/I/51Xhx0pPmtL._AC_SL1500_.jpg",
    "Sony LinkBuds S": "https://m.media-amazon.com/images/I/51EZ+TEcLfL._AC_SL1500_.jpg",
    "Audio-Technica ATH-M50xBT2": "https://m.media-amazon.com/images/I/71OTxJ1BDzL._AC_SL1500_.jpg",
    "1MORE EVO": "https://m.media-amazon.com/images/I/61PvbQyWfzL._AC_SL1500_.jpg",
    "Nothing Ear (2)": "https://m.media-amazon.com/images/I/61ks9ZJ7BbL._AC_SL1500_.jpg",
    "DJI Pocket 3": "https://m.media-amazon.com/images/I/51KNw5QNPGL._AC_SL1500_.jpg",
    "GoPro HERO 12 Black": "https://m.media-amazon.com/images/I/61riZ-2xkML._AC_SL1500_.jpg",
    "Insta360 X3": "https://m.media-amazon.com/images/I/61DljHSPQnL._AC_SL1500_.jpg",
    "DJI Action 4": "https://m.media-amazon.com/images/I/61Ku1sPVOqL._AC_SL1500_.jpg",
    "Canon PowerShot G7 X Mark III": "https://m.media-amazon.com/images/I/81jWfCFgT0L._AC_SL1500_.jpg",
    "Sony ZV-E10": "https://m.media-amazon.com/images/I/719Z9MN0A4L._AC_SL1500_.jpg",
    "Fujifilm X100V": "https://m.media-amazon.com/images/I/81TE7XnUoKL._AC_SL1500_.jpg",
    "DJI RS 3 Gimbal": "https://m.media-amazon.com/images/I/51gvSJGMwfL._AC_SL1500_.jpg",
    "Insta360 GO 3": "https://m.media-amazon.com/images/I/51wZVL8HZAL._AC_SL1500_.jpg",
    "DJI Mic 2": "https://m.media-amazon.com/images/I/61KJBdHd7ZL._AC_SL1500_.jpg",
    "Amazon Echo (4ª Geração)": "https://m.media-amazon.com/images/I/71IyZGr5A3L._AC_SL1000_.jpg",
    "Google Nest Hub (2ª Geração)": "https://m.media-amazon.com/images/I/61DXNhHYmaL._AC_SL1500_.jpg",
    "Philips Hue Kit Inicial (3 Lâmpadas + Bridge)": "https://m.media-amazon.com/images/I/61jtQxjDMDL._AC_SL1500_.jpg",
    "Ring Video Doorbell Pro 2": "https://m.media-amazon.com/images/I/51S5zCzGBtL._AC_SL1000_.jpg",
    "TP-Link Tapo C520WS Câmera 360°": "https://m.media-amazon.com/images/I/41F2KY1ztmL._AC_SL1000_.jpg",
    "Ecobee SmartThermostat Premium": "https://m.media-amazon.com/images/I/71e4yMvmY-L._AC_SL1500_.jpg",
    "August Wi-Fi Smart Lock": "https://m.media-amazon.com/images/I/61Hs-nIGMWL._AC_SL1500_.jpg",
    "Sonoff SNZB-03 Sensor Movimento Zigbee (Pack 4)": "https://m.media-amazon.com/images/I/51J5dpCMQOL._AC_SL1500_.jpg",
    "Eve Energy Smart Plug": "https://m.media-amazon.com/images/I/61uLT4uSXDL._AC_SL1500_.jpg",
    "Aqara Hub M2": "https://m.media-amazon.com/images/I/51T5hGIvE1L._AC_SL1500_.jpg",
    "PlayStation 5 Digital Edition": "https://m.media-amazon.com/images/I/51w2yS8VndL._AC_SL1500_.jpg",
    "Xbox Series X": "https://m.media-amazon.com/images/I/51EZWGRi0XL._AC_SL1500_.jpg",
    "Steam Deck 512GB": "https://m.media-amazon.com/images/I/71ZK0NHpYyL._AC_SL1500_.jpg",
    "ASUS ROG Ally Z1 Extreme": "https://m.media-amazon.com/images/I/71TZ4kGCvzL._AC_SL1500_.jpg",
    "Logitech G Pro X Superlight 2": "https://m.media-amazon.com/images/I/51Qn1WJ3ySL._AC_SL1500_.jpg",
    "Razer Viper V3 Pro": "https://m.media-amazon.com/images/I/51tLFIXYfOL._AC_SL1500_.jpg",
    "Corsair K70 RGB PRO Mechanical": "https://m.media-amazon.com/images/I/71KN6+kQLyL._AC_SL1500_.jpg",
    "SteelSeries Apex Pro TKL": "https://m.media-amazon.com/images/I/71VZFp8HWHL._AC_SL1500_.jpg",
    "HyperX Cloud III Wireless": "https://m.media-amazon.com/images/I/61yPgMUNfxL._AC_SL1500_.jpg",
    "LG 27\" OLED Gaming Monitor 240Hz": "https://m.media-amazon.com/images/I/81jZ8R9xSsL._AC_SL1500_.jpg",
    "Anker 747 GaNPrime 150W Carregador": "https://m.media-amazon.com/images/I/51-TW5sEWdL._AC_SL1500_.jpg",
    "Belkin BoostCharge Pro 3-in-1 MagSafe": "https://m.media-amazon.com/images/I/61vqMQiD4JL._AC_SL1500_.jpg",
    "SanDisk Extreme Portable SSD 2TB": "https://m.media-amazon.com/images/I/81ge59j1WML._AC_SL1500_.jpg",
    "Samsung T7 Shield Portable SSD 4TB": "https://m.media-amazon.com/images/I/81h9RwNlD2L._AC_SL1500_.jpg",
    "Logitech MX Master 3S": "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg",
    "Apple Magic Keyboard com Touch ID": "https://m.media-amazon.com/images/I/61bIgCdjrbL._AC_SL1500_.jpg",
    "Apple Pencil Pro": "https://m.media-amazon.com/images/I/41McAU3EqLL._AC_SL1500_.jpg",
    "Samsung S Pen Pro": "https://m.media-amazon.com/images/I/41C1ghLnAiL._AC_SL1000_.jpg",
    "Tomtoc Mochila 40L Travel Backpack": "https://m.media-amazon.com/images/I/71qBxLg4+VL._AC_SL1500_.jpg",
    "Peak Design Everyday Messenger 13L": "https://m.media-amazon.com/images/I/81OeJcpQAyL._AC_SL1500_.jpg",
    "DJI Mini 4 Pro": "https://m.media-amazon.com/images/I/61EQnlH1lzL._AC_SL1500_.jpg",
    "DJI Air 3": "https://m.media-amazon.com/images/I/51NNp3JZVML._AC_SL1080_.jpg",
    "DJI Avata 2 FPV Drone": "https://m.media-amazon.com/images/I/61AKQNpAWUL._AC_SL1500_.jpg",
    "Autel EVO Lite+": "https://m.media-amazon.com/images/I/71MppLxhIgL._AC_SL1500_.jpg",
    "HolyStone HS720E 4K GPS Drone": "https://m.media-amazon.com/images/I/71sOk8sMCzL._AC_SL1500_.jpg",
    "XGIMI Horizon 2 Pro Projetor 4K": "https://m.media-amazon.com/images/I/61MoSNy7TBL._AC_SL1500_.jpg",
    "Anker Nebula Capsule 3 Laser": "https://m.media-amazon.com/images/I/61+g5Fx5+nL._AC_SL1500_.jpg",
    "Samsung The Freestyle Projetor": "https://m.media-amazon.com/images/I/61B9tKzJAUL._AC_SL1500_.jpg",
    "BenQ TK700STi Gaming Projetor 4K": "https://m.media-amazon.com/images/I/71YKUwNGdaL._AC_SL1500_.jpg",
    "Epson Home Cinema 2250 3LCD": "https://m.media-amazon.com/images/I/71W3pYSP7EL._AC_SL1500_.jpg"
};

console.log('🔄 Processando atualização de imagens...\n');

// Ler arquivo
const conteudo = fs.readFileSync('produtos-v6.1.js', 'utf8');

let conteudoAtualizado = conteudo;
let atualizados = 0;
let semMatch = 0;

// Processar cada produto
for (const [nome, urlNova] of Object.entries(imagensMap)) {
    // Criar regex para encontrar o produto e sua imagem
    const regexProduto = new RegExp(
        `nome:\\s*"${nome.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[\\s\\S]*?imagem:\\s*"([^"]+)"`,
        'g'
    );
    
    const match = regexProduto.exec(conteudo);
    if (match) {
        const urlAntiga = match[1];
        if (urlAntiga !== urlNova) {
            // Substituir a URL antiga pela nova
            conteudoAtualizado = conteudoAtualizado.replace(
                new RegExp(`imagem:\\s*"${urlAntiga.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'),
                `imagem: "${urlNova}"`
            );
            atualizados++;
            console.log(`✅ [${atualizados}] ${nome}`);
        }
    } else {
        semMatch++;
        console.log(`⚠️  Sem match: ${nome}`);
    }
}

// Salvar arquivo atualizado
fs.writeFileSync('produtos-v6.1-UPDATED.js', conteudoAtualizado, 'utf8');

console.log('\n═══════════════════════════════════════');
console.log('📊 RESUMO DA ATUALIZAÇÃO');
console.log('═══════════════════════════════════════');
console.log(`✅ Produtos atualizados: ${atualizados}`);
console.log(`⚠️  Produtos sem match: ${semMatch}`);
console.log(`📁 Arquivo salvo: produtos-v6.1-UPDATED.js`);
console.log('═══════════════════════════════════════\n');

console.log('💡 Próximo passo: Renomear produtos-v6.1-UPDATED.js para produtos-v6.1.js');
