import AuthFormContainer from "./AuthFormContainer";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const GenerateNewPassword = () => {
	return (
		<div className=" bg-[#d0d0d0] flex justify-center items-center">
			<div className="min-h-screen">
				<AuthFormContainer
					title="Reset Password!"
					description="Set the new password for your account."
				></AuthFormContainer>
				<div className="mt-10 p-2 md:p-0">
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<label>Enter new password</label>
						<Input className="bg-white" type="text" required></Input>
						<label>Confirm password </label>
						<Input className="bg-white" type="password" required></Input>

						<Button
							type="submit"
							className="block w-full mt-12"
							// onClick={(e) => {}}
						>
							Change password
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default GenerateNewPassword;
