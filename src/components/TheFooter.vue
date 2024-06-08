<template>
  <div class="block w-full">
    <div class="grid grid-12 mt-8 gap-y-8 bg-zinc-800 px-4 pb-18 pt-6 md:gap-16 2xl:px-72 lg:px-8 md:py-8 xl:px-28">
      <div class="col-span-12 md:col-span-5">
        <div class="text-zinc-100">
          <div class="fcs gap-3">
            <div i-tabler-home inline-block text-lg />
            <div class="mt-0.5 text-lg font-bold">
              Nama Brand
            </div>
          </div>
          <div class="mt-2 break-words text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-7">
        <div class="grid grid-12 gap-4 text-zinc-100">
          <div class="col-span-6 md:col-span-4">
            <div>
              <div class="text-lg font-bold">
                About
              </div>
              <ul class="mt-2 text-sm">
                <li class="mb-1">
                  Home
                </li>
                <li class="mb-1">
                  About Us
                </li>
                <li>
                  Our Team
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-6 md:col-span-4">
            <div>
              <div class="text-lg font-bold">
                Product
              </div>
              <ul class="mt-2 text-sm">
                <li class="mb-1">
                  Our Product
                </li>
                <li class="mb-1">
                  FAQ
                </li>
                <li>
                  Feedback
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-12 md:col-span-4">
            <div>
              <div class="text-lg font-bold">
                Contact Us
              </div>
              <ul class="mt-2 text-sm">
                <template v-if="isMdScreen">
                  <li class="mb-1">
                    0896212818192
                  </li>
                  <li class="mb-1">
                    support@gmail.com
                  </li>
                  <li class="mt-3 fcs gap-4">
                    <div class="fcc border border-gray-100 border-rd-full border-solid p-1.5">
                      <div i-tabler-brand-facebook class="text-[1rem]" />
                    </div>
                    <div class="fcc border border-gray-100 border-rd-full border-solid p-1.5">
                      <div i-tabler-brand-instagram class="text-[1rem]" />
                    </div>
                    <div class="fcc border border-gray-100 border-rd-full border-solid p-1.5">
                      <div i-tabler-brand-twitter class="text-[1rem]" />
                    </div>
                  </li>
                </template>
                <template v-if="!isMdScreen">
                  <li class="fc gap-12">
                    <div>
                      <div class="mb-1">
                        0896212818192
                      </div>
                      <div>
                        support@gmail.com
                      </div>
                    </div>
                    <div class="mt-3 fcs gap-4">
                      <div class="fcc border border-gray-100 border-rd-full border-solid p-1.5">
                        <div i-tabler-brand-facebook class="text-[1rem]" />
                      </div>
                      <div class="fcc border border-gray-100 border-rd-full border-solid p-1.5">
                        <div i-tabler-brand-instagram class="text-[1rem]" />
                      </div>
                      <div class="fcc border border-gray-100 border-rd-full border-solid p-1.5">
                        <div i-tabler-brand-twitter class="text-[1rem]" />
                      </div>
                    </div>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
