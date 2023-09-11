"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="border rounded-full py-2 w-full md:w-auto cursor-pointer shadow-sm 
    hover:shadow-md transition duration-300 "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>

        <div className="hidden sm:block border-x-[1px] text-sm font-semibold flex-1 text-center px-6">
          Any Week
        </div>
        <div
          className="text-sm
          pl-6
          pr-2
          text-gray-600
          flex
          flex-row
          items-center
          gap-3"
        >
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-2 bg-rose-500 rounded-full  text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
