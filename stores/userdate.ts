import { defineStore } from "pinia";

interface userdate {
  email: string;
  user: string;
  password: number;
}

export const useDateStore = defineStore({
  id: "userdates",
  state: () => ({
    userdates: [] as userdate[],
    userdate: {} as userdate,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    getUserDates: (state) => state.UserDates,
    getUserDate: (state) => state.UserDate,
  },
  actions: {
    async fetchUserDates() {
      const Userdates = await $fetch("/api/Userdates");
      this.Userdates = Userdates;
    },    
  },
});