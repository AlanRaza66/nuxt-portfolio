<script setup lang="ts">
import { languages, librairies, others, designs } from "../data/index";
</script>
<template>
  <div
    class="grid w-full h-full grid-cols-6 grid-rows-6 gap-4 text-light md:grid-rows-8 md:gap-3"
  >
    <div
      class="relative col-span-3 row-span-3 p-8 rounded bg-third md:col-span-6 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div class="flex flex-wrap items-center justify-around w-full h-full">
        <div class="flex items-center justify-center w-full py-2">
          <h6 class="text-4xl font-bold md:text-2xl">Technologies</h6>
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
          <figcaption class="text-lg font-thin text-center">{{ lang.name }}</figcaption>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-3 row-span-3 p-8 rounded bg-third md:col-span-6 md:row-span-2 md:aspect-auto md:p-3"
    >
    <div class="flex flex-wrap items-center justify-around w-full h-full">
        <div class="flex items-center justify-center w-full py-2">
          <h6 class="text-4xl font-bold md:text-2xl">Libraries</h6>
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
          <figcaption class="text-lg font-thin text-center">{{ lang.name }}</figcaption>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-3 p-8 rounded bg-third md:col-span-6 md:row-span-2 md:aspect-auto md:p-3"
    >
    <div class="flex flex-wrap items-center justify-around w-full h-full">
        <div class="flex items-center justify-center w-full py-2">
          <h6 class="text-4xl font-bold md:text-2xl">Databases and tools</h6>
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
          <figcaption class="text-lg font-thin text-center">{{ lang.name }}</figcaption>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-3 p-8 rounded bg-third md:col-span-6 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full md:justify-start"
      >
        <h2 class="mb-2 text-4xl font-bold md:text-2xl">
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
      class="relative col-span-2 row-span-3 p-8 rounded bg-third md:col-span-6 md:row-span-2 md:aspect-auto md:p-3"
    >
    <div class="flex flex-wrap items-center justify-around w-full h-full">
        <div class="flex items-center justify-center w-full py-2">
          <h6 class="text-4xl font-bold md:text-2xl">Design Tools</h6>
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
          <figcaption class="text-lg font-thin text-center">{{ lang.name }}</figcaption>
        </div>
      </div>
    </div>
  </div>
</template>
