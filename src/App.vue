<script setup lang="ts">
import { toast } from 'vue3-toastify'
import { storeToRefs } from 'pinia'

const toastStore = useToastStore()
const { showToast } = storeToRefs(toastStore)

const getNotif = () => {
  toast(toastStore.message, {
    position: toast.POSITION.TOP_RIGHT,
    type: toastStore.type,
    onClose: () => {
      toastStore.resetToastMessage()
    },
  })
}

watch(showToast, (newVal, _oldVal) => {
  if (newVal) {
    setTimeout(() => {
      getNotif()
    }, 10)
  }
})

toggleDark(false)
</script>

<template>
  <main font-lato text="gray-700 dark:gray-200" bg="white">
    <RouterView />
  </main>
</template>
