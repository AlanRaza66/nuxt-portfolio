<template>
  <div
    class="grid w-full h-full grid-cols-5 grid-rows-5 gap-4 text-light md:flex md:flex-col md:gap-3"
  >
    <div
      class="relative col-span-3 row-span-3 overflow-hidden rounded cursor-pointer overlay-activator bg-third md:col-span-5 md:row-span-2 md:row-start-3 md:aspect-video"
    >
      <img
        src="../assets/images/magazine.jpg"
        alt="Reading"
        class="absolute top-0 left-0 object-cover w-full h-full"
      />
      <div
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay"
      >
        <NuxtLink
          to="https://www.magazine.mg"
          target="_blank"
          class="w-full h-full"
        >
          <div
            class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3 md:row-start-1"
          >
            <h6 class="text-lg font-bold">Magazine.mg</h6>
            <p class="text-base font-light">Read, Download our magazines</p>
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
        <h2 class="mb-2 text-4xl font-bold md:text-2xl md:text-center md:w-full">
          Magazine.mg
        </h2>
        <p class="text-xl font-thin text-justify md:text-base">
          Magazine.mg is a platform designed for reading and downloading online
          magazine editions like "Fémina Life", "Info Tourisme" and "Ride
          Madagascar". Developed primarily with the assistance of some friends
          using React, the site offers a user-friendly interface for accessing a
          wide range of magazine content.
        </p>
      </div>
    </div>
    <div
      class="relative col-span-1 row-span-2 overflow-hidden rounded bg-third md:col-span-5 md:row-span-2 overlay-activator"
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
            src="../assets/images/techs/react.png"
            alt="React JS"
            class="object-contain h-[80px] md:h-[52px] aspect-square"
          />
          <figcaption class="text-lg font-thin text-center">
            React JS
          </figcaption>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-2 overflow-hidden rounded bg-third md:col-span-5 md:row-span-2 overlay-activator"
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
            Frontend Developer
          </p>
          <p class="text-xl font-thin text-justify md:!text-base">
            Web Integrator
          </p>
        </div>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-2 overflow-hidden rounded bg-third md:col-span-5 md:row-span-2 overlay-activator"
    >
      <div class="flex flex-wrap items-start justify-start w-full h-full">
        <div class="flex items-center justify-center w-full pt-6">
          <h6 class="text-4xl font-bold md:text-2xl md:text-center md:w-full">About</h6>
        </div>
        <div
          class="flex flex-col items-center justify-start w-full px-8 pb-6 md:px-3"
        >
          <p class="text-xl font-thin text-justify md:!text-base">
            This project was completed in 2021. We are currently planning to
            enhance the site to optimize its performance and make it more
            user-friendly.
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
