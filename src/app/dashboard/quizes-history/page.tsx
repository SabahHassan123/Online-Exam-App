// import CircularProgress from "@/app/_components/circular-progress";
import QuizCardTemp from "./_components/quiz-card-temp";

export default function Page() {
  // This is not how we should display the quizes
  return (
    <div className="flex flex-col gap-5 pb-5 pt-2">
      <QuizCardTemp duration={50} numberOfQuestions={20} subject={"2348732984327"} title="HTML Quiz" numberOfCorrected={16} />
      <QuizCardTemp duration={50} numberOfQuestions={20} subject={"2348732984327"} title="HTML Quiz" numberOfCorrected={16} />
      <QuizCardTemp duration={50} numberOfQuestions={20} subject={"2348732984327"} title="HTML Quiz" numberOfCorrected={16} />
      <QuizCardTemp duration={50} numberOfQuestions={20} subject={"2348732984327"} title="HTML Quiz" numberOfCorrected={16} />
      <QuizCardTemp duration={50} numberOfQuestions={20} subject={"2348732984327"} title="HTML Quiz" numberOfCorrected={16} />
    </div>
  );
}
