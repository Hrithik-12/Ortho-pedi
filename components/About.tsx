import Image from "next/image";
import { site } from "@/lib/data";
import { CheckIcon, MapPinIcon, ShieldIcon } from "./Icons";

const aboutPoints = [
  "Post-graduate specialists from PGIMER Chandigarh & AIIMS",
  "Dedicated centre for TMJ disorders & craniofacial pain",
  "Digital smile design with 3D treatment previews",
  "Strict international sterilisation protocols",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Images */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl shadow-brand-900/10">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1100&q=85&auto=format&fit=crop"
              alt="Modern treatment room at NewWay Orthodontic"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block lg:-right-8">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80&auto=format&fit=crop"
                alt="State-of-the-art dental equipment"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -top-5 -left-3 grid h-16 w-16 place-items-center rounded-2xl bg-mint-500 text-white shadow-lg lg:-left-6">
            <ShieldIcon className="h-8 w-8" />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-600">
            About the Clinic
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">
            World-Class Dental Care, <br className="hidden sm:block" />
            Right Here in the Tricity
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            {site.name} is a specialist-led practice offering the complete
            spectrum of dental care — from advanced orthodontics and Invisalign
            to implants, cosmetic dentistry and craniofacial pain management.
            Every treatment plan is personalised, precise and built around your
            comfort, with special care for anxious patients.
          </p>

          <ul className="mt-7 space-y-3.5">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-semibold text-slate-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {site.locations.map((loc) => (
              <div
                key={loc.city}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
              >
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-700 text-white">
                  <MapPinIcon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-brand-950">{loc.city}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    {loc.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
