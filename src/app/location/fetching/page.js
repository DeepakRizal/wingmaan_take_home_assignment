"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function FetchingLocationPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/location/input");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen bg-[#FFF5F9] flex flex-col overflow-hidden">
      <div className="pt-4 pl-4 md:pt-6 md:pl-6">
        <BackButton onClick={() => router.back()} />
      </div>

      <div className="flex-1 flex flex-col px-6 pt-8 pb-32 max-w-md w-full mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Where do you currently live?
          </h1>
          <p className="text-base text-black opacity-70">
            I&apos;ll try to show matches in the same city.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-8"
            >
              <path
                d="M50 10C35.641 10 24 21.641 24 36C24 50.359 50 80 50 80C50 80 76 50.359 76 36C76 21.641 64.359 10 50 10Z"
                stroke="black"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="50" cy="36" r="10" stroke="black" strokeWidth="3" fill="none" />
            </svg>
            <p className="text-lg text-black font-medium">Fetching Location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

