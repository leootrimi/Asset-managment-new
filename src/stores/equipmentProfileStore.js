import { create } from "zustand";
import { apiRequest } from "../services/ApiCalls";

const useEquipmentProfileStore = create((set) => ({

    equipment: null,
    users: null,
    loading: false,
    error: null,
    selectedUser: null,
    setSelectedUser: (user) => set({ selectedUser: user }),
    alert: { show: false, type: "", title: "", message: "" },

    fetchEquipmentProfile: async (id) => {
        set({ loading: true })
        try {
            const response = await apiRequest({ endpoint: `/equipments/${id}` });
            const users = await apiRequest({ endpoint: '/users' });
            set({ equipment: response, users: users, loading: false })
        } catch (error) {
            set({ error: true, loading: false})
        }
    },

    saveUpdatedProfile: async (id) => {
        const state = useEquipmentProfileStore.getState();
        const selectedUser = state.selectedUser;
 
        
        set({ loading: true, updateSuccess: false });
        try {
        const response = await apiRequest({
            endpoint: `/equipments/${id}`,
            method: "PUT",
            body: selectedUser,
        });

        set((state) => ({
            equipment: {
            ...state.equipment,
            assignedTo: selectedUser,
            },
            alert: {
            show: true,
            type: "success",
            title: "User Updated",
            message: "You successfully updated user details",
            },
            loading: false,
        }));
        } catch (err) {
        set({
            alert: {
            show: true,
            type: "error",
            title: "Please try again later",
            message: "An error occurred while trying to process the request",
            },
            loading: false,
        });
        } finally {
        setTimeout(() => {
            set({ alert: { show: false } });
        }, 2000);
        }
  },

}))

export default useEquipmentProfileStore;