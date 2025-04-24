import Image from "next/image";

interface QuizCardProps {
  className?: string;
  subject: {
    _id: string;
    name: string;
    icon: string;
  };
}

export default function QuizCard({ className, subject }: QuizCardProps) {
  return (
    <>
      <Image src={subject.icon} alt="Quiz image" width={400} height={400} />
      <div className="w-full h-full absolute flex flex-col justify-end items-center">
        <div className="backdrop-blur-sm rounded-md flex justify-center items-center text-center flex-col bg-main/25 text-white absolute p-2 mb-5  w-10/12">
          <p className="font-semibold">{subject.name}</p>
        </div>
      </div>
    </>
  );
}
