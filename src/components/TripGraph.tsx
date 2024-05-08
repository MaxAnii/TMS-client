import { ResponsivePie } from "@nivo/pie";
import { Card } from "./ui/card";

const MyResponsivePie = () => {
	const data = [
		{
			id: "Active",
			label: "Active",
			value: Math.ceil(Math.random() * 100),
			color: "#61cdbb",
		},

		{
			id: "Inactive",
			label: "Inactive",
			value: Math.ceil(Math.random() * 100),
			color: "hsl(108, 70%, 50%)",
		},
	];
	return (
		<>
			<Card className="h-[500px] w-[600px]">
				<ResponsivePie
					data={data}
					margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
					innerRadius={0.5}
					padAngle={0.7}
					cornerRadius={3}
					activeOuterRadiusOffset={8}
					borderWidth={1}
					borderColor={{
						from: "color",
						modifiers: [["brighter", 0.2]],
					}}
					arcLinkLabelsSkipAngle={10}
					arcLinkLabelsTextColor="#333333"
					arcLinkLabelsThickness={2}
					arcLinkLabelsColor={{ from: "#999" }}
					arcLabelsSkipAngle={10}
					arcLabelsTextColor={{
						from: "color",
						modifiers: [["darker", 2]],
					}}
					legends={[
						{
							anchor: "bottom",
							direction: "row",
							justify: false,
							translateX: 0,
							translateY: 56,
							itemsSpacing: 0,
							itemWidth: 100,
							itemHeight: 18,
							itemTextColor: "#999",
							itemDirection: "left-to-right",
							itemOpacity: 1,
							symbolSize: 18,
							symbolShape: "circle",
							effects: [
								{
									on: "hover",
									style: {
										itemTextColor: "#000",
									},
								},
							],
						},
					]}
				/>
			</Card>
		</>
	);
};

export default MyResponsivePie;
