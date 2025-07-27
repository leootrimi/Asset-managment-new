import { create } from "zustand";
import { apiRequest } from "../services/ApiCalls";
import { useProjectStore } from "./projectStore";

const useEquipmentStore = create((set) => ({

    equipments: [],
    loading: false,
    error: null,

    fetchEquipments: async () => {
        set({ loading: true});
        try {
            const selectedProject = useProjectStore.getState().selectedProject;
            const response = await apiRequest({
                 endpoint: `/equipments?companyId=${selectedProject._id}`,
                 method: 'GET'
            })
            
            set({ equipments: response, loading: false })
        } catch (error) {
            set({ error: error.message, loading: false})
        }
    }
}))

export default useEquipmentStore;