"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#paket", label: "Paket" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#faq", label: "FAQ" },
];

const WHATSAPP_LINK = "https://wa.me/6281234567890?text=Halo%20HealthyFooDs%2C%20saya%20mau%20pesan!";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-shadow duration-300">
      <div className="flex items-center justify-between w-full px-5 md:px-20 py-4 max-w-7xl mx-auto">
        <a href="#" className="text-xl md:text-2xl font-bold text-primary tracking-tight">
          HealthyFooDs
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-95 transition-all duration-200 shadow-lg shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        >
          Pesan Sekarang
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-2 space-y-4 border-t border-outline-variant/50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block text-center bg-primary text-on-primary px-6 py-3 rounded-full text-sm font-semibold hover:scale-95 transition-all duration-200 shadow-lg shadow-primary/20"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
