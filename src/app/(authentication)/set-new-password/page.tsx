"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { ResetPasswordFields, ResetPasswordSchema } from "@/lib/schemes/auth.schema";
import { resetPasswordAction } from "@/lib/apis/auth.api";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");

  // Initialize react-hook-form with Zod validation
  const form = useForm<ResetPasswordFields>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      rePassword: "",
    },
  });

  const { handleSubmit, control } = form;

  // Submit handler for form
  const onSubmit = async (data: ResetPasswordFields) => {
    const response = await resetPasswordAction({
      email: email!,
      newPassword: data.password,
    });

    if (response.success) {
      // On success, redirect user (you can change this route)
      router.push("/signin");
    }
  };

  return (
    <div>
      {/* Set new password header */}
      <p className="text-2xl">Set New Password</p>

      {/* Hook form context wrapper */}
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="text-end my-10 space-y-6">
          {/* Password Field */}
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="password" placeholder="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            control={control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="password" placeholder="Confirm Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button className="w-full rounded-xl py-5" type="submit">
            Set Password
          </Button>
        </form>
      </Form>
    </div>
  );
}
