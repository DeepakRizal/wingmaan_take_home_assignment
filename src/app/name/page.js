"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import InputField from "@/components/InputField";
import ActionButton from "@/components/ActionButton";

export default function NameInputPage() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (name.trim()) {
      localStorage.setItem("userName", name.trim());
      router.push("/welcome");
    }
  };

  return (
    <div className="page-container">
      <div className="back-button-container">
        <BackButton onClick={handleBack} />
      </div>

      <div className="page-content">
        <PageHeading
          heading="Cool, what's your name?"
          subtitle="I'll save it as your display name."
        />

        <div className="w-full mb-80">
          <InputField
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <ActionButton onClick={handleNext} disabled={!name.trim()} />
    </div>
  );
}

