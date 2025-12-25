"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, GraduationCap } from "lucide-react";
import { doctors } from "@/lib/data";

export default function DokterPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="mb-4">Tim Dokter Kami</h1>
            <p className="text-lg text-gray-600">
              Ditangani oleh dokter gigi spesialis berpengalaman dan bersertifikasi dengan dedikasi tinggi untuk kesehatan gigi Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid-2">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="card-body">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-5xl">👨‍⚕️</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="mb-1">{doctor.name}</h3>
                      <p className="text-primary font-semibold mb-4">{doctor.specialty}</p>
                      <p className="text-gray-600 mb-4">{doctor.description}</p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          {doctor.experience}
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          {doctor.education}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Konsultasi dengan Dokter Kami</h2>
            <p className="text-white/80 mb-8">
              Booking jadwal konsultasi dengan dokter spesialis pilihan Anda. Konsultasi pertama GRATIS!
            </p>
            <Link href="/booking" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
              Booking Sekarang
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
