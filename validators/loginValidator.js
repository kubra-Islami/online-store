import * as z from "zod";

const loginSchema = z.object({
    email: z
        .string({
            required: "Email is required",
        })
        .min(1, "Email is required")
        .email("Please enter a valid email address")
        .toLowerCase()
        .regex(/@gmail\.com$/, "Only Gmail addresses are allowed"),

    password: z
        .string({
            required: "Password is required",
        })
        .min(8, "Password must contain at least 8 characters")
        .max(128, "Password must not exceed 128 characters")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
});

export default loginSchema;
