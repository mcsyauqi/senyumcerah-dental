"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap untuk Senyum Lebih Cerah?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10">
            Booking sekarang dan dapatkan konsultasi{" "}
            <span className="font-bold">GRATIS</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Booking Online
              </Button>
            </Link>
            <a href="tel:+6221123456">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="w-5 h-5 mr-2" />
                (021) 123-456
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
