export function formatStringToSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-')
}

export function formatSlugToString(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

export const OPTION_NAV_TABS = [
  {
    title: 'Info Umum',
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
