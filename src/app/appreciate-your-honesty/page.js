"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ConfettiBackground from "@/components/ConfettiBackground";

export default function AppreciateYourHonestyPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="page-container-purple">
      <ConfettiBackground />

      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-64 relative z-20">
        <div className="text-center max-w-md">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-serif mb-4 leading-tight">
            Appreciate your
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-bold leading-tight">
            honesty
          </h1>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-12 z-10">
        <svg
          width="380"
          height="320"
          viewBox="0 0 380 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="30" y="200" width="120" height="120" fill="#000000" />
          <rect x="35" y="190" width="110" height="22" fill="#FFFFFF" rx="3" />
          
          <rect x="230" y="200" width="120" height="120" fill="#000000" />
          <rect x="235" y="190" width="110" height="22" fill="#FFFFFF" rx="3" />
          
          <path
            d="M60 200 Q60 170 80 150 Q100 130 125 125 Q150 130 170 150 Q190 170 190 200"
            fill="#FFFFFF"
          />
          
          <path
            d="M190 200 Q190 170 210 150 Q230 130 255 125 Q280 130 300 150 Q320 170 320 200"
            fill="#FFFFFF"
          />
          
          <ellipse cx="180" cy="160" rx="22" ry="30" fill="#FFFFFF" />
          <ellipse cx="200" cy="160" rx="22" ry="30" fill="#FFFFFF" />
          
          <path
            d="M175 155 Q190 150 205 155"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>
    </div>
  );
}

