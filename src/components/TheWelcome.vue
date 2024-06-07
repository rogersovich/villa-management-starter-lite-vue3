<script setup lang="ts">
const imagePath = getImageUrl('house1', 'png')
</script>

<template>
  <div font-ptSans class="grid-2 min-h-2xl border-rd-2xl bg-orange-50">
    <div class="fsc-v px-8 py-8">
      <div class="text-left text-[2.4em] font-black 2xl:text-[2.8em] xl:text-[2.6em]">
        Discover a suitable home, find roommates and move in
      </div>
      <div class="my-3 text-left 2xl:text-[1.25em]" font-lato>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </div>
      <div class="mt-3">
        <button class="fcc gap-2 border-rd-lg bg-orange-500 px-10 py-3 text-lg btn hover:bg-orange-600" font-lato>
          Explore now
          <span i-tabler-arrow-narrow-right inline-block text-xl />
        </button>
      </div>
    </div>
    <div class="fcc">
      <img :src="imagePath" alt="Descriptive text" class="h-[25em] object-cover 2xl:h-[35em] xl:h-[30em]">
    </div>
  </div>
</template>
