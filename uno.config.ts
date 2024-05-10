import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
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
