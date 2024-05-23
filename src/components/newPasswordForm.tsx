import AuthFormContainer from "./AuthFormContainer";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { newPasswordSchema } from "../../schema/index";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { useToast } from "./ui/use-toast";
const NewPasswordForm = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();
	const token = searchParams.get("token");
	const { toast } = useToast();
	const form = useForm<z.infer<typeof newPasswordSchema>>({
		resolver: zodResolver(newPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});
	const setNewPassword = async (values: z.infer<typeof newPasswordSchema>) => {
		const response = await fetch("http://localhost:5000/auth/newpassword", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...values,
				token,
			}),
		});
		if (response.status === 200) {
			navigate("/");
			toast({
				title: "Password updated.",
				variant: "default",
			});
			return;
		}
		const data = await response.json();
		console.log(data);
		toast({
			title: "Oops, something went wrong.",
			variant: "destructive",
		});
	};
	return (
		<div className=" bg-[#d0d0d0] flex justify-center items-center">
			<div className="min-h-screen">
				<AuthFormContainer
					title="Reset Password!"
					description="Set the new password for your account."
				></AuthFormContainer>
				<div className="mt-10 p-2 md:p-0">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(setNewPassword)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>New password</FormLabel>
										<FormControl>
											<Input
												className="bg-white"
												placeholder="Enter registered email"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Confirm password</FormLabel>
										<FormControl>
											<Input
												className="bg-white"
												placeholder="Enter registered email"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type="submit" className="block w-full mt-12">
								Change password
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default NewPasswordForm;
