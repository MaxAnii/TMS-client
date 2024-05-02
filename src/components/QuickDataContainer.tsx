import QuickSummaryDataCard from "@/components/QuickSummaryDataCard";
import { useEffect, useState } from "react";

const QuickDataContainer = ({ ...props }: { date: string }) => {
	const [quickData, setQuickData] = useState({
		totalPassengers: "0",
		totalEmployees: "0",
		totalNonEmployees: "0",
		totalDevices: "0",
	});

	const getQuickData = async () => {
		try {
			setQuickData({
				totalPassengers: "0",
				totalEmployees: "0",
				totalNonEmployees: "0",
				totalDevices: "0",
			});
			const response = await fetch(
				`http://localhost:5000/quick-data/${props.date}`
			);

			if (response.status === 200) {
				const data = await response.json();

				const employees = parseInt(data.totalEmployees, 10);
				const nonEmployees = parseInt(data.totalNonEmployees, 10);

				const totalPassengers = employees + nonEmployees;
				setQuickData({
					totalPassengers: totalPassengers.toString(),
					totalEmployees: data.totalEmployees,
					totalNonEmployees: data.totalNonEmployees,
					totalDevices: data.totalDevice,
				});
			} else {
				setQuickData({
					totalPassengers: "0",
					totalEmployees: "0",
					totalNonEmployees: "0",
					totalDevices: "0",
				});
			}
		} catch (error: any) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getQuickData();
	}, [props.date]);
	console.log(quickData);
	return (
		<div className="flex flex-wrap gap-5 justify-center mt-8">
			<QuickSummaryDataCard
				title="Total passengers"
				count={quickData.totalPassengers}
				color="bg-[#E3F5FF]"
			/>
			<QuickSummaryDataCard
				title="Employees"
				count={quickData.totalEmployees}
				color="bg-[#E5ECF6]"
			/>
			<QuickSummaryDataCard
				title="Non-Employees"
				count={quickData.totalNonEmployees}
				color="bg-[#E3F5FF]"
			/>
			<QuickSummaryDataCard
				title="Vehicles"
				count={quickData.totalDevices}
				color="bg-[#E5ECF6]"
			/>
		</div>
	);
};

export default QuickDataContainer;
