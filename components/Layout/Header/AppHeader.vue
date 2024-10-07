<template>
  <header
    class="sticky top-0 z-[9] -mb-px border-b border-gray-200 bg-white/60 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
      <div class="flex items-center gap-1.5 lg:flex-1">
        <slot name="left">
          <NuxtLink :to="to" :aria-label="title"
            class="flex flex-shrink-0 items-end gap-1.5 text-xl font-bold text-gray-900 dark:text-white">
            <slot name="logo">
              {{ title || "Taratech" }}
            </slot>
          </NuxtLink>
        </slot>
      </div>

      <slot name="center">
        <ul
          class="hidden items-center gap-x-10 rounded-full border border-gray-300/70 px-6 py-1.5 shadow-sm dark:border-gray-400 dark:border-gray-700/60 dark:bg-gray-600/10 lg:flex">
          <li v-for="item in props.links" :key="item.to" class="relative">
            <NuxtLink
              class="flex items-center gap-1 text-sm/6 font-semibold text-gray-700 transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-600"
              :to="item.to">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </slot>

      <div class="flex items-center justify-end gap-2 lg:flex-1">
        <div class="hidden items-center gap-3 lg:flex">
          <slot name="right" />
        </div>
        <slot name="panel-button">
          <Button icon-only variant="secondary" class="lg:hidden" aria-label="Open Menu" @click="togglePanel">
            <Icon v-if="!isPanelOpen" name="i-heroicons-bars-3-20-solid" class="h-5 w-5 flex-shrink-0"
              aria-hidden="true" />
            <Icon v-if="isPanelOpen" name="i-heroicons-x-mark" class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          </Button>
        </slot>
      </div>
    </div>
    <div v-if="isPanelOpen"
      class="flex flex-col justify-between gap-y-6 border-t border-gray-200 py-4 dark:border-gray-800 lg:hidden">
      <div class="h-28 overflow-y-auto">
        <ul class="flex flex-col gap-y-5 rounded-full px-3">
          <li v-for="item in props.links" :key="item.to" class="relative">
            <NuxtLink class="flex items-center gap-1 text-sm/6 font-semibold transition-colors hover:text-purple-600"
              :to="item.to">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-4 border-t border-gray-200 px-2 pt-5 dark:border-gray-800">
        <slot name="right" />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
interface NavLinkProps {
  label: string;
  to: string;
}

const props = withDefaults(
  defineProps<{
    to?: string;
    title?: string;
    links?: NavLinkProps[];
  }>(),
  {
    to: "/",
    title: undefined,
  }
);

const isPanelOpen = ref<boolean>(false);

const togglePanel = () => {
  isPanelOpen.value = !isPanelOpen.value;
};
</script>
