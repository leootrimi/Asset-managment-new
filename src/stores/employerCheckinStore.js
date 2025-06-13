import { create } from "zustand";
import { apiRequest } from "../services/ApiCalls";

const useEmployerCheckinStore = create((set) => ({

    checkinsList: [],
    loading: null,
    error: null,

    fetchUserCheckins: async (user) => {
        set({ loading: true });
        
        try {
            const response = await apiRequest({ endpoint: '/users-checkin/user', method: 'POST', body: user})
            set({ checkinsList: response, loading: false})
            console.log(response);
            
        } catch (error) {
            set({ loading: false, error: error.message})
            console.log(error.message);
        }   
    }
}))

export default useEmployerCheckinStore