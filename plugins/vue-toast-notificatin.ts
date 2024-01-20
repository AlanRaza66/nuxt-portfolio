import Toast from "vue-toast-notification";

export default defineNuxtPlugin((nuxtApp) => {
  // register Toast components
  nuxtApp.vueApp.use(Toast, {
    duration: 5000, // ! not working, so need to manually change
  });
});
