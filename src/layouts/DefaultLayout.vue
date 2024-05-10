<script setup lang="ts" generic="T extends any, O extends any">
// Your script here

const navlist = ref([
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/',
  },
  {
    name: 'Contact',
    to: '/',
  },
])
</script>

<template>
  <header p="y-5">
    <div class="grid-12 gap-4">
      <div class="col-span-2 fcs">
        Your Logo
      </div>
      <div class="col-span-8">
        <div class="fcc gap-6">
          <div v-for="item in navlist" :key="item.name" p="x-2" class="cursor-pointer hover:underline">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="col-span-2 fce">
        <button class="bg-blue-500 px-8 py-1.5 btn hover:bg-blue-500">
          Login
        </button>
      </div>
    </div>
  </header>
  <main>
    <!-- Slot for the page content -->
    <slot />
  </main>
  <footer>
    <!-- Your footer content -->
  </footer>
</template>

<style>
/* Your styles here */
</style>
