"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Calendar, ArrowRight } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { doctors } from "@/lib/data";

export default function Doctors() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <SectionTitle
          title="Tim Dokter Spesialis"
          subtitle="Ditangani oleh dokter gigi spesialis berpengalaman dan tersertifikasi"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full">
                {/* Doctor Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/30 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">
                      {doctor.name.charAt(5)}
                    </span>
                  </div>
                </div>
                <CardContent>
                  <h3 className="font-bold text-lg text-text mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-5">
                    {doctor.specialization}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <Award className="w-4 h-4 text-primary" />
                      <span>{doctor.experience} pengalaman</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{doctor.schedule.join(", ")}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link href="/dokter">
            <Button variant="outline" size="lg">
              Lihat Profil Lengkap
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
