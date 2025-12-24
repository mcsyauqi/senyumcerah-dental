"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scan, Box, Zap, Cpu, Check, ShieldCheck, Award, Clock } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { technologies } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Scan,
  Box,
  Zap,
  Cpu,
};

const highlights = [
  {
    icon: ShieldCheck,
    title: "Steril & Aman",
    description: "Semua alat disterilkan sesuai standar internasional",
  },
  {
    icon: Award,
    title: "Bersertifikasi",
    description: "Alat dan dokter tersertifikasi resmi",
  },
  {
    icon: Clock,
    title: "Perawatan Cepat",
    description: "Teknologi modern untuk hasil lebih cepat",
  },
];

export default function TeknologiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Teknologi Modern
            </h1>
            <p className="text-lg text-white/90">
              Menggunakan peralatan terkini untuk memberikan perawatan gigi
              terbaik dengan hasil maksimal
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-text mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-12">
            {technologies.map((tech, index) => {
              const Icon = iconMap[tech.icon] || Cpu;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="overflow-hidden">
                    <div className={`grid md:grid-cols-2 ${!isEven && "md:flex-row-reverse"}`}>
                      {/* Image/Visual */}
                      <div className={`bg-gradient-to-br from-primary to-secondary p-12 flex items-center justify-center ${!isEven && "md:order-2"}`}>
                        <div className="w-32 h-32 bg-white/20 rounded-3xl flex items-center justify-center">
                          <Icon className="w-16 h-16 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`${!isEven && "md:order-1"}`}>
                        <CardContent className="h-full flex flex-col justify-center">
                          <h2 className="text-2xl font-bold text-text mb-3">
                            {tech.name}
                          </h2>
                          <p className="text-gray-600 mb-6">
                            {tech.longDescription}
                          </p>
                          <ul className="grid grid-cols-2 gap-3">
                            {tech.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-text mb-4">
              Rasakan Perawatan dengan Teknologi Terbaik
            </h2>
            <p className="text-gray-600 mb-6">
              Dapatkan pengalaman perawatan gigi terbaik dengan teknologi modern
              kami. Konsultasi pertama GRATIS!
            </p>
            <Link href="/booking">
              <Button size="lg">Booking Sekarang</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
