<script setup lang="ts">
defineOptions({
  name: 'CatalogPage',
})
</script>

<template>
  <DefaultLayout>
    <div>
      <HomeProducts :is-home="false" title="Catalogs Recommendations" />
      <HomeProducts :is-home="false" title="Product Catalogs" />
    </div>
  </DefaultLayout>
</template>

<style scoped>

</style>
