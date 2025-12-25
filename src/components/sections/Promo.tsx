"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Tag, Calendar } from "lucide-react";
import { promos } from "@/lib/data";

export default function Promo() {
  return (
    <section className="section bg-gradient-to-br from-background to-white">
      <div className="container">
        <div className="section-header">
          <h2>Promo Spesial</h2>
          <p>
            Dapatkan penawaran menarik untuk perawatan gigi Anda.
          </p>
        </div>

        <div className="grid-3">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card relative"
            >
              <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                {promo.discount}
              </div>
              <div className="card-body">
                <h4 className="mb-3 pr-16">{promo.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{promo.description}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Berlaku hingga {promo.validUntil}</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <Tag className="w-5 h-5 text-primary" />
                  <code className="font-mono font-bold text-primary">{promo.code}</code>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/promo" className="btn btn-primary">
            Lihat Semua Promo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
