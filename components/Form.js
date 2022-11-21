import React from "react";
import { useForm } from "react-hook-form";
import { sendContactForm } from "../lib/api";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ name, email, message }) => {
    const res = await sendContactForm({
      name: name,
      email: email,
      message: message,
    });
    console.log(res.json());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
      <input
        type="text"
        placeholder="Name"
        className="block w-full border p-3"
        {...register("name", { required: true, minLength: 3 })}
      />
      {errors.name && (
        <p className="text-sm text-red-400">
          This field is required and can not be less than 3 characters!
        </p>
      )}
      <input
        type="email"
        placeholder="Email"
        className="block w-full border p-3"
        {...register("email")}
      />
      <textarea
        name=""
        placeholder="Message"
        id=""
        cols="30"
        rows="5"
        className="block border p-3"
        {...register("message")}
      ></textarea>
      <button type="submit" className="bg-[#ff0000] p-3 text-white">
        Send
      </button>
    </form>
  );
}
