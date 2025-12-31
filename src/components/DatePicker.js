"use client";

import { useState, useRef, useEffect } from "react";

export default function DatePicker({ onDateSelect, initialDate }) {
  const [selectedDay, setSelectedDay] = useState(initialDate?.day || 1);
  const [selectedMonth, setSelectedMonth] = useState(initialDate?.month || 1);
  const [selectedYear, setSelectedYear] = useState(initialDate?.year || 2000);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const notifyDateChange = (day, month, year) => {
    if (onDateSelect) {
      onDateSelect({
        day,
        month,
        year
      });
    }
  };

  useEffect(() => {
    if (initialDate) {
      setSelectedDay(initialDate.day);
      setSelectedMonth(initialDate.month);
      setSelectedYear(initialDate.year);
    }
  }, [initialDate?.day, initialDate?.month, initialDate?.year]);

  const scrollToCenter = (ref, index) => {
    if (ref.current) {
      const itemHeight = 50;
      ref.current.scrollTop = index * itemHeight - itemHeight;
    }
  };

  return (
    <div className="bg-white rounded-2xl mt-6 border-2 border-[var(--primary-purple)] overflow-hidden">
      <div className="bg-[var(--primary-purple)] px-6 py-4">
        <p className="text-white text-center font-medium">Please select date</p>
      </div>
      <div className="flex justify-between gap-4 h-48 overflow-hidden relative p-6">
        <div className="flex-1 overflow-y-auto scrollbar-hide" ref={dayRef}>
          <div className="flex flex-col">
            {days.map((day) => (
              <div
                key={day}
                onClick={() => {
                  setSelectedDay(day);
                  scrollToCenter(dayRef, day - 1);
                  notifyDateChange(day, selectedMonth, selectedYear);
                }}
                className={`h-12 flex items-center justify-center text-black cursor-pointer transition-all ${
                  selectedDay === day
                    ? "text-xl font-bold scale-110"
                    : "text-base opacity-50"
                }`}
              >
                {String(day).padStart(2, "0")}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide" ref={monthRef}>
          <div className="flex flex-col">
            {months.map((month, index) => (
              <div
                key={month}
                onClick={() => {
                  const newMonth = index + 1;
                  setSelectedMonth(newMonth);
                  scrollToCenter(monthRef, index);
                  notifyDateChange(selectedDay, newMonth, selectedYear);
                }}
                className={`h-12 flex items-center justify-center text-black cursor-pointer transition-all ${
                  selectedMonth === index + 1
                    ? "text-xl font-bold scale-110"
                    : "text-base opacity-50"
                }`}
              >
                {month}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide" ref={yearRef}>
          <div className="flex flex-col">
            {years.map((year) => (
              <div
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                  const yearIndex = years.indexOf(year);
                  scrollToCenter(yearRef, yearIndex);
                  notifyDateChange(selectedDay, selectedMonth, year);
                }}
                className={`h-12 flex items-center justify-center text-black cursor-pointer transition-all ${
                  selectedYear === year
                    ? "text-xl font-bold scale-110"
                    : "text-base opacity-50"
                }`}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

