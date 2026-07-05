import Image from "next/image";
import { doctors } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Meet Our Specialists"
          title="Doctors Who Care Beyond the Chair"
          subtitle="A team of post-graduate specialists trained at PGIMER Chandigarh and AIIMS — leaders in orthodontics, prosthodontics and craniofacial pain."
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc) => (
            <article
              key={doc.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70 transition-shadow hover:shadow-xl hover:shadow-brand-900/10"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={doc.image}
                  alt={`${doc.name} — ${doc.role}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-brand-950">{doc.name}</h3>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-wide text-brand-600">
                  {doc.credentials}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-700">{doc.role}</p>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-500">{doc.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
