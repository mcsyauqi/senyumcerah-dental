"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart,
};

export default function Services() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2>Layanan Kami</h2>
          <p>
            Berbagai layanan perawatan gigi lengkap dengan teknologi modern dan dokter spesialis berpengalaman.
          </p>
        </div>

        <div className="grid-4">
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
                <Link href={`/layanan/${service.id}`} className="card block h-full">
                  <div className="card-body">
                    <div className="icon-box mb-5">
                      <Icon />
                    </div>
                    <h4 className="mb-3">{service.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold text-sm">
                        {service.price.split(" - ")[0]}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/layanan" className="btn btn-outline">
            Lihat Semua Layanan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
