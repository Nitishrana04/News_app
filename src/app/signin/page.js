"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };

  const onSignUp = () => {
    router.push("/signup");
  };

  return (
    <div className="flex justify-center">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign in</h1>
        <form onSubmit={handleForm} className="form flex flex-col gap-3">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="p-2"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="p-2"
            />
          </label>
          <button type="submit" className="bg-black text-white p-2">
            Sign in
          </button>
          <button
            type="button"
            className="bg-black text-white p-2"
            onClick={onSignUp}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
