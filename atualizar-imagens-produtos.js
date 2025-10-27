// Script para atualizar TODAS as imagens dos produtos baseado no CSV
// Este script deve ser executado no navegador com o arquivo produtos-v6.1.js carregado

const imagensCSV = {
  "APR-LOG-DAV": "https://images1.kabum.com.br/produtos/fotos/10591/apresentador-sem-fio-logitech-r400-com-laser-pointer-vermelho-conexao-por-usb-e-pilha-inclusa-910-001354_1614175731_gg.jpg",
  "NIN-SWI-DAV": "https://images3.kabum.com.br/produtos/fotos/385193/console-nintendo-switch-lite-azul-hbhsbbza2_1663594729_gg.jpg",
  "APL-IPA-DAV": "https://carrefourbr.vtexassets.com/arquivos/ids/181495847/image-2.jpg?v=638696373606400000",
  "OMR-PRE-DAV": "https://m.media-amazon.com/images/I/51PApsauEDL._AC_SX679_.jpg",
  "WEB-LOG-DAV": "https://m.magazineluiza.com.br/a-static/420x420/webcam-logitech-c920e-1080p-vc-960-001401/olistsp/osp8wur0ewcaje4d/afcd64942ac58f99523381e045c66bcb.jpeg",
  "ALM-SHIA": "https://m.media-amazon.com/images/I/71+RVNhEZZL._AC_SL1500_.jpg",
  "BAL-XIA2": "https://m.media-amazon.com/images/I/51ytwQsTQJL._AC_SL1500_.jpg",
  "CHA-MOND": "https://m.media-amazon.com/images/I/51K6htcmuWL._AC_SL1000_.jpg",
  "PIP-MOND": "https://m.media-amazon.com/images/I/81oRNVZ6SUL._AC_SL1500_.jpg",
  "SUP-MON-DAV": "https://images5.kabum.com.br/produtos/fotos/687705/suporte-para-monitor-fitter-ate-32-articulado-com-pistao-a-gas-preto-f8_1737983628_gg.jpg",
  "MCH-TRK": "https://trackfield.vtexassets.com/arquivos/ids/262260-1200-1677?v=638162259344330000&width=1200&height=1677&aspect=true",
  "MOC-HIG_DAV": "https://m.media-amazon.com/images/I/51EjB69geRL._AC_SL1145_.jpg",
  "FRI-MON-DAV": "https://imgs.casasbahia.com.br/55032021/1g.jpg?imwidth=500",
  "NES-VPOP-W": "https://eletroangeloni.vtexassets.com/arquivos/ids/3303794-1200-auto?v=638925192536630000&width=1200&height=auto&aspect=true",
  "NES-VPOP-B": "https://spicy.vtexassets.com/arquivos/ids/239862-1200-auto?v=638810278979600000&width=1200&height=auto&aspect=true",
  "1MOR-EVO": "https://bloomaudio.com/cdn/shop/files/1more-evo-main2-black.jpg?v=1691583619&width=1080",
  "ACE-SWI": "https://t2.tudocdn.net/669714?w=824&h=494",
  "APD-3G": "https://importswb.com.br/wp-content/uploads/2022/08/93.png",
  "APM-MAX": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-hero-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=WXBZVEZCOUNiUWlBYUtjZmtBc0J2MGkxeEVQUXVsbFk4WEhBc0JFOWdSN2pmMHBIdXRoME5iSzRYUmF4Y3dVRy81NGMrcU1sYkxwTFJaVHI1NEQzenBJRnRzZXYwZVJMZmZQVjdBR0RkVVNpdi91OXpsc3gvUHZvVGU1aUpOaFE",
  "ECH-DOT5-EST": "https://fastshopbr.vtexassets.com/arquivos/ids/2314230/1_0_675b4280447c42f8bd09e462.jpg?v=638966691056970000",
  "AMA-FIT5": "https://static.runnea.pt/images/202404/amazfit-balance-smartwatch-400x400x90xX.jpg?1",
  "AMZ-EC4": "https://mirandacomputacao.jetassets.com.br/produto/multifotos/43789-2_43789_DM.jpg",
  "AMZ-FIRE": "https://horizonplay.fbitsstatic.net/img/p/tablet-amazon-fire-max-11-13th-geracao-64gb-4ram-11-polegadas-151508/338102-1.jpg?w=420&h=420&v=no-value",
  "ANK-747": "https://carrefourbr.vtexassets.com/arquivos/ids/182586153/image-0.jpg?v=638725734668330000",
  "ANK-NEB": "https://m.media-amazon.com/images/I/713XRr1E1mL.jpg",
  "ANK-LIB3P": "https://http2.mlstatic.com/D_NQ_NP_661946-MLU77356291531_062024-O.webp",
  "APP-MAG": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK83?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=SkZJV2RqWG51OWJFeFBSU2pJK053bWorYzFkTG5HaE9wejd5WUxYZjRML3VCdEVHeHhPSGNpL2MzN05PekJuUVdWN1hhVWczMHFQK0pYK2wrbmNib1E",
  "APP-PEN2": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX2D3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=aERwRkppV2pTZWx2MDU5ek9FWVpkd2tuVHYzMERCZURia3c5SzJFOTlPamtyK21QQVlqVGgrcGQ5Uy9BWWRGOUU5TjEzNDVxWGZyenF5K251RnVTZXc",
  "APW-S10": "https://horizonplay.fbitsstatic.net/img/p/apple-watch-series-10-42-mm-ouro-rosa-pulseira-esportiva-rosa-152236/338839-1.jpg?w=670&h=670&v=202506012131",
  "APW-S9-WH": "https://www.iplacecorp.com.br/ccstore/v1/images/?source=/file/v9093594294955450411/products/226808.00-apple-watch-series-9-gps-meia-noite-pulseira-esportiva-mr8w3bz-a.jpg&height=475&width=475",
  "APW-S9-BK": "https://carrefourbr.vtexassets.com/arquivos/ids/172308027/9e24a9885a934ce9ac8ab7bfa65e4ecb.jpg?v=638617601131430000",
  "AQA-HUB": "https://hayloubrasil.com.br/wp-content/uploads/2025/07/8853_01.jpg",
  "ROG-ALL": "https://www.reddit.com/media?url=https%3A%2F%2Fexternal-preview.redd.it%2Fasus-rog-ally-z1-extreme-review-gaming-handheld-with-120-hz-v0-5xRUOkPv_CF5MxH0brg4XIzTGNm3HauN-rjcaBiBZi0.jpg%3Fauto%3Dwebp%26s%3D01bc083168a3fc3ba6b047e06bbdd56915409d7d",
  "ASU-ROG8": "https://dlcdnwebimgs.asus.com/gain/1F082CCC-7F01-4057-B250-4B81B1651877",
  "ASU-ZEN": "https://dlcdnwebimgs.asus.com/gain/282fa6b1-5d9e-4950-ab46-1da2defbe6a3/",
  "AUD-MAX": "https://images.tcdn.com.br/img/img_prod/1148871/fone_de_ouvido_audio_technica_ath_m50xbt2_profissional_com_bluetooth_preto_35_2_322ce9f52b9381b5b532cd35093f49f7.jpg",
  "AUG-LOCK": "https://sm.pcmag.com/pcmag_au/review/a/august-wi-/august-wi-fi-smart-lock_z4pg.jpg",
  "AUT-EVO2": "https://shop.autelrobotics.com/cdn/shop/products/7_900x.png?v=1760996980",
  "BEA-POW": "https://down-br.img.susercontent.com/file/cn-11134207-7ras8-mdvealcvpb6v42",
  "BEL-BOO": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRGH2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cTdlUnBqVGdvanFGTGVIQitEZmt2UWtuVHYzMERCZURia3c5SzJFOTlPaEZNQjI0eVVYcEVHZkJReDNTSHVZTit3WVIzN0JVWWU4VmR5Ti9GYkNWV2c",
  "BEN-TK700": "https://htclick.com.br/wp-content/uploads/2025/01/1620997239_IMG_1535736.jpg",
  "BOS-QC45": "https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/50987.jpg",
  "JBL-FL6": "https://img.terabyteshop.com.br/produto/g/caixa-de-som-jbl-flip-6-bluetooth-30w-usb-c-azul-jblflip6blu_223787.jpg",
  "JBL-XTR3": "https://images.tcdn.com.br/img/img_prod/872390/caixa_de_som_jbl_xtreme_4_portatil_bluetooth_preta_100w_1477_1_99cf54379ea5e8ba5d0da1b56e7dee31.jpg",
  "POL-MINI11": "https://imgs.casasbahia.com.br/1562981920/1xg.jpg?imwidth=1000",
  "CAN-G7X": "https://i.rtings.com/assets/products/4DeMHS09/canon-powershot-g7-x-mark-iii/design-medium.jpg?format=auto",
  "XBX-CTRL": "https://mirandacomputacao.jetassets.com.br/produto/43587-principal.png",
  "PS5-DUAL": "https://images.kabum.com.br/produtos/fotos/115801/controle-sem-fio-ps5-dualsense_1598897393_gg.jpg"
};

console.log("✅ Mapeamento de imagens carregado!");
console.log(`📊 Total de ${Object.keys(imagensCSV).length} imagens para atualizar`);
console.log("\n💡 Para aplicar as atualizações, execute:");
console.log("1. Copie o conteúdo de produtos-v6.1.js");
console.log("2. Para cada SKU no imagensCSV, substitua a URL da imagem");
console.log("3. Salve o arquivo atualizado");
