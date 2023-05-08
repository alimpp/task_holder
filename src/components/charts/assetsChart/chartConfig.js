import { computed } from "vue";
import {totalAssetsDataStoreModule} from '@/stores/totalAssetsDataStoreModule'

const totalAssetsDataStore = totalAssetsDataStoreModule()

const totalAssetsDataChart = computed (() => {
  return totalAssetsDataStore.totalAssets.assets
})

const decrementAssetsDataChart = computed (() => {
  return totalAssetsDataStore.decrementAssets.decrementAssets
})


export const data = {
    labels: ['Total Assets' , 'Total Decrement Assets'],
    datasets: [
      {
        backgroundColor: ['#E5BEEC','#E76161'],
        data: [totalAssetsDataChart , decrementAssetsDataChart ] , 
        borderColor: ['#E5BEEC'],
      }
    ] , 
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }