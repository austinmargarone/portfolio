"use client";

import { SignUpSchema, signUpSchema } from "@/libs/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
        <div>
          <p className="regp">What is your name?</p>
          <input
            {...register("name")}
            type="name"
            className="rounded border px-4 py-2 md:h-[5rem] md:w-[47.6875rem]"
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
            className="rounded border px-4 py-2 md:h-[5rem] md:w-[47.6875rem]"
          />
        </div>
        <div>
          <p className="regp">
            Write something about your project goals and timeframe
          </p>
          <input
            {...register("description")}
            type="description"
            className="rounded border px-4 py-2 md:h-[11.875rem] md:w-[47.6875rem]"
          />
        </div>
        <div>
          <p className="regp">
            How to reach out to you back? <span>eg. phone number or email</span>
          </p>
          <input
            {...register("phone")}
            type="phone"
            className="rounded border px-4 py-2 md:h-[5rem] md:w-[47.6875rem]"
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-blue disabled:bg-blue1"
        >
          Send
        </button>
      </form>
    </>
  );
}
