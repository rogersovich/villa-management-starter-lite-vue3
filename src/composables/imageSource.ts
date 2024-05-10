// ? updated with your project's assets folder setup
export function getImageUrl(name: string, ext: string) {
  return new URL(`../assets/image/${name}.${ext}`, import.meta.url).href
}
