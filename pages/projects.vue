<script setup lang="ts">
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const imageLoadedCount = ref(0);
const imagesCount = ref(Infinity);
const isImagesLoaded = computed(
  () => imagesCount.value === imageLoadedCount.value
);

const incrementLoadedCount = () => {
  imageLoadedCount.value = imageLoadedCount.value + 1;
};

onMounted(() => {
  if (document) {
    const images = document.querySelectorAll("img");
    imagesCount.value = images.length;
    imageLoadedCount.value = 0;

    images.forEach((image) => {
      image.onerror = () => {
        incrementLoadedCount();
      };

      image.oninvalid = () => {
        incrementLoadedCount();
      };

      if (image.complete) {
        incrementLoadedCount();
      } else {
        image.onload = () => {
          incrementLoadedCount();
        };
      }
    });
  }
});
</script>
<template>
  <main class="w-full min-h-screen">
    <Loader v-if="!isImagesLoaded" />
    <div
      class="h-screen w-full bg-primary pt-[96px] pb-[1rem] px-[1rem] md:h-auto md:pt-[56px] md:pb-[0.75rem] md:px-[0.75rem] relative"
    >
      <Magazine />
    </div>
    <div
      class="h-screen w-full bg-primary pb-[1rem] px-[1rem] md:px-[0.75rem] md:pb-[0.75rem] md:h-auto relative"
    >
      <Viseo />
    </div>
    <div
      class="h-fit w-full bg-primary pb-[1rem] px-[1rem] md:px-[0.75rem] md:pb-[0.75rem] md:h-auto relative"
    >
      <FooterHome />
    </div>
  </main>
</template>
