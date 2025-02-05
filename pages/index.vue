<template>
  <div>
    <PageSection v-motion-fade-visible column class="relative md:py-40">
      <GridPattern />
      <div class="text-center">
        <div class="mb-10">
          <SectionBadge text="New Promo Pembuatan Website Oktober 2024 ✨" icon="i-material-symbols-favorite" href="/"
            shiny />
        </div>
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
          Welcome to, <span class="magic-text">Taractech</span> !
        </h1>
        <div class="mt-6 md:text-lg  text-md tracking-tight text-gray-600 dark:text-gray-300">
          kami perusahaan yang melayani pengembangan pembuatan sistem aplikasi untuk menyeselesaikan
          masalah bisnis anda.
        </div>
        <div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Button>
            Contact Us
            <Icon name="i-heroicons-arrow-right" class="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </PageSection>

    <PageSection class="!pt-0" column>
      <div class="relative rounded-xl">
        <div class="absolute top-[-4rem] z-[1] mx-auto h-[10rem] w-full bg-purple-600 opacity-40 blur-[100px]"></div>
        <BorderBeam />
        <ClientOnly>
          <template #fallback>
            <ImagePlaceholder />
          </template>
          <NuxtImg width="1920" :src="colorMode.value === 'dark' ? '/taratech_logo.png' : '/taratech_logo.png'"
            alt="Hero Image"
            class="relative z-[2] mx-auto h-auto max-w-full rounded-xl [mask-image:linear-gradient(to_bottom,_white_40%,_transparent_100%)]" />
        </ClientOnly>
      </div>
    </PageSection>

    <PageSection v-motion-slide-visible-left>
      <div class="lg:order-last">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl text-center md:text-justify">
          Konsultasi <span class="magic-text">Teknologi</span>
        </h2>
        <div class="mt-6 md:text-lg/8 text-sm text-gray-600 dark:text-gray-300 text-center md:text-justify">
          Kami menyediakan layanan konsultasi teknologi yang mendalam untuk membantu bisnis Anda
          mencapai efisiensi maksimal dengan solusi inovatif.
        </div>
      </div>
      <div class="relative">
        <img src="/layanan/1.png" class="rounded-xl shadow-md" />
        <div class="absolute inset-0 bg-gradient-to-b from-white to-purple-500 opacity-40 rounded-xl"></div>
      </div>
      <!-- <ImagePlaceholder /> -->
    </PageSection>

    <PageSection v-motion-slide-visible-right>
      <div>
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl text-center md:text-justify">
          <span class="magic-text">Pengembangan </span> Aplikasi
        </h2>
        <div class="mt-6 md:text-lg/8 text-sm text-gray-600 dark:text-gray-300 text-center md:text-justify">
          Kami membantu Anda mengembangkan aplikasi yang sesuai dengan kebutuhan bisnis Anda untuk
          meningkatkan operasional secara signifikan.
        </div>
      </div>
      <div class="relative">
        <img src="/layanan/2.png" class="rounded-xl shadow-md" />
        <div class="absolute inset-0 bg-gradient-to-b from-white to-purple-500 opacity-40 rounded-xl"></div>
      </div> <!-- <ImagePlaceholder /> -->
    </PageSection>

    <PageSection v-motion-slide-visible-left>
      <div class="lg:order-last">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl text-center md:text-justify">
          Digital <span class="magic-text"> Marketing </span>
        </h2>
        <div class="mt-6 lg:text-lg/8 text-gray-600 dark:text-gray-300 text-center md:text-justify text-sm">
          Kami menyediakan layanan digital marketing yang efektif dan efisien untuk membantu bisnis
          Anda mencapai tujuan marketing yang efektif dan efisien.
        </div>
      </div>
      <!-- <img src="/layanan/3.png" class="rounded-xl shadow-sm" /> -->
      <div class="relative">
        <img src="/layanan/3.png" class="rounded-xl shadow-md" />
        <div class="absolute inset-0 bg-gradient-to-b from-white to-purple-500 opacity-40 rounded-xl"></div>
      </div>
      <!-- <ImagePlaceholder /> -->
    </PageSection>

    <PageSection v-motion-fade-visible column>
      <div id="client" class="flex flex-col items-center text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Temukan<span class="magic-text"> Solusi Kami </span> Untuk Para
          <span class="magic-text">Mitra</span>
          Kami?
        </h2>
        <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
          Solusi inovatif kami dirancang khusus untuk mendukung para mitra dalam mencapai tujuan
          mereka dengan lebih efisien. Kami menawarkan layanan yang disesuaikan, memastikan setiap
          mitra mendapatkan manfaat terbaik sesuai dengan kebutuhan unik mereka.
        </div>
      </div>

      <Spotlight class="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
        <!-- Card #1 -->
        <SpotlightCard v-for="(item, index) in mitra_kami" :key="index">
          <div class="relative z-20 h-full overflow-hidden rounded-lg bg-white p-6 dark:bg-gray-900">
            <!-- Radial gradient -->
            <div class="flex h-full flex-col items-center text-center">
              <!-- Text -->
              <div class="grow">
                <img :src="item.img" class="mx-auto h-24 rounded-full" />
                <h2 class="mb-1 text-lg font-bold text-gray-700 dark:text-white">
                  {{ item.name }}
                </h2>
                <p class="text-sm text-slate-500">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Spotlight>
    </PageSection>

    <PageSection v-motion-fade-visible column>
      <div class="flex flex-col items-center text-center">
        <SectionBadge id="services" text="Pricing" shiny only-text class="mb-2" />
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          <span class="magic-text">Service</span> dan Layanan
        </h2>
        <div class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
          Kami menyediakan layanan yang sesuai dengan kebutuhan bisnis Anda untuk meningkatkan
          operasional secara signifikan.
        </div>
      </div>

      <!-- tabel harga -->
      <PricingTable />
    </PageSection>

    <PageSection v-motion-pop-visible column>
      <div class="text-center pt-12">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          <span class="magic-text"> Events </span> Kami
        </h2>
        <div v-if="events.length">
          <EventAgenda :events="events" />
        </div>
        <div v-else>
          <p>No events available at the moment.</p>
        </div>
      </div>
    </PageSection>

    <PageSection v-motion-fade-visible column>
      <div class="flex flex-col items-center text-center">
        <SectionBadge id="testimoni" text="Testimonials" shiny only-text class="mb-2" />
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          <!-- What our <span class="text-gray-500 font-light line-through">fake</span> costumers are saying -->
          Apa yang <span class="magic-text">Mereka</span> Katakan
        </h2>
        <div class="mt-6 md:text-lg/8 text-gray-600 dark:text-gray-300 text-sm">
          Kami menyediakan layanan yang sesuai dengan kebutuhan bisnis Anda untuk meningkatkan
          operasional secara signifikan.
        </div>
      </div>

      <div class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pause-on-hover>
          <TestimonialCard v-for="item in firstTestimonialsRow" :key="item.username" v-bind="item" />
        </Marquee>
        <Marquee pause-on-hover reverse>
          <TestimonialCard v-for="item in secondTestimonialsRow" :key="item.username" v-bind="item" />
        </Marquee>
        <div
          class="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-gray-900" />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-gray-900" />
      </div>
    </PageSection>

    <PageSection v-motion-pop-visible column>
      <div
        class="relative divide-y divide-gray-200 rounded-xl bg-gray-100/50 shadow ring-1 ring-gray-200 dark:divide-gray-800 dark:bg-gray-800/50 dark:ring-gray-800">
        <DotPattern
          class="opacity-40 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)] lg:opacity-100" />
        <div class="absolute inset-0 z-[-1] flex items-center justify-center">
          <div
            class="h-80 w-80 animate-color-cycle rounded-full bg-purple-500 opacity-90 blur-[120px] dark:opacity-60" />
        </div>
        <div class="relative flex flex-col gap-16 px-4 py-8 sm:gap-y-10 sm:p-6 sm:px-16 sm:py-32">
          <div
            class="mx-auto flex size-24 items-center justify-center rounded-[2rem] border bg-white/40 p-3 shadow-2xl backdrop-blur-lg dark:border-gray-600 dark:bg-black/10 lg:size-32">
            <NuxtImg :src="colorMode.value === 'dark' ? '/taratech_logo.png' : '/taratech_logo.png'" alt="Hero Image"
              class="relative z-[2] mx-auto h-auto max-w-full rounded-xl [mask-image:linear-gradient(to_bottom,_white_40%,_transparent_100%)]" />
          </div>
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Get in Touch
            </h2>
            <div class="mt-2 text-lg text-gray-600 dark:text-gray-300">
              We would love to hear from you! Please fill out the form below.
            </div>
          </div>
          <!-- Contact Form Card -->
          <div class="mx-auto w-full rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
            <form class="space-y-6" @submit.prevent="handleSubmit">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input v-model="form.name" type="text" id="name" required
                  class="mt-1 block h-[40px] w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 dark:border-gray-600"
                  placeholder="Your Name" />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input v-model="form.email" type="email" id="email" required
                  class="mt-1 block h-[40px] w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 dark:border-gray-600"
                  placeholder="Your Email" />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea v-model="form.message" id="message" required rows="4"
                  class="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 dark:border-gray-600"
                  placeholder="Your Message"></textarea>
              </div>
              <div class="flex items-center justify-center">
                <Button type="submit" class="bg-purple-500 text-white transition duration-300 hover:bg-purple-600">
                  Send Message
                  <Icon name="i-heroicons-arrow-right" class="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toast v-if="success" message="Message sent successfully!" @close="success = false" />
    </PageSection>
  </div>
</template>

<script setup lang="ts">
import DotPattern from "@/components/BackgroundPattern/DotPattern.vue"
import GridPattern from "@/components/BackgroundPattern/GridPattern.vue"
import Spotlight from "@/components/Cards/Spotlight.vue"
import SpotlightCard from "@/components/Cards/SpotlightCard.vue"
import TestimonialCard from "@/components/Cards/TestimonialCard.vue"
import EventAgenda from "@/components/EventAgenda/EventAgenda.vue"
import Marquee from "@/components/Marquee.vue"
import PageSection from "@/components/PriceTable/PageSection.vue"
import PricingTable from "@/components/PriceTable/PricingTable.vue"
import { ref } from "vue"

const colorMode = useColorMode()

const testimonials = [
  {
    name: "Alice",
    username: "@alice",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Diana",
    username: "@diana",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Ethan",
    username: "@ethan",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Fiona",
    username: "@fiona",
    body: "This product has changed my life. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const mitra_kami = [
  {
    name: "JHC Tasikmalaya",
    img: "/client/jhc.png",
    description: "RS Jantung & Pembuluh Darah Tasikmalaya ",
  },
  {
    name: "ICHC",
    img: "/client/ichc.png",
    description: "I Care Health Clinic ",
  },
  {
    name: "PT SAS",
    img: "/client/sas.png",
    description: "PT Sinergicipta Abyudaya Sempurna ",
  },
  {
    name: "Gereja Katolik Paroki Bantul",
    img: "/client/pb.png",
    description: "Website Blog untuk Gereja Katolik Paroki Bantul",
  },
  {
    name: "PT SSK",
    img: "/client/ssk.png",
    description: "Pt sehat karya utama",
  },
  {
    name: "Fruad Roastery",
    img: "/client/fr.png",
    description: "Website untuk fruad roastery",
  },
  {
    name: "Joglo Bu Mardjuki",
    img: "/client/jbm.png",
    description: "Website joglo bu mardjuki",
  },
  {
    name: "Badut Timoho",
    img: "/client/bt.png",
    description: "Website badut timoho",
  },
]

const form = ref({
  name: "",
  email: "",
  message: "",
})

const success = ref(false)

const handleSubmit = async () => {
  const { name, email, message } = form.value
  const waNumber = "+62 815-7840-1214"
  const messageEncoded = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
  const whatsappUrl = `https://wa.me/${waNumber}?text=${messageEncoded}`

  try {
    await window.open(whatsappUrl, "_blank") // Open WhatsApp in a new tab
    success.value = true // Show success message
    resetForm() // Reset form values
    showSuccessToast() // Show success toast
  } catch (error) {
    console.error("Error sending message", error)
    // Optionally handle errors, e.g. show an error toast
  }
}

const resetForm = () => {
  form.value.name = ""
  form.value.email = ""
  form.value.message = ""
}

const showSuccessToast = () => {
  useToast().toast({
    title: "Message Sent",
    description: "Your message has been sent",
    variant: "success",
    icon: "i-heroicons-check-circle",
  })
}

// import axios from 'axios'

// const events = ref([]);

const events = ref([
  {
    id: "1",
    title: "Hilangkan Minus Mata",
    description:
      'Punya mata minus tentu membuat aktivitas sehari-hari terasa kurang nyaman karena sulitnya melihat objek yang jauh dengan jelas. Lantas adakah cara untuk menghilangkan minus pada mata? Yuk temukan jawabannya dengan mengikuti IG live terbaru kami dengan tema "Hilangkan Mata Minus Dalam 1x Tindakan" yang akan dibawakan langsung oleh dr.Sri Astri Nanditya, Sp.M dari @ichc.clinic. Ayo catat jadwalnya di hari Kamis, 19 September jam 4 sore. Jangan sampai terlewat ya!',
    img: "https://res.cloudinary.com/dw6i7jjhl/image/upload/v1726630778/hilangkan_mata_minus_tgsnns.jpg",
    pembicara: "dr.sri astri nanditya,Sp.M",
    price: "",
    diskon: "",
    date_event: "2024-10-08",
    date_time: "17.00 - 18.00",
    category: "education",
    link_daftar_optional: "",
    platform: "instagram",
  },

])
// Fetch events data from Google Sheets API or public URL
// const fetchEvents = async () => {
//   const API_KEY = "AIzaSyDSKjuPGZ_i19DI70tVh1wvbENjOuE4d1s"
//   const SHEET_ID = "1aW5-I8k4dYbDHE4GvFdgqWSELYfLAB_FL-Jgg2fCxl8"
//   const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/events?key=${API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     events.value = data;
//     // Map the data to a more usable format
//     if (data.values) {
//       events.value = data.values.map((row: string[]) => ({
//         name: row[0],
//         date: row[1],
//         time: row[2],
//         location: row[3],
//         description: row[4],
//         link: row[5]
//       }));
//     }
//   } catch (error) {
//     console.error("Error fetching events:", error);
//   }
// };

// Fetch events on component mount
// onMounted(fetchEvents);
const firstTestimonialsRow = testimonials.slice(0, testimonials.length / 2)
const secondTestimonialsRow = testimonials.slice(testimonials.length / 2)
</script>
