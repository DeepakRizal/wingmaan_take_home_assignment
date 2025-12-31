"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import ActionButton from "@/components/ActionButton";

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
    <div className="page-container">
      <div className="back-button-container">
        <BackButton onClick={handleBack} />
      </div>

      <div className="page-content-scrollable">
        <PageHeading
          heading="Let's talk about lifestyle"
          subtitle="You can answer honestly — we all have our quirks"
          center={true}
        />

        <div className="flex flex-col gap-6">
          {questions.map((question) => (
            <div
              key={question.key}
              className="card-white-purple-border"
            >
              <h3 className="text-lg font-bold text-purple mb-4">
                {question.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {options.map((option) => {
                  const isSelected = answers[question.key] === option;
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(question.key, option)}
                      className={`px-6 py-2 btn-pill ${
                        isSelected
                          ? "btn-pill-selected-pink"
                          : "btn-pill-unselected"
                      }`}
                    >
                      <span className="text-base">{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ActionButton onClick={handleNext} disabled={!allAnswered} />
    </div>
  );
}

