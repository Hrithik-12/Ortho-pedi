import Image from "next/image";
import { site, treatments } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { ArrowRightIcon, CheckIcon } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Care for Every Smile"
          subtitle="From braces and Invisalign to implants and emergency care — every treatment performed by post-graduate specialists using cutting-edge technology."
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <article
              key={t.slug}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70 transition-shadow hover:shadow-xl hover:shadow-brand-900/10"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-lg font-extrabold text-white drop-shadow">
                  {t.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-slate-600">{t.description}</p>
                <ul className="mt-4 space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                      <CheckIcon className="h-3.5 w-3.5 shrink-0 text-mint-500" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Hello! I would like to know more about ${t.title} at NewWay Orthodontic.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 border-t border-slate-100 pt-4 text-sm font-bold text-brand-700 transition-colors hover:text-brand-900"
                >
                  Enquire about this treatment
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
