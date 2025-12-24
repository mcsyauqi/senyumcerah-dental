"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-lg overflow-hidden",
        hover && "transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-6 md:p-8", className)}>{children}</div>;
}
