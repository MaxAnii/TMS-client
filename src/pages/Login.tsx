import AuthFormContainer from "@/components/AuthFormContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
	const navigate = useNavigate();
	return (
		<div className=" bg-[#d0d0d0] flex justify-center items-center">
			<div className="min-h-screen">
				<AuthFormContainer
					title="Welcome back!"
					description="Enter the Credentials to access your account."
				></AuthFormContainer>
				<div className="mt-10 p-2 md:p-0">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							navigate("/dashboard");
						}}
					>
						<label>Email address</label>
						<Input className="bg-white" type="email" required></Input>
						<label>Password</label>
						<Input className="bg-white" type="password" required></Input>
						<Link to="/forgetpassword" className="text-blue-950">
							{" "}
							Forget password?
						</Link>
						<Button
							type="submit"
							className="block w-full mt-12"
							// onClick={(e) => {}}
						>
							Login
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
