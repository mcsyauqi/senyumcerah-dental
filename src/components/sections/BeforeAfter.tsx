"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const gallery = [
  {
    id: 1,
    title: "Perawatan Veneer",
    description: "Transformasi senyum dengan veneer porcelain",
  },
  {
    id: 2,
    title: "Bleaching Gigi",
    description: "Hasil pemutihan gigi profesional",
  },
  {
    id: 3,
    title: "Perawatan Behel",
    description: "Hasil perawatan ortodonti 2 tahun",
  },
];

export default function BeforeAfter() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % gallery.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <SectionTitle
          title="Hasil Perawatan"
          subtitle="Lihat transformasi senyum pasien kami"
        />

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="aspect-video md:aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  Sebelum
                </div>
                <div className="text-center text-gray-500">
                  <div className="w-20 h-20 mx-auto mb-2 bg-gray-400/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">B</span>
                  </div>
                  <p>Before Image</p>
                </div>
              </div>

              {/* After */}
              <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Sesudah
                </div>
                <div className="text-center text-primary">
                  <div className="w-20 h-20 mx-auto mb-2 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">A</span>
                  </div>
                  <p>After Image</p>
                </div>
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg text-text mb-1">
                {gallery[current].title}
              </h3>
              <p className="text-gray-500">{gallery[current].description}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-text" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-text" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === current ? "bg-primary" : "bg-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
