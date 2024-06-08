<script setup lang="ts">
const { y } = useWindowScroll()
const router = useRouter()
const route = useRoute()

const staticHeaderClasses = route.name !== '/catalogs/[slug]' ? 'sticky top-0 z-100' : ''
const headerClasses = computed(() => ({
  'bg-white bg-op-50 backdrop-blur': y.value > 20,
}))
const navlist = ref(OPTION_HOME_TABS)

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
          <div
            v-for="item in navlist" :key="item.name" p="x-2" class="cursor-pointer tracking-wider hover:underline" :class="{
              ' hover:decoration-orange-400': route.path === item.to,
            }" @click="routeToFeature(item.to)"
          >
            <span
              :class="{
                'text-orange-400 font-bold': route.path === item.to,
              }"
            >
              {{ item.name }}
            </span>
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
</template>

<style scoped>

</style>
