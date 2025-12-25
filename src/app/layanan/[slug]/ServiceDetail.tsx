"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Clock, BadgeCheck, Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart, Users, Award, MessageCircle } from "lucide-react";
import { services, doctors, testimonials, contactInfo } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Shield, Hand, Star, Sun, Smile, Zap, Heart,
};

const serviceImages: Record<string, string> = {
  "pembersihan-karang-gigi": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
  "tambal-gigi": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
  "cabut-gigi": "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
  "veneer-gigi": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
  "bleaching-gigi": "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
  "behel-gigi": "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop",
  "implan-gigi": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
  "gigi-palsu": "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
};

const processSteps = [
  { step: "1", title: "Konsultasi", desc: "Pemeriksaan awal dan konsultasi dengan dokter" },
  { step: "2", title: "Diagnosis", desc: "Penentuan kondisi dan rencana perawatan" },
  { step: "3", title: "Perawatan", desc: "Prosedur perawatan sesuai rencana" },
  { step: "4", title: "Follow-up", desc: "Kontrol dan perawatan lanjutan" },
];

interface Props {
  service: (typeof services)[0];
}

export default function ServiceDetail({ service }: Props) {
  const Icon = iconMap[service.icon] || Sparkles;
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const serviceTestimonials = testimonials.slice(0, 2);
  const serviceImage = serviceImages[service.id] || "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop";

  return (
    <>
      <section className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Layanan
            </Link>

            <div className="flex items-start gap-6">
              <div className="icon-box hidden md:flex">
                <Icon />
              </div>
              <div>
                <h1 className="mb-4">{service.name}</h1>
                <p className="text-lg text-gray-600 max-w-2xl">{service.shortDesc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {/* Service Image */}
                <div className="aspect-video relative rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={serviceImage}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mb-4">Tentang Layanan Ini</h3>
                <p className="text-gray-600 mb-10">{service.description}</p>

                <h3 className="mb-4">Keuntungan</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="card bg-background border-0 shadow-none">
                  <div className="card-body">
                    <h4 className="mb-4">Informasi Layanan</h4>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex items-center gap-4">
                        <div className="icon-box !bg-white">
                          <BadgeCheck />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Harga</div>
                          <div className="font-bold text-text">{service.price}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="icon-box !bg-white">
                          <Clock />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Durasi</div>
                          <div className="font-bold text-text">{service.duration}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6 sticky top-24"
              >
                <div className="card">
                  <div className="card-body">
                    <h4 className="mb-4">Booking Sekarang</h4>
                    <p className="text-gray-600 mb-6">
                      Dapatkan konsultasi gratis dan perawatan terbaik dari dokter spesialis kami.
                    </p>
                    <Link href="/booking" className="btn btn-primary w-full mb-3">
                      Booking Online
                    </Link>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                      className="btn bg-green-500 text-white hover:bg-green-600 w-full"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat WhatsApp
                    </a>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Atau hubungi{" "}
                      <a href={`tel:${contactInfo.phone}`} className="text-primary font-semibold">
                        {contactInfo.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4 className="mb-4">Mengapa Memilih Kami?</h4>
                    <div className="space-y-3">
                      {[
                        { icon: Users, text: "Dokter spesialis berpengalaman" },
                        { icon: Award, text: "Teknologi modern & canggih" },
                        { icon: Shield, text: "Sterilisasi terjamin" },
                        { icon: BadgeCheck, text: "Garansi hasil perawatan" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-primary" />
                          <span className="text-gray-600 text-sm">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Proses Perawatan</h2>
            <p>Alur perawatan yang akan Anda lalui</p>
          </div>
          <div className="grid-4 max-w-4xl mx-auto">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Ditangani oleh Dokter Spesialis</h2>
            <p>Tim dokter profesional yang akan menangani Anda</p>
          </div>
          <div className="grid-4">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {doctor.name.split(" ")[1]?.charAt(0) || doctor.name.charAt(0)}
                </div>
                <h4 className="mb-1">{doctor.name}</h4>
                <p className="text-primary text-sm font-medium">{doctor.specialty}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/dokter" className="btn btn-outline">
              Lihat Profil Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Testimoni Pasien</h2>
            <p>Pengalaman pasien yang telah melakukan perawatan ini</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">
            {serviceTestimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="card-body">
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">&ldquo;{item.comment}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-text">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.treatment}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Pertanyaan Umum</h2>
            <p>Hal-hal yang sering ditanyakan tentang layanan ini</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: `Berapa lama prosedur ${service.name.toLowerCase()}?`, a: `Prosedur ${service.name.toLowerCase()} membutuhkan waktu ${service.duration}. Waktu dapat bervariasi tergantung kondisi pasien.` },
              { q: "Apakah prosedur ini sakit?", a: "Prosedur dilakukan dengan anestesi lokal sehingga minim rasa sakit. Dokter kami juga menggunakan teknik modern untuk kenyamanan maksimal." },
              { q: "Berapa biaya yang harus saya siapkan?", a: `Biaya untuk layanan ini mulai dari ${service.price}. Kami juga menyediakan opsi cicilan 0% untuk kemudahan Anda.` },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="card-body">
                  <h4 className="mb-2">{item.q}</h4>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Layanan Lainnya</h2>
            <p>Layanan perawatan gigi lain yang mungkin Anda butuhkan</p>
          </div>
          <div className="grid-3">
            {otherServices.map((item, index) => {
              const OtherIcon = iconMap[item.icon] || Sparkles;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/layanan/${item.id}`} className="card block h-full group">
                    <div className="card-body">
                      <div className="icon-box mb-5">
                        <OtherIcon />
                      </div>
                      <h4 className="mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{item.shortDesc}</p>
                      <div className="text-primary font-semibold text-sm">{item.price.split(" - ")[0]}</div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/layanan" className="btn btn-outline">
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Siap Memulai Perawatan?</h2>
            <p className="text-white/80 mb-8">
              Booking jadwal sekarang dan dapatkan konsultasi GRATIS untuk layanan {service.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                Booking Sekarang
              </Link>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                className="btn btn-lg bg-green-500 text-white hover:bg-green-600"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
