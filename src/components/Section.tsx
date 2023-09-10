"use client";

import { RefObject, ReactNode } from "react";

interface SectionProps {
  // ref?: RefObject<HTMLInputElement>;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const Section = ({ title, subtitle, children }: SectionProps) => {
  return (
    <section className="w-screen flex flex-col justify-center items-center bg-zinc-950 z-0">
      <div className={`w-[90vw] lg:w-[85vw] relative mt-16`}>
        <p className="bg-clip-text bg-gradient-to-br from-[#5FDB5F] via-[#A2ECA2] to-[#CAF1CA] text-md lg:text-xl 2xl:text-2xl font-bold text-transparent">
          {title.toUpperCase()}
        </p>
        <p className="text-lg lg:text-2xl 2xl:text-3xl font-bold text-white">
          {subtitle}
        </p>
        {/* <div className="mt-5 lg:mt-7 w-full grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-x-[1rem] md:gap-x-[4%] gap-y-[1rem] md:gap-y-[0] justify-center items-center">
          <Card />
        </div> */}
        {children}
      </div>
    </section>
  );
};

export default Section;