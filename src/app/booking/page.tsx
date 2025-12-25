"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Clock, MapPin, Phone, Shield, Award, Check } from "lucide-react";
import { services, timeSlots, contactInfo, doctors } from "@/lib/data";
import { bookingSchema, BookingFormData } from "@/lib/validations";

const bookingBenefits = [
  {
    icon: Clock,
    title: "Hemat Waktu",
    desc: "Tidak perlu antri, langsung dilayani sesuai jadwal"
  },
  {
    icon: Shield,
    title: "Konfirmasi Instan",
    desc: "Dapatkan konfirmasi booking langsung via WhatsApp"
  },
  {
    icon: Award,
    title: "Konsultasi Gratis",
    desc: "Konsultasi pertama GRATIS untuk pasien baru"
  }
];

const whyChooseUs = [
  "Dokter spesialis berpengalaman",
  "Teknologi modern dan canggih",
  "Sterilisasi standar internasional",
  "Harga transparan tanpa biaya tersembunyi",
  "Cicilan 0% hingga 12 bulan",
  "Garansi hasil perawatan"
];

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

      {/* Booking Benefits */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookingBenefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-white mb-2">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
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
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Clinic Info */}
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-4">Informasi Klinik</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Alamat</div>
                        <p className="text-gray-600 text-sm">{contactInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Telepon</div>
                        <a href={`tel:${contactInfo.phone}`} className="text-primary text-sm">{contactInfo.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Jam Operasional</div>
                        <p className="text-gray-600 text-sm">{contactInfo.hours.weekday}</p>
                        <p className="text-gray-600 text-sm">{contactInfo.hours.weekend}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="card">
                <div className="card-body">
                  <h4 className="mb-4">Mengapa SenyumCerah?</h4>
                  <div className="space-y-3">
                    {whyChooseUs.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Alternative */}
              <div className="card bg-green-50 border-green-200">
                <div className="card-body text-center">
                  <h4 className="mb-2">Butuh Bantuan?</h4>
                  <p className="text-gray-600 text-sm mb-4">Chat langsung dengan tim kami</p>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-green-500 text-white hover:bg-green-600 w-full"
                  >
                    Chat WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Apa yang Akan Anda Dapatkan</h2>
            <p>Proses yang akan Anda lalui setelah booking</p>
          </div>
          <div className="grid-4 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Konfirmasi", desc: "Tim kami akan menghubungi Anda untuk konfirmasi jadwal" },
              { step: "2", title: "Registrasi", desc: "Datang 15 menit sebelum jadwal untuk registrasi" },
              { step: "3", title: "Konsultasi", desc: "Konsultasi dengan dokter mengenai kondisi gigi Anda" },
              { step: "4", title: "Perawatan", desc: "Perawatan sesuai dengan rencana yang sudah disepakati" },
            ].map((item, index) => (
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

      {/* Doctors Preview */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Tim Dokter Kami</h2>
            <p>Anda akan ditangani oleh dokter spesialis berpengalaman</p>
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

      {/* FAQ */}
      <section className="section bg-background">
        <div className="container">
          <div className="section-header">
            <h2>Pertanyaan Umum</h2>
            <p>Jawaban untuk pertanyaan seputar booking</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Apakah bisa reschedule jadwal?", a: "Ya, Anda bisa melakukan reschedule maksimal H-1 sebelum jadwal dengan menghubungi kami via WhatsApp." },
              { q: "Apakah harus membayar DP?", a: "Tidak, booking tidak memerlukan DP. Pembayaran dilakukan setelah perawatan selesai." },
              { q: "Bagaimana jika saya terlambat?", a: "Kami menyarankan datang 15 menit sebelum jadwal. Jika terlambat lebih dari 30 menit, jadwal mungkin perlu di-reschedule." },
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
    </>
  );
}
