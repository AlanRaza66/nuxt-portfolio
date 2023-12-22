<script setup lang="ts">
const scrolled: Ref<boolean> = ref(false);
if (process.client) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      scrolled.value = true;
    } else {
      scrolled.value = false;
    }
  });
}
</script>
<template>
  <div>
    <header
      class="w-full fixed py-[24px] top-0 left-0 flex items-center justify-between duration-[1000ms]"
      :class="scrolled ? 'bg-primary h-[64px] px-[64px]' : 'bg-transparent h-[96px] px-[264px]'"
    >
      <NuxtLink to="/" class="text-4xl font-bold text-white"
        >Alan Raza</NuxtLink
      >
      <ul class="flex items-center justify-center">
        <li class="pl-[24px] text-xl" v-for="y in 4" :key="y">
          <NuxtLink
            to="/"
            class="relative overflow-hidden text-white duration-500 menu-items"
            >item.link</NuxtLink
          >
        </li>
      </ul>
    </header>
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
</style>
