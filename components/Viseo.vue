<template>
  <div
    class="grid w-full h-full grid-cols-5 grid-rows-5 gap-4 text-light md:flex md:flex-col md:gap-3"
  >
    <div
      class="relative col-span-3 row-span-3 overflow-hidden rounded cursor-pointer overlay-activator bg-third md:col-span-5 md:row-span-2 md:aspect-video"
    >
      <img
        src="../assets/images/viseo.jpg"
        alt="Viseo Group"
        class="absolute top-0 left-0 object-cover w-full h-full"
      />
      <div
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay"
      >
        <NuxtLink
          to="https://www.viseo.mg"
          target="_blank"
          class="w-full h-full"
        >
          <div
            class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3 md:row-start-1"
          >
            <h6 class="text-lg font-bold">Viseo</h6>
            <p class="text-base font-light">The Viseo Group's website</p>
          </div></NuxtLink
        >
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-3 p-8 rounded bg-third md:col-span-3 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full md:justify-start"
      >
        <h2
          class="mb-2 text-4xl font-bold md:text-2xl md:text-center md:w-full"
        >
          Viseo.mg
        </h2>
        <p class="text-xl font-thin text-justify md:text-base">
          Viseo.mg is a website dedicated to showcasing the Viseo group. The
          platform provides insights into the group's members and highlights its
          core values. Additionally, it offers a direct means of contacting the
          group, fostering communication and engagement with its audience.
        </p>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-2 overflow-hidden rounded bg-third md:col-span-5 md:row-span-2 overlay-activator"
    >
      <div class="flex flex-wrap items-start justify-around w-full h-full">
        <div class="flex items-center justify-center w-full pt-6">
          <h6 class="text-4xl font-bold md:text-2xl md:text-center md:w-full">
            Technologies
          </h6>
        </div>
        <div
          class="flex flex-col items-center justify-center rounded-sm aspect-square m-[12px] mt-0 h-[100px] md:h-[80px]"
        >
          <img
            src="../assets/images/techs/mysql.png"
            alt="MySQL"
            class="object-contain h-[80px] md:h-[52px] aspect-square"
          />
          <figcaption class="text-lg font-thin text-center">MySQL</figcaption>
        </div>
        <div
          class="flex flex-col items-center justify-center rounded-sm aspect-square m-[12px] mt-0 h-[100px] md:h-[80px]"
        >
          <img
            src="../assets/images/techs/nuxt.png"
            alt="Nuxt JS"
            class="object-contain h-[80px] md:h-[52px] aspect-square"
          />
          <figcaption class="text-lg font-thin text-center">Nuxt JS</figcaption>
        </div>
        <div
          class="flex flex-col items-center justify-center rounded-sm aspect-square m-[12px] mt-0 h-[100px] md:h-[80px]"
        >
          <img
            src="../assets/images/techs/prisma.png"
            alt="MySQL"
            class="object-contain h-[80px] md:h-[52px] aspect-square"
          />
          <figcaption class="text-lg font-thin text-center">Prisma</figcaption>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-1 row-span-2 overflow-hidden rounded bg-third md:col-span-5 md:row-span-2 overlay-activator"
    >
      <div class="flex flex-wrap items-start justify-start w-full h-full">
        <div class="flex items-center justify-center w-full pt-6">
          <h6 class="text-4xl font-bold md:text-2xl md:text-center md:w-full">
            Responsabilities
          </h6>
        </div>
        <div
          class="flex flex-col items-center justify-start w-full px-8 pb-6 md:px-3"
        >
          <p class="text-xl font-thin text-justify md:!text-base">
            Project Manager
          </p>
          <p class="text-xl font-thin text-justify md:!text-base">Designer</p>
          <p class="text-xl font-thin text-justify md:!text-base">
            Frontend Developer
          </p>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-2 overflow-hidden rounded bg-third md:col-span-5 md:row-span-2 overlay-activator"
    >
      <div class="flex flex-wrap items-start justify-start w-full h-full">
        <div class="flex items-center justify-center w-full pt-6">
          <h6 class="text-4xl font-bold md:text-2xl md:text-center md:w-full">
            About
          </h6>
        </div>
        <div
          class="flex flex-col items-center justify-start w-full px-8 pb-6 md:px-3"
        >
          <p class="text-xl font-thin text-justify md:!text-base">
            The site is an upgrade from a previous version. Improvements to the
            SEO have been implemented, and the integration of Google Analytics
            was carried out simultaneously. It is also lighter and more
            streamlined than the previous version
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.overlay-activator:hover .overlay {
  transform: translateY(0);
}
</style>
