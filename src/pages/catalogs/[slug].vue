<script setup lang="ts">
defineOptions({
  name: 'CatalogItem',
})

const route = useRoute()
const router = useRouter()
const currentUrl = route.fullPath

const catalogId = extractCatalogId(currentUrl)

const routeBack = () => {
  router.push({ path: '/catalogs' })
}

const isOpen = ref(false)

function toggleModal(value: boolean) {
  isOpen.value = value
}

const carouselIndex = ref(0)

const emitToggleModal = (payload: { value: boolean, index: number }) => {
  isOpen.value = payload.value
  carouselIndex.value = payload.index
}

const optionsNavTabs = ref(OPTION_NAV_TABS)

const onSelectNavTab = (title: string) => {
  optionsNavTabs.value.forEach((tab) => {
    tab.active = false // Set all tabs to inactive
  })

  const tabIndex = optionsNavTabs.value.findIndex(tab => tab.title === title)
  if (tabIndex !== -1) {
    optionsNavTabs.value[tabIndex].active = true // Activate the selected tab
    const ref = optionsNavTabs.value[tabIndex].ref
    scrollToTargetAdjusted(ref)
  }
}

const updateActiveTab = () => {
  let foundActive = false
  const scrollPosition = window.scrollY
  const offset = 60

  optionsNavTabs.value.forEach((tab) => {
    const element = document.getElementById(tab.ref)
    if (element) {
      const elementTop = element.offsetTop - offset
      const elementBottom = elementTop + element.clientHeight
      if (scrollPosition >= elementTop && scrollPosition < elementBottom && !foundActive) {
        tab.active = true
        foundActive = true
      }
      else {
        tab.active = false
      }
    }
  })

  // Jika tidak ada elemen yang aktif berdasarkan posisi scroll, biarkan tab default tetap aktif
  if (!foundActive) {
    const defaultTab = optionsNavTabs.value.find(tab => tab.ref === 'el-information')
    if (defaultTab)
      defaultTab.active = true
  }
}

onMounted(() => {
  console.log(catalogId?.toUpperCase())
  window.addEventListener('scroll', updateActiveTab)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveTab)
})
</script>

<template>
  <ProductModalGallery :is-open="isOpen" :carousel-index="carouselIndex" :galleries="OPTION_GALLERIES" @update:is-open="toggleModal(false)" />

  <DefaultLayout>
    <div>
      <div class="mx-4 fcb md:mx-0">
        <div class="px-0 py-0 btn-back md:px-3 md:py-1" @click="routeBack">
          <div i-tabler-arrow-left class="text-lg" />
          <div>
            Back
          </div>
        </div>
      </div>
      <ProductDetailGallery @modal-toggle="emitToggleModal" />
      <div class="sticky top-[0px] z-10 mx-4 bg-white md:mx-0">
        <div class="fcs gap-4 overflow-x-auto border-b-1 border-zinc-200 md:gap-6">
          <template v-for="tab in optionsNavTabs" :key="tab.title">
            <div
              class="cursor-pointer py-3 text-sm font-bold tracking-wide md:text-base"
              :class="tab.active ? 'border-b-3 border-orange-400 text-orange-400' : 'text-zinc-500'" @click="onSelectNavTab(tab.title)"
            >
              <div :class="{ 'w-[6.5rem]': !isMdScreen && tab.title === 'Infomasi Umum' }">
                {{ tab.title }}
              </div>
            </div>
          </template>
        </div>
      </div>
      <section id="el-information">
        <ProductDetailGeneralInfo />
        <ProductCardJoin />
      </section>
      <section id="el-review">
        <ProductDetailReview />
      </section>
      <section id="el-facility">
        <ProductDetailFacility />
      </section>
      <section id="el-location">
        <ProductDetailLocation />
      </section>
      <section id="el-about">
        <ProductDetailDescription />
        <ProductDetailFaq />
      </section>
      <section id="el-calendars">
        <ProductDetailCalendar />
      </section>
    </div>
  </DefaultLayout>
</template>

<style scoped>

</style>
