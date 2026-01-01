"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import InputField from "@/components/InputField";

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

      {name.trim() ? (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <button
            onClick={handleNext}
            className="transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next"
          >
            <Image
              src="/icons/buttons/namePageNext.svg"
              alt="Next"
              width={83}
              height={82}
              priority
            />
          </button>
        </div>
      ) : (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <button
            disabled
            className="opacity-50 cursor-not-allowed"
            aria-label="Next"
          >
            <Image
              src="/icons/buttons/namePageNext.svg"
              alt="Next"
              width={83}
              height={82}
              priority
            />
          </button>
        </div>
      )}
    </div>
  );
}

