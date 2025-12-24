"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scan, Box, Zap, Cpu, ArrowRight } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { technologies } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Scan,
  Box,
  Zap,
  Cpu,
};

export default function Technology() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionTitle
          title="Teknologi Modern"
          subtitle="Menggunakan peralatan terkini untuk hasil perawatan terbaik"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {technologies.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Cpu;
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="py-10">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-text mb-3">
                      {tech.name}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
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
          <Link href="/teknologi">
            <Button variant="outline" size="lg">
              Pelajari Lebih Lanjut
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
