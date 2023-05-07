import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import { ErrorNotification , SuccessNotification } from '@/services/applicationNotification'
import { totalAssetsDataStoreModule } from '@/stores/totalAssetsDataStoreModule'

const totalAssetsDataStore = totalAssetsDataStoreModule()

export const DecrementAssets = async () => {
    await axios.get(`${application_base_url}${application_path.GET.DECREMENT_ASSETS}`)
    .then((res) => {
        totalAssetsDataStore.decrementAssets = res.data
    })
    .catch((error) => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','top-right')
    })
}

// export const AddToCompleted = async (task: any) => {
//    await axios.post(`${application_base_url}${application_path.POST.ADD_TO_COMPLETED}` , {
//         name : task.name , 
//         description : task.description
//     }) 
//    .then(() => {
//         SuccessNotification(3000 , 'Task Add To Completed Level...' , 'top-right')
//     })
//     .catch(() => {
//         ErrorNotification(5000,'Conection has error and low service please try again...!','btop-right')
//     })
// }
