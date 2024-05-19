<script setup lang="ts">
// import { onMounted } from 'vue'
// import { useRoute } from 'vue-router'

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
  router.push({path: '/catalogs'})
}

onMounted(() => {
  console.log(catalogId?.toUpperCase())
})
</script>

<template>
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
    </div>
  </DefaultLayout>
</template>

<div>

  </div>

<style scoped>

</style>
