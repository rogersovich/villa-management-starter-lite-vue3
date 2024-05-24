<script setup lang="ts">
const props = defineProps({
  index: Number,
})
</script>

<template>
  <div>
    <div class="m-1 h-[8em] overflow-hidden border border-zinc-100 rounded-lg border-solid px-3 py-3 text-left shadow">
      <div class="fcb">
        <TextRating rating="4.5" active-size="0.9" not-active-size="0.7" active-color="#fb923c" />
        <div class="text-[0.8em] text-zinc-500">
          13 Mei 2023
        </div>
      </div>
      <div class="my-1 text-[1em] font-600">
        John Doe - {{ props.index }}
      </div>
      <div class="line-clamp-2 overflow-hidden text-ellipsis text-[0.8em]">
        Sangat senang sekali menginap disini. Kamarnya bersih, luas dan fasilitas komplit. Ada kolam depan kamar dan kolam depan pantai. Restoran dan tempat Sarapan depan pantai dan sarapannya lumayan enak. Puas banget ngungsi disini !! Sangat happy menginap disini.
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
