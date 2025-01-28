export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/icon',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  css: ['~/assets/css/tailwind.css'],

  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  fonts: {
    families: [
      { name: 'Poppins', provider: 'google', weights: [400, 500] },
      { name: 'Montserrat', provider: 'google', weights: [600, 700] },
    ],
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
        'greek-ext',
        'greek',
        'vietnamese',
        'latin-ext',
        'latin',
      ],
    },
  },

  icon: {
    serverBundle: {
      collections: ['mdi'],
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./app/components/ui"
     */
    componentDir: './app/components/ui',
  },

  compatibilityDate: '2025-01-28',

  routeRules: {
    '/': { redirect: { to: '/example1' } },
  }
})
