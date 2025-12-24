import { z } from "zod";

export const bookingSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  whatsapp: z
    .string()
    .min(10, "Nomor WhatsApp minimal 10 digit")
    .regex(/^[0-9+]+$/, "Nomor WhatsApp hanya boleh berisi angka"),
  email: z.string().email("Format email tidak valid"),
  layanan: z.string().min(1, "Pilih layanan"),
  dokter: z.string().optional(),
  tanggal: z.string().min(1, "Pilih tanggal"),
  waktu: z.string().min(1, "Pilih waktu"),
  keluhan: z.string().min(10, "Jelaskan keluhan minimal 10 karakter"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

export const contactSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Format email tidak valid"),
  subjek: z.string().min(5, "Subjek minimal 5 karakter"),
  pesan: z.string().min(10, "Pesan minimal 10 karakter"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
