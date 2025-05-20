import { create } from "zustand";
import { apiRequest } from "../services/ApiCalls";

const useEmployerStore = create((set) => ({

    employers: [],
    loading: false,
    error: null,

    fetchEmployers: async () => {
        set({ loading: true, error: null});
        try {
            const response = await apiRequest({ endpoint: '/users'});
            set({ employers: response, loading: false})
        } catch (err) {
            set({ error: err.message, loading: false})
        }
    }
}))

export default useEmployerStore;