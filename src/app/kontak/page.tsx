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

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="text-primary font-semibold mb-3">KONTAK</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ada pertanyaan? Tim kami siap membantu Anda.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
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
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
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

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors w-fit"
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-2 font-[family-name:var(--font-heading)]">Pesan Terkirim!</h3>
                    <p className="text-gray-600">Kami akan segera merespons pesan Anda.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-text mb-6 font-[family-name:var(--font-heading)]">Kirim Pesan</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <input {...register("nama")} placeholder="Nama lengkap" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none bg-white" />
                          {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama.message}</p>}
                        </div>
                        <div>
                          <input {...register("telepon")} placeholder="Telepon" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none bg-white" />
                          {errors.telepon && <p className="text-red-500 text-sm mt-1">{errors.telepon.message}</p>}
                        </div>
                      </div>
                      <div>
                        <input {...register("email")} type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none bg-white" />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <input {...register("subjek")} placeholder="Subjek" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none bg-white" />
                        {errors.subjek && <p className="text-red-500 text-sm mt-1">{errors.subjek.message}</p>}
                      </div>
                      <div>
                        <textarea {...register("pesan")} rows={4} placeholder="Pesan Anda" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:outline-none bg-white resize-none" />
                        {errors.pesan && <p className="text-red-500 text-sm mt-1">{errors.pesan.message}</p>}
                      </div>
                      <button type="submit" disabled={isSubmitting} className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50">
                        <Send className="w-4 h-4" />
                        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl font-bold text-text mb-8 text-center font-[family-name:var(--font-heading)]">Lokasi Kami</h2>
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
