import { getUserRolesFromIdToken } from "./ApiCalls";

export const hasRole = (role) => {
  const { roles } = getUserRolesFromIdToken();
  return roles.includes(role);
};
