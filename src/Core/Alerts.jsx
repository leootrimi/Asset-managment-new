'use client'

import { Transition } from '@headlessui/react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Alert({ type = 'success', title, message, show, setShow }) {
    const isSuccess = type === 'success'

    const icon = isSuccess ? (
        <CheckCircleIcon className="size-6 text-green-400" />
    ) : (
        <XCircleIcon className="size-6 text-red-400" />
    )

    const borderColor = isSuccess ? 'border-green-700' : 'border-red-700'

    return (
        <div
            aria-live="assertive"
            className="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
            <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                <Transition
                    show={show}
                    appear={true}
                    enter="transform ease-out duration-300 transition-all"
                    enterFrom="translate-y-2 opacity-0 scale-95 sm:translate-y-0 sm:translate-x-4"
                    enterTo="translate-y-0 opacity-100 scale-100 sm:translate-x-0"
                    leave="transform ease-in duration-200 transition-all"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95 translate-y-2 sm:translate-x-4"
                >
                    <div className={`pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white border ${borderColor} shadow-lg ring-1 ring-black/5`}>
                        <div className="p-4">
                            <div className="flex items-start">
                                <div className="shrink-0">{icon}</div>
                                <div className="ml-3 w-0 flex-1 pt-0.5">
                                    <p className="text-sm font-medium text-gray-900">{title}</p>
                                    {message && <p className="mt-1 text-sm text-gray-500">{message}</p>}
                                </div>
                                <div className="ml-4 flex shrink-0">
                                    <button
                                        onClick={() => setShow(false)}
                                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="size-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    )
}