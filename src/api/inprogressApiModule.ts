import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import { ErrorNotification , SuccessNotification } from '@/services/applicationNotification'
import { inprogressDataStoreModule } from '@/stores/inprogressDataStoreModule'

const inprogressDataStore = inprogressDataStoreModule()

export const AllInProgress = async () => {
    await axios.get(`${application_base_url}${application_path.GET.ALL_IN_PROGRESS}`)
    .then((res) => {
        inprogressDataStore.inProgress = res.data
    })
    .catch((error) => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','bottom-center')
    })
}

export const AddToInProgress = async (task: any) => {
   await axios.post(`${application_base_url}${application_path.POST.ADD_TO_IN_PROGRESS}` , {
        name : task.name , 
        description : task.description
    }) 
   .then(() => {
        SuccessNotification(3000 , 'Task Add To In Progress Level...' , 'bottom-center')
    })
    .catch(() => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','bottom-center')
    })
}

export const DeleteTask = async (id: number) => {
    await axios.delete(`${application_base_url}${application_path.DELETE.DELETE_TASK}/${id}`) 
    .then(() => {
         SuccessNotification(3000 , 'Task Deleted' , 'bottom-center')
     })
     .catch(() => {
         ErrorNotification(5000,'Conection has error and low service please try again...!','bottom-center')
     })
 }