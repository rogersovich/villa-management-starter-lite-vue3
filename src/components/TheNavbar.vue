<script setup lang="ts">
const { y } = useWindowScroll()
const router = useRouter()
const route = useRoute()

const staticHeaderClasses = route.name !== '/catalogs/[slug]' ? 'sticky top-0 z-100' : ''
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

const logoBrand = getImageAssets('logo-brand.png')

function routeToFeature(to: string) {
  router.push(`${to}`)
}
</script>

<template>
  <header p="md:y-5 y-4 x-4 lg:x-8 xl:x-28 2xl:x-72" :class="[staticHeaderClasses, headerClasses]">
    <div class="grid-12 gap-4">
      <div class="col-span-6 fcs md:col-span-2">
        <img :src="logoBrand" alt="Descriptive text" class="h-[2rem] cursor-pointer object-cover" @click="routeToFeature('/')">
      </div>
      <div v-if="isMdScreen" class="col-span-8">
        <div class="fcc gap-6">
          <div v-for="item in navlist" :key="item.name" p="x-2" class="cursor-pointer hover:underline" @click="routeToFeature(item.to)">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="col-span-6 fce md:col-span-2">
        <button class="px-5 py-2 btn md:px-8" @click="routeToFeature('/auth/sign-in')">
          Masuk
        </button>
      </div>
    </div>
  </header>

  <!-- <template v-if="sidebarOpen">
    <div class="fixed left-0 top-0 z-80 h-vh w-full overflow-y-hidden bg-orange-50">
      <div class="h-vh flex flex-col items-start justify-between px-4 py-5">
        <div class="w-full fcb">
          <div>
            <img :src="logoBrand" alt="Descriptive text" class="h-[2rem] cursor-pointer object-cover">
          </div>
          <div>
            <button class="fcc gap-2 px-4 py-2 btn-text md:px-8" @click="routeToFeature('/auth/sign-in')">
              <span i-tabler-logout class="inline-block text-sm text-orange-500" />
              <span>
                Keluar
              </span>
            </button>
          </div>
        </div>
        <div class="mt-6 px-2">
          <div
            v-for="(item, index) in navlist" :key="index" :class="{
              'mb-4': navlist.length - 1 !== index,
            }"
          >
            {{ item.name }}
          </div>
        </div>
        <div>
          dsfdsfs
        </div>
      </div>
    </div>
  </template> -->
</template>

<style scoped>

</style>
