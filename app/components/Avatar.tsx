"use client";
import userImage from "/public/images/placeholder.jpg";

import Image from "next/image";
import { SafeUser } from "@/app/types";
interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      src={src ? src : userImage}
      alt="profile-img"
    />
  );
};

export default Avatar;
