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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Booking data:", data);
    setIsSubmitted(true);
  };

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-background py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-lg mx-auto"
          >
            <Card>
              <CardContent className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-text mb-4">
                  Booking Berhasil!
                </h1>
                <p className="text-gray-600 mb-6">
                  Terima kasih telah melakukan booking. Tim kami akan menghubungi
                  Anda melalui WhatsApp untuk konfirmasi jadwal.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
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
      <section className="bg-gradient-to-br from-primary to-secondary py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Booking Online
            </h1>
            <p className="text-lg text-white/90">
              Jadwalkan kunjungan Anda dengan mudah. Konsultasi pertama GRATIS!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Nama */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("nama")}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                          errors.nama ? "border-red-500" : "border-gray-200"
                        )}
                        placeholder="Masukkan nama lengkap"
                      />
                      {errors.nama && (
                        <p className="text-red-500 text-sm mt-1">{errors.nama.message}</p>
                      )}
                    </div>

                    {/* WhatsApp & Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          No. WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          {...register("whatsapp")}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                            errors.whatsapp ? "border-red-500" : "border-gray-200"
                          )}
                          placeholder="08xxxxxxxxxx"
                        />
                        {errors.whatsapp && (
                          <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          {...register("email")}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                            errors.email ? "border-red-500" : "border-gray-200"
                          )}
                          placeholder="email@contoh.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Layanan & Dokter */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          <Stethoscope className="w-4 h-4 inline mr-2" />
                          Pilih Layanan <span className="text-red-500">*</span>
                        </label>
                        <select
                          {...register("layanan")}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
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
                          <p className="text-red-500 text-sm mt-1">{errors.layanan.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Pilih Dokter (Opsional)
                        </label>
                        <select
                          {...register("dokter")}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        >
                          <option value="">Dokter mana saja...</option>
                          {doctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.name}>
                              {doctor.name} - {doctor.specialization}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Tanggal & Waktu */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Tanggal Preferensi <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          {...register("tanggal")}
                          min={minDate}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                            errors.tanggal ? "border-red-500" : "border-gray-200"
                          )}
                        />
                        {errors.tanggal && (
                          <p className="text-red-500 text-sm mt-1">{errors.tanggal.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-2">
                          <Clock className="w-4 h-4 inline mr-2" />
                          Waktu <span className="text-red-500">*</span>
                        </label>
                        <select
                          {...register("waktu")}
                          className={cn(
                            "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
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
                          <p className="text-red-500 text-sm mt-1">{errors.waktu.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Keluhan */}
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        <FileText className="w-4 h-4 inline mr-2" />
                        Keluhan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register("keluhan")}
                        rows={4}
                        className={cn(
                          "w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none",
                          errors.keluhan ? "border-red-500" : "border-gray-200"
                        )}
                        placeholder="Jelaskan keluhan atau masalah gigi Anda..."
                      />
                      {errors.keluhan && (
                        <p className="text-red-500 text-sm mt-1">{errors.keluhan.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Mengirim..." : "Kirim Booking"}
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      Dengan mengirim form ini, Anda menyetujui untuk dihubungi
                      oleh tim kami melalui WhatsApp.
                    </p>
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
