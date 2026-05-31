import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook, Video } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gold/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 grid gap-10 lg:grid-cols-3">
        <div>
          <div className="font-display text-4xl tracking-widest text-gold">EUPHORIA</div>
          <p className="font-body text-sm text-muted-foreground-x mt-2 italic">
            Where the night finds its voice.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-[var(--text-primary)] hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="text-[var(--text-primary)] hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="TikTok" className="text-[var(--text-primary)] hover:text-gold transition-colors"><Video className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-display text-xl tracking-wider text-gold mb-2">Explore</h4>
          {[
            ["/menu", "Menu"],
            ["/bar", "The Bar"],
            ["/events", "Events"],
            ["/gallery", "Gallery"],
            ["/about", "About"],
            ["/reserve", "Reserve"],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to as string}
              className="font-body text-sm uppercase tracking-[0.2em] text-[var(--text-primary)] hover:text-gold transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="font-body text-sm space-y-3 text-[var(--text-primary)]">
          <h4 className="font-display text-xl tracking-wider text-gold mb-2">Visit</h4>
          <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold" /> Lomé, Togo</p>
          <p className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold" /> +228 90 00 00 00</p>
          <p className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 text-gold" />
            <span>
              Mon–Thu 17h–01h<br />
              Fri–Sat 17h–03h<br />
              Sun 18h–00h
            </span>
          </p>
        </div>
      </div>
      <div className="border-t border-subtle py-5 text-center font-body text-xs text-muted-foreground-x">
        © 2025 Euphoria Pub Food &amp; Bar. All rights reserved.
      </div>
    </footer>
  );
}