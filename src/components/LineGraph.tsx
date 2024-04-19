import { ResponsiveLine } from "@nivo/line";
import { Card } from "./ui/card";

const MyResponsiveLine = () => {
	function generateRandomData(count: number) {
		const randomData = [];
		const hours = [
			"8:00 AM",
			"10:00 AM",
			"12:00 PM",
			"2:00 PM",
			"4:00 PM",
			"6:00 PM",
			"8:00 PM",
		];

		for (let i = 0; i < count; i++) {
			const randomY = Math.floor(Math.random() * 81); // Generate random number between 0 and 80
			randomData.push({
				x: hours[i],
				y: randomY,
			});
		}

		return randomData;
	}
	const data = [
		{
			id: "Vehicle 1",
			color: "hsl(262, 70%, 50%)",
			data: generateRandomData(7),
		},
		{
			id: "Vehicle 2",
			color: "hsl(141, 70%, 50%)",
			data: generateRandomData(7),
		},
		{
			id: "Vehicle 3",
			color: "hsl(321, 70%, 50%)",
			data: generateRandomData(7),
		},
		{
			id: "Vehicle 4",
			color: "hsl(335, 70%, 50%)",
			data: generateRandomData(7),
		},
		{
			id: "Vehicle 5",
			color: "hsl(154, 70%, 50%)",
			data: generateRandomData(7),
		},
	];
	return (
		<Card className="w-full h-[500px] m-7 ml-0">
			<ResponsiveLine
				data={data}
				margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
				xScale={{ type: "point" }}
				yScale={{
					type: "linear",
					min: "auto",
					max: "auto",
				}}
				yFormat=" >-.2f"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "Time",
					legendOffset: 36,
					legendPosition: "middle",
					truncateTickAt: 0,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "Passengers",
					legendOffset: -40,
					legendPosition: "middle",
					truncateTickAt: 0,
				}}
				pointSize={10}
				pointColor={{ theme: "background" }}
				pointBorderWidth={2}
				pointBorderColor={{ from: "serieColor" }}
				pointLabelYOffset={-12}
				enableTouchCrosshair={true}
				useMesh={true}
				legends={[
					{
						anchor: "bottom-right",
						direction: "column",
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 0,
						itemDirection: "left-to-right",
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: "circle",
						symbolBorderColor: "rgba(0, 0, 0, .5)",
						effects: [
							{
								on: "hover",
								style: {
									itemBackground: "rgba(0, 0, 0, .03)",
									itemOpacity: 1,
								},
							},
						],
					},
				]}
			/>
		</Card>
	);
};

export default MyResponsiveLine;
