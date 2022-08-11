<template>
  <div>
      <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-red-700">
        <input type="radio" name="color-choice" :value="texture" class="sr-only"
               v-model="selectedFilter" @change="$emit('selectedFilter', selectedFilter)">
        <img :src="texture" :alt="texture" class="w-10 h-10">
      </label>
  </div>
</template>

<script>
export default {
  props: {
    texture: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      selectedFilter: null
    }
  }
}
</script>
