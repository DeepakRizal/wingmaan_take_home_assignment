"use client";

import { useState, useRef, useEffect } from "react";

export default function DatePicker({ onDateSelect, initialDate }) {
  const today = new Date();

  const [selectedDay, setSelectedDay] = useState(
    initialDate?.day ?? today.getDate()
  );
  const [selectedMonth, setSelectedMonth] = useState(
    initialDate?.month ?? today.getMonth() + 1
  );
  const [selectedYear, setSelectedYear] = useState(
    initialDate?.year ?? today.getFullYear()
  );

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = today.getFullYear();
  const years = Array.from({ length: 120 }, (_, i) => currentYear - i);

  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const ITEM_HEIGHT = 48;

  const scrollToIndex = (ref, index) => {
    if (!ref.current) return;
    ref.current.scrollTo({
      top: index * ITEM_HEIGHT,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToIndex(dayRef, selectedDay - 1);
    scrollToIndex(monthRef, selectedMonth - 1);
    scrollToIndex(yearRef, years.indexOf(selectedYear));
  }, [selectedDay, selectedMonth, selectedYear]);

  const notifyDateChange = (day, month, year) => {
    onDateSelect?.({ day, month, year });
  };

  return (
    <div className="bg-white rounded-2xl mt-6 border-2 border-[var(--primary-purple)] overflow-hidden">
      <div className="bg-[var(--primary-purple)] px-6 py-4">
        <p className="text-white text-center font-medium">Please select date</p>
      </div>

      <div className="flex gap-4 h-48 p-6">
        {/* Day */}
        <div className="flex-1 overflow-y-auto scrollbar-hide" ref={dayRef}>
          {days.map((day) => (
            <div
              key={day}
              onClick={() => {
                setSelectedDay(day);
                notifyDateChange(day, selectedMonth, selectedYear);
              }}
              className={`h-12 flex items-center justify-center cursor-pointer transition-all ${
                selectedDay === day
                  ? "text-xl font-bold scale-110"
                  : "opacity-50"
              }`}
            >
              {String(day).padStart(2, "0")}
            </div>
          ))}
        </div>

        {/* Month */}
        <div className="flex-1 overflow-y-auto scrollbar-hide" ref={monthRef}>
          {months.map((month, index) => {
            const monthValue = index + 1;
            return (
              <div
                key={month}
                onClick={() => {
                  setSelectedMonth(monthValue);
                  notifyDateChange(selectedDay, monthValue, selectedYear);
                }}
                className={`h-12 flex items-center justify-center cursor-pointer transition-all ${
                  selectedMonth === monthValue
                    ? "text-xl font-bold scale-110"
                    : "opacity-50"
                }`}
              >
                {month}
              </div>
            );
          })}
        </div>

        {/* Year */}
        <div className="flex-1 overflow-y-auto scrollbar-hide" ref={yearRef}>
          {years.map((year) => (
            <div
              key={year}
              onClick={() => {
                setSelectedYear(year);
                notifyDateChange(selectedDay, selectedMonth, year);
              }}
              className={`h-12 flex items-center justify-center cursor-pointer transition-all ${
                selectedYear === year
                  ? "text-xl font-bold scale-110"
                  : "opacity-50"
              }`}
            >
              {year}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
