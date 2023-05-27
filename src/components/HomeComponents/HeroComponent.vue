<template>
  <!-- <Navbar /> -->
  <div class="hero h-screen bg-darkBlue flex justify-between align-center">
    <img src="../../assets/hero.png" class="my-auto w-1/3" />
    <div class="flex flex-col text-white pl-12 m-auto w-2/4 absolute top-44 left-[70vh]">
      <a class="bg-purple w-36 rounded-md text-center py-1 justify-center mb-6"
        >Deskripsi</a
      >
      <p class="">
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
        class="border-2 border-purple w-36 rounded-md text-center mt-6 py-2 hover:bg-purple"
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
