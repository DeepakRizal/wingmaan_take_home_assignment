"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import HeightCharacter from "@/components/HeightCharacter";
import HeightScale from "@/components/HeightScale";
import HeightDisplay from "@/components/HeightDisplay";
import ActionButton from "@/components/ActionButton";

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
    setHeight(newHeight);
  };

  const handleNext = () => {
    localStorage.setItem("userHeight", height.toString());
    router.push("/location/fetching");
  };

  if (!gender) return null;

  return (
    <div className="h-screen bg-[var(--bg-light-purple)] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="back-button-container">
        <BackButton onClick={() => router.back()} />
      </div>

      {/* Body - Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-purple mb-2">
            Now tell me, how tall are you?
          </h1>
          <p className="text-base text-purple opacity-70">
            Just getting the full picture of you.
          </p>
        </div>

        {/* Scale and character - centered */}
        <div className="flex items-center gap-8">
          <HeightCharacter gender={gender} height={height} />

          <div className="flex items-center gap-6">
            <div className="relative h-[400px]">
              <HeightScale
                onHeightChange={handleHeightChange}
                initialHeight={height}
              />

              {/* Indicator line */}
              <div
                className="absolute right-0 w-16 h-0.5 bg-[var(--primary-purple)] -translate-x-4 -translate-y-1/2"
                style={{
                  top: `${((height - 4.1) / (5.8 - 4.1)) * 100}%`,
                }}
              />
            </div>

            <HeightDisplay height={height} />
          </div>
        </div>
      </div>

      {/* Footer - Button at bottom */}
      <div className="pb-8 flex items-center justify-center">
        <ActionButton onClick={handleNext} disabled={false} />
      </div>
    </div>
  );
}
