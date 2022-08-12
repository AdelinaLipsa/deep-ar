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
              <h3 class="text-sm text-gray-600">Alege o textura:</h3>

              <fieldset class="mt-2 flex">
                <div v-for="texture in textures" class="flex items-center space-x-3" :key="texture">
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
    textures: {
      required: true,
      type: Array
    },

    models: {
      required: true,
      type: Array
    }
  },

  data() {
    return {
      deepAr: null
    }
  },

  methods: {
    selectedFilter(filter) {
      let selectedFilter = filter.match(new RegExp("[^/]+(?=\\.[^/.]*$)"))[0];
      this.handleDeepAr(selectedFilter);
    },

    handleClose(){
      if(this.deepAr)
        this.deepAR.stopVideo();
      this.$emit('closeModal');
    },

    handleDeepAr(filter) {
      // start video immediately after the initalization, mirror = true
      this.deepAR.startVideo(true);
      this.deepAR.switchEffect(0, 'slot', '/models/' + filter);
      this.deepAR.setCanvasSize(900, 600);
    },

    initializeDeepAr() {
      // eslint-disable-next-line no-undef
      this.deepAR = DeepAR({
        licenseKey: '6fda241c565744899d3ea574dc08a18ce3860d219aeb6de4b2d23437d7b6dcfcd79941dffe0e57f0',
        libPath: './lib',
        segmentationInfoZip: 'segmentation.zip',
        canvas: this.$refs.canvas,
        numberOfFaces: 1, // how many faces we want to track min 1, max 4
        onInitialize: function(){}
      })

      this.deepAR.downloadFaceTrackingModel('models/models-68-extreme.bin');
    }
  },

  mounted() {
    this.initializeDeepAr();
  }
}
</script>
