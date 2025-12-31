"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ConfettiBackground from "@/components/ConfettiBackground";

export default function LocationConfirmedPage() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  useEffect(() => {
    const storedLocation = localStorage.getItem("userLocation");
    if (!storedLocation) {
      router.push("/location/input");
      return;
    }
    setLocation(storedLocation);

    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  if (!location) {
    return null;
  }

  return (
    <div className="page-container-purple">
      <ConfettiBackground />

      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 pb-64 relative z-20">
        <div className="text-center max-w-md">
          <p className="text-2xl md:text-3xl text-white font-serif mb-8 leading-relaxed">
            Sweet — the city of startups and filter coffee
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-12 z-10">
        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="40" y="220" width="200" height="20" rx="2" fill="#2C2C2C" />
          <rect x="50" y="200" width="180" height="25" rx="2" fill="#2C2C2C" />
          <rect x="60" y="180" width="160" height="25" rx="2" fill="#2C2C2C" />
          <rect x="70" y="160" width="140" height="25" rx="2" fill="#2C2C2C" />
          <rect x="80" y="140" width="120" height="25" rx="2" fill="#2C2C2C" />
          <rect x="90" y="120" width="100" height="25" rx="2" fill="#2C2C2C" />
          <circle
            cx="140"
            cy="100"
            r="28"
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
          <rect x="130" y="128" width="20" height="35" fill="black" />
          <rect x="120" y="163" width="40" height="60" fill="black" />
          <rect x="110" y="223" width="60" height="20" rx="2" fill="#2C2C2C" />
          <rect x="60" y="220" width="30" height="15" rx="2" fill="white" />
          <rect x="190" y="220" width="30" height="15" rx="2" fill="white" />
          <rect x="70" y="210" width="20" height="10" rx="1" fill="white" />
          <rect x="190" y="210" width="20" height="10" rx="1" fill="white" />
          <circle cx="125" cy="95" r="6" fill="black" />
          <circle cx="155" cy="95" r="6" fill="black" />
          <path
            d="M130 105 Q140 110 150 105"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
          <rect x="135" y="75" width="10" height="18" rx="5" fill="black" />
          <rect
            x="190"
            y="190"
            width="50"
            height="40"
            rx="2"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
          />
          <rect x="195" y="195" width="40" height="30" fill="#2C2C2C" />
          <rect x="200" y="200" width="30" height="2" fill="white" />
          <rect x="200" y="206" width="30" height="2" fill="white" />
          <rect x="200" y="212" width="30" height="2" fill="white" />
          <rect x="200" y="218" width="30" height="2" fill="white" />
          <rect
            x="50"
            y="200"
            width="30"
            height="25"
            rx="2"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
          />
          <rect x="55" y="205" width="20" height="15" fill="#2C2C2C" />
          <rect x="58" y="208" width="14" height="1.5" fill="white" />
          <rect x="58" y="212" width="14" height="1.5" fill="white" />
          <rect x="58" y="216" width="14" height="1.5" fill="white" />
          <rect
            x="200"
            y="195"
            width="15"
            height="12"
            rx="1"
            fill="white"
            stroke="black"
            strokeWidth="1"
          />
          <rect x="202" y="197" width="11" height="8" fill="#2C2C2C" />
        </svg>
      </div>
    </div>
  );
}
