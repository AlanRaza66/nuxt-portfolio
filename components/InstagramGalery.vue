<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const url: string = `https://graph.instagram.com/me/media?fields=id,username,media_url,timestamp,media_type,permalink&access_token=${runtimeConfig.instagramToken}`;

const { data: feed } = await useAsyncData<any>("feed", () => $fetch(url));
</script>
<template>
  <div
    class="flex flex-wrap items-start justify-center w-full h-full gap-4 text-light md:gap-3"
  >
    <div v-for="image in feed.data" class="aspect-square w-[calc(100%/3-1rem)]">
        <img :src="image.media_url" alt="" class="object-cover w-full h-full">
    </div>
  </div>
</template>
