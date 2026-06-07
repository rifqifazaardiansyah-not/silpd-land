import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  Calendar,
  Check,
  CheckCircle2,
  ClipboardList,
  Cloud,
  Database,
  FileSpreadsheet,
  Globe,
  Layers,
  Leaf,
  Lock,
  MapPin,
  MessageCircle,
  Phone,
  PieChart,
  Printer,
  QrCode,
  Repeat,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sprout,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
  Wheat,
  Workflow,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FaqAccordion } from "@/components/faq-accordion";
import { RoleTabs } from "@/components/role-tabs";
import heroFarmer from "@/assets/hero-farmer.jpg";
import barn from "@/assets/barn.jpg";
import caseBudi from "@/assets/case-budi.jpg";
import caseSiti from "@/assets/case-siti.jpg";
import caseOfficial from "@/assets/case-official.jpg";
import { env } from "@/lib/env";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SILPD - Sistem Manajemen Lumbung Padi Desa Digital | Solusi Inventori Gabah Indonesia" },
      {
        name: "description",
        content:
          "Platform SaaS untuk modernisasi lumbung desa. Kelola stok gabah dengan sistem FIFO otomatis, monitoring kadaluarsa, dan transparansi penuh. Gratis uji coba 30 hari.",
      },
      { property: "og:title", content: "SILPD - Sistem Manajemen Lumbung Padi Desa Digital" },
      {
        property: "og:description",
        content:
          "Kelola lumbung desa dengan FIFO otomatis, monitoring kadaluarsa 90 hari, dan portal mandiri untuk petani.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "SILPD",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "500000", priceCurrency: "IDR" },
          description:
            "Sistem manajemen lumbung padi desa dengan FIFO otomatis dan transparansi penuh.",
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <SocialProof />
        <Problems />
        <Solutions />
        <HowItWorks />
        <RoleFeatures />
        <Screenshots />
        <TechBenefits />
        <Outcomes />
        <Pricing />
        <Cases />
        <Faq />
        <Integrations />
        <Security />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:gap-8 lg:px-8 lg:py-24">
        <div className="lg:col-span-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-forest">
            <Sparkles className="h-3.5 w-3.5" />
            Platform pertama untuk lumbung padi desa Indonesia
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Kelola{" "}
            <span className="bg-gradient-to-r from-primary to-forest bg-clip-text text-transparent">
              Lumbung Desa
            </span>{" "}
            dengan Teknologi Modern
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Pelacakan FIFO otomatis, alokasi slot cerdas, dan kontribusi petani 3% yang
            transparan — dalam satu platform yang dibuat khusus untuk komunitas tani Indonesia.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-gradient-cta text-primary-foreground shadow-soft hover:opacity-95"
            onClick={() => window.location.href = env.auth.loginUrl}
            >
              Mulai Uji Coba Gratis
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="h-4 w-4" />
              Jadwalkan Demo
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <TrustBadge icon={Warehouse} label="15+ desa aktif" />
            <TrustBadge icon={Wheat} label="10.000+ ton gabah dikelola" />
            <TrustBadge icon={TrendingUp} label="20% pengurangan susut" />
          </div>
        </div>

        <div className="relative lg:col-span-2">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <img
              src={heroFarmer}
              alt="Petani Indonesia menggunakan aplikasi SILPD di sawah"
              width={1280}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 hidden w-56 rounded-2xl border border-border bg-card p-4 shadow-soft sm:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-forest">
              <CheckCircle2 className="h-4 w-4" />
              Slot A-12 terisi
            </div>
            <div className="mt-1 text-sm font-bold text-foreground">+1.250 kg Gabah</div>
            <div className="text-xs text-muted-foreground">Kontribusi 3% otomatis tercatat</div>
          </div>

          <div className="absolute -right-3 -top-3 hidden w-52 rounded-2xl border border-border bg-card p-4 shadow-soft sm:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-gold-foreground">
              <Bell className="h-4 w-4 text-gold" />
              Notifikasi FIFO
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Batch B-04 mendekati 90 hari — prioritaskan distribusi.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon: Icon, label }: { icon: typeof Warehouse; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <span className="font-medium text-foreground">{label}</span>
    </div>
  );
}

/* ===================== SOCIAL PROOF ===================== */
function SocialProof() {
  const stats = [
    { v: "15+", l: "Lumbung Desa Aktif" },
    { v: "500+", l: "Petani Terlayani" },
    { v: "10.000+", l: "Ton Gabah Dikelola" },
    { v: "95%", l: "Akurasi Inventori" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="bg-gradient-to-r from-primary to-forest bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              {s.v}
            </div>
            <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===================== PROBLEMS ===================== */
function Problems() {
  const items = [
    {
      icon: ClipboardList,
      title: "Pencatatan Manual yang Rawan Error",
      desc: "Buku catatan hilang, data tidak sinkron, perhitungan salah.",
      pain: "Konflik saat petani mengambil gabah.",
    },
    {
      icon: Calendar,
      title: "Gabah Kadaluarsa Tidak Terpantau",
      desc: "Tidak ada peringatan otomatis untuk gabah yang mendekati 90 hari.",
      pain: "Kerugian akibat gabah busuk dan turun kualitas.",
    },
    {
      icon: Warehouse,
      title: "Kapasitas Lumbung Tidak Optimal",
      desc: "Slot kosong tidak dimanfaatkan, penempatan tidak strategis.",
      pain: "Ruang terbuang sementara petani lain menunggu.",
    },
  ];
  return (
    <Section
      eyebrow="Masalah"
      title="Masalah yang Dihadapi Lumbung Desa Tradisional"
      subtitle="Tantangan harian yang menggerus hasil panen dan kepercayaan komunitas."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-4 flex items-start gap-2 rounded-lg bg-destructive/5 p-3 text-xs text-destructive">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{p.pain}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== SOLUTIONS ===================== */
function Solutions() {
  const items = [
    { icon: QrCode, title: "Input Panen Otomatis", desc: "Hitung 3% kontribusi otomatis, alokasi slot instan, QR code receipt untuk petani." },
    { icon: Repeat, title: "Pelacakan FIFO Real-time", desc: "Prioritas gabah tertua otomatis, indikator warna umur, peringatan kadaluarsa." },
    { icon: Users, title: "Dashboard Multi-Role", desc: "Admin oversight, Pengelola operasional, Petani portal mandiri." },
    { icon: Workflow, title: "Sistem Permintaan Pengambilan", desc: "Petani ajukan via portal, admin setujui, pengelola konfirmasi serah-terima." },
    { icon: FileSpreadsheet, title: "Laporan Komprehensif", desc: "Stok per lumbung, riwayat kontribusi, analitik pengambilan, ekspor CSV/PDF." },
    { icon: Bell, title: "Notifikasi Proaktif", desc: "Alert kadaluarsa, peringatan kapasitas, notifikasi approval otomatis." },
  ];
  return (
    <Section
      id="fitur"
      eyebrow="Solusi"
      title="Satu Platform, Semua Solusi Manajemen Lumbung"
      subtitle="Dirancang khusus untuk operasional lumbung padi desa di Indonesia."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== HOW IT WORKS ===================== */
function HowItWorks() {
  const steps = [
    { icon: Leaf, title: "Registrasi Panen", desc: "Petani panen → Admin input data → Sistem hitung 3% otomatis." },
    { icon: Layers, title: "Alokasi Slot Otomatis", desc: "Sistem memilih slot terbaik berdasarkan kapasitas dan FIFO." },
    { icon: ClipboardList, title: "Instruksi Penyimpanan", desc: "Pengelola terima instruksi dan konfirmasi penempatan gabah." },
    { icon: BarChart3, title: "Monitoring Real-time", desc: "Admin memantau stok dengan peringatan otomatis untuk kadaluarsa." },
    { icon: Truck, title: "Permintaan & Pengeluaran", desc: "Petani ajukan → Admin setujui → Pengelola serahkan." },
  ];
  return (
    <Section
      id="cara-kerja"
      eyebrow="Alur Kerja"
      title="Alur Kerja Sederhana, Hasil Maksimal"
      subtitle="Lima langkah dari panen sampai pengambilan, semuanya tercatat otomatis."
    >
      <div className="relative">
        <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent md:block" />
        <ol className="space-y-6 md:space-y-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[80px_1fr] md:items-start md:p-7">
              <div className="flex items-center gap-3 md:flex-col md:items-start">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-cta text-primary-foreground shadow-soft">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold tracking-widest text-muted-foreground">
                  STEP {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ===================== ROLE FEATURES ===================== */
function RoleFeatures() {
  return (
    <Section
      eyebrow="Multi-Role"
      title="Fitur Lengkap untuk Setiap Peran"
      subtitle="Setiap pemangku peran mendapat tampilan yang relevan dengan tugasnya."
    >
      <RoleTabs />
    </Section>
  );
}

/* ===================== SCREENSHOTS ===================== */
function Screenshots() {
  return (
    <Section
      eyebrow="Tampilan Produk"
      title="Antarmuka yang Intuitif, Dirancang untuk Kemudahan"
      subtitle="Setiap halaman dirancang ulang berdasarkan masukan langsung dari pengelola lumbung."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Big mock dashboard */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-soft lg:col-span-7">
          <MockDashboard />
        </div>

        {/* Side phone + warehouse */}
        <div className="space-y-6 lg:col-span-5">
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-soft">
            <MockWarehouse />
          </div>
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-soft">
            <MockMobile />
          </div>
        </div>
      </div>
    </Section>
  );
}

function MockDashboard() {
  return (
    <div className="rounded-2xl bg-muted/40 p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] font-semibold tracking-widest text-muted-foreground">DASHBOARD ADMIN</div>
          <div className="text-base font-bold text-foreground">Lumbung Desa Sukamaju</div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Online
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { l: "Total Stok", v: "8.420 kg", c: "text-primary" },
          { l: "Kapasitas", v: "78%", c: "text-sky" },
          { l: "Mendekati Exp.", v: "3 batch", c: "text-sunset" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-border bg-background p-3">
            <div className="text-[10px] font-medium text-muted-foreground">{s.l}</div>
            <div className={"mt-0.5 text-lg font-bold " + s.c}>{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-border bg-background p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-xs font-semibold text-foreground">Stok per Slot (FIFO)</div>
          <div className="text-[10px] text-muted-foreground">Hari ini</div>
        </div>
        <div className="space-y-2.5">
          {[
            { slot: "A-01 · Batch #240", age: 88, color: "bg-destructive" },
            { slot: "A-02 · Batch #241", age: 65, color: "bg-sunset" },
            { slot: "B-04 · Batch #244", age: 42, color: "bg-gold" },
            { slot: "B-07 · Batch #248", age: 18, color: "bg-primary" },
          ].map((r) => (
            <div key={r.slot} className="flex items-center gap-3">
              <div className="w-36 truncate text-xs text-muted-foreground">{r.slot}</div>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className={"h-full " + r.color}
                  style={{ width: `${Math.min(100, (r.age / 90) * 100)}%` }}
                />
              </div>
              <div className="w-12 text-right text-[11px] font-medium text-foreground">
                {r.age}d
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockWarehouse() {
  return (
    <div className="rounded-2xl bg-muted/40 p-4 sm:p-5">
      <div className="text-[10px] font-semibold tracking-widest text-muted-foreground">FLOOR PLAN</div>
      <div className="text-sm font-bold text-foreground">Lumbung A — Visualisasi Slot</div>
      <div className="mt-3 grid grid-cols-6 gap-1.5">
        {Array.from({ length: 24 }).map((_, i) => {
          const fill = [85, 90, 60, 0, 30, 100, 100, 70, 0, 55, 80, 95, 40, 0, 88, 65, 100, 20, 0, 75, 90, 60, 45, 80][i];
          const color =
            fill === 0 ? "bg-muted" : fill > 85 ? "bg-destructive/80" : fill > 60 ? "bg-gold" : "bg-primary";
          return (
            <div key={i} className="aspect-square overflow-hidden rounded-md border border-border bg-background">
              <div className={"h-full w-full " + color} style={{ opacity: fill === 0 ? 1 : 0.85 }} />
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-muted-foreground">
        <Legend dot="bg-primary" label="Normal" />
        <Legend dot="bg-gold" label="60–85%" />
        <Legend dot="bg-destructive/80" label=">85%" />
        <Legend dot="bg-muted border border-border" label="Kosong" />
      </div>
    </div>
  );
}

function Legend({ dot, label }: { dot: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={"h-2.5 w-2.5 rounded-sm " + dot} />
      {label}
    </div>
  );
}

function MockMobile() {
  return (
    <div className="rounded-2xl bg-muted/40 p-4 sm:p-5">
      <div className="text-[10px] font-semibold tracking-widest text-muted-foreground">PORTAL PETANI</div>
      <div className="text-sm font-bold text-foreground">Pak Slamet · KT Makmur</div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <Stat label="Kontribusi" value="1.420 kg" tone="text-primary" />
        <Stat label="Tersimpan" value="980 kg" tone="text-sky" />
        <Stat label="Diambil" value="440 kg" tone="text-earth" />
      </div>
      <div className="mt-3 rounded-xl border border-border bg-background p-3 text-xs">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-foreground">Permintaan Pengambilan</div>
          <div className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-semibold text-gold-foreground">
            Menunggu
          </div>
        </div>
        <div className="mt-1 text-muted-foreground">200 kg · diajukan 2 hari lalu</div>
      </div>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-2.5">
      <div className="text-[10px] text-muted-foreground">{label}</div>
      <div className={"text-sm font-bold " + tone}>{value}</div>
    </div>
  );
}

/* ===================== TECH BENEFITS ===================== */
function TechBenefits() {
  const items = [
    { icon: Cloud, title: "Cloud-Based", points: ["Tanpa instalasi", "Akses dari mana saja", "Backup otomatis", "Uptime 99.9%"] },
    { icon: Smartphone, title: "Mobile Responsive", points: ["Optimal di HP", "Touch friendly", "Mode offline (segera)", "PWA"] },
    { icon: Shield, title: "Aman & Compliant", points: ["Enkripsi bank-level", "Role-based access", "Audit trail", "Siap GDPR"] },
    { icon: Database, title: "Mudah Integrasi", points: ["Impor/ekspor CSV", "API tersedia", "Webhook", "Barcode/QR"] },
  ];
  return (
    <Section
      eyebrow="Teknologi"
      title="Teknologi Modern, Akses Mudah"
      subtitle="Standar produk SaaS modern, disesuaikan untuk realita konektivitas desa."
      tone="muted"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky/10 text-sky">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-base font-semibold text-foreground">{c.title}</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {c.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== OUTCOMES ===================== */
function Outcomes() {
  const items = [
    { icon: Wheat, title: "Pengurangan Susut Gabah", v: "15–20%", desc: "Pelacakan kadaluarsa otomatis mencegah pemborosan. Payback 3–4 bulan." },
    { icon: Zap, title: "Efisiensi Operasional", v: "70%", desc: "Waktu admin berkurang, pengambilan petani 80% lebih cepat." },
    { icon: ShieldCheck, title: "Transparansi Penuh", v: "95%", desc: "Konflik berkurang drastis, kepercayaan komunitas terbangun." },
    { icon: Warehouse, title: "Optimisasi Kapasitas", v: "+30%", desc: "Utilisasi lumbung meningkat tanpa perlu ekspansi fisik." },
    { icon: ClipboardList, title: "Kepatuhan & Akuntabilitas", v: "100%", desc: "Audit trail lengkap, verifikasi kontribusi 3% otomatis." },
    { icon: Globe, title: "Skalabilitas", v: "∞", desc: "Mulai 1 lumbung, kembangkan ke jaringan multi-desa." },
  ];
  return (
    <Section
      eyebrow="Dampak"
      title="Dampak Nyata untuk Desa Anda"
      subtitle="Angka-angka dari implementasi nyata di lapangan."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((o) => (
          <div key={o.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <o.icon className="h-5 w-5" />
              </div>
              <div className="bg-gradient-to-r from-primary to-forest bg-clip-text text-2xl font-extrabold text-transparent">
                {o.v}
              </div>
            </div>
            <h3 className="mt-3 text-base font-semibold text-foreground">{o.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{o.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== PRICING ===================== */
function Pricing() {
  const tiers = [
    {
      name: "Pemula",
      price: "Rp 500.000",
      desc: "Untuk lumbung desa kecil yang baru memulai.",
      features: ["1 lokasi lumbung", "Hingga 50 petani", "10 GB storage", "Laporan dasar", "Dukungan email", "Akses mobile"],
      cta: "Mulai Gratis 30 Hari",
      highlight: false,
    },
    {
      name: "Profesional",
      price: "Rp 1.500.000",
      desc: "Untuk koperasi aktif dengan banyak petani.",
      features: [
        "Hingga 5 lumbung",
        "Hingga 200 petani",
        "50 GB storage",
        "Analitik lanjutan",
        "Dukungan prioritas",
        "Akses API",
        "Field kustom",
        "Barcode scanning",
      ],
      cta: "Pilih Paket Ini",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Untuk jaringan multi-desa & program pemerintah.",
      features: [
        "Lumbung unlimited",
        "Petani unlimited",
        "Storage unlimited",
        "White-label",
        "Account manager",
        "On-premise tersedia",
        "Integrasi kustom",
        "Training & onboarding",
      ],
      cta: "Hubungi Sales",
      highlight: false,
    },
  ];

  return (
    <Section
      id="harga"
      eyebrow="Harga"
      title="Paket Harga yang Fleksibel"
      subtitle="Tanpa biaya setup. Hemat 20% dengan paket tahunan."
      tone="muted"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              "relative flex flex-col rounded-3xl border bg-card p-7 " +
              (t.highlight
                ? "border-primary shadow-soft lg:scale-[1.03]"
                : "border-border")
            }
          >
            {t.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-cta px-3 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
                Paling Populer
              </div>
            )}
            <div className="text-sm font-semibold text-muted-foreground">{t.name}</div>
            <div className="mt-2 flex items-baseline gap-1">
              <div className="text-3xl font-extrabold text-foreground">{t.price}</div>
              {t.price !== "Custom" && <div className="text-sm text-muted-foreground">/bulan</div>}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <ul className="mt-5 flex-1 space-y-2.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className={
                "mt-6 " +
                (t.highlight
                  ? "bg-gradient-cta text-primary-foreground hover:opacity-95"
                  : "")
              }
              variant={t.highlight ? "default" : "outline"}
            >
              {t.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Garansi uang kembali 30 hari</span>
        <span className="inline-flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-primary" /> Tanpa biaya setup</span>
        <span className="inline-flex items-center gap-1.5"><TrendingUp className="h-4 w-4 text-primary" /> Hemat 20% paket tahunan</span>
      </div>
    </Section>
  );
}

/* ===================== CASES ===================== */
function Cases() {
  const cases = [
    {
      img: caseBudi,
      quote:
        "Setelah 6 bulan menggunakan SILPD, kami berhasil mengurangi gabah busuk hingga 90%. Sekarang semua petani bisa cek stoknya sendiri lewat HP.",
      name: "Pak Budi",
      role: "Ketua Kelompok Tani Makmur, Jawa Tengah",
      metrics: ["500 petani terlayani", "50 ton/bulan", "0 sengketa"],
    },
    {
      img: caseSiti,
      quote:
        "Dulu butuh 2 orang full-time untuk catat manual. Sekarang 1 orang cukup, dan lebih akurat!",
      name: "Ibu Siti",
      role: "Pengelola Lumbung Sejahtera, Jawa Barat",
      metrics: ["70% hemat waktu", "100% akurasi", "+35% utilisasi"],
    },
    {
      img: caseOfficial,
      quote:
        "Sistem FIFO otomatis sangat membantu. Kami tidak pernah lagi punya gabah kadaluarsa yang tidak terjual.",
      name: "Dinas Pertanian",
      role: "Koperasi Tani Maju, Jawa Timur",
      metrics: ["3 lumbung terhubung", "1.200 petani", "Audit lulus excellence"],
    },
  ];
  return (
    <Section
      id="cerita"
      eyebrow="Cerita Sukses"
      title="Cerita Sukses dari Desa-Desa di Indonesia"
      subtitle="Dampak nyata yang dirasakan komunitas tani di berbagai provinsi."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {cases.map((c) => (
          <div key={c.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
              <img src={c.img} alt={c.name} loading="lazy" width={768} height={576} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm italic leading-relaxed text-foreground">“{c.quote}”</p>
              <div className="mt-4">
                <div className="text-sm font-semibold text-foreground">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.role}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.metrics.map((m) => (
                  <span key={m} className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-forest">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== FAQ ===================== */
function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Pertanyaan yang Sering Diajukan"
      subtitle="Tidak menemukan jawaban? Hubungi kami via WhatsApp."
      tone="muted"
    >
      <FaqAccordion />
    </Section>
  );
}

/* ===================== INTEGRATIONS ===================== */
function Integrations() {
  const items = [
    { icon: MessageCircle, label: "WhatsApp" },
    { icon: Phone, label: "SMS Gateway" },
    { icon: FileSpreadsheet, label: "Google Sheets" },
    { icon: QrCode, label: "Barcode/QR Scanner" },
    { icon: Printer, label: "Thermal Printer" },
    { icon: PieChart, label: "E-Reporting Dinas" },
    { icon: Boxes, label: "ERP Koperasi" },
    { icon: Smartphone, label: "Mobile App" },
  ];
  return (
    <Section
      eyebrow="Integrasi"
      title="Kompatibel dengan Ekosistem Digital Desa"
      subtitle="Hubungkan dengan tools yang sudah biasa digunakan."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky/10 text-sky">
              <i.icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-foreground">{i.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ===================== SECURITY ===================== */
function Security() {
  const items = [
    { icon: ShieldCheck, t: "ISO 27001", d: "Proses sertifikasi" },
    { icon: Lock, t: "256-bit SSL", d: "Enkripsi bank-grade" },
    { icon: ClipboardList, t: "Audit Berkala", d: "Penetration test rutin" },
    { icon: Shield, t: "Siap GDPR", d: "Privasi data petani" },
  ];
  return (
    <section className="relative overflow-hidden bg-earth text-earth-foreground">
      <div
        className="absolute inset-0 opacity-15"
        style={{ backgroundImage: `url(${barn})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">Keamanan</div>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Keamanan dan Kepatuhan Data</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-earth-foreground/85">
              Data Anda adalah aset berharga. Kami menggunakan standar keamanan internasional
              untuk melindungi setiap transaksi dan informasi pribadi petani Anda.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {items.map((i) => (
              <div key={i.t} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-gold">
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-sm font-semibold">{i.t}</div>
                <div className="text-xs text-earth-foreground/75">{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== FINAL CTA ===================== */
function FinalCta() {
  return (
    <section id="cta" className="relative bg-gradient-hero py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-forest">Mulai Sekarang</div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Mulai Transformasi Digital Lumbung Desa Anda Hari Ini
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted-foreground">
            Jangan biarkan gabah busuk sia-sia. Jangan biarkan petani kehilangan kepercayaan.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Gratis 30 hari, tanpa kartu kredit",
              "Onboarding & migrasi data gratis",
              "Batalkan kapan saja",
              "Dukungan WhatsApp 7 hari seminggu",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </div>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            Atau hubungi WhatsApp: <span className="font-semibold text-foreground">+62 812-3456-7890</span>
          </div>
        </div>

        <form className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4">
            <Field label="Nama Lengkap" placeholder="Pak Budi Santoso" />
            <Field label="Email / WhatsApp" placeholder="nama@desa.id atau +62…" />
            <Field label="Nama Desa / Kelompok Tani" placeholder="Kelompok Tani Makmur" />
            <div>
              <label className="text-xs font-semibold text-foreground">Jumlah Petani</label>
              <select className="mt-1 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring">
                <option>Kurang dari 50</option>
                <option>50 – 200</option>
                <option>200 – 500</option>
                <option>Lebih dari 500</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground">Pesan (opsional)</label>
              <textarea
                rows={3}
                placeholder="Ceritakan kebutuhan lumbung Anda…"
                className="mt-1 w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Button size="lg" className="bg-gradient-cta text-primary-foreground shadow-soft hover:opacity-95">
              Daftar Uji Coba Gratis
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="text-center text-[11px] text-muted-foreground">
              Dengan mendaftar, Anda menyetujui Syarat & Kebijakan Privasi kami.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs font-semibold text-foreground">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-1 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

/* ===================== Shared Section ===================== */
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section id={id} className={tone === "muted" ? "bg-muted/40 py-16 sm:py-24" : "py-16 sm:py-24"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</div>
          )}
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
