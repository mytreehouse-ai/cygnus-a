"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import AuthFormTitle from "../../form-title";

interface ForgotPasswordErrorMessageProps {
  email: string;
  code: string;
}

const ForgotPasswordErrorMessage: React.FC<ForgotPasswordErrorMessageProps> = ({
  email,
  code,
}) => {
  return (
    <div className="space-y-10">
      <AuthFormTitle
        centerHeading
        mainHeading="Email on the way!"
        subHeading={`We've sent password reset instructions to ${email}. If you don't receive an email shortly, please check your spam folder or verify that the email entered is associated with an active account. The email was sent from noreply@address.here.`}
      />
      <div>
        <Link href="/auth/login">
          <Button className="w-full" size="lg" type="button">
            Return to login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordErrorMessage;
