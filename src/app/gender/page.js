"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import GenderCard from "@/components/GenderCard";
import NextButton from "@/components/NextButton";

export default function GenderSelectionPage() {
  const [selectedGender, setSelectedGender] = useState(null);
  const router = useRouter();

  const handleNext = () => {
    if (selectedGender) {
      localStorage.setItem("userGender", selectedGender);
      router.push("/name");
    }
  };

  return (
    <div className="min-h-screen bg-[#fff5f9] flex flex-col">
      {/* Header */}
      <div className="pt-3 pl-4 md:pt-6 md:pl-6 shrink-0">
        <BackButton onClick={() => router.back()} />
      </div>

      {/* Content */}
      <div
        className="
          flex-1
          flex
          flex-col
          items-center
          justify-center
          px-4
          pt-2
          pb-32
          md:pt-8
          md:pb-40
          overflow-y-auto
        "
      >
        {/* Heading */}
        <h1
          className="
            text-2xl
            md:text-4xl
            lg:text-5xl
            font-bold
            text-black
            mb-4
            md:mb-8
            text-center
            max-w-3xl
          "
        >
          Let&apos;s start by choosing your gender!
        </h1>

        {/* Cards */}
        <div className="flex gap-4 md:gap-6 w-full max-w-4xl justify-center">
          <GenderCard
            gender="Man"
            imageSrc="/images/man.png"
            imageAlt="Man illustration"
            isSelected={selectedGender === "Man"}
            onClick={() => setSelectedGender("Man")}
          />
          <GenderCard
            gender="Woman"
            imageSrc="/images/women.png"
            imageAlt="Woman illustration"
            isSelected={selectedGender === "Woman"}
            onClick={() => setSelectedGender("Woman")}
          />
        </div>
      </div>

      {/* Fixed Next Button */}
      {selectedGender ? (
        <div
          className="
            fixed
            left-1/2
            -translate-x-1/2
            bottom-6
            pb-[env(safe-area-inset-bottom)]
            z-50
          "
        >
          <button
            onClick={handleNext}
            className="transition-all hover:scale-105 active:scale-95"
            aria-label="Next"
          >
            <Image
              src="/icons/buttons/genderSelectedNext.svg"
              alt="Next"
              width={80}
              height={82}
              priority
            />
          </button>
        </div>
      ) : (
        <NextButton disabled />
      )}
    </div>
  );
}
