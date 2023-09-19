"use client";

import { SignUpSchema, signUpSchema } from "@/libs/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l76u8u8",
        "template_msyezf2",
        form.current,
        "a6KAejDLpv4NVCoDA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("error");
        }
      );
  };

  const onSubmit = async (data: SignUpSchema) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (!response.ok) {
      alert("Submitting form failed!");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.name) {
        setError("name", {
          type: "server",
          message: errors.name,
        });
      } else if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.description) {
        setError("description", {
          type: "server",
          message: errors.description,
        });
      } else if (errors.phone) {
        setError("phone", {
          type: "server",
          message: errors.phone,
        });
      } else {
        alert("Something went wrong!");
      }
      reset();
    }
  };

  return (
    <>
      <form
        onSubmit={(handleSubmit(onSubmit), sendEmail)}
        className="mx-auto flex min-w-[24.5625rem] flex-col gap-[1.25rem] px-[1.5rem] py-[3rem] md:mx-0 lg:w-[37.5rem] xl:w-[50.3rem]"
        ref={form}
      >
        <div>
          <p className="regp">What is your name?</p>
          <input
            {...register("name")}
            type="name"
            className="textbox h-[3.5rem] min-w-[21.5625rem] pl-3 md:h-[5rem] md:w-[47.6875rem] lg:w-[35rem] xl:w-[47.6875rem]"
            name="user_name"
            required
          />
          {errors.name && (
            <p className="text-blue">{`${errors.name.message}`}</p>
          )}
        </div>
        <div>
          <p className="regp">What is your email?</p>
          <input
            {...register("email")}
            type="email"
            className="textbox h-[3.75rem] min-w-[21.5625rem] pl-3 md:h-[5rem] md:w-[47.6875rem] lg:w-[35rem] xl:w-[47.6875rem]"
            name="user_email"
          />
        </div>
        <div>
          <p className="regp">What is your phone number?</p>
          <input
            {...register("phone")}
            type="phone"
            className="textbox h-[3.75rem] min-w-[21.5625rem] pl-3 md:h-[5rem] md:w-[47.6875rem] lg:w-[35rem] xl:w-[47.6875rem]"
            name="user_phone"
          />
        </div>
        <div>
          <p className="regp w-[21.5625rem] md:w-[47.6875rem]">
            Write something about your project goals and timeframe
          </p>
          <input
            {...register("description")}
            type="description"
            className="textbox min-h-[11.875rem] min-w-[21.5625rem] pl-3 md:w-[47.6875rem] lg:w-[35rem] xl:w-[47.6875rem]"
            name="user_message"
          />
        </div>
        <div className="justify-end md:flex">
          <button
            disabled={isSubmitting}
            type="submit"
            className="md:send flex h-[3.75rem] w-full justify-center gap-[.42194rem] rounded-[379.77006rem] bg-blue px-[0.50638rem] py-[0.84394rem] disabled:bg-blue1"
            value="Send"
          >
            <p className="smallbold my-auto flex	text-white">Send</p>
          </button>
        </div>
      </form>
    </>
  );
}
