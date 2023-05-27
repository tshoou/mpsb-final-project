<template>
  <div class="bg-darkBlue py-8">
    <div class="mx-44 bg-purple2 rounded-xl p-12">
      <h1 class="text-white text-center text-xl">Tujuan Belajar</h1>
      <p class="text-white py-4">
        Setelah mempelajari uraian materi dalam bab pembelajaran dan kegiatan
        belajar diharapkan peserta didik dapat memiliki kompetensi sikap,
        pengetahuan dan ketrampilan yang berkaitan dengan materi:
      </p>
      <ul class="text-white list-disc ml-4">
        <li>Perkembangan sistem operasi windows.</li>
        <li>Struktur sistem operasi windows.</li>
        <li>Proses booting sistem operasi windows.</li>
        <li>Adminisitrasi sistem operasi windows.</li>
        <li>Prosedur pencarian kesalahan sistem operasi windows.</li>
      </ul>
    </div>
  </div>
  <div class="kikd flex justify-center text-white bg-darkBlue px-44 pb-8">
    <div class="bg-purple2 w-2/4 mr-6 py-4 px-8 rounded-xl">
        <h1 class="py-4 text-xl font-bold">Kegiatan Belajar 1 : Perkembangan Sistem Operasi Windows</h1>
        <ul class="list-disc">
            <li>Memahami definisi dan fungsi sistem operasi</li>
            <li>Membedakan berbagai ragam sistem operasi</li>
            <li>Mengetahui perkembangan umum sistem operasi</li>
            <li>Mengidentifikasi perkembangan sistem operasi windows</li>
        </ul>
    </div>
    <div class="bg-purple2 w-2/4 py-4 px-8 rounded-xl">
        <h1 class="py-4 text-xl font-bold">Kegiatan Belajar 2: Arsitektur Sistem Operasi</h1>
        <!-- <p>Setelah mengikuti kegiatan belajar 2 diharapkan peserta didik dapat:</p> -->
        <ul class="list-disc">
            <li>Memahami peranan sistem operasi dalam struktur sistem komputer.</li>
            <li>Menjelaskan berbagai ragam model arsitektur sistem operasi.</li>
        </ul>
    </div>
  </div>
  <div class="bg-darkBlue flex justify-center flex-col py-8">
    <h1 class="text-white text-center text-2xl">Peta Konsep</h1>
    <img src="../assets/petakonsep.png" class="w-1/2 mx-auto flex justify-center bg-purple2 p-2 my-8">
    <a class="border border-purple2 py-2 w-auto text-center hover:bg-purple2 rounded-xl text-white mx-96">Cek Kemampuan Awal</a>
  </div>
  <Footer/>
</template>

<script>
import Footer from "../components/HomeComponents/FooterComponent.vue"
export default {
  name: "petaView",
  components: {
    Footer
  }
};
</script>

<style></style>
