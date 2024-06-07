<script setup>
const facilities = ref([
  {
    title: 'Pool',
    icon: 'i-tabler-swimming',
  },
  {
    title: 'Wifi',
    icon: 'i-tabler-wifi',
  },

  {
    title: 'Parkir',
    icon: 'i-tabler-parking',
  },
  {
    title: 'AC',
    icon: 'i-tabler-air-conditioning',
  },
  {
    title: 'Layanan Streaming',
    icon: 'i-tabler-device-tv',
  },
  {
    title: 'Private Pool',
    icon: 'i-tabler-swimming',
  },
  {
    title: 'Fasilitas Anak',
    icon: 'i-tabler-horse-toy',
  },
  {
    title: 'Pemandangan Indah',
    icon: 'i-tabler-beach',
  },
  {
    title: 'Dapur',
    icon: 'i-tabler-tools-kitchen-2',
  },
  {
    title: 'Ruang Tamu',
    icon: 'i-tabler-armchair-2',
  },
])
</script>

<template>
  <div>
    <div class="mx-4 border-b-1 border-zinc-200 py-[2.5em] md:mx-0">
      <div class="mb-[1em] text-[1.5rem] font-bold">
        Fasilitias Populer
      </div>
      <div class="grid grid-12 gap-x-3 gap-y-5 md:gap-5">
        <template v-for="facility in facilities" :key="facility.title">
          <div class="col-span-6 md:col-span-3">
            <div class="fcs gap-3">
              <div :class="facility.icon" class="text-[1.1em]" />
              <div class="text-[0.9em] md:text-[1em]">
                {{ facility.title }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
