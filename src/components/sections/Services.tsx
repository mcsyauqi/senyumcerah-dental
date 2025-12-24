"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart } from "lucide-react";
import { services } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
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

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          title="Layanan Kami"
          subtitle="Berbagai layanan perawatan gigi lengkap dengan teknologi modern dan dokter spesialis berpengalaman"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <Link href={`/layanan/${service.id}`}>
                  <Card className="h-full group">
                    <CardContent>
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.shortDesc}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold">{service.price.split(" - ")[0]}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button href="/layanan" variant="outline" size="lg">
            Lihat Semua Layanan
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
