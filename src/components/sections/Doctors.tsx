"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctors } from "@/lib/data";

export default function Doctors() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-semibold mb-3"
            >
              TIM DOKTER
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]"
            >
              Ditangani Dokter Spesialis Berpengalaman
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Semua dokter kami memiliki sertifikasi resmi dan pengalaman lebih dari 8 tahun di bidangnya masing-masing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/dokter"
                className="inline-flex items-center gap-2 px-6 py-3 bg-text text-white rounded-xl font-semibold hover:bg-text/90 transition-colors"
              >
                Lihat Tim Dokter
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 ${index === 0 ? "col-span-2" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                    👨‍⚕️
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-text truncate font-[family-name:var(--font-heading)]">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-primary truncate">{doctor.specialty}</p>
                    <p className="text-xs text-gray-400 mt-1">{doctor.experience} pengalaman</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
