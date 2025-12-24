"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tag, Clock, Check, Gift } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { promos } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function PromoPage() {
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
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Promo Spesial
            </h1>
            <p className="text-lg text-white/90">
              Dapatkan penawaran terbaik untuk perawatan gigi Anda.
              Jangan lewatkan kesempatan ini!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promos Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {promos.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full relative overflow-hidden">
                  {/* Ribbon */}
                  <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-8 py-1 text-sm font-semibold transform rotate-45 translate-x-6 translate-y-3">
                    PROMO
                  </div>

                  <CardContent className="pt-8">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="warning">
                        <Tag className="w-3 h-3 mr-1" />
                        Hemat {Math.round((1 - promo.promoPrice / promo.originalPrice) * 100)}%
                      </Badge>
                    </div>

                    <h3 className="font-bold text-2xl text-text mb-2">
                      {promo.title}
                    </h3>
                    <p className="text-gray-500 mb-6">{promo.description}</p>

                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-gray-400 line-through">
                          {formatPrice(promo.originalPrice)}
                        </span>
                        <span className="text-sm text-gray-500">Harga Normal</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-3xl font-bold text-primary">
                          {formatPrice(promo.promoPrice)}
                        </span>
                        <span className="text-sm text-primary font-medium">Harga Promo</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Berlaku sampai {promo.validUntil}</span>
                    </div>

                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-medium text-text">Syarat & Ketentuan:</p>
                      {promo.terms.map((term, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-500">{term}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/booking">
                      <Button className="w-full">Ambil Promo</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Card>
              <CardContent>
                <h2 className="text-2xl font-bold text-text mb-4 text-center">
                  Informasi Promo
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-text mb-2">Cara Mengklaim Promo</h3>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600 text-sm">
                      <li>Pilih promo yang Anda inginkan</li>
                      <li>Klik tombol &ldquo;Ambil Promo&rdquo;</li>
                      <li>Isi form booking dengan lengkap</li>
                      <li>Sebutkan kode promo saat datang</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-2">Ketentuan Umum</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Promo tidak dapat digabung</li>
                      <li>Berlaku sesuai periode promo</li>
                      <li>Kuota terbatas</li>
                      <li>Syarat & ketentuan berlaku</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
