import React from "react";
import Button from "./Button";

export default function SectionOne() {
  return (
    <section
      className="relative h-[30vh] sm:h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('images/SectionOne/sec-one.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-roboto tracking-widest mt-2">
          Protect
        </h1>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-roboto tracking-widest mt-2">
          Your
        </h1>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-roboto tracking-widest mt-2">
          Future
        </h1>
        <Button />
      </div>
    </section>
  );
}
