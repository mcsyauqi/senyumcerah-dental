import { z } from "zod";

export const bookingSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  telepon: z.string().min(10, "Nomor telepon tidak valid"),
  email: z.string().email("Email tidak valid"),
  layanan: z.string().min(1, "Pilih layanan"),
  tanggal: z.string().min(1, "Pilih tanggal"),
  waktu: z.string().min(1, "Pilih waktu"),
  pesan: z.string().optional(),
});

export const contactSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  telepon: z.string().min(10, "Nomor telepon tidak valid"),
  subjek: z.string().min(3, "Subjek minimal 3 karakter"),
  pesan: z.string().min(10, "Pesan minimal 10 karakter"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
