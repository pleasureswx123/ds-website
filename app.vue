<template>
  <NuxtLoadingIndicator />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UModals />
  <UNotifications />
</template>

<script setup>
const colorMode = useColorMode();

const color = computed(() => {
  return colorMode.value === "dark" ? "#111827" : "white";
});

const isDev = process.env.NODE_ENV === "development";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 职工文体赛事" : ` : "职工文体赛事";
  },
  meta: [
    { charset: "utf-8" },
    {
      name: "viewport",
      content:
        "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover",
    },
    { key: "theme-color", name: "theme-color", content: color },
    { name: "referrer", content: "always" },
    { name: "renderer", content: "webkit" },
    { name: "keywords", content: "职工文体赛事" },
    { name: "format-detection", content: "telphone=no, email=no" },
    { name: "author", content: "wx: pleasureswx123" },
    { "http-equiv": "Content-Language", content: "zh-cn" },
    { "http-equiv": "Expires", content: "0" },
    { "http-equiv": "Pragma", content: "no-cache" },
    {
      "http-equiv": "Cache-control",
      content: "no-cache, no-store, must-revalidate",
    },
    { "http-equiv": "x-dns-prefetch-control", content: "on" },
    {
      "http-equiv": "Content-Security-Policy",
      content: isDev ? "" : "upgrade-insecure-requests",
    },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  }
});

const title = "职工文体赛事";
const description = "职工文体赛事description词";

useSeoMeta({
  titleTemplate: "%s - 职工文体赛事",
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  // ogImage: 'https://dashboard-template.nuxt.dev/social-card.png',
  // twitterImage: 'https://dashboard-template.nuxt.dev/social-card.png',
  // twitterCard: 'summary_large_image'
});
</script>