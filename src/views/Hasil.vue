<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from 'vue-router'
import { useCounterStore } from '../stores/counter'

const router = useRouter()
</script>
<template>
  <header class="header w-full bg-blue-500">
    <div class="container flex justify-between h-[3.5rem] items-center text-white text-lg">
      <div class="back text-2xl" @click="router.push('/')">
        <i class="ri-arrow-left-line"></i>
      </div>
      <div class="title">
        <p>Hasil Scan QR Code</p>
      </div>
      <div class="icon text-2xl">
        <i class="ri-qr-scan-2-line"></i>
      </div>
    </div>
  </header>
  <div class="container h-[70vh] p-6">
    <p>{{ useCounterStore.data }}</p>
  </div>
  <button
    @click="router.push('/scan')"
    class="block mx-auto py-4 px-8 border-2 border-blue-500 rounded-lg text-blue-500"
  >
    Scan QR Code Lagi
  </button>
</template>
