<template>
  <div
    class="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-lg border border-dashed border-gray-900/10 bg-gray-900 bg-gray-900/5 dark:border-white/10 dark:bg-white/5"
  >
    <div
      v-if="props.borderBeam"
      class="after:aspect-w-1 after:aspect-h-1 after:animate-animated-beam absolute inset-0 z-[9999] rounded-[inherit] border-2 border-transparent [border:calc(1.9*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:w-[250px] after:bg-gradient-to-l after:from-purple-500 after:via-purple-950 after:to-transparent after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_250px)]"
    ></div>

    <svg class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10" fill="none">
      <defs>
        <pattern
          id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
        </pattern>
      </defs>
      <rect
        stroke="none"
        fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)"
        width="100%"
        height="100%"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    borderBeam?: boolean;
  }>();
</script>
