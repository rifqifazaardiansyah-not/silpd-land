import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const tabs = [
  {
    id: "admin",
    label: "Admin",
    color: "text-sky",
    title: "Kendali Penuh untuk Admin",
    features: [
      { h: "Master Data Management", p: "Kelola petani, kelompok tani, jenis gabah, dan konfigurasi lumbung & slot dengan satu klik." },
      { h: "Harvest & Allocation Control", p: "Input panen massal dengan perhitungan kontribusi 3% otomatis dan override slot manual saat dibutuhkan." },
      { h: "Approval Workflows", p: "Tinjau, setujui, atau tolak permintaan pengambilan dengan pelacakan alasan dan opsi pembatalan." },
      { h: "Advanced Analytics", p: "Laporan stok, kontribusi petani, pola pengambilan, dan distribusi jenis gabah dengan ekspor PDF/CSV." },
      { h: "Expiration Management", p: "Pelacakan 90 hari otomatis dengan indikator warna dan laporan kadaluarsa massal." },
    ],
  },
  {
    id: "manager",
    label: "Pengelola Lumbung",
    color: "text-primary",
    title: "Operasional Lumbung yang Efisien",
    features: [
      { h: "Storage Instruction Queue", p: "Lihat antrian penempatan dan konfirmasi penyimpanan dengan berat aktual dan foto bukti." },
      { h: "Withdrawal Confirmations", p: "Daftar permintaan yang sudah disetujui, konfirmasi serah-terima dengan tanda tangan digital." },
      { h: "Slot-Level Stock View", p: "Floor plan visual dengan persentase utilisasi dan detail isi per slot." },
      { h: "Simplified Dashboard", p: "Hanya lumbung yang Anda kelola — counter aksi tertunda dan stat harian masuk/keluar." },
    ],
  },
  {
    id: "farmer",
    label: "Petani",
    color: "text-earth",
    title: "Portal Mandiri untuk Petani",
    features: [
      { h: "My Stock Overview", p: "Total kontribusi, stok aktif, total yang sudah diambil, dan saldo bersih — semuanya transparan." },
      { h: "Withdrawal Request Portal", p: "Ajukan pengambilan via HP dengan form sederhana, lacak status, dan terima notifikasi WhatsApp." },
      { h: "Transparency Dashboard", p: "Lihat persis di lumbung mana dan slot mana gabah Anda disimpan, lengkap dengan lama penyimpanan." },
    ],
  },
];

export function RoleTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;
  return (
    <div>
      <div className="mx-auto mb-8 flex w-full max-w-xl items-center gap-1 rounded-full border border-border bg-card p-1.5">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              "flex-1 rounded-full px-3 py-2 text-xs font-medium transition-all sm:text-sm",
              active === t.id
                ? "bg-gradient-cta text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
        <h3 className={cn("text-2xl font-bold sm:text-3xl", current.color)}>{current.title}</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {current.features.map((f) => (
            <div key={f.h} className="flex gap-3 rounded-2xl border border-border bg-background p-5">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{f.h}</div>
                <p className="mt-1 text-sm text-muted-foreground">{f.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
