"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignupFields } from "@/lib/schemes/auth.schema";
import { useRouter } from "next/navigation";
import CLink from "@/components/link";
import Message from "@/components/ui/message-popup";
import { useState } from "react";
import { signUpAction } from "@/lib/apis/auth.api";

export default function Register() {
  const router = useRouter();

  // State for showing feedback messages
  const [message, setMessage] = useState({ show: false, messageText: "" });

  // Setup form handling with validation
  const form = useForm<SignupFields>({
    resolver: zodResolver(SignUpSchema), // Using Zod for schema validation
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: SignupFields) => {
    // Call signup API with form data and combined username
    const response = await signUpAction({
      ...data,
      username: `${data.firstName} ${data.lastName}`,
    });

    if (response.success) {
      // Navigate to signin page on successful signup
      router.push("/signin");
    } else {
      // Show error message if signup fails
      setMessage({ show: true, messageText: response.message! });
      setTimeout(() => setMessage({ show: false, messageText: "" }), 3000);
    }
  };

  return (
    <div>
      {/* Error or success message popup */}
      <Message messageText={message.messageText} show={message.show} />

      {/* Form Title */}
      <p className="text-2xl">Sign up</p>

      {/* Registration Form */}
      <Form {...form}>
        <form className="text-center" onSubmit={form.handleSubmit(onSubmit)}>
          {/* First Name Field */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />

          {/* Last Name Field */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Phone" {...field} />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem className="mb-10">
                <FormControl>
                  <Input type="password" placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage className="text-start" />
              </FormItem>
            )}
          />

          {/* Link to Signin Page */}
          <p className="font-light">
            Already have an account?
            <CLink href="signin" hyperText=" Login" styles="font-medium" />
          </p>

          {/* Submit Button */}
          <Button className="w-full rounded-xl py-5" type="submit">
            Create Account
          </Button>
        </form>
      </Form>
    </div>
  );
}
