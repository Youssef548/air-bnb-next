"use client";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import axios from "axios";
import Button from "../Button";
import { FaGoogle } from "react-icons/fa";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Input";
import { toast } from "react-hot-toast";
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => registerModal.onClose())
      .catch((error) => toast.error(error.message))
      .finally(() => setIsLoading(false));
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title={"Welcome to airbnb"} subtitle={"Create an account"} />
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
        id="name"
        type="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />{" "}
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
            onClick={registerModal.onClose}
            className="text-neutral-800 
          cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionlabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
