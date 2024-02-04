"use client";

import React from "react";
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
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { cn } from "@/lib/utils";

// Define the schema for the login form with user-friendly error messages.
const formSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters long.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded bg-white p-8">
        <div className="space-y-2.5">
          <h1 className="text-2xl font-bold leading-10">Welcome Back!</h1>
          <p className="text-sm leading-snug text-gray-500">
            Fill in your login details to access your account
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className={cn(
                        fieldState.invalid
                          ? "border-red-400 bg-red-50 placeholder:text-red-500"
                          : "",
                      )}
                      placeholder="Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
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
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <div className="flex flex-col space-y-10">
              <div className="self-end">
                <Button className="m-0 h-0 p-0" type="button" variant="link">
                  Forgot Password?
                </Button>
              </div>
              <Button className="w-full" size="lg" type="submit">
                Log in
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
