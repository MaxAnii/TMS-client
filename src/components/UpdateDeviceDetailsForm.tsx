import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { deviceDataSchema } from "../../schema/index";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useToast } from "./ui/use-toast";
const UpdateDeviceDetailForm = ({
	...props
}: {
	id: string;
	modelNumber: string;
	vehicleNumber: string;
	capcity: string;
	manufacturer: string;
	setGetData: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { toast } = useToast();
	const form = useForm<z.infer<typeof deviceDataSchema>>({
		resolver: zodResolver(deviceDataSchema),
		defaultValues: {
			modelNumber: props.modelNumber,
			vehicleNumber: props.vehicleNumber,
			capcity: props.capcity,
			manufacturer: props.manufacturer,
		},
	});
	const updateDeviceDetails = async (
		values: z.infer<typeof deviceDataSchema>
	) => {
		try {
			const response = await fetch(
				"http://localhost:5000/device/update-details",
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					credentials: "include",
					body: JSON.stringify({ ...values, id: props.id }),
				}
			);
			if (response.status === 200) {
				toast({
					title: "Device updated successfully.",
					variant: "default",
				});
				props.setGetData((prev) => !prev);
			} else {
				toast({
					title: "Something went wrong, please try again.",
					variant: "destructive",
				});
			}
		} catch (error: any) {
			toast({
				title: error.message,
				variant: "destructive",
			});
		}
	};
	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(updateDeviceDetails)}
					className="space-y-4"
				>
					<FormField
						control={form.control}
						name="modelNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Model Number</FormLabel>
								<FormControl>
									<Input placeholder="Enter model number" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="manufacturer"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Manufacturer</FormLabel>
								<FormControl>
									<Input placeholder="Enter manufacturer" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="vehicleNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Vehicle number</FormLabel>
								<FormControl>
									<Input placeholder="Enter vehicle number" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="capcity"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Capcity</FormLabel>
								<FormControl>
									<Input placeholder="Enter capcity of vehicle" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full bg-[#1D24CA]">
						Update
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default UpdateDeviceDetailForm;
