import Image from "next/image";
import React from "react";
import AuthImage from "assets/images/bro.png";

export default function LeftSide() {
  return (
    <section className="flex justify-center items-center flex-col p-10 bg-indigo-50 min-h-full">
      <div className="w-3/4 leading-relaxed pb-10">
        <h1 className="font-bold text-4xl leading-relaxed">
          Welcome to <div className="text-indigo-700">Elevate</div>
        </h1>
        <p>Quidem autem voluptatibus qui quaerat aspernatur architecto natus</p>
      </div>
      <div>
        <Image src={AuthImage} width={300} alt="authentication image" />
      </div>
    </section>
  );
}
