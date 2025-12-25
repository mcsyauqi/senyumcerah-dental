"use client";

import { motion } from "framer-motion";

const cases = [
  { treatment: "Veneer Gigi", description: "Transformasi senyum dengan veneer porcelain premium" },
  { treatment: "Bleaching Gigi", description: "Pemutihan gigi hingga 8 shade lebih cerah" },
  { treatment: "Behel Gigi", description: "Perawatan ortodonti selama 18 bulan" },
];

export default function BeforeAfter() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="section-header">
          <h2>Hasil Perawatan</h2>
          <p>
            Lihat transformasi senyum pasien kami sebelum dan sesudah perawatan.
          </p>
        </div>

        <div className="grid-3">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="aspect-[4/3] bg-gray-100 relative">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-gray-200 flex items-center justify-center border-r-2 border-white">
                    <span className="text-gray-400 font-medium">Before</span>
                  </div>
                  <div className="w-1/2 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-primary font-medium">After</span>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="mb-2">{item.treatment}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
