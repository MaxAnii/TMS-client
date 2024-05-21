import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "./ui/button";
const ModalFormContainer = ({
	...props
}: {
	label: string;
	title: string;
	description: string;
	children: React.ReactNode;
}) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button className="bg-[#1D24CA]">{props.label}</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{props.title}</AlertDialogTitle>
					<AlertDialogDescription>{props.description}</AlertDialogDescription>
				</AlertDialogHeader>
				{props.children}
				<AlertDialogFooter>
					<AlertDialogCancel className="w-full bg-red-600 text-white">
						Cancel
					</AlertDialogCancel>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default ModalFormContainer;
