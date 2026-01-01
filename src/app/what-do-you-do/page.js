"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";

export default function WhatDoYouDoPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["I'm Working", "I'm Studying", "Figuring It Out"];

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (selectedOption) {
      localStorage.setItem("userActivity", selectedOption);
      router.push("/education");
    }
  };

  return (
    <div className="page-container">
      <div className="back-button-container">
        <BackButton onClick={handleBack} />
      </div>

      <div className="page-content">
        <PageHeading
          heading="What do you do these days?"
          subtitle="like working, studying, or chasing something creative?"
        />

        <div className="flex flex-col gap-4 w-full">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`w-full py-4 px-6 btn-pill ${
                selectedOption === option
                  ? "btn-pill-selected"
                  : "btn-pill-unselected"
              }`}
            >
              <span className="text-base font-medium">{option}</span>
            </button>
          ))}
        </div>
      </div>

      {selectedOption ? (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <button
            onClick={handleNext}
            className="transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next"
          >
            <Image
              src="/icons/buttons/whatDoYouDoNext.svg"
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
              src="/icons/buttons/whatDoYouDoNext.svg"
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

