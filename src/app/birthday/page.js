"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import PageHeading from "@/components/PageHeading";
import DateInputField from "@/components/DateInputField";
import DatePicker from "@/components/DatePicker";
import AgeConfirmationModal from "@/components/AgeConfirmationModal";

export default function BirthdayPage() {
  const router = useRouter();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [day, setDay] = useState("01");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("2005");
  const [calculatedAge, setCalculatedAge] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBack = () => {
    router.back();
  };

  const handleSkip = () => {
    router.push("/dashboard");
  };

  const handleInputFocus = () => {
    setShowDatePicker(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setDay(String(date.day).padStart(2, "0"));
    setMonth(String(date.month).padStart(2, "0"));
    setYear(String(date.year));
  };

  const calculateAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleNext = () => {
    if (day && month && year) {
      const age = calculateAge(parseInt(day), parseInt(month), parseInt(year));
      setCalculatedAge(age);
      setShowAgeModal(true);
    }
  };

  const handleConfirmAge = () => {
    if (selectedDate) {
      localStorage.setItem("userBirthday", JSON.stringify(selectedDate));
      localStorage.setItem("userAge", calculatedAge.toString());
    }
    setShowAgeModal(false);
    router.push("/height");
  };

  const isDateValid = () => {
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);
    return (
      dayNum >= 1 &&
      dayNum <= 31 &&
      monthNum >= 1 &&
      monthNum <= 12 &&
      yearNum >= 1900 &&
      yearNum <= new Date().getFullYear()
    );
  };

  return (
    <div className="page-container">
      <div className="back-button-container flex justify-between items-start">
        <BackButton onClick={handleBack} />
        {showDatePicker && (
          <button
            onClick={handleSkip}
            className="pr-4 pt-4 text-[#22C55E] font-medium text-base hover:opacity-80 transition-opacity"
          >
            Skip
          </button>
        )}
      </div>

      <div className="page-content">
        <PageHeading
          heading="When's your birthday?"
          subtitle="I like sending good vibes to people on their special day"
        />

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <DateInputField
              label="Day"
              value={day}
              placeholder="01"
              onChange={(e) => setDay(e.target.value)}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="flex-1">
            <DateInputField
              label="Month"
              value={month}
              placeholder="01"
              onChange={(e) => setMonth(e.target.value)}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="flex-1">
            <DateInputField
              label="Year"
              value={year}
              placeholder="2005"
              onChange={(e) => setYear(e.target.value)}
              onFocus={handleInputFocus}
            />
          </div>
        </div>

        {showDatePicker && (
          <div className="relative">
            <DatePicker
              onDateSelect={handleDateSelect}
              initialDate={
                selectedDate || {
                  day: parseInt(day) || 1,
                  month: parseInt(month) || 1,
                  year: parseInt(year) || 2005,
                }
              }
            />
          </div>
        )}
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <button
          onClick={handleNext}
          disabled={!isDateValid()}
          className={`transition-all ${
            !isDateValid()
              ? "opacity-50 cursor-not-allowed"
              : "hover:scale-105 active:scale-95 cursor-pointer"
          }`}
          aria-label="Next"
        >
          <Image
            src={
              showDatePicker
                ? "/icons/buttons/birthdayDatePickerOpenNext.svg"
                : "/icons/buttons/birthdayPageNext.svg"
            }
            alt="Next"
            width={82}
            height={82}
            priority
          />
        </button>
      </div>

      {showAgeModal && calculatedAge && (
        <AgeConfirmationModal
          age={calculatedAge}
          onConfirm={handleConfirmAge}
          onClose={() => setShowAgeModal(false)}
        />
      )}
    </div>
  );
}
