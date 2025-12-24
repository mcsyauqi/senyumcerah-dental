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
    <div className={cn("mb-14 md:mb-16", center && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-text mb-5">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
