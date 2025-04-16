import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function NewEquipment() {
  return (
    <form>
      <div className="space-y-3 p-3">
        <div className="border-b border-gray-900/10 pb-3">
          <h2 className="text-base/7 font-semibold text-gray-900">Equipment Image</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Upload a photo of the equipment for easy identification.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                Photo (Optional)
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon aria-hidden="true" className="size-17 text-gray-300" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Equipment Details</h2>
          <p className="mt-1 text-sm/6 text-gray-600">Provide details to track and manage IT equipment.</p>

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="equipment-name" className="block text-sm/6 font-medium text-gray-900">
                Equipment Name
              </label>
              <div className="mt-2">
                <input
                  id="equipment-name"
                  name="equipment-name"
                  type="text"
                  autoComplete="off"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="e.g., Dell XPS 13"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="equipment-type" className="block text-sm/6 font-medium text-gray-900">
                Equipment Type
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="equipment-type"
                  name="equipment-type"
                  autoComplete="off"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Laptop</option>
                  <option>Desktop</option>
                  <option>Mouse</option>
                  <option>Headphones</option>
                  <option>Monitor</option>
                  <option>Other</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="serial-number" className="block text-sm/6 font-medium text-gray-900">
                Serial Number
              </label>
              <div className="mt-2">
                <input
                  id="serial-number"
                  name="serial-number"
                  type="text"
                  autoComplete="off"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="e.g., SN123456789"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="purchase-date" className="block text-sm/6 font-medium text-gray-900">
                Purchase Date
              </label>
              <div className="mt-2">
                <input
                  id="purchase-date"
                  name="purchase-date"
                  type="date"
                  autoComplete="off"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="condition" className="block text-sm/6 font-medium text-gray-900">
                Condition
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="condition"
                  name="condition"
                  autoComplete="off"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>New</option>
                  <option>Used</option>
                  <option>Refurbished</option>
                  <option>Faulty</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="in-use-status" className="block text-sm/6 font-medium text-gray-900">
                In Use Status
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="in-use-status"
                  name="in-use-status"
                  autoComplete="off"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="assigned-to" className="block text-sm/6 font-medium text-gray-900">
                Assigned To
              </label>
              <div className="mt-2">
                <input
                  id="assigned-to"
                  name="assigned-to"
                  type="text"
                  autoComplete="off"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="e.g., John Doe or IT Department"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  name="location"
                  type="text"
                  autoComplete="off"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="e.g., Office A or Remote - John Doe"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="maintenance-notes" className="block text-sm/6 font-medium text-gray-900">
                Maintenance Notes
              </label>
              <div className="mt-2">
                <textarea
                  id="maintenance-notes"
                  name="maintenance-notes"
                  rows="4"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="e.g., Software update scheduled for 2025-06-01, replaced battery in 2024"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}