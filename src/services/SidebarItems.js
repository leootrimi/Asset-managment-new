import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  UserIcon,
  ArrowDownOnSquareStackIcon
} from '@heroicons/react/24/outline'
import { ArchiveRestore } from 'lucide-react'

export const admingNavigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Employers', href: '/employers', icon: UserIcon, current: false },
  { name: 'Teams', href: '/teams', icon: UsersIcon, current: false },
  { name: 'Equipments', href: '/equipment', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '/events', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '/documents', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon, current: false },
  { name: 'Item Request', href: '/requests-items', icon: ArrowDownOnSquareStackIcon, current: false },
  { name: 'Requests', href: '/request/manage', icon: ArchiveRestore, current: false },
]

export const employerNavigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Employers', href: '/employers', icon: UserIcon, current: false },
  { name: 'Teams', href: '/teams', icon: UsersIcon, current: false },
  { name: 'Equipments', href: '/equipment', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '/events', icon: CalendarIcon, current: false },
  { name: 'Item Request', href: '/requests-items', icon: ArrowDownOnSquareStackIcon, current: false },
  { name: 'Holidays Request', href: '/timeoff', icon: ArchiveRestore, current: false },
]