<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
        <div class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
          <div class="flex justify-end text-sm text-gray-500 cursor-pointer" @click="$emit('closeModal')">Close[X]</div>
          <canvas class="deepar" id="deepar-canvas" width="100%" height="100%"
                  oncontextmenu="event.preventDefault()"></canvas>
          <form class="mt-6">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-600">Texturi:</h3>

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
      filter: null
    }
  },

  computed: {
    model() {
      return this.models.find(model => console.log(model));
    }
  },

  methods: {
    selectedFilter(filter) {
      this.filter = filter;
    },

    handleDeepAr() {
      let deepAR = window.deepAR;

      deepAR.startVideo(true);
      deepAR.switchEffect(0, 'slot', this.model);
    },
  },

  created() {
    this.handleDeepAr();
  }
}
</script>
