import { create } from "zustand";
import { apiRequest } from "../services/ApiCalls";

const useEmployerCheckinStore = create((set, get) => ({

    checkinsList: [],
    loading: null,
    error: null,

    fetchUserCheckins: async () => {
        set({ loading: true });
        
        try {
            const response = await apiRequest({ endpoint: '/users-checkin/user', method: 'POST'})
            set({ checkinsList: response, loading: false})
            
            
        } catch (error) {
            set({ loading: false, error: error.message})
        }   
    },

    hasCheckoutTimeInFirstCheckin: () => {
    const { checkinsList } = get();
    
    if (
      checkinsList.length === 0 ||
      !checkinsList[0].checkoutTime ||
      checkinsList[0].checkoutTime === ''
    ) {
      return false;
    }
    return true;
  },

  latestCheckinTime: () => {
    const { checkinsList } = get();
        if (
      checkinsList.length === 0 ||
      !checkinsList[0].checkinTime ||
      checkinsList[0].checkinTime === ''
    ) {
      return 'No checkin time';
    }
    return checkinsList[0].checkinTime;
  },

}))

export default useEmployerCheckinStore