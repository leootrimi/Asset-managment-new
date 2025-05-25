import { create } from "zustand";
import { apiRequest } from "../services/ApiCalls";
import {
  ArrowRightEndOnRectangleIcon,
  ArrowLeftEndOnRectangleIcon,
  HomeIcon,
  HeartIcon
} from '@heroicons/react/20/solid'

const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
]

const eventTypes = {
  leave: { icon: ArrowRightEndOnRectangleIcon, bgColorClass: 'bg-red-500' },
  join: { icon: ArrowLeftEndOnRectangleIcon, bgColorClass: 'bg-green-500' },
  home: { icon: HomeIcon, bgColorClass: 'bg-blue-500' },
  sick: { icon: HeartIcon, bgColorClass: 'bg-orange-500' }
}
const timeline = [
  {
    id: 2,
    type: eventTypes.leave,
    content: 'Left office at ',
    target: 'Bethany Blake',
    date: 'Sep 22',
    datetime: '2020-09-22',
  },
  {
    id: 3,
    type: eventTypes.join,
    content: 'Joined office at',
    target: 'Martha Gardner',
    date: 'Sep 28',
    datetime: '2020-09-28',
  },
  {
    id: 4,
    type: eventTypes.sick,
    content: 'Called out sick ',
    target: 'Bethany Blake',
    date: 'Sep 30',
    datetime: '2020-09-30',
  },
  {
    id: 5,
    type: eventTypes.home,
    content: 'Working from home ',
    target: 'Katherine Snyder',
    date: 'Oct 4',
    datetime: '2020-10-04',
  },
]

const useEmployerProfileStore = create((set) => ({

    employerProfile: null,
    updatedProfile: null,
    comments: comments,
    timeline: timeline,
    loading: false,
    error: null,

    fetchEmployerProfile: async (id) => {
        set({ loading: true });
        try {
            const response = await apiRequest({ endpoint: `/users/${id}` })
            
            set({ employerProfile: response, loading: false,
                updatedProfile: {
                    position: response.position || "",
                    level: response.level || "",
                    email: response.email || "",
                    salary: response.salary || "",
                    country: response.country || "",
                    city: response.city || "",
                    phoneNumber: response.phoneNumber || "",
                    }
            })
        } catch (error) {
             set({ loading: false, error: error.message })
        }
    },

    deleteEmployer: (id) => {
        set({ loading: true})
        try {
             const response = apiRequest({ endpoint: '/users', method: 'DELETE', body: { _id: id } })
        } catch (error) {
            set({ error: error.message})
        } finally {
            set({ loading: false})
        }
    },

      setUpdatedUserData: (data) => set((state) => ({
        updatedProfile: {
        ...state.updatedProfile,
        ...data
        }        
  })),

  resetUpdatedProfile: (data) => set({ updatedProfile: data }),
}))

export default useEmployerProfileStore;