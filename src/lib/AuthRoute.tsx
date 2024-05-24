// ProtectedRoute.tsx
import { userContext } from "@/contextHook/CurrentUserSession";
import React, { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }: { children: ReactNode }) => {
	const userSession = useContext(userContext);
	return userSession.user ? (
		<Navigate to="/dashboard" replace></Navigate>
	) : (
		children
	);
};

export default AuthRoute;
