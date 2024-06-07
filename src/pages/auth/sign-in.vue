<script setup lang="ts">
const logo = getImageAssets('villarian.svg')
const illustration1 = getImageAssets('house2.png')

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="min-h-vh">
    <div class="grid grid-12 min-h-vh">
      <div v-if="isMdScreen" class="col-span-5 bg-orange-400">
        <div class="min-h-vh fcc-v py-5">
          <img :src="illustration1" alt="" srcset="" width="100%" height="auto">
          <div class="px-8 text-center">
            <div class="mb-1.5 text-2xl text-white font-bold">
              Temukan Villa Idaman Anda
            </div>
            <div class="text-base text-white">
              Temukan dan sewa Villa ideal dengan cepat dan mudah. Beragam pilihan properti menanti Anda.
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 min-h-vh flex flex-col items-center justify-between md:col-span-7">
        <div class="pt-8">
          <img v-if="isMdScreen" :src="logo" alt="" srcset="" :width="isMdScreen ? '180px' : '150px'" :height="isMdScreen ? '180px' : '150px'">
        </div>
        <div class="px-4 md:min-w-[30em] md:px-0">
          <div class="pb-5 text-center">
            <template v-if="!isMdScreen">
              <div class="mb-3 fcc">
                <img :src="logo" alt="" srcset="" :width="isMdScreen ? '180px' : '160px'" :height="isMdScreen ? '180px' : '160px'">
              </div>
            </template>
            <div class="text-2xl font-bold md:text-4xl">
              <span class="text-orange-400">Selamat Datang</span> Kembali
            </div>
            <div class="mt-2 text-sm text-zinc-500">
              Masukkan email dan kata sandi untuk mengakses akun Anda
            </div>
          </div>
          <div class="px-2 py-3 md:px-4">
            <div class="form">
              <div class="mb-4">
                <div class="pb-2">
                  <label class="text-label">
                    Email
                  </label>
                </div>
                <input id="inline-full-name" class="input-form" type="text" placeholder="Masukan Email">
              </div>
              <div>
                <div class="pb-2">
                  <label class="text-label">
                    Password
                  </label>
                </div>
                <input id="inline-full-name" type="password" class="input-form" placeholder="Masukan Password">
              </div>
              <div class="mt-3 text-center">
                <button type="button" class="py-1 btn-text">
                  Lupa Password ?
                </button>
              </div>
              <div class="mt-6">
                <button type="button" class="w-full rounded-md py-2.5 btn">
                  Masuk
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-8">
          <div class="px-8 text-center text-xs md:text-sm">
            Powered by passion - Villa Management © {{ currentYear }}.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
