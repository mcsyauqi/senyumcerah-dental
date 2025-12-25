"use client";

import { motion } from "framer-motion";

const cases = [
  { treatment: "Veneer Gigi", description: "Transformasi dengan veneer porcelain" },
  { treatment: "Bleaching", description: "Pemutihan hingga 8 shade lebih cerah" },
  { treatment: "Behel Gigi", description: "Perawatan ortodonti 18 bulan" },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold mb-3"
          >
            HASIL PERAWATAN
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text font-[family-name:var(--font-heading)]"
          >
            Transformasi Senyum
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">Before</span>
                  </div>
                  <div className="w-1/2 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary text-sm font-medium">After</span>
                  </div>
                </div>
                <div className="absolute inset-y-0 left-1/2 w-1 bg-white -translate-x-1/2" />
              </div>
              <h3 className="font-bold text-text mb-1 font-[family-name:var(--font-heading)]">
                {item.treatment}
              </h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
