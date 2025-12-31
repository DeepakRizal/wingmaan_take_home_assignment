"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AuthenticationPage() {
  const router = useRouter();

  const handleConnectWithGoogle = () => {
    router.push("/gender");
  };

  return (
    <div
      className="flex flex-col w-full h-screen overflow-hidden"
      style={{ backgroundColor: "var(--primary-purple)" }}
    >
      <div className="flex flex-1 items-center justify-center">
        <Image
          src="/logoWingMann.png"
          alt="WingMann Logo"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="pb-16">
        <div className="flex flex-col items-center gap-6 px-5">
          <button
            onClick={handleConnectWithGoogle}
            className="flex items-center justify-center w-full max-w-[300px] h-12 bg-white border-none rounded cursor-pointer transition-opacity hover:opacity-90 active:opacity-80"
          >
            <span className="text-[#3c4043] text-base font-medium">
              Connect with Google
            </span>
          </button>

          <p className="text-white text-sm text-center whitespace-nowrap">
            By continuing, I agree to all the terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
