<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router'
import { useCounterStore } from '../stores/counter'
</script>
<template>
  <div class="container h-[100vh] mx-auto flex items-center justify-center">
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
  </div>
</template>

<style scoped></style>
