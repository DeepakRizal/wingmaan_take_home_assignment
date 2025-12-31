"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import InputField from "@/components/InputField";
import ActionButton from "@/components/ActionButton";

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

      <ActionButton
        onClick={handleNext}
        disabled={!story.trim() || wordCount > 50}
      />
    </div>
  );
}
