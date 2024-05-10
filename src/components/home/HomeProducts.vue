<script setup lang="ts">
import type { TCardProduct } from '~/types/productTypes'

const products = ref<TCardProduct[]>([
  {
    id: 1,
    title: 'Villa Tulip',
    image: getImageAssets('villa-1.jpg'),
    price: '2jt/hari',
    rating: 4.5,
    address: 'Alamat isi disini',
  },
  {
    id: 2,
    title: 'Villa Anggrek',
    image: getImageAssets('villa-2.jpg'),
    price: '3jt/hari',
    rating: 5,
    address: 'Alamat isi disini',
  },
  {
    id: 3,
    title: 'Villa Mawar',
    image: getImageAssets('villa-3.jpg'),
    price: '4jt/hari',
    rating: 3.5,
    address: 'Alamat isi disini',
  },
])
</script>

<template>
  <div font-sans p="y-8">
    <div class="fcb" m="b-4">
      <div class="title-text">
        Rekomendasi Villa
      </div>
      <div>
        <button class="btn btn-more-rounded">
          Lebih banyak
          <span i-tabler-arrow-narrow-right inline-block text-xl />
        </button>
      </div>
    </div>
    <div class="container-products">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped>

</style>
