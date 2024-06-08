export function formatStringToSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-')
}

export function formatSlugToString(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

export const OPTION_NAV_TABS = [
  {
    title: 'Infomasi Umum',
    active: true,
    ref: 'el-information',
  },
  {
    title: 'Review',
    active: false,
    ref: 'el-review',
  },
  {
    title: 'Fasilitas',
    active: false,
    ref: 'el-facility',
  },
  {
    title: 'Lokasi',
    active: false,
    ref: 'el-location',
  },
  {
    title: 'Tentang',
    active: false,
    ref: 'el-about',
  },
  {
    title: 'Kalendar',
    active: false,
    ref: 'el-calendars',
  },
]

export function scrollToTargetAdjusted(id: string) {
  const element = document.getElementById(id) as any
  const headerOffset = 45
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

export const extractCatalogId = (url: string) => {
  const pattern = /\/catalogs\/.*-(ct-\d+)$/
  const match = url.match(pattern)
  return match ? match[1] : null
}

export const isSmScreen = useMediaQuery('(min-width: 640px)')
export const isMdScreen = useMediaQuery('(min-width: 768px)')
export const isLgScreen = useMediaQuery('(min-width: 1024px)')
export const isXlScreen = useMediaQuery('(min-width: 1280px)')
export const is2XlScreen = useMediaQuery('(min-width: 1536px)')

export const OPTION_HOME_TABS = [
  {
    name: 'Home',
    icon: 'i-tabler-home',
    to: '/',
  },
  {
    name: 'Catalog',
    icon: 'i-tabler-building-circus',
    to: '/catalogs',
  },
  {
    name: 'About',
    icon: 'i-tabler-user',
    to: '/about',
  },
]
