"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import ActionButton from "@/components/ActionButton";

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

      <ActionButton onClick={handleNext} disabled={!selectedOption} />
    </div>
  );
}

