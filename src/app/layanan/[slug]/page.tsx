"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Sparkles, Shield, Minus, Smile, Star, CircleDot, Sun, Baby,
  Check, Clock, ArrowLeft
} from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { services, doctors } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Shield,
  Minus,
  Smile,
  Star,
  CircleDot,
  Sun,
  Baby,
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Sparkles;
  const relatedDoctors = doctors.filter((d) => {
    if (service.slug === "behel-kawat-gigi") return d.specialization.includes("Ortodonti");
    if (service.slug === "cabut-gigi" || service.slug === "implan-gigi") return d.specialization.includes("Bedah") || d.specialization.includes("Implan");
    if (service.slug === "tambal-gigi") return d.specialization.includes("Konservasi");
    if (service.slug === "veneer-gigi") return d.specialization.includes("Implan") || d.specialization.includes("Pros");
    return true;
  }).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              href="/layanan"
              className="inline-flex items-center text-white/80 hover:text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Layanan
            </Link>

            <div className="flex items-start gap-6">
              <div className="hidden md:flex w-20 h-20 bg-white/20 rounded-2xl items-center justify-center flex-shrink-0">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {service.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                  <Badge className="bg-white/20 text-white">
                    {service.priceText}
                  </Badge>
                  <span className="flex items-center gap-1 text-white/80">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card>
                  <CardContent>
                    <h2 className="text-xl font-semibold text-text mb-4">
                      Tentang Layanan
                    </h2>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card>
                  <CardContent>
                    <h2 className="text-xl font-semibold text-text mb-4">
                      Manfaat
                    </h2>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Card>
                  <CardContent>
                    <h2 className="text-xl font-semibold text-text mb-4">
                      Proses Perawatan
                    </h2>
                    <ol className="space-y-4">
                      {service.process.map((step, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-semibold text-sm">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-gray-600 pt-1">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Card>
                  <CardContent className="text-center">
                    <p className="text-gray-500 mb-2">Mulai dari</p>
                    <p className="text-3xl font-bold text-primary mb-4">
                      {service.priceText}
                    </p>
                    <Link href="/booking" className="block">
                      <Button className="w-full">Booking Sekarang</Button>
                    </Link>
                    <p className="text-sm text-gray-500 mt-3">
                      Konsultasi pertama GRATIS
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Related Doctors */}
              {relatedDoctors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <Card>
                    <CardContent>
                      <h3 className="font-semibold text-text mb-4">
                        Dokter Terkait
                      </h3>
                      <div className="space-y-4">
                        {relatedDoctors.map((doctor) => (
                          <div key={doctor.id} className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-primary font-semibold">
                                {doctor.name.charAt(5)}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-text text-sm">
                                {doctor.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {doctor.specialization}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Link href="/dokter" className="block mt-4">
                        <Button variant="outline" size="sm" className="w-full">
                          Lihat Semua Dokter
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
