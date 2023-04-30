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
        ErrorNotification(5000,'Conection has error and low service please try again...!','bottom-center')
    })
}

export const CreateTask = async (task: ITasks) => {
   await axios.post(`${application_base_url}${application_path.POST.CREATE_TASK}` , {
        name : task.name , 
        description : task.description
    }) 
   .then(() => {
        SuccessNotification(5000 , 'New task created' , 'bottom-center')
    })
    .catch(() => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','bottom-center')
    })
}