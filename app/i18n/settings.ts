export const fallbackLng = 'en'
export const languages = ['en', 'es']
export const defaultNS = 'common'
export const cookieName = 'i18next'

export type locale = typeof languages[number]

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}