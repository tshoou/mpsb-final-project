<template>
  <div class="bg-darkBlue text-white">
    <div class="flex flex-row h-screen flex-wrap md:flex-nowrap justify-center">
      <h1
        class="md:w-1/3 my-auto text-white text-4xl md:ml-24 md:py-10 md:py-0"
      >
        DEFINISI SISTEM OPERASI
      </h1>
      <div class="w-2/3 my-auto">
        <p
          class="bg-purple text-white px-12 py-12 md:py-24 rounded-2xl md:mx-24"
        >
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
      <h1 class="text-center text-4xl">Ragam <br />Sistem Operasi</h1>
      <div
        id="controls-carousel"
        class="relative w-[150vh] mx-auto"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-purple h-64 rounded-2xl"
            >
              <div class="flex my-auto">
                <img
                  src="../assets/sistemoperasi.jpg"
                  class="w-80 h-64 rounded-2xl"
                />
                <div>
                  <h1 class="px-4 my-auto text-2xl pb-2 pt-4 font-bold">
                    Keluarga microsoft windows
                  </h1>
                  <p class="px-4 my-auto">
                    sistem operasi meliputi antara lain ialah Windows Desktop
                    Environment berbasis MS-DOS (versi 1.x hingga versi 3.x),
                    berbasis GUI Windows 9x (Windows 95, 98, dan Windows (ME)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-purple h-64 rounded-2xl"
            >
              <div class="flex my-auto">
                <img
                  src="../assets/sistemoperasi.jpg"
                  class="w-80 h-64 rounded-2xl"
                />
                <div>
                  <h1 class="px-4 my-auto text-2xl pb-2 pt-4 font-bold">
                    Keluarga UNIX
                  </h1>
                  <p class="px-4 my-auto">
                    Sistem operasi ini menggunakan antarmuka sistem operasi
                    POSIX, seperti SCO UNIX, keluarga BSD (Berkeley Software
                    Distribution), GNU/Linux, debian, redhat, SUSE, Ubuntu,
                    Zeath OS (berbasis kernel linux yang dimodifikasi.).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <div
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-purple h-64 rounded-2xl"
            >
              <div class="flex my-auto">
                <img
                  src="../assets/sistemoperasi.jpg"
                  class="w-80 h-64 rounded-2xl"
                />
                <div>
                  <h1 class="px-4 my-auto text-2xl pb-2 pt-4 font-bold">
                    Keluarga Mac OS
                  </h1>
                  <p class="px-4 my-auto">
                    Sistem operasi ini dikeluarkan oleh industri komputer Apple
                    yang disebut Mac atau Macintosh.
                  </p>
                </div>
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
      <h1 class="text-4xl text-center">
        Perkembangan Umum <br />Sistem Informasi
      </h1>
      <div>
        <img src="../assets/perkembangan.png" class="py-24 px-16" />
      </div>
    </div>
    <div class="mx-auto">
      <h1 class="text-4xl text-center mb-12">
        Perkembangan <br />Sistem Operasi Windows
      </h1>
      <div class="flex flex-wrap mx-auto justify-center">
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Ms-Dos (Microsoft Disk Operating System)</h1>
          <p>
            Sistem Operasi yang berbasiskan teks dan Command-Line interpreter.
            Windows Versi pertama,Windows Graphic Environment 1.0 merupakan
            perangkat lunak yang bekerja atas arsitektur 16-Bit dan bukan
            merupakan Sistem Operasi dan berjalan atas MS-DOS, sehingga untuk
            menjalankannya membutuhkan MS-DOS
          </p>
        </div>

        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">
            Microsoft Windows (windows 1.x – windows 3.x)
          </h1>
          <p>
            Microsoft Windows 1.0 merupakan versi pertama sistem operas dalam
            dunia sistem operasi berbasis Graphical User Interface (GUI) yang
            dibuat oleh Microsoft Corporation
          </p>
        </div>

        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Windows 95 – windows ME</h1>
          <p>
            Sistem operasi ini memiliki GUI yang lebih menarik dan atraktif,
            menggunakan rancangan menu "Start", menu inovatif untuk mengakses
            grup program (pengganti Program Manager) mendukung penamaan berkas
            yang panjang.
          </p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Windows 98 - windows SE</h1>
          <p>
            dikeluarkan oleh Microsoft pada 25 Jun 1998. Windows 98 sudah
            mendukung VGA berbasis AGP, serta mendukung media penyimpanan berkas
            seperti USB, diperkenalkannya NAT untuk berbagi koneksi Internet dan
            digantikannya Virtual Device Driver dengan Windows Driver Model.
          </p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Windows NT 3.xx – 4.xx</h1>
          <p>
            Windows NT sebagai pengganti windows ME mendukung arsitekrtur x86
            (80×86), Intel IA64 dan AMD64 (x64) dan grafis 32-Bit. Windows NT
            dibangun dari pengembangan IBM OS/2 dan banyak digunakan dalam
            jaringan komputer. Windows NT juga memperkenalkan File System NTFS
            yang lebih baik dari FAT maupun FAT-32.
          </p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Windows 2000.</h1>
          <p>
            Windows 2000 (atau Windows NT 5.0 build 2159) adalah sebuah versi
            sistem operas Window yang merupakan versi pengembangan dari Windows
            N versi 4.0 yang di dikeluarkan oleh Microsof tanggal 17 Februari
            2000 di Amerika Serikat.
          </p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Windows 2000.</h1>
          <p>
            Windows 2000 (atau Windows NT 5.0 build 2159) adalah sebuah versi
            sistem operas Window yang merupakan versi pengembangan dari Windows
            N versi 4.0 yang di dikeluarkan oleh Microsof tanggal 17 Februari
            2000 di Amerika Serikat.
          </p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Windows XP</h1>
          <p>
            Windows XP menawarkan banyak perubahan, fitur dan performa, berbasis
            grafis digunakan pada komputer pribad, desktop bisnis, lapto, dan
            pusat media. Windows XP pertama kali dirilis pada 25 Oktobe 200, 400
            juta salinan instalasi digunakan pada Januar 200.
          </p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Windows server 2003</h1>
          <p>
            windows server 2003 edisi standar antara lain ialah platform .Net,
            fitur Domain Controller Server, PKI (Public Key Infrastructure)
            Server, Domain Name System (DNS), Dynamic Host Configuration
            Protocol (DHCP), Windows Internet Name Service (WINS), Microsoft
            IIS, Windows Terminal Service, Mendukung pembagian beban jaringa
            Fitur standar sebuah server: file service, print service, atau
            application server yang dapat diinstalasi (seperti Microsoft
            Exchange Server, SQL Server, atau aplikasi lainnya).
          </p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Windows Vista</h1>
          <p>
            Windows Vista diluncurkan 8 November 2000 untuk pengguna bisnis, dan
            30 Januari 2000 untuk pengguna pribadi. Windows Vista lebih
            mengutamakan interface atau penampilan grafis antarmuka dibandingkan
            dengan performa, Fitur-fiturnya antara lain AERO, Sidebar, tingkat
            keamanan lebih baik dari pada Windows XP.
          </p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Windows 7</h1>
          <p>
            Windows 7 merupakan gabungan Windows XP dan Windows Vista, Windows 7
            memiliki performa yang lebih baik dari Windows Vista. Windows 7
            dirilis untuk pabrikan komputer pada 22 Jul 200 dan dirilis untuk
            publik pada 22 Oktobe 200. Windows 7 lebih fokus pada pengembangan
            dasar Windows, dengan tujuan agar lebih kompatibel dengan
            aplikasi-aplikasi dan perangkat keras komputer yang kompatibel
            dengan Windows Vista
          </p>
        </div>
        <div class="bg-purple text-center w-80 p-8 rounded-2xl m-4">
          <h1 class="font-bold">Windows 8</h1>
          <p>
            Windows 8 adalah nama dari versi terbaru Microsoft Window,
            serangkaian Microsoft secara resmi merilis Windows 8 pada 26 Oktober
            2012.
          </p>
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
