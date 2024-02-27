export default defineEventHandler(async (e) => {
  const runtimeConfig = useRuntimeConfig();
  const token = runtimeConfig.instagramToken;

  const url: string = `https://graph.instagram.com/me/media?fields=id,username,caption,media_url,timestamp,media_type,permalink&limit=50&access_token=${token}`;

  const data = await $fetch(url);

  return data;
});
