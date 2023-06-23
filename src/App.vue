<template>
  <div class="bg-blue-500">
    <nav
      class="relative px-4 py-4 flex justify-between items-center bg-darkBlue py-8"
    >
      <!-- <a class="text-3xl font-bold leading-none" href="#">
        <svg class="h-10" alt="logo" viewBox="0 0 100 100">
          <path
            d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"
          ></path>
        </svg>
      </a> -->
      <div class="lg:hidden">
        <button class="navbar-burger flex items-center text-blue-600 p-3">
          <svg
            class="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              class="bg-white text-white"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
      >
        <li>
          <router-link to="/" class="text-sm text-blue-600 font-bold"
            >Home</router-link
          >
        </li>

        <li>
          <router-link to="/petaView" class="text-sm text-blue-600 font-bold"
            >Peta Konsep</router-link
          >
        </li>
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
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-purple rounded-lg shadow w-44 dark:bg-purple"
        >
          <ul
            class="py-2 text-sm text-purple dark:text-white"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <router-link
                to="/sistem-operasi"
                class="block px-4 py-2 text-white hover:bg-purple2 dark:hover:bg-purple2 dark:hover:text-white"
                >Materi 1: Sistem Operasi
              </router-link>
            </li>
            <li>
              <router-link
                to="/Arsitektur"
                class="block px-4 py-2 text-white hover:bg-purple2 dark:hover:bg-purple2 dark:hover:text-white"
                >Materi 2 : Arsitektur Sistem Operasi 
              </router-link>
            </li>
          </ul>
        </div>
        <li>
          <router-link to="/Challenge" class="text-sm text-blue-600 font-bold"
            >Challenge</router-link
          >
        </li>
      </ul>
    </nav>
    <div class="navbar-menu relative z-50 hidden">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-darkBlue overflow-y-auto"
      >
        <div class="flex items-center mb-8">
          <a class="mr-auto text-3xl font-bold leading-none" href="#">
            <!-- <svg class="h-12 bg-white" alt="logo" viewBox="0 0 100 100">
              <path
                d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"
              ></path>
            </svg> -->
          </a>
          <button class="navbar-close">
            <svg
              class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <router-link
                class="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="mb-1">
              <router-link
                class="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/petaView"
                >Peta Konsep</router-link
              >
            </li>
            <li class="mb-1">
              <router-link
                class="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/sistem-operasi"
                >Materi 1 : Sistem Operasi</router-link
              >
            </li>
            <li class="mb-1">
              <router-link
                class="block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/Arsitektur"
                >Materi 2 : Sistem Operasi Windows</router-link
              >
            </li>
            <li class="mb-1">
              <router-link
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                to="/Challenge"
                >Challenge</router-link
              >
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <p class="my-4 text-xs text-center text-gray-400">
            <span>Copyright © 2023</span>
          </p>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>
<script>
// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (var a = 0; a < close.length; a++) {
      close[a].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (var b = 0; b < backdrop.length; b++) {
      backdrop[b].addEventListener("click", function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});
</script>
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
