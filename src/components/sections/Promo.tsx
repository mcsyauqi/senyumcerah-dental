"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tag, ArrowRight, Clock } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { promos } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function Promo() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container">
        <SectionTitle
          title="Promo Bulanan"
          subtitle="Dapatkan penawaran spesial untuk perawatan gigi Anda"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden">
                {/* Discount Badge */}
                <div className="absolute top-6 right-6">
                  <Badge variant="warning">
                    <Tag className="w-4 h-4 mr-1.5" />
                    Hemat {Math.round((1 - promo.promoPrice / promo.originalPrice) * 100)}%
                  </Badge>
                </div>

                <CardContent className="pt-16">
                  <h3 className="font-bold text-2xl text-text mb-3">
                    {promo.title}
                  </h3>
                  <p className="text-gray-500 mb-6 text-lg">{promo.description}</p>

                  <div className="mb-6">
                    <span className="text-gray-400 line-through text-base">
                      {formatPrice(promo.originalPrice)}
                    </span>
                    <p className="text-3xl font-bold text-primary mt-1">
                      {formatPrice(promo.promoPrice)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
                    <Clock className="w-4 h-4" />
                    <span>Berlaku sampai {promo.validUntil}</span>
                  </div>

                  <Link href="/booking">
                    <Button className="w-full">Ambil Promo</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link href="/promo">
            <Button variant="outline" size="lg">
              Lihat Semua Promo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
