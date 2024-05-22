import AuthFormContainer from "@/components/AuthFormContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
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
import { loginSchema } from "../../schema/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
const Login = () => {
	const [message, setMessage] = useState("");
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const navigate = useNavigate();
	const login = async (values: z.infer<typeof loginSchema>) => {
		setMessage("");
		const response = await fetch("http://localhost:5000/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		});

		if (response.status === 200) {
			navigate("/dashboard");
		} else {
			const data = await response.json();
			setMessage(data.message);
		}
	};
	return (
		<div className=" bg-[#d0d0d0] flex justify-center ">
			<div className="min-h-screen">
				<AuthFormContainer
					title="Welcome back!"
					description="Enter the Credentials to access your account."
				></AuthFormContainer>
				<div className="mt-10 p-2 md:p-0">
					<Form {...form}>
						<p className="text-red-800">{message}</p>
						<form onSubmit={form.handleSubmit(login)} className="space-y-4">
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
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												className="bg-white"
												placeholder="xxxxxxxx"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<Link to="/forgotpassword" className="text-blue-950">
								{" "}
								Forgot password?
							</Link>
							<Button
								type="submit"
								className="block w-full mt-12"
								// onClick={(e) => {}}
							>
								Login
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default Login;
