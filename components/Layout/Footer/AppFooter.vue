<template>
  <footer class="mx-auto border-t border-gray-200 px-4 py-5 text-gray-500 dark:border-gray-800">
    <div class="max-w-lg sm:mx-auto sm:text-center">
      <Icon name="i-mdi-nuxt" class="h-10 w-10 text-purple-400" />
      <p class="mt-2 text-[15px] leading-relaxed">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
    <ul
      class="mt-8 items-center justify-center space-y-5 text-gray-700 dark:text-gray-300/90 sm:flex sm:space-x-4 sm:space-y-0"
    >
      <li
        v-for="item in footerNavs"
        :key="item.name"
        class="hover:text-gray-500 dark:hover:text-gray-100"
      >
        <a href="#">
          {{ item.name }}
        </a>
      </li>
    </ul>
    <div class="mt-8 items-center justify-center sm:flex">
      <div class="mt-4 items-center text-center text-sm sm:mt-0">
        Copyright &copy; {{ new Date().getFullYear() }}. All rights reserved.
      </div>
      <div class="mt-6 sm:mt-0">
        <ul class="flex items-center space-x-4">
          <li class="flex h-7 w-7 items-center justify-center rounded-full">
            <a href="javascript:void()">
              <Icon name="i-mdi-github" class="h-7 w-7 text-white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "About",
    },
    {
      href: "javascript:void()",
      name: "Blog",
    },
    {
      href: "javascript:void()",
      name: "Team",
    },
    {
      href: "javascript:void()",
      name: "Careers",
    },

    {
      href: "javascript:void()",
      name: "Suport",
    },
  ];
</script>
