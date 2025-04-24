"use client";
import React from "react";

interface CircularProgressProps {
  value: number; // e.g., 95
  label?: string;
}

export default function CircularProgress({
  value,
  label = "Performans",
}: CircularProgressProps) {
  const angle = (value / 100) * 360;

  return (
    <div className="relative w-40 h-40">
      {/* Conic gradient circle with a gap */}
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `conic-gradient(#22c55e ${angle}deg, #e5e7eb ${angle}deg 300deg, transparent 300deg 360deg)`,
        }}
      ></div>

      {/* Inner white circle */}
      <div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center text-center">
        <div className="text-2xl font-bold text-gray-800">{value}%</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  );
}

{
  /* <CircularProgress value={40} label="Performans" /> */
}
