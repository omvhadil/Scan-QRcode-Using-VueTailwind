<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
// import { useCounterStore } from '../stores/counter'
</script>
<template>
  <div class="h-[100vh] w-full pl-6 pr-6">
    <div class="home_content mt-16 bg-gray-300 p-3 text-center rounded-md mb-32">
      <h5 class="text-xl font-bold mb-2">Scan QR Code</h5>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro doloribus, adipisci earum
        tempore.
      </p>
    </div>
    <div class="home_image w-[70%] mx-auto mb-32">
      <img src="../assets/home-image.png" style="width: 100%; height: auto" />
    </div>
    <RouterLink to="/scan">
      <button class="block mx-auto px-12 py-4 rounded-full bg-blue-500 text-white font-bold">
        SCAN
      </button>
    </RouterLink>
  </div>
  <!-- <div class="h-[100vh] pl-6 pr-6">
    <div class="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-teal-500">Scan Now</h1>
      <RouterLink to="/scan">
        <button class="bg-teal-700 py-2 px-5 rounded-md text-white block mt-4 hover:bg-teal-800">
          Scan QRcode
        </button>
      </RouterLink>
      <div>
        <div class="block text-center mt-4 border-2 border-teal-700 rounded-lg w-[300px] h-32">
          <h1 class="font-bold underline">Hasil</h1>
          <span>{{ useCounterStore.data }}</span>
        </div>
      </div>
    </div>
    <p class="absolute bottom-4 text-gray-500">
      from <span class="font-bold text-teal-500">Alabim</span>
    </p>
  </div> -->
</template>

<style scoped></style>
