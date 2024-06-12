"use client";

import "@/app/globals.css";

import React, { useEffect } from "react";

const MEMO_PASSWORD = process.env.MEMO_PASSWORD as string;

const MemoHome = () => {
  const [authorized, setAuthorized] = React.useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === MEMO_PASSWORD) {
      setAuthorized(true);
    }
  }, []);

  const handleEnterPassword = (event: any) => {
    if (event.key === "Enter") {
      checkPassword(event.target.value);
    }
  };

  const checkPassword = (value: string) => {
    if (value === MEMO_PASSWORD) {
      setAuthorized(true);
      localStorage.setItem("auth", MEMO_PASSWORD);
    }
  };

  const PasswordInput = () => {
    return (
      <div>
        <label htmlFor="password">Enter Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border border-gray-300 rounded-md"
          placeholder="Enter Password"
          aria-describedby="passwordHelpBlock"
          onKeyDown={handleEnterPassword}
        />
      </div>
    );
  };

  return (
    <div className="container">
      <div className="">
        <p>Welcome to my memo!</p>
        {authorized && <p>Here is the secret memo...</p>}
        {!authorized && <PasswordInput />}
      </div>
    </div>
  );
};

export default MemoHome;
