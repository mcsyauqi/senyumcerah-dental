export const services = [
  {
    id: "pembersihan-karang-gigi",
    name: "Pembersihan Karang Gigi",
    shortDesc: "Scaling profesional untuk gigi bersih dan sehat",
    description: "Layanan pembersihan karang gigi profesional menggunakan teknologi ultrasonic scaler untuk menghilangkan plak dan karang gigi yang menumpuk.",
    price: "Rp 250.000",
    duration: "30-45 menit",
    icon: "Sparkles",
    benefits: ["Menghilangkan plak dan karang gigi", "Mencegah penyakit gusi", "Napas lebih segar", "Gigi lebih putih alami"]
  },
  {
    id: "tambal-gigi",
    name: "Tambal Gigi",
    shortDesc: "Restorasi gigi berlubang dengan bahan berkualitas",
    description: "Penambalan gigi berlubang menggunakan bahan composite resin berkualitas tinggi yang warnanya menyerupai gigi asli.",
    price: "Rp 200.000 - Rp 500.000",
    duration: "30-60 menit",
    icon: "Shield",
    benefits: ["Bahan composite berkualitas", "Warna menyerupai gigi asli", "Tahan lama hingga 10 tahun", "Proses cepat dan nyaman"]
  },
  {
    id: "cabut-gigi",
    name: "Cabut Gigi",
    shortDesc: "Pencabutan gigi aman dengan anestesi modern",
    description: "Prosedur pencabutan gigi yang aman dan minim rasa sakit dengan teknik anestesi modern.",
    price: "Rp 150.000 - Rp 1.500.000",
    duration: "15-45 menit",
    icon: "Hand",
    benefits: ["Anestesi modern minim sakit", "Dokter berpengalaman", "Perawatan pasca cabut", "Konsultasi gratis"]
  },
  {
    id: "veneer-gigi",
    name: "Veneer Gigi",
    shortDesc: "Solusi senyum sempurna dengan veneer premium",
    description: "Veneer gigi premium untuk tampilan senyum yang sempurna. Tersedia pilihan composite veneer dan porcelain veneer.",
    price: "Rp 1.500.000 - Rp 5.000.000",
    duration: "1-2 kunjungan",
    icon: "Star",
    benefits: ["Hasil natural sempurna", "Pilihan composite & porcelain", "Tahan lama 10-15 tahun", "Proses minimal prep"]
  },
  {
    id: "bleaching-gigi",
    name: "Bleaching Gigi",
    shortDesc: "Pemutihan gigi profesional hasil maksimal",
    description: "Pemutihan gigi profesional menggunakan teknologi LED whitening untuk hasil maksimal hingga 8 shade lebih putih.",
    price: "Rp 1.500.000 - Rp 3.000.000",
    duration: "60-90 menit",
    icon: "Sun",
    benefits: ["Hasil hingga 8 shade lebih putih", "Teknologi LED modern", "Aman untuk enamel", "Hasil instan"]
  },
  {
    id: "behel-gigi",
    name: "Behel Gigi",
    shortDesc: "Perawatan ortodonti untuk gigi rata sempurna",
    description: "Perawatan ortodonti lengkap dengan pilihan behel metal, ceramic, dan clear aligner.",
    price: "Rp 8.000.000 - Rp 25.000.000",
    duration: "12-24 bulan",
    icon: "Smile",
    benefits: ["Pilihan metal, ceramic, clear", "Dokter spesialis ortodonti", "Kontrol berkala gratis", "Hasil permanen"]
  },
  {
    id: "implan-gigi",
    name: "Implan Gigi",
    shortDesc: "Pengganti gigi hilang permanen dan natural",
    description: "Solusi permanen untuk gigi yang hilang dengan teknologi implan titanium berkualitas.",
    price: "Rp 15.000.000 - Rp 25.000.000",
    duration: "3-6 bulan",
    icon: "Zap",
    benefits: ["Implan titanium premium", "Hasil permanen seumur hidup", "Fungsi seperti gigi asli", "Garansi 10 tahun"]
  },
  {
    id: "gigi-palsu",
    name: "Gigi Palsu",
    shortDesc: "Protesa gigi berkualitas untuk senyum lengkap",
    description: "Pembuatan gigi palsu lepasan dan cekat dengan bahan akrilik atau valplast berkualitas.",
    price: "Rp 500.000 - Rp 8.000.000",
    duration: "1-2 minggu",
    icon: "Heart",
    benefits: ["Pilihan lepasan & cekat", "Bahan premium berkualitas", "Nyaman digunakan", "Tampilan natural"]
  }
];

export const doctors = [
  {
    id: "dr-sarah",
    name: "drg. Sarah Wijaya, Sp.KG",
    specialty: "Spesialis Konservasi Gigi",
    experience: "12 tahun",
    education: "Universitas Indonesia",
    description: "Ahli dalam perawatan saluran akar dan restorasi gigi."
  },
  {
    id: "dr-budi",
    name: "drg. Budi Santoso, Sp.Ort",
    specialty: "Spesialis Ortodonti",
    experience: "15 tahun",
    education: "Universitas Gadjah Mada",
    description: "Pakar perawatan behel dan clear aligner."
  },
  {
    id: "dr-maya",
    name: "drg. Maya Putri, Sp.Pros",
    specialty: "Spesialis Prostodonti",
    experience: "10 tahun",
    education: "Universitas Airlangga",
    description: "Spesialis implan gigi dan gigi tiruan."
  },
  {
    id: "dr-andi",
    name: "drg. Andi Rahman, Sp.Perio",
    specialty: "Spesialis Periodonti",
    experience: "8 tahun",
    education: "Universitas Padjadjaran",
    description: "Ahli perawatan gusi dan bedah periodontal."
  }
];

export const technologies = [
  { id: "digital-xray", name: "Digital X-Ray", description: "Rontgen digital dengan radiasi rendah dan hasil instan.", icon: "Scan" },
  { id: "laser", name: "Laser Dentistry", description: "Perawatan dengan laser untuk prosedur yang lebih nyaman.", icon: "Zap" },
  { id: "cad-cam", name: "CAD/CAM Dental", description: "Teknologi desain dan pembuatan restorasi gigi digital.", icon: "Cpu" },
  { id: "sterilisasi", name: "Sterilisasi Autoclave", description: "Sistem sterilisasi kelas B untuk keamanan terjamin.", icon: "ShieldCheck" }
];

export const promos = [
  { id: "promo-scaling", title: "Promo Scaling Hemat", description: "Diskon 30% untuk pembersihan karang gigi.", discount: "30%", validUntil: "31 Januari 2025", code: "SCALE30" },
  { id: "promo-bleaching", title: "Paket Bleaching Premium", description: "Gratis konsultasi + home whitening kit.", discount: "Free Gift", validUntil: "28 Februari 2025", code: "BRIGHT2025" },
  { id: "promo-behel", title: "Cicilan Behel 0%", description: "Cicilan 12 bulan tanpa bunga untuk behel.", discount: "0% Cicilan", validUntil: "31 Maret 2025", code: "BEHEL0" }
];

export const testimonials = [
  { id: 1, name: "Rina Susanti", treatment: "Veneer Gigi", rating: 5, comment: "Hasilnya luar biasa! Gigi saya jadi rapi dan putih natural." },
  { id: 2, name: "Ahmad Hidayat", treatment: "Behel Gigi", rating: 5, comment: "Dokter Budi sangat teliti dan sabar. Gigi saya sudah mulai rapi." },
  { id: 3, name: "Linda Wijaya", treatment: "Scaling", rating: 5, comment: "Scaling di sini nyaman banget, tidak sakit sama sekali." },
  { id: 4, name: "Budi Pratama", treatment: "Implan Gigi", rating: 5, comment: "Implan gigi saya sudah 2 tahun dan masih sempurna." }
];

export const faqs = [
  { question: "Apakah konsultasi pertama gratis?", answer: "Ya, konsultasi pertama di SenyumCerah Dental Clinic gratis." },
  { question: "Berapa lama waktu pemasangan behel?", answer: "Proses pemasangan behel membutuhkan waktu sekitar 1-2 jam. Perawatan behel berlangsung 12-24 bulan." },
  { question: "Apakah bisa bayar dengan cicilan?", answer: "Ya, kami menyediakan opsi cicilan 0% hingga 12 bulan untuk treatment tertentu." },
  { question: "Apakah bleaching gigi aman?", answer: "Bleaching gigi di klinik kami sangat aman dengan bahan dan teknologi yang sudah teruji." },
  { question: "Jam operasional klinik?", answer: "Senin-Sabtu: 09:00-21:00, Minggu: 10:00-18:00" }
];

export const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];

export const contactInfo = {
  address: "Jl. Sudirman No. 123, Jakarta Pusat 10220",
  phone: "+62 21 1234 5678",
  whatsapp: "+62 812 3456 7890",
  email: "hello@senyumcerah.id",
  hours: { weekday: "Senin - Sabtu: 09:00 - 21:00", weekend: "Minggu: 10:00 - 18:00" }
};

export const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Dokter", href: "/dokter" },
  { name: "Teknologi", href: "/teknologi" },
  { name: "Promo", href: "/promo" },
  { name: "Kontak", href: "/kontak" }
];
