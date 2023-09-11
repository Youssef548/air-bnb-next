"use client";

import LogoImg from "/public/images/logo.png";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src={LogoImg}
      width="100"
      height="100"
      alt="logo"
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
