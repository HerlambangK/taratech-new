<template>
  <div>
    <Header />

    <MainContent>
      <slot />
    </MainContent>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
  import AppFooter from "@/components/Layout/Footer/AppFooter.vue";
  import Header from "@/components/Layout/Header/Header.vue";
  import MainContent from "@/components/Layout/MainContent.vue";
</script>
