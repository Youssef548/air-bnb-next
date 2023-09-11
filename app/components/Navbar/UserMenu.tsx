"use client";

import { useState, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    console.log(isOpen);
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex gap-3 items-center">
        <div
          className="hidden md:block border  text-sm 
        font-semibold py-3 px-4 rounded-full hover:bg-neutral-100
        transition duration-300 cursor-pointer"
          onClick={() => {}}
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="flex items-center gap-3 rounded-full 
          border border-bg-neutral-100
         shadow-sm hover:shadow-md transition duration-300 text-sm font-semibold
         p-4 md:py-1 md:px-2 cursor-pointer"
        >
          <AiOutlineMenu />
          <div className="hidden md:block ">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
        absolute rounded-xl shadow-md v-[40vw] md:w-3/4 bg-white overflow-hidden
        right-0 top-12 text-sm 
        "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label={"Login"} />
              <MenuItem onClick={() => {}} label={"Sign up"} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
