"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import ActionButton from "@/components/ActionButton";
import InputField from "@/components/InputField";

export default function ReligionPage() {
  const router = useRouter();
  const [selectedReligion, setSelectedReligion] = useState(null);
  const [customReligion, setCustomReligion] = useState("");

  const religionOptions = ["Christian", "Hindu", "Muslim"];

  const handleBack = () => {
    router.back();
  };

  const handleSkip = () => {
    router.push("/lifestyle");
  };

  const handleNext = () => {
    const religion = selectedReligion || customReligion.trim();
    if (religion) {
      localStorage.setItem("userReligion", religion);
      router.push("/lifestyle");
    }
  };

  return (
    <div className="page-container">
      <div className="back-button-container flex justify-between items-start">
        <BackButton onClick={handleBack} />
        <button
          onClick={handleSkip}
          className="pr-6 pt-2 text-purple font-medium"
        >
          Skip
        </button>
      </div>

      <div className="page-content">
        <PageHeading
          heading="Do you follow any particular religion?"
          subtitle="You can totally skip it if you'd like."
        />

        <div className="w-full mb-6">
          <InputField
            placeholder="What's It"
            value={customReligion}
            onChange={(e) => {
              setCustomReligion(e.target.value);
              setSelectedReligion(null);
            }}
          />
        </div>

        <div className="w-full">
          <div className="bg-[var(--primary-purple)] rounded-t-2xl px-6 py-4">
            <p className="text-white text-center font-medium">
              Please select your religion
            </p>
          </div>
          <div className="bg-white rounded-b-2xl btn-purple-border border-t-0 overflow-hidden">
            {religionOptions.map((religion, index) => (
              <button
                key={religion}
                onClick={() => {
                  setSelectedReligion(religion);
                  setCustomReligion("");
                }}
                className={`w-full py-4 px-6 text-left border-b border-gray-200 last:border-b-0 transition-all ${
                  selectedReligion === religion
                    ? "bg-purple-50 font-bold text-gray-900"
                    : "bg-white text-gray-900 font-normal"
                }`}
              >
                <span className={`text-base ${selectedReligion === religion ? "font-bold" : ""}`}>{religion}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <ActionButton
        onClick={handleNext}
        disabled={!selectedReligion && !customReligion.trim()}
      />
    </div>
  );
}

