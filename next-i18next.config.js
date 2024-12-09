// POSSIBILITY 1: locize live download usage on client side only
const LocizeBackend = require('i18next-locize-backend/cjs')
const ChainedBackend= require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default

// If you've configured caching for your locize version, you may not need the i18next-localstorage-backend and i18next-chained-backend plugin.
// https://docs.locize.com/more/caching

const isBrowser = typeof window !== 'undefined'

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  debug: isDev,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  partialBundledLanguages: isBrowser && true,
  serializeConfig: false,
  use: isBrowser ?
    (isDev ? [ChainedBackend, /*require('locize').locizeEditorPlugin({ show: true }), require('locize-lastused')*/] : [ChainedBackend]) :
    (isDev ? [/*require('locize').locizeEditorPlugin({ show: true })*/] : []),
  // locizeLastUsed: {
  //   projectId: 'd3b405cf-2532-46ae-adb8-99e88d876733',
  //   apiKey: 'myApiKey', // to not add the api-key in production
  //   version: 'latest',
  //   debounceSubmit: 10000
  // },
  saveMissing: isDev && isBrowser // do not set saveMissing to true for production and also not when using the chained backend
}
