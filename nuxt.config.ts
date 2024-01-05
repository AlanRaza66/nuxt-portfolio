// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    instagramToken: process.env.NUXT_INSTAGRAM_TOKEN || "",
  },
  build: {
    transpile: ["gsap"],
  },
});
