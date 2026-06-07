import { Link } from "@tanstack/react-router";
import { Menu, Sprout, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { env } from "@/lib/env";

const links = [
  { href: "#fitur", label: "Fitur" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#harga", label: "Harga" },
  { href: "#cerita", label: "Cerita Sukses" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-cta text-primary-foreground">
            <Sprout className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight text-foreground">SILPD</div>
            <div className="text-[10px] font-medium text-muted-foreground">Lumbung Padi Desa</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button 
            variant="ghost" 
            size="sm"
          >
            Masuk ke Desa Saya
          </Button>
          <Button 
            size="sm" 
            className="bg-gradient-cta text-primary-foreground hover:opacity-95"
          >
            Daftar Desa
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="space-y-1 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted">
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => window.location.href = env.auth.loginUrl}
              >
                Masuk ke Desa Saya
              </Button>
              <Button 
                size="sm" 
                className="flex-1 bg-gradient-cta text-primary-foreground"
                onClick={() => window.location.href = env.auth.registerUrl}
              >
                Daftar Desa
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
