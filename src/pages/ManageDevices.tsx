import AdminNavbar from "@/components/AdminNavbar";
import SideNavbarContainer from "@/components/SideNavbarContainer";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import AddNewDeviceForm from "@/components/AddNewDeviceForm";
import { useToast } from "@/components/ui/use-toast";
import ModalFormContainer from "@/components/ModalFormContainer";
import UpdateDeviceDetailForm from "@/components/UpdateDeviceDetailsForm";
type deviceDataType = {
	id: string;
	modelnumber: string;
	manufacturer: string;
	vehiclenumber: string;
	capcity: string;
}[];
const ManageDevices = () => {
	const { toast } = useToast();
	const [deviceData, setDeviceData] = useState<deviceDataType>([]);
	const [filterData, setFilterData] = useState<deviceDataType>([]);
	const [newDevice, setNewDevice] = useState(false);
	const [serachQuery, setSearchQuery] = useState("");
	const getDeviceData = async () => {
		try {
			const response = await fetch("http://localhost:5000/device/list");
			if (response.status === 200) {
				const data = await response.json();
				console.log(data);
				setDeviceData(data);
				setFilterData(data);
			} else {
				toast({ title: "Something went wrong", variant: "destructive" });
			}
		} catch (error: any) {
			toast({ title: error.message, variant: "destructive" });
		}
	};
	useEffect(() => {
		getDeviceData();
	}, [newDevice]);
	useEffect(() => {
		if (!serachQuery.length) setFilterData(deviceData);
		else {
			const filteredData = deviceData.filter((elem) => {
				if (elem.modelnumber.includes(serachQuery)) return elem;
			});
			setFilterData(filteredData);
		}
	}, [serachQuery]);
	return (
		<>
			<SideNavbarContainer>
				<AdminNavbar></AdminNavbar>
			</SideNavbarContainer>
			<div className="ml-64 pt-4">
				<header className="  flex justify-between items-center p-4 ">
					<h1 className="text-xl ">Device List</h1>
					<div className="flex items-center space-x-4">
						<span className="text-gray-400 flex gap-5">
							<Input
								type="text"
								placeholder="Serach by device number"
								className="w-[250px]"
								value={serachQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							></Input>
							<ModalFormContainer
								label={"Add new device"}
								title={"Add New Device"}
								description={"Enter device information to add device"}
							>
								<AddNewDeviceForm setGetData={setNewDevice}></AddNewDeviceForm>
							</ModalFormContainer>
						</span>
						<span></span>
					</div>
				</header>
				<div className="m-5">
					<Table>
						<TableHeader>
							<TableRow className="  ">
								<TableHead className="w-[120px] ">Model number</TableHead>
								<TableHead className="w-[100px]">Manufacturer</TableHead>
								<TableHead className="w-[100px]">Vehicle number</TableHead>

								<TableHead className="w-[100px] ">Capcity</TableHead>
								<TableHead className="w-[100px] "></TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{filterData.map((elem) => {
								return (
									<TableRow key={elem.id}>
										<TableCell>{elem.modelnumber}</TableCell>
										<TableCell>{elem.manufacturer}</TableCell>
										<TableCell>{elem.vehiclenumber}</TableCell>
										<TableCell>{elem.capcity}</TableCell>
										<TableCell>
											<ModalFormContainer
												label="Edit"
												title="Edit the device details"
												description=""
											>
												<UpdateDeviceDetailForm
													id={elem.id}
													modelNumber={elem.modelnumber}
													vehicleNumber={elem.vehiclenumber}
													capcity={elem.capcity}
													manufacturer={elem.manufacturer}
													setGetData={setNewDevice}
												></UpdateDeviceDetailForm>
											</ModalFormContainer>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			</div>
		</>
	);
};

export default ManageDevices;
