"use client";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

/**
 * ErrorComponent displays an error message and a button to attempt a retry.
 *
 * @param {ErrorProps} props - The props containing the error and reset function.
 * @returns {JSX.Element} The error component with a message and retry button.
 */
const ErrorComponent: React.FC<ErrorProps> = ({ error, reset }) => {
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
