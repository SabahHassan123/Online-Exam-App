import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import user from "assets/images/user.png";
import { AiFillFlag } from "react-icons/ai";
import { FaClock } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import StudentInfoUnit from "@/components/info-temp.student";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

const studentStatistics = [
  {
    title: "Quizzes Passed", // Fixed duplicate title
    icon: <AiFillFlag className="text-2xl md:text-3xl text-main" />,
    number: 27,
  },
  {
    title: "Average Time",
    icon: <FaClock className="text-2xl md:text-3xl text-main" />,
    number: "13 min",
  },
  {
    title: "Total Score",
    icon: <GoCheckCircleFill className="text-2xl md:text-3xl text-main" />,
    number: 200,
  },
];

export default async function StudentStatistics() {
  const session = await getServerSession(authOptions);
  const userData = session?.user;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4  bg-white shadow-md p-5 rounded-2xl mx-4">
      {/* User Image - Full width on mobile, first column on desktop */}
      <div className="md:row-span-4 flex justify-center md:block">
        <Image
          src={user}
          alt="user photo"
          width={200}
          height={200}
          className="md:w-full md:h-auto object-cover rounded-full md:rounded-none"
        />
      </div>

      {/* User Info - Full width on mobile */}
      <div className="md:row-span-2 md:col-span-3 flex justify-start items-center md:text-left">
        <p className="text-2xl md:text-3xl font-medium">{userData?.username}</p>
        {/* <p className="text-gray-600">blablabla...</p> */}
      </div>

      {/* Progress Bar - Full width on mobile */}
      <div className="md:row-span-1 md:col-span-3 w-full md:w-2/3">
        <Progress value={50} />
      </div>

      {/* Stats - Stack vertically on mobile, grid on desktop */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3  md:gap-0">
        {studentStatistics.map((unit) => (
          <div className="row-span-2" key={unit.title}>
            <StudentInfoUnit icon={unit.icon} title={unit.title} number={unit.number} />
          </div>
        ))}
      </div>
    </div>
  );
}
