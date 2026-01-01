"use client";

import { useState, useRef, useEffect } from "react";

export default function DatePicker({ onDateSelect, initialDate }) {
  const [selectedDay, setSelectedDay] = useState(initialDate?.day);
  const [selectedMonth, setSelectedMonth] = useState(initialDate?.month);
  const [selectedYear, setSelectedYear] = useState(initialDate?.year);

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

  const currentYear = new Date().getFullYear();
  const startYear = Math.max(initialDate?.year || currentYear, currentYear);
  const years = Array.from({ length: 120 }, (_, i) => startYear - i);

  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  useEffect(() => {
    if (initialDate) {
      setSelectedDay(initialDate.day);
      setSelectedMonth(initialDate.month);
      setSelectedYear(initialDate.year);
    }
  }, [initialDate]);

  const scrollToCenter = (ref, index) => {
    if (ref.current) {
      const itemHeight = 48;
      ref.current.scrollTop = index * itemHeight - itemHeight;
    }
  };

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
                scrollToCenter(dayRef, day - 1);
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
          {months.map((month, index) => (
            <div
              key={month}
              onClick={() => {
                const newMonth = index + 1;
                setSelectedMonth(newMonth);
                scrollToCenter(monthRef, index);
                notifyDateChange(selectedDay, newMonth, selectedYear);
              }}
              className={`h-12 flex items-center justify-center cursor-pointer transition-all ${
                selectedMonth === index + 1
                  ? "text-xl font-bold scale-110"
                  : "opacity-50"
              }`}
            >
              {month}
            </div>
          ))}
        </div>

        {/* Year */}
        <div className="flex-1 overflow-y-auto scrollbar-hide" ref={yearRef}>
          {years.map((year) => (
            <div
              key={year}
              onClick={() => {
                setSelectedYear(year);
                scrollToCenter(yearRef, years.indexOf(year));
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
