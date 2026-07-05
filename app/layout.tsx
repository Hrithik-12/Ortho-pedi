import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NewWay Orthodontic | Best Dental & Orthodontic Clinic in Chandigarh & Mohali",
  description:
    "NewWay – Centre for Craniofacial Pain and Orthodontia. Tricity's only Black Diamond Invisalign Provider. Braces, Invisalign, dental implants, teeth whitening, root canal & pediatric dentistry in Chandigarh & Mohali. Book your appointment today.",
  keywords: [
    "dentist Chandigarh",
    "orthodontist Mohali",
    "Invisalign Chandigarh",
    "braces",
    "dental implants",
    "teeth whitening",
    "root canal",
  ],
  openGraph: {
    title: "NewWay Orthodontic — Changing Lives One Smile At A Time",
    description:
      "Tricity's only Black Diamond Invisalign Provider. World-class dental care in Chandigarh & Mohali.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
