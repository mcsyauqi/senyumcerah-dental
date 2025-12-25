"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, GraduationCap } from "lucide-react";
import { doctors } from "@/lib/data";

export default function DokterPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-semibold mb-3">TIM DOKTER</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
              Dokter Spesialis Berpengalaman
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Semua dokter kami memiliki sertifikasi resmi dan pengalaman lebih dari 8 tahun.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white text-4xl flex-shrink-0">
                    👨‍⚕️
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-text mb-1 font-[family-name:var(--font-heading)]">
                      {doctor.name}
                    </h2>
                    <p className="text-primary font-medium mb-4">{doctor.specialty}</p>
                    <p className="text-gray-600 mb-6">{doctor.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Award className="w-4 h-4 text-primary" />
                        {doctor.experience} pengalaman
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        {doctor.education}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
            Konsultasi dengan Dokter Kami
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Booking jadwal konsultasi dengan dokter spesialis pilihan Anda.
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
