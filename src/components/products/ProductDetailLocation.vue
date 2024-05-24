<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

interface Location {
  title: string
  subtitle: string
  type: string
}

const nearest_destionation = ref([
  {
    title: 'Paling Dekat',
    locations: [
      {
        title: 'Oleh-Oleh Krisna 5',
        subtitle: 'Tempat belanja',
        type: 'SHOP',
      },
      {
        title: 'Warung Rasta',
        subtitle: 'Restoran',
        type: 'CULINARY',
      },
      {
        title: 'Laut Mas Wisata',
        subtitle: 'Atraksi outdoor',
        type: 'ENTERTAINMENT',
      },
      {
        title: 'Rumah Sakit Umum',
        subtitle: 'Rumah sakit',
        type: 'HOSPITAL',
      },
    ],
  },
  {
    title: 'Belanja',
    locations: [
      {
        title: 'Oleh-Oleh Krisna 5',
        subtitle: 'Tempat belanja',
        type: 'SHOP',
      },
      {
        title: 'Oleh-Oleh Gembus',
        subtitle: 'Tempat belanja',
        type: 'SHOP',
      },
    ],
  },
  {
    title: 'Rumah Sakit',
    locations: [
      {
        title: 'Rumah Sakit Umum',
        subtitle: 'Rumah sakit',
        type: 'HOSPITAL',
      },
      {
        title: 'Rumah Medika',
        subtitle: 'Rumah sakit',
        type: 'HOSPITAL',
      },
    ],
  },
  {
    title: 'Kuliner',
    locations: [
      {
        title: 'Warung Rasta',
        subtitle: 'Restoran',
        type: 'CULINARY',
      },
    ],
  },
  {
    title: 'Wisata',
    locations: [
      {
        title: 'Laut Mas Wisata',
        subtitle: 'Atraksi outdoor',
        type: 'ENTERTAINMENT',
      },
      {
        title: 'Wisata Matahari',
        subtitle: 'Hiburan & permainan',
        type: 'ENTERTAINMENT',
      },
    ],
  },
])

const carrouselCurrentSlide = ref(0)
const carouselRefs = ref()
const carouselTotalShow = ref(3.5)

const carouselClasses = computed(() => {
  const currentSlide = carouselRefs.value?.data.currentSlide.value
  if (currentSlide === 0)
    return 'ml-0 mr-2' // First item
  else if (currentSlide === nearest_destionation.value.length - 1)
    return 'mr-0 ml-2' // Last item
  else
    return 'mx-1' // Middle items
})

const disableIconSlideClass = computed(() => {
  const currentSlide = carouselRefs.value?.data.currentSlide.value
  return (type: 'prev' | 'next') => {
    if (type === 'prev')
      return currentSlide === 0 ? 'cursor-text text-zinc-400' : 'cursor-pointer'
    else if (type === 'next')
      return currentSlide === nearest_destionation.value.length - carouselTotalShow.value ? 'cursor-text text-zinc-400' : 'cursor-pointer'
  }
})

const nextSlide = () => {
  carouselRefs.value.next()
}

const prevSlide = () => {
  carouselRefs.value.prev()
}

const addressLocation = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.929906548859!2d106.9152444236335!3d-6.6571812033295945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b64b07d6acd3%3A0x59e3f3696bd859a8!2sTaman%20Wisata%20Matahari!5e0!3m2!1sid!2sid!4v1716561767091!5m2!1sid!2sid'

const tagNearestLocation = ref('Paling Dekat')
const tagLocations = ref<Location[]>([])

const onSelectTag = (title: string) => {
  tagNearestLocation.value = title
  const locations = nearest_destionation.value.filter(item => item.title === title)
  tagLocations.value = locations[0].locations
}

const getLocationTagIcon = (type: any) => {
  let value = null
  switch (type) {
    case 'SHOP':
      value = 'i-tabler-shopping-bag'
      break
    case 'CULINARY':
      value = 'i-tabler-tools-kitchen-2'
      break
    case 'ENTERTAINMENT':
      value = 'i-tabler-building-circus'
      break
    case 'HOSPITAL':
      value = 'i-tabler-building-hospital'
      break

    default:
      value = 'i-tabler-shopping-bag'
      break
  }

  return value
}

const getLocationTagBg = (type: any) => {
  let value = null
  switch (type) {
    case 'SHOP':
      value = 'bg-orange-400'
      break
    case 'CULINARY':
      value = 'bg-green-400'
      break
    case 'ENTERTAINMENT':
      value = 'bg-purple-400'
      break
    case 'HOSPITAL':
      value = 'bg-blue-400'
      break

    default:
      value = 'bg-orange-400'
      break
  }

  return value
}

const openFullMaps = () => {
  window.open('https://maps.app.goo.gl/e6nuXr3n11S7JQyR7', '_blank')
}

onMounted(() => {
  tagLocations.value = nearest_destionation.value[0].locations
})
</script>

<template>
  <div class="border-b-1 border-zinc-200 py-[2.5em]">
    <div class="mb-6 fcb">
      <div class="text-[1.5rem] font-bold">
        Lokasi
      </div>
      <div>
        <button type="button" class="btn-text" @click="openFullMaps">
          <div class="fcc gap-2">
            <span i-tabler-map class="text-[0.9em]" />
            <span>
              Lihat Peta
            </span>
          </div>
        </button>
      </div>
    </div>
    <div class="grid grid-12 gap-6">
      <div class="col-span-7">
        <iframe :src="addressLocation" width="100%" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </div>
      <div class="col-span-5">
        <div class="mb-4 text-zinc-400">
          Lovina, Tukadmungga, Kec. Buleleng, Kabupaten Buleleng, Bali
        </div>
        <div class="mb-3 font-bold">
          Destinasi Terdekat
        </div>
        <div class="mb-4">
          <Carousel ref="carouselRefs" v-model="carrouselCurrentSlide" snap-align="start" :items-to-show="carouselTotalShow" :wrap-around="false" :mouse-drag="false">
            <Slide v-for="(item, index) in nearest_destionation" :key="index">
              <div :class="carouselClasses" class="w-full">
                <div class="cursor-pointer border border-1 rounded-full px-4 py-1 text-[1em]" :class="tagNearestLocation === item.title ? 'border-orange-400 bg-orange-50 text-orange-400' : 'border-zinc-200 '" @click="onSelectTag(item.title)">
                  {{ item.title }}
                </div>
              </div>
            </Slide>
            <template #addons>
              <div class="absolute left-0 top-[2px]">
                <div class="rounded-md bg-zinc-100 p-1 opacity-0 shadow hover:opacity-100">
                  <div i-tabler-arrow-left class="cursor-pointer text-lg" :class="disableIconSlideClass('prev')" @click="prevSlide" />
                </div>
              </div>
              <div class="absolute right-0 top-[2px]">
                <div class="rounded-md bg-zinc-100 p-1 opacity-0 shadow hover:opacity-100">
                  <div i-tabler-arrow-right class="cursor-pointer text-lg" :class="disableIconSlideClass('next')" @click="nextSlide" />
                </div>
              </div>
            </template>
          </Carousel>
        </div>
        <div>
          <template v-for="location in tagLocations" :key="location.title">
            <div class="fs mb-3.5 gap-3">
              <div class="rounded-full px-1.5 py-1.5" :class="getLocationTagBg(location.type)">
                <div class="text-[0.9em] text-white" :class="getLocationTagIcon(location.type)" />
              </div>
              <div>
                <div>
                  {{ location.title }}
                </div>
                <div class="text-sm text-zinc-400 font-100">
                  {{ location.subtitle }}
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
