"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-content gap-3 font-semibold rounded-xl transition-all duration-300 font-[family-name:var(--font-heading)]";

  const variants = {
    primary: "bg-primary text-white hover:bg-cyan-700 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5",
    secondary: "bg-secondary text-white hover:bg-cyan-500 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
