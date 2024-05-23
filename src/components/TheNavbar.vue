<script setup lang="ts">
const { y } = useWindowScroll()
const router = useRouter()

const staticHeaderClasses = 'sticky top-0 z-100'
const headerClasses = computed(() => ({
  'bg-white bg-op-50 backdrop-blur': y.value > 20,
  // Add more classes and conditions as needed
}))
const navlist = ref([
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'Catalog',
    to: '/catalogs',
  },
  {
    name: 'About',
    to: '/',
  },
])

function routeToFeature(to: string) {
  router.push(`${to}`)
}
</script>

<template>
  <header p="y-5 lg:x-8 xl:x-28 2xl:x-72" :class="[staticHeaderClasses, headerClasses]">
    <div class="grid-12 gap-4">
      <div class="col-span-2 fcs">
        Your Logo
      </div>
      <div class="col-span-8">
        <div class="fcc gap-6">
          <div v-for="item in navlist" :key="item.name" p="x-2" class="cursor-pointer hover:underline" @click="routeToFeature(item.to)">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="col-span-2 fce">
        <button class="border-rd-md bg-orange-500 px-8 py-1.5 btn hover:bg-orange-600">
          Login
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
