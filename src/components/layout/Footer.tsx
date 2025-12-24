"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const services = [
  { href: "/layanan/pembersihan-karang-gigi", label: "Scaling" },
  { href: "/layanan/tambal-gigi", label: "Tambal Gigi" },
  { href: "/layanan/behel-kawat-gigi", label: "Behel/Kawat Gigi" },
  { href: "/layanan/veneer-gigi", label: "Veneer" },
  { href: "/layanan/implan-gigi", label: "Implan Gigi" },
  { href: "/layanan/bleaching-gigi", label: "Bleaching" },
];

const information = [
  { href: "/dokter", label: "Tim Dokter" },
  { href: "/teknologi", label: "Teknologi" },
  { href: "/promo", label: "Promo" },
  { href: "/booking", label: "Booking Online" },
  { href: "/kontak", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:pr-8">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">SenyumCerah</span>
                <span className="block text-xs text-gray-400 -mt-0.5">Dental Clinic</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Senyum Sehat, Senyum Bahagia. Klinik gigi modern dengan dokter spesialis berpengalaman.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-lg mb-6">Layanan</h4>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-400 hover:text-primary transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-bold text-lg mb-6">Informasi</h4>
            <ul className="space-y-3.5">
              {information.map((info) => (
                <li key={info.href}>
                  <Link href={info.href} className="text-gray-400 hover:text-primary transition-colors">
                    {info.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold text-lg mb-6">Kontak</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-gray-400 leading-relaxed">
                  Jl. Kesehatan No. 123,<br />Jakarta Selatan 12345
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href="tel:+6221123456" className="text-gray-400 hover:text-primary transition-colors">
                  (021) 123-456
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:info@senyumcerah.id" className="text-gray-400 hover:text-primary transition-colors">
                  info@senyumcerah.id
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="text-gray-400 leading-relaxed">
                  <p>Senin - Jumat: 09:00 - 21:00</p>
                  <p>Sabtu: 09:00 - 17:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container py-7">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; 2025 SenyumCerah Dental Clinic. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Website ini dibuat dengan{" "}
              <span className="text-red-400">&hearts;</span> oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors font-medium"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
