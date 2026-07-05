import Image from "next/image";
import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./Icons";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Loved by Patients Across the Tricity"
          subtitle="Hundreds of five-star reviews — here's what a few of our patients have to say about their NewWay experience."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200/70 transition-shadow hover:shadow-lg hover:shadow-brand-900/5"
            >
              <div className="flex text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
                <span className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-brand-950">{t.name}</p>
                  <p className="text-xs font-semibold text-brand-600">{t.treatment}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
