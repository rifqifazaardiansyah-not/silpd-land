import { Facebook, Instagram, Linkedin, Sprout, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-cta text-primary-foreground">
                <Sprout className="h-5 w-5" />
              </div>
              <div className="text-base font-bold text-foreground">SILPD</div>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Modernisasi lumbung desa Indonesia dengan teknologi yang sederhana, transparan, dan terpercaya.
            </p>
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
              <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-foreground"><Youtube className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          <FooterCol title="Produk" items={["Fitur", "Harga", "Demo", "Mobile App"]} />
          <FooterCol title="Sumber Daya" items={["Blog", "Tutorial", "Panduan", "FAQ", "Case Studies"]} />
          <FooterCol title="Perusahaan" items={["Tentang Kami", "Kontak", "Karir", "Press Kit"]} />
          <FooterCol
            title="Hubungi Kami"
            items={[
              "info@silpd.id",
              "+62 812-3456-7890",
              "Yogyakarta, Indonesia",
              "Sen–Jum, 08:00–17:00 WIB",
            ]}
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2025 SILPD. All rights reserved.</p>
          <p>Made with <span className="text-destructive">♥</span> for Indonesian farmers</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Syarat</a>
            <a href="#" className="hover:text-foreground">Privasi</a>
            <a href="#" className="hover:text-foreground">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}><a href="#" className="hover:text-foreground">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}
