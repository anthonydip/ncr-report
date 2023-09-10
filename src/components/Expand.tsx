"use client";

import { ReactNode } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { BsChevronUp } from "react-icons/bs";

interface ExpandProps {
  title: string;
  children: ReactNode;
};

const Expand = ({ title, children }: ExpandProps) => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full rounded-2xl bg-zinc-900 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="flex w-full justify-between rounded-lg bg-zinc-800 px-4 py-2 text-left text-lg font-medium font-semibold text-[#A2ECA2] hover:bg-zinc-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              >
                <span>{title}</span>
                <BsChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-500 linear"
                enterFrom="transform -translate-y-5 opacity-0"
                enterTo="transform opacity-100"
                leave="transition duration-200 linear"
                leaveFrom="transform opacity-100"
                leaveTo="transform -translate-y-5 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-slate-300">
                  {children}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Expand;