"use client";

import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({ title, subtitle, center = true, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
