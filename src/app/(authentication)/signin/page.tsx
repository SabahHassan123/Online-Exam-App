"use client";

import React, { useState } from "react";
import CLink from "@/components/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginFields, LoginSchema } from "@/lib/schemes/auth.schema";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import Message from "@/components/ui/message-popup";

export default function Page() {
  // Use Next.js router to navigate after successful login
  const router = useRouter();

  // State for showing feedback messages
  const [message, setMessage] = useState({ show: false, messageText: "" });

  // Initialize the form using react-hook-form and zod validation
  const form = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  // Function to handle form submission
  const handleFormSubmit = async (data: LoginFields) => {
    // Call the credentials sign-in method
    const response = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/signin", // You may change this to "/dashboard" for clarity
      email: data.email,
      password: data.password,
    });

    // If no error, redirect to dashboard
    if (!response?.error) {
      // Successful login
      router.push("/dashboard");
    } else {
      // Show error message if login fails
      setMessage({ show: true, messageText: response.error });
      setTimeout(() => setMessage({ show: false, messageText: "" }), 1000);
    }
  };

  return (
    <div>
      {/* Error or success message popup */}
      {/* Message should be displayed above submit not as a toast */}
      <Message messageText={message.messageText} show={message.show} />

      {/* Heading */}
      <p className="text-2xl">Sign In</p>

      {/* Login form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)} className="mt-5">
          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-7">
                <FormControl>
                  <Input {...field} placeholder="Email" type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Password" type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Forgot password link */}
          <div className="w-full text-end mt-10">
            <CLink href="forgot-password" hyperText="Recover Password?" />
          </div>

          {/* Submit button */}
          <Button className="w-full rounded-xl py-5 mt-5" type="submit">
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}
