<template>
  <div
    class="grid w-full h-full grid-cols-5 grid-rows-5 gap-4 text-light md:flex md:flex-col md:gap-3"
  >
    <div
      class="relative col-span-3 row-span-3 overflow-hidden rounded cursor-pointer overlay-activator bg-third md:col-span-5 md:row-span-2 md:row-start-3 md:aspect-video"
    >
      <img
        src="../assets/images/ca.jpg"
        alt="Continental Auto"
        class="absolute top-0 left-0 object-cover object-top w-full h-full"
      />
      <div
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay md:opacity-0"
      >
        <NuxtLink
          to="https://www.continental-auto.mg"
          target="_blank"
          class="w-full h-full"
        >
          <div
            class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3 md:row-start-1"
          >
            <h6 class="text-lg font-bold">Continental Auto</h6>
            <p class="text-base font-light">
              The website that allows you to request a quote for your vehicles.
            </p>
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
          Continental Auto
        </h2>
        <p class="text-xl font-thin text-justify md:text-base">
          continental-auto.mg is a platform where users can browse through a
          comprehensive catalog of vehicle brands and models offered by
          Continental Auto and submit quote requests effortlessly. The site also
          includes an administrative section, providing efficient tools to
          manage and update its content, ensuring a seamless experience for both
          customers and administrators.
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
          <p class="text-xl font-thin text-justify md:!text-base">Developer</p>
          <p class="text-xl font-thin text-justify md:!text-base">
            Designer and photographer
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
            The site is a brand-new platform built from the ground up. It
            features improved SEO strategies and seamlessly integrates Google
            Analytics for enhanced performance tracking. Designed with modern
            technology, the site is lightweight, streamlined, and optimized to
            provide an exceptional user experience.
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
