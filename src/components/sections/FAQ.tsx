"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionTitle
          title="Pertanyaan Umum"
          subtitle="Jawaban untuk pertanyaan yang sering diajukan"
        />

        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 md:p-7 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-text pr-6 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300",
                    openId === faq.id && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 md:px-7 pb-6 md:pb-7 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
