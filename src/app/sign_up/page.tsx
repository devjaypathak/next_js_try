"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaWpforms } from "react-icons/fa";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignUp = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex bg-gray-100 h-screen justify-center items-center">
      <div className="shadow-lg bg-white p-3 md:w-5/12 w-full rounded-md m-3">
        <div className="flex items-center gap-3">
          <FaWpforms size={42} />
          <div>
            <div className="text-2xl font-semibold">Sign up</div>
            <div className="text-purple-800 font-bold">
              We have exiting new offers of fresh sign ups
            </div>
          </div>
        </div>
        <br />
        <form onSubmit={handleSubmit(onSignUp)} className="space-y-4">
          <input
            {...register("name")}
            aria-autocomplete="none"
            className="input"
            type="text"
            placeholder="Name"
            required={true}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}

          <input
            {...register("email")}
            required={true}
            className="input"
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}

          <input
            {...register("password")}
            required={true}
            aria-autocomplete="none"
            className="input"
            type="password"
            placeholder="Create Password"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}

          <br />
          <br />
          <Link href={"/login_in"} className="text-purple-500 font-bold">
            Already have an account?
          </Link>
          <br />
          <br />
          <div className="flex justify-center">
            <input type="submit" className="btn w-[200px]" />
          </div>
        </form>
      </div>
    </div>
  );
}
