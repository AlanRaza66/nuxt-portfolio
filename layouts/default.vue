<script setup lang="ts">
const scrolled: Ref<boolean> = ref(false);
const menuActive: Ref<boolean> = ref(false);
if (process.client) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  });
}

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Photos",
    link: "/photos",
  },
];
</script>
<template>
  <div>
    <header
      class="w-full fixed py-[24px] top-0 left-0 flex items-center justify-between duration-[1000ms] md:py-[16px] z-10"
      :class="
        scrolled
          ? 'bg-primary h-[64px] px-[64px] md:px-[24px] md:h-[56px]'
          : 'bg-transparent h-[96px] px-[264px] md:px-[24px] md:h-[56px]'
      "
    >
      <NuxtLink to="/" class="!z-30 text-4xl font-bold text-white"
        >Alan Raza</NuxtLink
      >
      <ul class="flex items-center justify-center md:hidden">
        <li class="pl-[24px] text-lg" v-for="(item, y) in links" :key="y">
          <NuxtLink
            :to="item.link"
            class="relative overflow-hidden text-white duration-500 menu-items"
            >{{ item.label }}</NuxtLink
          >
        </li>
      </ul>
      <div
        class="items-center justify-center hidden h-full md:flex burger"
        :class="menuActive ? 'opacity-0' : 'opacity-100'"
      >
        <img
          src="../assets/images/burger.png"
          height="24"
          width="24"
          class="duration-500 cursor-pointer"
          @click="menuActive = true"
        />
      </div>
    </header>
    <div
      class="fixed z-10 duration-500 hidden md:flex flex-col items-end justify-start w-screen h-screen bg-opacity-50 bg-primary backdrop-blur-sm px-[24px] py-[16px]"
      :class="menuActive ? 'translate-x-0' : 'translate-x-[100%]'"
    >
      <img
        src="../assets/images/close.png"
        height="24"
        width="24"
        class="z-20 duration-500 cursor-pointer"
        @click="menuActive = false"
      />
      <ul class="flex flex-col items-end justify-end w-full mt-[24px]">
        <li
          class="pl-[24px] py-[8px] text-6xl"
          v-for="(item, y) in links"
          :key="y"
        >
          <NuxtLink
            :to="item.link"
            class="relative overflow-hidden text-white duration-500"
            @click="menuActive = false"
            >{{ item.label }}</NuxtLink
          >
        </li>
      </ul>
    </div>
    <slot />
  </div>
</template>
<style scoped>
.menu-items::before {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: 500ms ease;
}

.menu-items:hover::before {
  width: 100%;
}

.menu-items.router-link-exact-active::before {
  width: 100%;
}
</style>
