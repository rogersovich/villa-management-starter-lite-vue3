<script setup lang="ts">
const { rating, activeSize, notActiveSize } = defineProps({
  rating: {
    type: String,
    default: '0',
  },
  activeSize: {
    type: String,
    default: '1',
  },
  notActiveSize: {
    type: String,
    default: '0.9',
  },
  activeColor: {
    type: String,
    default: '#374151',
  },
  notActiveColor: {
    type: String,
    default: '#71717a',
  },
})

const fontActive = computed(() => `${activeSize}em`)
const fontNotActive = computed(() => `${notActiveSize}em`)
const defaultRating = '/5'
</script>

<template>
  <div class="font-bold">
    <span :style="{ fontSize: fontActive, color: activeColor }">{{ rating }}</span>
    <span :style="{ fontSize: fontNotActive, color: notActiveColor }">{{ defaultRating }}</span>
  </div>
</template>

<style scoped>

</style>
