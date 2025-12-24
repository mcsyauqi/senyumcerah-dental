"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionTitle
          title="Kata Mereka"
          subtitle="Pengalaman pasien yang telah mempercayakan perawatan gigi di SenyumCerah"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="py-10">
                  <Quote className="w-12 h-12 text-primary/20 mb-6" />

                  <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-text text-lg">
                        {testimonial.name}, {testimonial.age} tahun
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {testimonial.treatment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
