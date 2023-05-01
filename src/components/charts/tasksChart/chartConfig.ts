import { computed } from "vue";
import { tasksDataStoreModule } from "@/stores/tasksDataStoreModule"
import { inprogressDataStoreModule } from "@/stores/inprogressDataStoreModule"
import { completedDataStoreModule } from "@/stores/completedDataStoreModule"

const tasksDataStore = tasksDataStoreModule()
const inprogressDataStore = inprogressDataStoreModule()
const completedDataStore = completedDataStoreModule()

const tasksDataChart = computed (() => {
  return tasksDataStore.tasks.length
})

const inProgressDataChart = computed (() => {
  return inprogressDataStore.inProgress.length
})

const completedDataChart = computed (() => {
  return completedDataStore.completed.length
})

export const data = {
    labels: ['All Tasks' , 'In Progress Tasks' , 'Completed Tasks'],
    datasets: [
      {
        backgroundColor: ['#E5BEEC','#917FB3','#2A2F4F'],
        data: [tasksDataChart , inProgressDataChart , completedDataChart ] , 
        borderColor: ['#E5BEEC'],
      }
    ] , 
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }