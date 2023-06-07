<template>
<div>
    <nav class="bg-darkBlue py-2 flex justify-between px-6">
    <h1 class="text-2xl text-white">Logo</h1>
    <div class="text-white">
      <router-link to="/" class="px-4">Home</router-link>
      <router-link to="/petaView" class="px-4">Peta Konsep</router-link>
      <!-- <router-link to="/" class="px-4">Learning Journey</router-link> -->
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Learning Journey
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <!-- Dropdown menu -->
      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-purple rounded-lg shadow w-44 dark:bg-purple"
      >
        <ul
          class="py-2 text-sm text-purple dark:text-white"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <router-link to="/sistem-operasi"  href="#"
              class="block px-4 py-2 text-white hover:bg-purple2 dark:hover:bg-purple2 dark:hover:text-white">Materi 1: Sistem Operasi
            </router-link>
          </li>
          <li>
            <router-link to="/petaView"  href="#"
              class="block px-4 py-2 text-white hover:bg-purple2 dark:hover:bg-purple2 dark:hover:text-white">Materi 2
            </router-link>
            
          </li>
        </ul>
      </div>

      <router-link to="/" class="px-4">Challenge</router-link>
    </div>
  </nav>
  <router-view />
</div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  /* font-weight: bold; */
  color: #645cbb;
}

nav a.router-link-exact-active {
  color: #ffff;
}
</style>
