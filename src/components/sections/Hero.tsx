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
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-8">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              4.9 Rating dari 3000+ Pasien
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-8 leading-[1.15] tracking-tight">
              Klinik Gigi Modern untuk{" "}
              <span className="text-primary">Senyum Sempurna</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Perawatan gigi lengkap dengan teknologi terkini dan dokter gigi
              spesialis. Konsultasi pertama{" "}
              <span className="font-semibold text-primary">GRATIS!</span>
            </p>

            <div className="flex flex-wrap gap-5 mb-14">
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
            <div className="flex flex-wrap gap-8">
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-semibold text-text">{item.label}</span>
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
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 md:p-14 shadow-2xl shadow-primary/20">
              <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-36 h-36 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-24 h-24"
                    >
                      <path d="M12 2C9.243 2 7 4.243 7 7c0 2.1 1.3 3.9 3.2 4.6-.4.3-.7.6-.9 1-.5.8-.7 1.7-.6 2.7.2 2.2 1.3 4.3 2.4 5.5.4.4.9.7 1.4.7h1c.5 0 1-.3 1.4-.7 1.1-1.2 2.2-3.3 2.4-5.5.1-1-.1-1.9-.6-2.7-.2-.4-.5-.7-.9-1C15.7 10.9 17 9.1 17 7c0-2.757-2.243-5-5-5z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold mb-1">Senyum Sehat</p>
                  <p className="text-white/80 text-lg">Senyum Bahagia</p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -left-6 top-1/4 bg-white rounded-2xl shadow-xl p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-text text-lg">100% Steril</p>
                    <p className="text-sm text-gray-500">Terjamin Aman</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute -right-6 bottom-1/4 bg-white rounded-2xl shadow-xl p-5"
              >
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">10+</p>
                  <p className="text-sm text-gray-500 mt-1">Tahun Pengalaman</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
