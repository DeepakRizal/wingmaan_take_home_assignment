"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ConfettiBackground from "@/components/ConfettiBackground";
import WelcomeText from "@/components/WelcomeText";
import CharacterIllustration from "@/components/CharacterIllustration";

export default function WelcomePage() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedGender = localStorage.getItem("userGender");

    if (!storedName || !storedGender) {
      router.push("/gender");
      return;
    }

    setName(storedName);
    setGender(storedGender);

    const timer = setTimeout(() => {
      router.push("/birthday");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  if (!name || !gender) {
    return null;
  }

  return (
    <div className="page-container-purple">
      <ConfettiBackground />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-80 relative z-20">
        <WelcomeText name={name} />
      </div>

      <CharacterIllustration gender={gender} />
    </div>
  );
}

