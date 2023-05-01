import { defineStore } from "pinia";

export const completedDataStoreModule = defineStore("completedstore", {
  state: () => ({ completed: [] }),
  getters: {},
  actions: {},
});