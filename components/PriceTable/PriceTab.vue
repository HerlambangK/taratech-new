<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-closing-bracket-newline -->
<template>
  <div class="relative mb-12 " :class="{ 'rounded-2xl ring ring-purple-600': props.popular }">
    <div
      class="relative flex flex-col rounded-2xl border dark:border-slate-700 border-slate-200 bg-white p-6 shadow shadow-slate-950/5 dark:border-slate-900 dark:bg-slate-900">
      <div v-if="props.popular" class="absolute right-0 top-0 -mt-4 mr-6">
        <div
          class="inline-flex items-center rounded-full bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-slate-950/5">
          Most Popular
        </div>
      </div>

      <div class="mb-5">
        <div class="mb-1 font-semibold text-slate-900 dark:text-slate-200">
          {{ props.planName }}
        </div>

        <!-- Kondisi untuk Basic atau Enterprise -->
        <div v-if="basic" class="mb-2 inline-flex items-baseline">
          <span class="text-4xl font-bold text-slate-900 dark:text-slate-200">
            {{
              typeof props.price.basic === "number"
                ? formatToRupiah(props.price.basic)
                : props.price.basic
            }}
          </span>
          <span v-show="typeof props.price.basic === 'number'" class="font-medium text-slate-500"></span>
        </div>
        <div v-else class="mb-2 inline-flex items-baseline">
          <span class="text-4xl font-bold text-slate-900 dark:text-slate-200">
            {{
              typeof props.price.custom === "number"
                ? formatToRupiah(props.price.custom)
                : props.price.custom
            }}
          </span>
          <span v-show="typeof props.price.custom === 'number'" class="font-medium text-slate-500"></span>
        </div>

        <div class="mb-5 text-sm text-slate-500">
          {{ props.planDescription }}
        </div>
        <a :href="`https://wa.me/${notelepone}?text=Halo, saya tertarik dengan paket ${props.planName}`"
          target="_blank">
          <Button class="w-full"> Hubungi Kami </Button>
        </a>
      </div>

      <div class="mb-3 font-medium text-slate-900 dark:text-slate-200">Includes:</div>

      <ul class="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
        <template v-for="feature in props.features" :key="feature + Math.random()">
          <li class="flex items-center">
            <svg class="mr-3 h-3 w-3 shrink-0 fill-emerald-500" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg>
            <span>{{ feature }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const notelepone = "6281578401214";
interface Props {
  basic: boolean;
  popular?: boolean;
  planName: string;
  price: {
    custom: string | number;
    basic: string | number;
  };
  planDescription: string;
  features: string[];
}

const formatToRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);
};

const props = defineProps<Props>();
</script>
