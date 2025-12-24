"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart, Clock, BadgeCheck } from "lucide-react";
import { services } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Sparkles,
  Shield,
  Hand,
  Star,
  Sun,
  Smile,
  Zap,
  Heart,
};

export default function LayananPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-background via-white to-background pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-8 font-[family-name:var(--font-heading)]">
              Layanan <span className="text-primary">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Berbagai layanan perawatan gigi lengkap dengan teknologi modern dan ditangani oleh dokter spesialis berpengalaman
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent>
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-10 h-10 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                            {service.name}
                          </h2>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center gap-2 text-gray-500">
                              <BadgeCheck className="w-5 h-5 text-primary" />
                              <span>{service.price}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                              <Clock className="w-5 h-5 text-primary" />
                              <span>{service.duration}</span>
                            </div>
                          </div>
                          <Link
                            href={`/layanan/${service.id}`}
                            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                          >
                            Selengkapnya
                            <ArrowRight className="w-5 h-5" />
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

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary to-cyan-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-[family-name:var(--font-heading)]">
            Butuh Konsultasi?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Konsultasi pertama GRATIS! Tim dokter kami siap membantu menemukan solusi terbaik untuk kesehatan gigi Anda.
          </p>
          <Button href="/booking" size="lg" className="bg-white text-primary hover:bg-gray-100">
            Booking Konsultasi Gratis
          </Button>
        </div>
      </section>
    </>
  );
}
