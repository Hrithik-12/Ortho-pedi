import Image from "next/image";
import { site, stats } from "@/lib/data";
import { CheckIcon, PhoneIcon, StarIcon, WhatsAppIcon } from "./Icons";

const highlights = [
  "Black Diamond Invisalign® Provider",
  "Same-Day Dental Implants",
  "Painless, Anxiety-Free Dentistry",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-32 lg:pt-40">
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-mint-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-2 lg:pb-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-bold text-brand-800 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-mint-500" />
            Centre for Craniofacial Pain &amp; Orthodontia
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-950 sm:text-5xl lg:text-[3.4rem]">
            Changing Lives{" "}
            <span className="text-brand-600">One Smile</span> At A Time
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            World-class orthodontic and dental care in Chandigarh &amp; Mohali.
            PGIMER-trained specialists, cutting-edge technology and personalised
            treatment plans — designed around you.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint-100 text-mint-600">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-700/25 transition-colors hover:bg-brand-800"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              Book an Appointment
            </a>
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-200 bg-white px-7 py-3.5 text-sm font-bold text-brand-800 transition-colors hover:border-brand-400 hover:bg-brand-50"
            >
              <PhoneIcon className="h-4.5 w-4.5" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-brand-900/20 sm:aspect-[5/5]">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=85&auto=format&fit=crop"
              alt="Orthodontist treating a patient at NewWay Orthodontic clinic"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Floating rating card */}
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 shadow-xl shadow-brand-900/10 sm:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-sm font-extrabold text-brand-950">4.9 / 5</p>
            </div>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Rated by 500+ happy patients on Google
            </p>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-5 -right-3 rounded-2xl bg-brand-900 px-5 py-3.5 text-white shadow-xl sm:-right-6">
            <p className="text-xl font-extrabold leading-none">1000+</p>
            <p className="mt-1 text-[11px] font-medium text-brand-200">
              Implants Placed
            </p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative bg-brand-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
