import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import { ErrorNotification , SuccessNotification } from '@/services/applicationNotification'
import { completedDataStoreModule } from '@/stores/completedDataStoreModule'

const completedDataStore = completedDataStoreModule()

export const AllCompleted = async () => {
    await axios.get(`${application_base_url}${application_path.GET.ALL_COMPLETED}`)
    .then((res) => {
        completedDataStore.completed = res.data
    })
    .catch((error) => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','top-right')
    })
}

export const AddToCompleted = async (task: any) => {
   await axios.post(`${application_base_url}${application_path.POST.ADD_TO_COMPLETED}` , {
        name : task.name , 
        description : task.description
    }) 
   .then(() => {
        SuccessNotification(3000 , 'Task Add To Completed Level...' , 'top-right')
    })
    .catch(() => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','btop-right')
    })
}

export const DeleteCompleted = async (id: number) => {
    await axios.delete(`${application_base_url}${application_path.DELETE.DELETE_COMPLETED}/${id}`) 
    .then(() => {
         SuccessNotification(3000 , 'One Item Deleted From Completed Level' , 'top-right')
     })
     .catch(() => {
         ErrorNotification(5000,'Conection has error and low service please try again...!','top-right')
     })
 }