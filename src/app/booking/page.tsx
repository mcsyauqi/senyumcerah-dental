"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Clock, User, Phone, Mail, FileText, Stethoscope, CheckCircle } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { bookingSchema, BookingFormData } from "@/lib/validations";
import { services, doctors, timeSlots } from "@/lib/data";
import { cn } from "@/lib/utils";

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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Booking data:", data);
    setIsSubmitted(true);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-background py-28 md:py-36">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-lg mx-auto"
          >
            <Card>
              <CardContent className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-text mb-5">
                  Booking Berhasil!
                </h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Terima kasih telah melakukan booking. Tim kami akan menghubungi
                  Anda melalui WhatsApp untuk konfirmasi jadwal.
                </p>
                <Button size="lg" onClick={() => setIsSubmitted(false)}>
                  Booking Lagi
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Booking Online
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Jadwalkan kunjungan Anda dengan mudah. Konsultasi pertama GRATIS!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card>
                <CardContent className="py-10 md:py-12">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Nama */}
                    <div>
                      <label className="flex items-center gap-2 text-base font-semibold text-text mb-3">
                        <User className="w-5 h-5 text-primary" />
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("nama")}
                        className={cn(
                          "w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base",
                          errors.nama ? "border-red-500" : "border-gray-200"
                        )}
                        placeholder="Masukkan nama lengkap"
                      />
                      {errors.nama && (
                        <p className="text-red-500 text-sm mt-2">{errors.nama.message}</p>
                      )}
                    </div>

                    {/* WhatsApp & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-base font-semibold text-text mb-3">
                          <Phone className="w-5 h-5 text-primary" />
                          No. WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          {...register("whatsapp")}
                          className={cn(
                            "w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base",
                            errors.whatsapp ? "border-red-500" : "border-gray-200"
                          )}
                          placeholder="08xxxxxxxxxx"
                        />
                        {errors.whatsapp && (
                          <p className="text-red-500 text-sm mt-2">{errors.whatsapp.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-base font-semibold text-text mb-3">
                          <Mail className="w-5 h-5 text-primary" />
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          className={cn(
                            "w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base",
                            errors.email ? "border-red-500" : "border-gray-200"
                          )}
                          placeholder="email@contoh.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Layanan & Dokter */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-base font-semibold text-text mb-3">
                          <Stethoscope className="w-5 h-5 text-primary" />
                          Pilih Layanan <span className="text-red-500">*</span>
                        </label>
                        <select
                          {...register("layanan")}
                          className={cn(
                            "w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base",
                            errors.layanan ? "border-red-500" : "border-gray-200"
                          )}
                        >
                          <option value="">Pilih layanan...</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                        {errors.layanan && (
                          <p className="text-red-500 text-sm mt-2">{errors.layanan.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-base font-semibold text-text mb-3">
                          <User className="w-5 h-5 text-primary" />
                          Pilih Dokter (Opsional)
                        </label>
                        <select
                          {...register("dokter")}
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base"
                        >
                          <option value="">Dokter mana saja...</option>
                          {doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.name}>
                              {doctor.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Tanggal & Waktu */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-base font-semibold text-text mb-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          Tanggal Preferensi <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          {...register("tanggal")}
                          min={minDate}
                          className={cn(
                            "w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base",
                            errors.tanggal ? "border-red-500" : "border-gray-200"
                          )}
                        />
                        {errors.tanggal && (
                          <p className="text-red-500 text-sm mt-2">{errors.tanggal.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-base font-semibold text-text mb-3">
                          <Clock className="w-5 h-5 text-primary" />
                          Waktu <span className="text-red-500">*</span>
                        </label>
                        <select
                          {...register("waktu")}
                          className={cn(
                            "w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base",
                            errors.waktu ? "border-red-500" : "border-gray-200"
                          )}
                        >
                          <option value="">Pilih waktu...</option>
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

                    {/* Keluhan */}
                    <div>
                      <label className="flex items-center gap-2 text-base font-semibold text-text mb-3">
                        <FileText className="w-5 h-5 text-primary" />
                        Keluhan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register("keluhan")}
                        rows={5}
                        className={cn(
                          "w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-base",
                          errors.keluhan ? "border-red-500" : "border-gray-200"
                        )}
                        placeholder="Jelaskan keluhan atau masalah gigi Anda..."
                      />
                      {errors.keluhan && (
                        <p className="text-red-500 text-sm mt-2">{errors.keluhan.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Mengirim..." : "Kirim Booking"}
                      </Button>

                      <p className="text-center text-sm text-gray-500 mt-6">
                        Dengan mengirim form ini, Anda menyetujui untuk dihubungi
                        oleh tim kami melalui WhatsApp.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
