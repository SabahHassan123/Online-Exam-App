"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPassword } from "@/lib/apis/auth.api";
import {
  ForgotPasswordSchema,
  ForgotPasswordFields,
} from "@/lib/schemes/auth.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export default function Page() {
  const router = useRouter();

  // Initialize the form using react-hook-form with Zod validation
  const form = useForm<ForgotPasswordFields>({
    resolver: zodResolver(ForgotPasswordSchema), // Use Zod for schema-based validation
    defaultValues: {
      email: "", // Default email input value
    },
  });

  // Destructure helper functions and state from form
  const { handleSubmit, setError, control } = form;

  // Form submit handler
  const onSubmit = async (data: ForgotPasswordFields) => {
    // Call backend API with entered email
    const response = await ForgotPassword(data.email);

    if (response.success) {
      // If success, navigate to the Verify Code page with email as query param
      router.push(`/verify-code?email=${encodeURIComponent(data.email)}`);
    } else {
      // If the API returns an error (e.g., email not found), display it
      setError("email", {
        type: "manual",
        message: response.message || "Email not found", // Show API message under input
      });
    }
  };

  return (
    <section>
      {/* Forgot Password header */}
      <p className="text-2xl">Forgot Your Password?</p>

      {/* Wrap form with shadcn <Form> to apply form context */}
      <Form {...form}>
        {/* HTML form element with custom submit handler */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          {/* Field wrapper for email */}
          <FormField
            control={control}
            name="email" // Field name (must match Zod schema)
            render={({ field }) => (
              <FormItem className="mb-7">
                {/* Input field for email */}
                <FormControl>
                  <Input {...field} placeholder="Enter Email" />
                </FormControl>

                {/* Display validation or API error message under input */}
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
    </section>
  );
}
