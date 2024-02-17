<template>
  <div
    class="grid w-full h-full grid-cols-5 grid-rows-5 gap-4 text-light md:grid-rows-6 md:gap-3"
  >
    <div
      class="relative col-span-3 row-span-3 p-8 rounded bg-third md:col-span-5 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full"
      >
        <h2 class="text-3xl md:text-lg">
          Hi! I'm
          <span class="text-4xl font-bold md:text-xl">Alan Razafinimanana</span>
        </h2>
        <!-- Todo Add animation on text (developper => designer) -->
        <h1 class="mb-2 text-6xl font-bold md:text-3xl">Web Developper</h1>
        <p class="text-xl font-thin text-justify md:hidden">
          Welcome to my portfolio! Passionate about technology, design, and
          photography, this space showcases my work at the intersection of
          innovation and creativity. Dive in and explore my unique perspective,
          and feel free to connect for collaborations or inquiries. Thank you
          for visiting!
        </p>
        <p class="hidden font-thin text-justify md:inline md:text-base">
          Welcome to my portfolio! Passionate about technology, design, and
          photography, this space showcases my work at the intersection of
          innovation and creativity.
        </p>
      </div>
    </div>
    <div
      class="relative col-span-2 row-span-5 overflow-hidden rounded cursor-pointer overlay-activator bg-third md:col-span-5 md:row-span-2 md:row-start-1 md:aspect-auto"
    >
      <img
        src="../assets/images/portrait.jpg"
        class="absolute top-0 left-0 object-cover w-full h-full"
      />
      <NuxtLink
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay"
        to="/about"
      >
        <div
          class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
        >
          <h6 class="text-lg font-bold">Get to know me!</h6>
          <p class="text-base font-light md:hidden">Who i am?</p>
        </div></NuxtLink
      >
    </div>
    <div
      class="relative col-span-2 row-span-2 overflow-hidden rounded cursor-pointer bg-third md:col-span-3 md:row-span-2 overlay-activator"
    >
      <img
        src="../assets/images/project.jpg"
        class="absolute top-0 left-0 object-cover w-full h-full"
      />
      <NuxtLink
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay"
        to="/projects"
      >
        <div
          class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
        >
          <h6 class="text-lg font-bold">Discover my past projects</h6>
          <p class="text-base font-light md:hidden">Some IT projects</p>
        </div></NuxtLink
      >
    </div>
    <div
      class="relative col-span-1 row-span-2 overflow-hidden rounded cursor-pointer bg-third md:col-span-2 md:row-span-2 overlay-activator"
    >
      <img
        src="../assets/images/photograph.jpg"
        class="absolute top-0 left-0 object-cover w-full h-full"
      /><NuxtLink
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay"
        to="/photos"
      >
        <div
          class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
        >
          <h6 class="text-lg font-bold">Discover my photos</h6>
          <p class="text-base font-light md:hidden">Some of my artwoks</p>
        </div></NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.overlay-activator:hover .overlay {
  transform: translateY(0);
}
</style>
