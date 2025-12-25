"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Ticket } from "lucide-react";
import { promos } from "@/lib/data";

export default function Promo() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-semibold mb-3"
            >
              PROMO SPESIAL
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-text font-[family-name:var(--font-heading)]"
            >
              Penawaran Terbaik
            </motion.h2>
          </div>
          <Link
            href="/promo"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Semua Promo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 relative overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                {promo.discount}
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Ticket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                {promo.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{promo.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <code className="text-sm font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">
                  {promo.code}
                </code>
                <span className="text-xs text-gray-400">s.d. {promo.validUntil}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
