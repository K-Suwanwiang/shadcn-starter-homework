"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#" },
  { label: "Use Cases", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Blog", href: "#" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="mx-auto max-w-[1280px] px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src="/assets/logo.png" alt="Flowly" width={36} height={36} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="#"
          className="hidden md:flex items-center justify-center px-4 py-2 h-9 text-sm font-medium bg-primary text-primary-foreground rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
        >
          Get started
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            className="mt-2 flex items-center justify-center px-4 py-2 h-9 text-sm font-medium bg-primary text-primary-foreground rounded-lg"
            onClick={() => setOpen(false)}
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
