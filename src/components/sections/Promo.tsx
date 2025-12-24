"use client";

import { motion } from "framer-motion";
import { Tag, Calendar, Copy } from "lucide-react";
import { promos } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export default function Promo() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          title="Promo Spesial"
          subtitle="Dapatkan penawaran menarik untuk perawatan gigi Anda"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-visible">
                <div className="absolute -top-4 left-8">
                  <Badge variant="accent">{promo.discount}</Badge>
                </div>
                <CardContent className="pt-10">
                  <h3 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {promo.description}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                    <Calendar className="w-4 h-4" />
                    <span>Berlaku hingga {promo.validUntil}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-primary" />
                      <span className="font-mono font-bold text-text">{promo.code}</span>
                    </div>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Copy className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/promo" variant="primary" size="lg">
            Lihat Semua Promo
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
