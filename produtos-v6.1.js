// ═══════════════════════════════════════════════════════════════════════════
// 📦 PRODUTOS - Base de Dados v6.1
// ═══════════════════════════════════════════════════════════════════════════
// 
// 🔄 ATUALIZADO AUTOMATICAMENTE via Cloudflare Pages Function
// ⚠️  NÃO EDITAR MANUALMENTE - Use o Admin para modificar produtos
// 
// Última atualização: 2025-10-27T18:39:19.432Z
// Sincronização: Cloudflare Pages Function → GitHub API → Deploy automático
// ═══════════════════════════════════════════════════════════════════════════

/**
 * 📋 Produtos da Planilha Original
 * Origem: Importação de spreadsheet
 * IDs: 1-1999
 * Total: 164
 */
const produtosPlanilha = [
  {
    "id": 1001,
    "sku": "1MOR-EVO",
    "nome": "1MORE EVO",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 20,
    "precoVenda": 504,
    "estoque": "Sob Consulta",
    "fornecedor": "1MORE",
    "imagem": "https://bloomaudio.com/cdn/shop/files/1more-evo-main2-black.jpg?v=1691583619&width=1080",
    "linkCompra": "https://www.amazon.com.br/s?k=1MORE+EVO",
    "descricao": "1MORE EVO com QuietMax ANC, LDAC, certificado Hi-Res, drivers duplos",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1002,
    "sku": "ACE-SWI",
    "nome": "Acer Swift Edge 16",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 6076.65,
    "precoMercado": 7149,
    "margem": 30,
    "precoVenda": 7899.64,
    "estoque": "Sob Consulta",
    "fornecedor": "Acer",
    "imagem": "https://t2.tudocdn.net/669714?w=824&h=494",
    "linkCompra": "https://www.amazon.com.br/s?k=Acer+Swift+Edge+16",
    "descricao": "Acer Swift Edge 16\" OLED 4K, AMD Ryzen 7, ultra fino 1.23kg, bateria 10h",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1003,
    "sku": "FRI-MON-DAV",
    "nome": "Air Fryer Mondial AFN40BI Family Inox 4L Preta/Inox 110V",
    "categoria": "Casa e Cozinha",
    "subcategoria": "Fritadeiras",
    "quantidade": 10,
    "custoBase": 217.13,
    "precoMercado": 255.45,
    "margem": 30,
    "precoVenda": 282.269,
    "estoque": "Para Compra",
    "fornecedor": "Mondial",
    "imagem": "https://imgs.casasbahia.com.br/55032021/1g.jpg?imwidth=500",
    "linkCompra": "https://www.casasbahia.com.br/fritadeira-eletrica-sem-oleo-air-fryer-mondial-afn40bi-family-inox-4l-preta-inox/p/55032021?utm_medium=cpc&utm_source=GP_PLA&IdSku=55032021&idLojista=10037&tipoLojista=1P&gclsrc=aw.ds&&utm_campaign=cb_b2c_gg_shopping_core_elpo_fritadeira&gad_source=4&gad_campaignid=22440145884&gbraid=0AAAAADtAamhL9CXFP3_eScR1ZJFhO-b_9&gclid=CjwKCAjw3tzHBhBREiwAlMJoUmP3VeTSzfW-YrgKn4ryAOa926zeHH_LZ9HmIHVO1Q5SRVJhwzfEcRoCeJEQAvD_BwE",
    "descricao": "Air Fryer Mondial AFN40BI Family Inox 4L Preta/Inox 110V",
    "especificacoes": {
      "marketplace": "Casas Bahia",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 222.13,
    "dataAtualizacao": "2025-10-27T18:09:32.705Z"
  },
  {
    "id": 1004,
    "sku": "APD-3G",
    "nome": "AirPods 3ª Geração",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 1656.65,
    "precoMercado": 1949,
    "margem": 30,
    "precoVenda": 2153.64,
    "estoque": "Em Estoque",
    "fornecedor": "Apple Store",
    "imagem": "https://importswb.com.br/wp-content/uploads/2022/08/93.png",
    "linkCompra": "https://www.kabum.com.br/produto/425655/apple-airpods-3-geracao-mpny3am-a-a2565-a2564-a2897?utm_id=21434223541&gad_source=4&gad_campaignid=21423803016&gbraid=0AAAAADx-HyHB_MCqy-P3d9Br2XHAXK0iO&gclid=CjwKCAjw3tzHBhBREiwAlMJoUkg2lOsbDVa4ZSxYBR36IZIdjYzCrqRQJPLGhyKc4UXufMb4Kkr6BhoChcEQAvD_BwE",
    "descricao": "AirPods 3ª Geração",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "7 A 10 DIAS"
    },
    "precoConcorrente": 1188.3
  },
  {
    "id": 1005,
    "sku": "APM-MAX",
    "nome": "AirPods Max",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 4402.15,
    "precoMercado": 5179,
    "margem": 30,
    "precoVenda": 5722.8,
    "estoque": "Em Estoque",
    "fornecedor": "Apple",
    "imagem": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-hero-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=WXBZVEZCOUNiUWlBYUtjZmtBc0J2MGkxeEVQUXVsbFk4WEhBc0JFOWdSN2pmMHBIdXRoME5iSzRYUmF4Y3dVRy81NGMrcU1sYkxwTFJaVHI1NEQzenBJRnRzZXYwZVJMZmZQVjdBR0RkVVNpdi91OXpsc3gvUHZvVGU1aUpOaFE",
    "linkCompra": "https://www.mercadolivre.com.br/apple-bluetooth-airpods-max-pgyl3ama-meia-noite-1/p/MLB40520113?product_trigger_id=MLB40520112&pdp_filters=item_id%3AMLB4238326071&applied_product_filters=MLB40520113&from=gshop&picker=true&matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&quantity=1",
    "descricao": "AirPods Max com cancelamento de ruído ativo, áudio espacial, Digital Crown, case premium",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 A 10 DIAS"
    },
    "precoConcorrente": 3801
  },
  {
    "id": 1006,
    "sku": "ECH-DOT5-EST",
    "nome": "Alexa - Echo Dot 5ª Geração",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 0.85,
    "precoMercado": 1,
    "margem": 1,
    "precoVenda": 0.8584999999999999,
    "estoque": "Para Compra",
    "fornecedor": "Amazon.com.br",
    "imagem": "https://fastshopbr.vtexassets.com/arquivos/ids/2314230/1_0_675b4280447c42f8bd09e462.jpg?v=638966691056970000",
    "linkCompra": "https://www.casasbahia.com.br/smart-speaker-amazon-echo-dot-5-geracao-com-alexa-preta/p/55062089?utm_medium=Cpc&utm_source=GP_PLA&IdSku=55062089&idLojista=10037&tipoLojista=1P&gclsrc=aw.ds&&utm_content=b2c_blackout_mix_brasil_1200x628_geral&gad_source=4&gad_campaignid=21644304367&gbraid=0AAAAADtAamgTh247v8I7A5bkFBXoE-9c0&gclid=CjwKCAjw3tzHBhBREiwAlMJoUlfzrpGMTieAAMPGqCAeESRaNRFyhYhTmk5gCzK55L5MUOB_7hm-khoCAfUQAvD_BwE",
    "descricao": "Smart speaker com Alexa, som premium 360°, controle de casa inteligente por voz",
    "especificacoes": {
      "marketplace": "Casas Bahia",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 369.9,
    "dataAtualizacao": "2025-10-27T03:12:16.561Z"
  },
  {
    "id": 1007,
    "sku": "ALM-SHIA",
    "nome": "Almofada Massageadora Shiatsu Dellamed Preta",
    "categoria": "Outros",
    "subcategoria": "Saúde e Bem-estar",
    "quantidade": 1,
    "custoBase": 199,
    "precoMercado": 520,
    "margem": 35,
    "precoVenda": 268.65000000000003,
    "estoque": "Para Compra",
    "fornecedor": "Dellamed",
    "imagem": "https://m.media-amazon.com/images/I/71+RVNhEZZL._AC_SL1500_.jpg",
    "linkCompra": "https://www.magazineluiza.com.br/dellamed-almofada-massageadora-shiatsu/p/gc450jb09b/cp/alma/?&seller_id=cirurgicadl&utm_source=google&utm_medium=cpc&utm_term=80673&utm_campaign=google_eco_per_ven_pla_bel_sor_3p_cab-cp-drm-maq-pfm-csp&utm_content=&partner_id=80673&gclsrc=aw.ds&gad_source=4&gad_campaignid=22825371728&gbraid=0AAAAAD4zZmT9Wv8j4-gLrGXltUclC89hf&gclid=CjwKCAjw3tzHBhBREiwAlMJoUpyHffIy2sRG2mi7PfIcCubbJrXfZIij3bqSxUMYML7WNIKTICFJXxoCocEQAvD_BwE",
    "descricao": "Almofada massageadora Shiatsu com função calor, ideal para costas, pescoço e pernas",
    "especificacoes": {
      "marketplace": "Dellamed"
    },
    "precoConcorrente": 89.9,
    "dataAtualizacao": "2025-10-27T18:12:02.664Z"
  },
  {
    "id": 1008,
    "sku": "AMA-FIT5",
    "nome": "Amazfit GTR 5 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 1435.65,
    "precoMercado": 1689,
    "margem": 30,
    "precoVenda": 1866.34,
    "estoque": "Sob Consulta",
    "fornecedor": "Amazfit",
    "imagem": "https://static.runnea.pt/images/202404/amazfit-balance-smartwatch-400x400x90xX.jpg?1",
    "linkCompra": "https://www.amazon.com.br/s?k=Amazfit+GTR+5+Pro",
    "descricao": "Amazfit GTR 5 Pro com tela AMOLED 1.46\", GPS dual-band, bateria 14 dias",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1009,
    "sku": "AMZ-EC4",
    "nome": "Amazon Echo (4ª Geração)",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 551.65,
    "precoMercado": 649,
    "margem": 30,
    "precoVenda": 717.14,
    "estoque": "Sob Consulta",
    "fornecedor": "Amazon",
    "imagem": "https://mirandacomputacao.jetassets.com.br/produto/multifotos/43789-2_43789_DM.jpg",
    "linkCompra": "https://www.amazon.com.br/s?k=Amazon+Echo+4+Geracao",
    "descricao": "Echo 4ª Gen com som premium, Alexa, hub Zigbee integrado, design esférico",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1010,
    "sku": "AMZ-FIRE",
    "nome": "Amazon Fire Max 11",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Sob Consulta",
    "fornecedor": "Amazon",
    "imagem": "https://horizonplay.fbitsstatic.net/img/p/tablet-amazon-fire-max-11-13th-geracao-64gb-4ram-11-polegadas-151508/338102-1.jpg?w=420&h=420&v=no-value",
    "linkCompra": "https://www.amazon.com.br/s?k=Amazon+Fire+Max+11",
    "descricao": "Fire Max 11 com tela 11\" 2K, Alexa integrada, bateria 14h, ideal para streaming",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1011,
    "sku": "ANK-747",
    "nome": "Anker 747 GaNPrime 150W Carregador",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 441.15,
    "precoMercado": 519,
    "margem": 30,
    "precoVenda": 573.5,
    "estoque": "Sob Consulta",
    "fornecedor": "Anker",
    "imagem": "https://carrefourbr.vtexassets.com/arquivos/ids/182586153/image-0.jpg?v=638725734668330000",
    "linkCompra": "https://www.amazon.com.br/s?k=Anker+747+GaNPrime+150W+Carregador",
    "descricao": "Anker 747 carregador GaN 150W com 4 portas (3 USB-C + 1 USB-A), compacto",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1012,
    "sku": "ANK-NEB",
    "nome": "Anker Nebula Capsule 3 Laser",
    "categoria": "Eletrônicos",
    "subcategoria": "Projetores",
    "quantidade": 10,
    "custoBase": 3645.65,
    "precoMercado": 4289,
    "margem": 30,
    "precoVenda": 4739.35,
    "estoque": "Em Estoque",
    "fornecedor": "Anker",
    "imagem": "https://m.media-amazon.com/images/I/713XRr1E1mL.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/projetor-portatil-nebula-anker-capsule-3-gtv-1080p-tela-de-305-cm/p/MLB40746198?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id%3AMLB5135778120&from=gshop",
    "descricao": "Anker Nebula Capsule 3 Laser",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 4950
  },
  {
    "id": 1013,
    "sku": "ANK-LIB3P",
    "nome": "Anker Soundcore Liberty 3 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 883.15,
    "precoMercado": 1039,
    "margem": 30,
    "precoVenda": 1148.1,
    "estoque": "Sob Consulta",
    "fornecedor": "Anker",
    "imagem": "https://http2.mlstatic.com/D_NQ_NP_661946-MLU77356291531_062024-O.webp",
    "linkCompra": "https://www.amazon.com.br/s?k=Anker+Soundcore+Liberty+3+Pro",
    "descricao": "Soundcore Liberty 3 Pro com LDAC Hi-Res, ACAA 2.0, ANC híbrido",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1014,
    "sku": "APP-MAG",
    "nome": "Apple Magic Keyboard com Touch ID",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Em Estoque",
    "fornecedor": "Apple",
    "imagem": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK83?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=SkZJV2RqWG51OWJFeFBSU2pJK053bWorYzFkTG5HaE9wejd5WUxYZjRML3VCdEVHeHhPSGNpL2MzN05PekJuUVdWN1hhVWczMHFQK0pYK2wrbmNib1E",
    "linkCompra": "https://www.kabum.com.br/produto/661371/teclado-magic-keyboard-apple-para-mac-com-touch-id-chip-da-apple-padrao-us-branco-mxck3bz-a?utm_id=22427039975&gad_source=4&gad_campaignid=22427039975&gbraid=0AAAAADx-HyGXPodPCgPWlnttQA_y6lLca&gclid=CjwKCAjw3tzHBhBREiwAlMJoUj6ErWxjpT8jZbhob7DqQuz7nX2OPw16KcWqdvv6QdUK9t1qA0vleRoCT0YQAvD_BwE",
    "descricao": "Magic Keyboard com Touch ID para Mac, bateria recarregável, design low-profile",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 1419
  },
  {
    "id": 1015,
    "sku": "APP-PEN2",
    "nome": "Apple Pencil Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 883.15,
    "precoMercado": 1039,
    "margem": 30,
    "precoVenda": 1148.1,
    "estoque": "Em Estoque",
    "fornecedor": "Apple",
    "imagem": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX2D3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=aERwRkppV2pTZWx2MDU5ek9FWVpkd2tuVHYzMERCZURia3c5SzJFOTlPamtyK21QQVlqVGgrcGQ5Uy9BWWRGOUU5TjEzNDVxWGZyenF5K251RnVTZXc",
    "linkCompra": "https://www.mercadolivre.com.br/apple-pencil-pro-2024/up/MLBU3471063755?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id:MLB5774387584",
    "descricao": "Apple Pencil Pro com barrel roll, squeeze, feedback háptico, Find My",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "15 DIAS"
    },
    "precoConcorrente": 950
  },
  {
    "id": 1016,
    "sku": "APW-S10",
    "nome": "Apple Watch Series 10 Rosa",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 6905.4,
    "precoMercado": 8124,
    "margem": 30,
    "precoVenda": 8977.02,
    "estoque": "Em Estoque",
    "fornecedor": "Apple Store",
    "imagem": "https://horizonplay.fbitsstatic.net/img/p/apple-watch-series-10-42-mm-ouro-rosa-pulseira-esportiva-rosa-152236/338839-1.jpg?w=670&h=670&v=202506012131",
    "linkCompra": "https://www.mercadolivre.com.br/apple-series-10-watch-gps-mwwa3ama-1654-42-mm-pm-aluminio-ouro-rosa-correa-esportiva-blush-clara/p/MLB40694297?product_trigger_id=MLB40694304&pdp_filters=item_id%3AMLB4067212475&applied_product_filters=MLB40694304&from=gshop&picker=true&matt_tool=54660454&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354553&matt_ad_group_id=173090632956&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734918&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB40694304-product&matt_product_partition_id=2389562704490&matt_target_id=aud-1966852281496%3Apla-2389562704490&cq_src=google_ads&cq_cmp=22090354553&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354553&gbraid=0AAAAAD93qcD4PtqwFFSNnQCU7CP4jFzYk&gclid=CjwKCAjw3tzHBhBREiwAlMJoUjFDFo-3qBfdFAD33sC9Kb8YBbpll5actqaaXyCtX6sIp0zvKGpW8RoCZwUQAvD_BwE&quantity=1",
    "descricao": "Apple Watch Series 10 com tela maior, processador S10, detecção de queda aprimorada",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 2695
  },
  {
    "id": 1017,
    "sku": "APW-S9-WH",
    "nome": "Apple Watch Series 9 41mm Preta",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 3866.65,
    "precoMercado": 4549,
    "margem": 30,
    "precoVenda": 5026.65,
    "estoque": "Em Estoque",
    "fornecedor": "Apple Store",
    "imagem": "https://www.iplacecorp.com.br/ccstore/v1/images/?source=/file/v9093594294955450411/products/226808.00-apple-watch-series-9-gps-meia-noite-pulseira-esportiva-mr8w3bz-a.jpg&height=475&width=475",
    "linkCompra": "https://www.carrefour.com.br/apple-watch-series-9-caixa-e-pulseira-esportiva-aluminio-midnight-41mm-mg-mp938504800/p?utm_medium=sem&utm_source=google_pmax_3p&utm_campaign=3p_performancemax_Eletro_Smartphone&gad_source=4&gad_campaignid=22048817029&gbraid=0AAAAADjinok76No8iE4dnZW8IBE71u7qF&gclid=CjwKCAjw3tzHBhBREiwAlMJoUn1khkXYtbZrLWmY3BEN-pTopOZorZMziAokb1Qh-maiyl5tS1oHwRoCGf4QAvD_BwE",
    "descricao": "Apple Watch Series 9 preta, design elegante, recursos de saúde avançados",
    "especificacoes": {
      "marketplace": "Carrefour",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 2552
  },
  {
    "id": 1018,
    "sku": "APW-S9-BK",
    "nome": "Apple Watch Series 9 45mm Preta",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 3866.65,
    "precoMercado": 4549,
    "margem": 30,
    "precoVenda": 5026.65,
    "estoque": "Em Estoque",
    "fornecedor": "Apple Store",
    "imagem": "https://carrefourbr.vtexassets.com/arquivos/ids/172308027/9e24a9885a934ce9ac8ab7bfa65e4ecb.jpg?v=638617601131430000",
    "linkCompra": "https://www.carrefour.com.br/apple-watch-series-9-caixa-meia-noite-aluminio-45mm-pulseira-esportiva-meia-noite-m-g-mp938477732/p?utm_medium=sem&utm_source=google_pmax_3p&utm_campaign=3p_performancemax_Eletro_Smartphone&gad_source=4&gad_campaignid=22048817029&gbraid=0AAAAADjinok76No8iE4dnZW8IBE71u7qF&gclid=CjwKCAjw3tzHBhBREiwAlMJoUgT_2HJHJno-v5LK6giksWop7CVUB6x9_9BlppiqmlQ7yov9nz5QfBoCijoQAvD_BwE",
    "descricao": "Apple Watch Series 9 com tela Always-On, GPS, monitoramento de saúde",
    "especificacoes": {
      "marketplace": "Carrefour",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 2727.91
  },
  {
    "id": 1019,
    "sku": "APR-LOG-DAV",
    "nome": "Apresentador Sem Fio R400 Preto Logitech",
    "categoria": "Eletronicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 122.18,
    "precoMercado": 143.74,
    "margem": 30,
    "precoVenda": 158.83,
    "estoque": "Em Estoque",
    "fornecedor": "Logitech",
    "imagem": "https://images1.kabum.com.br/produtos/fotos/10591/apresentador-sem-fio-logitech-r400-com-laser-pointer-vermelho-conexao-por-usb-e-pilha-inclusa-910-001354_1614175731_gg.jpg",
    "linkCompra": "https://www.kabum.com.br/produto/10591/apresentador-sem-fio-logitech-r400-com-laser-pointer-vermelho-conexao-usb-e-pilha-inclusa-910-001354?utm_id=22427039975&gad_source=4&gad_campaignid=22427039975&gbraid=0AAAAADx-HyGXPodPCgPWlnttQA_y6lLca&gclid=CjwKCAjw3tzHBhBREiwAlMJoUtCAVHFf0fLi2Ri0cIsPV3g8aCn4-QSGC4t66jWKUK3Vy6MHSJQfPRoCbH4QAvD_BwE",
    "descricao": "Apresentador Sem Fio R400 Preto Logitech",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 124.99
  },
  {
    "id": 1020,
    "sku": "AQA-HUB",
    "nome": "Aqara Hub M2",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 551.65,
    "precoMercado": 649,
    "margem": 30,
    "precoVenda": 717.14,
    "estoque": "Sob Consulta",
    "fornecedor": "Aqara",
    "imagem": "https://hayloubrasil.com.br/wp-content/uploads/2025/07/8853_01.jpg",
    "linkCompra": "https://www.amazon.com.br/s?k=Aqara+Hub+M2",
    "descricao": "Aqara Hub M2 Zigbee 3.0, IR controle, automação local, Apple HomeKit, Google, Alexa",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1021,
    "sku": "ROG-ALL",
    "nome": "ASUS ROG Ally Z1 Extreme",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 4181.15,
    "precoMercado": 4919,
    "margem": 30,
    "precoVenda": 5435.49,
    "estoque": "Em Estoque",
    "fornecedor": "ASUS",
    "imagem": "https://www.reddit.com/media?url=https%3A%2F%2Fexternal-preview.redd.it%2Fasus-rog-ally-z1-extreme-review-gaming-handheld-with-120-hz-v0-5xRUOkPv_CF5MxH0brg4XIzTGNm3HauN-rjcaBiBZi0.jpg%3Fauto%3Dwebp%26s%3D01bc083168a3fc3ba6b047e06bbdd56915409d7d",
    "linkCompra": "https://shopee.com.br/product/1297949192/23693196153?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSnU5VGFWS05yRzhtWnN1ZkdLNGVVYnR3Qk1oQVdPYjBMOTdCV0d6emJBZG1RTVAySmlBTHJqWk5QMlhLaHVsNlFDMmRjcmZ6MWxPQjNEaXZzZTB1d0FZajdDOTZobkErTVgvZDFLcVUxM0xRPT0&gad_source=4&gad_campaignid=21900060165&gbraid=0AAAAACoEtRlzqjHtJ5uralJTHQsd6gJBP&gclid=CjwKCAjw3tzHBhBREiwAlMJoUkQ2wnh76bCZjI0i9Nx0GoQsE2Psejv1c-H1jA2A9qqvGRuh9st9HRoCfPEQAvD_BwE",
    "descricao": "ROG Ally com AMD Z1 Extreme, tela 7\" 1080p 120Hz, Windows 11, Game Pass",
    "especificacoes": {
      "marketplace": "Shopee",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 5195
  },
  {
    "id": 1022,
    "sku": "ASU-ROG8",
    "nome": "ASUS ROG Phone 8",
    "categoria": "Eletrônicos",
    "subcategoria": "Smartphones",
    "quantidade": 10,
    "custoBase": 7734.15,
    "precoMercado": 9099,
    "margem": 30,
    "precoVenda": 10054.4,
    "estoque": "Sob Consulta",
    "fornecedor": "ASUS",
    "imagem": "https://dlcdnwebimgs.asus.com/gain/1F082CCC-7F01-4057-B250-4B81B1651877",
    "linkCompra": "https://www.amazon.com.br/s?k=ASUS+ROG+Phone+8",
    "descricao": "ROG Phone 8 gamer com sistema de resfriamento, gatilhos AirTrigger, tela 165Hz",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1023,
    "sku": "ASU-ZEN",
    "nome": "ASUS ZenBook 14 OLED",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 5965.3,
    "precoMercado": 7018,
    "margem": 30,
    "precoVenda": 7754.89,
    "estoque": "Em Estoque",
    "fornecedor": "ASUS",
    "imagem": "https://dlcdnwebimgs.asus.com/gain/282fa6b1-5d9e-4950-ab46-1da2defbe6a3/",
    "linkCompra": "https://www.mercadolivre.com.br/computador-portatil-asus-zenbook-14-oled-q415m-14-touch-intel-ultra-5-color-gris-oscuro/p/MLB36727745?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id%3AMLB5322484080&from=gshop",
    "descricao": "ASUS ZenBook 14 com tela 2.8K OLED 90Hz, Intel i7, bateria 18h, design slim",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 5699.9
  },
  {
    "id": 1024,
    "sku": "AUD-MAX",
    "nome": "Audio-Technica ATH-M50xBT2",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 1214.65,
    "precoMercado": 1429,
    "margem": 30,
    "precoVenda": 1579.04,
    "estoque": "Em Estoque",
    "fornecedor": "Audio-Technica",
    "imagem": "https://images.tcdn.com.br/img/img_prod/1148871/fone_de_ouvido_audio_technica_ath_m50xbt2_profissional_com_bluetooth_preto_35_2_322ce9f52b9381b5b532cd35093f49f7.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/audifonos-profesionales-dinamicos-ath-m50x-audiotechnica-color-black/p/MLB24560880?pdp_filters=item_id%3AMLB5445107408&from=gshop&matt_tool=96040271&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193909&matt_ad_group_id=174661987324&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914181378&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB24560880-product&matt_product_partition_id=2389837591619&matt_target_id=aud-1966852281496:pla-2389837591619&cq_src=google_ads&cq_cmp=22090193909&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193909&gbraid=0AAAAAD93qcA8JV7igp3Yx9wibPfJSSFAE&gclid=CjwKCAjw3tzHBhBREiwAlMJoUuj18muxyGg5U5V70vKgtlbhVdoHCAKYUA6Ks2tKZov8_vikdUQu0hoC1VMQAvD_BwE",
    "descricao": "ATH-M50xBT2 referência para estúdio, drivers 45mm, AptX, bateria 50h",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 1199
  },
  {
    "id": 1025,
    "sku": "AUG-LOCK",
    "nome": "August Wi-Fi Smart Lock",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 1325.15,
    "precoMercado": 1559,
    "margem": 30,
    "precoVenda": 1722.69,
    "estoque": "Em Estoque",
    "fornecedor": "August",
    "imagem": "https://sm.pcmag.com/pcmag_au/review/a/august-wi-/august-wi-fi-smart-lock_z4pg.jpg",
    "linkCompra": "https://produto.mercadolivre.com.br/MLB-2791523618-kit-august-smart-lock-wi-fi-4-geraco-teclado-_JM?matt_tool=59586449&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22120855419&matt_ad_group_id=179138687971&matt_match_type=&matt_network=g&matt_device=c&matt_creative=729092955256&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5562120837&matt_product_id=MLB2791523618&matt_product_partition_id=2393015073058&matt_target_id=aud-1966852281496:pla-2393015073058&cq_src=google_ads&cq_cmp=22120855419&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22120855419&gbraid=0AAAAAD93qcCQI-VzBV0pm8eGz8dVz-8hz&gclid=CjwKCAjw3tzHBhBREiwAlMJoUnFaLJSmhgEXHLEMNq4jvOFIp-gYUF7fh9ZunqI5lvBHzCIUhRlWyxoCAF0QAvD_BwE",
    "descricao": "August Smart Lock com WiFi integrado, instalação sobre fechadura existente, auto-lock",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 1599
  },
  {
    "id": 1026,
    "sku": "AUT-EVO2",
    "nome": "Autel EVO Lite+",
    "categoria": "Eletrônicos",
    "subcategoria": "Drones",
    "quantidade": 10,
    "custoBase": 5303.15,
    "precoMercado": 6239,
    "margem": 30,
    "precoVenda": 6894.09,
    "estoque": "Em Estoque",
    "fornecedor": "Autel",
    "imagem": "https://shop.autelrobotics.com/cdn/shop/products/7_900x.png?v=1760996980",
    "linkCompra": "https://www.mercadolivre.com.br/drone-autel-robotics-evo-lite--premium-bundle/up/MLBU3290957896?pdp_filters=item_id:MLB5491327692&matt_tool=61921241&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354535&matt_ad_group_id=173090627196&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734462&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5570330991&matt_product_id=MLB5491327692&matt_product_partition_id=2389836728099&matt_target_id=aud-1966852281496:pla-2389836728099&cq_src=google_ads&cq_cmp=22090354535&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354535&gbraid=0AAAAAD93qcAzn26R504Y-7i_PmoTEh0DF&gclid=CjwKCAjw3tzHBhBREiwAlMJoUvKJfZvzUpofK-MUCiYHeIzkciCkVRjHhx1Rkda6sBaE5z1USwunAxoCD2UQAvD_BwE",
    "descricao": "Autel EVO Lite+",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "15 DIAS"
    },
    "precoConcorrente": 7799
  },
  {
    "id": 1027,
    "sku": "BAL-XIA2",
    "nome": "Balança Digital Xiaomi com Bioimpedância Scale 2 Original",
    "categoria": "Geral",
    "subcategoria": "Saúde e Bem-estar",
    "quantidade": 10,
    "custoBase": 326.4,
    "precoMercado": 384,
    "margem": 30,
    "precoVenda": 424.32,
    "estoque": "Em Estoque",
    "fornecedor": "Xiaomi",
    "imagem": "https://m.media-amazon.com/images/I/51ytwQsTQJL._AC_SL1500_.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/balanca-corporal-digital-xiaomi-mi-smart-scale-2-branca-ate-150-kg/p/MLB15274416?pdp_filters=item_id%3AMLB5296990714&from=gshop&matt_tool=35397717&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354487&matt_ad_group_id=173090610436&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882733238&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB15274416-product&matt_product_partition_id=2389721501503&matt_target_id=aud-1966852281496:pla-2389721501503&cq_src=google_ads&cq_cmp=22090354487&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354487&gbraid=0AAAAAD93qcD2CpV1SiZLni4Nk_BCf1dLr&gclid=CjwKCAjw3tzHBhBREiwAlMJoUlUHPinq6uhKlSUJ0DGTVnTR1Kwx3VtGgs5kIv4_n9enUEKdACk7JBoCJyUQAvD_BwE",
    "descricao": "Xiaomi Mi Body Composition Scale 2 com análise de 13 métricas corporais via app",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 139.9
  },
  {
    "id": 1028,
    "sku": "BEA-POW",
    "nome": "Beats Powerbeats Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 1325.15,
    "precoMercado": 1559,
    "margem": 30,
    "precoVenda": 1722.69,
    "estoque": "Em Estoque",
    "fornecedor": "Beats",
    "imagem": "https://down-br.img.susercontent.com/file/cn-11134207-7ras8-mdvealcvpb6v42",
    "linkCompra": "https://www.mercadolivre.com.br/fone-de-ouvido-beats-powerbeats-pro-totalmente-sem-fio-vermelho-lava/p/MLB16368441?pdp_filters=item_id%3AMLB5771947318&from=gshop&matt_tool=13560550&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22120855569&matt_ad_group_id=179138690851&matt_match_type=&matt_network=g&matt_device=c&matt_creative=729092955484&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB16368441-product&matt_product_partition_id=2415222870954&matt_target_id=aud-1966852281496:pla-2415222870954&cq_src=google_ads&cq_cmp=22120855569&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22120855569&gbraid=0AAAAAD93qcBowTPuqmgps6xGQOqOMqk-o&gclid=CjwKCAjw3tzHBhBREiwAlMJoUgdvXnBEGn8oL2B4hotyXoLweE-TJEncO5tGfXRY1VVNzuga9fL9-RoCxgkQAvD_BwE",
    "descricao": "Powerbeats Pro para esportes, ganchos ajustáveis, resistência IPX4, chip H1",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 1549
  },
  {
    "id": 1029,
    "sku": "BEL-BOO",
    "nome": "Belkin BoostCharge Pro 3-in-1 MagSafe",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Em Estoque",
    "fornecedor": "Belkin",
    "imagem": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRGH2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cTdlUnBqVGdvanFGTGVIQitEZmt2UWtuVHYzMERCZURia3c5SzJFOTlPaEZNQjI0eVVYcEVHZkJReDNTSHVZTit3WVIzN0JVWWU4VmR5Ti9GYkNWV2c",
    "linkCompra": "https://www.mercadolivre.com.br/carregador-iphone-belkin-boost-charge-pro-magsafe-3-em-1/up/MLBU2770777561?pdp_filters=item_id:MLB3791178989&matt_tool=31485049&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354244&matt_ad_group_id=173090558156&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882729161&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5389655908&matt_product_id=MLB3791178989&matt_product_partition_id=2387641353766&matt_target_id=aud-1966852281496:pla-2387641353766&cq_src=google_ads&cq_cmp=22090354244&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354244&gbraid=0AAAAAD93qcACjR8rBVeYO-6aGeodIfg4n&gclid=CjwKCAjw3tzHBhBREiwAlMJoUnvXwzPvm3eNnep8-wCtDeAmWEO5QfC9TSZGcd2Kam1Qs6zorlu_8xoC8_4QAvD_BwE",
    "descricao": "Belkin carregador 3-in-1 MagSafe 15W para iPhone, Apple Watch, AirPods",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 1202
  },
  {
    "id": 1030,
    "sku": "BEN-TK700",
    "nome": "BenQ TK700STi Gaming Projetor 4K",
    "categoria": "Eletrônicos",
    "subcategoria": "Projetores",
    "quantidade": 10,
    "custoBase": 6612.15,
    "precoMercado": 7779,
    "margem": 30,
    "precoVenda": 8595.8,
    "estoque": "Sob Consulta",
    "fornecedor": "BenQ",
    "imagem": "https://htclick.com.br/wp-content/uploads/2025/01/1620997239_IMG_1535736.jpg",
    "linkCompra": "https://www.amazon.com.br/s?k=BenQ+TK700STi+Gaming+Projetor+4K",
    "descricao": "BenQ TK700STi Gaming Projetor 4K",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1031,
    "sku": "BOS-QC45",
    "nome": "Bose QuietComfort 45",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 1877.65,
    "precoMercado": 2209,
    "margem": 30,
    "precoVenda": 2440.94,
    "estoque": "Em Estoque",
    "fornecedor": "Bose",
    "imagem": "https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/50987.jpg",
    "linkCompra": "https://www.amazon.com.br/Bose-QuietComfort-cancelamento-resistente-Quietcomfort/dp/B0CCZ26B5V/ref=asc_df_B0CCZ26B5V?mcid=6ef22351644f3078865c080896fb4c31&tag=googleshopp00-20&linkCode=df0&hvadid=709964503106&hvpos=&hvnetw=g&hvrand=14113176082279703290&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2199765524836&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Bose QC45 com cancelamento de ruído premium, modo aware, conforto excepcional",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": ""
    },
    "precoConcorrente": 1580
  },
  {
    "id": 1032,
    "sku": "JBL-FL6",
    "nome": "Caixa de Som JBL Flip 6",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 884,
    "precoMercado": 1040,
    "margem": 30,
    "precoVenda": 1149.2,
    "estoque": "Em Estoque",
    "fornecedor": "JBL Brasil",
    "imagem": "https://img.terabyteshop.com.br/produto/g/caixa-de-som-jbl-flip-6-bluetooth-30w-usb-c-azul-jblflip6blu_223787.jpg",
    "linkCompra": "https://www.havan.com.br/caixa-de-som-jbl-filp-6-a-prova-d-agua-bluetooth-preto/p?utm_source=google&utm_medium=cpc&utm_campaign=aon-shopping-purchase-110-sf-tlh&utm_content=tlh-purchase-auto-generico-auto-campanha-aon-shopping&gad_source=4&gad_campaignid=23076176818&gbraid=0AAAAADq2I2iXwa6vx0BcDDHqAfwpRwph0&gclid=CjwKCAjw3tzHBhBREiwAlMJoUs_hpDWoxggQdEDTGf7x93_fsTL8AU0tC6xHRgjlJw_JQQsW5K4nGxoCtzsQAvD_BwE",
    "descricao": "Caixa de som portátil JBL Flip 6, à prova d'água IP67, 12h de bateria",
    "especificacoes": {
      "marketplace": "Havan",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 599
  },
  {
    "id": 1033,
    "sku": "JBL-XTR3",
    "nome": "Caixa de Som JBL Xtreme 4 Portátil",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 1768,
    "precoMercado": 2080,
    "margem": 30,
    "precoVenda": 2298.4,
    "estoque": "Em Estoque",
    "fornecedor": "JBL Brasil",
    "imagem": "https://images.tcdn.com.br/img/img_prod/872390/caixa_de_som_jbl_xtreme_4_portatil_bluetooth_preta_100w_1477_1_99cf54379ea5e8ba5d0da1b56e7dee31.jpg",
    "linkCompra": "https://www.amazon.com.br/Caixa-Bluetooth-Xtreme-Preta-Fun%C3%A7%C3%A3o/dp/B0D2LPLTJ8/ref=asc_df_B0D2LPLTJ8?mcid=4b9608e83be830369baccc737ad55bd4&tag=googleshopp00-20&linkCode=df0&hvadid=709964503124&hvpos=&hvnetw=g&hvrand=15194363295446366070&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2300684296747&psc=1&language=pt_BR&gad_source=4",
    "descricao": "JBL Xtreme 4 caixa portátil ultra potente, à prova d'água IP67 e bateria de longa duração",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 1619
  },
  {
    "id": 1034,
    "sku": "POL-MINI11",
    "nome": "Câmera Polaroid - Instax Mini 11",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 430.95,
    "precoMercado": 507,
    "margem": 30,
    "precoVenda": 560.24,
    "estoque": "Em Estoque",
    "fornecedor": "Fujifilm",
    "imagem": "https://imgs.casasbahia.com.br/1562981920/1xg.jpg?imwidth=1000",
    "linkCompra": "https://www.amazon.com.br/instax-85363-CAMERA-INSTAX-MINI-AZUL-CANDY/dp/B0BX8W9SPW/ref=asc_df_B0BX8W9SPW?mcid=dbeabab5cf693152b94dfb1e85c94f97&tag=googleshopp00-20&linkCode=df0&hvadid=709964503100&hvpos=&hvnetw=g&hvrand=3799672084950919501&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2224268473324&language=pt_BR&gad_source=4&th=1",
    "descricao": "Câmera instantânea Fujifilm Instax Mini 11 com ajuste automático de exposição e fotos instantâneas",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 422.65
  },
  {
    "id": 1035,
    "sku": "POL-MINI11",
    "nome": "Câmera Polaroid Instax Mini 11",
    "categoria": "Eletrônicos",
    "subcategoria": "Fotografia",
    "quantidade": 10,
    "custoBase": 430.95,
    "precoMercado": 507,
    "margem": 30,
    "precoVenda": 560.24,
    "estoque": "Em Estoque",
    "fornecedor": "Fujifilm",
    "imagem": "https://imgs.casasbahia.com.br/1562981920/1xg.jpg?imwidth=1000",
    "linkCompra": "https://www.amazon.com.br/instax-85363-CAMERA-INSTAX-MINI-AZUL-CANDY/dp/B0BX8W9SPW/ref=asc_df_B0BX8W9SPW?mcid=dbeabab5cf693152b94dfb1e85c94f97&tag=googleshopp00-20&linkCode=df0&hvadid=709964503100&hvpos=&hvnetw=g&hvrand=3799672084950919501&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2224268473324&language=pt_BR&gad_source=4&th=1",
    "descricao": "Câmera Polaroid Instax Mini 11",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 422.65
  },
  {
    "id": 1036,
    "sku": "CAN-G7X",
    "nome": "Canon PowerShot G7 X Mark III",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 4181.15,
    "precoMercado": 4919,
    "margem": 30,
    "precoVenda": 5435.49,
    "estoque": "Em Estoque",
    "fornecedor": "Canon",
    "imagem": "https://i.rtings.com/assets/products/4DeMHS09/canon-powershot-g7-x-mark-iii/design-medium.jpg?format=auto",
    "linkCompra": "https://www.mercadolivre.com.br/canon-powershot-serie-g-g7-x-mark-iii-compacta-avancada-cor-preto/p/MLB15187508?pdp_filters=item_id%3AMLB1588524367&from=gshop&matt_tool=61921241&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354535&matt_ad_group_id=173090627036&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734459&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB15187508-product&matt_product_partition_id=2387571483736&matt_target_id=aud-1966852281496:pla-2387571483736&cq_src=google_ads&cq_cmp=22090354535&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354535&gbraid=0AAAAAD93qcAzn26R504Y-7i_PmoTEh0DF&gclid=CjwKCAjw3tzHBhBREiwAlMJoUkpmQZjdy312VTfjl1hKVG8FwsIkmfOSSlx8RgwQ_Zn_F0SHNNgvZhoCjrYQAvD_BwE",
    "descricao": "Canon PowerShot G7 X Mark III",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 9163
  },
  {
    "id": 1037,
    "sku": "CHA-MOND",
    "nome": "Chaleira Elétrica Térmica CE-06 Mondial Preto/Inox 2L 127V",
    "categoria": "Casa e Cozinha",
    "subcategoria": "Eletrodomésticos",
    "quantidade": 10,
    "custoBase": 107,
    "precoMercado": 216,
    "margem": 30,
    "precoVenda": 139.1,
    "estoque": "Para Compra",
    "fornecedor": "Mondial",
    "imagem": "https://http2.mlstatic.com/D_NQ_NP_2X_772162-MLA96140381475_102025-F.webp",
    "linkCompra": "https://www.mercadolivre.com.br/chaleira-eletrica-pratic-mondial-1200w-ce-06/p/MLB8980300?pdp_filters=item_id%3AMLB2872434751&from=gshop&matt_tool=74738421&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354220&matt_ad_group_id=173090540596&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728141&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB8980300-product&matt_product_partition_id=2390507780318&matt_target_id=aud-1966852281496:pla-2390507780318&cq_src=google_ads&cq_cmp=22090354220&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354220&gbraid=0AAAAAD93qcD2uwUrl3XHdPjSHNeeBQR2-&gclid=CjwKCAjw3tzHBhBREiwAlMJoUvB5rYm6LmRZZwqbhODQ-VyttNpB-qCt64DavMxvbOdSpmDLM-MIRhoCZdgQAvD_BwE",
    "descricao": "Chaleira Elétrica Térmica CE-06 Mondial Preto/Inox 2L 127V",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 99.9,
    "dataAtualizacao": "2025-10-27T18:31:41.872Z"
  },
  {
    "id": 1038,
    "sku": "NIN-SWI-DAV",
    "nome": "Console Nintendo Switch Lite, Azul 32GB",
    "categoria": "Eletronicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 1269.77,
    "precoMercado": 1493.85,
    "margem": 30,
    "precoVenda": 1650.7,
    "estoque": "Em Estoque",
    "fornecedor": "Nintendo",
    "imagem": "https://images3.kabum.com.br/produtos/fotos/385193/console-nintendo-switch-lite-azul-hbhsbbza2_1663594729_gg.jpg",
    "linkCompra": "https://www.kabum.com.br/produto/385193/console-nintendo-switch-lite-azul-hbhsbbza2?utm_id=22436571796&gad_source=4&gad_campaignid=22436571796&gbraid=0AAAAADx-HyFg_feTiT3kYP-7Av8HmMtBd&gclid=CjwKCAjw3tzHBhBREiwAlMJoUl_f_LVMKQU3o_ugB1mc5szfH7ag_c3N9y83SSsrsLGTdZ7W8cZu2hoCErkQAvD_BwE",
    "descricao": "Console Nintendo Switch Lite, Azul 32GB",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 1299
  },
  {
    "id": 1039,
    "sku": "XBX-CTRL",
    "nome": "Controle Sem Fio Microsoft Xbox Wireless Carbon Black",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 596.7,
    "precoMercado": 702,
    "margem": 30,
    "precoVenda": 775.71,
    "estoque": "Em Estoque",
    "fornecedor": "Microsoft",
    "imagem": "https://mirandacomputacao.jetassets.com.br/produto/43587-principal.png",
    "linkCompra": "https://www.mercadolivre.com.br/controle-joystick-sem-fio-microsoft-xbox-carbon-black-preto/p/MLB17483958?pdp_filters=item_id%3AMLB4254382983&from=gshop&matt_tool=87533595&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354544&matt_ad_group_id=173090628676&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734870&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB17483958-product&matt_product_partition_id=2389820030294&matt_target_id=aud-1966852281496:pla-2389820030294&cq_src=google_ads&cq_cmp=22090354544&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354544&gbraid=0AAAAAD93qcDBSNwWEVKeapbu6TQ6HOzps&gclid=CjwKCAjw3tzHBhBREiwAlMJoUiYJS0hZu2-y1Rz7egwAZqvlwnK2B92lAaXluyCl-FuvEo75ak_6oRoCCYIQAvD_BwE",
    "descricao": "Controle Xbox Wireless Series X|S com design ergonômico, botão share e conexão Bluetooth",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 370
  },
  {
    "id": 1040,
    "sku": "PS5-DUAL",
    "nome": "Controle Sony DualSense Sem Fio PlayStation 5 Branco",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 621.35,
    "precoMercado": 731,
    "margem": 30,
    "precoVenda": 807.76,
    "estoque": "Em Estoque",
    "fornecedor": "Sony",
    "imagem": "https://images.kabum.com.br/produtos/fotos/115801/controle-sem-fio-ps5-dualsense_1598897393_gg.jpg",
    "linkCompra": "https://www.magazineluiza.com.br/controle-sony-dualsense-ps5-sem-fio-branco-3005767/p/hcf5hfh0f2/ga/otga/?seller_id=kabum&region_id=123473&utm_source=google&utm_medium=cpc&utm_term=79704&utm_campaign=google_eco_per_ven_pla_tc_apo_3p_ea-ga-tb-wea-csp&utm_content=&partner_id=79704&gclsrc=aw.ds&gad_source=4&gad_campaignid=22589506492&gbraid=0AAAAAD4zZmRWcnAbnrxsLADtyz9xSQNwm&gclid=CjwKCAjw3tzHBhBREiwAlMJoUlIkHpmWzHLAFePMDnkKU8CoOLRRHejxNfnr-SByw2LyN4ah92dNpBoCqYUQAvD_BwE",
    "descricao": "Controle DualSense PS5 com feedback háptico, gatilhos adaptativos, alto-falante e microfone",
    "especificacoes": {
      "marketplace": "Magalu",
      "prazoEntrega": ""
    },
    "precoConcorrente": 381.29
  },
  {
    "id": 1041,
    "sku": "COR-VER4",
    "nome": "Coros Vertix 2S",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 3866.65,
    "precoMercado": 4549,
    "margem": 30,
    "precoVenda": 5026.65,
    "estoque": "Sob Consulta",
    "fornecedor": "Coros",
    "imagem": "https://acdn-us.mitiendanube.com/stores/001/572/406/products/vertix2smoon-ff67eab9972b648de917528703826286-1024-1024.png",
    "linkCompra": "https://www.amazon.com.br/s?k=Coros+Vertix+2S",
    "descricao": "Coros Vertix 2S para aventuras extremas, bateria 60 dias, GPS dual-frequency",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1042,
    "sku": "COR-K70",
    "nome": "Corsair K70 RGB PRO Mechanical",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Em Estoque",
    "fornecedor": "Corsair",
    "imagem": "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/c/h/ch-9109412-na.jpg",
    "linkCompra": "https://www.kabum.com.br/produto/355925/teclado-mecanico-gamer-corsair-k70-rgb-pro-switch-cherry-mx-red-abnt2-ch-9109410-br?utm_id=22446426122&gad_source=4&gad_campaignid=22446426122&gbraid=0AAAAADx-HyHoaT7fT2vuAJgryQMMjRGSS&gclid=CjwKCAjw3tzHBhBREiwAlMJoUmbNEBojDpMJXsgc3CGfC7raB30t5Wf6EspFWp0GA02s4h9O7DykdhoC_-cQAvD_BwE",
    "descricao": "Corsair K70 RGB PRO Mechanical",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 939.99
  },
  {
    "id": 1043,
    "sku": "DEL-XPS15",
    "nome": "Dell XPS 15 9530",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 12018.15,
    "precoMercado": 14139,
    "margem": 30,
    "precoVenda": 15623.59,
    "estoque": "Sob Consulta",
    "fornecedor": "Dell",
    "imagem": "https://http2.mlstatic.com/D_Q_NP_714305-MLU77315373211_062024-O.webp",
    "linkCompra": "https://www.amazon.com.br/s?k=Dell+XPS+15+9530",
    "descricao": "Dell XPS 15 com Intel i7 13ª gen, RTX 4050, tela 3.5K OLED, design premium",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1044,
    "sku": "DJI-ACT4",
    "nome": "DJI Action 4",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 2098.65,
    "precoMercado": 2469,
    "margem": 30,
    "precoVenda": 2728.25,
    "estoque": "Em Estoque",
    "fornecedor": "DJI",
    "imagem": "https://cdn.awsli.com.br/2500x2500/2660/2660613/produto/284690885/ca-mera-dji-action-4-standard-combo-cor-preto-premier-drones-iiv00ywb7m.png",
    "linkCompra": "https://www.mercadolivre.com.br/cmera-cinza-impermeavel-dji-osmo-action-4-standard-combo-4k120-fps/p/MLB27258769?pdp_filters=item_id%3AMLB4068899989&from=gshop&matt_tool=31485049&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354244&matt_ad_group_id=173090553316&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728933&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB27258769-product&matt_product_partition_id=2387571483776&matt_target_id=aud-1966852281496:pla-2387571483776&cq_src=google_ads&cq_cmp=22090354244&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354244&gbraid=0AAAAAD93qcACjR8rBVeYO-6aGeodIfg4n&gclid=CjwKCAjw3tzHBhBREiwAlMJoUtWDAMgPX7VWmuk9yLTkjm9CJiG3w1QarN8EJbWx1YnJwTCGQEdMERoCcikQAvD_BwE",
    "descricao": "DJI Action 4 com sensor 1/1.3\", visão noturna 4K, resistência 18m, bateria 160min",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 2473
  },
  {
    "id": 1045,
    "sku": "DJI-AIR3",
    "nome": "DJI Air 3",
    "categoria": "Eletrônicos",
    "subcategoria": "Drones",
    "quantidade": 10,
    "custoBase": 7147.65,
    "precoMercado": 8409,
    "margem": 30,
    "precoVenda": 9291.94,
    "estoque": "Em Estoque",
    "fornecedor": "DJI",
    "imagem": "https://loja.superimportadora.com.br/wp-content/uploads/2023/05/drone-dji-air-3.jpeg",
    "linkCompra": "https://www.mercadolivre.com.br/drone-dji-air-3s-dji-rc-n3-cor-cinza/p/MLB51910279?pdp_filters=item_id%3AMLB4261737605&from=gshop&matt_tool=61921241&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354535&matt_ad_group_id=173090627196&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734462&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB51910279-product&matt_product_partition_id=2389830994041&matt_target_id=aud-1966852281496:pla-2389830994041&cq_src=google_ads&cq_cmp=22090354535&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354535&gbraid=0AAAAAD93qcAzn26R504Y-7i_PmoTEh0DF&gclid=CjwKCAjw3tzHBhBREiwAlMJoUlQtBupNCIXvS-2SaHf7sS1vTDby_VpbzvoVaTgvr8zCUEa-_kYOvxoCy3UQAvD_BwE",
    "descricao": "DJI Air 3",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "15 DIAS"
    },
    "precoConcorrente": 9400
  },
  {
    "id": 1046,
    "sku": "DJI-AVT2",
    "nome": "DJI Avata 2 FPV Drone",
    "categoria": "Eletrônicos",
    "subcategoria": "Drones",
    "quantidade": 10,
    "custoBase": 6612.15,
    "precoMercado": 7779,
    "margem": 30,
    "precoVenda": 8595.8,
    "estoque": "Em Estoque",
    "fornecedor": "DJI",
    "imagem": "https://loja.superimportadora.com.br/wp-content/uploads/2024/04/Drone-DJI-Avata-2-Fly-More-Combo-1-Bateria.jpeg",
    "linkCompra": "https://www.mercadolivre.com.br/drone-dji-avata-2-fpv-fly-more-combo-1x-bateria-cor-cinza/p/MLB36219689?pdp_filters=item_id%3AMLB4248570721&from=gshop&matt_tool=61921241&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354535&matt_ad_group_id=173090627196&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734462&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB36219689-product&matt_product_partition_id=2389836728099&matt_target_id=aud-1966852281496:pla-2389836728099&cq_src=google_ads&cq_cmp=22090354535&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354535&gbraid=0AAAAAD93qcAzn26R504Y-7i_PmoTEh0DF&gclid=CjwKCAjw3tzHBhBREiwAlMJoUrHUX2LHQJdRMVl1IwvkShUNu1Qm3vDNdPCKFhhfqR1zbqn83MS4UxoCs30QAvD_BwE",
    "descricao": "DJI Avata 2 FPV Drone",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 8900
  },
  {
    "id": 1047,
    "sku": "DJI-MIC2",
    "nome": "DJI Mic 2",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 1767.15,
    "precoMercado": 2079,
    "margem": 30,
    "precoVenda": 2297.3,
    "estoque": "Em Estoque",
    "fornecedor": "DJI",
    "imagem": "https://emania.vteximg.com.br/arquivos/ids/226798",
    "linkCompra": "https://www.mercadolivre.com.br/microfone-dji-mic-2-1-tx-microfone-br-dji114-cor-cinza/p/MLB35764760?pdp_filters=item_id%3AMLB5414582446&from=gshop&matt_tool=37062734&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354037&matt_ad_group_id=173090524956&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882726791&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB35764760-product&matt_product_partition_id=2391704278537&matt_target_id=aud-1966852281496:pla-2391704278537&cq_src=google_ads&cq_cmp=22090354037&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354037&gbraid=0AAAAAD93qcCZuLVkqDCsof6vcbldkYBO3&gclid=CjwKCAjw3tzHBhBREiwAlMJoUrpS2ZUg7h2Iz58w5T-ajG_RT13Ay7KjjVo2MmwhdzlwIW4FL806vhoCE5EQAvD_BwE",
    "descricao": "DJI Mic 2",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 931
  },
  {
    "id": 1048,
    "sku": "DJI-MIN4P",
    "nome": "DJI Mini 4 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Drones",
    "quantidade": 10,
    "custoBase": 5439.15,
    "precoMercado": 6399,
    "margem": 30,
    "precoVenda": 7070.89,
    "estoque": "Em Estoque",
    "fornecedor": "DJI",
    "imagem": "https://emania.vteximg.com.br/arquivos/ids/227347",
    "linkCompra": "https://www.mercadolivre.com.br/mini-drone-dji-mini-4-pro-single-com-cmera-4k-mini-4-pro-58ghz-1-bateria/p/MLB38316754?pdp_filters=item_id%3AMLB4240255293&from=gshop&matt_tool=61921241&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354535&matt_ad_group_id=173090627196&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734462&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB38316754-product&matt_product_partition_id=2389830994001&matt_target_id=aud-1966852281496:pla-2389830994001&cq_src=google_ads&cq_cmp=22090354535&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354535&gbraid=0AAAAAD93qcAzn26R504Y-7i_PmoTEh0DF&gclid=CjwKCAjw3tzHBhBREiwAlMJoUviskKXnq5ETS5nffrT-DuiUUv2mojTHoTknH4QcezY7Q11EeVLAJRoCwCQQAvD_BwE",
    "descricao": "DJI Mini 4 Pro drone compacto sub-249g, 4K HDR, omnidirecional, bateria 34min",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 6600
  },
  {
    "id": 1049,
    "sku": "DJI-POC3",
    "nome": "DJI Pocket 3",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 2761.65,
    "precoMercado": 3249,
    "margem": 30,
    "precoVenda": 3590.15,
    "estoque": "Em Estoque",
    "fornecedor": "DJI",
    "imagem": "https://horizonplay.fbitsstatic.net/img/p/camera-estabilizadora-dji-osmo-pocket-3-151971/338572.jpg?w=670&h=670&v=202508202143",
    "linkCompra": "https://shopee.com.br/product/1571899997/21298263683?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDTGdJbW9OUjZ6M2gzVmR1ZjVFaUNDUmJxNDdMN1N2MEVwOWR0c29WazRuOWtoWm9KNGlWL3dreE1vN3pUNHd3TXkxdnk4VXlxWHh0Q1g1WWt5ZytjRTBzTG5Db0xYc3EveFRBcU5OcGJsa0RRPT0&gad_source=4&gad_campaignid=21900060165&gbraid=0AAAAACoEtRlzqjHtJ5uralJTHQsd6gJBP&gclid=CjwKCAjw3tzHBhBREiwAlMJoUpyeRpQLTwZMyJ7-t644Ml3HyyXye0_Q_KjkiQjMoLYy48xBRg_7IRoC-KMQAvD_BwE",
    "descricao": "DJI Pocket 3 com sensor 1\" CMOS, gimbal 3 eixos, gravação 4K 120fps, tela rotativa",
    "especificacoes": {
      "marketplace": "Shopee",
      "prazoEntrega": "15 DIAS"
    },
    "precoConcorrente": 3954.99
  },
  {
    "id": 1050,
    "sku": "DJI-RS3",
    "nome": "DJI RS 3 Gimbal",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 2872.15,
    "precoMercado": 3379,
    "margem": 30,
    "precoVenda": 3733.8,
    "estoque": "Em Estoque",
    "fornecedor": "DJI",
    "imagem": "https://djibrasil.vtexassets.com/arquivos/ids/193432-800-800?v=638882884562800000&width=800&height=800&aspect=true",
    "linkCompra": "https://www.mercadolivre.com.br/estabilizador-dji-rs-3-mini-cmera-ronin-gimbal-serie-rs3-cor-black/p/MLB27124140?pdp_filters=item_id%3AMLB4256069487&from=gshop&matt_tool=31485049&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354244&matt_ad_group_id=173090553276&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882728930&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB27124140-product&matt_product_partition_id=2387571483016&matt_target_id=aud-1966852281496:pla-2387571483016&cq_src=google_ads&cq_cmp=22090354244&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354244&gbraid=0AAAAAD93qcACjR8rBVeYO-6aGeodIfg4n&gclid=CjwKCAjw3tzHBhBREiwAlMJoUh9sRfxqe8bGgsWtIBeLjKVKWPpxuqDbWyUp8QnjYMgPtYQU138tVxoCmg4QAvD_BwE",
    "descricao": "DJI RS 3 gimbal 3 eixos, carga 3kg, tela OLED touch 1.8\", ActiveTrack 3.0",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7"
    },
    "precoConcorrente": 2394
  },
  {
    "id": 1051,
    "sku": "ECO-THER",
    "nome": "Ecobee SmartThermostat Premium",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 1767.15,
    "precoMercado": 2079,
    "margem": 30,
    "precoVenda": 2297.3,
    "estoque": "Em Estoque",
    "fornecedor": "Ecobee",
    "imagem": "https://smecomarketplace.com/cdn/shop/files/ecobeesmartthermostatpremium.webp?v=1741900169&width=1366",
    "linkCompra": "https://www.carrefour.com.br/termostato-inteligente-programavel-wifi-ecobee-smartthermostat-mp951842895/p?utm_medium=sem&utm_source=google_pmax_3p&utm_campaign=3p_performancemax_todos_os_produtos&gad_source=4&gad_campaignid=17931135269&gbraid=0AAAAADjinolM5nnGgvbnbNauIjj3sAoW2&gclid=CjwKCAjw3tzHBhBREiwAlMJoUgqpUxRFjS03f3esqMcPLI6kdeUsRjQo1v575fW3MhgdIknql2Z1AhoC7ZgQAvD_BwE",
    "descricao": "Ecobee Premium termostato inteligente, sensor remoto, Alexa integrada, economia energia",
    "especificacoes": {
      "marketplace": "Carrefour",
      "prazoEntrega": "20 DIAS"
    },
    "precoConcorrente": 1371.45
  },
  {
    "id": 1052,
    "sku": "EDI-NB2P",
    "nome": "Edifier NeoBuds Pro 2",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 772.65,
    "precoMercado": 909,
    "margem": 30,
    "precoVenda": 1004.45,
    "estoque": "Em Estoque",
    "fornecedor": "Edifier",
    "imagem": "https://igormiranda.com.br/wp-content/uploads/2023/12/Edifier-Neobuds-Pro-2-fone-de-ouvido-00.jpg",
    "linkCompra": "https://edifier.com.br/fone-tws1-pro-2-cancelamento-de-ruido-inteligente.html?srsltid=AfmBOopSLVgQ7JA0HF9V9dYHoC_79taTrQYrZhM4OP3EMpplJhICaCtsuWM",
    "descricao": "Edifier NeoBuds Pro 2 com LDAC, ANC -45dB, drivers coaxiais 10mm+6mm",
    "especificacoes": {
      "marketplace": "Edifier",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 399
  },
  {
    "id": 1053,
    "sku": "EPO-2250",
    "nome": "Epson Home Cinema 2250 3LCD",
    "categoria": "Eletrônicos",
    "subcategoria": "Projetores",
    "quantidade": 10,
    "custoBase": 5524.15,
    "precoMercado": 6499,
    "margem": 30,
    "precoVenda": 7181.39,
    "estoque": "Sob Consulta",
    "fornecedor": "Epson",
    "imagem": "https://mediaserver.goepson.com/ImConvServlet/imconv/e1f6faec7dc5a1d31b1d844c2b7205f034d11cf5/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=HC2250-V11HA87020_top-right_690x460",
    "linkCompra": "https://www.amazon.com.br/s?k=Epson+Home+Cinema+2250+3LCD",
    "descricao": "Epson Home Cinema 2250 3LCD",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1054,
    "sku": "EVE-ENE",
    "nome": "Eve Energy Smart Plug",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 275.4,
    "precoMercado": 324,
    "margem": 30,
    "precoVenda": 358.02,
    "estoque": "Sob Consulta",
    "fornecedor": "Eve",
    "imagem": "https://www.evehome.com/sites/default/files/2023-03/Eve-Energy-US-box-matter.png",
    "linkCompra": "https://www.amazon.com.br/s?k=Eve+Energy+Smart+Plug",
    "descricao": "Eve Energy tomada inteligente Thread, monitoramento consumo, agendamento, Apple Home",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1055,
    "sku": "FIT-CH6",
    "nome": "Fitbit Charge 6",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Em Estoque",
    "fornecedor": "Fitbit",
    "imagem": "https://s2-techtudo.glbimg.com/7Ug73bQXUkHYO9pDIzQC_u98Boc=/0x0:1200x675/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/X/p/CCGKIzQsACeX0pxrTEHg/fit-bit-charge6-capa.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/fitbit-smartband-charge-6-104-cor-bege/p/MLB34116162?pdp_filters=item_id%3AMLB3639889133&from=gshop&matt_tool=54660454&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354553&matt_ad_group_id=173090632956&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734918&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB34116162-product&matt_product_partition_id=2389562704490&matt_target_id=aud-1966852281496:pla-2389562704490&cq_src=google_ads&cq_cmp=22090354553&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354553&gbraid=0AAAAAD93qcD4PtqwFFSNnQCU7CP4jFzYk&gclid=CjwKCAjw3tzHBhBREiwAlMJoUo5-k5aELFO20T17EbnoCGGh9WVCntE70yq14-EhZFGTfLh3zURdvhoCg9gQAvD_BwE",
    "descricao": "Fitbit Charge 6 com GPS integrado, monitoramento de stress, bateria 7 dias",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 1066
  },
  {
    "id": 1056,
    "sku": "FON-BT-ANC",
    "nome": "Fone de Ouvido Bluetooth com Cancelamento de Ruído Ativo",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 1853,
    "precoMercado": 2180,
    "margem": 30,
    "precoVenda": 2408.9,
    "estoque": "Em Estoque",
    "fornecedor": "Diversos",
    "imagem": "https://mirandacomputacao.jetassets.com.br/produto/multifotos/49524-7_49524.jpg",
    "linkCompra": "https://www.amazon.com.br/JBL-JBLTFLEX2BLK-Fone-Bluetooth-JBLTFLEX2BLKBR/dp/B0DK3TBCRD/ref=asc_df_B0DK3TBCRD?mcid=ea041152efae39719e17ca0308873785&tag=googleshopp00-20&linkCode=df0&hvadid=709964502911&hvpos=&hvnetw=g&hvrand=6871104886736230999&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2372907575454&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Fone de Ouvido Bluetooth com Cancelamento de Ruído Ativo",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 469.99
  },
  {
    "id": 1057,
    "sku": "JBL-OSS",
    "nome": "Fone de Ouvido JBL com Condução Óssea",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 969.85,
    "precoMercado": 1141,
    "margem": 30,
    "precoVenda": 1260.81,
    "estoque": "Em Estoque",
    "fornecedor": "JBL",
    "imagem": "https://http2.mlstatic.com/D_NQ_NP_2X_604011-MLB94967621353_102025-T-fone-de-ouvido-sem-fio-bluetooth-conduco-ossea-headphone.webp",
    "linkCompra": "https://www.mercadolivre.com.br/fone-xiaomi-inducao-ossea-sem-fio-bluetooth-resistente-agua/up/MLBU2362656539?pdp_filters=item_id:MLB3880555115",
    "descricao": "JBL fone com tecnologia de condução óssea, ideal para esportes mantendo consciência do ambiente",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 210.5
  },
  {
    "id": 1058,
    "sku": "JBL-WAVE",
    "nome": "Fone JBL Wave Buds",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 331.5,
    "precoMercado": 390,
    "margem": 30,
    "precoVenda": 430.95,
    "estoque": "Em Estoque",
    "fornecedor": "JBL Brasil",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/418505/xlarge/Fone-De-Ouvido-Harman-JBL-Wave-Buds-Bluetooth-Tws-Preto_1760643218.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/fone-de-ouvido-wave-buds-sem-fio-branco-jbl/p/MLB26205897?pdp_filters=item_id%3AMLB4238617545&from=gshop&matt_tool=54660454&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354553&matt_ad_group_id=173090632796&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734915&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB26205897-product&matt_product_partition_id=2389837591819&matt_target_id=aud-1966852281496:pla-2389837591819&cq_src=google_ads&cq_cmp=22090354553&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354553&gbraid=0AAAAAD93qcD4PtqwFFSNnQCU7CP4jFzYk&gclid=CjwKCAjw3tzHBhBREiwAlMJoUiKlPiEVslW70IF_LwsOyFTs14s1Rc16padlYtlYsipdOktFRwDwIRoCTxwQAvD_BwE",
    "descricao": "Fone de ouvido sem fio JBL com graves potentes e 8h de bateria",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 226
  },
  {
    "id": 1059,
    "sku": "FUJ-X100V",
    "nome": "Fujifilm X100V",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 8703.15,
    "precoMercado": 10239,
    "margem": 30,
    "precoVenda": 11314.09,
    "estoque": "Em Estoque",
    "fornecedor": "Fujifilm",
    "imagem": "https://www.cameralabs.com/wp-content/uploads/2023/12/fujifilm-x100v-long-term-test-header-1-1920x1080.jpg",
    "linkCompra": "https://www.amazon.com.br/FUJIFILM-16821913-Fujifilm-X100VI-preto/dp/B0CW1KVSVF/ref=asc_df_B0CW1KVSVF?mcid=865218d0af2a33dca963d97684803325&tag=googleshopp00-20&linkCode=df0&hvadid=709964503127&hvpos=&hvnetw=g&hvrand=7140691475767575807&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2357635115677&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Fujifilm X100V câmera compacta premium, sensor X-Trans IV, lente 23mm f/2, design retrô",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 15499
  },
  {
    "id": 1060,
    "sku": "GAR-FR165",
    "nome": "Garmin Forerunner 165 GPS Running Watch",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 3379.6,
    "precoMercado": 3976,
    "margem": 30,
    "precoVenda": 4393.48,
    "estoque": "Em Estoque",
    "fornecedor": "Garmin",
    "imagem": "https://garmin.vtexassets.com/arquivos/ids/160808/010-02863-20.1.png?v=638451724530570000",
    "linkCompra": "https://www.mercadolivre.com.br/relogio-garmin-forerunner-165-com-monitor-cardiaco-de-pulso-e-gps-cor-cinza/p/MLB35497571?pdp_filters=item_id%3AMLB5629164194&from=gshop&matt_tool=96040271&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193909&matt_ad_group_id=174661987364&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914181381&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB35497571-product&matt_product_partition_id=2389562704250&matt_target_id=aud-1966852281496:pla-2389562704250&cq_src=google_ads&cq_cmp=22090193909&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193909&gbraid=0AAAAAD93qcA8JV7igp3Yx9wibPfJSSFAE&gclid=CjwKCAjw3tzHBhBREiwAlMJoUlCE_fH6jeGFp8gRhpbbLEONv2bBUfh4KfU16gnJ1B5TbAbYUxAPHhoC9NIQAvD_BwE",
    "descricao": "Garmin Forerunner 165 com GPS, monitor cardíaco, treinos adaptativos e bateria 11 dias",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 1879
  },
  {
    "id": 1061,
    "sku": "GAR-FR965",
    "nome": "Garmin Forerunner 965",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 4419.15,
    "precoMercado": 5199,
    "margem": 30,
    "precoVenda": 5744.89,
    "estoque": "Em Estoque",
    "fornecedor": "Garmin",
    "imagem": "https://horizonplay.fbitsstatic.net/img/p/smartwatch-garmin-forerunner-965-010-02809-00-com-gps-bluetooth-preto-150726/337320-1.jpg?w=670&h=670&v=202502061445",
    "linkCompra": "https://www.mercadolivre.com.br/garmin-forerunner-965-sport/p/MLB28767913?pdp_filters=item_id%3AMLB5670532270&from=gshop&matt_tool=96040271&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193909&matt_ad_group_id=174661987364&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914181381&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB28767913-product&matt_product_partition_id=2389562704250&matt_target_id=aud-1966852281496:pla-2389562704250&cq_src=google_ads&cq_cmp=22090193909&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193909&gbraid=0AAAAAD93qcA8JV7igp3Yx9wibPfJSSFAE&gclid=CjwKCAjw3tzHBhBREiwAlMJoUqdxom5TcXpLCLgkgHYooPfOg3B4qkqNFxxoG5xVpnOel2HW9b9qWhoCF1gQAvD_BwE",
    "descricao": "Garmin Forerunner 965 com tela AMOLED, mapas, training readiness, bateria 23 dias",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 3879
  },
  {
    "id": 1062,
    "sku": "PWB-20K",
    "nome": "Geonav Power Bank Carregador Portátil 20.000mAh",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 265.2,
    "precoMercado": 312,
    "margem": 30,
    "precoVenda": 344.76,
    "estoque": "Em Estoque",
    "fornecedor": "Geonav",
    "imagem": "https://mirandacomputacao.jetassets.com.br/produto/47805-principal.png",
    "linkCompra": "https://www.mercadolivre.com.br/carregador-portatil-20000mah-com-carregamento-rapido-geonav/p/MLB35303481?pdp_filters=item_id%3AMLB4239597839&from=gshop&matt_tool=91562990&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193891&matt_ad_group_id=174661986404&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914181150&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB35303481-product&matt_product_partition_id=2387641353726&matt_target_id=aud-1966852281496:pla-2387641353726&cq_src=google_ads&cq_cmp=22090193891&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193891&gbraid=0AAAAAD93qcAbr94ekuco6N18BibxqKup5&gclid=CjwKCAjw3tzHBhBREiwAlMJoUigSlaiWNmDM2BiCBdYADWupk5tDqhQ-s_dswKedMuzlE3DUOp3OgBoCX3AQAvD_BwE",
    "descricao": "Power bank 20.000mAh com USB-A 18W e USB-C 20W, carregamento rápido para múltiplos dispositivos",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 179
  },
  {
    "id": 1063,
    "sku": "GOO-NEST",
    "nome": "Google Nest Hub (2ª Geração)",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 662.15,
    "precoMercado": 779,
    "margem": 30,
    "precoVenda": 860.79,
    "estoque": "Em Estoque",
    "fornecedor": "Google",
    "imagem": "https://www.multitek.ao/wp-content/uploads/2025/08/Google-Nest-Hub-7-Smart-Display-2nd-Gen.webp",
    "linkCompra": "https://www.mercadolivre.com.br/google-nest-mini-2nd-gen-chalk/p/MLB15541143?product_trigger_id=MLB15541142&picker=true&quantity=1",
    "descricao": "Nest Hub 2ª Gen com tela 7\", monitoramento de sono, controle Matter, Google Assistant",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 949
  },
  {
    "id": 1064,
    "sku": "GOO-P8P",
    "nome": "Google Pixel 8 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Smartphones",
    "quantidade": 10,
    "custoBase": 6629.15,
    "precoMercado": 7799,
    "margem": 30,
    "precoVenda": 8617.9,
    "estoque": "Em Estoque",
    "fornecedor": "Google Store",
    "imagem": "https://images.tcdn.com.br/img/img_prod/625110/google_pixel_8_pro_256gb_bay_blue_desbloqueado_7231_1_03f68466aa1bb77eb92ac11d1a877a12.jpg",
    "linkCompra": "https://www.kabum.com.br/produto/535159/smartphone-google-pixel-8-pro-128gb-bay-blue?srsltid=AfmBOoqhwgApRw0fE2TCHOEnaRwlKPe5SbswFdH05ORB4D32YsJ9g62EPZg",
    "descricao": "Pixel 8 Pro com Google Tensor G3, câmera com IA, tela LTPO 120Hz",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "30 DIAS"
    },
    "precoConcorrente": 5545
  },
  {
    "id": 1065,
    "sku": "GOP-12",
    "nome": "GoPro HERO 12 Black",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 3076.15,
    "precoMercado": 3619,
    "margem": 30,
    "precoVenda": 3999,
    "estoque": "Em Estoque",
    "fornecedor": "GoPro",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/485781/xlarge/Gopro-Hero-12-Black-27MP-5-3K-Bluetooth-LCD-Frontal-Hypersmooth-6-0-Bateria-Enduro-AutoBoost-Prova-D-gua-At-10-Metros-Preto_1752178479.jpg",
    "linkCompra": "https://www.magazineluiza.com.br/gopro-hero12-black-a-prova-dagua-5-3k60-27mp-video-foto-hdr-hypersmooth-6-0-trava-horiz-360o-live-webcam-audio-p-bluetooth-bateria-enduro-quik/p/dj9gca2eh9/cf/gopr/?&seller_id=inpower4&utm_source=google&utm_medium=cpc&utm_term=82074&utm_campaign=google_eco_per_ven_pla_ca_sor_teste-full-exp_3p_ci-cj-csp&utm_content=&partner_id=82074&gclsrc=aw.ds&gad_source=4&gad_campaignid=23097251705&gbraid=0AAAAAD4zZmQuYG2vDKUCNixr0YJa-m5jU&gclid=CjwKCAjw3tzHBhBREiwAlMJoUubJ8Ud5C_flJV9n2tkYP6k5Ayx0eoUtyhKBqGmkZ6LqVHArcEw0hBoCiDQQAvD_BwE",
    "descricao": "GoPro HERO 12 Black com HyperSmooth 6.0, HDR, bateria Enduro, à prova d'água 10m",
    "especificacoes": {
      "marketplace": "Magalu",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 2319.9
  },
  {
    "id": 1066,
    "sku": "HOL-X1",
    "nome": "HolyStone HS720E 4K GPS Drone",
    "categoria": "Eletrônicos",
    "subcategoria": "Drones",
    "quantidade": 10,
    "custoBase": 1435.65,
    "precoMercado": 1689,
    "margem": 30,
    "precoVenda": 1866.34,
    "estoque": "Sob Consulta",
    "fornecedor": "HolyStone",
    "imagem": "https://http2.mlstatic.com/D_Q_NP_793651-MLA50527876358_062022-O.webp",
    "linkCompra": "https://www.amazon.com.br/s?k=HolyStone+HS720E+4K+GPS+Drone",
    "descricao": "HolyStone HS720E 4K GPS Drone",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1067,
    "sku": "HON-X90",
    "nome": "Honor Earbuds X7 Branco",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 441.15,
    "precoMercado": 519,
    "margem": 30,
    "precoVenda": 573.5,
    "estoque": "Em Estoque",
    "fornecedor": "Honor",
    "imagem": "https://www.honor.com/content/dam/honor/common/product-list/honor-choice/lchse-x7i-earbuds/lchse-x7i-earbuds-w.png",
    "linkCompra": "https://www.mercadolivre.com.br/fones-de-ouvido-sem-fio-honor-choice-earbuds-x7-lite-brancos-cor-branca/p/MLB46368483?pdp_filters=item_id%3AMLB5761441258&from=gshop&matt_tool=54660454&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354553&matt_ad_group_id=173090632796&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734915&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB46368483-product&matt_product_partition_id=2391999850235&matt_target_id=aud-1966852281496:pla-2391999850235&cq_src=google_ads&cq_cmp=22090354553&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354553&gbraid=0AAAAAD93qcD4PtqwFFSNnQCU7CP4jFzYk&gclid=CjwKCAjw3tzHBhBREiwAlMJoUmX61ZLJvNftmWEA79pu1Pj5u8oBmQFZwOkATiIwqEteoZhBVhlOeRoCSLUQAvD_BwE",
    "descricao": "Honor Earbuds X7 Branco",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 154
  },
  {
    "id": 1068,
    "sku": "HP-SPEC",
    "nome": "HP Spectre x360 14",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 8788.15,
    "precoMercado": 10339,
    "margem": 30,
    "precoVenda": 11424.59,
    "estoque": "Sob Consulta",
    "fornecedor": "HP",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/460552/Notebooks-Hp-Spectre-Intel-I7-Tela-Touch-RAM-16GB-SSD-4tb-14-Polegadas-13-Gera-o_1709751500_gg.jpg",
    "linkCompra": "https://www.amazon.com.br/s?k=HP+Spectre+x360+14",
    "descricao": "HP Spectre x360 14",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1069,
    "sku": "HUA-PAD",
    "nome": "Huawei MatePad Pro 13.2",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 4640.15,
    "precoMercado": 5459,
    "margem": 30,
    "precoVenda": 6032.19,
    "estoque": "Sob Consulta",
    "fornecedor": "Huawei",
    "imagem": "https://t2.tudocdn.net/684984?w=824&h=494",
    "linkCompra": "https://www.amazon.com.br/s?k=Huawei+MatePad+Pro+132",
    "descricao": "Huawei MatePad Pro 13.2",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1070,
    "sku": "HUA-WF5",
    "nome": "Huawei Watch Fit 4",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 883.15,
    "precoMercado": 1039,
    "margem": 30,
    "precoVenda": 1148.1,
    "estoque": "Em Estoque",
    "fornecedor": "Huawei",
    "imagem": "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-fit4/images/reasons/huawei-watch-fit4-lightweight.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/smartwatch-huawei-watch-fit-4-modos-esportivos-aprimorados-assistente-de-bem-estar-emocional-bateria-com-autonomia-de-ate-10-dias-compativel-com-ios-e-android-preto/p/MLB50181830?pdp_filters=item_id%3AMLB5434254832&from=gshop&matt_tool=96040271&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193909&matt_ad_group_id=174661987364&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914181381&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB50181830-product&matt_product_partition_id=2389562704250&matt_target_id=aud-1966852281496:pla-2389562704250&cq_src=google_ads&cq_cmp=22090193909&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193909&gbraid=0AAAAAD93qcA8JV7igp3Yx9wibPfJSSFAE&gclid=CjwKCAjw3tzHBhBREiwAlMJoUojdDRMThb38LMSLpNvPOTVF3xYaSkmWtXk4rgJQfKDeuPqq-Vl4whoCIqkQAvD_BwE",
    "descricao": "Huawei Watch Fit 4",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 949
  },
  {
    "id": 1071,
    "sku": "HYP-CLOUD",
    "nome": "HyperX Cloud III Wireless",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Em Estoque",
    "fornecedor": "HyperX",
    "imagem": "https://images.kabum.com.br/produtos/fotos/536015/headset-gamer-sem-fio-hyperx-cloud-iii-deiver-53mm-wireless-multi-plataforma-preto-77z45aa_1714047659_gg.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/auscultador-gamer-wireless-hyperx-cloud-iii-preto-cor-preto/p/MLB34820313?pdp_filters=item_id%3AMLB4239597809&from=gshop&matt_tool=54660454&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354553&matt_ad_group_id=173090632796&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734915&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB34820313-product&matt_product_partition_id=2389837591819&matt_target_id=aud-1966852281496:pla-2389837591819&cq_src=google_ads&cq_cmp=22090354553&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354553&gbraid=0AAAAAD93qcD4PtqwFFSNnQCU7CP4jFzYk&gclid=CjwKCAjw3tzHBhBREiwAlMJoUpzPkcEjgFCIlbTXDNZtTy7VFcMbSzIXTG4DVGCGrL21-FiWLGz31BoCtQIQAvD_BwE",
    "descricao": "HyperX Cloud III Wireless",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 692
  },
  {
    "id": 1072,
    "sku": "INS-GO3",
    "nome": "Insta360 GO 3",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 1877.65,
    "precoMercado": 2209,
    "margem": 30,
    "precoVenda": 2440.94,
    "estoque": "Em Estoque",
    "fornecedor": "Insta360",
    "imagem": "https://t.ctcdn.com.br/3SctqG5mv7gg0zODBA9Og10nzd4=/1024x576/smart/i758660.jpeg",
    "linkCompra": "https://www.amazon.com.br/Insta360-GO-min%C3%BAscula-m%C3%A3os-livres-estabiliza%C3%A7%C3%A3o/dp/B0D3WLV9Q1/ref=asc_df_B0D3WLV9Q1?mcid=3a3a2fce7a0636e4b4904888fa1dfa28&tag=googleshopp00-20&linkCode=df0&hvadid=709964502908&hvpos=&hvnetw=g&hvrand=11253276208381995804&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2317318071031&language=pt_BR&gad_source=4&th=1",
    "descricao": "Insta360 GO 3",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "30 DIAS"
    },
    "precoConcorrente": 2797
  },
  {
    "id": 1073,
    "sku": "INS-X3",
    "nome": "Insta360 X3",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 2651.15,
    "precoMercado": 3119,
    "margem": 30,
    "precoVenda": 3446.5,
    "estoque": "Em Estoque",
    "fornecedor": "Insta360",
    "imagem": "https://res.insta360.com/static/infr_base/6d457e9ec77767a75eeaaa0e4e2e8bf1/kv_mob.jpg",
    "linkCompra": "https://www.amazon.com.br/Insta360-X3-resistente-estabiliza%C3%A7%C3%A3o-Streaming/dp/B0B9H572LC/ref=asc_df_B0B9H572LC?mcid=9c45865a79ce34a5b9d94817d8c10858&tag=googleshopp00-20&linkCode=df0&hvadid=709857070209&hvpos=&hvnetw=g&hvrand=4537693511721250104&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-1751375753683&language=pt_BR&gad_source=4&th=1",
    "descricao": "Insta360 X3",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "20 DIAS"
    },
    "precoConcorrente": 2348
  },
  {
    "id": 1074,
    "sku": "IPD-AIR11",
    "nome": "iPad Air 11\" M2",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 5303.15,
    "precoMercado": 6239,
    "margem": 30,
    "precoVenda": 6894.09,
    "estoque": "Em Estoque",
    "fornecedor": "Apple",
    "imagem": "https://cdn.awsli.com.br/2500x2500/2549/2549769/produto/270351069/prancehta-16-l3irzlxzx9.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/apple-ipad-air-11--m2-wifi-128gb-roxo-a2902-2024/up/MLBU3173136963?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id:MLB4062095273",
    "descricao": "iPad Air 11\" M2",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "20 DIAS"
    },
    "precoConcorrente": 5199.99
  },
  {
    "id": 1075,
    "sku": "APL-IPA-DAV",
    "nome": "Ipad Mini 7 128gb Modelo A17 Pro 2024 rosa",
    "categoria": "Eletronicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 3434.93,
    "precoMercado": 4041.1,
    "margem": 30,
    "precoVenda": 4465.42,
    "estoque": "Em Estoque",
    "fornecedor": "Apple",
    "imagem": "https://carrefourbr.vtexassets.com/arquivos/ids/181495847/image-2.jpg?v=638696373606400000",
    "linkCompra": "https://www.carrefour.com.br/apple-ipad-mini-7-wi-fi-128gb-modelo-a17-pro-2024-inteligencia-apple-mp950012691/p",
    "descricao": "Ipad Mini 7 128gb Modelo A17 Pro 2024 rosa",
    "especificacoes": {
      "marketplace": "Carrefour",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 3514
  },
  {
    "id": 1076,
    "sku": "IPD-PRO13",
    "nome": "iPad Pro 13\" M4",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 8703.15,
    "precoMercado": 10239,
    "margem": 30,
    "precoVenda": 11314.09,
    "estoque": "Em Estoque",
    "fornecedor": "Apple",
    "imagem": "https://www.goimports.com.br/image/catalog/0%20novos%20ipa/ipad-pro-finish-select-202405-11inch-silver_AV1.png",
    "linkCompra": "https://www.mercadolivre.com.br/apple-ipad-pro-13-wi-fi-256-gb-prateado-m4/p/MLB37903245?pdp_filters=item_id%3AMLB5465229268&from=gshop&matt_tool=61921241&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354535&matt_ad_group_id=173090632476&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734705&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB37903245-product&matt_product_partition_id=2389562549930&matt_target_id=aud-1966852281496:pla-2389562549930&cq_src=google_ads&cq_cmp=22090354535&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354535&gbraid=0AAAAAD93qcAzn26R504Y-7i_PmoTEh0DF&gclid=CjwKCAjw3tzHBhBREiwAlMJoUuzyJ6r9soWhrgmtvYfBfrTE4OLAXdHJbHkqyDJf1YOCfEnHPsFBORoChcEQAvD_BwE",
    "descricao": "iPad Pro 13\" M4",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "20 DIAS"
    },
    "precoConcorrente": 11804.99
  },
  {
    "id": 1077,
    "sku": "IPH-16PM",
    "nome": "iPhone 16 Pro Max 256GB",
    "categoria": "Eletrônicos",
    "subcategoria": "Smartphones",
    "quantidade": 10,
    "custoBase": 0.85,
    "precoMercado": 1,
    "margem": 30,
    "precoVenda": 1.1,
    "estoque": "Em Estoque",
    "fornecedor": "Apple Store",
    "imagem": "https://cdn.awsli.com.br/2500x2500/2757/2757071/produto/319224467/1_aemywx3beabnz_prd_1500_2-jpg-qv2iefx9m0.webp",
    "linkCompra": "https://www.carrefour.com.br/iphone-16-pro-max-256gb-e-sim-5g-tela-6-9-titanio-preto-mp939570260/p?utm_medium=sem&utm_source=google_pmax_3p&utm_campaign=3p_performancemax_Eletro_Apostas3p&gad_source=4&gad_campaignid=21012471034&gbraid=0AAAAADjinolCOPmAaASNxueFXw3CFR5Py&gclid=CjwKCAjw3tzHBhBREiwAlMJoUiiwsXg8fhDsaSbV5wjaVEvCOtIfe2zKz8L-KR55U3f5a3Sp2CChJxoC0IMQAvD_BwE",
    "descricao": "iPhone 16 Pro Max 256GB",
    "especificacoes": {
      "marketplace": "Carrefour",
      "prazoEntrega": "12 DIAS"
    },
    "precoConcorrente": 7811.07
  },
  {
    "id": 1078,
    "sku": "JAB-85T",
    "nome": "Jabra Elite 85t",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 1214.65,
    "precoMercado": 1429,
    "margem": 30,
    "precoVenda": 1579.04,
    "estoque": "Sob Consulta",
    "fornecedor": "Jabra",
    "imagem": "https://media.wired.com/photos/600b7ca709c13d0b5a8cbe6b/master/w_1600%2Cc_limit/Gear-Jabra-Elite-85t-group-SOURCE-Jabra.jpg",
    "linkCompra": "https://www.amazon.com.br/s?k=Jabra+Elite+85t",
    "descricao": "Jabra Elite 85t",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1079,
    "sku": "JBL-TOU",
    "nome": "JBL Tour One M2",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 1656.65,
    "precoMercado": 1949,
    "margem": 30,
    "precoVenda": 2153.64,
    "estoque": "Em Estoque",
    "fornecedor": "JBL",
    "imagem": "https://s2-techtudo.glbimg.com/7-LKb_tp6-rBZnbPAm0DP8_t74o=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/j/4/rM1fRnSRe5aXMR3dhsFA/3362462462.png",
    "linkCompra": "https://www.mercadolivre.com.br/fones-de-ouvido-jbl-tour-one-m2-black-black/p/MLB24612008?pdp_filters=item_id%3AMLB5784314660&from=gshop&matt_tool=96040271&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193909&matt_ad_group_id=174661987324&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914181378&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB24612008-product&matt_product_partition_id=2389837591579&matt_target_id=aud-1966852281496:pla-2389837591579&cq_src=google_ads&cq_cmp=22090193909&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193909&gbraid=0AAAAAD93qcA8JV7igp3Yx9wibPfJSSFAE&gclid=CjwKCAjw3tzHBhBREiwAlMJoUi13B_BWqjq8KIpW66-Vb9f1IprA8Hkt39XgK3tFc8DaENBIz9UzMRoCZQEQAvD_BwE",
    "descricao": "JBL Tour One M2",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 719.1
  },
  {
    "id": 1080,
    "sku": "JBL-INTRA",
    "nome": "JBL Wave Buds Intra",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 257.55,
    "precoMercado": 303,
    "margem": 30,
    "precoVenda": 334.82,
    "estoque": "Em Estoque",
    "fornecedor": "JBL Brasil",
    "imagem": "https://images0.kabum.com.br/produtos/fotos/421870/fone-de-ouvido-jbl-wave-buds-bluetooth-resistente-a-agua-e-poeira-preto-jblwbudsblk_1676578253_gg.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/fones-de-ouvido-true-wireless-jbl-wave-buds-branco/p/MLB24559022?pdp_filters=item_id%3AMLB4125204291&from=gshop&matt_tool=35546102&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354262&matt_ad_group_id=173090559076&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882729389&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB24559022-product&matt_product_partition_id=2389837591859&matt_target_id=aud-1966852281496:pla-2389837591859&cq_src=google_ads&cq_cmp=22090354262&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354262&gbraid=0AAAAAD93qcCE_mQwPZDywp7_irXY_lSMx&gclid=CjwKCAjw3tzHBhBREiwAlMJoUgUEAiS9j6jRuRr_U8nC5ECA2XeM8beYq4yw8Qz8uAZZAITCd1oQ5hoC1iMQAvD_BwE",
    "descricao": "JBL Wave Buds Intra",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 231
  },
  {
    "id": 1081,
    "sku": "KIN-11G",
    "nome": "Kindle 11ª Geração",
    "categoria": "Eletrônicos",
    "subcategoria": "E-readers",
    "quantidade": 10,
    "custoBase": 497.25,
    "precoMercado": 585,
    "margem": 30,
    "precoVenda": 646.43,
    "estoque": "Em Estoque",
    "fornecedor": "Amazon.com.br",
    "imagem": "https://images.kabum.com.br/produtos/fotos/388922/kindle-paperwhite-11-geracao-amazon-16-gb-preto-luz-integrada-a-prova-d-agua-wifi-b09tmk7qfx_1665058657_gg.jpg",
    "linkCompra": "https://www.amazon.com.br/kindle-16gb-preto/dp/B0CP31L73X/ref=asc_df_B0CP31L73X?mcid=ebbe13ed325339f3967d2bbac768f584&tag=googleshopp00-20&linkCode=df0&hvadid=717799259170&hvpos=&hvnetw=g&hvrand=15246821152378100162&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2393262001594&language=pt_BR&gad_source=4&th=1",
    "descricao": "Kindle 11ª Geração",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 589
  },
  {
    "id": 1082,
    "sku": "KIN-PPW",
    "nome": "Kindle Paperwhite 11ª Geração",
    "categoria": "Eletrônicos",
    "subcategoria": "E-readers",
    "quantidade": 10,
    "custoBase": 1191.7,
    "precoMercado": 1402,
    "margem": 30,
    "precoVenda": 1549.21,
    "estoque": "Em Estoque",
    "fornecedor": "Amazon",
    "imagem": "https://images.kabum.com.br/produtos/fotos/388922/kindle-paperwhite-11-geracao-amazon-16-gb-preto-luz-integrada-a-prova-d-agua-wifi-b09tmk7qfx_1665058657_gg.jpg",
    "linkCompra": "https://www.amazon.com.br/kindle-paperwhite/dp/B0CFPL6CFY/ref=asc_df_B0CFPL6CFY?mcid=74c5779da7be3def9963b99c4448939c&tag=googleshopp00-20&linkCode=df0&hvadid=717799259170&hvpos=&hvnetw=g&hvrand=7881855771390656533&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2371279208080&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Kindle Paperwhite 11ª Geração",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 849
  },
  {
    "id": 1083,
    "sku": "LAM-TAPO",
    "nome": "Lâmpada Wi-Fi Inteligente TP-Link Tapo L530E Ajuste Cor Bivolt",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 78.2,
    "precoMercado": 92,
    "margem": 30,
    "precoVenda": 101.66,
    "estoque": "Em Estoque",
    "fornecedor": "TP-Link",
    "imagem": "https://cdn.awsli.com.br/2500x2500/1160/1160646/produto/363521527/design-sem-nome-2025-07-16-t170820-694-quspvv36x4.png",
    "linkCompra": "https://www.mercadolivre.com.br/lampada-wi-fi-inteligente-tp-link-wi-fi-com-ajuste-de-cor-luz-rgb/p/MLB25215938?pdp_filters=item_id%3AMLB4002988299&from=gshop&matt_tool=44747869&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22603531439&matt_ad_group_id=183641039649&matt_match_type=&matt_network=g&matt_device=c&matt_creative=758138322197&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB25215938-product&matt_product_partition_id=2424646252682&matt_target_id=aud-1966852281496:pla-2424646252682&cq_src=google_ads&cq_cmp=22603531439&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22603531439&gbraid=0AAAAAD93qcCGw5WxAkXY3YK3TN8SFTBVy&gclid=CjwKCAjw3tzHBhBREiwAlMJoUlPxddREboJdFPc_tMdvMUlQ3TEEV0e2uURYfQ5bYVcto-WIa616SRoCImYQAvD_BwE",
    "descricao": "Lâmpada Wi-Fi Inteligente TP-Link Tapo L530E Ajuste Cor Bivolt",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 44.99
  },
  {
    "id": 1084,
    "sku": "LEN-TAB",
    "nome": "Lenovo Tab P12 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 3645.65,
    "precoMercado": 4289,
    "margem": 30,
    "precoVenda": 4739.35,
    "estoque": "Em Estoque",
    "fornecedor": "Lenovo",
    "imagem": "https://download.lenovo.com/km/media/images/HT513080/top_20211118030548380.png",
    "linkCompra": "https://www.mercadolivre.com.br/tablet-lenovo-idea-tab-pro-127-8-gb-ram-128-gb-luna-cinzen/p/MLB2033925681?pdp_filters=item_id%3AMLB4132298341&from=gshop&matt_tool=75697793&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22162683730&matt_ad_group_id=174777656318&matt_match_type=&matt_network=g&matt_device=c&matt_creative=730347009337&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB2033925681-product&matt_product_partition_id=2400197426581&matt_target_id=aud-1966852281496:pla-2400197426581&cq_src=google_ads&cq_cmp=22162683730&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22162683730&gbraid=0AAAAAD93qcA3h66mCYvFp6pP__cK0wHpY&gclid=CjwKCAjw3tzHBhBREiwAlMJoUlpRcfXJ9dVfhGvRxgYBLLmRryL58KszrnE1KMCn0jGY4KQNo_ajABoCsIcQAvD_BwE",
    "descricao": "Lenovo Tab P12 Pro",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "20 Dias"
    },
    "precoConcorrente": 2943
  },
  {
    "id": 1085,
    "sku": "LEN-X1C",
    "nome": "Lenovo ThinkPad X1 Carbon Gen 11",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 9893.15,
    "precoMercado": 11639,
    "margem": 30,
    "precoVenda": 12861.09,
    "estoque": "Sob Consulta",
    "fornecedor": "Lenovo",
    "imagem": "https://a-static.mlcdn.com.br/800x800/lenovo-thinkpad-x1-carbon-gen-9-i7-11th-16gb-ssd-256gb-tela/olistplus/opmgj17oa4byt4yo/81ba7301ed58e0907c6b9d5d44b0189e.jpeg",
    "linkCompra": "https://www.amazon.com.br/s?k=Lenovo+ThinkPad+X1+Carbon+Gen+11",
    "descricao": "Lenovo ThinkPad X1 Carbon Gen 11",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1086,
    "sku": "LG-OLED",
    "nome": "LG 27\" OLED Gaming Monitor 240Hz",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 5439.15,
    "precoMercado": 6399,
    "margem": 30,
    "precoVenda": 7070.89,
    "estoque": "Em Estoque",
    "fornecedor": "LG",
    "imagem": "https://www.lg.com/content/dam/channel/wcms/br/images/monitores/27gn750-b_awzm_essp_br_c/gallery/desktop-01.jpg",
    "linkCompra": "https://site.fastshop.com.br/monitor-gamer-lg-27--ultragear-oled-%E2%80%93-27gs95qe-b-118189/p?idsku=125395&utm_source=google&utm_medium=cpc&utm_campaign=22836765118&utm_term=pmax_3p&gad_source=4&gad_campaignid=22836765118&gclid=CjwKCAjw3tzHBhBREiwAlMJoUq2l1qm-SNqCrXz11swPNu_uGzmJi9svmonKf87xfX8SCZAUTslBKBoC9rYQAvD_BwE",
    "descricao": "LG 27\" OLED Gaming Monitor 240Hz",
    "especificacoes": {
      "marketplace": "Fast Shop",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 4402
  },
  {
    "id": 1087,
    "sku": "LOG-PRO",
    "nome": "Logitech G Pro X Superlight 2",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 883.15,
    "precoMercado": 1039,
    "margem": 30,
    "precoVenda": 1148.1,
    "estoque": "Em Estoque",
    "fornecedor": "Logitech",
    "imagem": "https://images.kabum.com.br/produtos/fotos/495545/mouse-gamer-sem-fio-logitech-g-pro-x-superlight-2-com-lightspeed-sensor-hero-2-com-32k-dpi-e-bateria-recarregavel-branco-910-006637_1696609250_gg.jpg",
    "linkCompra": "https://www.amazon.com.br/Logitech-SUPERLIGHT-Tecnologia-program%C3%A1veis-Recarreg%C3%A1vel/dp/B0CJ9NXG41/ref=asc_df_B0CJ9NXG41?mcid=d502376b41dd318bab6af4cc563ce321&tag=googleshopp00-20&linkCode=df0&hvadid=709884378379&hvpos=&hvnetw=g&hvrand=10712747830659389536&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2300574552887&language=pt_BR&gad_source=4&th=1",
    "descricao": "Logitech G Pro X Superlight 2",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "4 DIAS"
    },
    "precoConcorrente": 749.99
  },
  {
    "id": 1088,
    "sku": "LOG-MX",
    "nome": "Logitech MX Master 3S",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 662.15,
    "precoMercado": 779,
    "margem": 30,
    "precoVenda": 860.79,
    "estoque": "Em Estoque",
    "fornecedor": "Logitech",
    "imagem": "https://images6.kabum.com.br/produtos/fotos/359636/mouse-sem-fio-logitech-mx-master-3s-8000-dpi-bluetooth-usb-para-uso-em-qualquer-superficie-clique-silencioso-grafite-910-006561_1655986759_gg.jpg",
    "linkCompra": "https://www.amazon.com.br/Logitech-MX-Master-3S-Superf%C3%ADcie/dp/B0B115YKL5/ref=asc_df_B0B115YKL5?mcid=eda1fb1559f83e4cb680965d99d8e6bd&tag=googleshopp00-20&linkCode=df0&hvadid=709884378379&hvpos=&hvnetw=g&hvrand=17089838206915403795&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-1679349995229&language=pt_BR&gad_source=4&th=1",
    "descricao": "Logitech MX Master 3S",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "4 DIAS"
    },
    "precoConcorrente": 590
  },
  {
    "id": 1089,
    "sku": "MAC-AIR15",
    "nome": "MacBook Air 15\" M3",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 10879.15,
    "precoMercado": 12799,
    "margem": 30,
    "precoVenda": 14142.9,
    "estoque": "Em Estoque",
    "fornecedor": "Apple",
    "imagem": "https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large.jpg",
    "linkCompra": "https://www.carrefour.com.br/apple-macbook-air-15-m3-cpu-de-8-nucleos-gpu-de-10-nucleos-16gb-ram-256gb-ssd-meianoite-mp950260439/p",
    "descricao": "MacBook Air 15\" M3",
    "especificacoes": {
      "marketplace": "Carrefour",
      "prazoEntrega": "15 DIAS"
    },
    "precoConcorrente": 9290
  },
  {
    "id": 1090,
    "sku": "MAC-M3P",
    "nome": "MacBook Pro 16\" M3 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 17594.15,
    "precoMercado": 20699,
    "margem": 30,
    "precoVenda": 22872.39,
    "estoque": "Em Estoque",
    "fornecedor": "Apple",
    "imagem": "https://cdn.arstechnica.net/wp-content/uploads/2023/11/IMG_1415.jpeg",
    "linkCompra": "https://www.kabum.com.br/produto/644788/macbook-pro-16-m3-pro-12-core-18gpu-18gb-ram-512gb-ssd-cor-prata?utm_id=21434223532&gad_source=4&gad_campaignid=21423802761&gbraid=0AAAAADx-HyEcIQfw4gygEavSoN_VhFxXM&gclid=CjwKCAjw3tzHBhBREiwAlMJoUlESCXhQ_O9pQX15f2GROTceCA10Lf_YpYYrv2Gr3DBKM83BAMC-7xoCOJcQAvD_BwE",
    "descricao": "MacBook Pro 16\" M3 Pro",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "12 DIAS"
    },
    "precoConcorrente": 25790
  },
  {
    "id": 1091,
    "sku": "MIC-SUR",
    "nome": "Microsoft Surface Pro 9",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 6586.65,
    "precoMercado": 7749,
    "margem": 30,
    "precoVenda": 8562.65,
    "estoque": "Em Estoque",
    "fornecedor": "Microsoft",
    "imagem": "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE50Sln_angled-view_windows-11?scl=1",
    "linkCompra": "https://www.mercadolivre.com.br/tablet-microsoft-surface-pro-9-13-touch-16-gb256-gb-intel-i/p/MLB2040947435?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id%3AMLB5628181576&from=gshop",
    "descricao": "Microsoft Surface Pro 9",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "20 DIAS"
    },
    "precoConcorrente": 10038
  },
  {
    "id": 1092,
    "sku": "MCH-TRK",
    "nome": "Mochila de Hidratação Track&Field",
    "categoria": "Esporte",
    "subcategoria": "Acessórios Esportivos",
    "quantidade": 10,
    "custoBase": 442,
    "precoMercado": 520,
    "margem": 30,
    "precoVenda": 574.6,
    "estoque": "Sob Consulta",
    "fornecedor": "Track&Field",
    "imagem": "https://trackfield.vtexassets.com/arquivos/ids/262260-1200-1677?v=638162259344330000&width=1200&height=1677&aspect=true",
    "linkCompra": "https://www.amazon.com.br/s?k=Mochila+de+Hidratacao+TrackField",
    "descricao": "Mochila de Hidratação Track&Field",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1093,
    "sku": "MOT-E14U",
    "nome": "Motorola Edge 50 Ultra",
    "categoria": "Eletrônicos",
    "subcategoria": "Smartphones",
    "quantidade": 10,
    "custoBase": 4419.15,
    "precoMercado": 5199,
    "margem": 30,
    "precoVenda": 5744.89,
    "estoque": "Em Estoque",
    "fornecedor": "Motorola",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/637711/Smartphone-Motorola-Edge-50-Ultra-5g-512gb-Peach-Fuzz-24gb-Ram-Boost-C-mera-50mp-Ultra-pixel-Selfie-50mp-E-Tela-6-7-Moto-Ai_1726671142_gg.jpg",
    "linkCompra": "https://www.amazon.com.br/Smartphone-Motorola-Edge-Ultra-Ultra-Pixel/dp/B0DJPP1KG1/ref=asc_df_B0DJPP1KG1?mcid=7f933dac37363fb4a8e28b6d8514c98c&tag=googleshopp00-20&linkCode=df0&hvadid=709964503151&hvpos=&hvnetw=g&hvrand=2767353896117324698&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2370150524147&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Motorola Edge 50 Ultra",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 3329.1
  },
  {
    "id": 1094,
    "sku": "MSI-PRE",
    "nome": "MSI Prestige 16 Studio",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 11015.15,
    "precoMercado": 12959,
    "margem": 30,
    "precoVenda": 14319.69,
    "estoque": "Em Estoque",
    "fornecedor": "MSI",
    "imagem": "https://storage-asset.msi.com/global/picture/image/feature/nb/Prestige/Prestige16-A13V/gpu-nb.png",
    "linkCompra": "https://www.mercadolivre.com.br/notebook-msi-prestige-16-ai-intel-ultra-9-16gb-ram-1tb-ssd/up/MLBU3486068741?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id:MLB4251119385",
    "descricao": "MSI Prestige 16 Studio",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 13199
  },
  {
    "id": 1095,
    "sku": "NES-VPOP-W",
    "nome": "Nespresso Vertuo Pop Branca",
    "categoria": "Casa e Cozinha",
    "subcategoria": "Cafeteiras",
    "quantidade": 10,
    "custoBase": 552.5,
    "precoMercado": 650,
    "margem": 30,
    "precoVenda": 718.25,
    "estoque": "Em Estoque",
    "fornecedor": "Nespresso",
    "imagem": "https://eletroangeloni.vtexassets.com/arquivos/ids/3303794-1200-auto?v=638925192536630000&width=1200&height=auto&aspect=true",
    "linkCompra": "https://www.angeloni.com.br/eletro/cafeteira-nespresso-vertuo-pop-para-cafe-espresso-manual-branco-coco-5102021/p?idsku=116800&utm_source=google&utm_campaign=ANG_PRF_VENDA_ELETRO_TODOSPRODUTOS_SHOPPING&gad_source=4&gad_campaignid=23058580073&gbraid=0AAAAADyXo2NMS8CRCLvCTeotKeVJMU5lu&gclid=CjwKCAjw3tzHBhBREiwAlMJoUrUr9fMGrlRMXpSuTmPCFCPMddm6Z0W003PLyXl6acLcqSo1q_WHMxoCjA8QAvD_BwE",
    "descricao": "Nespresso Vertuo Pop Branca",
    "especificacoes": {
      "marketplace": "Angeloni",
      "prazoEntrega": "4 DIAS"
    },
    "precoConcorrente": 379.05
  },
  {
    "id": 1096,
    "sku": "NES-VPOP-B",
    "nome": "Nespresso Vertuo Pop Preta",
    "categoria": "Casa e Cozinha",
    "subcategoria": "Cafeteiras",
    "quantidade": 10,
    "custoBase": 552.5,
    "precoMercado": 650,
    "margem": 30,
    "precoVenda": 718.25,
    "estoque": "Em Estoque",
    "fornecedor": "Nespresso",
    "imagem": "https://spicy.vtexassets.com/arquivos/ids/239862-1200-auto?v=638810278979600000&width=1200&height=auto&aspect=true",
    "linkCompra": "amazon.com.br/Nespresso-Vertuo-Preta-110V-Cafeteira/dp/B0BXBHTXSF/ref=asc_df_B0BXBHTXSF?mcid=ec94c881dab433f3b4f157432161ad77&tag=googleshopp00-20&linkCode=df0&hvadid=709874962041&hvpos=&hvnetw=g&hvrand=13375615598345040151&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2202090195826&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Nespresso Vertuo Pop Preta",
    "especificacoes": {
      "marketplace": "amazon",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 366.15
  },
  {
    "id": 1097,
    "sku": "NSW-OLED",
    "nome": "Nintendo Switch OLED 64GB Standard Branco",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 3429.75,
    "precoMercado": 4035,
    "margem": 30,
    "precoVenda": 4458.68,
    "estoque": "Em Estoque",
    "fornecedor": "Nintendo",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/308190/Console-Nintendo-Switch-Oled-64GB-Branco_1728056751_gg.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/nintendo-switch-oled-branco-64-gb-hdmi-con-controles/p/MLB37511735?pdp_filters=item_id%3AMLB5826349214&from=gshop&matt_tool=20691730&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193900&matt_ad_group_id=174661982764&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914181198&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB37511735-product&matt_product_partition_id=2393412443932&matt_target_id=aud-1966852281496:pla-2393412443932&cq_src=google_ads&cq_cmp=22090193900&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193900&gbraid=0AAAAAD93qcAUFeP5dcTRRFG-V9NsTTXd_&gclid=CjwKCAjw3tzHBhBREiwAlMJoUvnSTDQQMZ7W0Qe8FQedlgRj5NI7UnxtO9lvvrb7Mk3C47bKNes9iRoCtU4QAvD_BwE",
    "descricao": "Nintendo Switch OLED 64GB Standard Branco",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 2066.9
  },
  {
    "id": 1098,
    "sku": "NOT-BUDS",
    "nome": "Nothing Ear (2)",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 772.65,
    "precoMercado": 909,
    "margem": 30,
    "precoVenda": 1004.45,
    "estoque": "Em Estoque",
    "fornecedor": "Nothing",
    "imagem": "https://img.odcdn.com.br/wp-content/uploads/2023/06/Imagem-Nothing-Ear-2-1024x576.png",
    "linkCompra": "https://www.mercadolivre.com.br/auriculares-sem-fios-nothing-ear-a-com-integraco-chatg/p/MLB2018056524#polycard_client=recommendations_vpp-pdp-v2p-pom&reco_backend=ranker_retrieval_system_vpp_v2p&reco_model=ranker_entity_v2_retrieval_system_vpp_v2p&reco_client=vpp-pdp-v2p-pom&reco_item_pos=1&reco_backend_type=low_level&reco_id=39b241eb-451b-4c85-8e07-c5f6fd5b9d98&wid=MLB5385676032&sid=recos",
    "descricao": "Nothing Ear (2)",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "20 DIAS"
    },
    "precoConcorrente": 748.11
  },
  {
    "id": 1099,
    "sku": "NOT-3",
    "nome": "Nothing Phone (3)",
    "categoria": "Eletrônicos",
    "subcategoria": "Smartphones",
    "quantidade": 10,
    "custoBase": 3866.65,
    "precoMercado": 4549,
    "margem": 30,
    "precoVenda": 5026.65,
    "estoque": "Sob Consulta",
    "fornecedor": "Nothing",
    "imagem": "https://t.ctcdn.com.br/4UcTesxQZ64K2WVmBo_pEKLPG2E=/640x360/smart/i766258.png",
    "linkCompra": "https://www.amazon.com.br/s?k=Nothing+Phone+3",
    "descricao": "Nothing Phone (3)",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1100,
    "sku": "MET-OCU-DAV",
    "nome": "Óculos de RV Muta Quest 3 512GB",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 2367.2,
    "precoMercado": 2784.94,
    "margem": 30,
    "precoVenda": 3077.36,
    "estoque": "Em Estoque",
    "fornecedor": "Meta",
    "imagem": "https://resource.megaeletronicos.com/uploads/Product/new/1/4/3/7/5/9/143759/1730217847_1730217847.webp",
    "linkCompra": "https://www.kabum.com.br/produto/857502/oculus-meta-quest-3s-128gb-vr-nova-versao?utm_id=21722767675&gad_source=4&gad_campaignid=21722772874&gbraid=0AAAAADx-HyHVU5om3y8y5eE6ab7eWtViw&gclid=CjwKCAjw3tzHBhBREiwAlMJoUqEYgslpn5wV1O7SdK9cpWXnwlcl2pceOZKcCtH1jhzi8CijCuoV0BoC33sQAvD_BwE",
    "descricao": "Óculos de RV Muta Quest 3 512GB",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 2421.69
  },
  {
    "id": 1101,
    "sku": "OMR-PRE-DAV",
    "nome": "OMRON Monitor de Pressão Arterial de Braço HEM-7142",
    "categoria": "Eletronicos",
    "subcategoria": "Saúde e Bem-estar",
    "quantidade": 10,
    "custoBase": 123.07,
    "precoMercado": 144.78,
    "margem": 30,
    "precoVenda": 159.99,
    "estoque": "Em Estoque",
    "fornecedor": "OMRON",
    "imagem": "https://m.media-amazon.com/images/I/51PApsauEDL._AC_SX679_.jpg",
    "linkCompra": "https://www.amazon.com.br/Aparelho-Press%C3%A3o-Digital-OMRON-HEM-7142/dp/B0CFFZFG1B/ref=asc_df_B0CFFZFG1B?mcid=9686c683f14c3d0da31d26f1f258c8a3&tag=googleshopp00-20&linkCode=df0&hvadid=709857204930&hvpos=&hvnetw=g&hvrand=11122394387247642683&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2265575592397&psc=1&language=pt_BR&gad_source=4",
    "descricao": "OMRON Monitor de Pressão Arterial de Braço HEM-7142",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 125.9
  },
  {
    "id": 1102,
    "sku": "ONE-12P",
    "nome": "OnePlus 12 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Smartphones",
    "quantidade": 10,
    "custoBase": 4971.65,
    "precoMercado": 5849,
    "margem": 30,
    "precoVenda": 6463.14,
    "estoque": "Em Estoque",
    "fornecedor": "OnePlus",
    "imagem": "https://cdn.phonemore.com/content/2023/jpg/21904.jpg",
    "linkCompra": "https://www.carrefour.com.br/oneplus-12r-128gb-8gb-ram-iron-gray-pronta-entrega-mp952174410/p",
    "descricao": "OnePlus 12 Pro",
    "especificacoes": {
      "marketplace": "Carrefour",
      "prazoEntrega": "20 DIAS"
    },
    "precoConcorrente": 3899
  },
  {
    "id": 1103,
    "sku": "ONE-PAD",
    "nome": "OnePlus Pad",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 2540.65,
    "precoMercado": 2989,
    "margem": 30,
    "precoVenda": 3302.85,
    "estoque": "Em Estoque",
    "fornecedor": "OnePlus",
    "imagem": "https://ifixdigital.com.br/wp-content/uploads/2024/07/O-OnePlus-Pad-2-esta-aqui-para-dar-uma-corrida.jpeg",
    "linkCompra": "https://www.amazon.com.br/OnePlus-inteligente-magn%C3%A9tico-ultrafino-emparelhamento/dp/B0FC2F5VY1?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A2EB9PYM83FCP9",
    "descricao": "OnePlus Pad",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "40 DIAS"
    },
    "precoConcorrente": 2171
  },
  {
    "id": 1104,
    "sku": "OPP-X7U",
    "nome": "OPPO Find X7 Ultra",
    "categoria": "Eletrônicos",
    "subcategoria": "Smartphones",
    "quantidade": 10,
    "custoBase": 6076.65,
    "precoMercado": 7149,
    "margem": 30,
    "precoVenda": 7899.64,
    "estoque": "Em Estoque",
    "fornecedor": "OPPO",
    "imagem": "https://t2.tudocdn.net/697700?w=1200&h=1200",
    "linkCompra": "https://www.kabum.com.br/produto/573712/oppo-find-x7-5g-ultra-6-82-16-512gb-5000mah-snapdragon-8-gen-3-cor-brown?srsltid=AfmBOorpuE7VfsmlX8DatePrIs4lhZhp3fPI7R4VLu0q7kvx57JPHWZ30yI",
    "descricao": "OPPO Find X7 Ultra",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 12501
  },
  {
    "id": 1105,
    "sku": "PEA-BAS",
    "nome": "Peak Design Everyday Messenger 13L",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 1435.65,
    "precoMercado": 1689,
    "margem": 30,
    "precoVenda": 1866.34,
    "estoque": "Em Estoque",
    "fornecedor": "Peak Design",
    "imagem": "https://fujishop.id/wp-content/uploads/2021/12/Peak-Design-Everyday-Messenger-13L-V2-Ash-01.jpg",
    "linkCompra": "https://www.amazon.com.br/Peak-Design-Estilingue-cintura-CAMAS-3-AS-3/dp/B0D9R4ZHLW/ref=asc_df_B0D9R4ZHLW?mcid=d00679aa87ba392798a85cd3bbd96a14&tag=googleshopp00-20&linkCode=df0&hvadid=763785228884&hvpos=&hvnetw=g&hvrand=3026173181867765398&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2378073242118&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Peak Design Everyday Messenger 13L",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "20 DIAS"
    },
    "precoConcorrente": 895.92
  },
  {
    "id": 1106,
    "sku": "PHI-HUE",
    "nome": "Philips Hue Kit Inicial (3 Lâmpadas + Bridge)",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Em Estoque",
    "fornecedor": "Philips",
    "imagem": "https://philipssignifyb2c.vtexassets.com/arquivos/ids/156448/philips-hue-kit-casa-inteligente-com-3-lampadas-e27-bridge-110v-929002261501_3.jpg.png?v=638779872273930000",
    "linkCompra": "https://www.casasbahia.com.br/philips-kit-starter-led-hue-9w-com-3-lampadas-bridge/p/1539143680?utm_medium=Cpc&utm_source=GP_PLA&IdSku=1539143680&idLojista=50108&tipoLojista=3P&gclsrc=aw.ds&&utm_content=mktp_blackout_mix_brasil__geral&gad_source=4&gad_campaignid=17642472236&gbraid=0AAAAADtAamjPY7aE7j0BeXpgf-iGhryqs&gclid=CjwKCAjw3tzHBhBREiwAlMJoUjl4bBsHpBomwZb4TmDHL0hXnMACYmZPRmQRVabagqTVgyiYVnmyRRoCqKUQAvD_BwE",
    "descricao": "Philips Hue Kit Inicial (3 Lâmpadas + Bridge)",
    "especificacoes": {
      "marketplace": "Casas Bahia",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 869.89
  },
  {
    "id": 1107,
    "sku": "PIP-MOND",
    "nome": "Pipoqueira Mondial PopFlix PP-03 Vermelha 110V",
    "categoria": "Casa e Cozinha",
    "subcategoria": "Eletrodomésticos",
    "quantidade": 10,
    "custoBase": 154.73,
    "precoMercado": 279,
    "margem": 30,
    "precoVenda": 201.149,
    "estoque": "Para Compra",
    "fornecedor": "Mondial",
    "imagem": "https://m.media-amazon.com/images/I/81oRNVZ6SUL._AC_SL1500_.jpg",
    "linkCompra": "https://www.amazon.com.br/Pipoqueira-Popflix-Mondial-Pp-03-Vermelho/dp/B07G1HWM9D/ref=asc_df_B07G1HWM9D?mcid=4860077b701e35f1ba91833a44af03c6&tag=googleshopp00-20&linkCode=df0&hvadid=709964506241&hvpos=&hvnetw=g&hvrand=1370778564882041473&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-913055793317&language=pt_BR&gad_source=4&th=1",
    "descricao": "Pipoqueira Mondial PopFlix PP-03 Vermelha 110V",
    "especificacoes": {
      "marketplace": "mercadi livre",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 145.9,
    "dataAtualizacao": "2025-10-27T18:35:13.729Z"
  },
  {
    "id": 1108,
    "sku": "PS5-DIG",
    "nome": "PlayStation 5 Digital Edition",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 3841.15,
    "precoMercado": 4519,
    "margem": 30,
    "precoVenda": 4993.49,
    "estoque": "Em Estoque",
    "fornecedor": "Sony",
    "imagem": "https://i.zst.com.br/thumbs/12/32/32/-1006955633.jpg",
    "linkCompra": "https://site.fastshop.com.br/console-playstation-5-slim-digital-825gb-123074/p?idsku=130472&utm_source=google&utm_medium=cpc&utm_campaign=22832866697&utm_term=pmax_3p&gad_source=4&gad_campaignid=22832866697&gclid=CjwKCAjw3tzHBhBREiwAlMJoUjHjjBNX3yBgwFCA0RCaqI97ZN499s3Sha7k82DgKHPKjsaXGRf46hoC-oMQAvD_BwE",
    "descricao": "PlayStation 5 Digital Edition",
    "especificacoes": {
      "marketplace": "Fast Shop",
      "prazoEntrega": "4 DIAS"
    },
    "precoConcorrente": 3314
  },
  {
    "id": 1109,
    "sku": "POL-VAN2",
    "nome": "Polar Vantage V3",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 3314.15,
    "precoMercado": 3899,
    "margem": 30,
    "precoVenda": 4308.4,
    "estoque": "Em Estoque",
    "fornecedor": "Polar",
    "imagem": "https://www.polar.com/img/cms/1f4702d411e1f2dc485e1a95101975bc3dac1123-2000x2000-1000.webp",
    "linkCompra": "https://site.fastshop.com.br/relogio-multiesportivo-polar-vantage-v3-night-black--c--pulseira-extra--m-g--polar-vantage-v3-night-black-c--pulseira-extra-de-velcro--m-g--88904/p",
    "descricao": "Polar Vantage V3",
    "especificacoes": {
      "marketplace": "Fast Shop",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 4386.83
  },
  {
    "id": 1110,
    "sku": "RAZ-BLA14",
    "nome": "Razer Blade 14 Gaming",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 14279.15,
    "precoMercado": 16799,
    "margem": 30,
    "precoVenda": 18562.9,
    "estoque": "Em Estoque",
    "fornecedor": "Razer",
    "imagem": "https://www.notebookcheck.info/typo3temp/_processed_/b/b/csm_razer_blade_14_2025_ac831d3ab8.png",
    "linkCompra": "https://www.mercadolivre.com.br/notebook-razer-blade-14-165-hz-ryzen-9-rtx-3070-ti-16-gb-1-tb-preto/p/MLB21459344?pdp_filters=item_id%3AMLB5416074556&from=gshop&matt_tool=59181783&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22117558002&matt_ad_group_id=172644201519&matt_match_type=&matt_network=g&matt_device=c&matt_creative=728942948124&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB21459344-product&matt_product_partition_id=2389831149321&matt_target_id=aud-1966852281496:pla-2389831149321&cq_src=google_ads&cq_cmp=22117558002&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22117558002&gbraid=0AAAAAD93qcABDw8zQ3lU2fZwz8XOi72zD&gclid=CjwKCAjw3tzHBhBREiwAlMJoUumo6ErBy63lLULyLSPm85Qh80ArxMOUYnukf0-tjf9x4BkvtZUSGxoCfrYQAvD_BwE",
    "descricao": "Razer Blade 14 Gaming",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 20760
  },
  {
    "id": 1111,
    "sku": "RAZ-VIPER",
    "nome": "Razer Viper V3 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Em Estoque",
    "fornecedor": "Razer",
    "imagem": "https://br.octoshop.com/cdn/shop/files/razer_viper_v3_pro_white_1__1.jpg?v=1739281509",
    "linkCompra": "https://www.kabum.com.br/produto/641737/mouse-gamer-sem-fio-razer-viper-v3-pro-wireless-ergonomico-para-esports-preto-rz0105120100?utm_id=22429436072&gad_source=4&gad_campaignid=22429436072&gbraid=0AAAAADx-HyHooFd1AT0gONNHev5CQXvMK&gclid=CjwKCAjw3tzHBhBREiwAlMJoUgA6QdvjUeyXYW4EopmaoA8UnmOHXH6t8btZdxgJHjaVeos3CQIKoBoCxM4QAvD_BwE",
    "descricao": "Razer Viper V3 Pro",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 1772.99
  },
  {
    "id": 1112,
    "sku": "RIN-VIDEO",
    "nome": "Ring Video Doorbell Pro 2",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 1435.65,
    "precoMercado": 1689,
    "margem": 30,
    "precoVenda": 1866.34,
    "estoque": "Em Estoque",
    "fornecedor": "Ring",
    "imagem": "https://images.ctfassets.net/a3peezndovsu/variant-31961428492377/e8d3f08c98ee484eef46c383b85cb785/variant-31961428492377.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/campainha-ring-video-doorbell-2nd-gen-1080p-audio-e-video/p/MLB23995118?pdp_filters=item_id%3AMLB5769250884&from=gshop&matt_tool=69040175&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354310&matt_ad_group_id=173090585516&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882731591&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB23995118-product&matt_product_partition_id=2393412753972&matt_target_id=aud-1966852281496:pla-2393412753972&cq_src=google_ads&cq_cmp=22090354310&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354310&gbraid=0AAAAAD93qcD5ebME9BRAXu651t1dudHKX&gclid=CjwKCAjw3tzHBhBREiwAlMJoUk07nEQ8ahMQfsidK8yyl03eMryv6bYEbK0vDwBBCkuE5APnPJ2tJxoCnGgQAvD_BwE",
    "descricao": "Ring Video Doorbell Pro 2",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 769.99
  },
  {
    "id": 1113,
    "sku": "ROB-ELE-2H",
    "nome": "Robô Aspirador Eletrolux com 2h20min de Autonomia",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 787.1,
    "precoMercado": 926,
    "margem": 30,
    "precoVenda": 1023.23,
    "estoque": "Em Estoque",
    "fornecedor": "Electrolux",
    "imagem": "https://fastshopbr.vtexassets.com/arquivos/ids/1669280/2_EXERB20PCN_PRD_1500_3.jpg?v=638750517242500000",
    "linkCompra": "https://www.amazon.com.br/Electrolux-Experience-Autonomous-Technology-ERB30/dp/B09SVT5X8N/ref=asc_df_B09SVT5X8N?mcid=b49095c4a226397ea31f70e960a2d241&tag=googleshopp00-20&linkCode=df0&hvadid=709968341038&hvpos=&hvnetw=g&hvrand=7855462419253512947&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2202491347351&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Robô Aspirador Eletrolux com 2h20min de Autonomia",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 779.9
  },
  {
    "id": 1114,
    "sku": "ROB-ASP",
    "nome": "Robô Aspirador Eletrônico",
    "categoria": "Eletrônicos",
    "subcategoria": "Casa Inteligente",
    "quantidade": 10,
    "custoBase": 563.55,
    "precoMercado": 663,
    "margem": 30,
    "precoVenda": 732.62,
    "estoque": "Em Estoque",
    "fornecedor": "Xiaomi",
    "imagem": "https://http2.mlstatic.com/D_Q_NP_723337-MLA95374185471_102025-O.webp",
    "linkCompra": "https://www.mercadolivre.com.br/aspirador-inteligente-xiaomi-mi-robot-vacuum-s40c-bivolt-branco/p/MLB54458534?pdp_filters=item_id%3AMLB5815527236&from=gshop&matt_tool=38545640&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354508&matt_ad_group_id=173090613836&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882733487&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB54458534-product&matt_product_partition_id=2388009192146&matt_target_id=aud-1966852281496:pla-2388009192146&cq_src=google_ads&cq_cmp=22090354508&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354508&gbraid=0AAAAAD93qcDioZMBVNFNgPeONkLuSpbMX&gclid=CjwKCAjw3tzHBhBREiwAlMJoUqHHxhOWrq9DzST7ap7u2fOE_zps6i5sekIhjl8EYR-CifUqF4ae1hoCbn0QAvD_BwE",
    "descricao": "Robô Aspirador Eletrônico",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "15 DIAS"
    },
    "precoConcorrente": 1276
  },
  {
    "id": 1115,
    "sku": "ROB-ASP-ELE",
    "nome": "Robô Aspirador Eletrônico Inteligente",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 563.55,
    "precoMercado": 663,
    "margem": 30,
    "precoVenda": 732.62,
    "estoque": "Em Estoque",
    "fornecedor": "Diversos",
    "imagem": "https://www.havan.com.br/media/catalog/product/a/s/aspirador-de-po-robo-philco-limpeza-inteligente-pas26p_910089.jpg",
    "linkCompra": "https://www.amazon.com.br/Aspirador-rob%C3%B4-Philco-PAS26P-Bivolt/dp/B0CFFY1T8R/ref=asc_df_B0CFFY1T8R?mcid=1ab05337a4d53ee99d923d63dd762b2d&tag=googleshopp00-20&linkCode=df0&hvadid=709968341272&hvpos=&hvnetw=g&hvrand=9009255663608516933&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2246811735498&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Robô Aspirador Eletrônico Inteligente",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 688
  },
  {
    "id": 1116,
    "sku": "SAM-BOO",
    "nome": "Samsung Galaxy Book3 Ultra",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 12647.15,
    "precoMercado": 14879,
    "margem": 30,
    "precoVenda": 16441.3,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung",
    "imagem": "https://i.zst.com.br/thumbs/12/24/34/-1162794354.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/notebook-samsung-galaxy-book3-ultra-intel-core-i7-13700h-32gb-1tb-ssd-tela-16-windows11h-np960xfh-xa1br/p/MLB25851009?pdp_filters=item_id%3AMLB4059160093&from=gshop&matt_tool=59181783&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22117558002&matt_ad_group_id=172644201519&matt_match_type=&matt_network=g&matt_device=c&matt_creative=728942948124&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB25851009-product&matt_product_partition_id=2389933078298&matt_target_id=aud-1966852281496:pla-2389933078298&cq_src=google_ads&cq_cmp=22117558002&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22117558002&gbraid=0AAAAAD93qcABDw8zQ3lU2fZwz8XOi72zD&gclid=CjwKCAjw3tzHBhBREiwAlMJoUnWbWaRgSC6qil86CkMC_vA5cDto1VAfZ-UM31wu-dodv0E_ojrYsBoCUioQAvD_BwE",
    "descricao": "Samsung Galaxy Book3 Ultra",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 10399.99
  },
  {
    "id": 1117,
    "sku": "SAM-BUDS2P",
    "nome": "Samsung Galaxy Buds2 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung",
    "imagem": "https://images9.kabum.com.br/produtos/fotos/374859/fone-de-ouvido-sem-fio-samsung-galaxy-buds2-pro-cancelamento-de-ruido-inteligente-preto-sm-r510nzapzto_1659979231_gg.jpg",
    "linkCompra": "https://www.magazineluiza.com.br/fone-de-ouvido-esportivo-bluetooth-samsung-buds-2-pro-intra-auricular-resistente-a-agua/p/235689100/ea/gabu/?&seller_id=magazineluiza&utm_source=google&utm_medium=cpc&utm_term=79698&utm_campaign=google_eco_per_ven_pla_mob_apo_1p_ea-ga-tb-wea-csp&utm_content=&partner_id=79698&gclsrc=aw.ds&gad_source=4&gad_campaignid=22589507698&gbraid=0AAAAAD4zZmQ-MuwTON9aCtsl4kdbkxIur&gclid=CjwKCAjw3tzHBhBREiwAlMJoUjQw1_BHvPHDMMfSFyXmFvtH4Pt5ra9i1qddXZ8UpzK7wCSh2hfdjRoCQ4AQAvD_BwE",
    "descricao": "Samsung Galaxy Buds2 Pro",
    "especificacoes": {
      "marketplace": "Magalu",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 629.1
  },
  {
    "id": 1118,
    "sku": "SAM-GRING",
    "nome": "Samsung Galaxy Ring",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 3037.9,
    "precoMercado": 3574,
    "margem": 30,
    "precoVenda": 3949.27,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung Store",
    "imagem": "https://img.global.news.samsung.com/br/wp-content/uploads/2024/09/GalaxyRing_noLogo_KV1000-1.png",
    "linkCompra": "https://www.amazon.com.br/Samsung-Galaxy-Ring-Resistente-Monitoramento/dp/B0DNRBGDJ6/ref=asc_df_B0DNRBGDJ6?mcid=950af4776e1a3bbfb68d0f48d04e584e&tag=googleshopp00-20&linkCode=df0&hvadid=720692697564&hvpos=&hvnetw=g&hvrand=5722775202815474565&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2401360372920&language=pt_BR&gad_source=4&th=1",
    "descricao": "Samsung Galaxy Ring",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 1975
  },
  {
    "id": 1119,
    "sku": "SAM-S24U",
    "nome": "Samsung Galaxy S24 Ultra",
    "categoria": "Eletrônicos",
    "subcategoria": "Smartphones",
    "quantidade": 10,
    "custoBase": 7623.65,
    "precoMercado": 8969,
    "margem": 30,
    "precoVenda": 9910.74,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung Store",
    "imagem": "https://samsungbrshop.vtexassets.com/arquivos/ids/249570/S24_1000x1000__0005_S24_ultra_titanio_cinza.jpg.jpg?v=638793894861300000",
    "linkCompra": "https://www.amazon.com.br/Smartphone-Samsung-Galaxy-Selfie-1-120Hz/dp/B0CQD9VK7X/ref=asc_df_B0CQD9VK7X?mcid=d2a75c04773d3e728f926e4dd8841bff&tag=googleshopp00-20&linkCode=df0&hvadid=709964503151&hvpos=&hvnetw=g&hvrand=17281884159842519900&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2283940217028&language=pt_BR&gad_source=4&th=1",
    "descricao": "Samsung Galaxy S24 Ultra",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 4798
  },
  {
    "id": 1120,
    "sku": "SAM-S9",
    "nome": "Samsung Galaxy Tab S9",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 4198.15,
    "precoMercado": 4939,
    "margem": 30,
    "precoVenda": 5457.59,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung",
    "imagem": "https://samsungbrshop.vtexassets.com/arquivos/ids/221603/Galaxy-Tab-S9_Beige_Product-Image_Combo.jpg?v=638309860446200000",
    "linkCompra": "https://www.amazon.com.br/Tablet-Samsung-Galaxy-256GB-Imersiva/dp/B0CCSYG7WM/ref=asc_df_B0CCSYG7WM?mcid=bc4d822a1dcc3ebc9d95283f40bc4138&tag=googleshopp00-20&linkCode=df0&hvadid=709884378406&hvpos=&hvnetw=g&hvrand=10773635100380818374&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2199233886662&language=pt_BR&gad_source=4&th=1",
    "descricao": "Samsung Galaxy Tab S9",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 4499
  },
  {
    "id": 1121,
    "sku": "SAM-S9U",
    "nome": "Samsung Galaxy Tab S9 Ultra",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 7130.65,
    "precoMercado": 8389,
    "margem": 30,
    "precoVenda": 9269.84,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung",
    "imagem": "https://samsungbrshop.vtexassets.com/arquivos/ids/221618/Galaxy-Tab-S9-Ultra_Graphite_Product-Image_L30.jpg?v=638514852971500000",
    "linkCompra": "https://www.amazon.com.br/Tablet-Samsung-Galaxy-Ultra-Imersiva/dp/B0CCSWW53B/ref=asc_df_B0CCSWW53B?mcid=f3d08583cdb83c32ac71dfaaf9f7b7cb&tag=googleshopp00-20&linkCode=df0&hvadid=709884378406&hvpos=&hvnetw=g&hvrand=1435665723694953185&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2201985159358&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Samsung Galaxy Tab S9 Ultra",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 5599
  },
  {
    "id": 1122,
    "sku": "SAM-GW6C",
    "nome": "Samsung Galaxy Watch 6 Classic",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 2540.65,
    "precoMercado": 2989,
    "margem": 30,
    "precoVenda": 3302.85,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung Store",
    "imagem": "https://images.samsung.com/is/image/samsung/p6pim/br/2307/gallery/br-galaxy-watch6-classic-r955-sm-r955fzkpzto-537403062?$684_547_PNG$",
    "linkCompra": "https://www.amazon.com.br/Samsung-Smartwatch-Galaxy-Watch6-Classic/dp/B0CCQHW5LZ/ref=asc_df_B0CCQHW5LZ?mcid=160723eeed4b313db37c8ea652980ea7&tag=googleshopp00-20&linkCode=df0&hvadid=709964503139&hvpos=&hvnetw=g&hvrand=2219707247173264181&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2205806207981&language=pt_BR&gad_source=4&th=1",
    "descricao": "Samsung Galaxy Watch 6 Classic",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 1880.9
  },
  {
    "id": 1123,
    "sku": "SAM-Z5",
    "nome": "Samsung Galaxy Z Fold 5",
    "categoria": "Eletrônicos",
    "subcategoria": "Smartphones",
    "quantidade": 10,
    "custoBase": 9944.15,
    "precoMercado": 11699,
    "margem": 30,
    "precoVenda": 12927.4,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung Store",
    "imagem": "https://i.zst.com.br/thumbs/12/2b/30/-1080111374.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/samsung-galaxy-z-fold6-512gb-5g-12gb-ram-tela-76-cor-azul/p/MLB47352720?pdp_filters=item_id%3AMLB4253839095&from=gshop&matt_tool=72329320&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22117557780&matt_ad_group_id=175053681764&matt_match_type=&matt_network=g&matt_device=c&matt_creative=728942948130&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB47352720-product&matt_product_partition_id=2387499719907&matt_target_id=aud-1966852281496:pla-2387499719907&cq_src=google_ads&cq_cmp=22117557780&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22117557780&gbraid=0AAAAAD93qcDcwPhC12hVf9dFQL1RXX7fz&gclid=CjwKCAjw3tzHBhBREiwAlMJoUjkvh9o2rkvoz-iG2tPzORoek4OaJRS74PwoYrYg3JqhNJnM60fLOBoCS94QAvD_BwE",
    "descricao": "Samsung Galaxy Z Fold 5",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 6849
  },
  {
    "id": 1124,
    "sku": "SAM-SPEN",
    "nome": "Samsung S Pen Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 602.65,
    "precoMercado": 709,
    "margem": 30,
    "precoVenda": 783.45,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung",
    "imagem": "https://m.media-amazon.com/images/I/41blDtDcSUL._UF894,1000_QL80_.jpg",
    "linkCompra": "https://www.magazineluiza.com.br/caneta-s-pen-samsung-galaxy-book-pro-360-original/p/jd4b9cb4a4/tb/ctke/?seller_id=shoptyru&srsltid=AfmBOorpJ6FwRArLz4aKXUyh9nc2cAj_I19gHm045yuqJs-PBb1ezcLCb8E&region_id=123473",
    "descricao": "Samsung S Pen Pro",
    "especificacoes": {
      "marketplace": "Magalu",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 288
  },
  {
    "id": 1125,
    "sku": "SAM-T7",
    "nome": "Samsung T7 Shield Portable SSD 4TB",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 1877.65,
    "precoMercado": 2209,
    "margem": 30,
    "precoVenda": 2440.94,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/474364/xlarge/SSD-Externo-4Tb-Samsung-T7-Shield-Usb-3-2-Usb-c-Leitura-1050-Mb-s-Grava-o-1000-Mb-s-Port-til-Preto-Mu-pe4t0s-am_1759850015.jpg",
    "linkCompra": "https://www.amazon.com.br/SAMSUNG-velocidades-armazenamento-profissionais-MU-PC4T0T/dp/B0CX9BV341/ref=asc_df_B0CX9BV341?mcid=784c518c3b3435f1b3ef88094c1afbf2&tag=googleshopp00-20&linkCode=df0&hvadid=709884378385&hvpos=&hvnetw=g&hvrand=16143489308032236431&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2303395295889&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Samsung T7 Shield Portable SSD 4TB",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 2142
  },
  {
    "id": 1126,
    "sku": "SAM-FREE",
    "nome": "Samsung The Freestyle Projetor",
    "categoria": "Eletrônicos",
    "subcategoria": "Projetores",
    "quantidade": 10,
    "custoBase": 4402.15,
    "precoMercado": 5179,
    "margem": 30,
    "precoVenda": 5722.8,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung",
    "imagem": "https://images.samsung.com/is/image/samsung/p6pim/br/feature/others/br-feature-the-freestyle-lsp3b-531616600?$FB_TYPE_A_MO_JPG$",
    "linkCompra": "https://shop.samsung.com/br/samsung-the-freestyle-2nd-gen-projetor-smart-portatil/p?idsku=6014&cid=br_pd_ppc_prfmx_vd-cross-product_ecommerce_22501600073-pmax-sound-projector-ce-aon-hq-gads-monks_pla_none_idSP-LFF3CLAXXZD&keeplink=true&gad_source=4&gad_campaignid=22505103835&gbraid=0AAAAADJayZ3Opb-0_gk_2s59pbC9hAvgW&gclid=CjwKCAjw3tzHBhBREiwAlMJoUiLk4tDAPOOcK80FCzupJ7xBQvJJVG-265zzTdSz_jsu8JnPp3YiMxoCc_AQAvD_BwE",
    "descricao": "Samsung The Freestyle Projetor",
    "especificacoes": {
      "marketplace": "Samsung",
      "prazoEntrega": "25 DIAS"
    },
    "precoConcorrente": 3799
  },
  {
    "id": 1127,
    "sku": "SAN-EXT",
    "nome": "SanDisk Extreme Portable SSD 2TB",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Em Estoque",
    "fornecedor": "SanDisk",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/315072/xlarge/SSD-Externo-Sandisk-Extreme-2TB-1050-MBS-Leitura-1000-MBS-Escrita_1752612881.jpg",
    "linkCompra": "https://www.kabum.com.br/produto/534687/ssd-externo-portatil-sandisk-2tb-usb-leitura-800mb-s-preto-e-laranja-sdssde30-2t00-g26?utm_id=22429436066&gad_source=4&gad_campaignid=22429436066&gbraid=0AAAAADx-HyGsQWGEf5QeFb0QCD_UqjKpf&gclid=CjwKCAjw3tzHBhBREiwAlMJoUg4znf8XEWzKZqLmmttJi8TLHNFnG489OjNteMfwU4BGAwIJWlIaFBoC-H4QAvD_BwE",
    "descricao": "SanDisk Extreme Portable SSD 2TB",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 809.99
  },
  {
    "id": 1128,
    "sku": "SEN-MOM4",
    "nome": "Sennheiser Momentum 4 Wireless",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 2098.65,
    "precoMercado": 2469,
    "margem": 30,
    "precoVenda": 2728.25,
    "estoque": "Em Estoque",
    "fornecedor": "Sennheiser",
    "imagem": "https://br.sennheiser-hearing.com/cdn/shop/files/Sennheiser_MOMENTUM__4_Wireless_DENIM_Fone_de_Ouvido_Sem_Fio_Bluetooth_HI-END_PREMIUM_principal_1000x.jpg?v=1718648231",
    "linkCompra": "https://www.amazon.com.br/Sennheiser-Consumer-Audio-Momentum-Wireless/dp/B0B6GHW1SX/ref=asc_df_B0B6GHW1SX?mcid=06b41008319c35658df8850f5f2fe6f7&tag=googleshopp00-20&linkCode=df0&hvadid=709964503106&hvpos=&hvnetw=g&hvrand=3830645167092184741&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-1720305312222&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Sennheiser Momentum 4 Wireless",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "25 DIAS"
    },
    "precoConcorrente": 1999
  },
  {
    "id": 1129,
    "sku": "ECH-SHOW",
    "nome": "Smart Display com Alexa (Echo Show 8)",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 1462,
    "precoMercado": 1720,
    "margem": 30,
    "precoVenda": 1900.6,
    "estoque": "Em Estoque",
    "fornecedor": "Amazon",
    "imagem": "https://images.kabum.com.br/produtos/fotos/653050/echo-show-8-3-geracao-amazon-smart-display-com-audio-espacial-hub-de-casa-inteligente-e-alexa-camera-13mp-preto-b0bls1xm8l_1732215857_gg.jpg",
    "linkCompra": "https://shopee.com.br/product/450412298/22294417120?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMEZycHpBalBMdmxBOXdNS2ZBSVZ6YS9jSlRSSWlQeVBkU3NIcVJvYXVQclZ4b1R0djB0MDFtNU15eWtSeWJKTkFIY2UxQ2hnU3lVRC9TaWVmYlJBUmxBcC8wVHplSWxrYTdqOWVoQmMxVEhBPT0",
    "descricao": "Smart Display com Alexa (Echo Show 8)",
    "especificacoes": {
      "marketplace": "Shopee",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 1259.99
  },
  {
    "id": 1130,
    "sku": "SON-MOT",
    "nome": "Sonoff SNZB-03 Sensor Movimento Zigbee (Pack 4)",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 220.15,
    "precoMercado": 259,
    "margem": 30,
    "precoVenda": 286.19,
    "estoque": "Em Estoque",
    "fornecedor": "Sonoff",
    "imagem": "https://cdn.awsli.com.br/600x450/1277/1277128/produto/98757378/f7336f0f8b.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/sensor-de-movimento-snzb-03-zigbee-sonoff/p/MLB28661353?pdp_filters=item_id%3AMLB4259963893&from=gshop&matt_tool=69040175&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354310&matt_ad_group_id=173090585196&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882731576&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB28661353-product&matt_product_partition_id=2389885356159&matt_target_id=aud-1966852281496:pla-2389885356159&cq_src=google_ads&cq_cmp=22090354310&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354310&gbraid=0AAAAAD93qcD5ebME9BRAXu651t1dudHKX&gclid=CjwKCAjw3tzHBhBREiwAlMJoUi15V7TKXFH45t2G0bolp01Am4prsztbpDNEuWyltNGaSgiE6u1dARoCjnEQAvD_BwE",
    "descricao": "Sonoff SNZB-03 Sensor Movimento Zigbee (Pack 4)",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "15 DIAS"
    },
    "precoConcorrente": 79
  },
  {
    "id": 1131,
    "sku": "SON-LIN",
    "nome": "Sony LinkBuds S",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 993.65,
    "precoMercado": 1169,
    "margem": 30,
    "precoVenda": 1291.75,
    "estoque": "Em Estoque",
    "fornecedor": "Sony",
    "imagem": "https://www.sony.com.ph/image/aede2beae43cc6962d7f9347174e4c18?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9",
    "linkCompra": "https://www.carrefour.com.br/fones-de-ouvido-com-cancelamento-de-ruido-sem-fio-sony-linkbuds-s-mp953290676/p?utm_medium=sem&utm_source=google_pmax_3p&utm_campaign=3p_performancemax_todos_os_produtos&gad_source=4&gad_campaignid=17931135269&gbraid=0AAAAADjinolM5nnGgvbnbNauIjj3sAoW2&gclid=CjwKCAjw3tzHBhBREiwAlMJoUsWH6_elO0-4MJmj8k9qCBiR0IwuEwSW_Tv57fuCK6Z0mkVjgL5OFRoCTqoQAvD_BwE",
    "descricao": "Sony LinkBuds S",
    "especificacoes": {
      "marketplace": "Carrefour",
      "prazoEntrega": "18 DIAS"
    },
    "precoConcorrente": 801.32
  },
  {
    "id": 1132,
    "sku": "SON-WH",
    "nome": "Sony WH-1000XM5",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 2098.65,
    "precoMercado": 2469,
    "margem": 30,
    "precoVenda": 2728.25,
    "estoque": "Em Estoque",
    "fornecedor": "Sony",
    "imagem": "https://www.sony.com.br/image/6539959b6c50b04c5cec4e23134c1137?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9",
    "linkCompra": "https://www.amazon.com.br/Sony-WH-1000XM5-cancelamento-otimizador-cristalinas/dp/B09XS7JWHH/ref=asc_df_B09XS7JWHH?mcid=0933e55813db37228ff8f592160a89d2&tag=googleshopp00-20&linkCode=df0&hvadid=709964502947&hvpos=&hvnetw=g&hvrand=6431384536663087470&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-1657510439666&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Sony WH-1000XM5",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 1937
  },
  {
    "id": 1133,
    "sku": "SON-ZVE10",
    "nome": "Sony ZV-E10",
    "categoria": "Eletrônicos",
    "subcategoria": "Câmeras",
    "quantidade": 10,
    "custoBase": 3977.15,
    "precoMercado": 4679,
    "margem": 30,
    "precoVenda": 5170.3,
    "estoque": "Em Estoque",
    "fornecedor": "Sony",
    "imagem": "https://cdn.awsli.com.br/800x800/1545/1545522/produto/285529497/1627386359_1655301-d30x66i55o.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/sony-alpha-zv-e10-ilczve10-mirrorless-preta-sem-lente/p/MLB18931584?pdp_filters=item_id%3AMLB4247145793&from=gshop&matt_tool=91562990&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193891&matt_ad_group_id=174661981564&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914180922&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098639&matt_product_id=MLB18931584-product&matt_product_partition_id=2387571483576&matt_target_id=aud-1966852281496:pla-2387571483576&cq_src=google_ads&cq_cmp=22090193891&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193891&gbraid=0AAAAAD93qcAbr94ekuco6N18BibxqKup5&gclid=CjwKCAjw3tzHBhBREiwAlMJoUrAsr2QVr4qG-3DGVba_I-7WWLkg7lzvB-eSE5j97lucBjHR1B6NGBoCn0kQAvD_BwE",
    "descricao": "Sony ZV-E10",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 5405
  },
  {
    "id": 1134,
    "sku": "SSD-SAM-DAV",
    "nome": "SSD Portátil Samsung T7 TITAN 1TB preto",
    "categoria": "Eletrônicos",
    "subcategoria": "SSDs",
    "quantidade": 10,
    "custoBase": 894.41,
    "precoMercado": 1052.25,
    "margem": 30,
    "precoVenda": 1162.74,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/514160/xlarge/SSD-Samsung-1tb-T7-Titan-Shield_1759997019.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/memoria-samsung-ssd-1tb-portatil-t7-titan/p/MLB17332828?pdp_filters=item_id%3AMLB5256521584&from=gshop&matt_tool=61921241&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354535&matt_ad_group_id=173090630876&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734651&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB17332828-product&matt_product_partition_id=2389849485325&matt_target_id=aud-1966852281496:pla-2389849485325&cq_src=google_ads&cq_cmp=22090354535&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354535&gbraid=0AAAAAD93qcAzn26R504Y-7i_PmoTEh0DF&gclid=CjwKCAjw3tzHBhBREiwAlMJoUpbysofpuTxV85zn0fIoYtQM9gmNaU5Obc4sacuZ22QlD9OHvHD_FxoCEcgQAvD_BwE",
    "descricao": "SSD Portátil Samsung T7 TITAN 1TB preto",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 915
  },
  {
    "id": 1135,
    "sku": "STE-DECK",
    "nome": "Steam Deck 512GB",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 3645.65,
    "precoMercado": 4289,
    "margem": 30,
    "precoVenda": 4739.35,
    "estoque": "Em Estoque",
    "fornecedor": "Valve",
    "imagem": "https://cdn.awsli.com.br/2500x2500/2598/2598981/produto/2201435861c64d55a1c.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/console-valve-steam-deck-512gb-standard-cor-preto-2022/p/MLB19735758?pdp_filters=item_id%3AMLB3934741563&from=gshop&matt_tool=20691730&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193900&matt_ad_group_id=174661982764&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914181198&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB19735758-product&matt_product_partition_id=2393412443932&matt_target_id=aud-1966852281496:pla-2393412443932&cq_src=google_ads&cq_cmp=22090193900&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193900&gbraid=0AAAAAD93qcAUFeP5dcTRRFG-V9NsTTXd_&gclid=CjwKCAjw3tzHBhBREiwAlMJoUuMC7mx_CJlYqaxix_MPvxozHTtJlVAcG3pGxXV5f8K8bA4enXCzWxoCYzYQAvD_BwE",
    "descricao": "Steam Deck 512GB",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "15 DIAS"
    },
    "precoConcorrente": 4413.5
  },
  {
    "id": 1136,
    "sku": "STE-APE",
    "nome": "SteelSeries Apex Pro TKL",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 1214.65,
    "precoMercado": 1429,
    "margem": 30,
    "precoVenda": 1579.04,
    "estoque": "Em Estoque",
    "fornecedor": "SteelSeries",
    "imagem": "https://br.octoshop.com/cdn/shop/files/15169-3_1.jpg?v=1739274027",
    "linkCompra": "amazon.com.br/Novo-SteelSeries-Apex-Wireless-2023/dp/B0BF67DM6K/ref=asc_df_B0BF67DM6K?mcid=79132a3fce8c3cc48085f95220a2158b&tag=googleshopp00-20&linkCode=df0&hvadid=709884378379&hvpos=&hvnetw=g&hvrand=11910704690160347213&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-1836118910615&psc=1&language=pt_BR&gad_source=4",
    "descricao": "SteelSeries Apex Pro TKL",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 1380
  },
  {
    "id": 1137,
    "sku": "SUP-MON-DAV",
    "nome": "Suporte de Mesa Articulado p/ Monitor de até 32\" Fitter Preto",
    "categoria": "Casa e Cozinha",
    "subcategoria": "Periféricos",
    "quantidade": 10,
    "custoBase": 136.75,
    "precoMercado": 160.88,
    "margem": 30,
    "precoVenda": 177.775,
    "estoque": "Para Compra",
    "fornecedor": "Fitter",
    "imagem": "https://images5.kabum.com.br/produtos/fotos/687705/suporte-para-monitor-fitter-ate-32-articulado-com-pistao-a-gas-preto-f8_1737983628_gg.jpg",
    "linkCompra": "https://www.kabum.com.br/produto/687705/suporte-de-mesa-articulado-para-monitor-de-ate-32-fitter-ajuste-com-pistao-a-gas-vesa-preto-f8?srsltid=AfmBOoqlrvMDSVWFgNEWEl7dFFGKKMtFlA3iGdSbt_ACZhlXBVjg6cLNH4I",
    "descricao": "Suporte de Mesa Articulado p/ Monitor de até 32\" Fitter Preto",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 139.9,
    "dataAtualizacao": "2025-10-27T18:39:17.313Z"
  },
  {
    "id": 1138,
    "sku": "SUU-9P",
    "nome": "Suunto 9 Peak Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 3645.65,
    "precoMercado": 4289,
    "margem": 30,
    "precoVenda": 4739.35,
    "estoque": "Em Estoque",
    "fornecedor": "Suunto",
    "imagem": "https://images.yampi.me/assets/stores/relogio-suunto/uploads/images/suunto-9-peak-pro-all-black-63bf1d5b74018-large.PNG",
    "linkCompra": "https://www.mercadolivre.com.br/relogio-esportivo-gps-suunto-9-peak-pro-com-bateria-extremamente-longa-e-medico-da-frequncia-cardiaca-no-pulso/p/MLB34332661?pdp_filters=item_id%3AMLB5486382842&from=gshop&matt_tool=54660454&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354553&matt_ad_group_id=173090632956&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734918&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB34332661-product&matt_product_partition_id=2389562704490&matt_target_id=aud-1966852281496:pla-2389562704490&cq_src=google_ads&cq_cmp=22090354553&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354553&gbraid=0AAAAAD93qcD4PtqwFFSNnQCU7CP4jFzYk&gclid=CjwKCAjw3tzHBhBREiwAlMJoUiePi6-yfD6CEyvFq0W7KXF0xmGZ1pbuNA16Bma4BBx_FbbAf5lUKBoCeXUQAvD_BwE",
    "descricao": "Suunto 9 Peak Pro",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 2399.9
  },
  {
    "id": 1139,
    "sku": "TAB-S6L",
    "nome": "Tablet Samsung Galaxy Tab S6 Lite 64GB + Caneta S Pen",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 2952.05,
    "precoMercado": 3473,
    "margem": 30,
    "precoVenda": 3837.66,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung",
    "imagem": "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/gsqgdffl/file.png",
    "linkCompra": "https://www.amazon.com.br/SAMSUNG-Galaxy-Lite-10-4-Modelo/dp/B0DF5X6FYS/ref=asc_df_B0DF5X6FYS?mcid=771a13508ce935debb35dece7e863528&tag=googleshopp00-20&linkCode=df0&hvadid=709884378406&hvpos=&hvnetw=g&hvrand=4804066346734066257&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2368567208585&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Tablet Samsung Galaxy Tab S6 Lite 64GB + Caneta S Pen",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "3 DIAS"
    },
    "precoConcorrente": 1910
  },
  {
    "id": 1140,
    "sku": "TIC-P3U",
    "nome": "TicWatch Pro 5 Ultra",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 2209.15,
    "precoMercado": 2599,
    "margem": 30,
    "precoVenda": 2871.9,
    "estoque": "Em Estoque",
    "fornecedor": "Mobvoi",
    "imagem": "https://www.cnet.com/a/img/resize/deca00e2704b7e56feb8f438eca37bd811df5d6d/hub/2023/11/16/9d7bcfe4-08dd-4183-a265-9141240e8c98/ticwatch-pro-5-24.jpg?auto=webp&fit=crop&height=1200&width=1200",
    "linkCompra": "https://www.mercadolivre.com.br/relogio-smartwatch-ticwatch-pro-5-wear-os-nfc-gps-disponivel/p/MLB25835159?pdp_filters=item_id%3AMLB4234436303&from=gshop&matt_tool=96040271&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090193909&matt_ad_group_id=174661987364&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727914181381&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB25835159-product&matt_product_partition_id=2389562704290&matt_target_id=aud-1966852281496:pla-2389562704290&cq_src=google_ads&cq_cmp=22090193909&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090193909&gbraid=0AAAAAD93qcA8JV7igp3Yx9wibPfJSSFAE&gclid=CjwKCAjw3tzHBhBREiwAlMJoUi9MNyFR_e7ztNgACAoKG2HbFcpNSBYhcdDbRrXPxenxoWGY5SG6dBoC6I8QAvD_BwE",
    "descricao": "TicWatch Pro 5 Ultra",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "15 DIAS"
    },
    "precoConcorrente": 2089.9
  },
  {
    "id": 1141,
    "sku": "TOM-BRA",
    "nome": "Tomtoc Mochila 40L Travel Backpack",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 385.9,
    "precoMercado": 454,
    "margem": 30,
    "precoVenda": 501.67,
    "estoque": "Em Estoque",
    "fornecedor": "Tomtoc",
    "imagem": "https://carrefourbr.vtexassets.com/arquivos/ids/182160227/image-0.jpg?v=638718139285070000",
    "linkCompra": "https://produto.mercadolivre.com.br/MLB-4194818463-mochila-tomtoc-40l-p-viagem-resistente-e-leve-_JM?matt_tool=84877422&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22162683727&matt_ad_group_id=174777649598&matt_match_type=&matt_network=g&matt_device=c&matt_creative=730347008845&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5621557431&matt_product_id=MLB4194818463-190480120363&matt_product_partition_id=2396211659448&matt_target_id=aud-1966852281496:pla-2396211659448&cq_src=google_ads&cq_cmp=22162683727&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22162683727&gbraid=0AAAAAD93qcC_lDVV6o3gQCLTiwpgHeIYm&gclid=CjwKCAjw3tzHBhBREiwAlMJoUmqvrACC365mP2JAB2_QemEHAs1UOY34i0GpVKVSjJZY5T-lPzlt_BoCJIgQAvD_BwE",
    "descricao": "Tomtoc Mochila 40L Travel Backpack",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "25 DIAS"
    },
    "precoConcorrente": 525.61
  },
  {
    "id": 1142,
    "sku": "TP-TAP",
    "nome": "TP-Link Tapo C520WS Câmera 360°",
    "categoria": "Eletrônicos",
    "subcategoria": "Smart Home",
    "quantidade": 10,
    "custoBase": 385.9,
    "precoMercado": 454,
    "margem": 30,
    "precoVenda": 501.67,
    "estoque": "Em Estoque",
    "fornecedor": "TP-Link",
    "imagem": "https://http2.mlstatic.com/D_NQ_NP_875471-MLU77331817915_062024-O.webp",
    "linkCompra": "https://www.mercadolivre.com.br/cmera-de-seguranca-wifi-2k-externa-tp-link-tapo-c520ws-4mp/p/MLB29791970?pdp_filters=item_id%3AMLB4936058326&from=gshop&matt_tool=69040175&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354310&matt_ad_group_id=173090585276&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882731582&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB29791970-product&matt_product_partition_id=2390285971424&matt_target_id=aud-1966852281496:pla-2390285971424&cq_src=google_ads&cq_cmp=22090354310&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354310&gbraid=0AAAAAD93qcD5ebME9BRAXu651t1dudHKX&gclid=CjwKCAjw3tzHBhBREiwAlMJoUjuozZsgtQADZE7ccvIJIIPiFjoC4KiidNSrZw39Dtlf4kZA1mozgRoC5vkQAvD_BwE",
    "descricao": "TP-Link Tapo C520WS Câmera 360°",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "25 DIAS"
    },
    "precoConcorrente": 420.78
  },
  {
    "id": 1143,
    "sku": "WEB-LOG-DAV",
    "nome": "Webcam Logitech C920E 1080P",
    "categoria": "Eletronicos",
    "subcategoria": "Periféricos",
    "quantidade": 10,
    "custoBase": 338.2,
    "precoMercado": 397.88,
    "margem": 30,
    "precoVenda": 439.65,
    "estoque": "Em Estoque",
    "fornecedor": "Logitech",
    "imagem": "https://m.magazineluiza.com.br/a-static/420x420/webcam-logitech-c920e-1080p-vc-960-001401/olistsp/osp8wur0ewcaje4d/afcd64942ac58f99523381e045c66bcb.jpeg",
    "linkCompra": "https://www.magazineluiza.com.br/webcam-logitech-c920e-1080p-vc-960-001401/p/fgjc8c9g52/in/webc/?&seller_id=olistsp&utm_source=google&utm_medium=cpc&utm_term=80687&utm_campaign=google_eco_per_ven_pla_tc_sor_3p_in-csp&utm_content=&partner_id=80687&gclsrc=aw.ds&gad_source=4&gad_campaignid=22829565580&gbraid=0AAAAAD4zZmQ9DKUPBjRaCpe7vCMzULl2Q&gclid=CjwKCAjw3tzHBhBREiwAlMJoUq7Vbn9r2zbBiXZtK4TwvMplLS1XAG9-DbCLYWgx5kfT_L6gFrad8hoCJtMQAvD_BwE",
    "descricao": "Webcam Logitech C920E 1080P",
    "especificacoes": {
      "marketplace": "Magalu",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 345.98
  },
  {
    "id": 1144,
    "sku": "WHO-4",
    "nome": "WHOOP 4.0",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 1988.15,
    "precoMercado": 2339,
    "margem": 30,
    "precoVenda": 2584.59,
    "estoque": "Em Estoque",
    "fornecedor": "WHOOP",
    "imagem": "https://images.ctfassets.net/rbzqg6pelgqa/2L5W622UNiYxlnHE3hHGAL/d3443637b907fe3541f32a8d9fe58cbc/Peak_card__1_.png",
    "linkCompra": "https://www.mercadolivre.com.br/pulseira-para-relogio-whoop-whoop-40-com-fecho-de-velcro-cor-preto/p/MLB39874309?pdp_filters=item_id%3AMLB3846632197&from=gshop&matt_tool=72449112&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354460&matt_ad_group_id=173090602476&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882732713&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB39874309-product&matt_product_partition_id=2389182212126&matt_target_id=aud-1966852281496:pla-2389182212126&cq_src=google_ads&cq_cmp=22090354460&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354460&gbraid=0AAAAAD93qcCs4cFm9EekTXtq_2N7iu9Zq&gclid=CjwKCAjw3tzHBhBREiwAlMJoUuEpP8F1K2oGbo4Tn1WgzLdIUcaxr_VRxJkt5fl2jnHyEj1nsKJu3hoCf6wQAvD_BwE",
    "descricao": "WHOOP 4.0",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "10 DIAs"
    },
    "precoConcorrente": 1948
  },
  {
    "id": 1145,
    "sku": "WIT-SR2",
    "nome": "Withings ScanWatch 2",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 2098.65,
    "precoMercado": 2469,
    "margem": 30,
    "precoVenda": 2728.25,
    "estoque": "Em Estoque",
    "fornecedor": "Withings",
    "imagem": "https://www-assets.withings.com/pages/products/scanwatch-2/media/design/42-silver-black/a.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/relogio-smartwatch-withings-scanwatch-2-whitegray--38mm-p/up/MLBU3461172901?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id:MLB4234770149",
    "descricao": "Withings ScanWatch 2",
    "especificacoes": {
      "marketplace": "MErcado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 3299
  },
  {
    "id": 1146,
    "sku": "XBX-SER",
    "nome": "Xbox Series X",
    "categoria": "Eletrônicos",
    "subcategoria": "Gaming",
    "quantidade": 10,
    "custoBase": 4393.65,
    "precoMercado": 5169,
    "margem": 30,
    "precoVenda": 5711.74,
    "estoque": "Em Estoque",
    "fornecedor": "Microsoft",
    "imagem": "https://cms-assets.xboxservices.com/assets/68/a0/68a0e50d-0d13-42b1-8498-e55cef8a9133.png?n=642227_Hero-Gallery-0_A2_857x676.png",
    "linkCompra": "https://www.carrefour.com.br/console-microsoft-xbox-series-x-1tb-mp940667454/p?utm_medium=sem&utm_source=google_pmax_3p&utm_campaign=3p_performancemax_todos_os_produtos&gad_source=4&gad_campaignid=17931135269&gbraid=0AAAAADjinolM5nnGgvbnbNauIjj3sAoW2&gclid=CjwKCAjw3tzHBhBREiwAlMJoUnFqr2NIWWPowrdyzTrbAI7VvyY7W1MilOpxDbRHE7QZA5_OVCcoeBoCC9UQAvD_BwE",
    "descricao": "Xbox Series X",
    "especificacoes": {
      "marketplace": "Carrefour",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 4799
  },
  {
    "id": 1147,
    "sku": "XGI-HOR2P",
    "nome": "XGIMI Horizon 2 Pro Projetor 4K",
    "categoria": "Eletrônicos",
    "subcategoria": "Projetores",
    "quantidade": 10,
    "custoBase": 8703.15,
    "precoMercado": 10239,
    "margem": 30,
    "precoVenda": 11314.09,
    "estoque": "Sob Consulta",
    "fornecedor": "XGIMI",
    "imagem": "https://m.media-amazon.com/images/I/61aAjqPd7kL._AC_SL1464_.jpg",
    "linkCompra": "https://www.amazon.com.br/s?k=XGIMI+Horizon+2+Pro+Projetor+4K",
    "descricao": "XGIMI Horizon 2 Pro Projetor 4K",
    "especificacoes": {
      "marketplace": "",
      "prazoEntrega": ""
    }
  },
  {
    "id": 1148,
    "sku": "XIA-14P",
    "nome": "Xiaomi 14 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Smartphones",
    "quantidade": 10,
    "custoBase": 5524.15,
    "precoMercado": 6499,
    "margem": 30,
    "precoVenda": 7181.39,
    "estoque": "Em Estoque",
    "fornecedor": "Xiaomi Store",
    "imagem": "https://br.octoshop.com/cdn/shop/files/Xiaomi_14_Ultra_16GB_19.jpg?v=1748025038",
    "linkCompra": "https://shopee.com.br/product/357995419/22093957625?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBM255SmdoQW1VKzQ4RHhwYjN1bkdhNFZqMkpBTXl6WVd5dmEwalBXYXZLUXRaTlNkT0c5ZitVV1J1cHU4S09jekRybXlSZTFORTB1Ynh5bGplTGNVSWJXTVpFQ2ZPN1FzaFBHQmNVdVplMlpnPT0",
    "descricao": "Xiaomi 14 Pro",
    "especificacoes": {
      "marketplace": "Shopee",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 4369
  },
  {
    "id": 1149,
    "sku": "XIA-PAD6",
    "nome": "Xiaomi Pad 6",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 2098.65,
    "precoMercado": 2469,
    "margem": 30,
    "precoVenda": 2728.25,
    "estoque": "Em Estoque",
    "fornecedor": "Xiaomi",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/580369/Tablet-Xiaomi-Mi-Pad-6-8GB-RAM-128GB-Octa-Core-Camera-13MP-Tela-De-11-Gravity-Gray_1716309108_gg.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/xiaomi-redmi-pad-pro-6-gb-de-ram-128-gb-rom-121-10000mah-cinza/p/MLB39296393?pdp_filters=item_id%3AMLB5594384630&from=gshop&matt_tool=61921241&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354535&matt_ad_group_id=173090632476&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734705&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB39296393-product&matt_product_partition_id=2419098728084&matt_target_id=aud-1966852281496:pla-2419098728084&cq_src=google_ads&cq_cmp=22090354535&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354535&gbraid=0AAAAAD93qcAzn26R504Y-7i_PmoTEh0DF&gclid=CjwKCAjw3tzHBhBREiwAlMJoUjmcfxaDRf5Ey7iJJvkK5WiHTtAGsaMIMsuRTpCGiYnL2fu3YC6LNhoCqJQQAvD_BwE",
    "descricao": "Xiaomi Pad 6",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "20 DIAS"
    },
    "precoConcorrente": 1850
  },
  {
    "id": 1150,
    "sku": "XIA-SMB8P",
    "nome": "Xiaomi Smart Band 8 Pro",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 385.9,
    "precoMercado": 454,
    "margem": 30,
    "precoVenda": 501.67,
    "estoque": "Em Estoque",
    "fornecedor": "Xiaomi Store",
    "imagem": "https://cdn.sistemawbuy.com.br/arquivos/b0c36266e1a9271e949cf113bd58d369/produtos/665b4f3d466d9/whatsapp-image-2024-06-01-at-13-34-56-665b4f3dd7d87.jpeg",
    "linkCompra": "https://www.mercadolivre.com.br/xiaomi-smart-band-8-pro-mi-band-8-pro-gps-tela-grande-caixa-preto/p/MLB27990014?pdp_filters=item_id%3AMLB4256925715&from=gshop&matt_tool=35546102&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354262&matt_ad_group_id=173090559116&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882729392&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128188&matt_product_id=MLB27990014-product&matt_product_partition_id=2389562704450&matt_target_id=aud-1966852281496:pla-2389562704450&cq_src=google_ads&cq_cmp=22090354262&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354262&gbraid=0AAAAAD93qcCE_mQwPZDywp7_irXY_lSMx&gclid=CjwKCAjw3tzHBhBREiwAlMJoUtkfoDWwjRIrI3DyKqArUWWWghGcYptW4sJVHV9gP9Twh7LV1pfY1BoCZN0QAvD_BwE",
    "descricao": "Xiaomi Smart Band 8 Pro",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 499
  },
  {
    "id": 1151,
    "sku": "OUR-R4",
    "nome": "🔥 NOVO! Oura Ring 4 - Smart Ring Premium",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 1,
    "custoBase": 3959.99,
    "precoMercado": 3959.99,
    "margem": 20,
    "precoVenda": 4751.987999999999,
    "estoque": "Para Compra",
    "fornecedor": "Oura",
    "imagem": "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0eeb09bd-34e8-49a7-b45a-a16ccf6754f7.__CR0,0,990,743_PT0_SX600_V1___.png",
    "linkCompra": "https://www.mercadolivre.com.br/oura-ring-horizon-4-geracao--tamanho-08-cor-black/up/MLBU3042405267?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id:MLB3991106621",
    "descricao": "🔥 NOVO! Oura Ring 4 - Smart Ring Premium",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 3677,
    "dataAtualizacao": "2025-10-27T17:52:23.356Z"
  },
  {
    "id": 1152,
    "sku": "CAR-SAN-DAV",
    "nome": "Cartão De Memória Micro Sdxc Sandisk Ultra 512gb 150mb's",
    "categoria": "Eletrônicos",
    "subcategoria": "Acessórios",
    "quantidade": 10,
    "custoBase": 146.62,
    "precoMercado": 172.5,
    "margem": 30,
    "precoVenda": 190.61,
    "estoque": "Em Estoque",
    "fornecedor": "Samsung",
    "imagem": "https://static.nagem.com.br/util/artefatos/produtos/m/n/1251271716296807/598909_3.jpg",
    "linkCompra": "https://shopee.com.br/product/412351525/22497544051?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBM09ZL21lZnQzb0I0NHNVVVh6c0Mwakd0d1JzdlFUMVBicFhQaDRER3VscUtOZkNCOEU1ZnUzR3RSdm1Tc0JlbHAwVThaTUtvY0NpeW04SnM0bFVJeit3V0tVRWNQL1F3dkNZcWpQM3NiR3ZBPT0&gad_source=4&gad_campaignid=20818538781&gbraid=0AAAAACoEtRkjsV7TZs87xtb_q3Kzie_Hd&gclid=CjwKCAjw3tzHBhBREiwAlMJoUmXC3DhGCaWo33cAP5T3P30FFkthlqY1kgVr6g25b5XgzhU_cHrtAhoC9ucQAvD_BwE",
    "descricao": "Cartão De Memória Micro Sdxc Sandisk Ultra 512gb 150mb's",
    "especificacoes": {
      "marketplace": "Shopee",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 150
  },
  {
    "id": 1153,
    "sku": "1MOR-EVO-DAV",
    "nome": "Fone De Ouvido 1more Sonoflow Cancelamento De Ruído Hi-res",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 634.4,
    "precoMercado": 746.35,
    "margem": 30,
    "precoVenda": 824.72,
    "estoque": "Em Estoque",
    "fornecedor": "1MORE",
    "imagem": "https://http2.mlstatic.com/D_Q_NP_918362-MLU77344389955_062024-O.webp",
    "linkCompra": "https://www.mercadolivre.com.br/fone-de-ouvido-1more-sonoflow-cancelamento-de-ruido-hi-res/p/MLB21086921?pdp_filters=item_id%3AMLB3444525521&from=gshop&matt_tool=54660454&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354553&matt_ad_group_id=173090632796&matt_match_type=&matt_network=g&matt_device=c&matt_creative=727882734915&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB21086921-product&matt_product_partition_id=2391999850075&matt_target_id=aud-1966852281496:pla-2391999850075&cq_src=google_ads&cq_cmp=22090354553&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354553&gbraid=0AAAAAD93qcD4PtqwFFSNnQCU7CP4jFzYk&gclid=CjwKCAjw3tzHBhBREiwAlMJoUk7G0MdDaSfMBtVGB1FLiCe8rb6l-VkeCpmxizQ5gFJ7qaV-pmbF5RoCGsgQAvD_BwE",
    "descricao": "Fone De Ouvido 1more Sonoflow Cancelamento De Ruído Hi-res",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "7 A 10 DIAS"
    },
    "precoConcorrente": 649
  },
  {
    "id": 1154,
    "sku": "ACE-SWI-DAV",
    "nome": "Notebook Acer Swift 16 Ai Sf16-51t-76tg OLED Ultra 7",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 7948,
    "precoMercado": 9350.59,
    "margem": 30,
    "precoVenda": 10332.4,
    "estoque": "Em Estoque",
    "fornecedor": "Acer",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/707205/xlarge/Notebook-Acer-Swift-16-Ai-Sf16-51t-76tg-OLED-Ultra-7-LpDDR5x_1738764951.jpg",
    "linkCompra": "https://www.kabum.com.br/produto/707205/notebook-acer-swift-16-ai-sf16-51t-76tg-oled-ultra-7-lpddr5x?utm_id=21434223541&gad_source=4&gad_campaignid=21423803016&gbraid=0AAAAADx-HyHB_MCqy-P3d9Br2XHAXK0iO&gclid=CjwKCAjw3tzHBhBREiwAlMJoUuJV0fM9zYmGi5HConX7Jgz2SsCpgSS5M-BD7oTYyMmtjJSbybdz3xoCJz4QAvD_BwE",
    "descricao": "Notebook Acer Swift 16 Ai Sf16-51t-76tg OLED Ultra 7",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "10 a 15 DIAS"
    },
    "precoConcorrente": 8130.95
  },
  {
    "id": 1155,
    "sku": "AMA-FIT5-DAV",
    "nome": "Amazfit Bip 5 A2215 46mm Relógio inteligente tela de 1,91",
    "categoria": "Eletrônicos",
    "subcategoria": "Wearables",
    "quantidade": 10,
    "custoBase": 444.66,
    "precoMercado": 523.13,
    "margem": 30,
    "precoVenda": 578.06,
    "estoque": "Em Estoque",
    "fornecedor": "Amazfit",
    "imagem": "https://http2.mlstatic.com/D_Q_NP_830728-MLU77145782010_062024-O.webp",
    "linkCompra": "https://www.amazon.com.br/Amazfit-A2215-inteligente-polegadas-rastreamento/dp/B0DD3WMVG7/ref=asc_df_B0DD3WMVG7?mcid=f2f2609e1ff83bf69f3742ffc9a9528a&tag=googleshopp00-20&linkCode=df0&hvadid=709964503139&hvpos=&hvnetw=g&hvrand=627867001933701766&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2364390846606&language=pt_BR&gad_source=4&th=1",
    "descricao": "Amazfit Bip 5 A2215 46mm Relógio inteligente tela de 1,91",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 454.9
  },
  {
    "id": 1156,
    "sku": "AMZ-FIRE-DAV",
    "nome": "Tablet Amazon Fire HD 10 11 Gen 10.1\" 64 GB Wi-Fi - Preto",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 1399.78,
    "precoMercado": 1646.8,
    "margem": 30,
    "precoVenda": 1819.71,
    "estoque": "Em Estoque",
    "fornecedor": "Amazon",
    "imagem": "https://m.media-amazon.com/images/I/61y-9Uk3D1L._AC_SL1000_.jpg",
    "linkCompra": "https://www.magazineluiza.com.br/tablet-amazon-fire-hd-10-11-gen-10-1-64-gb-wi-fi-preto/p/af232596fc/tb/tbtm/?seller_id=grupoduascabecasmetavel&srsltid=AfmBOooIayUUDFxttuhKw7HCEdIZ0uSrnNBPFU_VG4OMIDgynO4_MNlmXbg",
    "descricao": "Tablet Amazon Fire HD 10 11 Gen 10.1\" 64 GB Wi-Fi - Preto",
    "especificacoes": {
      "marketplace": "Magalu",
      "prazoEntrega": "10 a 15 DIAS"
    },
    "precoConcorrente": 1432
  },
  {
    "id": 1157,
    "sku": "ANK-LIB3P-DAV",
    "nome": "Anker soundcore Liberty 4 Fone De Ouvido Bluetooth 5.3 TWS",
    "categoria": "Eletrônicos",
    "subcategoria": "Áudio",
    "quantidade": 10,
    "custoBase": 430,
    "precoMercado": 505.88,
    "margem": 30,
    "precoVenda": 559,
    "estoque": "Em Estoque",
    "fornecedor": "Anker",
    "imagem": "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1h5srzlt2uiad",
    "linkCompra": "https://www.amazon.com.br/soundcore-Cancelamento-Adaptativo-Carregamento-Bluetooth/dp/B0BZV8HLX3/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.-IIc9A586whPOMrCq2g7_KZTPXXKu5I_iJisj8CJp2FR39sy1qoDxS2sIxVrHOThP2gwk1ZuYlbED8QAm_0AitGniWSX1nz9ot8ct9knhA000aos2D_JrNz2zkR15IEjA-hnYo9qxv0vSPTSq1dOwPtH_6wcmKpxwsItRM-q0y-Btn0nXKkvuT9pV_Su43eNocMmkzWWYpvFQ1dN5Vg5GQfKPapLQ6IO5i1VZXsMvy4aUKgOt3oe98CYoiH0XWYLBNBd6PuXu8gvqB9owDWSZUQThex5c5OUK0TQrai5BnM._iJr3XJuymMUb0S11nvsx2VvD7fULra4MM7CiQOEtGM&dib_tag=se&keywords=Anker%2BSoundcore%2BLiberty%2B3%2BPro&qid=1761060808&sr=8-2-spons&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    "descricao": "Anker soundcore Liberty 4 Fone De Ouvido Bluetooth 5.3 TWS",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "5 DIAS"
    },
    "precoConcorrente": 439.9
  },
  {
    "id": 1158,
    "sku": "BEN-TK700-DAV",
    "nome": "Projetor BENQ TK700, 4K UHD, 3.200 ANSI Lumens, HDMI e USB, Branco",
    "categoria": "Eletrônicos",
    "subcategoria": "Projetores",
    "quantidade": 10,
    "custoBase": 11241.24,
    "precoMercado": 13224.99,
    "margem": 30,
    "precoVenda": 14613.61,
    "estoque": "Em Estoque",
    "fornecedor": "BenQ",
    "imagem": "https://www.globalprojetores.com.br/lojas/00031451/prod/BenQ_TK700_G1.JPG",
    "linkCompra": "https://www.kabum.com.br/produto/541480/projetor-benq-tk700-4k-uhd-3-200-ansi-lumens-hdmi-e-usb-branco-9h-jpk77-17l?utm_id=22429584361&gad_source=4&gad_campaignid=22429584361&gbraid=0AAAAADx-HyFZZICOnpjvS2E6blEm5z0ba&gclid=CjwKCAjw3tzHBhBREiwAlMJoUmaFQ_PHThHH3PcUTNUCgGTp6dcB3DC72Xn2mN3_vRpfC5bwlp6o4xoCYAUQAvD_BwE",
    "descricao": "Projetor BENQ TK700, 4K UHD, 3.200 ANSI Lumens, HDMI e USB, Branco",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "7 DIAS"
    },
    "precoConcorrente": 11499.99
  },
  {
    "id": 1159,
    "sku": "DEL-XPS13-DAV",
    "nome": "Notebook Dell XPS 13 9350",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 15248.02,
    "precoMercado": 17938.85,
    "margem": 30,
    "precoVenda": 19822.43,
    "estoque": "Em Estoque",
    "fornecedor": "Dell",
    "imagem": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9350/media-gallery/platinum/notebook-xps-13-9350-t-oled-sl-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3988&hei=2292&qlt=100,1&resMode=sharp2&size=3988,2292&chrss=full&imwidth=5000",
    "linkCompra": "https://www.dell.com/pt-br/shop/cty/pdp/spd/xps-13-9350-intel-laptop/brp9350ubtohfnlw?tfcid=31768715&gacd=9657105-15015-5761040-275878141-0&dgc=ST&cid=22720118575&gclsrc=aw.ds&gad_source=4&gad_campaignid=22720118575&gbraid=0AAAAADz5MFu75aLuMwRF_sYB9auKtqaNH&gclid=CjwKCAjw3tzHBhBREiwAlMJoUn2CgTrWjteKgvCPBqUiRo3HkBtDqhtwuElLYsHC8r8GJ5fIGHGwzRoCq44QAvD_BwE",
    "descricao": "Notebook Dell XPS 13 9350",
    "especificacoes": {
      "marketplace": "Dell",
      "prazoEntrega": "30 DIAS"
    },
    "precoConcorrente": 15599
  },
  {
    "id": 1160,
    "sku": "EPO-3290-DAV",
    "nome": "Epson EX3290 Projetor 3LCD WXGA de 3 chips, 4.000 lúmens, alto brilho de cor, 4.000 lúmens de brilho",
    "categoria": "Eletrônicos",
    "subcategoria": "Projetores",
    "quantidade": 10,
    "custoBase": 6604.97,
    "precoMercado": 7770.55,
    "margem": 30,
    "precoVenda": 8586.46,
    "estoque": "Em Estoque",
    "fornecedor": "Epson",
    "imagem": "https://mediaserver.goepson.com/ImConvServlet/imconv/dafbf57d6ca9238a68b95ff4424e8e7f70ce8455/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=EX3290_headon_690x460%402x",
    "linkCompra": "https://www.amazon.com.br/EX3290-Projetor-l%C3%BAmens-alto-falante-integrado/dp/B0FHSPLRR4/ref=sr_1_11?dib=eyJ2IjoiMSJ9.5lpMvSLdV7TkQEJQy-k_5jV-7iLVGaHeyI6Lgyamu2yMBDXEgo5-Ut38tmCn-WdA6CEEUk81uwd9AGRpAfTu-how2QbCP8EriFk4AzlxPS0EqgJcIzyzCD0GBujFq8WbUAL0iWcnpQEncxznjsMMSdU1JNzDwrK_YcStoXrjrUJwNkOGTdMZkryiykBFCKoXMzGRbJWBFHlRv1_lTsnZiH4x1WdE0fipT6tXFo80Czax3TykAIvbpA7nLBpMUT7qGAXJRWhX-IHm7MT0QCn_BA.GG2iveG4vbkhp9ELvVgB4AI-TlK1O8uNmYVLFw3l-5c&dib_tag=se&keywords=Epson+Home+Cinema+2250+3LCD&qid=1761078477&sr=8-11&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
    "descricao": "Epson EX3290 Projetor 3LCD WXGA de 3 chips, 4.000 lúmens, alto brilho de cor, 4.000 lúmens de brilho",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "40 DIAS"
    },
    "precoConcorrente": 6757
  },
  {
    "id": 1161,
    "sku": "HP-SPEC-DAV",
    "nome": "HP Spectre x360 14 Core I7",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 9193.29,
    "precoMercado": 10815.63,
    "margem": 30,
    "precoVenda": 11951.28,
    "estoque": "Em Estoque",
    "fornecedor": "HP",
    "imagem": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/460552/Notebooks-Hp-Spectre-Intel-I7-Tela-Touch-RAM-16GB-SSD-4tb-14-Polegadas-13-Gera-o_1709751488_gg.jpg",
    "linkCompra": "https://www.mercadolivre.com.br/notebook-2-em-1-hp-spectre-16f2013dx-core-i7-ssd-512-gb/up/MLBU3166023559?pdp_filters=item_id:MLB4057612193",
    "descricao": "HP Spectre x360 14 Core I7",
    "especificacoes": {
      "marketplace": "Mercado Livre",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 9404.9
  },
  {
    "id": 1162,
    "sku": "HUA-PAD-DAV",
    "nome": "Huawei MatePad Pro 13.2",
    "categoria": "Eletrônicos",
    "subcategoria": "Tablets",
    "quantidade": 10,
    "custoBase": 2784.9,
    "precoMercado": 3276.35,
    "margem": 30,
    "precoVenda": 3620.37,
    "estoque": "Em Estoque",
    "fornecedor": "Huawei",
    "imagem": "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-pro-13-2-2025/images/others/huawei-matepad-pro-13-2-inch-accessories.jpg",
    "linkCompra": "https://www.amazon.com.br/HUAWEI-Destac%C3%A1vel-FullView-Traseira-Espacial/dp/B093SW1LGV/ref=asc_df_B093SW1LGV?mcid=83c8a5e0f43f3381a5282209b54490aa&tag=googleshopp00-20&linkCode=df0&hvadid=709884378406&hvpos=&hvnetw=g&hvrand=14240802157817274263&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-2446865919074&language=pt_BR&gad_source=4&th=1",
    "descricao": "Huawei MatePad Pro 13.2",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "2 DIAS"
    },
    "precoConcorrente": 2849
  },
  {
    "id": 1163,
    "sku": "LEN-X1C-DAV",
    "nome": "Lenovo ThinkPad X1 Carbon Gen 13",
    "categoria": "Eletrônicos",
    "subcategoria": "Laptops",
    "quantidade": 10,
    "custoBase": 15052.64,
    "precoMercado": 17708.99,
    "margem": 30,
    "precoVenda": 19568.43,
    "estoque": "Em Estoque",
    "fornecedor": "Lenovo",
    "imagem": "https://p3-ofp.static.pub//fes/cms/2025/09/25/zilke4jzmwovo0z4u30y9ci4mwou46210563.png",
    "linkCompra": "https://www.kabum.com.br/produto/887674/notebook-lenovo-x1-carbon-g13-intel-core-ultra-7-268v-vpro-32gb-1tb-ssd-windows-11-pro-14-21nt000hbr-preto?utm_id=22041504672&gad_source=4&gad_campaignid=22041506376&gbraid=0AAAAADx-HyH0dsZltqlihQjF5sn4f8_t-&gclid=CjwKCAjw3tzHBhBREiwAlMJoUoLwjJIzb0ItoxYt-3b-aTv_hLzDj-xBo78YjYJkanZ4m0RlEgggYBoCOVEQAvD_BwE",
    "descricao": "Lenovo ThinkPad X1 Carbon Gen 13",
    "especificacoes": {
      "marketplace": "Kabum",
      "prazoEntrega": "10 DIAS"
    },
    "precoConcorrente": 15399.12
  },
  {
    "id": 1164,
    "sku": "MOC-HIG_DAV",
    "nome": "Mochila de Hidratação Ciclismo Termica 2 Litros High One Preta",
    "categoria": "Esporte",
    "subcategoria": "Acessórios Esportivos",
    "quantidade": 10,
    "custoBase": 215.04,
    "precoMercado": 252.99,
    "margem": 30,
    "precoVenda": 279.55,
    "estoque": "Em Estoque",
    "fornecedor": "High One",
    "imagem": "https://m.media-amazon.com/images/I/51EjB69geRL._AC_SL1145_.jpg",
    "linkCompra": "https://www.amazon.com.br/Mochila-Hidrata%C3%A7%C3%A3o-Ciclismo-High-One/dp/B09BRBPM64/ref=asc_df_B09BRBPM64?mcid=027ff182d66334249b22610087b5651b&tag=googleshopp00-20&linkCode=df0&hvadid=709964762564&hvpos=&hvnetw=g&hvrand=1555514789381472997&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198709&hvtargid=pla-1931721457141&psc=1&language=pt_BR&gad_source=4",
    "descricao": "Mochila de Hidratação Ciclismo Termica 2 Litros High One Preta",
    "especificacoes": {
      "marketplace": "Amazon",
      "prazoEntrega": "15 DIAS"
    },
    "precoConcorrente": 219.99
  }
];

/**
 * 💡 Produtos Sugeridos pelo Admin
 * Origem: Cadastro manual via Admin
 * IDs: 2000+
 * Total: 0
 */
const produtosSugeridos = [];

// ═══════════════════════════════════════════════════════════════════════════
// 🔧 UTILITÁRIOS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Retorna todos os produtos (planilha + sugeridos)
 * @returns {Array} Array com todos os produtos
 */
function obterTodosProdutos() {
    return [...produtosPlanilha, ...produtosSugeridos];
}

/**
 * Busca produto por ID
 * @param {number} id - ID do produto
 * @returns {Object|null} Produto encontrado ou null
 */
function obterProdutoPorId(id) {
    const todos = obterTodosProdutos();
    return todos.find(p => p.id === id) || null;
}

/**
 * Estatísticas dos produtos
 */
const estatisticasProdutos = {
    totalPlanilha: produtosPlanilha.length,
    totalSugeridos: produtosSugeridos.length,
    total: produtosPlanilha.length + produtosSugeridos.length,
    ultimaAtualizacao: '2025-10-27T18:39:19.432Z'
};

// Log de carregamento
console.log('📦 Produtos carregados:', estatisticasProdutos);

// ═══════════════════════════════════════════════════════════════════════════
// 📤 EXPORTS
// ═══════════════════════════════════════════════════════════════════════════

if (typeof window !== 'undefined') {
    window.produtosPlanilha = produtosPlanilha;
    window.produtosSugeridos = produtosSugeridos;
    window.obterTodosProdutos = obterTodosProdutos;
    window.obterProdutoPorId = obterProdutoPorId;
    window.estatisticasProdutos = estatisticasProdutos;
}

// Para uso com módulos ES6
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        produtosPlanilha,
        produtosSugeridos,
        obterTodosProdutos,
        obterProdutoPorId,
        estatisticasProdutos
    };
}
