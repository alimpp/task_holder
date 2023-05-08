import { defineStore } from "pinia";
import { ITotalAssets } from "@/services/IInterface";

export const totalAssetsDataStoreModule = defineStore("totalassetsstore", {
  state: () => ({ 
    totalAssets: [] as ITotalAssets[] , 
    decrementAssets :[] , 
    decrementLists : [] ,
  }),
});