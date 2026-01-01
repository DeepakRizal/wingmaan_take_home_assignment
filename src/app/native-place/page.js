"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import InputField from "@/components/InputField";

export default function NativePlacePage() {
  const router = useRouter();
  const [nativePlace, setNativePlace] = useState("");

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (nativePlace.trim()) {
      localStorage.setItem("userNativePlace", nativePlace.trim());
      router.push("/story");
    }
  };

  return (
    <div className="page-container">
      <div className="back-button-container">
        <BackButton onClick={handleBack} />
      </div>

      <div className="page-content">
        <PageHeading
          heading="What's your native place?"
          subtitle="It's good to know where's someone story began."
        />

        <div className="w-full mb-80">
          <InputField
            placeholder="Enter Location"
            value={nativePlace}
            onChange={(e) => setNativePlace(e.target.value)}
          />
        </div>
      </div>

      {nativePlace.trim() ? (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <button
            onClick={handleNext}
            className="transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next"
          >
            <Image
              src="/icons/buttons/nativePlaceNext.svg"
              alt="Next"
              width={84}
              height={84}
              priority
            />
          </button>
        </div>
      ) : (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <button
            disabled
            className="opacity-50 cursor-not-allowed"
            aria-label="Next"
          >
            <Image
              src="/icons/buttons/nativePlaceNext.svg"
              alt="Next"
              width={84}
              height={84}
              priority
            />
          </button>
        </div>
      )}
    </div>
  );
}

