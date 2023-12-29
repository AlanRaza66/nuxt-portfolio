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
    class="grid w-full h-full grid-cols-5 grid-rows-5 gap-4 overflow-x-hidden text-light md:grid-rows-6 md:gap-3"
    ref="main"
  >
    <div
      class="col-span-2 row-span-3 p-8 rounded component bg-third md:col-span-5 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full md:justify-start"
      >
        <h2 class="mb-2 text-4xl font-bold md:text-2xl">An Art Lover</h2>
        <p class="text-xl font-thin text-justify md:text-base">
          I'm a huge fan of art, especially painting, drawing, and photography.
          I enjoy visiting art exhibitions with my friends and trying to guess
          whet the artists are trying to convey through their work. Perhaps this
          has conditioned me to be more inclined towards front-end development.
        </p>
      </div>
    </div>
    <div
      class="relative col-span-3 row-span-3 p-8 overflow-hidden rounded component bg-third md:col-span-5 md:row-span-2 md:aspect-auto md:p-3"
    >
      <img
        src="../assets/images/art.jpg"
        alt="exhibition at Fondation H"
        class="absolute top-0 left-0 object-cover w-full h-full"
      />
    </div>
    <div
      class="relative col-span-2 row-span-2 p-8 overflow-hidden rounded component bg-third md:col-span-5 md:row-span-2 md:aspect-auto md:p-3 overlay-activator"
    >
      <img
        src="../assets/images/books.jpg"
        class="absolute top-0 left-0 object-cover w-full h-full"
      />
    </div>
    <div
      class="col-span-3 row-span-2 p-8 rounded component bg-third md:col-span-5 md:row-span-2 md:aspect-auto md:p-3"
    >
      <div
        class="flex flex-col items-start justify-center w-full h-full md:justify-start"
      >
        <h2 class="mb-2 text-4xl font-bold md:text-2xl">
          Eager for knowledge.
        </h2>
        <p class="text-xl font-thin text-justify md:text-base">
          I enjoy acquiring new knowledge, whether through books, documentaries,
          or games like "Question Pour Un Champion." I take pleasure in
          expanding my understanding and learning from various sources.
        </p>
      </div>
    </div>
  </div>
</template>
