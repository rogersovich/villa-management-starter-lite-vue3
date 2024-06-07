<script setup>
const joinUsIcon = getImageAssets('join-us-icon.webp')
</script>

<template>
  <div class="mx-4 border-b-1 border-zinc-200 py-[2.5em] md:mx-0" :class="isMdScreen ? 'fcb' : ''">
    <div class="fcs gap-4">
      <div>
        <img :src="joinUsIcon" alt="" :width="isMdScreen ? '50px' : '80px'" :height="isMdScreen ? '50px' : '80px'">
      </div>
      <div>
        <div class="text-[1em] font-bold">
          Udah punya akun belum?
        </div>
        <div class="text-[0.9em]">
          Buat akun atau log in yuk. Ada diskon dan benefit biar kamu makin cuan!
        </div>
      </div>
    </div>
    <div :class="isMdScreen ? '' : 'mt-4'">
      <button type="button" class="btn-variant" :class="isMdScreen ? '' : 'w-full py-2.5'">
        Gabung Sekarang
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
