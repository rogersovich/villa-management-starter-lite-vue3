<script setup lang="ts">

</script>

<template>
  <div class="border-b-1 border-zinc-200 py-[2.5em]">
    <div class="mb-6 fcb">
      <div class="text-[1.5rem] font-bold">
        Review
      </div>
    </div>
    <div class="mb-4 fcb">
      <div class="fcs gap-4">
        <TextRating rating="3.4" active-size="1.7" in-active-size="1.1" />
        <div>
          <div class="text-[0.9em] font-bold leading-tight">
            Good
          </div>
          <div class="text-[0.8em]">
            Dari 40 review
          </div>
        </div>
      </div>
      <div class="fcb gap-2">
        <div i-tabler-arrow-left />
        <div i-tabler-arrow-right />
      </div>
    </div>
    <div class="grid grid-12 gap-4">
      <template v-for="item in 3" :key="item">
        <div class="col-span-4">
          <div class="h-[8em] overflow-hidden border border-zinc-100 rounded-lg border-solid px-3 py-3 shadow">
            <div class="fcb">
              <TextRating rating="4.5" active-size="0.9" not-active-size="0.7" active-color="#fb923c" />
              <div class="text-[0.8em] text-zinc-500">
                13 Mei 2023
              </div>
            </div>
            <div class="my-1 text-[1em] font-600">
              John Doe - {{ item }}
            </div>
            <div class="line-clamp-2 overflow-hidden text-ellipsis text-[0.8em]">
              Sangat senang sekali menginap disini. Kamarnya bersih, luas dan fasilitas komplit. Ada kolam depan kamar dan kolam depan pantai. Restoran dan tempat Sarapan depan pantai dan sarapannya lumayan enak. Puas banget ngungsi disini !! Sangat happy menginap disini.
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>
