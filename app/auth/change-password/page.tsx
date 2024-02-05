import React from "react";

import AuthFormTitle from "@/components/pages/auth/form-title";
import ChangePasswordForm from "@/components/pages/auth/change-password";

const ChangePasswordPage = async () => {
  // TODO: Make a server call here to check if reset password token is valid
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded bg-white p-8">
        <AuthFormTitle
          mainHeading="Reset your password"
          subHeading="Almost done! Create a strong password, enter it, and you're
            good to go."
        />
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default ChangePasswordPage;
