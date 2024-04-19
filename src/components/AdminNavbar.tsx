import { Link } from "react-router-dom";

const AdminNavbar = () => {
	const navLinks = [
		{
			label: "Dashboard",
			link: "/dashboard",
		},
		{
			label: "Manage User",
			link: "/manageuser",
		},
		{
			label: "Requests",
			link: "/requests",
		},
		{
			label: "Manage Devices",
			link: "/managedevices",
		},
		{
			label: "Generate Report",
			link: "/generatereport",
		},
	];
	return (
		<ul className="list-disc">
			{navLinks.map((elem, index) => {
				return (
					<Link
						to={elem.link}
						key={index}
						className="block px-9 py-3 mt-2 text-md font-normal text-gray-700 hover:bg-gray-200 hover:rounded-lg"
					>
						<li>{elem.label}</li>
					</Link>
				);
			})}
		</ul>
	);
};

export default AdminNavbar;
