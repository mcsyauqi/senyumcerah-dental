"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart, Clock } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart
};

export default function LayananPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-semibold mb-3">LAYANAN KAMI</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
              Perawatan Gigi Lengkap
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Berbagai layanan perawatan gigi dengan teknologi modern dan dokter spesialis berpengalaman.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid gap-6">
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
                    className="group flex flex-col md:flex-row md:items-center gap-6 p-6 bg-gray-50 hover:bg-primary rounded-2xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-white group-hover:bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-bold text-text group-hover:text-white mb-2 font-[family-name:var(--font-heading)] transition-colors">
                        {service.name}
                      </h2>
                      <p className="text-gray-500 group-hover:text-white/80 transition-colors">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-400 group-hover:text-white/80 transition-colors">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400 group-hover:text-white/60 transition-colors">Mulai dari</p>
                        <p className="font-bold text-primary group-hover:text-white transition-colors">
                          {service.price.split(" - ")[0]}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
            Konsultasi Gratis
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Booking sekarang dan dapatkan konsultasi pertama gratis dengan dokter spesialis kami.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Booking Sekarang
          </Link>
        </div>
      </section>
    </>
  );
}
