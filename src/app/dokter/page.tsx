"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Calendar, GraduationCap } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { doctors } from "@/lib/data";

export default function DokterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tim Dokter Kami
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ditangani oleh dokter gigi spesialis berpengalaman dan tersertifikasi
              dari universitas terkemuka
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="grid sm:grid-cols-5">
                    {/* Doctor Image Placeholder */}
                    <div className="sm:col-span-2 aspect-square sm:aspect-auto min-h-[200px] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="w-28 h-28 md:w-32 md:h-32 bg-primary/30 rounded-full flex items-center justify-center">
                        <span className="text-4xl md:text-5xl font-bold text-primary">
                          {doctor.name.charAt(5)}
                        </span>
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="sm:col-span-3">
                      <CardContent className="h-full flex flex-col">
                        <h2 className="font-bold text-xl md:text-2xl text-text mb-2">
                          {doctor.name}
                        </h2>
                        <p className="text-primary font-semibold text-lg mb-5">
                          {doctor.specialization}
                        </p>

                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                          {doctor.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-gray-600">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Award className="w-4 h-4 text-primary" />
                            </div>
                            <span>{doctor.experience} pengalaman</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <GraduationCap className="w-4 h-4 text-primary" />
                            </div>
                            <span>{doctor.education}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Calendar className="w-4 h-4 text-primary" />
                            </div>
                            <span>{doctor.schedule.join(", ")}</span>
                          </div>
                        </div>

                        <Link href="/booking">
                          <Button>Booking dengan Dokter Ini</Button>
                        </Link>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
              Konsultasi dengan Dokter Spesialis
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Pilih dokter sesuai kebutuhan Anda. Konsultasi pertama GRATIS!
            </p>
            <Link href="/booking">
              <Button size="lg">Booking Sekarang</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
