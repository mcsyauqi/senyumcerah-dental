"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart, Check, Users, Award, Stethoscope, HeartHandshake } from "lucide-react";
import { services, faqs } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart,
};

const whyChooseUs = [
  {
    icon: Users,
    title: "Dokter Spesialis",
    desc: "Tim dokter gigi spesialis berpengalaman dengan sertifikasi nasional dan internasional"
  },
  {
    icon: Award,
    title: "Teknologi Modern",
    desc: "Peralatan kedokteran gigi terkini untuk hasil perawatan terbaik"
  },
  {
    icon: Stethoscope,
    title: "Sterilisasi Terjamin",
    desc: "Standar sterilisasi internasional untuk keamanan dan kenyamanan Anda"
  },
  {
    icon: HeartHandshake,
    title: "Pelayanan Prima",
    desc: "Pendekatan ramah dan profesional untuk pengalaman yang menyenangkan"
  }
];

const processSteps = [
  { step: "01", title: "Konsultasi", desc: "Konsultasi gratis dengan dokter untuk mengetahui kondisi gigi Anda" },
  { step: "02", title: "Diagnosis", desc: "Pemeriksaan menyeluruh dengan teknologi modern untuk diagnosis akurat" },
  { step: "03", title: "Rencana Perawatan", desc: "Dokter menyusun rencana perawatan sesuai kebutuhan Anda" },
  { step: "04", title: "Perawatan", desc: "Prosedur perawatan dengan teknik terkini dan minim rasa sakit" },
];

export default function LayananPage() {
  const serviceFaqs = faqs.slice(0, 3);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="mb-4">Layanan Kami</h1>
            <p className="text-lg text-gray-600">
              Berbagai layanan perawatan gigi lengkap dengan teknologi modern dan dokter spesialis berpengalaman.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Mengapa Memilih Kami?</h2>
            <p>Komitmen kami untuk memberikan pelayanan terbaik bagi kesehatan gigi Anda</p>
          </div>
          <div className="grid-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="icon-box mx-auto mb-4">
                  <item.icon />
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Daftar Layanan</h2>
            <p>Pilih layanan yang sesuai dengan kebutuhan perawatan gigi Anda</p>
          </div>
          <div className="flex flex-col gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Sparkles;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/layanan/${service.id}`} className="card block group">
                    <div className="card-body">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="icon-box">
                          <Icon />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2 group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">Mulai dari</div>
                            <div className="font-bold text-primary">{service.price.split(" - ")[0]}</div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Alur Perawatan</h2>
            <p>Proses perawatan yang mudah dan nyaman untuk Anda</p>
          </div>
          <div className="grid-4">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="card h-full">
                  <div className="card-body">
                    <div className="text-5xl font-bold text-primary/10 mb-4">{item.step}</div>
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Image */}
      <section className="section bg-background">
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
                alt="Ruang perawatan SenyumCerah Dental"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Fasilitas Modern & Nyaman</h2>
              <p className="text-gray-600 mb-6">
                Klinik kami dilengkapi dengan peralatan kedokteran gigi terkini dan dirancang untuk memberikan kenyamanan maksimal bagi setiap pasien.
              </p>
              <div className="space-y-4">
                {[
                  "Ruang tunggu yang nyaman dengan WiFi gratis",
                  "Ruang perawatan steril dan modern",
                  "Peralatan digital X-ray dengan radiasi minimal",
                  "Parkir luas dan mudah diakses"
                ].map((item, i) => (
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

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Pertanyaan Umum</h2>
            <p>Jawaban untuk pertanyaan yang sering diajukan</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {serviceFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card mb-4"
              >
                <div className="card-body">
                  <h4 className="mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/kontak" className="btn btn-outline">
              Punya Pertanyaan Lain?
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Butuh Konsultasi?</h2>
            <p className="text-white/80 mb-8">
              Konsultasi pertama GRATIS! Tim dokter kami siap membantu menemukan solusi terbaik untuk kesehatan gigi Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                Booking Konsultasi Gratis
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
