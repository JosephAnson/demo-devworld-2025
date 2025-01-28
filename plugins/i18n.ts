export default defineNuxtPlugin(async () => {
  const { data: response } = await useFetch('/api/languages')

  if (!response.value?.success)
    return

  const { data: languages } = response.value

  const nuxtApp = useNuxtApp()
  const i18n = nuxtApp.$i18n

  // Update available locales
  i18n.availableLocales = languages.map(lang => ({
    code: lang.code,
    name: lang.name,
    dir: lang.direction,
  }))
})
