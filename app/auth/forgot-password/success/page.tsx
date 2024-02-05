import React from "react";
import { redirect } from "next/navigation";

import { FormSubmitSuccessMessage } from "@/components/pages/auth/forgot-password/form-submit-success-message";

const ForgotPasswordSuccessPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const queryParams = searchParams as { email?: string };

  if (!queryParams?.email) {
    redirect("/auth/login");
  }

  // TODO: Check if the account really exist

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded bg-white p-8">
        <FormSubmitSuccessMessage email={queryParams.email} />
      </div>
    </div>
  );
};

export default ForgotPasswordSuccessPage;
