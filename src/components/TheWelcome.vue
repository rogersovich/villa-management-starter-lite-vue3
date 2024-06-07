<script setup lang="ts">
const imagePath = getImageUrl('house1', 'png')
</script>

<template>
  <div font-ptSans class="grid-2 mx-4 my-3 border-rd-2xl bg-orange-50 md:mx-0 md:min-h-2xl">
    <template v-if="isMdScreen">
      <div class="col-span-1 fsc-v px-8 py-8">
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
      <div class="col-span-1 fcc">
        <img :src="imagePath" alt="Descriptive text" class="h-[25em] object-cover 2xl:h-[35em] xl:h-[30em]">
      </div>
    </template>
    <template v-else>
      <div class="col-span-2 fcc">
        <img :src="imagePath" alt="Descriptive text" class="h-[16em] object-cover">
      </div>
      <div class="col-span-2 px-8 pb-6">
        <div class="text-left text-[1.6em] font-black">
          Discover a suitable home, find roommates and move in
        </div>
        <div class="my-3 text-left text-[0.9em]" font-lato>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </div>
        <div class="mt-3">
          <button class="fcc gap-2 border-rd-lg bg-orange-500 px-8 py-3 text-base btn hover:bg-orange-600" font-lato>
            Explore now
            <span i-tabler-arrow-narrow-right inline-block text-xl />
          </button>
        </div>
      </div>
    </template>
  </div>
</template>
