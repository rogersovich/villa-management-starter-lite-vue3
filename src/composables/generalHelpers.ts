export function formatStringToSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-')
}

export function formatSlugToString(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

