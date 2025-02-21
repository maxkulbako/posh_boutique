"use client";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import notFound from "@/assets/not-found.gif";
import Link from "next/link";
const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} Logo`}
        width={48}
        height={48}
        priority
      />
      <div className="p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p className="text-destructive py-4">
          The page you are looking for does not exist.
        </p>
        <Button asChild variant="outline">
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
