"use client";

import { useState, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const toggleOpen = useCallback(() => {
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
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
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
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label={"My trips"} />
                <MenuItem onClick={() => {}} label={"My favorites"} />
                <MenuItem onClick={() => {}} label={"My reservations"} />
                <MenuItem onClick={() => {}} label={"Airbnb my home"} />
                <hr />
                <MenuItem onClick={() => signOut()} label={"Logout"} />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label={"Login"} />
                <MenuItem onClick={registerModal.onOpen} label={"Sign up"} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
