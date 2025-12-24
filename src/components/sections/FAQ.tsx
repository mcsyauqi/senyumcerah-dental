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
    <section className="py-20 bg-background">
      <div className="container">
        <SectionTitle
          title="Pertanyaan Umum"
          subtitle="Jawaban untuk pertanyaan yang sering diajukan"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-text pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-primary flex-shrink-0 transition-transform",
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
                    <p className="px-5 pb-5 text-gray-600">{faq.answer}</p>
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
