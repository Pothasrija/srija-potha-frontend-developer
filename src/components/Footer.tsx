import Image from "next/image";
import { Button } from "./ui/button";
import { Discord, Facebook, Instagram, Telegram, Twitter } from "./icon";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#010F14] pb-10 pt-14 md:pt-20">
        <hr className="mb-4 h-0.5 border-none bg-gradient-to-r from-[rgba(255,255,255,0.01)] via-[rgba(255,255,255,0.06)] to-transparent" />
        <div className="container mx-auto flex items-start justify-center md:justify-between">
          <div>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={300}
              height={300}
              className="mb-6 h-12 w-auto max-md:mx-auto"
            />

            <div className="flex items-center gap-2">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card/30 p-1.5"
              >
                <Telegram />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card/30 p-1.5"
              >
                <Instagram />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card/30 p-1.5"
              >
                <Twitter />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card/30 p-1.5"
              >
                <Facebook />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-card/30 p-1.5"
              >
                <Discord />
              </a>
            </div>
          </div>

          <div className="max-w-lg max-lg:hidden">
            <p className="mb-8 text-4xl font-medium">
              &quot;Designed for traders of today, just like you.&quot;
            </p>
            <div className="flex rounded-2xl border border-[#FBFAF266] p-1">
              <input
                className="w-full bg-transparent px-4 text-base outline-none"
                placeholder="What's your work email?"
              />
              <Button variant={"outline"}>Get Started</Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
