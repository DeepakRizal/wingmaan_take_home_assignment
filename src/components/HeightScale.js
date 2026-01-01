"use client";

import { useRef } from "react";

export default function HeightScale({ selectedHeight, onHeightChange }) {
  const scaleRef = useRef(null);

  const heights = [];
  for (let i = 4.1; i <= 5.8; i += 0.1) {
    heights.push(parseFloat(i.toFixed(1)));
  }
  heights.reverse(); // 5.8 top → 4.1 bottom

  const updateHeightFromPointer = (clientY) => {
    if (!scaleRef.current) return;

    const rect = scaleRef.current.getBoundingClientRect();
    const y = clientY - rect.top;
    const percentage = Math.max(0, Math.min(1, y / rect.height));
    const index = Math.round(percentage * (heights.length - 1));
    const clampedIndex = Math.max(0, Math.min(index, heights.length - 1));

    onHeightChange(heights[clampedIndex]);
  };

  return (
    <div className="relative flex items-center justify-center h-full">
      <div
        ref={scaleRef}
        className="
          relative h-full flex flex-col justify-between
          py-2 sm:py-3 md:py-4
          touch-none select-none
          cursor-pointer
        "
        onPointerDown={(e) => {
          e.preventDefault();
          e.currentTarget.setPointerCapture(e.pointerId);
          updateHeightFromPointer(e.clientY);
        }}
        onPointerMove={(e) => {
          updateHeightFromPointer(e.clientY);
        }}
        onPointerUp={(e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }}
        onPointerCancel={(e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }}
      >
        {heights.map((height) => {
          const isSelected = Math.abs(height - selectedHeight) < 0.05;

          return (
            <div
              key={height}
              className="relative flex items-center h-[20px] sm:h-[22px] md:h-6"
            >
              <div
                className={`w-8 sm:w-9 md:w-10 h-0.5 ${
                  isSelected
                    ? "bg-[var(--primary-purple)]"
                    : "bg-[var(--primary-purple)] opacity-30"
                }`}
              />

              <span
                className={`ml-2 sm:ml-2.5 md:ml-3 text-[10px] sm:text-xs ${
                  isSelected
                    ? "text-[var(--primary-purple)] font-semibold"
                    : "text-[var(--primary-purple)] opacity-50"
                }`}
              >
                {height}
              </span>

              {isSelected && (
                <div
                  className="
                    absolute right-0
                    w-12 sm:w-14 md:w-16
                    h-0.5 bg-[var(--primary-purple)]
                    -translate-x-3 sm:-translate-x-4
                    pointer-events-none z-10
                  "
                  style={{
                    top: "50%",
                    transform: "translateX(-12px) translateY(-50%)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
