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
    igIdApp: "",
    idToken: "",
  },
  build: {
    transpile: ["gsap"],
  },
});
