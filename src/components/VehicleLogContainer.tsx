import { Card, CardContent } from "./ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
type tripDataType = {
	device_id: string;
	total_trips: string;
	employees: string;
	non_employees: string;
	total_passengers: string;
}[];
const VehicleLogContainer = ({ ...props }: { date: string }) => {
	const [tripData, setTripData] = useState<tripDataType>([]);
	const [filterData, setFilterData] = useState<tripDataType>([]);
	const [serachQuery, setSearchQuery] = useState<string>("");
	const getTripDetails = async () => {
		try {
			const response = await fetch(`http://localhost:5000/trip/${props.date}`, {
				method: "GET",
				credentials: "include",
			});
			if (response.status === 200) {
				const data = await response.json();
				setTripData(data);
				setFilterData(data);
			}
		} catch (error: any) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getTripDetails();
	}, [props.date]);
	useEffect(() => {
		if (!serachQuery.length) setFilterData(tripData);
		else {
			const filteredData = tripData.filter((elem) => {
				if (elem.device_id.includes(serachQuery)) return elem;
			});
			setFilterData(filteredData);
		}
	}, [serachQuery]);
	return (
		<div>
			<Card className="ml-3  h-[500px] overflow-y-scroll  bg-[#F7F9FB] md:min-w-[600px]">
				<div className="m-5 flex flex-wrap">
					<div>Vehicle Logs</div>
					<div className="ml-auto">
						<Input
							type="text"
							placeholder="serach by device number"
							className="w-[300px]"
							value={serachQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						></Input>
					</div>
				</div>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow className="">
								<TableHead className="w-[120px]">Device Id</TableHead>
								<TableHead className="w-[100px]">Trips</TableHead>
								<TableHead className="w-[100px]">Passengers</TableHead>

								<TableHead className="w-[100px]">Employee</TableHead>
								<TableHead className="w-[100px]">Non-Employees</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody className="">
							{filterData.map((elem, index) => {
								return (
									<TableRow key={index}>
										<TableCell className="font-medium">
											{elem.device_id}
										</TableCell>
										<TableCell>{elem.total_trips}</TableCell>
										<TableCell>{elem.total_passengers}</TableCell>
										<TableCell>{elem.employees}</TableCell>
										<TableCell>{elem.non_employees}</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
};

export default VehicleLogContainer;
