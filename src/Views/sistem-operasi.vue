<template>
  <div class="bg-darkBlue text-white">
    <div class="flex flex-row h-screen">
      <h1 class="w-1/3 my-auto text-white text-4xl ml-24">
        DEFINISI SISTEM OPERASI
      </h1>
      <div class="w-2/3 my-auto">
        <p class="bg-purple text-white px-12 py-24 rounded-2xl mx-24">
          Sistem operasi (operating system atau OS) adalah perangkat lunak yang
          bertugas untuk mengatur, mengendalikan perangkat keras dan memberikan
          kemudahan untuk pemakai dalam penggunaan komputer. Sistem Operasi akan
          melakukan layanan inti umum untuk software aplikasi. Layanan tersebut
          seperti akses ke disk, manajemen memori, tugas penjadwalan, dan
          antar-muka user. Bagian kode yang melakukan tugas-tugas ini dinamakan
          dengan “kernel” suatu Sistem Operasi.
        </p>
      </div>
    </div>
    <div>
      <h1 class="text-center text-4xl ">Ragam <br />Sistem Operasi</h1>
      <div
        id="controls-carousel"
        class="relative w-[150vh] mx-auto"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-purple h-64 rounded-2xl ">
              <div class="flex my-auto">
                <img src="../assets/sistemoperasi.jpg" class="w-80 h-64 rounded-2xl"/>
                <p class="px-4 my-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio labore eius voluptatum velit, doloremque molestias culpa rerum voluptate neque distinctio sunt minus sed mollitia! Optio velit sapiente vel quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio labore eius voluptatum velit, doloremque molestias culpa rerum voluptate neque distinctio sunt minus sed mollitia! Optio velit sapiente vel quis.</p>
              </div>
            </div>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-purple h-64 rounded-2xl ">
              <div class="flex my-auto">
                <img src="../assets/sistemoperasi.jpg" class="w-80 h-64 rounded-2xl"/>
                <p class="px-4 my-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio labore eius voluptatum velit, doloremque molestias culpa rerum voluptate neque distinctio sunt minus sed mollitia! Optio velit sapiente vel quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio labore eius voluptatum velit, doloremque molestias culpa rerum voluptate neque distinctio sunt minus sed mollitia! Optio velit sapiente vel quis.</p>
              </div>
            </div>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-purple h-64 rounded-2xl ">
              <div class="flex my-auto">
                <img src="../assets/sistemoperasi.jpg" class="w-80 h-64 rounded-2xl"/>
                <p class="px-4 my-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio labore eius voluptatum velit, doloremque molestias culpa rerum voluptate neque distinctio sunt minus sed mollitia! Optio velit sapiente vel quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio labore eius voluptatum velit, doloremque molestias culpa rerum voluptate neque distinctio sunt minus sed mollitia! Optio velit sapiente vel quis.</p>
              </div>
            </div>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-purple h-64 rounded-2xl ">
              <div class="flex my-auto">
                <img src="../assets/sistemoperasi.jpg" class="w-80 h-64 rounded-2xl"/>
                <p class="px-4 my-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio labore eius voluptatum velit, doloremque molestias culpa rerum voluptate neque distinctio sunt minus sed mollitia! Optio velit sapiente vel quis.Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio labore eius voluptatum velit, doloremque molestias culpa rerum voluptate neque distinctio sunt minus sed mollitia! Optio velit sapiente vel quis.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div></div>
    </div>
    <div>
      <h1 class="text-4xl text-center ">Perkembangan Umum <br>Sistem Informasi</h1>
      <div>
        <img src="../assets/perkembangan.png" class="py-24 px-16"/>
      </div>
    </div>
    <div class="mx-auto">
      <h1 class="text-4xl text-center mb-12">Perkembangan <br>Sistem Operasi Windows</h1>
      <div class="flex flex-wrap mx-auto justify-center">
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">MS DOS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius, libero facilis asperiores animi repudiandae, iusto labore dolore vel molestias ipsum soluta esse ullam vitae vero obcaecati dolor quo nemo.</p>
        </div>

        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">MS DOS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius, libero facilis asperiores animi repudiandae, iusto labore dolore vel molestias ipsum soluta esse ullam vitae vero obcaecati dolor quo nemo.</p>
        </div>

        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">MS DOS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius, libero facilis asperiores animi repudiandae, iusto labore dolore vel molestias ipsum soluta esse ullam vitae vero obcaecati dolor quo nemo.</p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">MS DOS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius, libero facilis asperiores animi repudiandae, iusto labore dolore vel molestias ipsum soluta esse ullam vitae vero obcaecati dolor quo nemo.</p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">MS DOS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius, libero facilis asperiores animi repudiandae, iusto labore dolore vel molestias ipsum soluta esse ullam vitae vero obcaecati dolor quo nemo.</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// Initialization for ES Users
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });
import Footer from "../components/HomeComponents/FooterComponent.vue";
export default {
  name: "sistem-operasi",
  components: {
    Footer,
  },
};
</script>

<style></style>
