"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="text-center">
        <p className="mb-4 text-lg text-red-600">{error.message}</p>
        <Button type="button" size="lg" onClick={reset}>
          Try again 🥹
        </Button>
      </div>
    </main>
  );
};

export default ErrorComponent;
