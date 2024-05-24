// ProtectedRoute.tsx
import { userContext } from "@/contextHook/CurrentUserSession";
import React, { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const userSession = useContext(userContext);
	return userSession.user ? children : <Navigate to="/" replace></Navigate>;
};

export default ProtectedRoute;
