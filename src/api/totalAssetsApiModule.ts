import axios from 'axios'
import { application_base_url , application_path } from '@/services/applicationPath'
import { ErrorNotification , SuccessNotification } from '@/services/applicationNotification'
import { totalAssetsDataStoreModule } from '@/stores/totalAssetsDataStoreModule'

const totalAssetsDataStore = totalAssetsDataStoreModule()

export const TotalAssets = async () => {
    await axios.get(`${application_base_url}${application_path.GET.TOTAL_ASSETS}`)
    .then((res) => {
        totalAssetsDataStore.totalAssets = res.data
    })
    .catch((error) => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','top-right')
    })
}

export const AddAssets = async (money: any) => {
   await axios.put(`${application_base_url}${application_path.POST.ADD_ASSETS}` , {
     assets : money
   }) 
   .then(() => {
        SuccessNotification(3000 , `${money} Has Been Added To Your Assets ` , 'top-right')
    })
    .catch(() => {
        ErrorNotification(5000,'Conection has error and low service please try again...!','btop-right')
    })
}
