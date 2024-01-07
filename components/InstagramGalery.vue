<script setup lang="ts">

const { data } = await useFetch("/api/instagram/pictures");

const feed: Ref = ref({});

watch(
  data,
  (newValue) => {
    if (newValue !== null) {
      feed.value = newValue;
    }
  },
  {
    immediate: true,
  }
);
</script>
<template>
  <div
    class="flex flex-wrap items-start justify-center w-full h-full gap-4 text-light md:gap-2"
    v-if="feed !== null"
  >
    <div
      v-for="(image, y) in feed?.data"
      class="relative aspect-square w-[calc(100%/3-1rem)] overlay-activator overflow-hidden cursor-pointer sm:w-[calc(100%/2-0.50rem)]"
      :class="image.media_type !== 'IMAGE' ? 'hidden':''"
      :key="y"
    >
      <div
        class="absolute top-0 left-0 block w-full h-full duration-500 translate-y-[100%] md:translate-y-[0] overlay md:hidden"
      >
        <div
          class="flex items-start justify-end flex-col w-full h-full p-8 bg-gradient-to-b md:to-transparent from-transparent to-[rgba(0,0,0,0.75)] md:p-3"
        >
          <p class="text-base font-light line-clamp-5">{{ image.caption }}</p>
        </div>
      </div>
      <img :src="image.media_url" alt="" class="object-cover w-full h-full" />
    </div>
  </div>
</template>

<style scoped>
.overlay-activator:hover .overlay {
  transform: translateY(0);
}
</style>
