<script setup lang="ts">
function sendMessageToWhatsApp() {
  const phoneNumber = '6281283250082'
  const message = encodeURIComponent('Hallo, Saya ingin memesan villa 😁🏠')
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
  window.open(whatsappUrl, '_blank')
}
</script>

<template>
  <div
    class="fixed right-2 z-10" :class="{
      'bottom-2': isMdScreen,
      'bottom-18': !isMdScreen,
    }"
  >
    <div class="cursor-pointer rounded-full bg-[#25D366] p-3" @click="sendMessageToWhatsApp">
      <div i-tabler-brand-whatsapp class="text-2xl text-white md:text-4xl" />
    </div>
  </div>
</template>

<style scoped>

</style>
