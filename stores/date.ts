import { defineStore } from "pinia";

interface Date {
    id: number;
    title: string;
    description: string;
}

export const useDateStore = defineStore({
    id: "date",
    state: () => ({
        dates: [] as Date[],
        date: {} as Date,
    }),
    persist: {
        storage: persistedState.localStorage,
    },
}

)