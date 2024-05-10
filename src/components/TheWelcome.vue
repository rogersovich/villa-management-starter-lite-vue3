<script setup lang="ts">
const imagePath = getImageUrl('house1', 'png')
</script>

<template>
  <div font-sans class="grid-2 min-h-2xl border-rd-2xl bg-orange-100/60">
    <div class="fsc-v px-8 py-8">
      <div class="text-left text-[2.8em] font-black">
        Discover a suitable home, find roommates and move in
      </div>
      <div class="my-3 text-left text-[1.25em]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </div>
      <div class="mt-3">
        <button class="fcc gap-2 border-rd-lg bg-orange-500 px-10 py-3 text-lg btn hover:bg-orange-600">
          Explore now
          <span i-tabler-arrow-narrow-right inline-block text-xl />
        </button>
      </div>
    </div>
    <div class="fcc">
      <img :src="imagePath" alt="Descriptive text" class="h-[35em] object-cover">
    </div>
  </div>
</template>
