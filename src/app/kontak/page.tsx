"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { contactSchema, ContactFormData } from "@/lib/validations";

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

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
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

      <section className="section bg-background">
        <div className="container">
          <h3 className="text-center mb-8">Lokasi Kami</h3>
          <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Google Maps</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
