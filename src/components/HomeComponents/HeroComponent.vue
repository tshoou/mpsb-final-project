<template>
  <!-- <Navbar /> -->
  <div class="hero h-screen bg-darkBlue flex flex-col md:flex-row justify-between align-center flex-wrap justify-center">
    <img src="../../assets/hero.png" class="my-auto w-[40vh] md:w-[50vh] lg:w-1/3 hidden sm:flex sm:justify-center mx-auto sm:mx-0"/>
    <div class="flex flex-col text-white lg:pl-12 m-auto lg:w-2/4 sm:absolute top-44 lg:left-[70vh] md:left-[60vh] sm:left-[50vh] justify-center ">
    <img src="../../assets/hero2.png" class="my-auto w-[40vh] md:w-[50vh] lg:w-1/3 flex sm:hidden flex justify-center mx-auto"/>
      <a class="bg-purple w-36 rounded-md text-center py-1 justify-center mb-6 mx-10 sm:mx-0 mt-6 sm:mt-0"
        >Deskripsi</a
      >
      <p class="mx-10 sm:mx-0">
        Sistem operasi adalah salah satu mata pelajaran wajib dasar program
        keahlian Teknik Komputer dan Informatika (TKI). Berdasarkan struktur
        kurikulum mata pelajaran sistem operasi disampaikan di kelas X semester
        1 dan semester dua masing-masing 3 jam pelajaran. Untuk semester 1 topik
        materi pembelajaran menekankan pada pemanfaatan sistem operasi closed
        source dalam hal ini adalah sistem operasi keluarga windows. Sedangkan
        untuk semester 2 topik materi pembelajaran menekankan pada pemenfaatan
        sistem operasi open source dalam hal ini sistem operasi keluarga unik.
      </p>
      <a
        class="border-2 border-purple w-36 rounded-md text-center mt-6 py-2 hover:bg-purple mx-10 sm:mx-0"
        >Mulai</a
      >
    </div>
    <div class="flex items-end w-1/3 place-content-end">
      <img src="../../assets/circle-hero.png" class="w-80">
    </div>
  </div>
</template>

<script>
// import Navbar from "../Navbar/NavbarComponent.vue";
export default {
  name: "HeroComponent",

};
</script>

<style></style>
