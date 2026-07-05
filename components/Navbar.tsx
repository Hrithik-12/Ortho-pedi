"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/lib/data";
import { PhoneIcon, ToothIcon } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        scrolled || open
          ? "bg-white/95 shadow-md shadow-slate-900/5 backdrop-blur"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      {/* Top strip */}
      <div className="hidden bg-brand-900 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 text-xs">
          <p className="font-medium tracking-wide">
            Tricity&apos;s Only Black Diamond Invisalign® Provider
          </p>
          <div className="flex items-center gap-6">
            <span>Mon – Sat: 10:00 AM – 7:30 PM</span>
            <a
              href={`mailto:${site.email}`}
              className="hover:text-brand-200 transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-700 text-white">
            <ToothIcon className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-brand-900">
              NewWay <span className="text-brand-600">Orthodontic</span>
            </span>
            <span className="block text-[11px] font-medium text-slate-500">
              Craniofacial Pain &amp; Orthodontia Centre
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-2 rounded-full border border-brand-200 px-4 py-2 text-sm font-bold text-brand-800 transition-colors hover:bg-brand-50"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-800"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-brand-900 lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-6 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-slate-100 py-3 text-sm font-semibold text-slate-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center justify-center gap-2 rounded-full border border-brand-200 px-4 py-3 text-sm font-bold text-brand-800"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {site.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-700 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
