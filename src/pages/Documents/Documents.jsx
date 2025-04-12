import React from "react";
import FolderView from "./Components/FolderView";
import RecentFilesView from "./Components/RecentFilesView";
import FilesTableView from "./Components/FilesTableView";
import { PlusIcon, FunnelIcon, AdjustmentsHorizontalIcon} from "@heroicons/react/24/outline";
export default function Documents() {
    return (
        <>
            <main>
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
                        <FolderView />
                        <FolderView />
                        <FolderView />
                        <FolderView />
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
        </>
    );
};