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
  <div p="y-8" class="mx-4">
    <div class="text-orange-400 font-bold" font-lato>
      Find Our Services:
    </div>
    <div class="grid grid-2 gap-4">
      <div class="col-span-2 text-[2.2em] font-black leading-tight md:col-span-1 md:text-[3.5em]" font-ptSans>
        Bring Passion and
        <br>
        Expertise Together
      </div>
      <div font-lato class="col-span-2 fce text-sm md:col-span-1 md:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>
    </div>
    <div font-lato class="grid grid-12 mt-10 gap-6 md:gap-8">
      <template v-for="service in services" :key="service.name">
        <div class="col-span-12 md:col-span-4">
          <div class="min-h-[16em] fcc-v rounded-2xl border-solid bg-white px-2 py-6 outline-1 outline-zinc-200 outline md:min-h-[18em] hover:outline-3 hover:outline-orange-400">
            <div class="fcc">
              <div :class="service.icon" class="text-[3rem] text-orange-400 md:text-[4em]" />
            </div>
            <div class="mt-2.5 px-4 text-center">
              <div class="text-lg font-bold md:text-xl">
                {{ service.name }}
              </div>
              <div class="mt-4 text-sm text-gray-500/70 md:text-base">
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
