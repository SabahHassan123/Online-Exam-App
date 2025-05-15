"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema, ForgotPasswordFields } from "@/lib/schemes/auth.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel } from "@/components/ui/form";
import { forgotPasswordAction } from "@/lib/apis/auth.api";

export default function ForgotPasswordForm() {
  // Navigation
  const router = useRouter();

  // Form
  const form = useForm<ForgotPasswordFields>({
    resolver: zodResolver(ForgotPasswordSchema), // Use Zod for schema-based validation
    defaultValues: {
      email: "", // Default email input value
    },
  });

  const { handleSubmit, setError, control } = form;

  // Functions
  const onSubmit = async (data: ForgotPasswordFields) => {
    // Call backend API with entered email
    const response = await forgotPasswordAction(data.email);

    if (response.success) {
      // If success, navigate to the Verify Code page with email as query param
      router.push(`/verify-code?email=${encodeURIComponent(data.email)}`);

      // Email should be stored in a context for example to prevent potential manipulations
    } else {
      // If the API returns an error (e.g., email not found), display it
      setError("email", {
        type: "manual",
        message: response.message || "Email not found", // Show API message under input
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-7">
              {/* Label */}
              <FormLabel className="sr-only">Email</FormLabel>

              {/* Field */}
              <FormControl>
                <Input {...field} placeholder="Enter Email" />
              </FormControl>

              {/* Message */}
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button */}
        <Button className="w-full rounded-xl py-5" type="submit">
          Send
        </Button>
      </form>
    </Form>
  );
}
