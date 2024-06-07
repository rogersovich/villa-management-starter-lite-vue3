<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <DefaultLayout>
    <WhatsappFloating />

    <TheWelcome />

    <HomeProducts />

    <HomeServices />
  </DefaultLayout>
</template>
