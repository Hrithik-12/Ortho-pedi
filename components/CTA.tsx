import { site } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-700 py-16 lg:py-20">
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-950/30 blur-2xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready for the Smile You Deserve?
          </h2>
          <p className="mt-3 max-w-xl text-brand-100">
            Book a consultation today — same-day appointments available for
            emergencies. Your new smile starts with one message.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-800 shadow-lg transition-colors hover:bg-brand-50"
          >
            <WhatsAppIcon className="h-4.5 w-4.5" />
            WhatsApp Us
          </a>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <PhoneIcon className="h-4.5 w-4.5" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
