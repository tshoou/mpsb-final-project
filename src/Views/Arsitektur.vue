<template>
  <div class="bg-darkBlue text-white">
    <div class="flex flex-row h-screen flex-wrap md:flex-nowrap justify-center">
      <h1
        class="md:w-1/3 my-auto text-white text-4xl md:ml-24 md:py-10 md:py-0"
      >
        Arsitektur Sistem Operasi
      </h1>
      <div class="w-2/3 my-auto">
        <p
          class="bg-purple text-white px-12 py-12 md:py-24 rounded-2xl md:mx-24"
        >
          Arsitektur perangkat lunak adalah merupakan struktur-struktur yang
          menjadikan landasan untuk menentukan keberadaan komponen-komponen
          perangkat lunak, metode atau cara untuk mengelola (organisasi)
          komponen- komponen tersebut untuk saling berinteraksi. Komponen
          tersebut merupakan program-program bagian (prosedur, fungsi) yang akan
          dieksekusi oleh program utama.
        </p>
      </div>
    </div>
    <div class="mx-auto mx-auto text-center">
      <h1 class="text-4xl my-4">Arsitektur System Operasi</h1>
      <div class="flex flex-col mx-auto justify-center items-center">
        <div class="bg-purple mx-12 rounded-lg py-4 my-2 px-4">
          <h1 class="text-2xl border-b-2 pb-2">System Monolitik</h1>
          <p class="pt-2">
            Sistem monolitik Merupakan struktur sistem operasi sederhana yang
            dilengkapi dengan operasi “dual” pelayanan {sistem call} yang
            diberikan oleh sistem operasi. Model sistem call dilakukan dengan
            cara mengambil sejumlah parameter pada tempat yang telah ditentukan
            sebelumnya, seperti register atau stack dan kemudian mengeksekusi
            suatu intruksi trap tertentu pada monitor mode.
          </p>
        </div>

        <div class="bg-purple mx-12 rounded-lg py-4 my-4 px-4">
          <h1 class="text-2xl border-b-2 pb-2">System Berlapis</h1>
          <p class="pt-2">
            Teknik pendekatan struktur sistem berlapis sistem operasi pada
            dasarnya dibuat menggunakan pendekatan top-down, semua fungsi
            ditentukan dan dibagi menjadi komponen komponen. Modularisasi sistem
            dilakukan dengan cara memecah sistem operasi menajdi beberapa lapis
            (tingkat). Lapisan terendah (layer 0) adalah perangkat keras dan
            lapisan teratas (layer N) adalah user interface. Dengan system
            modularisasi, setiap lapisan mempunyai fungsi (operasi) tertentu dan
            melayani lapisan yang lebih rendah. System operasi pertama kali yang
            memakai system berlapis adalah THE. System operasi THE yang dibuat
            oleh Dijkstra dan mahasiswa-mahasiswanya. Pada dasarnya system
            operasi berlapis dimaksudkan untuk mengurangi kompleknya rancangan
            dan implementasi dari suatu system operasi. Contoh sistem operasi
            yang menggunakan sistem ini adalah: UNIX termodifikasi, THE, Venus
            dan OS/2.
          </p>
        </div>

        <div class="bg-purple mx-12 rounded-lg py-4 my-4 px-4">
          <h1 class="text-2xl border-b-2 pb-2">System Virtual mesin</h1>
          <p class="pt-2">
            Konsep dasar dari mesin virtual ini tidak jauh berbeda dengan
            pendekatan sistem terlapis dengan tambahan berupa antarmuka yang
            menghubungkan perangkat keras dengan kernel untuk tiap-tiap proses.
            Mesin virtual menyediakan antar muka yang identik untuk perangkat
            keras yang ada. Sistem operasi ini membuat ilusi atau virtual untuk
            beberapa proses, masing-masing virtual proses mengeksekusi
            prosessornya dan memorinya (virtual) masing masing.
          </p>
        </div>

        <div class="bg-purple mx-12 rounded-lg py-4 my-4 px-4">
          <h1 class="text-2xl border-b-2 pb-2">System Berorientasi objek</h1>
          <p class="pt-2">
            Layanan Sistem operasi sebagai kumpulan proses untuk menyelesaikan pekerjaannya, yang sering disebut dengan system operasi bermodel proses, sedangkan layanan system operasi sebagai objek disebut dengan system operasi berorientasi objek. Pendekatan objek dimaksudkan untuk mengadopsi keunggulan dari teknologi berorientasi objek. Pada system operasi berorientasi objek, layanan diimplementasikan sebagai kumpulan objek, masing-masing objek diberi tipe yang menandai property objek seperti proses, direktori, berkas, dan sebagainya. Dengan memanggil operasi yang didefinisikan di objek, data yang berada dalam objek tersebut dapat diakses dan dimodifikasi.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "../components/HomeComponents/FooterComponent.vue";
export default {
  name: "ArsitekturComponent",
  components: {
    Footer,
  },
};
</script>

<style></style>
