<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const faq_options = ref([
  {
    title: 'Jenis kamar apa saja yang tersedia di The Grand Villandra Resort?',
    description: 'Jenis kamar yang tersedia di hotel ini antara lain adalah:',
  },
  {
    title: 'Berapa kisaran harga kamar untuk menginap di The Grand Villandra Resort?',
    description: 'Harga termurah di The Grand Villandra Resort kalau kamu mau menginap hari ini adalah IDR 1.049.749',
  },
  {
    title: 'Di mana alamat The Grand Villandra Resort?',
    description: 'The Grand Villandra Resort beralamat di Lovina, Tukadmungga, Kec. Buleleng, Kabupaten Buleleng, Bali',
  },
  {
    title: 'Pukul berapa waktu check-in & check-out di The Grand Villandra Resort?',
    description: 'Waktu untuk check-in di The Grand Villandra Resort adalah mulai dari pukul 14:00-23:59 dan waktu check-out paling lambat pukul 12:00',
  },
  {
    title: 'Apa saja fasilitas yang tersedia di The Grand Villandra Resort?',
    description: 'Fasilitas yang tersedia dan bisa kamu gunakan di hotel ini adalah (beberapa fasilitas mungkin perlu biaya tambahan):',
  },
  {
    title: 'Apakah di The Grand Villandra Resort tersedia fasilitas kolam renang?',
    description: 'Ya, di The Grand Villandra Resort tersedia kolam renang yang bisa kamu gunakan.',
  },
])
</script>

<template>
  <div class="mx-4 border-b-1 border-zinc-200 py-[2.5em] md:mx-0">
    <div class="mb-6 fcb">
      <div class="text-[1.5rem] font-bold">
        Pertanyaan yang Sering Diajukan
      </div>
    </div>
    <div class="w-full">
      <div class="mx-auto w-full rounded-2xl bg-white py-2">
        <template v-for="(faq, index) in faq_options" :key="faq.title">
          <Disclosure v-slot="{ open }" as="div" :class="index !== 0 ? 'mt-3' : ''">
            <DisclosureButton
              class="w-full flex justify-between rounded-md px-4 py-2 text-left text-[1em] text-zinc-800 font-medium focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75"
              :class="open ? 'bg-orange-100' : 'bg-zinc-100 '"
            >
              <span :class="open ? 'text-orange-400' : ''">
                {{ faq.title }}
              </span>
              <div
                i-tabler-chevron-up :class="open ? 'rotate-180 transform text-orange-400' : 'text-zinc-500'"
                class="h-5 w-5"
              />
            </DisclosureButton>
            <DisclosurePanel class="px-4 pb-2 pt-4 text-sm text-zinc-500">
              {{ faq.description }}
            </DisclosurePanel>
          </Disclosure>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
