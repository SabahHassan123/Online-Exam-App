import z from "zod";

export const LoginSchema = z.object({
  email: z.string({ required_error: "Email is required" }).min(1, "Email is required").email("Please enter a valid email address"),

  password: z.string({ required_error: "Password is required" }).min(1, "Password is required"),
});

export const SignUpSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(10, "Phone number is required"), // Proper validation should've been applied
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"), // Proper validation should've been applied
    rePassword: z.string().min(8, "Confirm password is required"),
  })
  .refine((data) => data.password === data.rePassword, {
    path: ["rePassword"],
    message: "Passwords do not match",
  });

export const CodeVerificationSchema = z.object({
  code: z.string().min(1, "Verification code is required"), // Proper validation should've been applied
});

export const ForgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
});

export const ResetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"), // Proper validation should've been applied
    rePassword: z.string(),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type ResetPasswordFields = z.infer<typeof ResetPasswordSchema>;
export type LoginFields = z.infer<typeof LoginSchema>;
export type SignupFields = z.infer<typeof SignUpSchema>;
export type CodeVerificationFields = z.infer<typeof CodeVerificationSchema>;
export type ForgotPasswordFields = z.infer<typeof ForgotPasswordSchema>;
