"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Scan, Zap, Cpu, ShieldCheck } from "lucide-react";
import { technologies } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scan, Zap, Cpu, ShieldCheck
};

export default function Technology() {
  return (
    <section className="py-24 md:py-32 bg-text text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold mb-3"
          >
            TEKNOLOGI
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]"
          >
            Peralatan Modern
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Didukung teknologi terkini untuk hasil perawatan terbaik
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Scan;
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 font-[family-name:var(--font-heading)]">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/teknologi"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Pelajari Lebih Lanjut
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
