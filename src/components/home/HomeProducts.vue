<script setup lang="ts">
import type { TCardProduct } from '~/types/productTypes'

const { isHome, title } = defineProps({
  isHome: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: 'Rekomendasi Villa',
  },
})

const router = useRouter()
const products = ref<TCardProduct[]>([
  {
    id: 1,
    title: 'Villa Tulip',
    image: getImageAssets('villa-1.jpg'),
    price: '2jt/hari',
    rating: 4.5,
    address: 'Alamat isi disini',
    code: 'CT-001',
  },
  {
    id: 2,
    title: 'Villa Anggrek',
    image: getImageAssets('villa-2.jpg'),
    price: '3jt/hari',
    rating: 5,
    address: 'Alamat isi disini',
    code: 'CT-002',
  },
  {
    id: 3,
    title: 'Villa Mawar',
    image: getImageAssets('villa-3.jpg'),
    price: '4jt/hari',
    rating: 3.5,
    address: 'Alamat isi disini',
    code: 'CT-003',
  },
  {
    id: 4,
    title: 'Villa Melati',
    image: getImageAssets('villa-1.jpg'),
    price: '6jt/hari',
    rating: 3.9,
    address: 'Alamat isi disini',
    code: 'CT-004',
  },
])

function routeToCatalogs() {
  router.push(`/catalogs`)
}
</script>

<template>
  <div font-ptSans p="y-8" class="mx-4">
    <div class="fcb" m="b-4">
      <div class="title-text">
        {{ title }}
      </div>
      <div v-if="isHome">
        <button class="btn btn-more-rounded" font-lato @click="routeToCatalogs">
          Lebih <span v-if="isMdScreen">banyak</span>
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
