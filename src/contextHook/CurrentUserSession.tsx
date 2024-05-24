import { createContext, ReactNode, useState, useEffect } from "react";

type User = {
	id: string | undefined;
	email: string | undefined;
	role: string | undefined;
};

type UserDataType = {
	user: User | null;
};

export const userContext = createContext<UserDataType>({
	user: null,
});

const UserSessionProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	const getCookie = async () => {
		try {
			const response = await fetch("http://localhost:5000/auth/check-cookie", {
				method: "GET",
				credentials: "include",
			});
			if (response.ok) {
				const data = await response.json();
				setUser(data);
			} else {
				setUser(null);
			}
		} catch (error) {
			console.error("Error fetching user cookie:", error);
			setUser(null);
		}
	};

	useEffect(() => {
		getCookie();
	}, []);

	console.log(user);

	return (
		<userContext.Provider value={{ user }}>{children}</userContext.Provider>
	);
};

export default UserSessionProvider;
