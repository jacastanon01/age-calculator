"use client";
import React, { useState } from "react";

type inputPropTypes = {
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label }: inputPropTypes) => {
  const [value, setValue] = useState("");

  const maxLengthValidation = label === "year" ? 4 : 2;
  return (
    <article className="flex flex-col gap-1 p-2">
      <label className="text-slate-600" htmlFor="day">
        {label.toUpperCase()}
      </label>
      <input
        className="md:w-28 w-20 p-2 text-lg rounded-lg font-semibold border border-slate-400 focus:border-primary focus:outline-none"
        placeholder={label === "day" ? "DD" : label === "month" ? "MM" : "YYYY"}
        id={label}
        name={label}
        maxLength={maxLengthValidation}
      />
    </article>
  );
};

export default Input;
