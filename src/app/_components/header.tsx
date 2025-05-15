"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex justify-evenly items-center h-12">
      <SearchBar />
      <Button className="h-full rounded-2xl w-2/12">Start Quiz</Button>
      <Avatar className="">
        <AvatarImage />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
