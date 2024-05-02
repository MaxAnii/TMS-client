import { ResponsiveLine } from "@nivo/line";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
type responseDataType = {
	device_id: string;
	passengers_at_8_10: string;
	passengers_at_10_12: string;
	passengers_at_12_2: string;
	passengers_at_2_4: string;
	passengers_at_4_6: string;
	passengers_at_6_8: string;
}[];
type comparisonDataType = {
	id: string;
	color: string;
	data: { x: string; y: number }[];
}[];
const MyResponsiveLine = ({ ...props }: { date: string }) => {
	const [data, setData] = useState<responseDataType>([]);
	const [comparisonData, setComparisonData] = useState<comparisonDataType>([]);
	const getComparisonData = async () => {
		try {
			const response = await fetch(
				`http://localhost:5000/passenger/comparison/${props.date}`
			);
			if (response.status === 200) {
				const jsonData = await response.json();
				setData(jsonData);
			} else if (response.status === 404) {
				setData([]);
			}
		} catch (error: any) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		getComparisonData();
	}, [props.date]);

	useEffect(() => {
		setComparisonData([]);
		if (data) {
			const formattedData = data.map((device) => ({
				id: device.device_id,
				color: "hsl(" + Math.floor(Math.random() * 360) + ", 70%, 50%)",
				data: [
					{ x: "8:00 AM", y: parseInt(device.passengers_at_8_10) || 0 },
					{ x: "10:00 AM", y: parseInt(device.passengers_at_10_12) || 0 },
					{ x: "12:00 PM", y: parseInt(device.passengers_at_12_2) || 0 },
					{ x: "2:00 PM", y: parseInt(device.passengers_at_2_4) || 0 },
					{ x: "4:00 PM", y: parseInt(device.passengers_at_4_6) || 0 },
					{ x: "6:00 PM", y: parseInt(device.passengers_at_6_8) || 0 },
					{ x: "8:00 PM", y: parseInt(device.passengers_at_8_10) || 0 },
				],
			}));

			setComparisonData(formattedData);
		}
	}, [data]);
	console.log(data);
	return (
		<Card className="w-full h-[500px] m-7 ml-0">
			<ResponsiveLine
				data={comparisonData}
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
