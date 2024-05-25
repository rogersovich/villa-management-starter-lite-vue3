<script setup lang="ts">

</script>

<template>
  <div class="border-b-1 border-zinc-200 pb-[2.5em] pt-6">
    <div class="fcs gap-2.5 pb-1">
      <div class="rounded bg-[#e7f2ff] px-2 py-0.5 text-sm">
        Villa
      </div>
      <TagRatings :rating-value="3.4" />
      <div i-tabler-info-circle-filled class="cursor-pointer text-[0.9em] color-#aeb2be" />
      <div class="text-sm color-green-600 font-600 tracking-wide">
        Terlaris #2 di Cisarua
      </div>
    </div>
    <div class="grid grid-2 gap-4">
      <div class="col-span-1">
        <div class="mb-2 text-[2em] font-bold tracking-wide">
          Villa Mawar Selatan
        </div>
        <div class="fcs gap-2.5">
          <div class="fcs gap-2.5">
            <TextRating rating="3.4" />
            <div class="cursor-pointer text-[0.9em] text-zinc-500 underline">
              (40 review)
            </div>
            <div class="h-[7px] w-[7px] rounded-full bg-[#aeb2be]" />
            <div class="cursor-pointer text-[0.9em] text-zinc-500 underline">
              Bogor, Cisarua
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1 text-right">
        <div class="text-[0.9em] text-zinc-500 font-600">
          Mulai dari
        </div>
        <div class="text-[1.5rem] text-orange-500 font-bold">
          Rp 1.200.000
        </div>
        <div class="text-[0.8em]">
          /kamar/malam
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
