"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles, Shield, Minus, Smile, Star, CircleDot, Sun, Baby, ArrowRight, Clock
} from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Shield,
  Minus,
  Smile,
  Star,
  CircleDot,
  Sun,
  Baby,
};

export default function LayananPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Layanan Kami
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Berbagai layanan perawatan gigi lengkap dengan teknologi modern
              dan dokter spesialis berpengalaman
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent>
                      <div className="flex gap-6 lg:gap-8">
                        <div className="flex-shrink-0">
                          <div className="w-18 h-18 md:w-20 md:h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                            <Icon className="w-9 h-9 md:w-10 md:h-10 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl md:text-2xl text-text mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-500 mb-5 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-5 mb-6">
                            <span className="text-primary font-bold text-xl">
                              {service.priceText}
                            </span>
                            <span className="flex items-center gap-2 text-gray-500 text-sm">
                              <Clock className="w-4 h-4" />
                              {service.duration}
                            </span>
                          </div>
                          <Link href={`/layanan/${service.slug}`}>
                            <Button variant="outline" size="sm">
                              Lihat Detail
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
              Butuh Konsultasi?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Konsultasikan masalah gigi Anda dengan dokter spesialis kami.
              Konsultasi pertama GRATIS!
            </p>
            <Link href="/booking">
              <Button size="lg">Booking Konsultasi Gratis</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
