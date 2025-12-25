"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle, ArrowRight, Calendar, Users, Shield } from "lucide-react";
import { contactInfo, faqs, services } from "@/lib/data";
import { contactSchema, ContactFormData } from "@/lib/validations";

const quickLinks = [
  { icon: Calendar, title: "Booking Online", desc: "Jadwalkan kunjungan Anda", href: "/booking" },
  { icon: Users, title: "Tim Dokter", desc: "Kenali dokter spesialis kami", href: "/dokter" },
  { icon: Shield, title: "Layanan", desc: "Lihat daftar layanan kami", href: "/layanan" },
];

export default function KontakPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactFaqs = faqs.slice(0, 4);
  const popularServices = services.slice(0, 4);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="mb-4">Hubungi Kami</h1>
            <p className="text-lg text-gray-600">
              Ada pertanyaan atau ingin berkonsultasi? Tim kami siap membantu Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href} className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/50 ml-auto" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="mb-6">Informasi Kontak</h3>
              <div className="flex flex-col gap-6">
                {[
                  { icon: MapPin, label: "Alamat", value: contactInfo.address },
                  { icon: Phone, label: "Telepon", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
                  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                  { icon: Clock, label: "Jam Operasional", value: `${contactInfo.hours.weekday}\n${contactInfo.hours.weekend}` },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="icon-box flex-shrink-0">
                      <item.icon />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-text hover:text-primary transition-colors whitespace-pre-line">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-500 text-white hover:bg-green-600 mt-8"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </motion.a>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="card">
                <div className="card-body">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="mb-2">Pesan Terkirim!</h3>
                      <p className="text-gray-600">Kami akan segera merespons pesan Anda.</p>
                    </div>
                  ) : (
                    <>
                      <h3 className="mb-6">Kirim Pesan</h3>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid-2 mb-4">
                          <div className="form-group">
                            <label className="form-label">Nama Lengkap</label>
                            <input {...register("nama")} placeholder="Nama lengkap" className="form-input" />
                            {errors.nama && <p className="form-error">{errors.nama.message}</p>}
                          </div>
                          <div className="form-group">
                            <label className="form-label">Telepon</label>
                            <input {...register("telepon")} placeholder="08xxxxxxxxxx" className="form-input" />
                            {errors.telepon && <p className="form-error">{errors.telepon.message}</p>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input {...register("email")} type="email" placeholder="email@example.com" className="form-input" />
                          {errors.email && <p className="form-error">{errors.email.message}</p>}
                        </div>

                        <div className="form-group">
                          <label className="form-label">Subjek</label>
                          <input {...register("subjek")} placeholder="Subjek pesan" className="form-input" />
                          {errors.subjek && <p className="form-error">{errors.subjek.message}</p>}
                        </div>

                        <div className="form-group">
                          <label className="form-label">Pesan</label>
                          <textarea {...register("pesan")} rows={4} placeholder="Tulis pesan Anda..." className="form-input" />
                          {errors.pesan && <p className="form-error">{errors.pesan.message}</p>}
                        </div>

                        <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full mt-2">
                          <Send className="w-4 h-4" />
                          {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Lokasi Kami</h2>
            <p>Kunjungi klinik kami di lokasi strategis Jakarta Pusat</p>
          </div>
          <div className="rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.194741399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Jend.%20Sudirman%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1703500000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi SenyumCerah Dental Clinic"
            />
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
          <div className="grid-2 max-w-4xl mx-auto">
            {contactFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="card-body">
                  <h4 className="mb-2">{faq.question}</h4>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Layanan Populer</h2>
            <p>Jelajahi layanan perawatan gigi kami</p>
          </div>
          <div className="grid-4">
            {popularServices.map((service, index) => (
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
                    <p className="text-gray-600 text-sm mb-3">{service.shortDesc}</p>
                    <div className="text-primary font-semibold text-sm">{service.price.split(" - ")[0]}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/layanan" className="btn btn-outline">
              Lihat Semua Layanan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-white mb-4">Siap untuk Konsultasi?</h2>
            <p className="text-white/80 mb-8">
              Booking jadwal sekarang dan dapatkan konsultasi GRATIS dengan dokter spesialis kami.
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
