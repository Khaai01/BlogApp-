// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},   
      
    },
  },

  modules: ["nuxt-icon", "@pinia/nuxt",'@pinia-plugin-persistedstate/nuxt'],
  compatibilityDate: "2024-09-26",
});