import { Card, CardContent, CardHeader } from "./ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";

const VehicleLogContainer = () => {
	return (
		<div>
			<Card className="w-[800px]  ml-3  max-h-[500px] overflow-y-scroll  bg-[#F7F9FB]">
				<div className="m-5 flex flex-wrap">
					<div>Vehicle Logs</div>
					<div className="ml-auto">
						<Input
							type="text"
							placeholder="serach by vehicle number"
							className="w-[300px]"
						></Input>
					</div>
				</div>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow className="">
								<TableHead className="w-[120px]">Vehicle</TableHead>
								<TableHead className="w-[100px]">Trips</TableHead>
								<TableHead className="w-[100px]">Passengers</TableHead>

								<TableHead className="w-[100px]">Employee</TableHead>
								<TableHead className="w-[100px]">Non-Employees</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="">
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="font-medium">INV001</TableCell>
								<TableCell>13</TableCell>
								<TableCell>500</TableCell>
								<TableCell>250</TableCell>
								<TableCell>250</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
};

export default VehicleLogContainer;
