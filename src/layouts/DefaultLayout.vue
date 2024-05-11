<script setup lang="ts" generic="T extends any, O extends any">

</script>

<template>
  <TheNavbar />

  <main p="x-8">
    <!-- Slot for the page content -->
    <slot />
  </main>
  <TheFooter />
</template>

<style>
/* Your styles here */
</style>
