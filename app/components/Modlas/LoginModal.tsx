"use client";
import { signIn } from "next-auth/react";

import { AiFillGithub } from "react-icons/ai";
import { useCallback, useState } from "react";
import axios from "axios";
import Button from "../Button";
import { FaGoogle } from "react-icons/fa";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title={"Welcome to airbnb"}
        subtitle={"Login to your account!"}
      />
      <Input
        id="email"
        type="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3 items-center">
      <hr />
      <Button
        outline
        label={"Continue with Google"}
        icon={FaGoogle}
        onClick={() => {}}
      />{" "}
      <Button
        outline
        label={"Continue with Github"}
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="
      text-neutral-500 
      text-center
      mt-4
      font-light
      "
      >
        <div className="text-center flex items-center gap-2">
          <div>Already have an account</div>
          <div
            onClick={loginModal.onClose}
            className="text-neutral-800 
          cursor-pointer hover:underline"
          >
            Sign up
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionlabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
