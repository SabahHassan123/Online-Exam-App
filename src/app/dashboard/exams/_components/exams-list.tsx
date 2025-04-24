import { GetAllExams } from "@/lib/apis/subject.api";
import React from "react";
import QuizCardTemp from "../../quizes-history/_components/quiz-card-temp";

export default async function ExamsList() {
  //  get exams from the endpoint
  const response = await GetAllExams();

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
            title={exam.title}
            duration={exam.duration}
            numberOfQuestions={exam.numberOfQuestions}
            subject={exam.subject}
          />
        );
      })}
      {exams?.map((exam) => {
        return (
          <QuizCardTemp
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
