import React from "react";

import { AuthFormTitle } from "@/components/pages/auth/form-title";
import { ForgotPasswordForm } from "@/components/pages/auth/forgot-password/forgot-password-form";

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded bg-white p-8">
        <AuthFormTitle
          mainHeading="Forgot password?"
          subHeading="All good, Enter your account’s email address and we’ll send you a
            link to reset your password."
        />
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
