<script setup lang="ts">
import type { TCardProduct } from '../../types/productTypes'

const { product } = defineProps<{ product: TCardProduct }>()

const router = useRouter()

const facilities = ref([
  {
    name: 'Pool',
    icon: 'i-tabler-pool',
    value: 0,
  },
  {
    name: 'People',
    icon: 'i-tabler-users-group',
    value: 6,
  },
  {
    name: 'View',
    icon: 'i-tabler-mountain',
    value: 0,
  },
])

function routeToDetail() {
  const urlString = `${product.title} ${product.code}`
  const formatUrl = formatStringToSlug(urlString)

  router.push(`/catalogs/${formatUrl}`)
}
</script>

<template>
  <div font-lato class="col-span-12 cursor-pointer rounded-3xl bg-white p-2 outline-1 outline-zinc-200 outline 2xl:col-span-3 lg:col-span-4 md:col-span-6 xl:col-span-3 hover:outline-3 hover:outline-orange-400" @click="routeToDetail">
    <div class="relative">
      <img :src="product.image" alt="Descriptive text" class="w-full border-rd-2xl object-fill 2xl:h-[14em] xl:h-[12em]">
      <div class="absolute right-2 top-2">
        <div class="chip-rating">
          <span i-tabler-star-filled class="inline-block text-[0.75rem]" />
          <span class="text-sm text-white">
            {{ product.rating }}
          </span>
        </div>
      </div>
    </div>
    <div class="px-2 pb-2 pt-3">
      <div class="text-[1.25em] font-medium">
        {{ product.title }}
      </div>
      <div class="fcb gap-2">
        <div class="text-[0.85em] text-gray-400">
          {{ product.address }}
        </div>
        <div class="text-[1em] text-orange-400 font-medium tracking-wider">
          {{ product.price }}
        </div>
      </div>
      <div class="grid grid-cols-3 mt-3 gap-2">
        <div v-for="facility in facilities" :key="facility.name" class="group chip-facility">
          <span :class="facility.icon" inline-block class="text-[0.8rem] text-orange-500 group-hover:text-orange-400" />
          <span class="text-[0.8em] text-gray-400 group-hover:text-orange-400">
            {{ facility.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
