"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { navigation, contactInfo } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <span className="text-xl font-bold text-text font-[family-name:var(--font-heading)]">
                SenyumCerah
              </span>
              <span className="block text-xs text-gray-500 -mt-1">Dental Clinic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors duration-300 text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">{contactInfo.phone}</span>
            </a>
            <Button href="/booking" size="sm">
              Booking Online
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 text-gray-600 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-6 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-xl font-medium transition-colors text-lg"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6 space-y-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 px-4 py-4 text-gray-600 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">{contactInfo.phone}</span>
              </a>
              <Button href="/booking" className="w-full justify-center">
                Booking Online
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
