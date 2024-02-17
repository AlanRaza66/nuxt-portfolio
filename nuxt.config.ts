// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  build: {
    transpile: ["gsap"],
  },
  runtimeConfig: {
    instagramToken: "",
    email: "",
    smtpHost: "",
    smtpPort: "",
    smtpUser: "",
    smtpPassword: "",
  },
});
