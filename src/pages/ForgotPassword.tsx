import AuthFormContainer from "@/components/AuthFormContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPassword = () => {
	return (
		<div className=" bg-[#d0d0d0] flex justify-center items-center">
			<div className="min-h-screen">
				<AuthFormContainer
					title="Forgot password!"
					description="Enter your registered email to get the reset password link"
				></AuthFormContainer>
				<div className="mt-10 p-2 md:p-0">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							// navigate("/dashboard");
						}}
					>
						<label className="mb-2">Email address</label>
						<Input
							className="bg-white"
							type="email"
							placeholder="enter your email"
							required
						></Input>
						<Button type="submit" className="w-full mt-6">
							Get link
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
