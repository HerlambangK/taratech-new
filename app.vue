<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UiToastToaster />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: "%s - Sofware house ",
  ogTitle: "Welcome to taratech",
  title: "Welcome to taratech",
  ogImage: "/public/taratech_logo.png",
  twitterImage: "/public/taratech_logo.png",
  twitterCard: "summary_large_image",
  description: "A modern Startup Landing Page for your next project.",
  ogDescription: "A modern Startup Landing Page for your next project.",
});

defineOgImageComponent("Nuxt", {
  headline: false,
  title: "Nuxt 3 Startup Template",
  description: "A modern Nuxt 3 Startup Landing Page for your next project.",
});
</script>
