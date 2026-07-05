import { site } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`tel:${site.phone}`}
        aria-label={`Call NewWay Orthodontic at ${site.phoneDisplay}`}
        className="grid h-13 w-13 place-items-center rounded-full bg-brand-700 text-white shadow-lg shadow-brand-900/30 transition-transform hover:scale-105 lg:hidden"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NewWay Orthodontic on WhatsApp"
        className="grid h-13 w-13 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/30 transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
