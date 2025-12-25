"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { technologies } from "@/lib/data";

const techImages = [
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1583912267550-d974311a9a6e?w=400&h=250&fit=crop",
];

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
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image
                    src={techImages[index % techImages.length]}
                    alt={tech.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="card-body">
                  <h3 className="mb-3">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </motion.div>
            ))}
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
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&h=500&fit=crop"
                alt="Dental Technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="mb-2">Standar Internasional</h3>
                  <p className="text-gray-600 text-sm">Peralatan dengan standar internasional terbaik</p>
                </div>
              </div>
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
