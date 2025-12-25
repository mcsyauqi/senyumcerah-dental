"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const features = [
  "Konsultasi Pertama Gratis",
  "Dokter Spesialis Berpengalaman",
  "Teknologi Modern & Steril",
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Klinik Gigi Terpercaya di Jakarta
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            Senyum Sehat,
            <br />
            <span className="text-primary">Senyum Bahagia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
          >
            Dapatkan perawatan gigi terbaik dari dokter spesialis berpengalaman dengan teknologi modern. Wujudkan senyum impian Anda bersama SenyumCerah.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3 mb-10"
          >
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/booking" className="btn btn-primary btn-lg">
              Booking Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/layanan" className="btn btn-outline btn-lg">
              Lihat Layanan
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
