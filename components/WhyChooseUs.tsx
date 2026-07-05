import { whyChooseUs } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { CheckIcon } from "./Icons";

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          light
          eyebrow="Why NewWay"
          title="The Tricity's Most Trusted Smile Team"
          subtitle="Specialist expertise, honest pricing and technology you won't find anywhere else in the region."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint-500 text-white">
                <CheckIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-brand-100/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
