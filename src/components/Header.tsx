"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu09Icon } from "./icon";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/constants/constant";
export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => {
    setOpen((c) => !c);
  };
  return (
    <>
      {/* Your component content here */}

      <header className="fixed left-0 right-0 top-0 z-50 h-max p-4 md:hidden">
        <div
          className={cn(
            "overflow-hidden rounded-[2.05rem] border border-[#0F373C] bg-card/70 px-4 backdrop-blur-md transition-all duration-200 ease-in-out",
            open ? "h-56" : "h-14",
          )}
        >
          <div className="flex h-14 w-full items-center justify-between">
            <Image
              src="/logo-mini.svg"
              alt="Logo"
              width={100}
              height={100}
              className="h-6 w-auto"
            />
            <button onClick={handleOpenClose}>
              <Menu09Icon className="size-8" />
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-2 text-base">
            {NavLinks.map(({ name, id }) => {
              return (
                <>
                  <Link
                    key={id + "hero"}
                    href={`#${id}`}
                    className="text-nowrap text-accent/70 transition-colors hover:text-accent"
                  >
                    {name}
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
