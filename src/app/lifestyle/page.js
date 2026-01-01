"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";

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

  const handleNext = () => {
    localStorage.setItem("userLifestyle", JSON.stringify(answers));
    router.push("/appreciate-your-honesty");
  };

  const allAnswered = answers.drink && answers.smoke && answers.exercise;

  return (
    <div className="min-h-[100svh] bg-[var(--bg-light-pink)] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="pt-3 pl-4 shrink-0">
        <BackButton onClick={() => router.back()} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center px-4 min-h-0">
        {/* Heading */}
        <div className="text-center pt-2 mb-4 shrink-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-1">
            Let&apos;s talk about lifestyle
          </h1>
          <p className="text-sm sm:text-base text-gray-700">
            You can answer honestly — we all have our quirks
          </p>
        </div>

        {/* Questions */}
        <div className="w-full max-w-md flex flex-col gap-2">
          {questions.map((question) => (
            <div
              key={question.key}
              className="bg-white rounded-xl border-4 border-[var(--primary-purple)] p-3"
            >
              <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2 text-center">
                {question.label}
              </h3>

              <div className="flex gap-2 justify-center flex-wrap">
                {options.map((option) => {
                  const isSelected = answers[question.key] === option;

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(question.key, option)}
                      className={`px-3 py-1.5 rounded-full border text-xs sm:text-sm transition-all ${
                        isSelected
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
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className="
          mt-auto
          pt-2
          pb-[calc(env(safe-area-inset-bottom)+1rem)]
          flex justify-center
        "
      >
        <button
          onClick={handleNext}
          disabled={!allAnswered}
          className={`transition-all ${
            allAnswered
              ? "hover:scale-105 active:scale-95 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
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
      </div>
    </div>
  );
}
