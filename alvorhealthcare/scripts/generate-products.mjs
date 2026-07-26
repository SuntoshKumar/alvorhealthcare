import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const categories = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'data', 'categories.json'), 'utf-8'));

const therapeuticCategories = [
  "cardiovascular", "neurology", "gastroenterology", "respiratory",
  "anti-infective", "pain-management", "endocrinology", "dermatology",
  "oncology", "psychiatry",
];

const keyInfoTemplates = [
  { composition: "Paracetamol 500mg", strength: "500mg", dosageForm: "Tablet", packaging: "Blister pack of 10 tablets", storage: "Below 30°C, protect from moisture", shelfLife: "36 months" },
  { composition: "Ibuprofen 400mg", strength: "400mg", dosageForm: "Tablet", packaging: "Blister pack of 15 tablets", storage: "Below 25°C, protect from light", shelfLife: "36 months" },
  { composition: "Amoxicillin 500mg", strength: "500mg", dosageForm: "Capsule", packaging: "Strip of 10 capsules", storage: "Below 25°C, dry place", shelfLife: "24 months" },
  { composition: "Omeprazole 20mg", strength: "20mg", dosageForm: "Enteric-coated Capsule", packaging: "Blister pack of 14 capsules", storage: "Below 30°C", shelfLife: "24 months" },
  { composition: "Metformin HCl 500mg", strength: "500mg", dosageForm: "Tablet", packaging: "Bottle of 60 tablets", storage: "Below 30°C, protect from moisture", shelfLife: "36 months" },
  { composition: "Atorvastatin Calcium 20mg", strength: "20mg", dosageForm: "Tablet", packaging: "Blister pack of 30 tablets", storage: "Below 25°C", shelfLife: "24 months" },
  { composition: "Amlodipine Besylate 5mg", strength: "5mg", dosageForm: "Tablet", packaging: "Blister pack of 30 tablets", storage: "Below 30°C", shelfLife: "36 months" },
  { composition: "Losartan Potassium 50mg", strength: "50mg", dosageForm: "Tablet", packaging: "Blister pack of 30 tablets", storage: "Below 30°C", shelfLife: "36 months" },
  { composition: "Cetirizine HCl 10mg", strength: "10mg", dosageForm: "Tablet", packaging: "Blister pack of 10 tablets", storage: "Below 25°C", shelfLife: "36 months" },
  { composition: "Vitamin D3 (Cholecalciferol) 1000 IU", strength: "1000 IU", dosageForm: "Softgel Capsule", packaging: "Bottle of 60 softgels", storage: "Below 25°C, protect from light", shelfLife: "24 months" },
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
  "Multivitamin and mineral complex for comprehensive daily nutrition.",
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

const products = [];

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

  const slug = productNames[i].toLowerCase().replace(/\s+/g, "-");

  const product = {
    id: `prod-${i + 1}`,
    slug,
    name: productNames[i],
    category: category.name,
    subCategory: subCategory?.name || null,
    shortDescription: descriptions[i],
    description: `${descriptions[i]} Alvor Healthcare supports product availability through supplier coordination, documentation review, storage-condition controls, batch traceability, and reliable distribution.`,
    uses: productUses,
    keyInformation: {
      composition: keyInfo.composition,
      strength: keyInfo.strength,
      dosageForm: keyInfo.dosageForm,
      packaging: keyInfo.packaging,
      storage: keyInfo.storage,
      shelfLife: keyInfo.shelfLife,
    },
    images: [
      `/images/products/${slug}-1.svg`,
      `/images/products/${slug}-2.svg`,
    ],
    thumbnail: `/images/products/${slug}-thumb.svg`,
    tags,
    featured: i < 6,
    isNew: i % 5 === 0,
    isBestseller: i % 7 === 0,
    relatedProducts: productNames
      .filter((_, idx) => idx !== i && idx % categories.length === categoryIndex)
      .slice(0, 4)
      .map((n, idx) => `prod-${(i + idx + 1) % 52 + 1}`),
    createdAt: new Date(2024, 0, 1 + (i % 365)).toISOString(),
    updatedAt: new Date(2025, 0, 1 + (i % 365)).toISOString(),
  };

  products.push(product);
}

writeFileSync(join(__dirname, '..', 'src', 'data', 'products.json'), JSON.stringify(products, null, 2), 'utf-8');
console.log(`Generated ${products.length} products`);
