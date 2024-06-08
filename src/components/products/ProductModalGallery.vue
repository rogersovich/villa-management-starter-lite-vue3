<script setup lang="ts">
import {
  DialogTitle,
} from '@headlessui/vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

interface PropsModalGallery {
  isOpen: boolean
  carouselIndex: number
  galleries: { image: string }[]
}

const props = defineProps<PropsModalGallery>()

const emit = defineEmits(['update:isOpen'])

const isOpen = toRef(props, 'isOpen')
const carouselIndex = toRef(props, 'carouselIndex')

function toggleModal(value: boolean) {
  emit('update:isOpen', value)
}

const carouselRefs = ref()
const carouselItemToShow = ref(1)
</script>

<template>
  <BaseModal container-width="max-w-3xl" :is-open="isOpen" @update:is-open="toggleModal($event)">
    <template #default>
      <DialogTitle as="h3" class="text-base text-zinc-800 font-medium leading-6 md:text-xl">
        <div class="fcb">
          <div class="font-bold tracking-wider">
            Villa Galeri
          </div>
          <button
            type="button"
            class="fcc rounded-full px-1 py-1 btn-variant md:px-2 md:py-2"
            @click="toggleModal(false)"
          >
            <div i-tabler-x class="fcc text-sm md:text-base" />
          </button>
        </div>
      </DialogTitle>
      <div class="mt-4">
        <Carousel ref="carouselRefs" v-model="carouselIndex" :items-to-show="carouselItemToShow" :wrap-around="true">
          <Slide v-for="(item, index) in props.galleries" :key="index">
            <div class="carousel__item cursor-pointer">
              <img :src="item.image" alt="" srcset="" height="150px" width="100%" class="rounded-md">
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </template>
  </BaseModal>
</template>

<style scoped>
:deep(.carousel__prev) {
  opacity: 1;
  background: #f97316;
  border-radius: 100%;
  font-size: 20px;
  color: white;
}

:deep(.carousel__next) {
  opacity: 1;
  background: #f97316;
  border-radius: 100%;
  font-size: 20px;
  color: white;
}
</style>
