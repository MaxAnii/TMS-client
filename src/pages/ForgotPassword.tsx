import AuthFormContainer from "@/components/AuthFormContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { resetLinkSchema } from "../../schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { useTransition } from "react";
const ForgotPassword = () => {
	const { toast } = useToast();
	const [ispending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof resetLinkSchema>>({
		resolver: zodResolver(resetLinkSchema),
		defaultValues: {
			email: "",
		},
	});
	const resetMail = async (email: string) => {
		const response = await fetch(
			`http://localhost:5000/auth/send-reset-link/${email}`
		);
		if (response.status === 200) {
			toast({
				title: "Email sent successfully",
			});
		} else if (response.status === 401) {
			toast({
				title: "Email not found",
				variant: "destructive",
			});
		} else {
			toast({
				title: "Oops, something went wrong",
				variant: "destructive",
			});
		}
	};
	const sendResetLinkMail = async (values: z.infer<typeof resetLinkSchema>) => {
		startTransition(() => {
			resetMail(values.email);
		});
	};
	return (
		<div className=" bg-[#d0d0d0] flex justify-center items-center">
			<div className="min-h-screen">
				<AuthFormContainer
					title="Forgot password!"
					description="Enter your registered email to get the reset password link"
				></AuthFormContainer>
				<div className="mt-10 p-2 md:p-0">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(sendResetLinkMail)}
							className="space-y-4"
						>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
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
							<Button
								type="submit"
								className="w-full mt-6"
								disabled={ispending}
							>
								Get link
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
