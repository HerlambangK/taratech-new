<template>
  <div>
    <!-- Pricing toggle -->
    <!-- tab switch -->
    <div class="m-auto flex max-w-[30rem] pb-12 justify-center ">
      <div class="relative flex w-full rounded-full bg-white p-1.5 shadow-md dark:bg-slate-800/40">
        <span class="pointer-events-none absolute inset-0 m-1" aria-hidden="true">
          <span
            class="absolute inset-0 w-1/2 transform rounded-full bg-purple-600 shadow-sm shadow-indigo-950/10 transition-transform duration-150 ease-in-out"
            :class="isBasic ? 'translate-x-0' : 'translate-x-full'"></span>
        </span>
        <button
          class="relative h-8 flex-1 rounded-full text-sm font-semibold transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
          :class="isBasic ? 'text-white' : 'text-slate-500 dark:text-slate-400'" :aria-pressed="isBasic"
          @click="isBasic = true">
          Basic Plan
        </button>
        <button
          class="relative h-8 flex-1 rounded-full text-sm font-semibold transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
          :class="isBasic ? 'text-slate-500 dark:text-slate-400' : 'text-white'" :aria-pressed="!isBasic"
          @click="isBasic = false">
          Enterprise Plan
        </button>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div
      class="mx-auto sm:flex sm:flex-row  max-w-screen-lg items-center justify-center gap-6 lg:max-w-none sm:w-[35rem] h-full">

      <!-- Show 2 card items if isBasic is true -->
      <template v-if="isBasic">
        <!-- Basic Plan 1 -->
        <PriceTab :basic="true" plan-name="Starter" :price="{ basic: 5000000, custom: 'Call Us' }"
          plan-description="Solusi website sederhana untuk bisnis kecil yang baru memulai digitalisasi." :features="[
            'Landing page sederhana dengan desain responsif',
            'Optimisasi SEO dasar',
            'Integrasi Google Analytics',
            'Dukungan teknis 3 bulan',
          ]" />


        <!-- Basic Plan 2 -->
        <PriceTab :basic="true" popular plan-name="Business" :price="{ basic: 15000000, custom: 'Call Us' }"
          plan-description="Paket website untuk bisnis kecil dan menengah yang ingin memperkuat kehadiran online."
          :features="[
            'Website multi-halaman dengan desain profesional',
            'Optimisasi SEO tingkat lanjut',
            'Integrasi pembayaran online (Midtrans)',
            'Dukungan teknis 6 bulan',
            'Integrasi media sosial',
          ]" />
        <!-- Basic Plan 3 -->
        <PriceTab :basic="true" plan-name="Corporate" :price="{ basic: 25000000, custom: 'Call Us' }"
          plan-description="Solusi website untuk fitur yang melimpah untuk membantu permasalahan bisnis anda" :features="[
            'Landing page dengan desain responsif',
            'Optimisasi SEO ',
            'Integrasi Google Analytics',
            'Ads Iklan', 'Fitur pengelolaan website atau dashbord admin', 'Dukungan teknis 3 bulan',]" />
      </template>

      <!-- Show 1 card item if isBasic is false (Enterprise Plan) -->
      <template v-else>
        <!-- Enterprise Plan -->
        <PriceTab :basic="false" plan-name="Enterprise" :price="{ basic: 50000000, custom: 'Call Us' }"
          plan-description="Solusi komprehensif untuk perusahaan besar dengan kebutuhan website dan teknologi tingkat lanjut."
          :features="[
            'Website custom dengan fitur lengkap',
            'Integrasi sistem ERP atau CRM',
            'Integrasi pembayaran online skala besar',
            'Optimisasi SEO tingkat lanjut dan kampanye pemasaran digital',
            'Layanan hosting premium dengan keamanan SSL',
            'Dukungan teknis dan pemeliharaan 12 bulan',
          ]" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import PriceTab from "./PriceTab.vue"

const isBasic = ref<boolean>(true)
</script>
