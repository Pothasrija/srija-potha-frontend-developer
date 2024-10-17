import { Future, Graph, Tools, Wallet } from "./icon";
import { Button } from "./ui/button";
import Heading from "./ui/heading";

export default function About() {
  return (
    <>
      <section id="why" className="px-4 py-20">
        <div className="text-center">
          <Heading>About EthAi</Heading>
          <p className="mx-auto mb-8 max-w-5xl text-balance text-lg text-accent/70">
            At EthAi, we&apos;re all about making crypto trading easier and more
            intuitive. We provide tools that help traders keep up with all new
            market trends, track top traders&apos; movements.
          </p>
          <Button>Read More</Button>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-9 rounded-2xl bg-[#08252A] p-7 sm:p-14 md:grid-cols-2">
          <Part
            icon={<Graph />}
            heading="Stay Ahead"
            para="No more guesswork—get clear, trustable insights."
          />
          <Part
            icon={<Wallet />}
            heading="Know Your Assets"
            para="Always stay on top of how your investments are performing."
          />
          <Part
            icon={<Tools />}
            heading="Simple, Not Overwhelming"
            para="Our tools are designed to make complex market analysis easy to understand and act on."
          />
          <Part
            icon={<Future />}
            heading="Future-Proof"
            para="We're constantly improving, adding new features to help you make the most informed decisions possible."
          />
        </div>
      </section>
    </>
  );
}

function Part({
  icon,
  heading,
  para,
}: {
  icon: React.ReactElement;
  heading: string;
  para: string;
}) {
  return (
    <>
      <div>
        {icon}
        <h3 className="my-3 font-medium text-white">{heading}</h3>
        <p className="text-accent/70">{para}</p>
      </div>
    </>
  );
}
