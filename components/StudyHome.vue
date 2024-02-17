<script setup lang="ts">
import gsap from "gsap";

const main = ref();
let ctx: gsap.Context;
onMounted(() => {
  ctx = gsap.context((self) => {
    const components = self.selector ? self.selector(".component") : null;
    components.forEach((component: any, y: any) => {
      gsap.fromTo(
        component,
        {
          x: y % 2 == 0 ? -100 : 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: component,
            start: "top bottom",
            end: "top 20%",
          },
        }
      );
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>
<template>
  <div
    class="grid w-full h-full grid-cols-5 grid-rows-5 gap-4 overflow-x-hidden text-light md:grid-rows-6 md:gap-3"
    ref="main"
  >
    <div
      class="relative col-span-2 row-span-3 p-8 overflow-hidden rounded component bg-third md:col-span-5 md:row-span-2 md:aspect-auto md:p-3 overlay-activator"
    >
      <img
        src="../assets/images/cnam.jpg"
        class="absolute top-0 left-0 object-cover w-full h-full"
      /><NuxtLink
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay"
        to="https://www.cnam-paris.fr/"
        target="_blank"
      >
        <div
          class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
        >
          <h6 class="text-lg font-bold">
            Conservatoire Nationale des Arts et Métiers (CNAM)
          </h6>
          <p class="text-base font-light md:hidden">
            Where I pursued my academic journey.
          </p>
        </div></NuxtLink
      >
    </div>
    <div
      class="col-span-3 row-span-3 p-8 rounded component bg-third md:col-span-5 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full md:justify-start"
      >
        <h2 class="mb-2 text-4xl font-bold md:text-2xl md:text-center">
          Project Manager
        </h2>
        <p class="text-xl font-thin text-justify md:text-base">
          I pursued a degree in Information Systems Engineering / Business
          Intelligence with a focus on Project Management at CNAM Madagascar -
          La Réunion and Paris
        </p>
      </div>
    </div>
    <div
      class="col-span-3 row-span-2 p-8 rounded component bg-third md:col-span-5 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full md:justify-start"
      >
        <h2 class="mb-2 text-4xl font-bold md:text-2xl md:text-center">
          Designer and Photographer
        </h2>
        <p class="text-xl font-thin text-justify md:text-base">
          I taught myself photography and design (newbie) through online
          platforms and books. And I am continually refining my skills.
        </p>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-2 p-8 rounded component bg-third md:col-span-5 md:row-span-2 md:aspect-video md:p-3"
    >
      <img
        src="../assets/images/photo.jpg"
        class="absolute top-0 left-0 object-cover w-full h-full"
      />
    </div>
  </div>
</template>
<style scoped>
.overlay-activator:hover .overlay {
  transform: translateY(0);
}
</style>
