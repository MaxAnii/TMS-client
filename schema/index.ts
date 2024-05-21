import { z } from "zod";

export const deviceDataSchema = z.object({
	modelNumber: z.string().min(2),
	vehicleNumber: z.string().min(2),
	manufacturer: z.string().min(2),
	capcity: z.string().min(1),
});
