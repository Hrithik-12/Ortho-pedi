export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p
        className={`mb-3 text-xs font-extrabold uppercase tracking-[0.2em] ${
          light ? "text-brand-300" : "text-brand-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-brand-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-brand-100/80" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
