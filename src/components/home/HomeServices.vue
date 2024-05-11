<script setup lang="ts">
const services = ref([
  {
    name: 'Mobile Friendly',
    desc: '',
    icon: 'i-tabler-device-mobile',
  },
  {
    name: 'Trusted App',
    desc: '',
    icon: 'i-tabler-heart-handshake',
  },
  {
    name: 'Easy to Find',
    desc: '',
    icon: 'i-tabler-search',
  },
  {
    name: 'Trusted Payment',
    desc: '',
    icon: 'i-tabler-wallet',
  },
  {
    name: 'Booking Feature',
    desc: '',
    icon: 'i-tabler-book-2',
  },
  {
    name: 'Nice Look',
    desc: '',
    icon: 'i-tabler-star',
  },
])
</script>

<template>
  <div font-sans p="y-8">
    <div class="text-orange-400 font-bold">
      Find Our Services:
    </div>
    <div class="grid grid-2">
      <div class="text-[3.5em] font-black leading-tight">
        Bring Passion and
        <br>
        Expertise Together
      </div>
      <div class="fce">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>
    </div>
    <div class="grid grid-12 mt-10 gap-8">
      <template v-for="service in services" :key="service.name">
        <div class="col-span-4">
          <div class="min-h-[18em] fcc-v rounded-xl bg-white px-2 py-6 shadow-sm">
            <div class="fcc">
              <div :class="service.icon" class="text-[4em] text-orange-400" />
            </div>
            <div class="mt-2.5 px-4 text-center">
              <div class="text-xl font-bold">
                {{ service.name }}
              </div>
              <div class="mt-4 text-sm text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>
