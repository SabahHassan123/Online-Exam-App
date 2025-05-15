"use client";

import QuestionForm from "./questions-form";
import { Providers } from "@/app/providers";

interface QuestionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuestionsModal({ isOpen, onClose }: QuestionsModalProps) {
  return (
    <Providers>
      <QuestionForm />
    </Providers>
  );
}
