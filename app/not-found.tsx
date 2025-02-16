"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col  items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        alt="404"
        height={48}
        width={48}
        priority={true}
      />
      <div className=" text-center">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-destructive">Could not Found Requested page</p>
        <Button
          variant="outline"
          className="mt-4 my-4"
          onClick={() => (window.location.href = "/")}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
