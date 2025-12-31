"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import InputField from "@/components/InputField";
import ActionButton from "@/components/ActionButton";

export default function NativePlacePage() {
  const router = useRouter();
  const [nativePlace, setNativePlace] = useState("");

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (nativePlace.trim()) {
      localStorage.setItem("userNativePlace", nativePlace.trim());
      router.push("/story");
    }
  };

  return (
    <div className="page-container">
      <div className="back-button-container">
        <BackButton onClick={handleBack} />
      </div>

      <div className="page-content">
        <PageHeading
          heading="What's your native place?"
          subtitle="It's good to know where's someone story began."
        />

        <div className="w-full mb-80">
          <InputField
            placeholder="Enter Location"
            value={nativePlace}
            onChange={(e) => setNativePlace(e.target.value)}
          />
        </div>
      </div>

      <ActionButton onClick={handleNext} disabled={!nativePlace.trim()} />
    </div>
  );
}

