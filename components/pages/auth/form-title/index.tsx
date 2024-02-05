import React from "react";

import { cn } from "@/lib/utils";

interface AuthFormTitleProps {
  centerHeading?: boolean;
  mainHeading: string;
  subHeading: string;
}

export const AuthFormTitle: React.FC<AuthFormTitleProps> = ({
  centerHeading,
  mainHeading,
  subHeading,
}) => {
  return (
    <div className="space-y-2.5">
      <h1
        className={cn(
          "text-2xl font-bold leading-10 text-gray-900",
          centerHeading ? "text-center" : "",
        )}
      >
        {mainHeading}
      </h1>
      <p
        className={cn(
          "text-sm leading-snug text-gray-500",
          centerHeading ? "text-center" : "",
        )}
      >
        {subHeading}
      </p>
    </div>
  );
};
