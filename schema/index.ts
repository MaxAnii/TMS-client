import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().min(5),
	password: z.string().min(5),
});

export const resetLinkSchema = z.object({
	email: z.string().min(5),
});

export const newPasswordSchema = z
	.object({
		password: z.string().min(5),
		confirmPassword: z.string().min(5),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords must match",
	});
export const deviceDataSchema = z.object({
	modelNumber: z.string().min(2),
	vehicleNumber: z.string().min(2),
	manufacturer: z.string().min(2),
	capcity: z.string().min(1),
});
