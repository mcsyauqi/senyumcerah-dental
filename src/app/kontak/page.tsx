"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle,
  Facebook, Instagram, Twitter, MessageCircle
} from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { contactSchema, ContactFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Kesehatan No. 123, Jakarta Selatan 12345",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "(021) 123-456",
    link: "tel:+6221123456",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@senyumcerah.id",
    link: "mailto:info@senyumcerah.id",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+62 812-3456-7890",
    link: "https://wa.me/6281234567890",
  },
];

const operationalHours = [
  { day: "Senin - Jumat", hours: "09:00 - 21:00" },
  { day: "Sabtu", hours: "09:00 - 17:00" },
  { day: "Minggu", hours: "Tutup" },
];

const socialMedia = [
  { icon: Facebook, name: "Facebook", link: "#" },
  { icon: Instagram, name: "Instagram", link: "#" },
  { icon: Twitter, name: "Twitter", link: "#" },
];

export default function KontakPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact data:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ada pertanyaan? Kami siap membantu Anda. Hubungi kami melalui
              berbagai channel di bawah ini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Card className="hover:border-primary transition-colors">
                      <CardContent className="flex items-start gap-5">
                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-text text-lg mb-1">{item.title}</h3>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}

              {/* Operational Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Card>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-text text-lg">Jam Operasional</h3>
                    </div>
                    <div className="space-y-3">
                      {operationalHours.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600">{item.day}</span>
                          <span className={cn(
                            "font-semibold",
                            item.hours === "Tutup" ? "text-red-500" : "text-text"
                          )}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Card>
                  <CardContent>
                    <h3 className="font-bold text-text text-lg mb-5">Ikuti Kami</h3>
                    <div className="flex gap-4">
                      {socialMedia.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                        >
                          <item.icon className="w-6 h-6" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardContent className="py-10 md:py-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-8">
                    Kirim Pesan
                  </h2>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8 flex items-center gap-4"
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <p className="text-green-700 text-lg">
                        Pesan Anda berhasil dikirim! Kami akan segera merespons.
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-base font-semibold text-text mb-3">
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
                      <div>
                        <label className="block text-base font-semibold text-text mb-3">
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

                    <div>
                      <label className="block text-base font-semibold text-text mb-3">
                        Subjek <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("subjek")}
                        className={cn(
                          "w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-base",
                          errors.subjek ? "border-red-500" : "border-gray-200"
                        )}
                        placeholder="Subjek pesan"
                      />
                      {errors.subjek && (
                        <p className="text-red-500 text-sm mt-2">{errors.subjek.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-base font-semibold text-text mb-3">
                        Pesan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register("pesan")}
                        rows={6}
                        className={cn(
                          "w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-base",
                          errors.pesan ? "border-red-500" : "border-gray-200"
                        )}
                        placeholder="Tulis pesan Anda..."
                      />
                      {errors.pesan && (
                        <p className="text-red-500 text-sm mt-2">{errors.pesan.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Mengirim..."
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="container py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-10">
              Lokasi Kami
            </h2>
            <div className="bg-gray-200 rounded-3xl overflow-hidden h-[450px] flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <MapPin className="w-10 h-10" />
                </div>
                <p className="text-xl font-medium mb-2">Google Maps akan ditampilkan di sini</p>
                <p>Jl. Kesehatan No. 123, Jakarta Selatan</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
