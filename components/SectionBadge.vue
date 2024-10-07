<template>
  <span
    :class="{
      'relative inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1.5 text-sm font-semibold text-purple-500 ring-1 ring-inset ring-purple-600 ring-opacity-25 dark:ring-opacity-25':
        !props.onlyText,
      'relative inline-flex items-center rounded-full px-3 py-1.5 font-semibold text-purple-600':
        props.onlyText,
    }"
  >
    <NuxtLink
      v-if="href"
      :href="props.href"
      rel="noopener noreferrer"
      target="_blank"
      class="focus:outline-none"
      tabindex="-1"
    >
      <span class="absolute inset-0" aria-hidden="true"></span>
    </NuxtLink>
    <span
      :class="{
        'animate-shimmer mx-auto max-w-md bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent bg-clip-text bg-no-repeat text-purple-500/80 [background-position:0_0] [background-size:100px_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] dark:via-white/80':
          props.shiny,
      }"
    >
      {{ props.text }}
    </span>
    <Icon v-if="icon" :name="icon" class="pointer-events-none ml-1.5 h-4 w-4"></Icon>
  </span>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    text: string;
    href?: string;
    icon?: string;
    shiny?: boolean;
    onlyText?: boolean;
  }>();
</script>

<style></style>
