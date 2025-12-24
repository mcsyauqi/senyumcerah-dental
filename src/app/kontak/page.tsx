"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { contactSchema, ContactFormData } from "@/lib/validations";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function KontakPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      {/* Page Header */}
      <section className="bg-gradient-to-br from-background via-white to-background pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-8 font-[family-name:var(--font-heading)]">
              Hubungi <span className="text-primary">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ada pertanyaan atau ingin berkonsultasi? Tim kami siap membantu Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-text mb-10 font-[family-name:var(--font-heading)]">
                Informasi Kontak
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text mb-2">Alamat</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text mb-2">Telepon</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-600 text-lg hover:text-primary transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text mb-2">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 text-lg hover:text-primary transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text mb-2">Jam Operasional</h3>
                    <p className="text-gray-600 text-lg">{contactInfo.hours.weekday}</p>
                    <p className="text-gray-600 text-lg">{contactInfo.hours.weekend}</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat via WhatsApp
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-8 md:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                        Pesan Terkirim!
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-text mb-8 font-[family-name:var(--font-heading)]">
                        Kirim Pesan
                      </h2>
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                          <label className="block text-text font-semibold mb-3">Nama Lengkap</label>
                          <input
                            {...register("nama")}
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg"
                          />
                          {errors.nama && (
                            <p className="text-red-500 text-sm mt-2">{errors.nama.message}</p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-text font-semibold mb-3">Email</label>
                            <input
                              {...register("email")}
                              type="email"
                              placeholder="email@example.com"
                              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg"
                            />
                            {errors.email && (
                              <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-text font-semibold mb-3">Telepon</label>
                            <input
                              {...register("telepon")}
                              type="tel"
                              placeholder="08xxxxxxxxxx"
                              className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg"
                            />
                            {errors.telepon && (
                              <p className="text-red-500 text-sm mt-2">{errors.telepon.message}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-text font-semibold mb-3">Subjek</label>
                          <input
                            {...register("subjek")}
                            type="text"
                            placeholder="Subjek pesan"
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg"
                          />
                          {errors.subjek && (
                            <p className="text-red-500 text-sm mt-2">{errors.subjek.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-text font-semibold mb-3">Pesan</label>
                          <textarea
                            {...register("pesan")}
                            placeholder="Tuliskan pesan Anda..."
                            rows={5}
                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg resize-none"
                          />
                          {errors.pesan && (
                            <p className="text-red-500 text-sm mt-2">{errors.pesan.message}</p>
                          )}
                        </div>

                        <Button type="submit" disabled={isSubmitting} className="w-full justify-center" size="lg">
                          <Send className="w-5 h-5" />
                          {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
              Lokasi Kami
            </h2>
            <p className="text-gray-600 text-lg">Kunjungi klinik kami di alamat berikut</p>
          </div>
          <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Google Maps akan ditampilkan di sini</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
