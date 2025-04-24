import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div className="rounded-md shadow-md p-4 bg-white">{children}</div>;
}
