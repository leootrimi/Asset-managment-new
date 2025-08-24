import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { getWorkDurations } from "../../../services/DateConverter";
import { useEffect } from "react";

export default function TimelineDrawer({ isOpen, setIsOpen, timeline }) {

    const { totalHours, averageHours } = getWorkDurations(timeline || []);

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} className='relative z-60'>
                <div className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <DialogPanel
                                transition
                                className="pointer-events-auto w-screen max-w-xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] px-6 py-6">
                                        <div className="flex items-center justify-between">
                                            <DialogTitle className="text-xl font-semibold text-gray-600">Employer Timeline Activity</DialogTitle>
                                            <button
                                                type="button"
                                                onClick={handleClose}
                                                className="rounded-full bg-gray-600 p-2 text-blue-200 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-4">
                                        <h1 className="text-lg font-semibold text-gray-600">Last 30 days activity</h1>
                                        {(!timeline || timeline.length === 0) ? (
                                            <p className="text-center text-gray-500 text-sm">No activity found.</p>
                                        ) : (
                                            <div className="overflow-x-auto rounded-lg shadow border border-gray-200 mt-2">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-100">
                                                        <tr>
                                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">🗓️ Date</th>
                                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">🟢 Check-In Time</th>
                                                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">🔴 Check-Out Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-100">
                                                        {timeline.map((item, idx) => (
                                                            <tr key={item._id || idx}>
                                                                <td className="px-6 py-4 text-sm text-gray-800">
                                                                    {item.checkinDate || '—'}
                                                                </td>
                                                                <td className="px-6 py-4 text-sm text-green-600 font-medium">
                                                                    {item.checkinTime || '—'}
                                                                </td>
                                                                <td className="px-6 py-4 text-sm text-red-500 font-medium">
                                                                    {item.checkoutTime || 'Not checked out'}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}


                                        {/* Work hour statistics */}
                                        <div className="mt-3 flex flex-col gap-y-3">
                                            <div className="p-2 border-2 border-gray-200 rounded-xl flex justify-between">
                                                <h1 className="font-semibold text-gray-600">🕠 Total work hours</h1>
                                                <h1 className="font-semibold text-gray-800">{totalHours} <span className="text-sm">hours</span></h1>
                                            </div>

                                            <div className="p-2 border-2 border-gray-200 rounded-xl flex justify-between">
                                                <h1 className="font-semibold text-gray-600">🕠 Average work hours</h1>
                                                <h1 className={`font-semibold text-gray-800 ${ averageHours < 8 ? 'text-red-500' : 'text-green-500'}`}>{averageHours} <span className="text-sm">hours</span></h1>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}