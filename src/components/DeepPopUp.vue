<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
        <div
            class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
          <canvas class="deepar" ref="canvas" id="deepar-canvas" oncontextmenu="event.preventDefault()"></canvas>
          <form class="mt-6">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-600">Texturi:</h3>

              <fieldset class="mt-2">
                <legend class="sr-only">Incearca o textura</legend>
                <div v-for="(index, texture) in textures" class="flex items-center space-x-3" :key="index">
                  <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-red-700">
                    <input type="radio" name="color-choice" value="look1" class="sr-only"
                           aria-labelledby="color-choice-0-label" v-model="selectedFilter">
                    <img :src="texture" alt="cb_01" class="w-10 h-10">
                  </label>
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
export default {
  data() {
    return {
      selectedFilter: null
    }
  },

  props: {
    textures: {
      required: true,
      type: Object
    },

    models: {
      required: true,
      type: Object
    }
  },

  computed: {
    model(){
      return this.models.find(model=> model === this.selectedFilter);
    }
  },

  methods: {
    handleDeepAr() {
      // eslint-disable-next-line no-undef
      window.deepAR = DeepAR({
        licenseKey: '6fda241c565744899d3ea574dc08a18ce3860d219aeb6de4b2d23437d7b6dcfcd79941dffe0e57f0',
        canvasWidth: 300,
        canvasHeight: 600,
        libPath: './lib',
        segmentationInfoZip: 'segmentation.zip',
        canvas: this.$refs.canvas,
        numberOfFaces: 1, // how many faces we want to track min 1, max 4
        onInitialize: function () {
          // start video immediately after the initalization, mirror = true
          window.deepAR.startVideo(true);
          window.deepAR.switchEffect(0, 'slot', this.model);
        }
      })
      window.deepAR.downloadFaceTrackingModel('models/models-68-extreme.bin');
    },
  },

  created() {
    this.handleDeepAr();
  }
}
</script>
