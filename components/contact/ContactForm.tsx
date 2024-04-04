"use client";

import { SignUpSchema, signUpSchema } from "@/libs/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const form = useRef(null);

  const notify = () =>
    toast("Form submitted successfully!", {
      position: "top-center",
      autoClose: 4200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "#FFFFFF",
        color: "#151E2C",
        borderRadius: "10px",
        border: "2px solid #151E2C",
        boxShadow: "0px 0px 10px 0px #151E2C",
      },
    });

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Sent!");
        },
        (error) => {
          console.log(error.text);
          console.log("error");
        }
      );
  };

  const onSubmit = async (data: SignUpSchema) => {
    sendEmail();
    reset();
    notify();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex max-w-[22rem] flex-col gap-[1.25rem] py-[3rem] sm:max-w-full md:mx-0 lg:w-[37.5rem] xl:w-[50.3rem]"
        ref={form}
      >
        <div>
          <p className="regp dark:text-white">What is your name?</p>
          <input
            {...register("name")}
            type="name"
            className="textbox h-[3.5rem] w-full pl-3 shadow-md md:h-[5rem] md:w-[47.6875rem] lg:w-[35rem] xl:w-[47.6875rem]"
            name="name"
            required
          />
          {errors.name && (
            <p className="text-blue">{`${errors.name.message}`}</p>
          )}
        </div>
        <div>
          <p className="regp dark:text-white">What is your email?</p>
          <input
            {...register("email")}
            type="email"
            className="textbox h-[3.5rem] w-full pl-3 shadow-md md:h-[5rem] md:w-[47.6875rem] lg:w-[35rem] xl:w-[47.6875rem]"
            name="email"
          />
        </div>
        <div>
          <p className="regp dark:text-white">What is your phone number?</p>
          <input
            {...register("phone")}
            type="phone"
            className="textbox h-[3.5rem] w-full pl-3 shadow-md md:h-[5rem] md:w-[47.6875rem] lg:w-[35rem] xl:w-[47.6875rem]"
            name="phone"
          />
        </div>
        <div>
          <p className="regp max-w-[18rem] dark:text-white md:w-[47.6875rem]">
            Write something about your project goals and timeframe
          </p>
          <input
            {...register("description")}
            type="description"
            className="textbox h-[3.5rem] w-full pl-3 shadow-md md:h-[5rem] md:w-[47.6875rem] lg:w-[35rem] xl:w-[47.6875rem]"
            name="description"
          />
        </div>
        <div className="justify-end md:flex md:w-[47.6875rem] md:pt-[1rem] lg:w-[35rem] xl:w-[47.6875rem]">
          <ToastContainer />
          <button
            disabled={isSubmitting}
            type="submit"
            className="md:send flex h-[3.75rem] w-full justify-center gap-[.42194rem] rounded-[379.77006rem] bg-blue px-[0.50638rem] py-[0.84394rem] shadow-sm hover:shadow-lg disabled:bg-blue1 sm:max-w-full"
            value="Send"
          >
            <p className="smallbold my-auto flex	text-white">Send</p>
          </button>
        </div>
      </form>
    </>
  );
}
