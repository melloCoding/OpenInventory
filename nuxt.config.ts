// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    experimental: {
      database: true
    }
  },
  modules: ['@nuxt/ui'],
  css: ['@/assets/css/main.css'],
   ui: {
    theme: {
      colors: [
        'primary',
        'secondary',  
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  }
})

