"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import HeightCharacter from "@/components/HeightCharacter";
import HeightScale from "@/components/HeightScale";
import HeightDisplay from "@/components/HeightDisplay";

const MIN_HEIGHT = 4.1;
const MAX_HEIGHT = 5.8;

export default function HeightPage() {
  const router = useRouter();
  const [height, setHeight] = useState(5.3);
  const [gender, setGender] = useState(null);

  useEffect(() => {
    const storedGender = localStorage.getItem("userGender");
    if (!storedGender) {
      router.push("/gender");
      return;
    }
    setGender(storedGender);
  }, [router]);

  const handleHeightChange = (newHeight) => {
    if (newHeight < MIN_HEIGHT || newHeight > MAX_HEIGHT) return;
    setHeight(newHeight);
  };

  const handleNext = () => {
    localStorage.setItem("userHeight", height.toString());
    router.push("/location/fetching");
  };

  if (!gender) return null;

  return (
    <div className="h-screen bg-[var(--bg-light-purple)] flex flex-col overflow-hidden touch-none">
      {/* Header */}
      <div className="pt-3 pl-4 sm:pt-4 md:pt-6 md:pl-6 shrink-0">
        <BackButton onClick={() => router.back()} />
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 min-h-0">
        {/* Heading */}
        <div className="mb-3 sm:mb-4 md:mb-6 text-center shrink-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple mb-1 sm:mb-2">
            Now tell me, how tall are you?
          </h1>
          <p className="text-sm sm:text-base text-purple opacity-70">
            Just getting the full picture of you.
          </p>
        </div>

        {/* Character + Scale */}
        <div className="flex-1 flex items-center justify-center min-h-0 w-full max-w-4xl">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* CHARACTER — visible on mobile now */}
            <div className="block">
              <HeightCharacter gender={gender} height={height} />
            </div>

            {/* SCALE */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <div className="relative h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] touch-auto">
                <HeightScale
                  onHeightChange={handleHeightChange}
                  initialHeight={height}
                  selectedHeight={height}
                />
              </div>

              <HeightDisplay height={height} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pb-4 sm:pb-6 md:pb-8 pt-2 sm:pt-3 md:pt-4 flex items-center justify-center shrink-0">
        <button
          onClick={handleNext}
          className="transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next"
        >
          <Image
            src="/icons/buttons/heightPageNext.svg"
            alt="Next"
            width={82}
            height={84}
            priority
          />
        </button>
      </div>
    </div>
  );
}
