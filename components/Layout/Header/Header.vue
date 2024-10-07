<template>
  <AppHeader :links="links">
    <template #logo>
      <!-- <Icon
        name="i-mdi-nuxt"
        class="w-10 h-10 text-purple-400"
      /> -->
      <img src="/taratech_logo.png" class="h-10" />
    </template>
    <template #right>
      <!-- <Button variant="link">
        <NuxtLink href="/">
          <span class="">Sign in</span>
        </NuxtLink>
      </Button>
      <Button>
        <NuxtLink href="/">
          <span class="">Sign up</span>
        </NuxtLink>
      </Button> -->
      <ClientOnly fallback-tag="span">
        <!-- this component will only be rendered on client side -->
        <DarkModeButton />
        <template #fallback>
          <!-- this will be rendered on server side -->
          <div class="h-6 w-6 rounded-full bg-gray-100 p-4 dark:bg-purple-600/20"></div>
        </template>
      </ClientOnly>
    </template>
  </AppHeader>
</template>

<script setup lang="ts">
  import DarkModeButton from "@/components/Button/DarkModeButton.vue";
  import AppHeader from "@/components/Layout/Header/AppHeader.vue";

  const links = [
    {
      label: "Tentang",
      to: "#tentang",
    },
    {
      label: "Produk dan layanan",
      to: "#services",
    },
    {
      label: "Client",
      to: "#client",
    },
    {
      label: "Contact us",
      to: "#contact",
    },
  ];
</script>
