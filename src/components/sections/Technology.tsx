"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Scan, Zap, Cpu, ShieldCheck } from "lucide-react";
import { technologies } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scan, Zap, Cpu, ShieldCheck,
};

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
          {technologies.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Scan;
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="card-body text-center">
                  <div className="icon-box mx-auto mb-5">
                    <Icon />
                  </div>
                  <h4 className="mb-3">{tech.name}</h4>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
              </motion.div>
            );
          })}
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
