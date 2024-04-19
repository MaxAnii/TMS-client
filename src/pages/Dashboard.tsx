import MyResponsiveLine from "@/components/LineGraph";
import QuickSummaryDataCard from "@/components/QuickSummaryDataCard";
import MyResponsivePie from "@/components/TripGraph";
import VehicleLogContainer from "@/components/VehicleLogContainer";

const Dashboard = () => {
	return (
		<div className="ml-64">
			<header className="  flex justify-between items-center p-4">
				<h1 className="text-xl ">Overview</h1>
				<div className="flex items-center space-x-4">
					<span className="text-gray-400">
						<input type="date"></input>
					</span>
					<span></span>
				</div>
			</header>
			<div className="flex flex-wrap gap-5 justify-center mt-8">
				<QuickSummaryDataCard
					title="Total passengers"
					count="3289"
					color="bg-[#E3F5FF]"
				/>
				<QuickSummaryDataCard
					title="Employees"
					count="3671"
					color="bg-[#E5ECF6]"
				/>
				<QuickSummaryDataCard
					title="Non-Employees"
					count="156"
					color="bg-[#E3F5FF]"
				/>
				<QuickSummaryDataCard
					title="Vehicles"
					count="231"
					color="bg-[#E5ECF6]"
				/>
			</div>
			<div className="flex flex-wrap mt-5 justify-center gap-4">
				<div>
					<VehicleLogContainer></VehicleLogContainer>
				</div>
				<div>
					<MyResponsivePie></MyResponsivePie>
				</div>
			</div>
			<MyResponsiveLine></MyResponsiveLine>
		</div>
	);
};

export default Dashboard;
