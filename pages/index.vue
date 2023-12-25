<template>
  <main class="w-full min-h-screen">
    <div
      class="h-screen w-full bg-primary pt-[96px] pb-[1rem] px-[1rem] md:min-h-screen md:h-auto md:pt-[56px] md:pb-[0.75rem] md:px-[0.75rem] relative"
    >
      <div
        class="grid w-full h-full grid-cols-5 grid-rows-5 gap-4 text-white md:grid-rows-6 md:gap-3"
      >
        <div
          class="relative col-span-3 row-span-3 p-8 rounded bg-secondary md:col-span-5 md:row-span-2 md:aspect-video md:p-3"
        >
          <div
            class="flex flex-col items-start justify-center w-full h-full md:justify-start"
          >
            <h2 class="text-3xl md:text-lg">
              Hi! I'm
              <span class="text-4xl font-bold md:text-xl"
                >Alan Razafinimanana</span
              >
            </h2>
            <!-- Todo Add animation on text (developper => designer) -->
            <h1 class="mb-2 text-6xl font-bold md:text-3xl">Web Developper</h1>
            <p class="text-xl text-justify md:hidden">
              Welcome to my portfolio! Passionate about technology, design, and
              photography, this space showcases my work at the intersection of
              innovation and creativity. Dive in and explore my unique
              perspective, and feel free to connect for collaborations or
              inquiries. Thank you for visiting!
            </p>
            <p class="hidden text-justify md:inline">
              Welcome to my portfolio! Passionate about technology, design, and
              photography, this space showcases my work at the intersection of
              innovation and creativity.
            </p>
          </div>
        </div>
        <div
          class="relative col-span-2 row-span-5 overflow-hidden rounded cursor-pointer overlay-activator bg-secondary md:col-span-5 md:row-span-2 md:row-start-1 md:aspect-video"
        >
          <img
            src="../assets/images/portrait.jpg"
            class="absolute top-0 left-0 object-cover w-full h-full"
          />
          <NuxtLink
            class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay"
            to="/"
          >
            <div
              class="flex items-end justify-start w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
            >
              Get to know me!
            </div></NuxtLink
          >
        </div>
        <div
          class="relative col-span-2 row-span-2 overflow-hidden rounded cursor-pointer bg-secondary md:col-span-3 md:row-span-2 overlay-activator"
        >
          <NuxtLink
            class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay"
            to="/"
          >
            <div
              class="flex items-end justify-start w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
            >
              Discover my past projects.
            </div></NuxtLink
          >
        </div>
        <div
          class="relative col-span-1 row-span-2 overflow-hidden rounded cursor-pointer bg-secondary md:col-span-2 md:row-span-2 overlay-activator"
        >
          <img
            src="../assets/images/photograph.jpg"
            class="absolute top-0 left-0 object-cover w-full h-full"
          /><NuxtLink
            class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay"
            to="/"
          >
            <div
              class="flex items-end justify-start w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
            >
              Discover my photos
            </div></NuxtLink
          >
        </div>
      </div>
    </div>
    <div
      class="h-screen w-full bg-secondary pt-[96px] px-[264px] md:px-[24px]"
    ></div>
  </main>
</template>
<style scoped>
.overlay-activator:hover .overlay {
  transform: translateY(0);
}
</style>
