import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-orange-600 text-white cursor-pointer hover:bg-orange-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-orange-600 !outline-none'],
    ['btn-more-rounded', 'fcc gap-2 border-1 border-orange-500 border-rd-full border-solid bg-white px-6 py-2.5 text-base text-orange-500 hover:bg-orange-500 hover:text-white'],
    ['fcc', 'flex items-center justify-center'],
    ['fcb', 'flex items-center justify-between'],
    ['fce', 'flex items-center justify-end'],
    ['fcs', 'flex items-center justify-start'],
    ['fcc-v', 'flex items-center justify-center flex-col'],
    ['fcs-v', 'flex items-center justify-start flex-col'],
    ['fcb-v', 'flex items-center justify-between flex-col'],
    ['fce-v', 'flex items-center justify-end flex-col'],
    ['fce-v', 'flex items-center justify-end flex-col'],
    ['fsc-v', 'flex items-start justify-center flex-col'],
    ['grid-12', 'grid grid-cols-12'],
    ['grid-2', 'grid grid-cols-2'],
    ['title-text', 'font-black text-3xl'],
    ['container-products', 'grid grid-cols-12 gap-4'],
    ['chip-facility', 'fcc gap-2 border-1 border-gray-300/50 border-rd-full border-solid py-[8px]'],
    ['chip-rating', 'fcc gap-1.5 border-rd-full px-[0.75rem] py-[5px] text-orange-400 backdrop-blur-sm bg-gray-600/30'],
    ['btn-back', 'fcs cursor-pointer gap-3 rounded-sm px-3 py-1 hover:outline-1 hover:outline-gray-300 hover:outline'],
    ['btn-variant', 'inline-flex justify-center border border-transparent rounded-md bg-orange-100 px-4 py-2 text-sm text-orange-800 font-medium hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        inter: 'Inter',
      },
    }),
  ],
})
