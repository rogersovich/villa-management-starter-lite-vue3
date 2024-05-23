<script setup lang="ts" generic="T extends any, O extends any">

</script>

<template>
  <TheNavbar />

  <main p="lg:x-8 xl:x-28 2xl:x-72" class="min-h-[72vh]">
    <!-- Slot for the page content -->
    <slot />
  </main>
  <TheFooter />
</template>

<style>
/* Your styles here */
</style>
