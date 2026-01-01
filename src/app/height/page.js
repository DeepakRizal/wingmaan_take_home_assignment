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
    <div className="min-h-[100svh] bg-[var(--bg-light-purple)] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="pt-3 pl-4 sm:pt-4 md:pt-6 md:pl-6 shrink-0">
        <BackButton onClick={() => router.back()} />
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 min-h-0">
        <div className="mb-4 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-1 sm:mb-2">
            Now tell me, how tall are you?
          </h1>

          <p className="text-sm sm:text-base text-purple opacity-70">
            Just getting the full picture of you.
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center w-full max-w-4xl">
          <div className="flex items-center gap-6">
            <HeightCharacter gender={gender} height={height} />

            <div className="flex items-center gap-4">
              <div className="h-[300px] touch-pan-y select-none">
                <HeightScale
                  selectedHeight={height}
                  onHeightChange={handleHeightChange}
                />
              </div>

              <HeightDisplay height={height} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="
          mt-auto
          pb-[calc(env(safe-area-inset-bottom)+1.5rem)]
          pt-2
          flex
          justify-center
        "
      >
        <button onClick={handleNext}>
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
