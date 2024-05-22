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

	// for (let i = 0; i < count; i++) {
	//     const randomY = Math.floor(Math.random() * 81); // Generate random number between 0 and 80
	//     randomData.push({
	//         x: hours[i],
	//         y: randomY,
	//     });
	// }

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
