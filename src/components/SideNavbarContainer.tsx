import { ReactNode } from "react";
import { Button } from "./ui/button";
import LogoutBtn from "./LogoutBtn";

const SideNavbarContainer = ({ ...props }: { children: ReactNode }) => {
	return (
		<div>
			<div className="flex h-screen bg-gray-100 fixed">
				<div className="flex flex-col w-64 bg-white border-r">
					<div className="flex items-center justify-center h-16 border-b">
						<span className="text-xl font-bold">TMS</span>
					</div>

					<nav className="flex-1 overflow-y-auto ">{props.children}</nav>

					<div className="flex justify-center mb-5 w-full">
						<LogoutBtn></LogoutBtn>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideNavbarContainer;
