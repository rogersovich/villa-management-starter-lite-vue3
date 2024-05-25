<script setup lang="ts">
const descriptionRef = ref<any>(null)
const isClamped = ref(false)
const isExpand = ref(false)

const checkClamp = () => {
  if (descriptionRef.value) {
    const lineHeight = Number.parseInt(getComputedStyle(descriptionRef.value).lineHeight)
    const height = descriptionRef.value.clientHeight
    // Asumsikan '2' adalah jumlah baris maksimum sebelum clamp
    isClamped.value = height >= lineHeight * 2
  }
}

onMounted(() => {
  checkClamp()
  // Opsional: Periksa kembali jika ukuran jendela berubah
  window.addEventListener('resize', checkClamp)
})

watch(descriptionRef, () => {
  // Periksa clamp setiap kali referensi elemen berubah
  checkClamp()
})

const expandText = () => {
  isExpand.value = !isExpand.value
}
</script>

<template>
  <div class="border-b-1 border-zinc-200 py-[2.5em]">
    <div class="mb-6 text-[1.5rem] font-bold">
      Tentang The Grand Villandra Resort
    </div>
    <div ref="descriptionRef" :class="isExpand ? '' : 'line-clamp-2'">
      Villaandra has a restaurant, outdoor swimming pool, a bar and garden in Lovina. Boasting family rooms, this property also provides guests with a terrace. The accommodation features a 24-hour front desk and room service for guests. The rooms at the hotel are fitted with a seating area. At Villandra rooms come with a flat-screen TV, a private bathroom, and a balcony with pool view. Guests at the accommodation can enjoy a la carte breakfast. At Villandra guests are welcome to take advantage of a hot tub. Ganesha Beach is 2.2 km from the hotel, while Krisna Funtastic Land is 2.1 km from the property. The nearest airport is Ngurah Rai International, 67 km from Villaandra, and the property offers a paid airport shuttle service.
    </div>
    <button v-if="isClamped" class="mt-3 px-0 py-0.5 tracking-wide btn-text hover:bg-white" @click="expandText">
      <div class="fcs gap-1.5">
        <span>{{ isExpand ? 'Lihat lebih sedikit' : 'Selengkapnya' }}
        </span>
        <span i-tabler-chevron-down class="text-[1.1em]" :class="isExpand ? 'rotate-180 transform' : ''" />
      </div>
    </button>
  </div>
</template>

<style scoped>

</style>
