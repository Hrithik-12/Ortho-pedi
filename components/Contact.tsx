import { site } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Visit Us or Say Hello"
          subtitle="Walk in, call, WhatsApp or email — whichever works for you. We'll get you smiling either way."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-5 lg:col-span-2">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition-shadow hover:shadow-md"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-700 text-white">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Call Us
                </p>
                <p className="text-base font-extrabold text-brand-950">
                  {site.phoneDisplay}
                </p>
                <p className="text-xs font-medium text-slate-500">
                  {site.altPhones.join(" · ")}
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition-shadow hover:shadow-md"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  WhatsApp
                </p>
                <p className="text-base font-extrabold text-brand-950">
                  Chat with us instantly
                </p>
                <p className="text-xs font-medium text-slate-500">{site.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 transition-shadow hover:shadow-md"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-900 text-white">
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email
                </p>
                <p className="break-all text-base font-extrabold text-brand-950">
                  {site.email}
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint-500 text-white">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Clinic Hours
                </p>
              </div>
              <ul className="mt-4 space-y-2.5">
                {site.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-2.5"
                  >
                    <span className="text-sm font-bold text-slate-700">{h.days}</span>
                    <span
                      className={`text-sm font-extrabold ${
                        h.open ? "text-brand-700" : "text-rose-500"
                      }`}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Addresses */}
            {site.locations.map((loc) => (
              <div
                key={loc.city}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70"
              >
                <span className="mt-0.5 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-100 text-brand-700">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-brand-950">
                    {loc.city} Clinic
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {loc.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-block text-xs font-bold text-brand-600 hover:text-brand-800"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-200/70 lg:col-span-3">
            <iframe
              title="NewWay Orthodontic — Sector 9-D, Chandigarh on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.locations[0].mapQuery)}&output=embed`}
              className="h-full min-h-[420px] w-full lg:min-h-[640px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
