"use client";
import Input from "./Input";
import Image from "next/image";
import Display from "./Display";
import { ChangeEvent, FormEvent, useState } from "react";

export type DatePropTypes = {
  day: string;
  month: string;
  year: string;
};

const Form = () => {
  const [formDate, setFormDate] = useState<DatePropTypes>({
    day: "",
    month: "",
    year: "",
  });

  const [outputDate, setOutputDate] = useState<DatePropTypes>({
    day: "",
    month: "",
    year: "",
  });

  const [isError, setIsError] = useState(false);

  function onChange(e: ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value);

    setIsError(false);

    setFormDate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    Object.values(formDate).map((value) => {
      if (value && !isNaN(+value)) {
        console.log(value);
        setIsError(false);
        const { day, month, year } = formDate;

        const enteredDate = new Date(`${year}-${month}-${day}`);
        const now = new Date();

        const difference = now.getTime() - enteredDate.getTime();
        const dayDiff = Math.floor(
          ((difference / (1000 * 60 * 60 * 24)) % 30) - 1
        );
        const yearDiff = now.getFullYear() - enteredDate.getFullYear();
        const currentMonth = now.getMonth() + 1;
        const enteredMonth = enteredDate.getMonth() + 1;
        const monthDiff =
          currentMonth >= enteredMonth
            ? currentMonth - enteredMonth
            : 12 - enteredMonth + currentMonth;

        setOutputDate({
          day: dayDiff.toString(),
          month: monthDiff.toString(),
          year: yearDiff.toString(),
        });
      } else {
        setIsError(true);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="flex gap-4 py-4">
        <Input label="day" handleChange={onChange} error={isError} />
        <Input label="month" handleChange={onChange} error={isError} />
        <Input label="year" handleChange={onChange} error={isError} />
      </section>

      <section className="relative">
        <Display date={outputDate} />
      </section>
    </form>
  );
};

export default Form;
