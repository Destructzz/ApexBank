// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: '.',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['./app/assets/tailwind.css'],
  dir: {
    pages: 'app/pages'
  },
  vite: {
    server: {
      hmr: { port: 24679, clientPort: 24679 }
    }
  },
  app: {
    head: {
      title: 'Apex Account Sharing — Frontend Mock',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Mock UI for Apex account sharing with Nuxt and Pinia' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3000/api',
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'Apex Sharing'
    }
  }
})
