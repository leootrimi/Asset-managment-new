import React from "react";
import { BuildingOffice2Icon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/20/solid";

export default function EmployerTimeline({ timeline }) {

    if (!timeline || timeline.length === 0) {
        return (
            <div className="mt-6 text-center text-gray-500">
                <p className="text-sm">No activity found.</p>
            </div>
        );
    }

    return (
        <div className="mt-6 flow-root">
            <ul role="list" className="-mb-8">
                {timeline.map((item, itemIdx) => (
                    <React.Fragment key={item._id}>

                        {/* Check-out item */}
                        <li>
                            <div className="relative pb-8">
                                {itemIdx !== timeline.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                                    />
                                )}
                                {!item.checkoutTime ? (
                                    <div>
                                        <div className="relative flex space-x-3">
                                            <div>
                                                <span className="bg-blue-500 flex size-8 items-center justify-center rounded-full ring-8 ring-white">
                                                    <BuildingOffice2Icon aria-hidden="true" className="size-5 text-white" />
                                                </span>
                                            </div>
                                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                <div>
                                                    <p className="text-sm font-medium text-blue-400">
                                                        Not checked out yet!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative flex space-x-3">
                                        <div>
                                            <span className="bg-red-500 flex size-8 items-center justify-center rounded-full ring-8 ring-white">
                                                <ArrowRightEndOnRectangleIcon aria-hidden="true" className="size-5 text-white" />
                                            </span>
                                        </div>
                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Checked out at <span className="font-medium text-gray-900">{item.checkoutTime}</span>
                                                </p>
                                            </div>
                                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                                <time dateTime={item.checkinDate}>{item.checkoutTime}</time>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </li>
                        {/* Check-in item */}
                        <li>
                            <div className="relative pb-8">
                                <span
                                    aria-hidden="true"
                                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                                />
                                <div className="relative flex space-x-3">
                                    <div>
                                        <span className="bg-green-500 flex size-8 items-center justify-center rounded-full ring-8 ring-white">
                                            <ArrowRightEndOnRectangleIcon aria-hidden="true" className="size-5 text-white" />
                                        </span>
                                    </div>
                                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                        <div>
                                            <p className="text-sm text-gray-500">
                                                Checked in at <span className="font-medium text-gray-900">{item.checkinTime}</span>
                                            </p>
                                        </div>
                                        <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                            <time dateTime={item.checkinDate}>{item.checkinDate}</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}