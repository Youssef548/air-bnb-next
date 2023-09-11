"use client";
import userImage from "/public/images/placeholder.jpg";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      src={userImage}
      alt="profile-img"
    />
  );
};

export default Avatar;
