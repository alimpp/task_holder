import { defineStore } from "pinia";
import { ITasks } from "@/services/IInterface";

export const tasksDataStoreModule = defineStore("taskstore", {
  state: () => ({ tasks: [] as ITasks[] }),
  getters: {},
  actions: {},
});