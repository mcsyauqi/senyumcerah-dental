"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scan, Zap, Cpu, ShieldCheck, Check } from "lucide-react";
import { technologies } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scan, Zap, Cpu, ShieldCheck,
};

const benefits = [
  "Diagnosis lebih akurat dan cepat",
  "Prosedur lebih nyaman dan minim rasa sakit",
  "Hasil perawatan lebih presisi",
  "Waktu penyembuhan lebih cepat",
  "Keamanan dan sterilitas terjamin",
  "Pengalaman pasien yang lebih baik",
];

export default function TeknologiPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="mb-4">Teknologi Modern</h1>
            <p className="text-lg text-gray-600">
              Didukung peralatan kedokteran gigi terkini untuk hasil perawatan terbaik dan pengalaman yang nyaman.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid-2">
            {technologies.map((tech, index) => {
              const Icon = iconMap[tech.icon] || Scan;
              return (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="card-body">
                    <div className="icon-box mb-5">
                      <Icon />
                    </div>
                    <h3 className="mb-3">{tech.name}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Keunggulan Teknologi Kami</h2>
              <p className="text-lg text-gray-600 mb-8">
                Investasi pada teknologi terkini adalah komitmen kami untuk memberikan pelayanan terbaik bagi setiap pasien.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 text-center"
            >
              <div className="text-6xl mb-6">🔬</div>
              <h3 className="mb-2">Standar Internasional</h3>
              <p className="text-gray-600">Peralatan dengan standar internasional terbaik</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Rasakan Perawatan Modern</h2>
            <p className="text-white/80 mb-8">
              Kunjungi klinik kami dan rasakan pengalaman perawatan gigi dengan teknologi terkini.
            </p>
            <Link href="/booking" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
              Booking Sekarang
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
