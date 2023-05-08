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

export const AddToDecrement = async (money: any) => {
   await axios.put(`${application_base_url}${application_path.PUT.ADD_TO_DECREMENT}` , {
        decrementAssets : money
    }) 
   .then(() => {
        SuccessNotification(3000 , 'Decrement Assets Updated...' , 'top-right')
    })
    .catch(() => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','btop-right')
    })
}

export const DecrementLists = async () => {
    await axios.get(`${application_base_url}${application_path.GET.DECREMENT_LISTS}`)
    .then((res) => {
        totalAssetsDataStore.decrementLists = res.data
    })
    .catch((error) => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','top-right')
    })
}

export const AddToDecrementList = async (item : any) => {
   await axios.post(`${application_base_url}${application_path.POST.ADD_TO_DECREMENT_LISTS}` , {
     price : item.money , 
     title : item.title 
   })
   .then(() => {
        SuccessNotification(3000 , 'Decrement Lists Updated...' , 'top-right')
    })
    .catch(() => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','btop-right')
    })
}