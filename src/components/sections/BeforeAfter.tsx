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
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionTitle
          title="Hasil Perawatan"
          subtitle="Lihat transformasi senyum pasien kami"
        />

        <div className="max-w-5xl mx-auto relative px-6 md:px-16">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="aspect-video md:aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                <div className="absolute top-5 left-5 bg-black/60 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  Sebelum
                </div>
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 mx-auto mb-3 bg-gray-400/30 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold">B</span>
                  </div>
                  <p className="text-sm">Before Image</p>
                </div>
              </div>

              {/* After */}
              <div className="aspect-video md:aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                <div className="absolute top-5 left-5 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  Sesudah
                </div>
                <div className="text-center text-primary">
                  <div className="w-24 h-24 mx-auto mb-3 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold">A</span>
                  </div>
                  <p className="text-sm">After Image</p>
                </div>
              </div>
            </div>

            <div className="p-8 text-center bg-white">
              <h3 className="font-bold text-xl text-text mb-2">
                {gallery[current].title}
              </h3>
              <p className="text-gray-500">{gallery[current].description}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-text" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-text" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === current ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
