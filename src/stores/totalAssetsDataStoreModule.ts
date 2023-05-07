import { defineStore } from "pinia";

export const totalAssetsDataStoreModule = defineStore("totalassetsstore", {
  state: () => ({ 
    totalAssets: [] , 
    decrementAssets : [] 
  }),
});