import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

interface HeadingProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ as = "h2", className = "", children }) => {
  return React.createElement(
    as,
    { className: cn("text-4xl mb-6 font-medium", className) },
    children,
  );
};

export default Heading;
