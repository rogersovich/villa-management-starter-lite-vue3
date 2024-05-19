<script setup lang="ts">
function sendMessageToWhatsApp() {
  const phoneNumber = '6281283250082'
  const message = encodeURIComponent('Hallo, Saya ingin memesan villa 😁🏠')
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
  window.open(whatsappUrl, '_blank')
}
</script>

<template>
  <div class="fixed bottom-2 right-2 z-10">
    <div class="cursor-pointer rounded-full bg-[#25D366] p-3" @click="sendMessageToWhatsApp">
      <div i-tabler-brand-whatsapp class="text-4xl text-white" />
    </div>
  </div>
</template>

<style scoped>

</style>
