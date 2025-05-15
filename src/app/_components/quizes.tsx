import { getAllSubjects } from "@/lib/apis/subject.api";
import QuizCard from "./quiz-card";
import CLink from "@/components/link";

export default async function Quizes() {
  const response = await getAllSubjects();

  if (!response.success) {
    console.log("error:", response.message);
  }

  const { subjects } = response;

  return (
    <section className="p-5 h-fit rounded-2xl bg-white shadow-md m-4 flex flex-col justify-center items-center gap-5">
      <div className="w-full flex justify-between items-center text-main">
        <p className="font-medium text-xl">Quizes</p>
        <div className="text-base">
          <CLink href="/dashboard/exams" hyperText="View All" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 xs:grid-col-1 gap-3 ">
        {subjects?.map((subject) => {
          return (
            <div className="flex justify-center flex-col relative items-center" key={subject._id}>
              <QuizCard subject={subject} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
