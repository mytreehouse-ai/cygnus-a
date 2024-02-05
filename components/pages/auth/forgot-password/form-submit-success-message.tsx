"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AuthFormTitle } from "../form-title";

interface FormSubmitSuccessMessageProps {
  email: string;
}

export const FormSubmitSuccessMessage: React.FC<
  FormSubmitSuccessMessageProps
> = ({ email }) => {
  return (
    <div className="space-y-10">
      <AuthFormTitle
        mainHeading="Email on the way!"
        subHeading={`We sent you password reset instructions to ${email}. If it doesn't show up soon, check your spam folder. We sent it from the email address noreply@address.here`}
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
