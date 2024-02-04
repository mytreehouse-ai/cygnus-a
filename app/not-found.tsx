import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <p className="mb-4 text-2xl font-light text-gray-600">Page not found</p>
      <p className="mb-8 text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/">
        <Button type="button" variant="link">
          Go back home
        </Button>
      </Link>
    </main>
  );
};

export default NotFound;
