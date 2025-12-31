"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (!storedName) {
      router.push("/gender");
      return;
    }
    setUserName(storedName);
  }, [router]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const handleTakeQuiz = () => {
    router.push("/native-place");
  };

  if (!userName) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-6 pt-12 pb-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary-purple)] mb-1">
              {getGreeting()}, {userName}
            </h1>
            <p className="text-base text-[var(--primary-purple)] opacity-70">
              Let&apos;s find you a date!
            </p>
          </div>
          <div className="flex gap-4">
            <button className="relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="#5B2E68"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="#5B2E68"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="#5B2E68"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4">Your Dashboard</h2>
          <div className="flex gap-4">
            <div className="flex-1 card-light-purple">
              <p className="text-sm text-purple mb-2">Profile</p>
              <p className="text-3xl font-bold text-purple">50%</p>
            </div>
            <div className="flex-1 card-light-purple">
              <p className="text-sm text-purple mb-2">Compatibility Quiz</p>
              <p className="text-3xl font-bold text-purple">10%</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-4">Know Your Type</h2>
          <button
            onClick={handleTakeQuiz}
            className="w-full bg-[var(--primary-purple)] text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Take A Quiz
          </button>
        </div>

        <div className="mb-24">
          <h2 className="text-xl font-bold text-black mb-4">Let&apos;s Know About Us</h2>
          <div className="card-light-purple">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-2">What?</h3>
              <h4 className="text-xl font-bold text-black mb-3">
                Making dating real again.
              </h4>
              <p className="text-base text-black opacity-80 leading-relaxed">
                We help you skip the endless swipes and chats - and actually meet people who truly fit your vibe.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[var(--bg-light-purple)] rounded-t-3xl px-6 py-4">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1">
            <div className="bg-[var(--primary-purple)] rounded-full px-4 py-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xs text-white font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z"
                stroke="#5B2E68"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                stroke="#5B2E68"
                strokeWidth="2"
              />
              <line x1="16" y1="2" x2="16" y2="6" stroke="#5B2E68" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="#5B2E68" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="#5B2E68" strokeWidth="2" />
            </svg>
          </button>
          <button className="flex flex-col items-center gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="#5B2E68"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="7" r="4" stroke="#5B2E68" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

