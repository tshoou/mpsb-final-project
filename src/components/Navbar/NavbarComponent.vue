<template>
  <nav class="bg-darkBlue py-2 flex justify-between px-6">
    <h1 class="text-2xl text-white">Logo</h1>
    <div class="text-white">
      <router-link to="/home" class="px-4">Peta Konsep</router-link>
      <a class="px-4">Learning Journey</a>
      <a class="px-4">Challenge</a>
    </div>
  </nav>
</template>

<script>
export default {
    name: "NavbarComponent"
}
</script>

<style>

</style>