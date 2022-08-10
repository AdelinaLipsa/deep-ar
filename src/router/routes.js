import ProductsIndex from "@/components/ProductsIndex";
import ProductShow from "@/components/ProductShow";

export default [
  {
    path: "/index",
    name: "product_index",
    component: ProductsIndex,
  },
  {
    path: "/:id",
    name: "product_show",
    component: ProductShow,
  },
]