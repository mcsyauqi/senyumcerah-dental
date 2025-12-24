"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/Card";

const cases = [
  {
    id: 1,
    treatment: "Veneer Gigi",
    description: "Transformasi senyum dengan veneer porcelain premium",
  },
  {
    id: 2,
    treatment: "Bleaching Gigi",
    description: "Pemutihan gigi hingga 8 shade lebih cerah",
  },
  {
    id: 3,
    treatment: "Behel Gigi",
    description: "Perawatan ortodonti selama 18 bulan",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionTitle
          title="Hasil Perawatan"
          subtitle="Lihat transformasi senyum pasien kami sebelum dan sesudah perawatan"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 bg-gray-300 flex items-center justify-center border-r-2 border-white">
                      <span className="text-gray-500 font-medium">Before</span>
                    </div>
                    <div className="w-1/2 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-primary font-medium">After</span>
                    </div>
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold text-text mb-3 font-[family-name:var(--font-heading)]">
                    {item.treatment}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
