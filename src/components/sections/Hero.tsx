"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const features = [
  "Konsultasi Pertama Gratis",
  "Dokter Spesialis Berpengalaman",
  "Teknologi Modern & Steril",
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-white to-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Klinik Gigi Terpercaya di Jakarta
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-8 font-[family-name:var(--font-heading)]">
              Senyum Sehat,
              <br />
              <span className="text-primary">Senyum Bahagia</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              Dapatkan perawatan gigi terbaik dari dokter spesialis berpengalaman dengan teknologi modern. Wujudkan senyum impian Anda bersama SenyumCerah.
            </p>

            <ul className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 text-gray-700"
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button href="/booking" size="lg">
                Booking Sekarang
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/layanan" variant="outline" size="lg">
                Lihat Layanan
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl -rotate-3 opacity-10" />
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
                    <span className="text-5xl">🦷</span>
                  </div>
                  <p className="text-2xl font-bold text-text mb-3 font-[family-name:var(--font-heading)]">SenyumCerah</p>
                  <p className="text-gray-600">Dental Clinic</p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <div>
                  <p className="font-bold text-text text-lg">4 Dokter</p>
                  <p className="text-sm text-gray-500">Spesialis</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-text text-lg">5000+</p>
                  <p className="text-sm text-gray-500">Pasien Puas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
