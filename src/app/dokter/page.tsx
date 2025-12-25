"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, Check, Heart, Users, Shield, Clock, Star } from "lucide-react";
import { doctors, testimonials } from "@/lib/data";

const doctorImages = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
];

const values = [
  {
    icon: Heart,
    title: "Pasien adalah Prioritas",
    desc: "Setiap keputusan perawatan diambil dengan mempertimbangkan kenyamanan dan kebutuhan pasien"
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    desc: "Standar sterilisasi internasional dan protokol kesehatan yang ketat"
  },
  {
    icon: Users,
    title: "Pendekatan Personal",
    desc: "Setiap pasien mendapatkan rencana perawatan yang disesuaikan dengan kondisi mereka"
  },
  {
    icon: Award,
    title: "Komitmen Berkelanjutan",
    desc: "Tim kami terus mengikuti perkembangan terbaru dalam kedokteran gigi"
  }
];

const credentials = [
  "Terdaftar di Persatuan Dokter Gigi Indonesia (PDGI)",
  "Sertifikasi spesialis dari universitas terkemuka",
  "Pelatihan berkelanjutan dan update teknologi terbaru",
  "Pengalaman menangani ribuan kasus",
  "Anggota asosiasi kedokteran gigi internasional"
];

const stats = [
  { value: "5000+", label: "Pasien Ditangani" },
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "98%", label: "Tingkat Kepuasan" },
  { value: "4", label: "Dokter Spesialis" }
];

export default function DokterPage() {
  const doctorTestimonials = testimonials.slice(0, 2);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="mb-4">Tim Dokter Kami</h1>
            <p className="text-lg text-gray-600">
              Ditangani oleh dokter gigi spesialis berpengalaman dan bersertifikasi dengan dedikasi tinggi untuk kesehatan gigi Anda.
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

      {/* Doctors List */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Profil Dokter</h2>
            <p>Kenali lebih dekat tim dokter spesialis kami</p>
          </div>
          <div className="grid-2">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="card-body">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src={doctorImages[index % doctorImages.length]}
                        alt={doctor.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left flex-1">
                      <h3 className="mb-1">{doctor.name}</h3>
                      <p className="text-primary font-semibold mb-4">{doctor.specialty}</p>
                      <p className="text-gray-600 mb-4">{doctor.description}</p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          {doctor.experience}
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          {doctor.education}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Filosofi Perawatan Kami</h2>
            <p>Nilai-nilai yang menjadi landasan pelayanan kami</p>
          </div>
          <div className="grid-4">
            {values.map((item, index) => (
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

      {/* Credentials */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Kredensial & Sertifikasi</h2>
              <p className="text-gray-600 mb-8">
                Semua dokter kami memiliki kualifikasi dan sertifikasi yang diakui secara nasional dan internasional, menjamin kualitas perawatan yang Anda terima.
              </p>
              <div className="space-y-4">
                {credentials.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&h=450&fit=crop"
                alt="Tim Dokter SenyumCerah"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Jadwal Praktik</h2>
            <p>Waktu operasional klinik kami</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="space-y-4">
                  {[
                    { day: "Senin - Jumat", time: "09:00 - 21:00" },
                    { day: "Sabtu", time: "09:00 - 21:00" },
                    { day: "Minggu", time: "10:00 - 18:00" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-medium">{item.day}</span>
                      </div>
                      <span className="text-gray-600">{item.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-500 mt-6">
                  *Jadwal dapat berubah pada hari libur nasional. Silakan hubungi kami untuk konfirmasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Apa Kata Pasien Kami</h2>
            <p>Pengalaman pasien yang telah ditangani oleh tim dokter kami</p>
          </div>
          <div className="grid-2 max-w-4xl mx-auto">
            {doctorTestimonials.map((item, index) => (
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

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Konsultasi dengan Dokter Kami</h2>
            <p className="text-white/80 mb-8">
              Booking jadwal konsultasi dengan dokter spesialis pilihan Anda. Konsultasi pertama GRATIS!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                Booking Sekarang
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
