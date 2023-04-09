import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('hasilScaner', () => {
  const data = ref(null)
 
  
  return { data }
})
