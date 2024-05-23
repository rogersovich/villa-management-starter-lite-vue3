<script setup lang="ts">
const { ratingValue } = defineProps({
  ratingValue: {
    type: Number,
    default: 0,
  },
})

const roundedRating = computed(() => Math.round(ratingValue))
const starsArray = computed(() => {
  const stars = []
  for (let i = 1; i <= 5; i++)
    stars.push({ status: i <= roundedRating.value, index: i })

  return stars
})
</script>

<template>
  <div class="fcs gap-1">
    <div
      v-for="star in starsArray"
      :key="star.index"
      class="text-[0.8em] text-orange-400"
      :class="star.status ? 'i-tabler-star-filled' : 'i-tabler-star'"
    />
  </div>
</template>

<style scoped>

</style>
