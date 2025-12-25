"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { doctors } from "@/lib/data";

export default function Doctors() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="section-header">
          <h2>Tim Dokter Kami</h2>
          <p>
            Ditangani oleh dokter gigi spesialis berpengalaman dan bersertifikasi.
          </p>
        </div>

        <div className="grid-4">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="card-body text-center">
                <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨‍⚕️</span>
                </div>
                <h4 className="mb-1">{doctor.name}</h4>
                <p className="text-primary font-medium text-sm mb-3">{doctor.specialty}</p>
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-4">
                  <Award className="w-4 h-4" />
                  <span>{doctor.experience}</span>
                </div>
                <p className="text-gray-600 text-sm">{doctor.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/dokter" className="btn btn-outline">
            Profil Lengkap Dokter
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
