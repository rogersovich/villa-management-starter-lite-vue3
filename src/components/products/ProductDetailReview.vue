<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'

const carrouselCurrentSlide = ref(0)
const carouselRefs = ref()
const carouselTotalSlides = ref(10)
const carouselItemToShow = ref(3)

const carouselClasses = computed(() => {
  return Array.from({ length: carouselTotalSlides.value }, (_, index) => {
    if (index === 0)
      return 'pl-0 pr-1' // First item
    else if (index === carouselTotalSlides.value - 1)
      return 'pr-0 pl-1' // Last item
    else
      return 'px-1' // Middle items
  })
})

const disableNavigationSlideClass = computed(() => {
  return (type: 'prev' | 'next') => {
    if (type === 'prev')
      return carrouselCurrentSlide.value === 0 ? 'bg-zinc-100 opacity-80' : 'bg-white'
    else if (type === 'next')
      return carrouselCurrentSlide.value === carouselTotalSlides.value - carouselItemToShow.value ? 'bg-zinc-100 opacity-80' : 'bg-white'
  }
})

const disableIconSlideClass = computed(() => {
  return (type: 'prev' | 'next') => {
    if (type === 'prev')
      return carrouselCurrentSlide.value === 0 ? 'cursor-text text-zinc-400' : 'cursor-pointer'
    else if (type === 'next')
      return carrouselCurrentSlide.value === carouselTotalSlides.value - carouselItemToShow.value ? 'cursor-text text-zinc-400' : 'cursor-pointer'
  }
})

const nextSlide = () => {
  carouselRefs.value.next()
}

const prevSlide = () => {
  carouselRefs.value.prev()
}

onMounted(() => {
  carouselItemToShow.value = isMdScreen.value ? 3 : 1.2
})
</script>

<template>
  <div class="mx-4 border-b-1 border-zinc-200 py-[2.5em] md:mx-0">
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
      <div class="fcb gap-3">
        <div class="rounded p-2 shadow-md" :class="disableNavigationSlideClass('prev')">
          <div i-tabler-arrow-left class="cursor-pointer text-lg" :class="disableIconSlideClass('prev')" @click="prevSlide" />
        </div>
        <div class="rounded p-2 shadow-md" :class="disableNavigationSlideClass('next')">
          <div i-tabler-arrow-right class="cursor-pointer text-lg" :class="disableIconSlideClass('next')" @click="nextSlide" />
        </div>
      </div>
    </div>
    <Carousel ref="carouselRefs" v-model="carrouselCurrentSlide" snap-align="start" :items-to-show="carouselItemToShow" :wrap-around="false">
      <Slide v-for="(item, index) in carouselTotalSlides" :key="index">
        <div class="carousel__item cursor-pointer" :class="carouselClasses[index]">
          <CardReview :index="item" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<style scoped>

</style>
