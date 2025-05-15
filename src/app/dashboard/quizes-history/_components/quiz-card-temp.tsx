"use client";

import { useState } from "react";
import ExamIcon from "assets/images/skill-icons_html.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import QuestionsModal from "../../exams/_components/questions-modal";
import ExamHistoryCard from "./exam-history-card";

interface QuizProps {
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  numberOfCorrected?: number;
}

const QuizCardTemp = ({ title, duration, subject, numberOfQuestions, numberOfCorrected }: QuizProps) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="rounded-lg shadow-md bg-white mx-4 flex justify-between items-center px-7 py-3">
      <div className="flex gap-5">
        <Image src={ExamIcon} alt="Exam Icon" className="object-contain" />
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-lg text-black">{title}</p>
            <p className="text-sm">{numberOfQuestions} Questions</p>
          </div>
          {numberOfCorrected && (
            <p className="text-sm font-medium text-main">
              {numberOfCorrected} corrected answers in {duration} min
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-black text-sm">{duration} Minutes</p>
        <Button className="m-0" onClick={handleModal}>
          {numberOfCorrected ? "Answers" : "Start"}
        </Button>
      </div>
      {numberOfCorrected !== undefined ? (
        <ExamHistoryCard isOpen={openModal} onClose={handleModal} />
      ) : (
        <QuestionsModal isOpen={openModal} onClose={handleModal} />
      )}
    </div>
  );
};

export default QuizCardTemp;
