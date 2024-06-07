import { defineStore } from 'pinia'

type ToastType = 'default' | 'success' | 'error' | 'warning'

interface ToastState {
  message: string
  showToast: boolean
  type: ToastType
}

export const useToastStore = defineStore({
  id: 'toast',
  state: (): ToastState => ({
    message: '',
    showToast: false,
    type: 'default',
  }),
  actions: {
    setToastMessage(message: string) {
      this.message = message
    },
    setShowToast(showToast: boolean) {
      this.showToast = showToast
    },
    setTypeToast(typeToast: ToastType) {
      this.type = typeToast
    },
    showToastMessage(message: string, type: ToastType) {
      this.setToastMessage(message)
      this.setShowToast(true)
      this.setTypeToast(type)
    },
    resetToastMessage() {
      this.setToastMessage('')
      this.setShowToast(false)
      this.setTypeToast('default')
    },
  },
})
