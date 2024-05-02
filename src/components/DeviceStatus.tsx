import { Card, CardContent, CardDescription } from "./ui/card";
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
type deviceStatusType = {
	device_id: string;
	status: string;
}[];
const DeviceStatus = () => {
	const [deviceStatus, setDeviceStatus] = useState<deviceStatusType>([]);
	const getDeviceStatus = async () => {
		try {
			const response = await fetch("http://localhost:5000/device/get-status");
			console.log(response.status);
			if (response.status === 200) {
				const data = await response.json();
				setDeviceStatus(data);
			}
		} catch (error: any) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getDeviceStatus();
	}, []);
	useEffect(() => {
		const intervalId = setInterval(() => {
			getDeviceStatus();
		}, 2000 * 60);

		return () => clearInterval(intervalId);
	}, []);

	const activeClass = "bg-[#16FF00]";
	const inActiveClass = "bg-[#FC2947]";
	return (
		<div>
			<Card className="w-[500px]  ml-3  h-[500px] overflow-y-scroll  bg-[#F7F9FB]">
				<div className="m-5 flex flex-wrap">
					<div>Device Status</div>
					<div className="ml-auto">
						<Input
							type="text"
							placeholder="serach by device id"
							className="w-[200px]"
						></Input>
					</div>
				</div>
				<CardDescription className="flex">
					<div className="flex  items-center">
						<div
							className={`ml-5 h-[10px] w-[10px] rounded-full ${activeClass}`}
						></div>
						<div className="ml-2">Active</div>
					</div>
					<div className="flex  items-center">
						<div
							className={`ml-5 h-[10px] w-[10px] rounded-full ${inActiveClass}`}
						></div>
						<div className="ml-2">Inactive</div>
					</div>
				</CardDescription>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow className="">
								<TableHead className="w-[120px]">Device Id</TableHead>
								<TableHead className="w-[100px]">Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="">
							{deviceStatus.map((elem, index) => {
								return (
									<TableRow key={index}>
										<TableCell className="font-medium">
											{elem.device_id}
										</TableCell>
										<TableCell className="pl-5">
											<div
												className={` h-[10px] w-[10px] rounded-full ${
													elem.status === "1" ? activeClass : inActiveClass
												}`}
											></div>
										</TableCell>
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

export default DeviceStatus;
