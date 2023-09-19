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
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
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
        className="mx-auto"
        ref={form}
      >
        <div>
          <p className="regp">What is your name?</p>
          <input
            {...register("name")}
            type="name"
            className="rounded border px-4 py-2 md:h-[5rem] md:w-[47.6875rem]"
            name="user_name"
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
            name="user_email"
          />
        </div>
        <div>
          <p className="regp">What is your phone number?</p>
          <input
            {...register("phone")}
            type="phone"
            className="rounded border px-4 py-2 md:h-[5rem] md:w-[47.6875rem]"
            name="user_phone"
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
            name="user_message"
          />
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-blue disabled:bg-blue1"
          value="Send"
        >
          Send
        </button>
      </form>
    </>
  );
}
SERVICE_ID = service_l76u8u8;
TEMPLATE_ID = template_msyezf2;
PUBLIC_KEY = a6KAejDLpv4NVCoDA;
