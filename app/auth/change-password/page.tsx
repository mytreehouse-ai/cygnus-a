import React from "react";

import { ChangePasswordForm } from "@/components/pages/auth/change-password/change-password-form";

const ChangePasswordPage = async () => {
  // TODO: Make a server call here to check if reset password token is valid
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded bg-white p-8">
        <div className="space-y-2.5">
          <h1 className="text-2xl font-bold leading-10 text-gray-900">
            Reset your password
          </h1>
          <p className="text-sm leading-snug text-gray-500">
            Almost done! Create a strong password, enter it, and you&apos;re
            good to go.
          </p>
        </div>
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePasswordPage;
