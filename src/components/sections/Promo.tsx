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
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <SectionTitle
          title="Promo Bulanan"
          subtitle="Dapatkan penawaran spesial untuk perawatan gigi Anda"
        />

        <div className="grid md:grid-cols-3 gap-6">
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
                <div className="absolute top-4 right-4">
                  <Badge variant="warning">
                    <Tag className="w-3 h-3 mr-1" />
                    Hemat {Math.round((1 - promo.promoPrice / promo.originalPrice) * 100)}%
                  </Badge>
                </div>

                <CardContent className="pt-12">
                  <h3 className="font-bold text-xl text-text mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{promo.description}</p>

                  <div className="mb-4">
                    <span className="text-gray-400 line-through text-sm">
                      {formatPrice(promo.originalPrice)}
                    </span>
                    <p className="text-2xl font-bold text-primary">
                      {formatPrice(promo.promoPrice)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
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
          className="text-center mt-10"
        >
          <Link href="/promo">
            <Button variant="outline">
              Lihat Semua Promo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
