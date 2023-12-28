<script setup lang="ts">
import { languages, librairies, others, designs } from "../data/index";
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
            scrub: true,
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
    class="grid w-full h-full grid-cols-6 grid-rows-6 gap-4 overflow-x-hidden text-light md:grid-rows-8 md:gap-3"
    ref="main"
  >
    <div
      class="relative col-span-3 row-span-3 p-8 rounded component bg-third md:col-span-6 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div class="flex flex-wrap items-center justify-around w-full h-full">
        <div class="flex items-center justify-center w-full py-2">
          <h6 class="text-4xl font-bold md:text-2xl md:text-center">Technologies</h6>
        </div>
        <div
          v-for="lang in languages"
          :key="lang.name"
          class="flex flex-col items-center justify-center rounded-sm aspect-square m-[12px] h-[100px] md:h-[80px]"
        >
          <img
            :src="lang.logo"
            :alt="lang.name"
            class="object-contain h-[80px] md:h-[52px] aspect-square"
          />
          <figcaption class="text-lg font-thin text-center">
            {{ lang.name }}
          </figcaption>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-3 row-span-3 p-8 rounded component bg-third md:col-span-6 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div class="flex flex-wrap items-center justify-around w-full h-full">
        <div class="flex items-center justify-center w-full py-2">
          <h6 class="text-4xl font-bold md:text-2xl md:text-center">Libraries</h6>
        </div>
        <div
          v-for="lang in librairies"
          :key="lang.name"
          class="flex flex-col items-center justify-center rounded-sm aspect-square m-[12px] h-[100px] md:h-[80px]"
        >
          <img
            :src="lang.logo"
            :alt="lang.name"
            class="object-contain h-[80px] md:h-[52px] aspect-square"
          />
          <figcaption class="text-lg font-thin text-center">
            {{ lang.name }}
          </figcaption>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-3 p-8 rounded component bg-third md:col-span-6 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div class="flex flex-wrap items-center justify-around w-full h-full">
        <div class="flex items-center justify-center w-full py-2">
          <h6 class="text-4xl font-bold md:text-2xl md:text-center">Databases and tools</h6>
        </div>
        <div
          v-for="lang in others"
          :key="lang.name"
          class="flex flex-col items-center justify-center rounded-sm aspect-square m-[12px] h-[100px] md:h-[80px]"
        >
          <img
            :src="lang.logo"
            :alt="lang.name"
            class="object-contain h-[80px] md:h-[52px] aspect-square"
          />
          <figcaption class="text-lg font-thin text-center">
            {{ lang.name }}
          </figcaption>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-3 p-8 rounded bg-third md:col-span-6 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full md:justify-start"
      >
        <h2 class="mb-2 text-4xl font-bold md:text-2xl md:text-center">
          Fullstack Developper Junior
        </h2>
        <p class="text-xl font-thin text-justify md:text-base">
          As a fullstack developer, I'm well-versed in both frontend and
          backend. However, my true strength and passion lie in frontend
          development, where I excel in crafting intuitive and user-friendly
          interfaces.
        </p>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-3 p-8 rounded component bg-third md:col-span-6 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div class="flex flex-wrap items-center justify-around w-full h-auto">
        <div class="flex items-center justify-center w-full py-2">
          <h6 class="text-4xl font-bold md:text-2xl md:text-center">Design Tools</h6>
        </div>
        <div
          v-for="lang in designs"
          :key="lang.name"
          class="flex flex-col items-center justify-center rounded-sm aspect-square m-[12px] h-[100px] md:h-[80px]"
        >
          <img
            :src="lang.logo"
            :alt="lang.name"
            class="object-contain h-[80px] md:h-[52px] aspect-square"
          />
          <figcaption class="text-lg font-thin text-center">
            {{ lang.name }}
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>
