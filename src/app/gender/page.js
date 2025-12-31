"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import GenderCard from "@/components/GenderCard";
import NextButton from "@/components/NextButton";

export default function GenderSelectionPage() {
  const [selectedGender, setSelectedGender] = useState(null);
  const router = useRouter();

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (selectedGender) {
      localStorage.setItem("userGender", selectedGender);
      router.push("/name");
    }
  };

  return (
    <div className="h-screen bg-[#F3E8F5] flex flex-col overflow-hidden">
      <div className="pt-4 pl-4 md:pt-6 md:pl-6">
        <BackButton onClick={handleBack} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12 lg:mb-16 text-center max-w-3xl px-4">
          Let&apos;s start by choosing your gender!
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 w-full max-w-4xl items-center justify-center mb-32 md:mb-40">
          <GenderCard
            gender="Man"
            imageSrc="/man.png"
            imageAlt="Man illustration"
            isSelected={selectedGender === "Man"}
            onClick={() => handleGenderSelect("Man")}
          />
          <GenderCard
            gender="Woman"
            imageSrc="/women.png"
            imageAlt="Woman illustration"
            isSelected={selectedGender === "Woman"}
            onClick={() => handleGenderSelect("Woman")}
          />
        </div>
      </div>

      <NextButton onClick={handleNext} disabled={!selectedGender} />
    </div>
  );
}
