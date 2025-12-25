"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scan, Zap, Cpu, ShieldCheck, Check } from "lucide-react";
import { technologies } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scan, Zap, Cpu, ShieldCheck
};

const benefits = [
  "Diagnosis lebih akurat dan cepat",
  "Prosedur lebih nyaman",
  "Hasil perawatan lebih presisi",
  "Waktu penyembuhan lebih cepat",
  "Keamanan terjamin",
  "Pengalaman pasien lebih baik"
];

export default function TeknologiPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-semibold mb-3">TEKNOLOGI</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
              Peralatan Modern & Canggih
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Didukung teknologi terkini untuk hasil perawatan terbaik dan pengalaman yang nyaman.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => {
              const Icon = iconMap[tech.icon] || Scan;
              return (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-text mb-3 font-[family-name:var(--font-heading)]">
                    {tech.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
                Keunggulan Teknologi Kami
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Investasi pada teknologi terkini adalah komitmen kami untuk memberikan pelayanan terbaik.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
              <div className="text-6xl mb-6">🔬</div>
              <h3 className="text-xl font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                Standar Internasional
              </h3>
              <p className="text-gray-600">Peralatan dengan standar internasional terbaik</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
            Rasakan Perawatan Modern
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Kunjungi klinik kami dan rasakan pengalaman perawatan gigi dengan teknologi terkini.
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
