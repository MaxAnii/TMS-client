import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QuickSummaryDataCard = ({
	...props
}: {
	title: string;
	count: string;
	color: string;
}) => {
	return (
		<Card className={`w-[300px] ${props.color}`}>
			<CardHeader>
				<CardTitle>{props.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-xl font-bold">{props.count}</p>
			</CardContent>
		</Card>
	);
};

export default QuickSummaryDataCard;
