"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check, Clock, BadgeCheck, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart
};

interface Props {
  service: typeof services[0];
}

export default function ServiceDetail({ service }: Props) {
  const Icon = iconMap[service.icon] || Sparkles;
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Link href="/layanan" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
                {service.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl">
                  <BadgeCheck className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-text">{service.price}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-text">{service.duration}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
                Keuntungan
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/booking"
                  className="block w-full text-center px-6 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Booking Sekarang
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-text mb-8 font-[family-name:var(--font-heading)]">
            Layanan Lainnya
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((item) => {
              const OtherIcon = iconMap[item.icon] || Sparkles;
              return (
                <Link
                  key={item.id}
                  href={`/layanan/${item.id}`}
                  className="group p-6 bg-gray-50 hover:bg-primary rounded-2xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <OtherIcon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-text group-hover:text-white mb-2 font-[family-name:var(--font-heading)] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">
                    {item.shortDesc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
