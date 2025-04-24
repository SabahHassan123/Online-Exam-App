interface StudentDataProps {
  icon: React.ReactNode;
  number: number | string;
  title: string;
}

export default function StudentInfoUnit({
  icon,
  number,
  title,
}: StudentDataProps) {
  return (
    <div className="flex justify-evenly items-center">
      <div className="rounded-lg bg-white shadow-md w-14 h-14 flex justify-center items-center">
        {icon}
      </div>
      <div className="">
        <div className="text-2xl font-bold">{number}</div>
        <div>{title}</div>
      </div>
    </div>
  );
}
