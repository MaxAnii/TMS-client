import logo from "@/assets/tms_logo.jpeg";
const AuthFormContainer = ({
	...props
}: {
	title: String;
	description: string;
}) => {
	return (
		<div>
			<img
				src={logo}
				alt="logo"
				className="md:w-[416px] md:h-[360px] w-[300px] h-[250px]"
			></img>
			<div>
				<h3 className="text-3xl font-semibold">{props.title}</h3>
				<p className="my-2 text-lg">{props.description}</p>
			</div>
		</div>
	);
};

export default AuthFormContainer;
