"use client";

import { motion } from "framer-motion";
import { doctors } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ArrowRight, Award } from "lucide-react";

export default function Doctors() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          title="Tim Dokter Kami"
          subtitle="Ditangani oleh dokter gigi spesialis berpengalaman dan bersertifikasi"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <CardContent>
                  <div className="w-28 h-28 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-5xl">👨‍⚕️</span>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2 font-[family-name:var(--font-heading)]">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{doctor.specialty}</p>
                  <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-4">
                    <Award className="w-4 h-4" />
                    <span>{doctor.experience}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doctor.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button href="/dokter" variant="outline" size="lg">
            Profil Lengkap Dokter
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
