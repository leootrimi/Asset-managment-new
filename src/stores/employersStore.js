import { create } from "zustand";
import { apiRequest } from "../services/ApiCalls";
import { useProjectStore } from "./projectStore";

const useEmployerStore = create((set) => ({

    employers: [],
    loading: false,
    error: null,

    fetchEmployers: async () => {
        set({ loading: true, error: null});
        
        try {
            const selectedProject = useProjectStore.getState().selectedProject;
            const response = await apiRequest({ 
                endpoint: `/users?companyId=${selectedProject._id}`,
            });
            
            set({ employers: response, loading: false})
        } catch (error) {
            set({ error: error.message, loading: false})
        }
    }
}))

export default useEmployerStore;