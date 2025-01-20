<template>
  <div class="px-4 py-4 md:px-16">
    <!-- Title -->
    <div class="w-full py-4 text-center">
      <h1 class="text-xl font-bold">Event Kami</h1>
    </div>
    <!-- Description -->
    <div class="mb-4 w-full px-8 text-left text-gray-600">
      Kami bangga menjadi mitra yang dipercaya oleh berbagai klien terkemuka dalam perjalanan
      transformasi digital mereka. Dengan pendekatan yang berfokus pada hasil, kami telah membantu
      bisnis-bisnis dari berbagai industri mencapai tujuan mereka melalui solusi inovatif dan
      dukungan yang berkelanjutan.
    </div>

    <!-- Event Cards Container -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
      <!-- Single Event Card -->
      <div v-for="event in events" :key="event.id" class="p-4">
        <div class="relative mx-auto max-w-md rounded-lg border shadow-lg">
          <!-- Image with Badge -->
          <div class="relative">
            <!-- Badge Container -->
            <div class="absolute left-2 top-2 z-10">
              <span v-if="getBadgeStatus(event.date_event) === 'Today'"
                class="today-badge rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
                Today
              </span>
              <span v-if="getBadgeStatus(event.date_event) === 'Tomorrow'"
                class="rounded bg-blue-500 px-2 py-1 text-xs font-bold text-white">
                Tomorrow
                <span v-if="countdown[event.id]">{{ countdown[event.id] }}</span>
              </span>
              <span v-if="getBadgeStatus(event.date_event) === 'This Week'"
                class="rounded bg-blue-500 px-2 py-1 text-xs font-bold text-white">
                This Week
                <span v-if="countdown[event.id]">{{ countdown[event.id] }}</span>
              </span>
              <span v-if="getBadgeStatus(event.date_event) === 'Coming Soon'"
                class="rounded bg-orange-500 px-2 py-1 text-xs font-bold text-white">
                Coming Soon
              </span>
              <span v-if="getBadgeStatus(event.date_event) === 'Expired'"
                class="rounded bg-gray-500 px-2 py-1 text-xs font-bold text-white">
                Expired
              </span>
              <span v-if="getBadgeStatus(event.date_event) === 'New'"
                class="rounded bg-green-500 px-2 py-1 text-xs font-bold text-white">
                New
              </span>
            </div>

            <img :src="event.img" class="h-64 w-full object-cover" alt="Event Image" />
          </div>

          <div class="p-4 text-center">
            <h2 class="text-lg font-bold">
              {{ event.title }}
            </h2>
            <!-- <p class="text-md">
              {{ event.pembicara }} <br />
              - {{ formatDate(event.date_event) }} | {{ event.date_time }}
            </p>
            <p v-if="event.platform">Platform | {{ event.platform }}</p> -->

            <!-- Event Details Table -->

            <table class="min-w-full border-collapse border border-gray-200">
              <tbody>
                <tr class="">
                  <td class="border border-gray-200 bg-purple-100 text-sm px-4 py-2 font-bold">Tanggal:</td>
                  <td class="border border-gray-200 text-sm px-4 py-2">{{ formatDate(event.date_event) }}</td>
                </tr>
                <tr>
                  <td class="border border-gray-200 bg-purple-100 text-sm px-4 py-2 font-bold">Waktu:</td>
                  <td class="border border-gray-200 text-sm px-4 py-2">{{ event.date_time }}</td>
                </tr>
                <tr v-if="event.platform">
                  <td class="border border-gray-200 bg-purple-100 text-sm px-4 py-2 font-bold">Platform:</td>
                  <td class="border border-gray-200 text-sm px-4 py-2">{{ event.platform }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Accordion for Event Description -->
          <div class="p-4">
            <Button @click="event.showDescription = !event.showDescription" class="w-full text-left">
              <div class="flex items-center justify-between  ">
                <span class="font-normal text-lg">Description</span>
                <span @click="event.showDescription" class="cursor-pointer">
                  <Icon
                    :name="event.showDescription ? 'i-heroicons-chevron-up-20-solid' : 'i-heroicons-chevron-down-20-solid'"
                    aria-hidden="true" class="text-white-600  transition-transform duration-200" />
                </span>
              </div>
            </Button>
            <div v-if="event.showDescription" class="mt-2 rounded border bg-gray-100 p-2">
              <p class="text-sm text-white-600 " v-html="event.description" />
            </div>
          </div>

          <div v-show="event.price" class="p-4">
            <p v-show="event.price">
              <strong>Price:</strong>
              <span v-if="!event.diskon && event.price" class="text-green-500">Rp {{ event.price }}</span>
              <span v-if="event.diskon" class="text-red-500 line-through">Rp {{ event.price }}</span>
              <span v-if="event.diskon" class="font-bold text-green-500">Rp {{ event.diskon }}</span>
            </p>
          </div>

          <!-- Register Button -->
          <div class="p-4">
            <Button v-if="event.link_daftar_optional" :href="event.link_daftar_optional"
              class="block rounded bg-blue-400 px-4 py-2 text-center text-white" target="_blank">
              Register Now
            </Button>
            <Button v-else :href="`https://wa.me/6281578401214?text=Halo ! Saya ingin join acara ini ${event.title} !`"
              class="block rounded bg-blue-400 px-4 py-2 text-center text-white" target="_blank">
              Register Now
            </Button>
          </div>

        </div>
      </div>
    </div>

    <!-- Footer Text -->
    <div class="mt-4 w-full px-8 text-left text-gray-600">
      Dari pengembangan aplikasi khusus hingga strategi pemasaran digital yang efektif, kepercayaan
      yang telah diberikan oleh klien-klien kami adalah bukti dedikasi kami dalam memberikan layanan
      terbaik.
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { onBeforeUnmount, onMounted, ref } from "vue";

interface Event {
  id: number;
  img: string;
  title: string;
  pembicara: string;
  date_event: string;
  date_time: string;
  platform: string | null;
  description: string;
  price: number | null;
  diskon: number | null;
  link_daftar_optional: string | null;
  showDescription?: boolean; // Tambahkan properti untuk mengontrol tampilan deskripsi
}

const props = defineProps<{
  events: Event[];
}>();

const countdown = ref<Record<number, string>>({});
const countdownIntervals = ref<Record<number, NodeJS.Timeout>>({});

const formatDate = (date: string) => {
  return moment(date).format("DD, MMMM YYYY"); // Format the date to a more readable format
};

const getBadgeStatus = (eventDate: string) => {
  const now = moment().startOf("day"); // Mengatur 'now' menjadi awal hari ini
  const eventDateTime = moment(eventDate, "YYYY-MM-DD").startOf("day"); // Pastikan format tanggal sesuai

  const diffInDays = eventDateTime.diff(now, "days");

  if (eventDateTime.isBefore(now, "day")) {
    return "Expired";
  } else if (diffInDays === 0) {
    return "Today";
  } else if (diffInDays === 1) {
    return "Tomorrow";
  } else if (diffInDays <= 7) {
    return "This Week";
  } else if (diffInDays <= 30) {
    return "Coming Soon";
  } else {
    return "New";
  }
};

const startCountdown = () => {
  props.events.forEach((event) => {
    const status = getBadgeStatus(event.date_event);
    if (status === "Tomorrow" || status === "This Week") {
      updateCountdown(event.id, event.date_event);
    } else if (status === "Today") {
      countdown.value[event.id] = "Live";
    }
  });
};

const updateCountdown = (eventId: number, eventDate: string) => {
  const updateFn = () => {
    const countdownText = calculateCountdown(eventDate);
    countdown.value[eventId] = countdownText;
    if (countdownText === "Event started") {
      clearInterval(countdownIntervals.value[eventId]);
    }
  };

  updateFn();
  const interval = setInterval(updateFn, 1000);
  countdownIntervals.value[eventId] = interval;
};

const calculateCountdown = (eventDate: string) => {
  const now = moment().valueOf();
  const eventTime = moment(eventDate).valueOf();

  const diff = eventTime - now;

  if (diff <= 0) return "Event started";

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return `${hours} hours ${minutes} minutes ${seconds} seconds`;
};

onMounted(startCountdown);

onBeforeUnmount(() => {
  Object.values(countdownIntervals.value).forEach(clearInterval);
});
</script>

<style scoped>
.today-badge {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
