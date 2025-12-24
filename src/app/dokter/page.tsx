"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Clock } from "lucide-react";
import { doctors } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function DokterPage() {
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
              Tim <span className="text-primary">Dokter</span> Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ditangani oleh dokter gigi spesialis berpengalaman dan bersertifikasi dengan dedikasi tinggi untuk kesehatan gigi Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors List */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                      <div className="w-36 h-36 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center flex-shrink-0">
                        <span className="text-6xl">👨‍⚕️</span>
                      </div>
                      <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                          {doctor.name}
                        </h2>
                        <p className="text-primary font-semibold text-lg mb-6">
                          {doctor.specialty}
                        </p>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-3 justify-center sm:justify-start text-gray-600">
                            <Award className="w-5 h-5 text-primary" />
                            <span>{doctor.experience}</span>
                          </div>
                          <div className="flex items-center gap-3 justify-center sm:justify-start text-gray-600">
                            <GraduationCap className="w-5 h-5 text-primary" />
                            <span>{doctor.education}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {doctor.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
              Mengapa Memilih Dokter Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Keunggulan tim dokter SenyumCerah Dental Clinic
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Bersertifikasi",
                description: "Semua dokter memiliki sertifikasi resmi dan lisensi praktik yang valid",
              },
              {
                icon: Clock,
                title: "Berpengalaman",
                description: "Rata-rata pengalaman lebih dari 10 tahun di bidang spesialisasi masing-masing",
              },
              {
                icon: GraduationCap,
                title: "Pendidikan Terbaik",
                description: "Lulusan dari universitas kedokteran gigi terkemuka di Indonesia",
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
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <item.icon className="w-10 h-10 text-primary" />
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-[family-name:var(--font-heading)]">
            Konsultasi dengan Dokter Kami
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Booking jadwal konsultasi dengan dokter spesialis pilihan Anda. Konsultasi pertama GRATIS!
          </p>
          <Button href="/booking" size="lg" className="bg-white text-primary hover:bg-gray-100">
            Booking Sekarang
          </Button>
        </div>
      </section>
    </>
  );
}
