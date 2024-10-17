"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constants/constant";
export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <section className="h-screen md:h-[40rem]">
        <div className="container relative z-50 mx-auto flex h-max justify-between py-10 max-md:hidden">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-8 w-auto"
          />
          <div className="absolute left-1/2 top-1/2 z-50 inline-flex -translate-x-1/2 -translate-y-1/2 gap-14 rounded-full bg-card/70 px-20 py-5 backdrop-blur">
            {NavLinks.map(({ name, id }) => {
              return (
                <>
                  <Link
                    key={id}
                    href={`#${id}`}
                    className="text-nowrap text-lg text-accent/70 transition-colors hover:text-accent"
                  >
                    {name}
                  </Link>
                </>
              );
            })}
          </div>

          <div>
            <Button variant={"ghost"}>Log in</Button>
            <Button>Whitepaper</Button>
          </div>
        </div>
        <div className="flex h-full w-full flex-col items-center p-4 text-center max-md:justify-center md:mt-10">
          <h1 className="text-center text-5xl leading-snug md:text-6xl md:font-medium md:leading-snug">
            When Innovation <br />
            Meets{" "}
            <span className="rounded-full bg-[#B0F9FF] px-4 text-[#0B2A2D]">
              Investment
            </span>
          </h1>
          <p className="my-6 text-lg text-[#B0FAFFB2] md:text-xl">
            Empowering Trading Through Advanced Technology{" "}
          </p>
          <Button variant={isDesktop ? "outline" : "default"}>Open dApp</Button>
        </div>
      </section>
    </>
  );
}
