import React from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function RecentFilesView() {
    return (
        <>
            <div className="recent-file flex flex-1 space-x-3 p-4 rounded-2xl border border-gray-300">
                <div className="icon p-2 bg-gray-100 rounded-xl">
                    <DocumentTextIcon className="size-6" />
                </div>
                <div className="">
                    <h6 className="d text-sm font-medium">
                        Analytics Data July
                    </h6>
                    <div className="flex space-x-2 text-sm text-gray-600">
                        <h6>
                            January 5, 2025
                        </h6>
                        <h6>
                            1.0 MB
                        </h6>
                    </div>
                </div>
            </div>
        </>
    );
};