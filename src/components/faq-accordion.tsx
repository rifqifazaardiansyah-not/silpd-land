import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Apakah sistem ini sulit dipelajari?",
    a: "Tidak sama sekali. Interface dirancang sangat sederhana dengan bahasa Indonesia. Kami juga menyediakan video tutorial dan dukungan WhatsApp untuk onboarding.",
  },
  {
    q: "Bagaimana jika internet desa kami tidak stabil?",
    a: "Sistem kami dioptimalkan untuk koneksi lambat. Kami juga sedang mengembangkan mode offline yang dapat sinkronisasi otomatis saat koneksi tersedia.",
  },
  {
    q: "Apakah bisa digunakan untuk selain gabah?",
    a: "Ya! Sistem dapat disesuaikan untuk jagung, kedelai, atau komoditas lain dengan prinsip penyimpanan serupa.",
  },
  {
    q: "Berapa lama waktu implementasi?",
    a: "Rata-rata 1–2 hari untuk setup awal. Dalam seminggu, tim Anda sudah mahir menggunakan sistem.",
  },
  {
    q: "Apakah data kami aman?",
    a: "Sangat aman. Kami menggunakan enkripsi bank-level dan backup otomatis harian. Data Anda hanya milik Anda.",
  },
  {
    q: "Bisakah impor data dari buku manual?",
    a: "Bisa! Kami menyediakan template Excel dan bantuan migrasi data gratis.",
  },
  {
    q: "Apakah ada batasan jumlah pengguna?",
    a: "Tergantung paket. Paket Profesional hingga 200 pengguna, Enterprise unlimited.",
  },
  {
    q: "Bagaimana sistem menangani gangguan?",
    a: "Kami memiliki uptime 99.9%. Jika ada masalah, support kami standby 24/7 via WhatsApp.",
  },
  {
    q: "Bisakah mencetak laporan untuk pemerintah?",
    a: "Tentu. Sistem memiliki fitur export PDF/CSV yang sesuai format pelaporan standar Dinas Pertanian.",
  },
  {
    q: "Apakah ada training untuk tim kami?",
    a: "Ya, paket Profesional dan Enterprise termasuk training online. Training on-site tersedia dengan biaya tambahan.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-foreground sm:text-base">{f.q}</span>
              <ChevronDown
                className={cn("h-5 w-5 shrink-0 text-muted-foreground transition-transform", isOpen && "rotate-180")}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
