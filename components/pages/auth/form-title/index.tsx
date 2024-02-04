import React from "react";

interface AuthFormTitleProps {
  mainHeading: string;
  subHeading: string;
}

export const AuthFormTitle: React.FC<AuthFormTitleProps> = ({
  mainHeading,
  subHeading,
}) => {
  return (
    <div className="space-y-2.5">
      <h1 className="text-2xl font-bold leading-10 text-gray-900">
        {mainHeading}
      </h1>
      <p className="text-sm leading-snug text-gray-500">{subHeading}</p>
    </div>
  );
};
