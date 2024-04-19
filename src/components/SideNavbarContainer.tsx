import { ReactNode } from "react";

const SideNavbarContainer = ({ ...props }: { children: ReactNode }) => {
	return (
		<div>
			<div className="flex h-screen bg-gray-100 fixed">
				<div className="flex flex-col w-64 bg-white border-r">
					<div className="flex items-center justify-center h-16 border-b">
						<span className="text-xl font-bold">TMS</span>
					</div>

					<nav className="flex-1 overflow-y-auto ">{props.children}</nav>
					<button>Logout</button>
				</div>
			</div>
		</div>
	);
};

export default SideNavbarContainer;
