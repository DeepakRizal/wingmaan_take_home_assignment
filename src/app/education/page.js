"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";

const EDUCATION_OPTIONS = [
  { id: "highschool", label: "High School" },
  { id: "undergraduate", label: "Undergraduate" },
  { id: "postgraduate", label: "Postgraduate" },
  { id: "doctorate", label: "Doctorate" },
];

function EducationCard({ label, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        aspect-square
        rounded-xl
        flex
        items-center
        justify-center
        text-base
        font-normal
        transition-transform
        hover:scale-[1.02]
        active:scale-[0.98]
        border
        ${
          isSelected
            ? "bg-[var(--primary-purple)] text-white border-[var(--primary-purple)]"
            : "bg-white text-black border-[var(--primary-purple)]"
        }
      `}
      style={{ borderWidth: "1px" }}
    >
      {label}
    </button>
  );
}

export default function EducationPage() {
  const router = useRouter();
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleNext = () => {
    if (!selectedEducation) return;
    localStorage.setItem("userEducation", selectedEducation);
    router.push("/religion");
  };

  return (
    <div className="min-h-[100svh] flex flex-col overflow-hidden">
      {/* Back button */}
      <div className="shrink-0 pt-3 pl-4">
        <BackButton onClick={() => router.back()} />
      </div>

      {/* Page content */}
      <div className="flex-1 flex flex-col px-6 pt-6 pb-2 max-w-md w-full mx-auto min-h-0">
        <PageHeading
          heading="And your education?"
          subtitle="what's the highest degree or field you studied in?"
        />

        {/* Centered grid */}
        <div className="flex flex-1 items-center justify-center min-h-0">
          <div className="relative w-[260px] sm:w-[300px]">
            {/* Cards */}
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {EDUCATION_OPTIONS.map((option) => (
                <EducationCard
                  key={option.id}
                  label={option.label}
                  isSelected={selectedEducation === option.id}
                  onClick={() => setSelectedEducation(option.id)}
                />
              ))}
            </div>

            {/* Connector pipes */}
            <div
              className="absolute bg-[var(--primary-purple)] z-0"
              style={{
                left: "calc(50% - 12px)",
                top: "calc(25% - 5px)",
                width: "calc(50% + 12px)",
                height: "10px",
              }}
            />

            <div
              className="absolute bg-[var(--primary-purple)] z-0"
              style={{
                left: "calc(50% - 12px)",
                top: "calc(75% - 5px)",
                width: "calc(50% + 12px)",
                height: "10px",
              }}
            />

            <div
              className="absolute bg-[var(--primary-purple)] z-0"
              style={{
                left: "calc(75% - 5px)",
                top: "calc(50% - 12px)",
                width: "10px",
                height: "calc(50% + 12px)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Next button */}
      <div
        className="
          mt-auto
          pt-2
          pb-[calc(env(safe-area-inset-bottom)+1.25rem)]
          flex
          justify-center
          shrink-0
        "
      >
        <button
          onClick={handleNext}
          disabled={!selectedEducation}
          className={`transition-all ${
            selectedEducation
              ? "hover:scale-105 active:scale-95 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
          aria-label="Next"
        >
          <Image
            src="/icons/buttons/selectYourEducationNext.svg"
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
