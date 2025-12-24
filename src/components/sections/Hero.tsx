"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, UserCheck, Cpu, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const trustItems = [
  { icon: UserCheck, label: "Dokter Spesialis" },
  { icon: Cpu, label: "Alat Modern" },
  { icon: ShieldCheck, label: "Steril & Aman" },
];

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-white to-secondary/10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6">
              <Star className="w-4 h-4 mr-1 text-yellow-500" />
              4.9 Rating dari 3000+ Pasien
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 leading-tight">
              Klinik Gigi Modern untuk{" "}
              <span className="text-primary">Senyum Sempurna</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Perawatan gigi lengkap dengan teknologi terkini dan dokter gigi
              spesialis. Konsultasi pertama{" "}
              <span className="font-semibold text-primary">GRATIS!</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/booking">
                <Button size="lg">Booking Sekarang</Button>
              </Link>
              <Link href="/layanan">
                <Button variant="outline" size="lg">
                  Lihat Layanan
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-text">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12">
              <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-20 h-20"
                    >
                      <path d="M12 2C9.243 2 7 4.243 7 7c0 2.1 1.3 3.9 3.2 4.6-.4.3-.7.6-.9 1-.5.8-.7 1.7-.6 2.7.2 2.2 1.3 4.3 2.4 5.5.4.4.9.7 1.4.7h1c.5 0 1-.3 1.4-.7 1.1-1.2 2.2-3.3 2.4-5.5.1-1-.1-1.9-.6-2.7-.2-.4-.5-.7-.9-1C15.7 10.9 17 9.1 17 7c0-2.757-2.243-5-5-5z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold">Senyum Sehat</p>
                  <p className="text-white/80">Senyum Bahagia</p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">100% Steril</p>
                    <p className="text-sm text-gray-500">Terjamin Aman</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-lg p-4"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-gray-500">Tahun Pengalaman</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
