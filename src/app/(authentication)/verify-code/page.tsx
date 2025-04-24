"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CodeVerificationFields,
  CodeVerificationSchema,
} from "@/lib/schemes/auth.schema";
import { ForgotPassword, VerifyCode } from "@/lib/apis/auth.api";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Message from "@/components/ui/message-popup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export default function Page() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();

  const [message, setMessage] = useState({ show: false, messageText: "" });

  const form = useForm<CodeVerificationFields>({
    resolver: zodResolver(CodeVerificationSchema),
    defaultValues: { code: "" },
  });

  const onSubmit = async (data: CodeVerificationFields) => {
    const response = await VerifyCode(data.code);

    if (response.success) {
      router.push(`/set-new-password?email=${encodeURIComponent(email!)}`);
    } else {
      // Show error under the input field
      form.setError("code", {
        type: "manual",
        message: response.message || "Invalid verification code",
      });

      // Optional: popup message
      setMessage({ show: true, messageText: response.message! });

      setTimeout(() => {
        setMessage((prev) => ({ ...prev, show: false }));
        setTimeout(() => {
          setMessage((prev) => ({ ...prev, messageText: "" }));
        }, 300);
      }, 3000);
    }
  };

  const handleResendVerificationCode = async () => {
    const response = await ForgotPassword(email!);
    if (response.success) {
      setMessage({ show: true, messageText: "OTP sent to your email" });

      // setTimeout(() => {
      //   setMessage((prev) => ({ ...prev, show: false }));
      //   setTimeout(() => {
      //     setMessage((prev) => ({ ...prev, messageText: "" }));
      //   }, 300);
      // }, 3000);
    }
  };

  return (
    <section>
      {/* verify code header */}
      <p className="text-2xl">Verify Code</p>

      {/* Verification Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="my-10 space-y-5"
        >
          {/* Code Field */}
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Resend Code */}
          <p className="font-light">
            Didn't receive a code?
            <button
              type="button"
              className="text-main font-medium ml-1"
              onClick={handleResendVerificationCode}
            >
              Resend
            </button>
          </p>

          {/* Submit Button */}
          <Button type="submit" className="w-full rounded-xl py-5">
            Verify
          </Button>
        </form>
      </Form>
    </section>
  );
}
