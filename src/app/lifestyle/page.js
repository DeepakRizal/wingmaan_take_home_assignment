"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";

export default function LifestylePage() {
  const router = useRouter();
  const [answers, setAnswers] = useState({
    drink: null,
    smoke: null,
    exercise: null,
  });

  const questions = [
    { key: "drink", label: "Do You Drink?" },
    { key: "smoke", label: "Do You Smoke?" },
    { key: "exercise", label: "Do You Exercise?" },
  ];

  const options = ["Regularly", "Occasionally", "Never"];

  const handleAnswer = (questionKey, option) => {
    setAnswers((prev) => ({
      ...prev,
      [questionKey]: prev[questionKey] === option ? null : option,
    }));
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    localStorage.setItem("userLifestyle", JSON.stringify(answers));
    router.push("/appreciate-your-honesty");
  };

  const allAnswered = answers.drink && answers.smoke && answers.exercise;

  return (
    <div className="h-screen bg-[var(--bg-light-pink)] flex flex-col overflow-hidden">
      {/* Back button */}
      <div className="pt-3 pl-4 sm:pt-4 md:pt-6 md:pl-6 shrink-0">
        <BackButton onClick={handleBack} />
      </div>

      {/* Page content */}
      <div className="flex-1 flex flex-col items-center px-4 sm:px-6 min-h-0">
        {/* Heading */}
        <div className="text-center shrink-0 pt-2 sm:pt-3 mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2">
            Let&apos;s talk about lifestyle
          </h1>
          <p className="text-sm sm:text-base text-gray-700">
            You can answer honestly — we all have our quirks
          </p>
        </div>

        {/* Question cards */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-0 w-full max-w-md mb-6 sm:mb-8 md:mb-10">
          <div className="flex flex-col gap-2 sm:gap-3 w-full">
            {questions.map((question) => {
              return (
                <div
                  key={question.key}
                  className="bg-white rounded-xl border-4 border-[var(--primary-purple)] p-3 sm:p-4"
                >
                  {/* Question text - centered, bold, dark gray */}
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 sm:mb-3 text-center">
                    {question.label}
                  </h3>
                  
                  {/* Options - horizontal pill buttons */}
                  <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
                    {options.map((option) => {
                      const isOptionSelected = answers[question.key] === option;
                      return (
                        <button
                          key={option}
                          onClick={() => handleAnswer(question.key, option)}
                          className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full border transition-all text-xs sm:text-sm md:text-base ${
                            isOptionSelected
                              ? "bg-[var(--bg-selected-pink)] text-gray-800 border-gray-700 font-medium"
                              : "bg-white text-gray-800 border-gray-700"
                          }`}
                          style={{ borderWidth: "1px" }}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Next button - with clear gap from cards */}
      <div className="pb-4 sm:pb-6 md:pb-8 pt-2 sm:pt-3 shrink-0 flex items-center justify-center">
        {allAnswered ? (
          <button
            onClick={handleNext}
            className="transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next"
          >
            <Image
              src="/icons/buttons/lifestylePageNext.svg"
              alt="Next"
              width={84}
              height={84}
              priority
            />
          </button>
        ) : (
          <button
            disabled
            className="opacity-50 cursor-not-allowed"
            aria-label="Next"
          >
            <Image
              src="/icons/buttons/lifestylePageNext.svg"
              alt="Next"
              width={84}
              height={84}
              priority
            />
          </button>
        )}
      </div>
    </div>
  );
}

