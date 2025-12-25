"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { technologies } from "@/lib/data";

const techImages = [
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1583912267550-d974311a9a6e?w=400&h=250&fit=crop",
];

export default function Technology() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2>Teknologi Modern</h2>
          <p>
            Didukung peralatan canggih untuk hasil perawatan terbaik dan pengalaman yang nyaman.
          </p>
        </div>

        <div className="grid-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden"
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={techImages[index % techImages.length]}
                  alt={tech.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="card-body text-center">
                <h4 className="mb-3">{tech.name}</h4>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/teknologi" className="btn btn-outline">
            Pelajari Lebih Lanjut
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
