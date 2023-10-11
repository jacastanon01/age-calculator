import Image from "next/image";
import Display from "./components/Display";
import Form from "./components/Form";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-200 p-4 flex justify-center items-center font-poppins">
      <div className="rounded-xl md:w-6/12 w-96 bg-white py-4 px-4">
        <Form />
      </div>
    </main>
  );
}
