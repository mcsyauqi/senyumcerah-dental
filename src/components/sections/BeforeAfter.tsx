"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cases = [
  {
    treatment: "Veneer Gigi",
    description: "Transformasi senyum dengan veneer porcelain premium",
    beforeImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=200&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=200&fit=crop"
  },
  {
    treatment: "Bleaching Gigi",
    description: "Pemutihan gigi hingga 8 shade lebih cerah",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=300&h=200&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop"
  },
  {
    treatment: "Behel Gigi",
    description: "Perawatan ortodonti selama 18 bulan",
    beforeImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&h=200&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=200&fit=crop"
  },
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
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative border-r-2 border-white">
                    <Image
                      src={item.beforeImage}
                      alt={`${item.treatment} - Before`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Before</span>
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src={item.afterImage}
                      alt={`${item.treatment} - After`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">After</span>
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
