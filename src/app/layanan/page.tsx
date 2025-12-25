"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart,
};

export default function LayananPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="mb-4">Layanan Kami</h1>
            <p className="text-lg text-gray-600">
              Berbagai layanan perawatan gigi lengkap dengan teknologi modern dan dokter spesialis berpengalaman.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/layanan/${service.id}`} className="card block group">
                    <div className="card-body">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="icon-box">
                          <Icon />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Mulai dari</div>
                            <div className="font-bold text-primary">{service.price.split(" - ")[0]}</div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Butuh Konsultasi?</h2>
            <p className="text-white/80 mb-8">
              Konsultasi pertama GRATIS! Tim dokter kami siap membantu menemukan solusi terbaik untuk kesehatan gigi Anda.
            </p>
            <Link href="/booking" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
              Booking Konsultasi Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
