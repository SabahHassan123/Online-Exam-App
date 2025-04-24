"use client";
import React from "react";

export default function QuestionForm() {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between ">
        <p className="text-sm text-blue-600">Question 1 of 20</p>
        <p className="text-sm">Time: 20</p>
      </header>

      {/* Steps */}
      <ul className="flex items-center gap-5 mt-5">
        {Array.from({ length: 10 }, (_, i) => i).map((i) => (
          <li key={i} className="size-2 bg-slate-300 rounded-full" />
        ))}
      </ul>

      {/* Form */}
    </div>
  );
}
