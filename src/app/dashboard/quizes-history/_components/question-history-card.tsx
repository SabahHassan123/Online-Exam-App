"use client";

export default function QuestionHistoryCard() {
  return (
    <div className="shadow-sm p-3 m-3 bg-gray-50 rounded-md flex flex-col gap-5">
      <p className="text-black">Exercitationem pariatur quae facere</p>
      <div className="flex flex-col gap-3">
        <div className="p-3 border-red-600 border-2 bg-red-100 rounded-lg flex gap-2">
          <input
            type="checkbox"
            checked
            className="accent-red-600 outline-none"
          />
          <p className="text-black">voluptates eos aut</p>
        </div>
        <div className="p-3 border-green-600 border-2 bg-green-100 rounded-lg flex gap-2">
          <input
            type="checkbox"
            checked
            className="accent-green-600 outline-none"
          />
          <p className="text-black">voluptates eos aut</p>
        </div>
        <div className="p-3 bg-gray-200 rounded-lg flex gap-2">
          <input type="checkbox" checked={false} className="outline-none" />
          <p className="text-black">voluptates eos aut</p>
        </div>
      </div>
    </div>
  );
}
