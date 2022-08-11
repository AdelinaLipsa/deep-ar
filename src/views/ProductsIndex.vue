<template>
  <div>
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div class="group relative" v-for="(product, index) in products" :key="index">
            <product-card :product="product"
                          class ='cursor-pointer'
            ></product-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: "ProductsIndex",

  components: { ProductCard },

  props: {
    products: {
      type: Array,
      required: true
    },
  },
}
</script>
