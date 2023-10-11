import React from "react";
import Image from "next/image";

const Display = () => {
  return (
    <>
      <hr className="border-b-slate-400 my-4" />
      <button className="absolute top-[-25px] md:right-0 right-1/2 bg-primary rounded-full p-4">
        <Image
          src="/assets/images/icon-arrow.svg"
          height={20}
          width={20}
          alt="submit"
        />
      </button>
      <div className="mt-6 flex flex-col gap-2 p-2">
        <div className="text-5xl font-bold flex gap-2">
          <span className="text-primary">- -</span>
          years
        </div>
        <div className="text-5xl font-bold flex gap-2">
          <span className="text-primary">- -</span>
          months
        </div>
        <div className="text-5xl font-bold flex gap-2">
          <span className="text-primary">- -</span>
          days
        </div>
      </div>
    </>
  );
};

export default Display;
