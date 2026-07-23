import { Category, Product, CompanyInfo, Partner, TeamMember, NewsArticle, Statistic, Feature, Testimonial } from "@/types";

export const companyInfo: CompanyInfo = {
  name: "Alvor Healthcare",
  tagline: "Advancing Health Through Innovation",
  mission: "To improve the quality of life for patients worldwide by developing, manufacturing, and delivering innovative, high-quality, and affordable pharmaceutical products that meet the highest standards of safety and efficacy.",
  vision: "To be a globally recognized leader in the pharmaceutical industry, known for our unwavering commitment to quality, innovation, and patient-centric care.",
  foundedYear: 1998,
  experienceYears: 26,
  productsCount: 52,
  countriesServed: 45,
  certifications: [
    {
      id: "who-gmp",
      name: "WHO GMP Certified",
      logo: "/images/certifications/who-gmp.svg",
      description: "World Health Organization Good Manufacturing Practices certification ensuring international quality standards.",
      yearObtained: 2005,
      validUntil: "2026-12-31",
    },
    {
      id: "iso-9001",
      name: "ISO 9001:2015",
      logo: "/images/certifications/iso-9001.svg",
      description: "International quality management system certification.",
      yearObtained: 2010,
      validUntil: "2027-06-15",
    },
    {
      id: "fda",
      name: "FDA Registered Facility",
      logo: "/images/certifications/fda.svg",
      description: "US Food and Drug Administration registered manufacturing facility.",
      yearObtained: 2012,
    },
    {
      id: "ema",
      name: "EMA Compliant",
      logo: "/images/certifications/ema.svg",
      description: "European Medicines Agency regulatory compliance.",
      yearObtained: 2015,
    },
    {
      id: "halal",
      name: "Halal Certified",
      logo: "/images/certifications/halal.svg",
      description: "Halal certification for pharmaceutical products.",
      yearObtained: 2018,
      validUntil: "2026-03-20",
    },
    {
      id: "green",
      name: "Green Manufacturing",
      logo: "/images/certifications/green.svg",
      description: "Environmentally sustainable manufacturing practices certification.",
      yearObtained: 2020,
      validUntil: "2026-09-10",
    },
  ],
  manufacturingCapabilities: [
    "Tablet Compression (Single & Multi-layer)",
    "Hard & Soft Gelatin Capsule Filling",
    "Liquid & Syrup Manufacturing",
    "Sterile Injectable Production (Ampoules, Vials, Pre-filled Syringes)",
    "Nutraceutical & Supplement Production",
    "Blister, Strip, & Bottle Packaging Lines",
    "Quality Control & Analytical Testing Labs",
    "Stability Chambers (ICH Conditions)",
    "Cleanroom Class A/B/C/D Facilities",
    "Continuous Manufacturing Technology",
  ],
  qualityStandards: [
    "ICH Q7/Q9/Q10 Guidelines Compliance",
    "Pharmacopoeia Standards (USP, BP, EP, JP, IP)",
    "21 CFR Part 11 Electronic Records",
    "Data Integrity (ALCOA+ Principles)",
    "Vendor Qualification & Audit Program",
    "Annual Product Quality Reviews (APQR)",
    "Change Control & Deviation Management",
    "CAPA System with Root Cause Analysis",
  ],
  contact: {
    address: "123 Healthcare Boulevard",
    city: "New York",
    state: "NY",
    country: "USA",
    postalCode: "10001",
    phone: "+1 (800) 555-0123",
    email: "info@alvorhealthcare.com",
    fax: "+1 (212) 555-0124",
    whatsapp: "+1 (800) 555-0123",
    workingHours: "Mon-Fri: 8:00 AM - 6:00 PM EST",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.123456789!2d-74.001234!3d40.712345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a123456789%3A0x123456789abcdef!2s123%20Healthcare%20Blvd%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1234567890",
  },
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/company/alvorhealthcare", icon: "linkedin" },
    { platform: "Twitter", url: "https://twitter.com/alvorhealthcare", icon: "twitter" },
    { platform: "Facebook", url: "https://facebook.com/alvorhealthcare", icon: "facebook" },
    { platform: "Instagram", url: "https://instagram.com/alvorhealthcare", icon: "instagram" },
    { platform: "YouTube", url: "https://youtube.com/@alvorhealthcare", icon: "youtube" },
  ],
};

export const categories: Category[] = [
  {
    id: "tablets",
    slug: "tablets",
    name: "Tablets",
    description: "Solid oral dosage forms including immediate release, extended release, and effervescent tablets.",
    icon: "tablet",
    image: "/images/categories/tablets.svg",
    productCount: 18,
    featured: true,
    order: 1,
    subCategories: [
      { id: "immediate-release", slug: "immediate-release", name: "Immediate Release", description: "Standard release tablets", productCount: 8 },
      { id: "extended-release", slug: "extended-release", name: "Extended Release", description: "Controlled release formulations", productCount: 5 },
      { id: "effervescent", slug: "effervescent", name: "Effervescent", description: "Fast-dissolving tablets", productCount: 3 },
      { id: "chewable", slug: "chewable", name: "Chewable", description: "Chewable tablets for easy administration", productCount: 2 },
    ],
  },
  {
    id: "capsules",
    slug: "capsules",
    name: "Capsules",
    description: "Hard and soft gelatin capsules for precise dosing and improved bioavailability.",
    icon: "capsule",
    image: "/images/categories/capsules.svg",
    productCount: 12,
    featured: true,
    order: 2,
    subCategories: [
      { id: "hard-gelatin", slug: "hard-gelatin", name: "Hard Gelatin", description: "Two-piece hard capsules", productCount: 7 },
      { id: "soft-gelatin", slug: "soft-gelatin", name: "Soft Gelatin", description: "Softgel capsules for liquids", productCount: 3 },
      { id: "enteric-coated", slug: "enteric-coated", name: "Enteric Coated", description: "Delayed release capsules", productCount: 2 },
    ],
  },
  {
    id: "syrups",
    slug: "syrups",
    name: "Syrups",
    description: "Palatable liquid formulations for pediatric and geriatric patients.",
    icon: "droplets",
    image: "/images/categories/syrups.svg",
    productCount: 8,
    featured: true,
    order: 3,
    subCategories: [
      { id: "pediatric", slug: "pediatric", name: "Pediatric Syrups", description: "Child-friendly formulations", productCount: 4 },
      { id: "adult", slug: "adult", name: "Adult Syrups", description: "Standard liquid formulations", productCount: 3 },
      { id: "sugar-free", slug: "sugar-free", name: "Sugar-Free", description: "Diabetic-friendly syrups", productCount: 1 },
    ],
  },
  {
    id: "injections",
    slug: "injections",
    name: "Injections",
    description: "Sterile parenteral formulations including ampoules, vials, and pre-filled syringes.",
    icon: "syringe",
    image: "/images/categories/injections.svg",
    productCount: 7,
    featured: true,
    order: 4,
    subCategories: [
      { id: "ampoules", slug: "ampoules", name: "Ampoules", description: "Glass ampoule packaging", productCount: 3 },
      { id: "vials", slug: "vials", name: "Vials", description: "Single and multi-dose vials", productCount: 2 },
      { id: "prefilled", slug: "prefilled", name: "Pre-filled Syringes", description: "Ready-to-use syringes", productCount: 2 },
    ],
  },
  {
    id: "supplements",
    slug: "supplements",
    name: "Supplements",
    description: "Nutraceuticals, vitamins, minerals, and dietary supplements for health maintenance.",
    icon: "pill",
    image: "/images/categories/supplements.svg",
    productCount: 7,
    featured: false,
    order: 5,
    subCategories: [
      { id: "vitamins", slug: "vitamins", name: "Vitamins", description: "Essential vitamin supplements", productCount: 3 },
      { id: "minerals", slug: "minerals", name: "Minerals", description: "Essential mineral supplements", productCount: 2 },
      { id: "herbal", slug: "herbal", name: "Herbal Extracts", description: "Standardized herbal formulations", productCount: 2 },
    ],
  },
];

export const statistics: Statistic[] = [
  { label: "Years of Excellence", value: 26, suffix: "+", icon: "award", animationDelay: 0 },
  { label: "Products Worldwide", value: 52, suffix: "+", icon: "package", animationDelay: 0.1 },
  { label: "Countries Served", value: 45, suffix: "+", icon: "globe", animationDelay: 0.2 },
  { label: "Certifications", value: 6, suffix: "", icon: "shield-check", animationDelay: 0.3 },
  { label: "Manufacturing Facilities", value: 3, suffix: "", icon: "factory", animationDelay: 0.4 },
  { label: "R&D Scientists", value: 120, suffix: "+", icon: "flask-conical", animationDelay: 0.5 },
];

export const features: Feature[] = [
  {
    icon: "shield-check",
    title: "WHO GMP Certified",
    description: "All products manufactured in WHO GMP certified facilities ensuring international quality standards.",
  },
  {
    icon: "flask-conical",
    title: "Advanced R&D",
    description: "State-of-the-art research center with 120+ scientists driving pharmaceutical innovation.",
  },
  {
    icon: "truck",
    title: "Global Distribution",
    description: "Efficient supply chain serving 45+ countries with temperature-controlled logistics.",
  },
  {
    icon: "leaf",
    title: "Sustainable Practices",
    description: "Green manufacturing with reduced carbon footprint and eco-friendly packaging.",
  },
  {
    icon: "users",
    title: "Patient Centric",
    description: "Focused on improving patient outcomes through affordable and accessible medications.",
  },
  {
    icon: "award",
    title: "Regulatory Excellence",
    description: "Compliance with FDA, EMA, WHO, and local regulatory requirements worldwide.",
  },
];

export const partners: Partner[] = [
  { id: "p1", name: "World Health Organization", logo: "/images/partners/who.svg", website: "https://who.int", category: "regulatory" },
  { id: "p2", name: "CVS Health", logo: "/images/partners/cvs.svg", website: "https://cvshealth.com", category: "pharmacy" },
  { id: "p3", name: "Walgreens Boots Alliance", logo: "/images/partners/walgreens.svg", website: "https://walgreensbootsalliance.com", category: "pharmacy" },
  { id: "p4", name: "McKesson Corporation", logo: "/images/partners/mckesson.svg", website: "https://mckesson.com", category: "distributor" },
  { id: "p5", name: "Cardinal Health", logo: "/images/partners/cardinal.svg", website: "https://cardinalhealth.com", category: "distributor" },
  { id: "p6", name: "Mayo Clinic", logo: "/images/partners/mayo.svg", website: "https://mayoclinic.org", category: "hospital" },
  { id: "p7", name: "Cleveland Clinic", logo: "/images/partners/cleveland.svg", website: "https://clevelandclinic.org", category: "hospital" },
  { id: "p8", name: "NIH", logo: "/images/partners/nih.svg", website: "https://nih.gov", category: "research" },
  { id: "p9", name: "FDA", logo: "/images/partners/fda.svg", website: "https://fda.gov", category: "regulatory" },
  { id: "p10", name: "EMA", logo: "/images/partners/ema.svg", website: "https://ema.europa.eu", category: "regulatory" },
  { id: "p11", name: "AmerisourceBergen", logo: "/images/partners/amerisource.svg", website: "https://amerisourcebergen.com", category: "distributor" },
  { id: "p12", name: "Kaiser Permanente", logo: "/images/partners/kaiser.svg", website: "https://kaiserpermanente.org", category: "hospital" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "t1",
    name: "Dr. Sarah Mitchell",
    role: "Chief Executive Officer",
    bio: "Pharmaceutical industry veteran with 30+ years of experience leading global healthcare organizations.",
    image: "/images/team/sarah-mitchell.svg",
    linkedin: "https://linkedin.com/in/sarahmitchell",
  },
  {
    id: "t2",
    name: "Dr. James Chen",
    role: "Chief Scientific Officer",
    bio: "Renowned pharmacologist with 50+ peer-reviewed publications and multiple patent holdings.",
    image: "/images/team/james-chen.svg",
    linkedin: "https://linkedin.com/in/jameschen",
  },
  {
    id: "t3",
    name: "Maria Rodriguez",
    role: "Chief Operating Officer",
    bio: "Operations expert with extensive experience in global pharmaceutical manufacturing and supply chain.",
    image: "/images/team/maria-rodriguez.svg",
    linkedin: "https://linkedin.com/in/mariarodriguez",
  },
  {
    id: "t4",
    name: "Dr. Robert Kim",
    role: "Chief Medical Officer",
    bio: "Board-certified physician leading clinical development and medical affairs strategy.",
    image: "/images/team/robert-kim.svg",
    linkedin: "https://linkedin.com/in/robertkim",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test1",
    name: "Dr. Emily Watson",
    role: "Chief of Pharmacy",
    company: "Metropolitan Hospital",
    content: "Alvor Healthcare's products consistently meet our stringent quality standards. Their reliable supply chain and comprehensive documentation make them a preferred partner.",
    image: "/images/testimonials/emily-watson.svg",
    rating: 5,
  },
  {
    id: "test2",
    name: "James Patterson",
    role: "Procurement Director",
    company: "National Pharmacy Chain",
    content: "We've partnered with Alvor for over a decade. Their commitment to quality, competitive pricing, and exceptional customer service sets them apart in the industry.",
    image: "/images/testimonials/james-patterson.svg",
    rating: 5,
  },
  {
    id: "test3",
    name: "Dr. Michael Torres",
    role: "Medical Director",
    company: "Regional Health System",
    content: "The therapeutic efficacy of Alvor's products is evident in our patient outcomes. Their portfolio breadth allows us to consolidate vendors without compromising quality.",
    image: "/images/testimonials/michael-torres.svg",
    rating: 5,
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "n1",
    slug: "alvor-launches-new-cardiovascular-drug",
    title: "Alvor Healthcare Launches Innovative Cardiovascular Medication",
    excerpt: "New extended-release formulation shows improved patient adherence and outcomes in clinical trials.",
    content: "Full article content here...",
    author: "Corporate Communications",
    publishDate: "2025-01-15",
    category: "product-launch",
    featuredImage: "/images/news/cardio-launch.svg",
    tags: ["cardiovascular", "new-product", "clinical-trials"],
    featured: true,
    readTime: 5,
  },
  {
    id: "n2",
    slug: "who-gmp-recertification-2025",
    title: "Alvor Healthcare Achieves WHO GMP Recertification",
    excerpt: "Manufacturing facilities pass rigorous inspection with zero critical observations.",
    content: "Full article content here...",
    author: "Quality Assurance Team",
    publishDate: "2025-01-10",
    category: "announcement",
    featuredImage: "/images/news/gmp-recert.svg",
    tags: ["quality", "certification", "manufacturing"],
    featured: true,
    readTime: 3,
  },
  {
    id: "n3",
    slug: "expansion-into-southeast-asia",
    title: "Alvor Healthcare Expands Operations into Southeast Asia",
    excerpt: "New distribution partnerships established in 6 countries to improve medication access.",
    content: "Full article content here...",
    author: "Business Development",
    publishDate: "2025-01-05",
    category: "announcement",
    featuredImage: "/images/news/asia-expansion.svg",
    tags: ["expansion", "global-health", "partnerships"],
    featured: false,
    readTime: 4,
  },
];

const therapeuticCategories = [
  "cardiovascular",
  "neurology",
  "gastroenterology",
  "respiratory",
  "anti-infective",
  "pain-management",
  "endocrinology",
  "dermatology",
  "oncology",
  "psychiatry",
];

const compositions = [
  "Paracetamol 500mg",
  "Ibuprofen 400mg",
  "Amoxicillin 500mg",
  "Omeprazole 20mg",
  "Metformin 500mg",
  "Atorvastatin 20mg",
  "Amlodipine 5mg",
  "Losartan 50mg",
  "Cetirizine 10mg",
  "Vitamin D3 1000 IU",
  "Vitamin B12 500mcg",
  "Iron 65mg + Folic Acid 1mg",
  "Calcium 500mg + Vitamin D3 400 IU",
  "Omega-3 1000mg",
  "CoQ10 100mg",
  "Probiotic 10 Billion CFU",
  "Melatonin 5mg",
  "Glucosamine 1500mg + Chondroitin 1200mg",
];

const productNames = [
  "AlvorPar 500", "AlvorFen 400", "AlvorCillin 500", "AlvorPrazole 20",
  "AlvorFormin 500", "AlvorStatin 20", "AlvorDipine 5", "AlvorSartan 50",
  "AlvorZine 10", "AlvorD3 1000", "AlvorB12 500", "AlvorIron Plus",
  "AlvorCal-D", "AlvorOmega", "AlvorQ10", "AlvorBiotic",
  "AlvorMel", "AlvorJoint", "AlvorCold Relief", "AlvorAllergy",
  "AlvorGastric", "AlvorBP Control", "AlvorSugar Balance", "AlvorCholest",
  "AlvorPain Away", "AlvorFever Down", "AlvorCough Syrup", "AlvorVitamin Complex",
  "AlvorMineral Plus", "AlvorHerbal Calm", "AlvorEnergy Boost", "AlvorImmune Support",
  "AlvorBone Health", "AlvorHeart Care", "AlvorMind Focus", "AlvorSkin Glow",
  "AlvorEye Care", "AlvorLiver Detox", "AlvorKidney Support", "AlvorThyroid Balance",
  "AlvorHormone Harmony", "AlvorSleep Well", "AlvorStress Relief", "AlvorDigest Plus",
  "AlvorProbiotic Plus", "AlvorAntioxidant", "AlvorCollagen", "AlvorBiotin",
  "AlvorZinc Plus", "AlvorMagnesium", "AlvorPotassium", "AlvorMulti Complete",
];

const descriptions = [
  "Effective relief from pain and fever with rapid onset of action.",
  "Anti-inflammatory medication for pain, swelling, and joint stiffness.",
  "Broad-spectrum antibiotic for bacterial infections.",
  "Proton pump inhibitor for acid reflux and stomach ulcers.",
  "First-line treatment for type 2 diabetes mellitus.",
  "Statin medication for lowering cholesterol levels.",
  "Calcium channel blocker for hypertension management.",
  "Angiotensin II receptor blocker for blood pressure control.",
  "Non-drowsy antihistamine for allergy relief.",
  "Essential vitamin for bone health and immune function.",
  "Vital nutrient for nerve function and red blood cell formation.",
  "Combination supplement for iron deficiency anemia prevention.",
  "Bone health supplement with optimal calcium and vitamin D ratio.",
  "High-purity omega-3 fatty acids for cardiovascular health.",
  "Coenzyme Q10 for cellular energy production and heart health.",
  "Multi-strain probiotic for digestive and immune health.",
  "Natural sleep aid for occasional sleeplessness.",
  "Joint health formula with glucosamine and chondroitin.",
  "Multi-symptom cold and flu relief formula.",
  "24-hour allergy relief without drowsiness.",
  "Fast-acting antacid for heartburn and indigestion.",
  "Comprehensive blood pressure management formula.",
  "Blood sugar support with natural ingredients.",
  "Cholesterol management with plant sterols.",
  "Rapid pain relief for headaches and muscle aches.",
  "Fever reducer for adults and children.",
  "Soothing cough syrup for dry and productive cough.",
  "Complete daily vitamin and mineral complex.",
  "Essential minerals for overall health maintenance.",
  "Herbal formula for relaxation and stress relief.",
  "Natural energy booster with B-vitamins and adaptogens.",
  "Immune system support with vitamins, zinc, and elderberry.",
  "Bone density support with calcium, D3, K2, and magnesium.",
  "Cardiovascular health with CoQ10, omega-3, and antioxidants.",
  "Cognitive function support with nootropics and vitamins.",
  "Skin health formula with collagen, biotin, and antioxidants.",
  "Eye health with lutein, zeaxanthin, and vitamins.",
  "Liver support with milk thistle, NAC, and antioxidants.",
  "Kidney health with cranberry, D-mannose, and herbs.",
  "Thyroid function support with selenium, iodine, and zinc.",
  "Hormonal balance support for women's health.",
  "Natural sleep formula with melatonin, magnesium, and herbs.",
  "Stress management with adaptogens and B-vitamins.",
  "Digestive enzyme blend for optimal nutrient absorption.",
  "Advanced probiotic with prebiotics for gut health.",
  "Potent antioxidant blend with vitamins C, E, and selenium.",
  "Hydrolyzed collagen peptides for skin, hair, and joints.",
  "High-potency biotin for hair, skin, and nail health.",
  "Zinc complex for immune support and wound healing.",
  "Magnesium glycinate for relaxation and muscle health.",
  "Potassium supplement for electrolyte balance.",
];

const uses = [
  ["Pain relief", "Fever reduction", "Headache", "Muscle aches"],
  ["Arthritis pain", "Inflammation", "Menstrual cramps", "Sports injuries"],
  ["Respiratory infections", "Urinary tract infections", "Skin infections", "Ear infections"],
  ["GERD", "Peptic ulcers", "Zollinger-Ellison syndrome", "Acid reflux"],
  ["Type 2 diabetes", "PCOS", "Insulin resistance", "Prediabetes"],
  ["High cholesterol", "Cardiovascular prevention", "Familial hypercholesterolemia", "Mixed dyslipidemia"],
  ["Hypertension", "Angina", "Coronary artery disease", "Raynaud's phenomenon"],
  ["Hypertension", "Heart failure", "Diabetic nephropathy", "Left ventricular hypertrophy"],
  ["Seasonal allergies", "Chronic urticaria", "Allergic rhinitis", "Conjunctivitis"],
  ["Vitamin D deficiency", "Osteoporosis", "Immune support", "Mood support"],
  ["B12 deficiency", "Pernicious anemia", "Neuropathy", "Energy metabolism"],
  ["Iron deficiency anemia", "Pregnancy", "Heavy menstrual bleeding", "Vegetarian diet"],
  ["Osteoporosis prevention", "Bone health", "Calcium deficiency", "Postmenopausal women"],
  ["Heart health", "Brain function", "Joint health", "Eye health"],
  ["Heart failure", "Statin-induced myopathy", "Migraine prevention", "Energy production"],
  ["Digestive health", "Immune support", "Antibiotic-associated diarrhea", "IBS"],
  ["Insomnia", "Jet lag", "Shift work", "Sleep onset latency"],
  ["Osteoarthritis", "Joint pain", "Cartilage protection", "Mobility support"],
  ["Common cold", "Flu symptoms", "Nasal congestion", "Body aches"],
  ["Hay fever", "Pet allergies", "Dust allergies", "Skin reactions"],
  ["Heartburn", "Indigestion", "Sour stomach", "Acid indigestion"],
  ["Hypertension", "Blood pressure control", "Cardiovascular protection"],
  ["Blood sugar control", "Insulin sensitivity", "Metabolic health"],
  ["Cholesterol reduction", "Lipid management", "Cardiovascular health"],
  ["Headache", "Muscle pain", "Back pain", "Dental pain"],
  ["Fever", "Post-vaccination fever", "Viral infections", "Inflammatory conditions"],
  ["Dry cough", "Productive cough", "Throat irritation", "Bronchial congestion"],
  ["Nutritional gaps", "Daily wellness", "Energy support", "Immune function"],
  ["Mineral deficiency", "Bone health", "Electrolyte balance", "Muscle function"],
  ["Anxiety", "Stress", "Mood support", "Relaxation"],
  ["Fatigue", "Low energy", "Mental clarity", "Physical performance"],
  ["Cold prevention", "Flu season", "Immune boost", "Recovery support"],
  ["Bone density", "Fracture prevention", "Calcium absorption", "Joint health"],
  ["Heart health", "Blood pressure", "Cholesterol", "Circulation"],
  ["Memory", "Focus", "Mental clarity", "Cognitive performance"],
  ["Anti-aging", "Skin elasticity", "Hydration", "Wrinkle reduction"],
  ["Macular degeneration", "Eye strain", "Night vision", "Blue light protection"],
  ["Liver detox", "Fatty liver", "Alcohol recovery", "Toxin elimination"],
  ["Kidney stones", "UTI prevention", "Kidney function", "Detoxification"],
  ["Thyroid function", "Metabolism", "Energy", "Weight management"],
  ["PMS", "Menopause", "Hormonal acne", "Mood swings"],
  ["Insomnia", "Sleep quality", "Relaxation", "Circadian rhythm"],
  ["Chronic stress", "Adrenal fatigue", "Burnout", "Anxiety"],
  ["Bloating", "Gas", "Indigestion", "Nutrient absorption"],
  ["Gut health", "Microbiome balance", "Regularity", "Immune function"],
  ["Free radical damage", "Aging", "Cellular health", "Detoxification"],
  ["Skin aging", "Joint health", "Hair strength", "Nail growth"],
  ["Hair loss", "Brittle nails", "Skin health", "Metabolism"],
  ["Immune function", "Wound healing", "Acne", "Testosterone support"],
  ["Muscle relaxation", "Sleep quality", "Anxiety", "Migraine prevention"],
  ["Heart rhythm", "Muscle function", "Blood pressure", "Hydration"],
];

const keyInfoTemplates = [
  { composition: "Paracetamol 500mg", strength: "500mg", dosageForm: "Tablet", packaging: "Blister pack of 10 tablets", storage: "Below 30°C, protect from moisture", shelfLife: "36 months", manufacturer: "Alvor Healthcare Ltd.", licenseNumber: "MFG/2023/001" },
  { composition: "Ibuprofen 400mg", strength: "400mg", dosageForm: "Tablet", packaging: "Blister pack of 15 tablets", storage: "Below 25°C, protect from light", shelfLife: "36 months", manufacturer: "Alvor Healthcare Ltd.", licenseNumber: "MFG/2023/002" },
  { composition: "Amoxicillin 500mg", strength: "500mg", dosageForm: "Capsule", packaging: "Strip of 10 capsules", storage: "Below 25°C, dry place", shelfLife: "24 months", manufacturer: "Alvor Healthcare Ltd.", licenseNumber: "MFG/2023/003" },
  { composition: "Omeprazole 20mg", strength: "20mg", dosageForm: "Enteric-coated Capsule", packaging: "Blister pack of 14 capsules", storage: "Below 30°C", shelfLife: "24 months", manufacturer: "Alvor Healthcare Ltd.", licenseNumber: "MFG/2023/004" },
  { composition: "Metformin HCl 500mg", strength: "500mg", dosageForm: "Tablet", packaging: "Bottle of 60 tablets", storage: "Below 30°C, protect from moisture", shelfLife: "36 months", manufacturer: "Alvor Healthcare Ltd.", licenseNumber: "MFG/2023/005" },
  { composition: "Atorvastatin Calcium 20mg", strength: "20mg", dosageForm: "Tablet", packaging: "Blister pack of 30 tablets", storage: "Below 25°C", shelfLife: "24 months", manufacturer: "Alvor Healthcare Ltd.", licenseNumber: "MFG/2023/006" },
  { composition: "Amlodipine Besylate 5mg", strength: "5mg", dosageForm: "Tablet", packaging: "Blister pack of 30 tablets", storage: "Below 30°C", shelfLife: "36 months", manufacturer: "Alvor Healthcare Ltd.", licenseNumber: "MFG/2023/007" },
  { composition: "Losartan Potassium 50mg", strength: "50mg", dosageForm: "Tablet", packaging: "Blister pack of 30 tablets", storage: "Below 30°C", shelfLife: "36 months", manufacturer: "Alvor Healthcare Ltd.", licenseNumber: "MFG/2023/008" },
  { composition: "Cetirizine HCl 10mg", strength: "10mg", dosageForm: "Tablet", packaging: "Blister pack of 10 tablets", storage: "Below 25°C", shelfLife: "36 months", manufacturer: "Alvor Healthcare Ltd.", licenseNumber: "MFG/2023/009" },
  { composition: "Vitamin D3 (Cholecalciferol) 1000 IU", strength: "1000 IU", dosageForm: "Softgel Capsule", packaging: "Bottle of 60 softgels", storage: "Below 25°C, protect from light", shelfLife: "24 months", manufacturer: "Alvor Healthcare Ltd.", licenseNumber: "MFG/2023/010" },
];

function generateProducts(): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < 52; i++) {
    const categoryIndex = i % categories.length;
    const category = categories[categoryIndex];
    if (!category || !category.name) continue;
    
    const subCategory = category.subCategories?.[i % (category.subCategories?.length || 1)];
    const compositionIndex = i % keyInfoTemplates.length;
    const keyInfo = keyInfoTemplates[compositionIndex];
    const useIndex = i % uses.length;
    const productUses = uses[useIndex];
    const tags = [
      category.name.toLowerCase(),
      therapeuticCategories[i % therapeuticCategories.length],
      subCategory?.name?.toLowerCase().replace(/\s+/g, "-") || "",
      i % 3 === 0 ? "rx" : "otc",
      i % 5 === 0 ? "new" : "",
      i % 7 === 0 ? "bestseller" : "",
      i % 11 === 0 ? "featured" : "",
    ].filter(Boolean);

    const product: Product = {
      id: `prod-${i + 1}`,
      slug: productNames[i].toLowerCase().replace(/\s+/g, "-"),
      name: productNames[i],
      category: category.name,
      subCategory: subCategory?.name,
      shortDescription: descriptions[i],
      description: `${descriptions[i]} This formulation is manufactured under strict WHO GMP guidelines ensuring consistent quality and efficacy. Each batch undergoes comprehensive testing including identity, potency, purity, and stability assessments.`,
      uses: productUses,
      keyInformation: {
        composition: keyInfo.composition,
        strength: keyInfo.strength,
        dosageForm: keyInfo.dosageForm,
        packaging: keyInfo.packaging,
        storage: keyInfo.storage,
        shelfLife: keyInfo.shelfLife,
        manufacturer: keyInfo.manufacturer,
        licenseNumber: keyInfo.licenseNumber,
      },
      images: [
        `/images/products/${productNames[i].toLowerCase().replace(/\s+/g, "-")}-1.svg`,
        `/images/products/${productNames[i].toLowerCase().replace(/\s+/g, "-")}-2.svg`,
      ],
      thumbnail: `/images/products/${productNames[i].toLowerCase().replace(/\s+/g, "-")}-thumb.svg`,
      pdfBrochure: `/pdfs/${productNames[i].toLowerCase().replace(/\s+/g, "-")}-brochure.pdf`,
      tags,
      featured: i < 6,
      isNew: i % 5 === 0,
      isBestseller: i % 7 === 0,
      certifications: ["WHO GMP", "ISO 9001", "FDA Registered"],
      relatedProducts: productNames
        .filter((_, idx) => idx !== i && idx % categories.length === categoryIndex)
        .slice(0, 4)
        .map((n, idx) => `prod-${(i + idx + 1) % 52 + 1}`),
      createdAt: new Date(2024, 0, 1 + (i % 365)).toISOString(),
      updatedAt: new Date(2025, 0, 1 + (i % 365)).toISOString(),
    };

    products.push(product);
  }

  return products;
}

export const products: Product[] = generateProducts();

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return products.filter((p) => p.category === category.name);
}

export function getProductsBySubCategory(categorySlug: string, subCategorySlug: string): Product[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  const subCategory = category.subCategories?.find((sc) => sc.slug === subCategorySlug);
  if (!subCategory) return [];
  return products.filter((p) => p.category === category.name && p.subCategory === subCategory.name);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew).slice(0, 8);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.isBestseller).slice(0, 8);
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && (p.category === product.category || product.relatedProducts.includes(p.id)))
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.shortDescription.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      p.uses.some((use) => use.toLowerCase().includes(lowercaseQuery))
  );
}

export function filterProducts(filters: {
  category?: string;
  subCategory?: string;
  tags?: string[];
  search?: string;
  featured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}): Product[] {
  let filtered = [...products];

  if (filters.category) {
    const category = categories.find((c) => c.slug === filters.category);
    if (category) {
      filtered = filtered.filter((p) => p.category === category.name);
    }
  }

  if (filters.subCategory) {
    filtered = filtered.filter((p) => p.subCategory === filters.subCategory);
  }

  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter((p) => filters.tags!.some((tag) => p.tags.includes(tag)));
  }

  if (filters.search) {
    const searchResults = searchProducts(filters.search);
    filtered = filtered.filter((p) => searchResults.some((sp) => sp.id === p.id));
  }

  if (filters.featured) {
    filtered = filtered.filter((p) => p.featured);
  }

  if (filters.isNew) {
    filtered = filtered.filter((p) => p.isNew);
  }

  if (filters.isBestseller) {
    filtered = filtered.filter((p) => p.isBestseller);
  }

  return filtered;
}

export function sortProducts(products: Product[], sortBy: "name" | "newest" | "popular" | "featured"): Product[] {
  const sorted = [...products];
  switch (sortBy) {
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "newest":
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    case "popular":
      return sorted.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    case "featured":
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    default:
      return sorted;
  }
}

export function paginateProducts<T>(items: T[], page: number, limit: number): { data: T[]; total: number; totalPages: number } {
  const start = (page - 1) * limit;
  const end = start + limit;
  return {
    data: items.slice(start, end),
    total: items.length,
    totalPages: Math.ceil(items.length / limit),
  };
}