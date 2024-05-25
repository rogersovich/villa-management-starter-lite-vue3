<script setup>
const joinUsIcon = getImageAssets('join-us-icon.webp')
</script>

<template>
  <div class="fcb border-b-1 border-zinc-200 py-[2.5em]">
    <div class="fcs gap-4">
      <div>
        <img :src="joinUsIcon" alt="" width="50px" height="50px">
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
    <div>
      <button type="button" class="btn-variant">
        Gabung Sekarang
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
