import React from "react";
import FolderView from "./Components/FolderView";
import RecentFilesView from "./Components/RecentFilesView";
import FilesTableView from "./Components/FilesTableView";
import ExportFile from "./Components/ExportFile";
import { PlusIcon, FunnelIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
export default function Documents() {
    return (
            <main className="px-2">
                <div className="space-y-6 p-3">
                    <h1 className="text-2xl font-medium text-gray-900">Documents</h1>
                    <div className="w-full border-t border-gray-300" />
                    <div className="action-items flex space-x-3">
                        <button
                            type="button"
                            className="rounded-full flex items-center space-x-2 bg-indigo-600 py-2.5 px-3  text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <PlusIcon className="size-5" />
                            <h6>Add New</h6>
                        </button>
                        <button
                            type="button"
                            className="rounded-full flex items-center space-x-2  py-2.5 px-3 text-black text-xs font-semibold shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <FunnelIcon className="size-5" />
                            <h6>Filter</h6>
                        </button>
                        <button
                            type="button"
                            className="rounded-full flex items-center space-x-2 py-2.5 px-3 text-xs font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <AdjustmentsHorizontalIcon className="size-5" />
                            <h6>Sort by latest</h6>
                        </button>
                    </div>
                    <h1 className="text-xl font-normal text-gray-800">Folders</h1>

                    {/* Folder Section */}
                    <div className="folder-section flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 w-full">
                        <ExportFile
                            title="Financial Reports"
                            description="Export financial data and valuations"
                            icon={
                                <svg
                                    className="w-5 h-5 text-teal-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            }
                        />
                        <ExportFile
                            title="Employee Data"
                            description="Export employee assignments and responsibilities"
                            icon={
                                <svg
                                    className="w-5 h-5 text-teal-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            }
                        />
                        <ExportFile
                            title="Asset Lists"
                            description="Export complete asset inventory with details"
                            icon={
                                <svg
                                    className="w-5 h-5 text-teal-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    />
                                </svg>
                            }
                        />
                    </div>

                    <h1 className="text-xl font-normal text-gray-800">Recent</h1>
                    <div className="folder-section flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 w-full">
                        <RecentFilesView />
                        <RecentFilesView />
                        <RecentFilesView />
                        <RecentFilesView />
                    </div>

                    <h1 className="text-xl font-normal text-gray-800">All files</h1>
                    <FilesTableView />
                </div>
            </main>
    );
};