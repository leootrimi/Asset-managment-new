import React from "react";
import SearchField from '../../../Core/SearchField'
import SelectMenu from "../../../Core/SelectMenu";
import CircularButton from "../../../Core/CircularButton";
import { hasRole } from "../../../services/authHelpers";
import { Roles } from "../../../services/Roles";

export default function EmployersFilterSection() {
    return(
        <div className="header-filter bg-white shadow-sm ring-1 sm:rounded-xl p-3 flex flex-col gap-4 sm:flex-row sm:items-center">
        <SearchField />
        <SelectMenu />
        {
          hasRole(Roles.ADMIN) && <CircularButton path='/user/add' />
        }
      </div>
    )
}