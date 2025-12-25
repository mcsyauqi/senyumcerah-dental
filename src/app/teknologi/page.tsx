"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Shield, Zap, Eye, Heart, Award, ArrowRight } from "lucide-react";
import { technologies, services } from "@/lib/data";

const techImages = [
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1583912267550-d974311a9a6e?w=600&h=400&fit=crop",
];

const benefits = [
  "Diagnosis lebih akurat dan cepat",
  "Prosedur lebih nyaman dan minim rasa sakit",
  "Hasil perawatan lebih presisi",
  "Waktu penyembuhan lebih cepat",
  "Keamanan dan sterilitas terjamin",
  "Pengalaman pasien yang lebih baik",
];

const techFeatures = [
  {
    icon: Eye,
    title: "Visualisasi Digital",
    desc: "Lihat kondisi gigi Anda secara real-time dengan teknologi imaging digital yang canggih"
  },
  {
    icon: Shield,
    title: "Radiasi Minimal",
    desc: "Teknologi X-ray digital dengan radiasi 90% lebih rendah dari metode konvensional"
  },
  {
    icon: Zap,
    title: "Prosedur Cepat",
    desc: "Perawatan yang lebih efisien dengan hasil yang presisi berkat teknologi modern"
  },
  {
    icon: Heart,
    title: "Minim Rasa Sakit",
    desc: "Teknologi laser dan anestesi modern untuk pengalaman perawatan yang nyaman"
  }
];

const techDetails = [
  {
    title: "Digital X-Ray",
    features: ["Radiasi 90% lebih rendah", "Hasil instan dalam hitungan detik", "Diagnosis lebih akurat", "Penyimpanan digital untuk rekam medis"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&h=350&fit=crop"
  },
  {
    title: "Laser Dentistry",
    features: ["Minim perdarahan saat prosedur", "Penyembuhan lebih cepat", "Lebih nyaman dari metode konvensional", "Cocok untuk berbagai perawatan"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=350&fit=crop"
  },
  {
    title: "CAD/CAM Dental",
    features: ["Desain restorasi digital 3D", "Presisi tinggi hingga 0.1mm", "Crown dan veneer dalam satu kunjungan", "Material berkualitas tinggi"],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&h=350&fit=crop"
  },
];

const stats = [
  { value: "90%", label: "Radiasi Lebih Rendah" },
  { value: "50%", label: "Waktu Lebih Cepat" },
  { value: "99%", label: "Tingkat Akurasi" },
  { value: "4+", label: "Teknologi Terkini" }
];

export default function TeknologiPage() {
  const relatedServices = services.slice(0, 4);

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

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Keunggulan Teknologi Kami</h2>
            <p>Bagaimana teknologi modern meningkatkan kualitas perawatan Anda</p>
          </div>
          <div className="grid-4">
            {techFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="card-body text-center">
                  <div className="icon-box mx-auto mb-4">
                    <item.icon />
                  </div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology List */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Peralatan Kami</h2>
            <p>Teknologi canggih yang kami gunakan untuk perawatan gigi Anda</p>
          </div>
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

      {/* Technology Details */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Detail Teknologi</h2>
            <p>Pelajari lebih dalam tentang teknologi yang kami gunakan</p>
          </div>
          <div className="space-y-16">
            {techDetails.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="mb-4">{tech.title}</h3>
                  <div className="space-y-3">
                    {tech.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Manfaat untuk Anda</h2>
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
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="mb-2">Standar Internasional</h3>
                  <p className="text-gray-600 text-sm">Peralatan dengan standar internasional terbaik</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Layanan yang Didukung Teknologi Kami</h2>
            <p>Berbagai layanan yang menggunakan teknologi canggih</p>
          </div>
          <div className="grid-4">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/layanan/${service.id}`} className="card block h-full group">
                  <div className="card-body">
                    <h4 className="mb-2 group-hover:text-primary transition-colors">{service.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Rasakan Perawatan Modern</h2>
            <p className="text-white/80 mb-8">
              Kunjungi klinik kami dan rasakan pengalaman perawatan gigi dengan teknologi terkini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                Booking Sekarang
              </Link>
              <Link href="/layanan" className="btn btn-lg bg-transparent text-white border-2 border-white hover:bg-white/10">
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
