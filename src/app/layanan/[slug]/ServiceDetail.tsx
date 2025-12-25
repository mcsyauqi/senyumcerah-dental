"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check, Clock, BadgeCheck, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart,
};

interface Props {
  service: (typeof services)[0];
}

export default function ServiceDetail({ service }: Props) {
  const Icon = iconMap[service.icon] || Sparkles;
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Layanan
            </Link>

            <div className="flex items-start gap-6">
              <div className="icon-box hidden md:flex">
                <Icon />
              </div>
              <div>
                <h1 className="mb-4">{service.name}</h1>
                <p className="text-lg text-gray-600 max-w-2xl">{service.shortDesc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="mb-4">Tentang Layanan Ini</h3>
                <p className="text-gray-600 mb-10">{service.description}</p>

                <h3 className="mb-4">Keuntungan</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="card bg-background border-0 shadow-none">
                  <div className="card-body">
                    <h4 className="mb-4">Informasi Layanan</h4>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex items-center gap-4">
                        <div className="icon-box !bg-white">
                          <BadgeCheck />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Harga</div>
                          <div className="font-bold text-text">{service.price}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="icon-box !bg-white">
                          <Clock />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Durasi</div>
                          <div className="font-bold text-text">{service.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card sticky top-24"
              >
                <div className="card-body">
                  <h4 className="mb-4">Booking Sekarang</h4>
                  <p className="text-gray-600 mb-6">
                    Dapatkan konsultasi gratis dan perawatan terbaik dari dokter spesialis kami.
                  </p>
                  <Link href="/booking" className="btn btn-primary w-full">
                    Booking Online
                  </Link>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Atau hubungi{" "}
                    <a href="tel:+622112345678" className="text-primary font-semibold">
                      +62 21 1234 5678
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <h3 className="text-center mb-10">Layanan Lainnya</h3>
          <div className="grid-3">
            {otherServices.map((item, index) => {
              const OtherIcon = iconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/layanan/${item.id}`} className="card block h-full">
                    <div className="card-body">
                      <div className="icon-box mb-5">
                        <OtherIcon />
                      </div>
                      <h4 className="mb-2">{item.name}</h4>
                      <p className="text-gray-600 text-sm">{item.shortDesc}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
