"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, BadgeCheck, CheckCircle, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Sparkles,
  Shield,
  Hand,
  Star,
  Sun,
  Smile,
  Zap,
  Heart,
};

interface ServiceDetailClientProps {
  service: {
    id: string;
    name: string;
    shortDesc: string;
    description: string;
    price: string;
    duration: string;
    icon: string;
    benefits: string[];
  };
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const IconComponent = iconMap[service.icon] || Sparkles;
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-background via-white to-background pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali ke Layanan
            </Link>

            <div className="flex items-start gap-8">
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
                  {service.name}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
                  Tentang Layanan Ini
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-12">
                  {service.description}
                </p>

                <h2 className="text-2xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
                  Keuntungan
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Card className="bg-background border-0">
                  <CardContent>
                    <h3 className="text-xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
                      Informasi Layanan
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                          <BadgeCheck className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Harga Mulai</p>
                          <p className="font-bold text-text text-lg">{service.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                          <Clock className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Durasi</p>
                          <p className="font-bold text-text text-lg">{service.duration}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="sticky top-32">
                  <CardContent>
                    <h3 className="text-xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
                      Booking Sekarang
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Dapatkan konsultasi gratis dan perawatan terbaik dari dokter spesialis kami.
                    </p>
                    <Button href="/booking" className="w-full justify-center" size="lg">
                      Booking Online
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-6">
                      Atau hubungi kami di<br />
                      <a href="tel:+622112345678" className="text-primary font-semibold">
                        +62 21 1234 5678
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-bold text-text mb-12 text-center font-[family-name:var(--font-heading)]">
            Layanan Lainnya
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((otherService, index) => {
              const OtherIcon = iconMap[otherService.icon] || Sparkles;
              return (
                <motion.div
                  key={otherService.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/layanan/${otherService.id}`}>
                    <Card className="h-full group">
                      <CardContent>
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                          <OtherIcon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                          {otherService.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {otherService.shortDesc}
                        </p>
                      </CardContent>
                    </Card>
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
