import { apiRequest } from "@/services/ApiCalls"
import { create } from "zustand"

const useEmployerHolidayStore = create((set) => ({
  holidayCapacity: [],
  holidayRequest: [],

  fetchHolidayCapacity: async () => {
    try {
      const response = await apiRequest({
        endpoint: "/holidays/capacity",
        method: "GET",
      })
      set({ holidayCapacity: response })
    } catch (error) {
      console.error("Failed to fetch holiday capacity:", error)
    }
  },

fetchHoldiays: async () =>  {
        try {
      const response = await apiRequest({
        endpoint: "/holidays",
        method: "GET",
      })
      set({ holidayRequest: response })
    } catch (error) {
      console.error("Failed to fetch holiday capacity:", error)
    }
}
}))

export default useEmployerHolidayStore
