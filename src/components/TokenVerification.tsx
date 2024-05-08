import { BallTriangle } from "react-loader-spinner";
import AuthFormContainer from "./AuthFormContainer";

const TokenVerification = () => {
	return (
		<div className=" bg-[#d0d0d0] flex justify-center items-center">
			<div className="min-h-screen">
				<AuthFormContainer
					title="Verifiying token!"
					description="Once the token is verified you can generate a new password."
				></AuthFormContainer>

				<div className="flex justify-center items-center p-5">
					<BallTriangle
						height={100}
						width={100}
						radius={5}
						color="#32012F"
						ariaLabel="ball-triangle-loading"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default TokenVerification;
