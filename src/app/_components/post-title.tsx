import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-2 text-center">
      {children}
    </h1>
  );
}
