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
      <div>
        <button type="button" class="btn-variant" @click="toggleModal(true)">
          Open image
        </button>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>

</style>
