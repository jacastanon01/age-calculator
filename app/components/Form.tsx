"use client";
import Input from "./Input";
import Image from "next/image";
import Display from "./Display";
import { ChangeEvent, FormEvent, useState } from "react";

type FormType = {
  day: string;
  month: string;
  year: string;
};

const Form = () => {
  const [dates, setDates] = useState<FormType>({
    day: "",
    month: "",
    year: "",
  });

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value);

    setDates((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    console.log(dates);
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="flex gap-4 py-4">
        <Input label="day" handleChange={onChange} />
        <Input label="month" handleChange={onChange} />
        <Input label="year" handleChange={onChange} />
      </section>

      <section className="relative">
        <Display />
      </section>
    </form>
  );
};

export default Form;
