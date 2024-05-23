<script setup>
const facilities = ref([
  {
    title: 'Kolam Renang',
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
    title: 'Kolam Renang Private',
    icon: 'i-tabler-swimming',
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
    <div class="border-b-1 border-zinc-200 py-[2.5em]">
      <div class="mb-[1em] text-[1.5rem] font-bold">
        Fasilitias Populer
      </div>
      <div class="grid grid-12 gap-5">
        <template v-for="facility in facilities" :key="facility.title">
          <div class="col-span-3">
            <div class="fcs gap-3">
              <div :class="facility.icon" class="text-[1.1em]" />
              <div class="text-[1em]">
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
