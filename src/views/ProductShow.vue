<template>
  <div>
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <!-- Image gallery -->
          <div class="flex flex-col-reverse">
            <!-- Image selector -->
            <div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
                <button id="tabs-1-tab-1"
                        class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                        aria-controls="tabs-1-panel-1" role="tab" type="button">
                  <span class="sr-only"> Angled view </span>
                  <span class="absolute inset-0 rounded-md overflow-hidden">
                <img :src="product.imageSrc" alt="" class="w-full h-full object-center object-cover">
              </span>
                  <span class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                        aria-hidden="true"></span>
                </button>
              </div>
            </div>

            <div class="w-full aspect-w-1 aspect-h-1">
              <!-- Tab panel, show/hide based on tab state. -->
              <div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
                <img
                    :src="product.imageSrc"
                    alt="Angled front view with bag zipped and handles upright."
                    class="w-full h-full object-center object-cover sm:rounded-lg">
              </div>
            </div>
          </div>

          <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900" v-text="product.name"></h1>

            <div class="mt-3">
              <h2 class="sr-only">Informatii</h2>
              <p class="text-3xl text-gray-900" v-text="product.price"></p>
            </div>

            <div class="mt-3">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <svg class="h-5 w-5 flex-shrink-0 text-indigo-500" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <p class="sr-only">5 out of 5 stars</p>
              </div>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Descriere</h3>
              <div class="text-base text-gray-700 space-y-6">
                <p v-text="product.info"></p>
              </div>

              <button class="block text-sm font-medium text-gray-500 bg-indigo-300 p-2 rounded text-white mt-5 cursor-pointer"
                      @click="showModal = true">Incearca o textura!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <deep-pop-up v-if="showModal" :textures="product.textureImageSrc" :models="product.models" @closeModal="showModal = false"></deep-pop-up>
  </div>
</template>

<script>
import DeepPopUp from "@/components/DeepPopUp";

export default {
  name: "ProductShow",
  components: { DeepPopUp },

  data() {
    return {
      showModal: false,
      productRouteId: this.$route.params.id,
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
  },

  computed: {
    product() {
      return this.products.find(product =>
          product.id == this.productRouteId
      );
    }
  }
}
</script>
