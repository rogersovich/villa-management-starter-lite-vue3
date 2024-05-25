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
  <BaseModal :is-open="isOpen" @update:is-open="isOpen = $event">
    <template #default>
      <DialogTitle as="h3" class="text-lg text-gray-900 font-medium leading-6">
        Payment successful
      </DialogTitle>
      <div class="mt-2">
        <p class="text-sm text-gray-500">
          Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
        </p>
      </div>
      <div class="mt-4">
        <button
          type="button"
          class="btn-variant"
          @click="toggleModal(false)"
        >
          Got it, thanks!
        </button>
      </div>
    </template>
  </BaseModal>
  <DefaultLayout>
    <div>
      <div class="fcb">
        <div class="btn-back" @click="routeBack">
          <div i-tabler-arrow-left class="text-lg" />
          <div>
            Back
          </div>
        </div>
      </div>
      <ProductDetailGallery @modal-toggle="toggleModal" />
      <div class="sticky top-[0px] z-30 bg-white">
        <div class="fcs gap-6 border-b-1 border-zinc-200">
          <template v-for="tab in optionsNavTabs" :key="tab.title">
            <div
              class="cursor-pointer py-3 font-bold tracking-wide"
              :class="tab.active ? 'border-b-3 border-orange-400 text-orange-400' : 'text-zinc-500'" @click="onSelectNavTab(tab.title)"
            >
              {{ tab.title }}
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
