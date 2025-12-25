"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-8"
          >
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </span>
            <span className="text-sm text-gray-600">5000+ Pasien Puas</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-text leading-[1.1] mb-8 font-[family-name:var(--font-heading)]"
          >
            Senyum Sehat,
            <br />
            <span className="text-primary">Senyum Bahagia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-12 leading-relaxed"
          >
            Dapatkan perawatan gigi terbaik dari dokter spesialis berpengalaman dengan teknologi modern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-all hover:gap-3"
            >
              Booking Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-text rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 text-primary fill-primary" />
              </div>
              Lihat Video
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl"
        >
          {[
            { number: "12+", label: "Tahun Pengalaman" },
            { number: "5000+", label: "Pasien Puas" },
            { number: "4", label: "Dokter Spesialis" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-text font-[family-name:var(--font-heading)]">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
