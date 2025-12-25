"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]"
        >
          Siap Wujudkan Senyum Impian?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Konsultasi pertama GRATIS. Booking sekarang atau hubungi kami via WhatsApp.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Booking Sekarang
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-2xl font-semibold text-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
