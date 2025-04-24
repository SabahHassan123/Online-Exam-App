import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar (){
    return (
        <div className="flex items-center shadow-md rounded-2xl w-9/12 p-3 bg-white gap-5 h-full">
            <IoSearchOutline className="text-main text-xl" />
            <input type="text" placeholder="Search Quiz" className="outline-none border-none w-full "/>
        </div>
    )
}