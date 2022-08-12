import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductShow from "@/views/ProductShow";
import ProductsIndex from "@/views/ProductsIndex";

Vue.use(VueRouter)

const routes = [
  {
    path: '/products/:id',
    name: 'show',
    component: ProductShow,
  },

  {
    path: '/',
    name: 'index',
    component: ProductsIndex ,
    props: true
  }
]

const router = new VueRouter({
  routes,

})

export default router
