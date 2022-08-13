<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view :products="products"/>
  </div>
</template>
<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  components: {NavigationBar },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Ruj rezistent True Colour",
          price: '150lei',
          info: "Ruj lichid cu rezistență îndelungată 8H este disponibil în 5 nuanțe.  Un ruj cu o textură remarcabilă care combină o culoare extrem de intensă cu o senzație ultra-soft,\ndar cu un efect optic imediat de volum. Atenţie! Setările monitorului (contrast, luminozitate, intensitate) pot influenţa nuanţa culorilor.",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/g/e/gerovital-beauty-2519-ruj-cremos-01-acid-hialuronic-2nd.jpg",
          models: [
            "/models/CB_01",
            "/models/CB_02",
            "/models/CB_03",
            "/models/CB_04",
            "/models/CB_05",
            "/models/CB_06"
          ],
          textureImageSrc: [
            "/textures/CB_01.jpg",
            "/textures/CB_02.jpg",
            "/textures/CB_03.jpg",
            "/textures/CB_04.jpg",
            "/textures/CB_05.jpg",
            "/textures/CB_06.jpg",
          ]
        },

        {
          id: 2,
          name: "Ruj Cremos cu Acid Hialuronic",
          price: '150lei',
          info: "Ruj lichid cu rezistență îndelungată 8H este disponibil în 5 nuanțe.  Un ruj cu o textură remarcabilă care combină o culoare extrem de intensă cu o senzație ultra-soft,\ndar cu un efect optic imediat de volum. Atenţie! Setările monitorului (contrast, luminozitate, intensitate) pot influenţa nuanţa culorilor.",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/g/e/gerovital-beauty-2519-ruj-cremos-acid-hialuronic-a.png",
          models: [
            "/models/RC_01",
            "/models/RC_02",
            "/models/RC_03",
            "/models/RC_04",
            "/models/RC_05",
            "/models/RC_06"
          ],
          textureImageSrc: [
            "/textures/RC_01.jpg",
            "/textures/RC_02.jpg",
            "/textures/RC_03.jpg",
            "/textures/RC_04.jpg",
            "/textures/RC_05.jpg",
            "/textures/RC_06.jpg",
          ]
        },

        {
          id: 3,
          name: "Ruj lichid cu rezistență îndelungată 8H",
          price: '150lei',
          info: "Ruj lichid cu rezistență îndelungată 8H este disponibil în 5 nuanțe.  Un ruj cu o textură remarcabilă care combină o culoare extrem de intensă cu o senzație ultra-soft,\ndar cu un efect optic imediat de volum. Atenţie! Setările monitorului (contrast, luminozitate, intensitate) pot influenţa nuanţa culorilor.",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/2/5/2506_2507_2508-ruj-cremos-gerovital-beauty_2.png",
          models: [
            "/models/RM_19",
            "/models/RM_20",
            "/models/RM_22",
            "/models/RM_25",
            "/models/RM_29",
            "/models/RM_30"
          ],
          textureImageSrc: [
            "/textures/RM_19.jpg",
            "/textures/RM_20.jpg",
            "/textures/RM_22.jpg",
            "/textures/RM_25.jpg",
            "/textures/RM_29.jpg",
            "/textures/RM_30.jpg",
          ]
        },

        {
          id: 4,
          name: "Ruj mat cu acid hialuronic",
          price: '150lei',
          info: "Ruj lichid cu rezistență îndelungată 8H este disponibil în 5 nuanțe.  Un ruj cu o textură remarcabilă care combină o culoare extrem de intensă cu o senzație ultra-soft,\ndar cu un efect optic imediat de volum. Atenţie! Setările monitorului (contrast, luminozitate, intensitate) pot influenţa nuanţa culorilor.",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/2/5/2537-ruj-cremos-gerovital-beauty_1.png",
          models: [
            "/models/RL_01",
            "/models/RL_02",
            "/models/RL_04",
            "/models/RL_05",
            "/models/RL_06"
          ],
          textureImageSrc: [
            "/textures/RL_01.jpg",
            "/textures/RL_02.jpg",
            "/textures/RL_04.jpg",
            "/textures/RL_05.jpg",
            "/textures/RL_06.jpg",
          ]
        },


        {
          id: 5,
          name: "Mascara Full Fan Volume",
          price: '45lei',
          info: "Prima noastră pensulă din elastomer!\n" +
              "\n" +
              "Ridică și curbează pentru un efect de evantai!\n" +
              "\n" +
              "• volum, fără aglomerări\n" +
              "\n" +
              "• îmbogățit cu ulei de cocos\n" +
              "\n" +
              "• rezistent la apă",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/2/5/2550-mascara-supreme-lash-gerovital-beauty-recipient.png",
          models: [
            "/models/eyelashes"
          ],
          textureImageSrc: [
            "/textures/eyelashes.png",
          ]
        },

        {
          id: 6,
          name: "GEROVITAL BEAUTY-FARD PLEOAPE SMOKeY       7,2G",
          price: '100lei',
          info: "Paleta de farduri evidențiază și definește machiajul ochilor.\n" +
              "\n" +
              "Conține:\n" +
              "\n" +
              "6 culori complementare, mate și sidefate\n" +
              "Pensulă dublă\n" +
              "Oglindă\n" +
              "Disponibilă în 3 variante: rose, nude și smokey",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/2/5/256-2561-2562-fard-pleoape-smoky-gerovital-beauty-paleta.png",
          models: [
            "/models/Smokey2"
          ],
          textureImageSrc: [
            "/textures/Smokey2.png",
          ]
        },

        {
          id: 7,
          name: "GEROVITAL BEAUTY-FARD OBRAZ   8G",
          price: '35,70 lei\n',
          info: "Un Blush ce accentuează trăsăturile feței, pentru un aspect fresh al pielii.Pomeți definiți.Ambalaj elegant cu oglindă încorporată.Culori intense, pigmentate.Pigmenți ultra-fini.Disponibil în 3 nuanțe",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/g/e/gerovital-beauty-2556-fard-de-obraz-piersica-2nd.png",
          models: [
            "/models/FOP_08",
            "/models/FOM_08",
            "/models/FOR_08"
          ],
          textureImageSrc: [
            "/textures/FOP_08.png",
            "/textures/FOR_08.png",
            "/textures/FOM_08.png",
          ]
        },

        {
          id: 8,
          name: "GEROVITAL BEAUTY- CREION DERMATOGRAF GRI       1,1G",
          price: '35,70 lei\n',
          info: "Creionul de ochi subliniază și pune în evidență culoarea ochilor. Creează efect optic de mărire, migdalare a ochilor.\n" +
              "\n" +
              "Textură cremoasă și pigmentată\n" +
              "Rezistență îndelungată\n" +
              "Aplicare precisă\n" +
              "Disponibil în 4 culori",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/g/e/gerovital-beauty-2568-creion-dermatograf-gri-2nd.png",
          models: [
            "/models/CDG_01",
            "/models/CDM_02",
            "/models/CDV_03"
          ],

          textureImageSrc: [
            "/textures/CDG_01.png",
            "/textures/CDM_02.png",
            "/textures/CDV_03.png",
          ]
        },

        {
          id: 9,
          name: "GEROVITAL BEAUTY-MASCARA SUPREME LASH 14ML",
          price: '45,70 lei\n',
          info: "Ideală pentru genele scurte, datorită formei neregulate a periei.Pigmentează și definește genele. Peria din fibre oferă styling perfect. Textură cremoasă, rezistentă",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/g/e/gerovital-beauty-2550-mascara-supreme-lash-2nd.png",
          models: [
            "/models/MSL_14",
          ],

          textureImageSrc: [
            "/textures/MSL_14.png",
          ]
        }
      ]
    }
  }
}
</script>