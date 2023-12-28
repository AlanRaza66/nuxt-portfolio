<script setup lang="ts">
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
</script>
<template>
  <main class="w-full min-h-screen">
    <div
      class="h-screen w-full bg-primary pt-[96px] pb-[1rem] px-[1rem] md:h-auto md:pt-[56px] md:pb-[0.75rem] md:px-[0.75rem] relative"
    >
      <HeroAbout />
    </div>
    <div
      class="h-screen w-full bg-primary pb-[1rem] px-[1rem] md:px-[0.75rem] md:pb-[0.75rem] md:h-auto relative"
    >
      <StudyHome />
    </div>
  </main>
</template>