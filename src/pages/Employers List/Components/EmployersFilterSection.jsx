import React from "react";
import SearchField from '../../../Core/SearchField'
import SelectMenu from "../../../Core/SelectMenu";
import CircularButton from "../../../Core/CircularButton";

export default function EmployersFilterSection() {
    return(
        <div className="header-filter bg-white shadow-sm ring-1 sm:rounded-xl p-3 flex flex-col gap-4 sm:flex-row sm:items-center">
        <SearchField />
        <SelectMenu />
        <CircularButton path='/user/add' />
      </div>
    )
}