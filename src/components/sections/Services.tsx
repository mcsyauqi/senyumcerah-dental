"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart
};

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-semibold mb-3"
            >
              LAYANAN KAMI
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-text font-[family-name:var(--font-heading)]"
            >
              Perawatan Gigi Lengkap
            </motion.h2>
          </div>
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Lihat Semua
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/layanan/${service.id}`}
                  className="group block p-6 bg-gray-50 hover:bg-primary rounded-2xl transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 bg-white group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-text group-hover:text-white mb-2 font-[family-name:var(--font-heading)] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/80 mb-4 transition-colors">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary group-hover:text-white transition-colors">
                      {service.price.split(" - ")[0]}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
