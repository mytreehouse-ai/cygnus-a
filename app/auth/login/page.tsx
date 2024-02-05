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
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { cn } from "@/lib/utils";

import AuthFormTitle from "@/components/pages/auth/form-title";
import { handleCredentialsLogin } from "./login";

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const login = await handleCredentialsLogin({
      username: values.username,
      password: values.password,
    });

    console.log(login);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded bg-white p-8">
        <AuthFormTitle
          mainHeading="Welcome Back!"
          subHeading="Fill in your login details to access your account"
        />
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
                      placeholder="Username"
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
                <Link href="/auth/forgot-password">
                  <Button className="m-0 h-0 p-0" type="button" variant="link">
                    Forgot Password?
                  </Button>
                </Link>
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
