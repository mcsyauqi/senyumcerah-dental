"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Card, { CardContent } from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <SectionTitle
          title="Kata Mereka"
          subtitle="Pengalaman pasien yang telah mempercayakan perawatan gigi di SenyumCerah"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent>
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />

                  <p className="text-gray-600 mb-6 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-text">
                        {testimonial.name}, {testimonial.age} tahun
                      </p>
                      <p className="text-sm text-gray-500">
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
