"use client";

import { motion } from "framer-motion";
import { Scan, Zap, Cpu, ShieldCheck } from "lucide-react";
import { technologies } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Scan,
  Zap,
  Cpu,
  ShieldCheck,
};

export default function Technology() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          title="Teknologi Modern"
          subtitle="Didukung peralatan canggih untuk hasil perawatan terbaik dan pengalaman yang nyaman"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = iconMap[tech.icon] || Scan;
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent>
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button href="/teknologi" variant="outline" size="lg">
            Pelajari Lebih Lanjut
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
