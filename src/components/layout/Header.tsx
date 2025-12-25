"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4 md:mx-8 md:mt-6">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/5 border border-white/20">
          <div className="px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="text-xl font-bold text-text font-[family-name:var(--font-heading)] hidden sm:block">
                SenyumCerah
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/booking"
                className="hidden md:inline-flex px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Booking
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden border-t border-gray-100 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-all font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="block mt-2 px-4 py-3 bg-primary text-white text-center rounded-xl font-semibold"
              >
                Booking Sekarang
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
