"use client";

import Modal from "@/components/modal";
import QuestionHistoryCard from "./question-history-card";

interface ExamHistoryCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExamHistoryCard({
  isOpen,
  onClose,
}: ExamHistoryCardProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid grid-cols-2">
        <QuestionHistoryCard />
        <QuestionHistoryCard />
        <QuestionHistoryCard />
        <QuestionHistoryCard />
        <QuestionHistoryCard />
        <QuestionHistoryCard />
      </div>
    </Modal>
  );
}
