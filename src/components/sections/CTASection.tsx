"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { contactInfo } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary to-cyan-700 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-[family-name:var(--font-heading)]">
            Siap Wujudkan Senyum Impian Anda?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Konsultasi pertama GRATIS! Hubungi kami sekarang atau booking online untuk jadwal yang lebih fleksibel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/booking" variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Booking Online
            </Button>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Kami
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4 text-white/80">
            <Phone className="w-5 h-5" />
            <span className="text-lg">atau hubungi {contactInfo.phone}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
