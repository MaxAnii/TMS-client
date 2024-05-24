import AuthFormContainer from "@/components/AuthFormContainer";
import { Card } from "@/components/ui/card";
import { useEffect, useState, useTransition } from "react";
import { Bars } from "react-loader-spinner";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const token = searchParams.get("token");
	const navigate = useNavigate();
	const [message, setMessage] = useState("");
	const [isPending, startTransition] = useTransition();
	const verfiyToken = async () => {
		const response = await fetch(
			`http://localhost:5000/auth/verfiy-reset-token/${token}`,
			{
				method: "GET",
				credentials: "include",
			}
		);
		if (response.status === 200) {
			navigate(`/newpassword?token=${token}`);
			return;
		}
		const data = await response.json();
		setMessage(data.message);
	};
	useEffect(() => {
		startTransition(() => {
			verfiyToken();
		});
	}, []);
	return (
		<>
			<div className=" bg-[#d0d0d0] flex justify-center items-center">
				<div className="min-h-screen">
					<AuthFormContainer
						title="Verify Token!"
						description="Verify token to generate the new password."
					></AuthFormContainer>

					<Card className="flex justify-center mt-10">
						{isPending ? (
							<Bars
								height="80"
								width="80"
								color="#00000"
								ariaLabel="bars-loading"
								wrapperStyle={{}}
								wrapperClass=""
								visible={true}
							/>
						) : (
							<p className="text-red-800 text-xl">{message}</p>
						)}
					</Card>
				</div>
			</div>
		</>
	);
};

export default ResetPassword;
