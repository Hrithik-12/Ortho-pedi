import Link from "next/link";
import { navLinks, site, treatments } from "@/lib/data";
import { MailIcon, MapPinIcon, PhoneIcon, ToothIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="#home" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
              <ToothIcon className="h-6 w-6" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-white">
              NewWay <span className="text-brand-400">Orthodontic</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            {site.fullName}. {site.tagline} World-class dental care with
            PGIMER-trained specialists in Chandigarh &amp; Mohali.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Treatments */}
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
            Treatments
          </h3>
          <ul className="mt-4 space-y-2.5">
            {treatments.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <a
                  href="#services"
                  className="text-sm transition-colors hover:text-white"
                >
                  {t.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" />
              <span>{site.locations[0].address}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" />
              <span>{site.locations[1].address}</span>
            </li>
            <li>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <PhoneIcon className="h-4.5 w-4.5 shrink-0 text-brand-400" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all transition-colors hover:text-white"
              >
                <MailIcon className="h-4.5 w-4.5 shrink-0 text-brand-400" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Mon – Sat: 10:00 AM – 7:30 PM · Sunday Closed</p>
        </div>
      </div>
    </footer>
  );
}
