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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <span className="font-bold text-xl text-primary">SenyumCerah</span>
              <span className="block text-xs text-gray-500 -mt-1">Dental Clinic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+6221123456" className="flex items-center gap-2 text-primary">
              <Phone className="w-5 h-5" />
              <span className="font-medium">(021) 123-456</span>
            </a>
            <Link href="/booking">
              <Button>Booking Online</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden bg-white border-t overflow-hidden transition-all duration-300",
          isOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <nav className="container py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-text hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t space-y-3">
            <a href="tel:+6221123456" className="flex items-center gap-2 text-primary">
              <Phone className="w-5 h-5" />
              <span className="font-medium">(021) 123-456</span>
            </a>
            <Link href="/booking" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Booking Online</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
