<template>
  <div
    class="relative h-full overflow-hidden rounded-lg border p-px shadow before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-purple-500 before:opacity-0 before:blur-[60px] before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-96 after:w-96 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-purple-400 after:opacity-0 after:blur-[50px] after:transition-opacity after:duration-500 after:hover:opacity-10 before:group-hover:opacity-100 dark:border-gray-800">
    <slot></slot>
  </div>
</template>
