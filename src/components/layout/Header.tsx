"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/dokter", label: "Dokter" },
  { href: "/teknologi", label: "Teknologi" },
  { href: "/promo", label: "Promo" },
  { href: "/kontak", label: "Kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <span className="font-bold text-xl text-primary tracking-tight">SenyumCerah</span>
              <span className="block text-xs text-gray-500 -mt-0.5 tracking-wide">Dental Clinic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-primary transition-colors font-medium text-[15px] py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+6221123456" className="flex items-center gap-2.5 text-primary hover:text-primary-dark transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-semibold">(021) 123-456</span>
            </a>
            <Link href="/booking">
              <Button>Booking Online</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-text" /> : <Menu className="w-6 h-6 text-text" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden bg-white border-t overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <nav className="container py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-text hover:text-primary hover:bg-primary/5 transition-colors font-medium py-3.5 px-4 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-5 mt-4 border-t space-y-4 px-4">
            <a href="tel:+6221123456" className="flex items-center gap-3 text-primary py-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(021) 123-456</span>
            </a>
            <Link href="/booking" onClick={() => setIsOpen(false)} className="block">
              <Button className="w-full">Booking Online</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
