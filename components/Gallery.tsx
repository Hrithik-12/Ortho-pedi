"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryCases, type GalleryCase } from "@/lib/data";
import SectionHeading from "./SectionHeading";

function BeforeAfterCard({ item }: { item: GalleryCase }) {
  const [pos, setPos] = useState(50);

  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/70">
      <div className="relative aspect-[4/3] select-none">
        {/* After (base layer) */}
        <Image
          src={item.after}
          alt={`${item.title} — after treatment`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
          draggable={false}
        />
        {/* Before (clipped layer) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.title} — before treatment`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Divider handle */}
        <div
          aria-hidden
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-lg">
            <svg viewBox="0 0 24 24" fill="none" stroke="#0e7490" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
            </svg>
          </span>
        </div>

        {/* Slider input overlay */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Compare before and after — ${item.title}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />

        <span className="absolute left-4 top-4 z-10 rounded-full bg-brand-950/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute right-4 top-4 z-10 rounded-full bg-mint-500/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          After
        </span>
      </div>

      <div className="flex items-center justify-between p-5">
        <div>
          <h3 className="text-base font-extrabold text-brand-950">{item.title}</h3>
          <p className="mt-0.5 text-xs font-semibold text-slate-500">{item.treatment}</p>
        </div>
        <span className="rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold text-brand-800">
          {item.duration}
        </span>
      </div>
    </article>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Smile Gallery"
          title="Real Transformations, Real Confidence"
          subtitle="Drag the slider to compare. Representative images shown — actual patient results are available at the clinic on request."
        />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {galleryCases.map((item) => (
            <BeforeAfterCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
