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
  router.push('/')
  useCounterStore.data = data
}
</script>

<template>
  <div class="h-[100vh] bg-black flex items-center">
    <div class="h-[400px] w-[400px]">
      <qr-stream @decode="onDecode" class="frame" :torch="data.flesh">
        <div style="color: red" class="frame"></div>
      </qr-stream>
      <div class="text-center mt-4">
        <h6 class="text-teal-500">Silahkan Scan QRcode</h6>
        <button @click="data.flesh = !data.flesh" class="py-2 px-4 text-white text-2xl mt-4">
          <i :class="data.flesh ? 'ri-flashlight-fill' : 'ri-flashlight-line'"></i>
        </button>
      </div>
    </div>
  </div>
</template>
