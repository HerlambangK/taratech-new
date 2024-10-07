<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed bottom-4 right-4 rounded-lg bg-green-500 p-4 text-white shadow-md"
      @click="close"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script lang="ts" setup>
  import { defineProps, ref, watch } from "vue";

  const props = defineProps<{
    message: string;
    duration?: number;
  }>();

  const visible = ref(false);

  watch(
    () => props.message,
    (newValue) => {
      if (newValue) {
        visible.value = true;
        setTimeout(() => {
          visible.value = false;
        }, props.duration || 3000);
      }
    }
  );

  const close = () => {
    visible.value = false;
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
