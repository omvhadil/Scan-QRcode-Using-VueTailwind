<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { QrStream } from 'vue3-qr-reader'
import { useCounterStore } from '../stores/counter'
import { useRouter } from 'vue-router'

const router = useRouter()

function onDecode(data) {
  router.push('/')
  useCounterStore.data = data
}
</script>

<template>
  <div class="h-[100vh] bg-black flex items-center justify-center">
    <div class="">
      <qr-stream @decode="onDecode" class="frame">
        <div style="color: red" class=""></div>
      </qr-stream>
      <h6 class="text-red-500 text-center mt-2">Silahkan Scan QRcode</h6>
    </div>
  </div>
</template>
