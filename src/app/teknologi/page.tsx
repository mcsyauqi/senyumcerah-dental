"use client";

import { motion } from "framer-motion";
import { Scan, Zap, Cpu, ShieldCheck, CheckCircle } from "lucide-react";
import { technologies } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Scan,
  Zap,
  Cpu,
  ShieldCheck,
};

const benefits = [
  "Diagnosis lebih akurat dan cepat",
  "Prosedur lebih nyaman dan minim rasa sakit",
  "Hasil perawatan lebih presisi",
  "Waktu penyembuhan lebih cepat",
  "Keamanan dan sterilitas terjamin",
  "Pengalaman pasien yang lebih baik",
];

export default function TeknologiPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-background via-white to-background pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-8 font-[family-name:var(--font-heading)]">
              Teknologi <span className="text-primary">Modern</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Didukung peralatan kedokteran gigi terkini untuk hasil perawatan terbaik dan pengalaman yang nyaman
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            {technologies.map((tech, index) => {
              const IconComponent = iconMap[tech.icon] || Scan;
              return (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent>
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-10 h-10 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                            {tech.name}
                          </h2>
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-8 font-[family-name:var(--font-heading)]">
                Keunggulan Teknologi Kami
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Investasi pada teknologi terkini adalah komitmen kami untuk memberikan pelayanan terbaik bagi setiap pasien.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
                  <span className="text-6xl">🔬</span>
                </div>
                <h3 className="text-2xl font-bold text-text mb-4 font-[family-name:var(--font-heading)]">
                  Peralatan Terkini
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kami terus memperbarui peralatan dengan standar internasional terbaik
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary to-cyan-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-[family-name:var(--font-heading)]">
            Rasakan Perawatan Modern
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Kunjungi klinik kami dan rasakan pengalaman perawatan gigi dengan teknologi terkini.
          </p>
          <Button href="/booking" size="lg" className="bg-white text-primary hover:bg-gray-100">
            Booking Sekarang
          </Button>
        </div>
      </section>
    </>
  );
}
