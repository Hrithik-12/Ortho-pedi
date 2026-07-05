export const site = {
  name: "NewWay Orthodontic",
  fullName: "NewWay – Centre for Craniofacial Pain and Orthodontia",
  tagline: "Changing Lives One Smile At A Time!",
  phone: "+919942290003",
  phoneDisplay: "(+91) 994-229-0003",
  altPhones: ["(+91) 958-000-0010", "(+91) 985-200-0010"],
  email: "newwayorthodontic@gmail.com",
  whatsapp: "919942290003",
  whatsappMessage:
    "Hello! I would like to book an appointment at NewWay Orthodontic.",
  locations: [
    {
      city: "Chandigarh",
      address: "SCF 17, Inner Market, Sector 9-D, Chandigarh",
      mapQuery: "SCF 17, Inner Market, Sector 9-D, Chandigarh",
    },
    {
      city: "Mohali",
      address: "SCF 35-36, Phase 3B2, Mohali",
      mapQuery: "SCF 35-36, Phase 3B2, Mohali",
    },
  ],
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 7:30 PM", open: true },
    { days: "Sunday", time: "Closed", open: false },
  ],
};

export const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "1000+", label: "Implants Placed" },
  { value: "5000+", label: "Smiles Transformed" },
  { value: "2", label: "Clinic Locations" },
];

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  image: string;
  icon: string;
};

export const treatments: Treatment[] = [
  {
    slug: "braces",
    title: "Braces & Orthodontics",
    short: "Precision teeth alignment with modern metal and ceramic braces.",
    description:
      "From traditional metal braces to discreet ceramic options, our PGIMER-trained orthodontists design personalised treatment plans that straighten teeth, correct bites and transform smiles at every age.",
    points: ["Metal & ceramic options", "Self-ligating systems", "All age groups"],
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80&auto=format&fit=crop",
    icon: "M12 3c-4.97 0-9 3.58-9 8s4.03 8 9 8 9-3.58 9-8-4.03-8-9-8zm-4 8h2m2 0h2m2 0h2",
  },
  {
    slug: "invisalign",
    title: "Invisalign® Clear Aligners",
    short: "Nearly invisible aligners from Tricity's only Black Diamond provider.",
    description:
      "As the Tricity's only Black Diamond Invisalign Provider, we deliver world-class clear aligner therapy — removable, comfortable and virtually invisible, with digitally planned results you can preview before you start.",
    points: ["Black Diamond provider", "3D digital smile preview", "Removable & comfortable"],
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80&auto=format&fit=crop",
    icon: "M4 13c0-4.42 3.58-8 8-8s8 3.58 8 8M4 13c0 3.31 3.58 6 8 6s8-2.69 8-6M4 13h16",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    short: "Lunos® whitening — up to 8 shades brighter in a single hour.",
    description:
      "Our advanced Lunos teeth whitening system safely lifts years of stains in one comfortable visit, brightening your smile by up to 8 shades in just 60 minutes.",
    points: ["8 shades in 1 hour", "Enamel-safe formula", "Instant, lasting results"],
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=900&q=80&auto=format&fit=crop",
    icon: "M12 3v2m0 14v2m9-9h-2M5 12H3m14.5-6.5l-1.4 1.4M7.9 16.1l-1.4 1.4m0-11l1.4 1.4m8.2 8.2l1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    short: "Same-day implants — over 1000 successfully placed.",
    description:
      "Replace missing teeth permanently with same-day dental implants. With over 1000 implants placed, our surgical team restores function and aesthetics with titanium-grade precision.",
    points: ["Same-day placement", "1000+ implants placed", "Lifetime-grade materials"],
    icon: "M12 3l2 4h-4l2-4zm-3 6h6l-1 8a2 2 0 01-4 0l-1-8z",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80&auto=format&fit=crop",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    short: "Gentle, friendly dental care designed for growing smiles.",
    description:
      "From first check-ups to fluoride therapy and pit & fissure sealants, we make dentistry fun and fear-free so children build healthy habits that last a lifetime.",
    points: ["Child-friendly environment", "Fluoride & sealants", "Habit counselling"],
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80&auto=format&fit=crop",
    icon: "M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0M12 3a9 9 0 100 18 9 9 0 000-18z",
  },
  {
    slug: "root-canal",
    title: "Painless Root Canal",
    short: "Single-visit, pain-free root canal treatment that saves your tooth.",
    description:
      "Using rotary endodontics and modern anaesthesia, we complete most root canals in a single comfortable visit — relieving pain while preserving your natural tooth.",
    points: ["Single-visit protocol", "Rotary endodontics", "Truly painless"],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80&auto=format&fit=crop",
    icon: "M12 3C9 3 7 5 7 8c0 2 1 3 1 5s-1 6 1 6 1.5-4 3-4 1 4 3 4 1-4 1-6 1-3 1-5c0-3-2-5-5-5z",
  },
  {
    slug: "veneers",
    title: "Dental Veneers",
    short: "Ultra-thin porcelain shells for a flawless, natural-looking smile.",
    description:
      "Custom-crafted porcelain veneers correct chips, gaps and discolouration — a minimally invasive route to a red-carpet smile designed around your facial aesthetics.",
    points: ["Custom shade matching", "Minimally invasive", "Stain-resistant porcelain"],
    image:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&q=80&auto=format&fit=crop",
    icon: "M4 8c0-2 2-4 4-4h8c2 0 4 2 4 4v8c0 2-2 4-4 4H8c-2 0-4-2-4-4V8z",
  },
  {
    slug: "crowns-bridges",
    title: "Crowns & Bridges",
    short: "Durable, natural-looking restorations for damaged or missing teeth.",
    description:
      "Restore strength and beauty with precision-milled crowns and bridges. We use high-grade ceramics and digital impressions for a perfect, comfortable fit.",
    points: ["Digital impressions", "High-grade ceramics", "Perfect colour match"],
    image:
      "https://images.unsplash.com/photo-1524660988542-c440de9c0fde?w=900&q=80&auto=format&fit=crop",
    icon: "M5 7l2 12h10l2-12M5 7l3.5 3L12 6l3.5 4L19 7M5 7l7-4 7 4",
  },
  {
    slug: "emergency-care",
    title: "Emergency Dental Care",
    short: "Prompt relief for dental pain, trauma and urgent problems.",
    description:
      "Knocked-out tooth, severe toothache or broken restoration? Our team prioritises dental emergencies with same-day appointments to get you out of pain fast.",
    points: ["Same-day appointments", "Trauma management", "Rapid pain relief"],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format&fit=crop",
    icon: "M12 8v4m0 4h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z",
  },
];

export type Doctor = {
  name: string;
  credentials: string;
  role: string;
  bio: string;
  image: string;
};

export const doctors: Doctor[] = [
  {
    name: "Dr. Sombir Singh",
    credentials: "MDS (Orthodontics), PGIMER Chandigarh",
    role: "Chief Orthodontist & Black Diamond Invisalign Provider",
    bio: "Trained at AIIMS and PGI, Dr. Sombir specialises in craniofacial pain management and complex orthodontics, and leads the Tricity's only Black Diamond Invisalign practice.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Dr. Neeraj Yadav",
    credentials: "MDS (Orthodontics), PGIMER Chandigarh",
    role: "Orthodontist",
    bio: "An expert in fixed appliances and clear aligner therapy, Dr. Neeraj is known for meticulous finishing and a calm, patient-first chairside manner.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Dr. Himani Soni",
    credentials: "BDS, MDS (Prosthodontics)",
    role: "Prosthodontist",
    bio: "Dr. Himani restores smiles with crowns, bridges, dentures and full-mouth rehabilitation — combining artistry with advanced digital dentistry.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Dr. Jasdeep Kaur",
    credentials: "MDS (Orthodontics), PGIMER Chandigarh",
    role: "Orthodontist",
    bio: "With a special interest in early interceptive orthodontics, Dr. Jasdeep helps children and teens achieve healthy bites before problems grow.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=80&auto=format&fit=crop",
  },
];

export type GalleryCase = {
  title: string;
  treatment: string;
  duration: string;
  before: string;
  after: string;
};

export const galleryCases: GalleryCase[] = [
  {
    title: "Crowding Correction",
    treatment: "Invisalign Clear Aligners",
    duration: "14 months",
    before:
      "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Smile Makeover",
    treatment: "Veneers + Whitening",
    duration: "3 weeks",
    before:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80&auto=format&fit=crop",
  },
  {
    title: "Full Arch Restoration",
    treatment: "Same-Day Implants",
    duration: "1 day",
    before:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1541604193435-22287d32c2c2?w=800&q=80&auto=format&fit=crop",
  },
];

export type Testimonial = {
  name: string;
  treatment: string;
  quote: string;
  image: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Anshul Hooda",
    treatment: "Invisalign Treatment",
    quote:
      "An exceptional experience with Dr. Sombir and his assistant, Dr. Neeraj. Every visit was on time, every step was explained clearly, and my smile has completely transformed.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Kuldip Singh",
    treatment: "Dental Implants",
    quote:
      "I recently visited NewWay Orthodontic and I must say it was an exceptional experience. The same-day implant procedure was painless and the team made me feel completely at ease.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    treatment: "Teeth Whitening",
    quote:
      "Eight shades brighter in one sitting — I couldn't believe it! The clinic is spotless, the staff is warm, and Dr. Himani is a true perfectionist. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    treatment: "Braces",
    quote:
      "Two years of braces flew by thanks to the friendly team. My bite is perfect now and the pricing was transparent from day one. Worth every rupee.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Simran Kaur",
    treatment: "Pediatric Dentistry",
    quote:
      "My 6-year-old actually looks forward to dental visits now! Dr. Jasdeep has a magical way with kids. The clinic feels more like a friendly space than a hospital.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Amit Verma",
    treatment: "Root Canal",
    quote:
      "I dreaded the root canal for months — it was over in one painless visit. Genuinely world-class equipment and a doctor who explains everything. Thank you, NewWay!",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&q=80&auto=format&fit=crop",
    rating: 5,
  },
];

export const whyChooseUs = [
  {
    title: "Black Diamond Invisalign Provider",
    text: "The only clinic in the Tricity with Invisalign's highest provider tier — proof of thousands of successful aligner cases.",
  },
  {
    title: "PGIMER & AIIMS Trained Specialists",
    text: "Every treatment is planned and performed by post-graduate specialists trained at India's premier institutes.",
  },
  {
    title: "Same-Day Dentistry",
    text: "Same-day implants, single-visit root canals and 1-hour whitening — designed around your schedule.",
  },
  {
    title: "Craniofacial Pain Centre",
    text: "Dedicated expertise in TMJ disorders and craniofacial pain that few clinics in the region offer.",
  },
  {
    title: "Cutting-Edge Technology",
    text: "Digital impressions, 3D treatment previews, rotary endodontics and Lunos whitening under one roof.",
  },
  {
    title: "Anxiety-Free Experience",
    text: "Gentle techniques and a calm environment, with special care for nervous patients and children.",
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#doctors", label: "Doctors" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];
