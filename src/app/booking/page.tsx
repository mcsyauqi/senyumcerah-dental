"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import { services, timeSlots, contactInfo } from "@/lib/data";
import { bookingSchema, BookingFormData } from "@/lib/validations";

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    console.log(data);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">Booking Berhasil!</h1>
          <p className="text-gray-600 mb-8">Tim kami akan menghubungi Anda untuk konfirmasi jadwal.</p>
          <a href="/" className="inline-flex px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors">
            Kembali ke Beranda
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-primary font-semibold mb-3">BOOKING ONLINE</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
              Jadwalkan Kunjungan
            </h1>
            <p className="text-xl text-gray-600">Konsultasi pertama GRATIS!</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="max-w-2xl mx-auto px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Nama Lengkap</label>
                  <input {...register("nama")} placeholder="Nama lengkap" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none" />
                  {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Telepon</label>
                  <input {...register("telepon")} placeholder="08xxxxxxxxxx" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none" />
                  {errors.telepon && <p className="text-red-500 text-sm mt-1">{errors.telepon.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text mb-2">Email</label>
                <input {...register("email")} type="email" placeholder="email@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-text mb-2">Layanan</label>
                <select {...register("layanan")} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none bg-white">
                  <option value="">Pilih layanan</option>
                  {services.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
                {errors.layanan && <p className="text-red-500 text-sm mt-1">{errors.layanan.message}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Tanggal</label>
                  <input {...register("tanggal")} type="date" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none" />
                  {errors.tanggal && <p className="text-red-500 text-sm mt-1">{errors.tanggal.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Waktu</label>
                  <select {...register("waktu")} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none bg-white">
                    <option value="">Pilih waktu</option>
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.waktu && <p className="text-red-500 text-sm mt-1">{errors.waktu.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-text mb-2">Pesan (Opsional)</label>
                <textarea {...register("pesan")} rows={4} placeholder="Keluhan atau pertanyaan..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none resize-none" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full px-6 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50">
                {isSubmitting ? "Memproses..." : "Kirim Booking"}
              </button>
            </form>

            <p className="text-center text-gray-500 mt-8">
              Butuh bantuan?{" "}
              <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`} className="text-primary font-semibold">
                WhatsApp Kami
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
