'use client'

import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import {
  CalendarDaysIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  CheckIcon,
  XMarkIcon as XMarkIconMini,
} from '@heroicons/react/20/solid'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { apiRequest } from '../../services/ApiCalls'
import Alert from '../../Core/Alerts';

const invoice = {
  subTotal: '$8,800.00',
  tax: '$1,760.00',
  total: '$10,560.00',
  items: [
    {
      id: 1,
      title: 'Logo redesign',
      description: 'New logo and digital asset playbook.',
      hours: '20.0',
      rate: '$100.00',
      price: '$2,000.00',
    },
    {
      id: 2,
      title: 'Website redesign',
      description: 'Design and program new company website.',
      hours: '52.0',
      rate: '$100.00',
      price: '$5,200.00',
    },
    {
      id: 3,
      title: 'Business cards',
      description: 'Design and production of 3.5" x 2.0" business cards.',
      hours: '12.0',
      rate: '$100.00',
      price: '$1,200.00',
    },
    {
      id: 4,
      title: 'T-shirt design',
      description: 'Three t-shirt design concepts.',
      hours: '4.0',
      rate: '$100.00',
      price: '$400.00',
    },
  ],
}

const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIconMini, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function getStatusClasses(status) {
  const map = {
    'Available': 'bg-green-50 text-green-600 ring-green-600/20',
    'Already in use': 'bg-yellow-50 text-yellow-600 ring-yellow-600/20',
  };
  return map[status] || map['Already in use'];
}


function isEquipmentAssigned(employer) {
  if (!employer) {
    return "Not Assigned"
  } else {
    return employer
  }
}


function equipmentStatus(employer) {
  if (!employer) {
    return "Available"
  } else {
    return 'Already in use'
  }
}

function formatDate(date) {
  const isoDate = new Date(date);
  return isoDate.toLocaleDateString();
}



export default function EquipmentProfile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selected, setSelected] = useState(moods[5])
  const [equipmentsProfile, setEquipmentsProfile] = useState();
  const [updatedProfile, setUpdatedProfile] = useState();
  const [updateEnabled, setUpdateEnabled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [users, setUsers] = useState([])
  const [alert, setAlert] = useState({ show: false, type: '', title: '', message: '' })
  const { id } = useParams()

  useEffect(() => {
    console.log(alert);
    
    async function fetchEquipmentsProfile() {
      try {
        const [equipmentResponse, employersResponse] = await Promise.all([
          apiRequest({ endpoint: `/equipments/${id}` }),
          apiRequest({ endpoint: '/users' }),
        ]);
        setEquipmentsProfile(equipmentResponse);
        setUpdatedProfile(equipmentResponse);
        setUsers(employersResponse);
        console.log(employersResponse);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEquipmentsProfile()
  }, [])

  function editProfileButton() {
    setUpdateEnabled(!updateEnabled)
  }
  
  async function saveUpdatedProfile() {
    try {
      const response = await apiRequest({ endpoint: `/equipments/${id}`, method: 'PUT', body: selectedUser })
      setEquipmentsProfile( prev => ({
        ...prev,
        assignedTo: selectedUser
      }))
      setAlert({
        show: true,
        type: 'success',
        title: 'User Updated',
        message: 'You successfully updated user details',
      })
      setUpdateEnabled(!updateEnabled)
    } catch (err) {
      setAlert({
        show: true,
        type: 'error',
        title: 'Please try again later',
        message: 'An error ocurred while trying to process the request',
      })
      setUpdateEnabled(!updateEnabled)
    } finally {
      setTimeout(() => {
        setAlert({
          show: false
        })
      }, 2000)
    }
  }

  const filteredUsers = (users || []).filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {alert.show && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          show={alert.show}
        />
      )}
      <main>
        <header className="relative isolate pt-5">
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
              <div
                style={{
                  clipPath:
                    'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                }}
                className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#3483eb] to-[##3483eb]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
          </div>

          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/48x48/tuple.svg"
                  className="size-16 flex-none rounded-full ring-1 ring-gray-900/10"
                />
                <h1>
                  <div className="text-sm/6 text-gray-500">
                    Tag <span className="text-gray-700">#{equipmentsProfile?.tag}</span>
                  </div>
                  <div className="mt-1 text-base font-semibold text-gray-900">{equipmentsProfile?.name}</div>
                </h1>
              </div>
              <div className="flex items-center gap-x-4 sm:gap-x-6">
                <button onClick={editProfileButton} className="hidden text-sm/6 font-semibold text-gray-900 sm:block">
                  Edit
                </button>
                {updateEnabled &&
                  <a
                    onClick={saveUpdatedProfile}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </a>
                }


                <Menu as="div" className="relative sm:hidden">
                  <MenuButton className="-m-3 block p-3">
                    <span className="sr-only">More</span>
                    <EllipsisVerticalIcon aria-hidden="true" className="size-5 text-gray-500" />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <button
                        type="button"
                        className="block w-full px-3 py-1 text-left text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                      >
                        Copy URL
                      </button>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                      >
                        Edit
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Invoice summary */}
            <div className="lg:col-start-3 lg:row-end-1">
              <h2 className="sr-only">Summary</h2>
              <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                <dl className="flex flex-wrap">
                  <div className="flex-auto pl-6 pt-6">
                    <dt className="text-sm/6 font-semibold text-gray-900">Amount</dt>
                    <dd className="mt-1 text-base font-semibold text-gray-900">${equipmentsProfile?.price}</dd>
                  </div>
                  <div className="flex-none self-end px-6 pt-4">
                    <dt className="sr-only">Status</dt>

                    <dd className={`rounded-md px-2 py-1.5 text-xs font-medium ring-1 ring-inset ${equipmentsProfile?.assignedTo?.fullName
                      ? getStatusClasses(equipmentStatus(equipmentsProfile.assignedTo.fullName))
                      : getStatusClasses(equipmentStatus(undefined))
                      }`}>
                      {equipmentsProfile?.assignedTo?.fullName
                        ? equipmentStatus(equipmentsProfile.assignedTo.fullName)
                        : equipmentStatus(undefined)
                      }
                    </dd>


                  </div>
                  <div className="mt-6 flex w-full flex-none text-center gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                    <dt className="flex-none">
                      <span className="sr-only">Client</span>
                      <UserCircleIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    {updateEnabled ? (
                      <Listbox value={selectedUser} onChange={(user) => { setSelectedUser(user) }}>
                        <div className="relative">
                          <ListboxButton className="grid min-w-[250px] w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                            <span className="col-start-1 row-start-1 truncate pr-6">
                              {selectedUser?.fullName || 'Select a user'}
                            </span>
                            <ChevronUpDownIcon
                              aria-hidden="true"
                              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                          </ListboxButton>

                          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {users.map((user) => (
                              <ListboxOption
                                key={user._id}
                                value={{ id: user._id, fullName: `${user.firstName} ${user.lastName}` }}
                                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none flex"
                              >
                                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                  {`${user.firstName} ${user.lastName}`}
                                </span>

                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                  <CheckIcon aria-hidden="true" className="size-5" />
                                </span>
                              </ListboxOption>
                            ))}
                          </ListboxOptions>
                        </div>
                      </Listbox>
                    ) : (
                      <dd className="text-sm/6 font-medium text-gray-900">
                        {equipmentsProfile?.assignedTo?.fullName
                          ? isEquipmentAssigned(equipmentsProfile.assignedTo.fullName)
                          : isEquipmentAssigned('')}
                      </dd>
                    )}

                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Due date</span>
                      <CalendarDaysIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm/6 text-gray-500">
                      <time dateTime="2023-01-31">{equipmentsProfile?.assignedDate}</time>
                    </dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Status</span>
                      <CreditCardIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm/6 text-gray-500">Paid with MasterCard</dd>
                  </div>
                </dl>
                <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Download receipt <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Invoice */}
            <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
              <h2 className="text-base font-semibold text-gray-900">Equipment Details</h2>
              <dl className="mt-6 grid grid-cols-1 text-sm/6 sm:grid-cols-2">
                <div className="sm:pr-4">
                  <dt className="inline text-gray-500">Issued on</dt>{' '}
                  <dd className="inline text-gray-700">
                    <time dateTime={equipmentsProfile?.createdAt}>
                      {equipmentsProfile?.createdAt ? new Date(equipmentsProfile.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }) : 'No date available'}
                    </time>

                  </dd>
                </div>
                <div className="mt-2 sm:mt-0 sm:pl-4">
                  <dt className="inline text-gray-500">Due on</dt>{' '}
                  <dd className="inline text-gray-700">
                    <time dateTime={equipmentsProfile?.updatedAt}>
                      {equipmentsProfile?.createdAt ? new Date(equipmentsProfile.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }) : 'No date available'}
                    </time>
                  </dd>
                </div>
                <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
                  <dt className="font-semibold text-gray-900">Bought in</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">Acme, Inc.</span>
                    <br />
                    7363 Gjirafa Inc.
                    <br />
                    Magjistralja Prishtinë, Ferizaj
                  </dd>
                </div>
                <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
                  <dt className="font-semibold text-gray-900">Using in</dt>
                  <dd className="mt-2 text-gray-500">
                    <span className="font-medium text-gray-900">Matrics Blockchain</span>
                    <br />
                    1752, Pejton
                    <br />
                    Kosovë, Prishtinë 11000
                  </dd>
                </div>
              </dl>
              <table className="mt-16 w-full whitespace-nowrap text-left text-sm/6">
                <colgroup>
                  <col className="w-full" />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="border-b border-gray-200 text-gray-900">
                  <tr>
                    <th scope="col" className="px-0 py-3 font-semibold">
                      Projects
                    </th>
                    <th scope="col" className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                      Hours
                    </th>
                    <th scope="col" className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                      Rate
                    </th>
                    <th scope="col" className="py-3 pl-8 pr-0 text-right font-semibold">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="max-w-0 px-0 py-5 align-top">
                        <div className="truncate font-medium text-gray-900">{item.title}</div>
                        <div className="truncate text-gray-500">{item.description}</div>
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        {item.hours}
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        {item.rate}
                      </td>
                      <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row" className="px-0 pb-0 pt-6 font-normal text-gray-700 sm:hidden">
                      Subtotal
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden px-0 pb-0 pt-6 text-right font-normal text-gray-700 sm:table-cell"
                    >
                      Subtotal
                    </th>
                    <td className="pb-0 pl-8 pr-0 pt-6 text-right tabular-nums text-gray-900">{invoice.subTotal}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="pt-4 font-normal text-gray-700 sm:hidden">
                      Tax
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-normal text-gray-700 sm:table-cell"
                    >
                      Tax
                    </th>
                    <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-gray-900">{invoice.tax}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="pt-4 font-semibold text-gray-900 sm:hidden">
                      Total
                    </th>
                    <th
                      scope="row"
                      colSpan={3}
                      className="hidden pt-4 text-right font-semibold text-gray-900 sm:table-cell"
                    >
                      Total
                    </th>
                    <td className="pb-0 pl-8 pr-0 pt-4 text-right font-semibold tabular-nums text-gray-900">
                      {invoice.total}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="lg:col-start-3 rounded shadow-sm ring-1 ring-gray-900/5 p-6">
              {/* Activity feed */}
              <h2 className="text-sm/6 font-semibold text-gray-900">Activity</h2>
              <ul role="list" className="mt-3 space-y-6">
                {equipmentsProfile?.activity && equipmentsProfile.activity.map((activityItem, activityItemIdx) => (
                  <li key={activityItem._id} className="relative flex gap-x-4">
                    <div
                      className={classNames(
                        activityItemIdx === equipmentsProfile.activity.length - 1 ? 'h-6' : '-bottom-6',
                        'absolute left-0 top-0 flex w-6 justify-center',
                      )}
                    >
                      <div className="w-px bg-gray-200" />
                    </div>

                    <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                      <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                    </div>
                    <p className="flex-auto py-0.5 text-xs/5 text-gray-500">
                      <span className="font-medium text-gray-900">{activityItem.user}</span>{' '}
                      {activityItem.activity}.
                    </p>
                    <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs/5 text-gray-500">
                      {formatDate(activityItem.date)}
                    </time>
                  </li>
                ))}
              </ul>

              {/* New comment form */}
              <div className="mt-6 flex gap-x-3 relative">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-6 flex-none rounded-full bg-gray-50"
                />
                <form action="#" className="relative flex-auto">
                  <div className="overflow-hidden rounded-lg pb-12 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <label htmlFor="comment" className="sr-only">
                      Add your comment
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={2}
                      placeholder="Add your comment..."
                      className="block w-full resize-none bg-transparent px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      defaultValue={''}
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                    <div className="flex items-center space-x-5">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <PaperClipIcon aria-hidden="true" className="size-5" />
                          <span className="sr-only">Attach a file</span>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <Listbox value={selected} onChange={setSelected}>
                          <Label className="sr-only">Your mood</Label>
                          <div className="relative">
                            <ListboxButton className="relative -m-2.5 flex size-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                              <span className="flex items-center justify-center">
                                {selected.value === null ? (
                                  <span>
                                    <FaceSmileIcon aria-hidden="true" className="size-5 shrink-0" />
                                    <span className="sr-only">Add your mood</span>
                                  </span>
                                ) : (
                                  <span>
                                    <span
                                      className={classNames(
                                        selected.bgColor,
                                        'flex size-8 items-center justify-center rounded-full',
                                      )}
                                    >
                                      <selected.icon aria-hidden="true" className="size-5 shrink-0 text-white" />
                                    </span>
                                    <span className="sr-only">{selected.name}</span>
                                  </span>
                                )}
                              </span>
                            </ListboxButton>

                            <ListboxOptions
                              transition
                              className="absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:ml-auto sm:w-64 sm:text-sm"
                            >
                              {moods.map((mood) => (
                                <ListboxOption
                                  key={mood.value}
                                  value={mood}
                                  className="relative cursor-default select-none bg-white px-3 py-2 data-[focus]:bg-gray-100"
                                >
                                  <div className="flex items-center">
                                    <div
                                      className={classNames(
                                        mood.bgColor,
                                        'flex size-8 items-center justify-center rounded-full',
                                      )}
                                    >
                                      <mood.icon
                                        aria-hidden="true"
                                        className={classNames(mood.iconColor, 'size-5 shrink-0')}
                                      />
                                    </div>
                                    <span className="ml-3 block truncate font-medium">{mood.name}</span>
                                  </div>
                                </ListboxOption>
                              ))}
                            </ListboxOptions>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Comment
                    </button>
                  </div>
                </form>
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 backdrop-blur-[1.5px] rounded-lg p-2">
                  <span className="text-gray-700 font-semibold text-sm sm:text-base">💡 Feature coming soon...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
