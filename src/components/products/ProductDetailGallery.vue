<script setup lang="ts">
const emit = defineEmits(['modalToggle'])

const productCatalog = ref({
  images: OPTION_GALLERIES,
})

function toggleModal(value: boolean, index: number) {
  emit('modalToggle', { value, index })
}
</script>

<template>
  <div font-sans class="grid grid-12 grid-rows-7 mx-4 my-4 h-[18em] gap-3 md:grid-flow-col md:grid-rows-2 md:mx-0 md:h-[26em] md:gap-4">
    <template v-for="(catImage, index) in productCatalog.images" :key="`catImage-${index}`">
      <div :class="index === 0 ? 'md:row-span-2 row-span-5 col-span-12 md:col-span-6' : 'col-span-3 md:col-span-3 row-span-2 md:row-span-1'">
        <img :src="catImage.image" alt="Descriptive text" class="h-full w-full cursor-pointer rounded-sm object-cover" @click="toggleModal(true, index)">
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>

</style>
