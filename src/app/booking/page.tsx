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
      <section className="min-h-screen flex items-center justify-center bg-background px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h2 className="mb-4">Booking Berhasil!</h2>
          <p className="text-gray-600 mb-8">
            Terima kasih telah melakukan booking. Tim kami akan menghubungi Anda untuk konfirmasi jadwal.
          </p>
          <a href="/" className="btn btn-primary">
            Kembali ke Beranda
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="mb-4">Booking Online</h1>
            <p className="text-lg text-gray-600">
              Isi form di bawah untuk menjadwalkan kunjungan Anda. Konsultasi pertama GRATIS!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card">
              <div className="card-body">
                <h3 className="mb-6">Informasi Pribadi</h3>

                <div className="grid-2 mb-6">
                  <div className="form-group">
                    <label className="form-label">Nama Lengkap</label>
                    <input
                      {...register("nama")}
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      className="form-input"
                    />
                    {errors.nama && <p className="form-error">{errors.nama.message}</p>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nomor Telepon</label>
                    <input
                      {...register("telepon")}
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      className="form-input"
                    />
                    {errors.telepon && <p className="form-error">{errors.telepon.message}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="email@example.com"
                    className="form-input"
                  />
                  {errors.email && <p className="form-error">{errors.email.message}</p>}
                </div>

                <h3 className="mb-6 mt-8">Jadwal Kunjungan</h3>

                <div className="form-group">
                  <label className="form-label">Pilih Layanan</label>
                  <select {...register("layanan")} className="form-input">
                    <option value="">Pilih layanan</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.price}
                      </option>
                    ))}
                  </select>
                  {errors.layanan && <p className="form-error">{errors.layanan.message}</p>}
                </div>

                <div className="grid-2 mb-6">
                  <div className="form-group">
                    <label className="form-label">Tanggal</label>
                    <input {...register("tanggal")} type="date" className="form-input" />
                    {errors.tanggal && <p className="form-error">{errors.tanggal.message}</p>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Waktu</label>
                    <select {...register("waktu")} className="form-input">
                      <option value="">Pilih waktu</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.waktu && <p className="form-error">{errors.waktu.message}</p>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Pesan Tambahan (Opsional)</label>
                  <textarea
                    {...register("pesan")}
                    placeholder="Tuliskan keluhan atau pertanyaan Anda..."
                    rows={4}
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full mt-4"
                >
                  {isSubmitting ? "Memproses..." : "Kirim Booking"}
                </button>
              </div>
            </form>

            <p className="text-center text-gray-500 mt-8">
              Butuh bantuan? Hubungi{" "}
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
