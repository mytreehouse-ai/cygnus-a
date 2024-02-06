"use client";

import React from "react";

import AuthFormTitle from "@/components/pages/auth/form-title";
import LoginForm from "@/components/pages/auth/login";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded bg-white p-8">
        <AuthFormTitle
          mainHeading="Welcome Back!"
          subHeading="Fill in your login details to access your account"
        />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
