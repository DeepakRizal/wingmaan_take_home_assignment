"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import InputField from "@/components/InputField";
import ActionButton from "@/components/ActionButton";

export default function LocationInputPage() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (location.trim()) {
      localStorage.setItem("userLocation", location.trim());
      router.push("/location/confirmed");
    }
  };

  return (
    <div className="h-screen bg-[#F3E8F5] flex flex-col overflow-hidden">
      <div className="pt-4 pl-4 md:pt-6 md:pl-6">
        <BackButton onClick={handleBack} />
      </div>

      <div className="flex-1 flex flex-col px-6 pt-8 pb-32 max-w-md w-full mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-purple)] mb-2">
            Where do you currently live?
          </h1>
          <p className="text-base text-[var(--primary-purple)] opacity-70">
            I&apos;ll try to show matches in the same city.
          </p>
        </div>

        <div className="w-full mb-80">
          <InputField
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <ActionButton onClick={handleNext} disabled={!location.trim()} />
    </div>
  );
}

