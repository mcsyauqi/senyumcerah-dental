"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles, Shield, Minus, Smile, Star, CircleDot, Sun, Baby, ArrowRight
} from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
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

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionTitle
          title="Layanan Unggulan Kami"
          subtitle="Berbagai layanan perawatan gigi dengan teknologi modern dan dokter berpengalaman"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                <Link href={`/layanan/${service.slug}`}>
                  <Card className="h-full group cursor-pointer">
                    <CardContent className="text-center py-10">
                      <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="font-bold text-lg text-text mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                        {service.shortDesc}
                      </p>
                      <p className="text-primary font-bold text-lg">
                        {service.priceText}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link href="/layanan">
            <Button variant="outline" size="lg">
              Lihat Semua Layanan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
