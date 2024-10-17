"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import Heading from "./ui/heading";
import { cn } from "@/lib/utils";

interface Props {
  phase: number;
  heading: string;
  list: string[];
  url: string;
}

export default function Roadmap() {
  return (
    <>
      <div id="roadmap">
        <Heading className="text-center">Roadmap</Heading>
        <Part
          phase={1}
          heading="Kicking Off"
          list={[
            "Launch of EthAi: Officially",
            "Development of Core AI Agents",
            "User Onboarding Campaign",
            "Community Engagement Initiatives",
          ]}
          url=""
        />
        <Part
          phase={2}
          heading="Bigger Insights"
          list={[
            "Introduction of Advanced AI Agents",
            "Strategic Partnerships",
            "User Interface Optimization",
            "Comprehensive Marketing Campaign",
          ]}
          url=""
        />
        <Part
          phase={3}
          heading="Full Power"
          list={[
            "Introduction of Enhanced Features",
            "API Integration for Data Access",
            "Launch of Community-Driven Initiatives",
            "Continuous Improvement and Updates",
          ]}
          url=""
        />
      </div>
    </>
  );
}

function Part(props: Props) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return isDesktop ? <Desktop {...props} /> : <Mobile {...props} />;
}
function Desktop(props: {
  phase: number;
  heading: string;
  list: string[];
  url: string;
}) {
  const even = props.phase % 2 === 0;

  return (
    <>
      <section className="relative">
        <div className={cn("flex", even ? "flex-row-reverse" : "flex-row")}>
          <div className="w-1/2"></div>
          <div className="h-96 w-1/2">
            {even ? (
              <div className="h-full w-96"></div>
            ) : (
              <div className="ml-auto mr-0 h-full w-96"></div>
            )}
          </div>
        </div>
        <div className="absolute inset-0">
          <div
            className={cn(
              "mx-auto flex max-w-6xl px-4",
              even ? "flex-row-reverse" : "flex-row",
            )}
          >
            {" "}
            <div className="h-full w-1/2">
              <List {...props} />
            </div>
            <div className="h-full w-1/2"></div>
          </div>
        </div>
      </section>
    </>
  );
}
function Mobile(props: Props) {
  return (
    <>
      <section className="px-4">
        <List {...props} />
        <div className="h-72"></div>
      </section>
    </>
  );
}

function List(props: Props) {
  return (
    <>
      <span className="rounded-lg bg-foreground px-2 py-1 text-sm font-medium uppercase text-[#0B2A2D]">
        Phase {props.phase}
      </span>
      <Heading className="mt-3">{props.heading}</Heading>
      <ul className="space-y-4">
        {props.list.map((item) => {
          return (
            <li key={item} className="flex items-center gap-3">
              <svg
                className="h-6 w-6 flex-none stroke-[#A3F0FE] stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
