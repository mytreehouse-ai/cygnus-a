"use client";

import React from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { cn } from "@/lib/utils";

const formSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Confirm Password must be at least 8 characters long.",
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password does not match!",
        path: ["confirmPassword"],
      });
    }
  });

const ChangePasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <PasswordInput
                  className={cn(
                    fieldState.invalid
                      ? "border-red-400 bg-red-50 placeholder:text-red-500"
                      : "",
                  )}
                  placeholder="New password"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <PasswordInput
                  className={cn(
                    fieldState.invalid
                      ? "border-red-400 bg-red-50 placeholder:text-red-500"
                      : "",
                  )}
                  placeholder="Confirm New password"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <div className="space-y-1.5">
          <Button className="w-full" size="lg" type="submit">
            Submit
          </Button>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-sm">Already have an account?</span>
            <Link href="/auth/login">
              <Button className="m-0 h-0 p-0" type="button" variant="link">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ChangePasswordForm;
