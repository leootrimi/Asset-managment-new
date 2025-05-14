import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";

export default function AuthenticationGuard({ component }) {
    const GuardOutlet = withAuthenticationRequired( () => <Outlet /> );

    return <GuardOutlet />
}