<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
        <div
            class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:p-6">
          <div class="flex justify-end text-sm text-gray-500 cursor-pointer" @click="handleClose">Inchide[X]
          </div>
          <canvas class="deepar" id="deepar-canvas" ref="canvas" oncontextmenu="event.preventDefault()"
          ></canvas>
          <form class="mt-6">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-600">Alege o culoare pentru {{product.name}}:</h3>

              <fieldset class="mt-2 flex">
                <div v-for="texture in product.textureImageSrc" class="flex items-center space-x-3" :key="texture">
                  <texture-filters :texture="texture" @selectedFilter="selectedFilter"></texture-filters>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextureFilters from "@/components/TextureFilters";

export default {
  components: { TextureFilters },

  props: {
    product: {
      required:true,
      type: Object
    }
  },

  data(){
    return{
      productModel: this.product.textureImageSrc[0].match(new RegExp("[^/]+(?=\\.[^/.]*$)"))[0],
      deepAR: null
    }
  },

  methods: {
    selectedFilter(filter) {
      this.productModel = filter.match(new RegExp("[^/]+(?=\\.[^/.]*$)"))[0];
      this.deepAR.switchEffect(0, 'slot', 'models/' + this.productModel);
    },

    handleClose(){
      this.$emit('closeModal');
    },

    initializeDeepAr() {
      let product = this.productModel;
      // eslint-disable-next-line no-undef
      let deepAR = DeepAR({
        licenseKey: 'f9bb1b4fecc41407fadb4c31bbfc0a237094ce8aaa2c618138ce31a51f70df7bb6f487c2743152e6',
        libPath: './lib',
        segmentationInfoZip: 'segmentation.zip',
        canvas: this.$refs.canvas,
        numberOfFaces: 1, // how many faces we want to track min 1, max 4
        onInitialize: function(){
          deepAR.startVideo(true);
          deepAR.switchEffect(0, 'slot', 'models/' + product);
          if(window.innerWidth < 500){
            deepAR.setCanvasSize(350, 650);
          } else {
            deepAR.setCanvasSize(900, 600);
          }
        }
      })

      deepAR.downloadFaceTrackingModel('models/models-68-extreme.bin');

      this.deepAR = deepAR;
    }
  },

  mounted() {
      this.initializeDeepAr();
  },
}
</script>
