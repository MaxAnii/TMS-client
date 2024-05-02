import DeviceStatus from "@/components/DeviceStatus";
import MyResponsiveLine from "@/components/LineGraph";

// import MyResponsivePie from "@/components/TripGraph";
import VehicleLogContainer from "@/components/VehicleLogContainer";
import { useEffect, useState } from "react";
import moment from "moment";
import QuickDataContainer from "@/components/QuickDataContainer";
const Dashboard = () => {
	const [date, setDate] = useState("");
	useEffect(() => {
		const currentDate = moment().format("YYYY-MM-DD");
		setDate(currentDate);
	}, []);

	return (
		<div className="ml-64">
			<header className="  flex justify-between items-center p-4">
				<h1 className="text-xl ">Overview</h1>
				<div className="flex items-center space-x-4">
					<span className="text-gray-400">
						<input
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						></input>
					</span>
					<span></span>
				</div>
			</header>
			<div>
				<QuickDataContainer date={date}></QuickDataContainer>
			</div>
			<div className="flex flex-wrap mt-5 justify-center gap-4">
				<div>
					<VehicleLogContainer date={date}></VehicleLogContainer>
				</div>
				<div>
					<DeviceStatus></DeviceStatus>
				</div>
			</div>
			<MyResponsiveLine date={date}></MyResponsiveLine>
		</div>
	);
};

export default Dashboard;
