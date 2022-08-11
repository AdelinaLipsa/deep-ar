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
            { 1: "/models/RC_01" },
            { 2: "/models/RC_02" },
            { 3: "/models/RC_03" },
            { 4: "/models/RC_04" },
            { 5: "/models/RC_05" },
            { 6: "/models/RC_06" }
          ],
          textureImageSrc: [
            { 1: "/textures/RC_01.jpg" },
            { 2: "/textures/RC_02.jpg" },
            { 3: "/textures/RC_03.jpg" },
            { 4: "/textures/RC_04.jpg" },
            { 5: "/textures/RC_05.jpg" },
            { 6: "/textures/RC_06.jpg" },
          ]
        },

        {
          id: 3,
          name: "Ruj lichid",
          price: '150lei',
          info: "Ruj lichid cu rezistență îndelungată 8H este disponibil în 5 nuanțe.  Un ruj cu o textură remarcabilă care combină o culoare extrem de intensă cu o senzație ultra-soft,\ndar cu un efect optic imediat de volum. Atenţie! Setările monitorului (contrast, luminozitate, intensitate) pot influenţa nuanţa culorilor.",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/2/5/2506_2507_2508-ruj-cremos-gerovital-beauty_2.png",
          models: [
            { 1: "/models/RM_01" },
            { 2: "/models/RM_02" },
            { 3: "/models/RM_03" },
            { 4: "/models/RM_04" },
            { 5: "/models/RM_05" },
            { 6: "/models/RM_06" }
          ],
          textureImageSrc: [
            { 1: "/textures/RM_01.jpg" },
            { 2: "/textures/RM_02.jpg" },
            { 3: "/textures/RM_03.jpg" },
            { 4: "/textures/RM_04.jpg" },
            { 5: "/textures/RM_05.jpg" },
            { 6: "/textures/RM_06.jpg" },
          ]
        },

        {
          id: 4,
          name: "Ruj lichid",
          price: '150lei',
          info: "Ruj lichid cu rezistență îndelungată 8H este disponibil în 5 nuanțe.  Un ruj cu o textură remarcabilă care combină o culoare extrem de intensă cu o senzație ultra-soft,\ndar cu un efect optic imediat de volum. Atenţie! Setările monitorului (contrast, luminozitate, intensitate) pot influenţa nuanţa culorilor.",
          imageSrc: "https://www.farmec.ro/media/catalog/product/cache/7fac84570d1a69c5b087ea5bb1fc1c3f/2/5/2537-ruj-cremos-gerovital-beauty_1.png",
          models: [
            { 1: "/models/RL_01" },
            { 2: "/models/RL_02" },
            { 3: "/models/RL_03" },
            { 4: "/models/RL_04" },
            { 5: "/models/RL_05" },
            { 6: "/models/RL_06" }
          ],
          textureImageSrc: [
            { 1: "/textures/RL_01.jpg" },
            { 2: "/textures/RL_02.jpg" },
            { 3: "/textures/RL_03.jpg" },
            { 4: "/textures/RL_04.jpg" },
            { 5: "/textures/RL_05.jpg" },
            { 6: "/textures/RL_06.jpg" },
          ]
        }
      ]
    }
  }
}
</script>