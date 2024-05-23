<script setup lang="ts">
defineOptions({
  name: 'CatalogItem',
})

const route = useRoute()
const router = useRouter()
const currentUrl = route.fullPath

const extractCatalogId = (url: string) => {
  const pattern = /\/catalogs\/.*-(ct-\d+)$/
  const match = url.match(pattern)
  return match ? match[1] : null
}

const catalogId = extractCatalogId(currentUrl)

const routeBack = () => {
  router.push({ path: '/catalogs' })
}

const isOpen = ref(false)

function toggleModal(value: boolean) {
  isOpen.value = value
}

const productCatalog = ref({
  images: [
    {
      image: getImageAssets('villa-1.jpg'),
    },
    {
      image: getImageAssets('villa-2.jpg'),
    },
    {
      image: getImageAssets('villa-3.jpg'),
    },
    {
      image: getImageAssets('villa-1.jpg'),
    },
    {
      image: getImageAssets('villa-2.jpg'),
    },
  ],
})

const joinUsIcon = getImageAssets('join-us-icon.webp')

onMounted(() => {
  console.log(catalogId?.toUpperCase())
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
      <div class="grid grid-12 grid-flow-col grid-rows-2 my-4 h-[26em] gap-4">
        <template v-for="(catImage, index) in productCatalog.images" :key="`catImage-${index}`">
          <div :class="index === 0 ? 'row-span-2 col-span-6' : 'col-span-3'">
            <img :src="catImage.image" alt="Descriptive text" class="h-full w-full rounded-sm object-cover">
          </div>
        </template>
      </div>
      <div>
        <div class="fcs gap-2.5 pb-1">
          <div class="rounded bg-[#e7f2ff] px-2 py-0.5 text-sm">
            Villa
          </div>
          <TagRatings :rating-value="3.4" />
          <div i-tabler-info-circle-filled class="cursor-pointer text-[0.9em] color-#aeb2be" />
          <div class="text-sm color-green-600 font-600 tracking-wide">
            Terlaris #2 di Cisarua
          </div>
        </div>
        <div class="grid grid-2 mb-6 gap-4">
          <div class="col-span-1">
            <div class="mb-2 text-[2em] font-bold tracking-wide">
              Villa Mawar Selatan
            </div>
            <div class="fcs gap-2.5">
              <div class="fcs gap-2.5">
                <div>
                  <span class="text-[1em] font-bold">3.4</span>
                  <span class="text-[0.9em] text-zinc-500">/5</span>
                </div>
                <div class="cursor-pointer text-[0.9em] text-zinc-500 underline">
                  (40 review)
                </div>
                <div class="h-[7px] w-[7px] rounded-full bg-[#aeb2be]" />
                <div class="cursor-pointer text-[0.9em] text-zinc-500 underline">
                  Bogor, Cisarua
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 text-right">
            <div class="text-[0.9em] text-zinc-500 font-600">
              Mulai dari
            </div>
            <div class="text-[1.5rem] text-orange-500 font-bold">
              Rp 1.200.000
            </div>
            <div class="text-[0.8em]">
              /kamar/malam
            </div>
          </div>
        </div>
        <div class="mb-6 fcb border border-zinc-200 border-solid border-l-none border-r-none py-6">
          <div class="fcs gap-4">
            <div>
              <img :src="joinUsIcon" alt="" width="50px" height="50px">
            </div>
            <div>
              <div class="text-[1em] font-bold">
                Udah punya akun belum?
              </div>
              <div class="text-[0.8em]">
                Buat akun atau log in yuk. Ada diskon dan benefit biar kamu makin cuan!
              </div>
            </div>
          </div>
          <div>
            <button type="button" class="btn-variant">
              Gabung Sekarang
            </button>
          </div>
        </div>
        <div class="mt-2">
          <button type="button" class="btn-variant" @click="toggleModal(true)">
            Open image
          </button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>

</style>
