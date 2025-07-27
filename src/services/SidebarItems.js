import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  ArrowDownOnSquareStackIcon
} from '@heroicons/react/24/outline'
import { PalmtreeIcon } from 'lucide-react'

export const admingNavigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Team', href: '/employers', icon: UsersIcon, current: false },
  { name: 'Equipments', href: '/equipment', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '/events', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '/documents', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon, current: false },
  { name: 'Requests', href: '/requests', icon: ArrowDownOnSquareStackIcon, current: false },
  { name: 'Holiday Requests', href: '/request/manage', icon: PalmtreeIcon, current: false },
]

export const employerNavigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Team', href: '/employers', icon: UsersIcon, current: false },
  { name: 'Equipments', href: '/equipment', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '/events', icon: CalendarIcon, current: false },
  { name: 'Request for an Item', href: '/requests-items', icon: ArrowDownOnSquareStackIcon, current: false },
  { name: 'Get a Day off', href: '/requests-day', icon: PalmtreeIcon, current: false },
]