<template>
  <div class="bg-darkBlue text-white py-12 flex flex-col justify-center">
    <h1 class="text-center text-5xl py-4">Hal yang Perlu Dipersiapkan</h1>
    <div class="flex justify-center py-6 flex-wrap">
        <div class="card bg-purple2 w-1/4 h-80 rounded-3xl text-center flex flex-col items-center mx-auto justify-center px-4">
            <h1 class="font-bold text-4xl pb-4">Dasar-dasar Komputer</h1>
            <p>Pastikan Anda memiliki pemahaman dasar tentang bagaimana komputer berfungsi. Hal ini mencakup konsep seperti perangkat keras, perangkat lunak, jaringan, dan struktur umum komputer.</p>
        </div>

        <div class="card bg-purple2 w-1/4 h-80 rounded-3xl text-center flex flex-col items-center mx-auto justify-center px-4">
            <h1 class="font-bold text-4xl pb-4">Matematika Dasar</h1>
            <p>Beberapa konsep matematika dasar seperti logika, aljabar Boolean, dan pemrograman dapat membantu Anda dalam memahami prinsip-prinsip yang mendasari sistem operasi.</p>
        </div>

        <div class="card bg-purple2 w-1/4 h-80 rounded-3xl text-center flex flex-col items-center mx-auto justify-center px-4">
            <h1 class="font-bold text-4xl pb-4">Lingkungan Pengembangan</h1>
            <p>Anda mungkin perlu menginstal perangkat lunak seperti kompilator, editor kode, atau emulator, tergantung pada apa yang ingin Anda pelajari dalam sistem operasi.</p>
        </div>
    </div>
    <a class="border border-purple2 py-2 w-auto text-center mx-96 hover:bg-purple2 rounded-xl">Cek Kemampuan Awal</a>
  </div>
</template>

<script>
export default {
    name : "PreparationsComponent"
}
</script>
<style>

</style>