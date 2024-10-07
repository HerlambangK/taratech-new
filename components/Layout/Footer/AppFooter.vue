<template>
  <footer class="mx-auto border-t border-gray-200 px-4 py-5 text-gray-500 dark:border-gray-800">
    <div class="max-w-lg sm:mx-auto sm:text-center flex flex-col items-center">
      <NuxtImg src="/taratech_logo.png" class="h-10  text-purple-400" />
      <p class="mt-2 text-[15px] leading-relaxed">
        TaraTech didirikan pada Desember 2023 oleh tim yang memiliki rekam jejak kuat di startup teknologi dan berbagai
        industri di Indonesia, mulai dari UMKM hingga industri besar. Kami memahami tantangan dan kebutuhan unik yang
        dihadapi oleh bisnis di berbagai sektor, dari yang kecil hingga yang telah mapan.

      </p>
    </div>
    <ul
      class="mt-8 items-center justify-center space-y-5 text-gray-700 dark:text-gray-300/90 sm:flex sm:space-x-4 sm:space-y-0">
      <li v-for="item in footerNavs" :key="item.name" class="hover:text-gray-500 dark:hover:text-gray-100">
        <a :href="item.href">
          {{ item.name }}
        </a>
      </li>
    </ul>
    <div class="mt-8 items-center justify-center sm:flex">
      <div class="mt-4 items-center text-center text-sm sm:mt-0">
        Copyright &copy; {{ new Date().getFullYear() }} Taratech. All rights reserved.
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
    href: "#tentang",
    name: "About",
  },

  {
    href: "#portofolio",
    name: "Portofolio",
  },
  {
    href: "#services",
    name: "Service",
  },
  {
    href: "#client",
    name: "client",
  },

  {
    href: "#contact",
    name: "kontak",
  },
];
</script>
