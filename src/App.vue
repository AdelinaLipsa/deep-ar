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
          name: "Ruj lichid",
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
          name: "Ruj lichid",
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
          name: "Ruj lichid",
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
          name: "Ruj lichid",
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
        }
      ]
    }
  }
}
</script>