<template>
  <div class="py-24 sm:py-32">
    <div
      :class="{
        'mx-auto grid max-w-7xl gap-16 px-4 sm:gap-y-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8':
          !props.column,
        'mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:gap-y-14 sm:px-6 lg:px-8': props.column,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";

  const props = defineProps<{
    column?: boolean;
  }>();
</script>

<style></style>
