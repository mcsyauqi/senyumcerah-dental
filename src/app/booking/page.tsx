"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from "lucide-react";
import { services, timeSlots, contactInfo } from "@/lib/data";
import { bookingSchema, BookingFormData } from "@/lib/validations";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-background via-white to-background pt-40 pb-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-8 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
              Booking Berhasil!
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Terima kasih telah melakukan booking. Tim kami akan menghubungi Anda untuk konfirmasi jadwal.
            </p>
            <Button href="/" variant="primary" size="lg">
              Kembali ke Beranda
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

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
              Booking <span className="text-primary">Online</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Isi form di bawah untuk menjadwalkan kunjungan Anda. Konsultasi pertama GRATIS!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Personal Info */}
                  <div>
                    <h2 className="text-2xl font-bold text-text mb-8 font-[family-name:var(--font-heading)]">
                      Informasi Pribadi
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="flex items-center gap-3 text-text font-semibold mb-4">
                          <User className="w-5 h-5 text-primary" />
                          Nama Lengkap
                        </label>
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
                      <div>
                        <label className="flex items-center gap-3 text-text font-semibold mb-4">
                          <Phone className="w-5 h-5 text-primary" />
                          Nomor Telepon
                        </label>
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
                      <div className="md:col-span-2">
                        <label className="flex items-center gap-3 text-text font-semibold mb-4">
                          <Mail className="w-5 h-5 text-primary" />
                          Email
                        </label>
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
                    </div>
                  </div>

                  {/* Appointment Info */}
                  <div>
                    <h2 className="text-2xl font-bold text-text mb-8 font-[family-name:var(--font-heading)]">
                      Jadwal Kunjungan
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="md:col-span-2">
                        <label className="flex items-center gap-3 text-text font-semibold mb-4">
                          <FileText className="w-5 h-5 text-primary" />
                          Pilih Layanan
                        </label>
                        <select
                          {...register("layanan")}
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg bg-white"
                        >
                          <option value="">Pilih layanan</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name} - {service.price}
                            </option>
                          ))}
                        </select>
                        {errors.layanan && (
                          <p className="text-red-500 text-sm mt-2">{errors.layanan.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center gap-3 text-text font-semibold mb-4">
                          <Calendar className="w-5 h-5 text-primary" />
                          Tanggal
                        </label>
                        <input
                          {...register("tanggal")}
                          type="date"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg"
                        />
                        {errors.tanggal && (
                          <p className="text-red-500 text-sm mt-2">{errors.tanggal.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center gap-3 text-text font-semibold mb-4">
                          <Clock className="w-5 h-5 text-primary" />
                          Waktu
                        </label>
                        <select
                          {...register("waktu")}
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg bg-white"
                        >
                          <option value="">Pilih waktu</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        {errors.waktu && (
                          <p className="text-red-500 text-sm mt-2">{errors.waktu.message}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label className="flex items-center gap-3 text-text font-semibold mb-4">
                      <FileText className="w-5 h-5 text-primary" />
                      Pesan Tambahan (Opsional)
                    </label>
                    <textarea
                      {...register("pesan")}
                      placeholder="Tuliskan keluhan atau pertanyaan Anda..."
                      rows={5}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors text-lg resize-none"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full justify-center" size="lg">
                    {isSubmitting ? "Memproses..." : "Kirim Booking"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-lg">
              Butuh bantuan? Hubungi kami di{" "}
              <a href={`tel:${contactInfo.phone}`} className="text-primary font-semibold">
                {contactInfo.phone}
              </a>{" "}
              atau{" "}
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                className="text-green-500 font-semibold"
              >
                WhatsApp
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
