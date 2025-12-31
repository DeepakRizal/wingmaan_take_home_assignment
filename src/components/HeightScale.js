"use client";

import { useState, useEffect, useRef } from "react";

export default function HeightScale({ onHeightChange, initialHeight = 5.3 }) {
  const [selectedHeight, setSelectedHeight] = useState(initialHeight);
  const scaleRef = useRef(null);

  const heights = [];
  for (let i = 4.1; i <= 5.8; i += 0.1) {
    heights.push(parseFloat(i.toFixed(1)));
  }

  useEffect(() => {
    setSelectedHeight(initialHeight);
  }, [initialHeight]);

  useEffect(() => {
    if (onHeightChange) {
      onHeightChange(selectedHeight);
    }
  }, [selectedHeight]);

  const handleScaleClick = (e) => {
    if (scaleRef.current) {
      const rect = scaleRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const percentage = Math.max(0, Math.min(1, y / rect.height));
      const index = Math.round(percentage * (heights.length - 1));
      const clampedIndex = Math.max(0, Math.min(index, heights.length - 1));
      setSelectedHeight(heights[clampedIndex]);
    }
  };

  return (
    <div className="relative flex items-center justify-center" style={{ height: "400px" }}>
      <div
        ref={scaleRef}
        className="relative h-full flex flex-col justify-between py-4 cursor-pointer"
        onClick={handleScaleClick}
        onMouseMove={(e) => {
          if (e.buttons === 1) {
            handleScaleClick(e);
          }
        }}
      >
        {heights.map((height, index) => (
          <div key={height} className="relative flex items-center h-6">
            <div
              className={`w-10 h-0.5 ${
                Math.abs(height - selectedHeight) < 0.05
                  ? "bg-[var(--primary-purple)]"
                  : "bg-[var(--primary-purple)] opacity-30"
              }`}
            />
            <span
              className={`ml-3 text-xs ${
                Math.abs(height - selectedHeight) < 0.05
                  ? "text-[var(--primary-purple)] font-semibold"
                  : "text-[var(--primary-purple)] opacity-50"
              }`}
            >
              {height}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
