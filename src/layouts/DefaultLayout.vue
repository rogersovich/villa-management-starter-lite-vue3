<script setup lang="ts" generic="T extends any, O extends any">
const router = useRouter()
const route = useRoute()

const navlist = ref(OPTION_HOME_TABS)

function routeToFeature(to: string) {
  router.push(`${to}`)
}
</script>

<template>
  <TheNavbar />

  <main p="lg:x-8 xl:x-28 2xl:x-72" class="min-h-[72vh]">
    <slot />
  </main>

  <TheFooter />

  <template v-if="!isMdScreen">
    <div class="fixed bottom-0 left-0 z-100 h-[4rem] w-full px-3 py-2">
      <div class="h-full w-full fcc gap-6 rounded-md bg-orange-400 p-1">
        <div v-for="(item, index) in navlist" :key="index">
          <div class="fc cursor-pointer gap-2 text-[1rem]" @click="routeToFeature(item.to)">
            <span :class="[item.icon, { 'text-white': route.path === item.to, 'text-zinc-600': route.path !== item.to }]" class="inline-block text-sm" />
            <span :class="{ 'text-white': route.path === item.to, 'text-zinc-600': route.path !== item.to }"> {{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<style>
/* Your styles here */
</style>
