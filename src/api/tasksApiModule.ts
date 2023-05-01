import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import { ErrorNotification , SuccessNotification } from '@/services/applicationNotification'
import { tasksDataStoreModule } from '@/stores/tasksDataStoreModule'
import { ITasks } from '@/services/IInterface'

const tasksDataStore = tasksDataStoreModule()

export const AllTasks = async () => {
    await axios.get(`${application_base_url}${application_path.GET.ALL_TASKS}`)
    .then((res) => {
       tasksDataStore.tasks = res.data
    })
    .catch((error) => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','top-right')
    })
}

export const CreateTask = async (task: ITasks) => {
   await axios.post(`${application_base_url}${application_path.POST.CREATE_TASK}` , {
        name : task.name , 
        description : task.description
    }) 
   .then(() => {
        SuccessNotification(3000 , 'New Task Created' , 'top-right')
    })
    .catch(() => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','top-right')
    })
}

export const DeleteTask = async (id: number) => {
    await axios.delete(`${application_base_url}${application_path.DELETE.DELETE_TASK}/${id}`) 
    .then(() => {
         SuccessNotification(3000 , 'Task Deleted' , 'top-right')
     })
     .catch(() => {
         ErrorNotification(5000,'Conection has error and low service please try again...!','top-right')
     })
 }

 export const RemoveTask = async (id: number) => {
    await axios.delete(`${application_base_url}${application_path.DELETE.DELETE_TASK}/${id}`) 
    .then(() => {})
     .catch(() => {
         ErrorNotification(5000,'Conection has error and low service please try again...!','top-right')
     })
 }

 export const EditTask = async (task: ITasks , id: number) => {
    await axios.put(`${application_base_url}${application_path.PUT.EDIT_TASKS}/${id}` , {
         id : id ,
         name : task.name , 
         description : task.description
     }) 
    .then(() => {
         SuccessNotification(3000 , 'Task Edited' , 'top-right')
     })
     .catch(() => {
         ErrorNotification(5000,'Conection has error and low service please try again...!','top-right')
     })
 }
 