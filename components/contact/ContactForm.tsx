"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
        <div>
          <p className="regp">What is your name?</p>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Must be at least 3 characters long",
              },
            })}
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
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 5,
                message: "Must be at least 5 characters long",
              },
            })}
            type="email"
            className="rounded border px-4 py-2 md:h-[5rem] md:w-[47.6875rem]"
          />
        </div>
        <div>
          <p className="regp">
            Write something about your project goals and timeframe
          </p>
          <input
            {...register("description", {
              required: "description is required",
              minLength: {
                value: 12,
                message: "Must be at least 12 characters long",
              },
            })}
            type="description"
            className="rounded border px-4 py-2 md:h-[11.875rem] md:w-[47.6875rem]"
          />
        </div>
        <div>
          <p className="regp">
            How to reach out to you back? <span>eg. phone number or email</span>
          </p>
          <input
            {...register("name", {
              required: "Contact info is required",
              minLength: {
                value: 3,
                message: "Must be at least 3 characters long",
              },
            })}
            type="email"
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
};

export default ContactForm;
