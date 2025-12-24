"use client";

import { motion } from "framer-motion";
import { Tag, Calendar, Copy, Gift, Percent, CreditCard } from "lucide-react";
import { promos } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function PromoPage() {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-background via-white to-background pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-8 font-[family-name:var(--font-heading)]">
              Promo <span className="text-primary">Spesial</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dapatkan penawaran menarik untuk perawatan gigi Anda. Gunakan kode promo saat booking!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promos */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10">
            {promos.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full relative">
                  <div className="absolute -top-4 left-8">
                    <Badge variant="accent" className="text-base px-5 py-2.5">
                      {promo.discount}
                    </Badge>
                  </div>
                  <CardContent className="pt-12">
                    <h2 className="text-2xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                      {promo.title}
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {promo.description}
                    </p>
                    <div className="flex items-center gap-3 text-gray-500 mb-8">
                      <Calendar className="w-5 h-5" />
                      <span>Berlaku hingga {promo.validUntil}</span>
                    </div>
                    <div className="flex items-center justify-between p-5 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Tag className="w-6 h-6 text-primary" />
                        <span className="font-mono font-bold text-text text-lg">{promo.code}</span>
                      </div>
                      <button
                        onClick={() => handleCopy(promo.code)}
                        className="p-3 hover:bg-gray-200 rounded-xl transition-colors"
                      >
                        <Copy className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
              Cara Menggunakan Promo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ikuti langkah mudah berikut untuk mendapatkan promo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Gift,
                step: "1",
                title: "Pilih Promo",
                description: "Pilih promo yang sesuai dengan kebutuhan perawatan Anda",
              },
              {
                icon: Copy,
                step: "2",
                title: "Copy Kode",
                description: "Salin kode promo dengan menekan tombol copy di samping kode",
              },
              {
                icon: CreditCard,
                step: "3",
                title: "Gunakan Saat Booking",
                description: "Masukkan kode promo saat melakukan booking online atau sebutkan saat datang",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent>
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center relative">
                      <item.icon className="w-10 h-10 text-primary" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary to-cyan-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <Percent className="w-16 h-16 text-white/80 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-[family-name:var(--font-heading)]">
            Jangan Lewatkan Promo Ini!
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Booking sekarang dan gunakan kode promo untuk mendapatkan harga spesial.
          </p>
          <Button href="/booking" size="lg" className="bg-white text-primary hover:bg-gray-100">
            Booking Sekarang
          </Button>
        </div>
      </section>
    </>
  );
}
