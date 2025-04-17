import React from "react";
import folderIcon from '../../../assets/folder.png'

export default function FolderView() {
    return(
        <>
        <div className="background px-6 space-y-3 font-light flex-col bg-gray-50 p-3 rounded-2xl inline-flex flex-1">
            <img src="https://img.icons8.com/glassmorphism/48/mac-folder.png" alt="" className="size-18"/>
            <div className="space-y-1">
            <h3 className="text-base text-sm font-normal">Equipment Excel List</h3>
            <div className="description flex space-x-2 text-sm text-gray-400">
                <h6>3 Files</h6>
                <h6>137 MB</h6>
            </div>
            </div>
        </div>
        </>
    );
};