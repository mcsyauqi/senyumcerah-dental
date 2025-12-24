"use client";

import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap",
          {
            "bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30":
              variant === "primary",
            "bg-secondary text-white hover:bg-primary focus:ring-secondary":
              variant === "secondary",
            "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary bg-transparent":
              variant === "outline",
            "text-primary hover:bg-primary/10 focus:ring-primary":
              variant === "ghost",
            "px-5 py-2.5 text-sm gap-2": size === "sm",
            "px-7 py-3.5 text-base gap-2": size === "md",
            "px-9 py-4 text-lg gap-3": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
