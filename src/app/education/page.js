"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import ActionButton from "@/components/ActionButton";

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
    <div className="page-container flex flex-col min-h-screen">
      {/* Back button */}
      <div className="back-button-container">
        <BackButton onClick={() => router.back()} />
      </div>

      {/* Page content */}
      <div className="page-content flex flex-col flex-1">
        <PageHeading
          heading="And your education?"
          subtitle="what's the highest degree or field you studied in?"
        />

        {/* Centered grid */}
        <div className="flex flex-1 items-center justify-center">
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

            {/* Connector pipes (touching cards exactly as requested) */}
            {/* Top horizontal */}
            <div
              className="absolute bg-[var(--primary-purple)] z-0"
              style={{
                left: "calc(50% - 12px)",
                top: "calc(25% - 5px)",
                width: "calc(50% + 12px)",
                height: "10px",
              }}
            />

            {/* Bottom horizontal */}
            <div
              className="absolute bg-[var(--primary-purple)] z-0"
              style={{
                left: "calc(50% - 12px)",
                top: "calc(75% - 5px)",
                width: "calc(50% + 12px)",
                height: "10px",
              }}
            />

            {/* Right vertical */}
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

      {/* Next button pinned to bottom */}
      <div className="pb-6 flex justify-center">
        <ActionButton onClick={handleNext} disabled={!selectedEducation} />
      </div>
    </div>
  );
}
