"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tag, Calendar, Copy, Gift, CreditCard, Check, Star, Clock, ArrowRight, Sparkles, Percent } from "lucide-react";
import { promos, services, testimonials } from "@/lib/data";

const popularServices = [
  {
    name: "Scaling + Polish",
    originalPrice: "Rp 350.000",
    promoPrice: "Rp 245.000",
    discount: "30%",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=200&fit=crop"
  },
  {
    name: "Bleaching Gigi",
    originalPrice: "Rp 2.500.000",
    promoPrice: "Rp 2.000.000",
    discount: "20%",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=200&fit=crop"
  },
  {
    name: "Veneer Gigi",
    originalPrice: "Rp 3.500.000",
    promoPrice: "Rp 2.975.000",
    discount: "15%",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=300&h=200&fit=crop"
  }
];

const benefits = [
  "Konsultasi pertama GRATIS",
  "Cicilan 0% hingga 12 bulan",
  "Garansi hasil perawatan",
  "Dokter spesialis berpengalaman",
  "Fasilitas modern dan nyaman",
  "Promo khusus member"
];

const whyNow = [
  {
    icon: Clock,
    title: "Promo Terbatas",
    desc: "Promo berlaku untuk periode tertentu. Jangan sampai ketinggalan!"
  },
  {
    icon: Sparkles,
    title: "Hasil Maksimal",
    desc: "Dapatkan perawatan berkualitas dengan harga lebih terjangkau"
  },
  {
    icon: Percent,
    title: "Hemat Hingga 30%",
    desc: "Potongan harga spesial untuk berbagai layanan pilihan"
  }
];

export default function PromoPage() {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const promoTestimonials = testimonials.slice(0, 2);

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

      {/* Active Promos */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Promo Aktif</h2>
            <p>Penawaran spesial yang sedang berlaku</p>
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

      {/* Popular Services on Promo */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Layanan Populer</h2>
            <p>Layanan favorit dengan harga promo</p>
          </div>
          <div className="grid-3">
            {popularServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -{service.discount}
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="mb-3">{service.name}</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gray-400 line-through">{service.originalPrice}</span>
                    <span className="text-xl font-bold text-primary">{service.promoPrice}</span>
                  </div>
                  <Link href="/booking" className="btn btn-primary w-full">
                    Booking Sekarang
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Mengapa Harus Sekarang?</h2>
            <p>Alasan untuk tidak menunda perawatan gigi Anda</p>
          </div>
          <div className="grid-3">
            {whyNow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="card-body text-center">
                  <div className="icon-box mx-auto mb-4">
                    <item.icon />
                  </div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Cara Menggunakan Promo</h2>
            <p>3 langkah mudah untuk menikmati promo</p>
          </div>
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

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=450&fit=crop"
                alt="SenyumCerah Dental Clinic"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Keuntungan Perawatan di SenyumCerah</h2>
              <p className="text-gray-600 mb-8">
                Selain promo menarik, dapatkan berbagai keuntungan lainnya saat melakukan perawatan di klinik kami.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Testimoni Pasien</h2>
            <p>Pengalaman pasien yang telah menikmati promo kami</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">
            {promoTestimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="card-body">
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">&ldquo;{item.comment}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-text">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.treatment}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Link */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="mb-4">Lihat Semua Layanan</h2>
            <p className="text-gray-600 mb-8">
              Jelajahi berbagai layanan perawatan gigi lengkap yang kami tawarkan dengan harga terbaik.
            </p>
            <Link href="/layanan" className="btn btn-outline">
              Lihat Semua Layanan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Jangan Lewatkan!</h2>
            <p className="text-white/80 mb-8">
              Booking sekarang dan gunakan kode promo untuk mendapatkan harga spesial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                Booking Sekarang
              </Link>
              <a href="https://wa.me/6281234567890" className="btn btn-lg bg-green-500 text-white hover:bg-green-600">
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
