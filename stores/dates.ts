import { defineStore } from "pinia";

interface date {
  email: number;
  user: string;
  password: string;
}

export const useDateStore = defineStore({
  id: "dates",
  state: () => ({
    dates: [] as Date[],
    date: {} as Date,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    getDates: (state) => state.Dates,
    getDate: (state) => state.Date,
  },
  actions: {
    async fetchDates() {
      const dates = await $fetch("/api/dates");
      this.dates = dates;
    },    
  },
});