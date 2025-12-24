"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "success" | "warning";
  className?: string;
}

export default function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        {
          "bg-primary/10 text-primary": variant === "primary",
          "bg-secondary/10 text-secondary": variant === "secondary",
          "bg-accent/10 text-accent": variant === "accent",
          "bg-green-100 text-green-800": variant === "success",
          "bg-yellow-100 text-yellow-800": variant === "warning",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
