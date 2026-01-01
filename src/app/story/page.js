"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import InputField from "@/components/InputField";

export default function StoryPage() {
  const router = useRouter();
  const [story, setStory] = useState("");

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (story.trim()) {
      localStorage.setItem("userStory", story.trim());
      router.push("/what-do-you-do");
    }
  };

  const wordCount = story.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="page-container">
      <div className="back-button-container">
        <BackButton onClick={handleBack} />
      </div>

      <div className="page-content">
        <PageHeading
          heading="What's your story?"
          subtitle="Write about your journey in 50 words."
        />

        <div className="w-full mb-80">
          <InputField
            placeholder="Write your story here..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-2 text-right">
            {wordCount}/50 words
          </p>
        </div>
      </div>

      {story.trim() && wordCount <= 50 ? (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <button
            onClick={handleNext}
            className="transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next"
          >
            <Image
              src="/icons/buttons/storyNext.svg"
              alt="Next"
              width={82}
              height={84}
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
              src="/icons/buttons/storyNext.svg"
              alt="Next"
              width={82}
              height={84}
              priority
            />
          </button>
        </div>
      )}
    </div>
  );
}
