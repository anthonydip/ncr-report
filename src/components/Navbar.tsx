"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { RefObject } from "react";

interface NavbarProps {
  introRef: RefObject<HTMLInputElement>;
  goalsRef?: RefObject<HTMLInputElement>;
  jobRef?: RefObject<HTMLInputElement>;
  conclusionRef?: RefObject<HTMLInputElement>;
  acknowledgementsRef?: RefObject<HTMLInputElement>;
}

const Navbar = ({ introRef, goalsRef, jobRef, conclusionRef, acknowledgementsRef }: NavbarProps) => {
  return (
    <>
      <header className="w-screen sticky z-50 h-20 bg-gray-950">
        {/* Desktop nav container */}
        <div className="flex h-full items-center justify-center pl-10 pr-10 mx-auto max-w-[1440px]">
          <nav className="flex items-center justify-between flex-1">
            <div>
              <Link 
                target="_blank"
                className="hover:text-green-200 duration-300 text-lg"
                href="https://www.ncr.com/"
              >
                NCR Corporation
              </Link>
            </div>

            {/* Desktop nav items */}
            <div className="hidden w-fit md:flex flex-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-[20px] xl:space-x-[40px]">
              <span onClick={() => introRef?.current?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer nav-span nav-span-primary whitespace-nowrap">
                INTRODUCTION
              </span>
              <span onClick={() => goalsRef?.current?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer nav-span nav-span-primary whitespace-nowrap">
                GOALS
              </span>
              <span onClick={() => jobRef?.current?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer nav-span nav-span-primary whitespace-nowrap">
                JOB DESCRIPTION
              </span>
              <span onClick={() => conclusionRef?.current?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer nav-span nav-span-primary whitespace-nowrap">
                CONCLUSION
              </span>
              <span onClick={() => acknowledgementsRef?.current?.scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer nav-span nav-span-primary whitespace-nowrap">
                ACKNOWLEDGEMENTS
              </span>
            </div>

            <div className="flex flex-row gap-5">
              <Link
                className="hover:text-green-200 duration-300"
                target="_blank"
                href="https://www.linkedin.com/in/adip01/"
              >
                <AiFillLinkedin size="2rem" />
              </Link>
              <Link
                className="hover:text-green-200 duration-300"
                target="_blank"
                href="https://github.com/anthonydip"
              >
                <AiFillGithub size="2rem" />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
