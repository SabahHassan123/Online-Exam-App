import React from "react";
import QuizCardTemp from "../../quizes-history/_components/quiz-card-temp";
import { getAllExams } from "@/lib/apis/subject.api";

export default async function ExamsList() {
  //  get exams from the endpoint
  const response = await getAllExams();

  // check if there is any error
  if (!response.success) {
    console.log("Exams error:", response.message);
  }

  // destruct the exams from the response
  const { exams } = response;

  return (
    <div className="flex flex-col gap-5 pb-5 pt-2">
      {/* mapping all the exams for the user */}
      {exams?.map((exam) => {
        return (
          <QuizCardTemp
            key={exam._id}
            title={exam.title}
            duration={exam.duration}
            numberOfQuestions={exam.numberOfQuestions}
            subject={exam.subject}
          />
        );
      })}
    </div>
  );
}
