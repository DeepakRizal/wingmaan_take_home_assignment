"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
        <Image
          src="/Hands.png"
          alt="Handshake"
          width={380}
          height={320}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

