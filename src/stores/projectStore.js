import { create } from "zustand";
import { persist } from 'zustand/middleware'
import { apiRequest } from "../services/ApiCalls";

export const useProjectStore = create(persist(
  (set) => ({
    projects: [],
    loading: false,
    error: null,
    selectedProject: null,
    setSelectedProject: (project) => set({ selectedProject: project }),

    fetchProjects: async (ownerId) => {
        set({ loading: true, error: null});
        try {
            const response = await apiRequest({ endpoint: `/projects/owner?ownerId=${ownerId}`});
            set({ projects: response, loading: false})
        } catch (err) {
            set({ error: err.message, loading: false})
        }
    }
  }),
  { name: 'selected-project' }
)); 