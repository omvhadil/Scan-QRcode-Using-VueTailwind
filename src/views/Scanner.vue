<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { QrStream } from 'vue3-qr-reader'
import { useCounterStore } from '../stores/counter'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()
const data = reactive({
  flesh: false
})

function onDecode(data) {
  router.push('/hasil')
  useCounterStore.data = data
}
</script>

<template>
  <header class="header w-full bg-blue-500">
    <div class="container flex justify-between h-[3.5rem] items-center text-white text-lg">
      <div class="back text-2xl" @click="router.back">
        <i class="ri-arrow-left-line"></i>
      </div>
      <div class="title">
        <p>Scan QR Code</p>
      </div>
      <div class="icon text-2xl">
        <i class="ri-qr-scan-2-line"></i>
      </div>
    </div>
  </header>
  <div class="h-[100vh] bg-blue-500 flex flex-col justify-center px-4">
    <div class="h-[400px] max-w-[400px] rounded-lg overflow-hidden relative">
      <qr-stream @decode="onDecode" class="frame" :torch="data.flesh">
        <div style="color: red" class="frame line_frame w-full h-[2px] bg-red-600"></div>
      </qr-stream>
    </div>
    <div class="text-center mt-4">
      <h6 class="text_scan text-white text-xl font-semibold">QR CODE SCANNING...</h6>
      <button @click="data.flesh = !data.flesh" class="py-2 px-4 text-white text-2xl mt-16">
        <i :class="data.flesh ? 'ri-flashlight-fill' : 'ri-flashlight-line'"></i>
        <p class="text-base">flesh</p>
      </button>
    </div>
  </div>
</template>
