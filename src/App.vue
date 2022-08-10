<template>
  <div>
      <navigation-bar></navigation-bar>
      <products-index></products-index>
  </div>
</template>

<script>
import ProductsIndex from "@/components/ProductsIndex";
import NavigationBar from "@/components/NavigationBar";

export default {
  name: 'App',
  components: { NavigationBar, ProductsIndex },
  data(){
    return {
      selectedFilter: null
    }
  },

  methods: {
    switchFilterAction(){
      window.deepAR.switchEffect(0, 'look1', this.selectedFilter);
    }
  },
}
</script>

