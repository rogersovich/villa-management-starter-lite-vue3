<template>
  <!-- <nav mt-6 inline-flex gap-2 text-xl>
    <button icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>

    <a
      i-carbon-logo-github icon-btn
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav> -->
  <div class="grid grid-12 mt-8 gap-16 bg-zinc-900" p="x-8 y-8">
    <div class="col-span-5">
      <div class="text-gray-100">
        <div class="fcs gap-3">
          <div i-tabler-home inline-block text-lg />
          <div class="mt-0.5 text-lg font-bold">
            Nama Brand
          </div>
        </div>
        <div class="mt-2 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </div>
      </div>
    </div>
    <div class="col-span-7">
      <div class="grid grid-12 gap-4 text-gray-100">
        <div class="col-span-4">
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
        <div class="col-span-4">
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
        <div class="col-span-4">
          <div>
            <div class="text-lg font-bold">
              Contact Us
            </div>
            <ul class="mt-2 text-sm">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
