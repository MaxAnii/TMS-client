import { Button } from "./ui/button";

const LogoutBtn = () => {
	const logout = async () => {
		const response = await fetch("http://localhost:5000/auth/logout", {
			method: "GET",
			credentials: "include",
		});
		if (response.status === 200) {
			window.location.reload();
		}
	};

	return (
		<Button
			variant="destructive"
			className="w-full m-2"
			onClick={() => {
				logout(); // Call the logout function
			}}
		>
			Logout
		</Button>
	);
};

export default LogoutBtn;
