"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { navigation, services, contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-heading)]">
                SenyumCerah
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Senyum Sehat, Senyum Bahagia. Klinik gigi modern untuk keluarga Indonesia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Menu</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Layanan</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/layanan/${service.id}`} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SenyumCerah Dental Clinic
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Dibuat oleh{" "}
            <a href="https://creativism.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
              Creativism <ArrowUpRight className="w-3 h-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
