import React, { Suspense } from "react";
import ExamsList from "./_components/exams-list";
import Loading from "@/app/loading";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ExamsList />
    </Suspense>
  );
}
