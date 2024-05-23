<script setup lang="ts">
const emit = defineEmits(['modalToggle'])

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

function toggleModal(value: boolean) {
  emit('modalToggle', value)
}
</script>

<template>
  <div class="grid grid-12 grid-flow-col grid-rows-2 my-4 h-[26em] gap-4">
    <template v-for="(catImage, index) in productCatalog.images" :key="`catImage-${index}`">
      <div :class="index === 0 ? 'row-span-2 col-span-6' : 'col-span-3'">
        <img :src="catImage.image" alt="Descriptive text" class="h-full w-full cursor-pointer rounded-sm object-cover" @click="toggleModal(true)">
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>

</style>
