"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Ticket, Copy, Gift, CreditCard } from "lucide-react";
import { promos } from "@/lib/data";

export default function PromoPage() {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="text-primary font-semibold mb-3">PROMO SPESIAL</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
              Penawaran Terbaik
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dapatkan penawaran menarik untuk perawatan gigi Anda. Gunakan kode promo saat booking!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {promos.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-accent text-white text-sm font-bold px-4 py-2 rounded-bl-2xl">
                  {promo.discount}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Ticket className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-text mb-3 font-[family-name:var(--font-heading)]">
                  {promo.title}
                </h2>
                <p className="text-gray-600 mb-6">{promo.description}</p>
                <p className="text-sm text-gray-400 mb-6">Berlaku hingga {promo.validUntil}</p>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                  <code className="font-mono font-bold text-primary">{promo.code}</code>
                  <button
                    onClick={() => handleCopy(promo.code)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-text mb-8 text-center font-[family-name:var(--font-heading)]">
            Cara Menggunakan Promo
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Gift, step: "1", title: "Pilih Promo", desc: "Pilih promo sesuai kebutuhan Anda" },
              { icon: Copy, step: "2", title: "Copy Kode", desc: "Salin kode promo dengan menekan tombol copy" },
              { icon: CreditCard, step: "3", title: "Gunakan", desc: "Masukkan kode saat booking atau sebutkan saat datang" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 relative">
                  <item.icon className="w-6 h-6 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-text mb-2 font-[family-name:var(--font-heading)]">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-heading)]">
            Jangan Lewatkan!
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Booking sekarang dan gunakan kode promo untuk harga spesial.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-2xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Booking Sekarang
          </Link>
        </div>
      </section>
    </>
  );
}
