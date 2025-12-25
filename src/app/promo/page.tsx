"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Tag, Calendar, Copy, Gift, CreditCard } from "lucide-react";
import { promos } from "@/lib/data";

export default function PromoPage() {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="mb-4">Promo Spesial</h1>
            <p className="text-lg text-gray-600">
              Dapatkan penawaran menarik untuk perawatan gigi Anda. Gunakan kode promo saat booking!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
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
                <div className="absolute top-4 right-4 bg-accent text-white text-sm font-bold px-4 py-1 rounded-full">
                  {promo.discount}
                </div>
                <div className="card-body">
                  <h3 className="mb-3 pr-20">{promo.title}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Berlaku hingga {promo.validUntil}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-primary" />
                      <code className="font-mono font-bold text-primary">{promo.code}</code>
                    </div>
                    <button
                      onClick={() => handleCopy(promo.code)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                      aria-label="Copy code"
                    >
                      <Copy className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <h3 className="text-center mb-10">Cara Menggunakan Promo</h3>
          <div className="grid-3 max-w-4xl mx-auto">
            {[
              { icon: Gift, step: "1", title: "Pilih Promo", desc: "Pilih promo yang sesuai dengan kebutuhan perawatan Anda" },
              { icon: Copy, step: "2", title: "Copy Kode", desc: "Salin kode promo dengan menekan tombol copy" },
              { icon: CreditCard, step: "3", title: "Gunakan", desc: "Masukkan kode saat booking atau sebutkan saat datang" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="card-body">
                  <div className="icon-box mx-auto mb-4 relative">
                    <item.icon />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Jangan Lewatkan!</h2>
            <p className="text-white/80 mb-8">
              Booking sekarang dan gunakan kode promo untuk mendapatkan harga spesial.
            </p>
            <Link href="/booking" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
              Booking Sekarang
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
