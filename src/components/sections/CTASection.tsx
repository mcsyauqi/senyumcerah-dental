"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="section bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-white mb-6">Siap Wujudkan Senyum Impian Anda?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Konsultasi pertama GRATIS! Hubungi kami sekarang atau booking online untuk jadwal yang lebih fleksibel.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/booking"
              className="btn btn-lg bg-white text-primary hover:bg-gray-100"
            >
              Booking Online
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg bg-green-500 text-white hover:bg-green-600"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Kami
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 text-white/80">
            <Phone className="w-4 h-4" />
            <span>atau hubungi {contactInfo.phone}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
