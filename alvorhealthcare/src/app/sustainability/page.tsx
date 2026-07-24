import { Metadata } from "next";
import { Leaf, Recycle, Factory, Users, Globe, Trees } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability | Alvor Healthcare",
  description: "Our commitment to environmental sustainability and responsible pharmaceutical manufacturing.",
};

const initiatives = [
  {
    icon: Leaf,
    title: "Green Manufacturing",
    description: "Energy-efficient facilities with solar power, water recycling, and waste reduction programs. Our manufacturing plants operate with 40% renewable energy.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description: "Zero-waste-to-landfill initiative across all facilities. Comprehensive recycling programs and responsible disposal of pharmaceutical waste.",
  },
  {
    icon: Factory,
    title: "Clean Technology",
    description: "Investment in solvent recovery systems, continuous manufacturing processes, and green chemistry principles to minimize environmental impact.",
  },
  {
    icon: Users,
    title: "Community Health",
    description: "Medication donation programs, health camps in underserved areas, and partnerships with global health organizations to improve access to medicines.",
  },
  {
    icon: Globe,
    title: "Carbon Neutrality",
    description: "Committed to achieving carbon neutrality by 2035 through emission reduction, carbon offset programs, and sustainable logistics.",
  },
  {
    icon: Trees,
    title: "Biodiversity",
    description: "Reforestation initiatives and conservation programs near our manufacturing sites. Planting 100,000 trees annually.",
  },
];

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-green-50 via-white to-emerald-50 py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-2xl flex items-center justify-center">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="display-lg lg:display-xl font-bold text-neutral-900 mb-4">
              Sustainability at Alvor
            </h1>
            <p className="body-lg text-neutral-600">
              Committed to responsible pharmaceutical manufacturing that protects our planet
              and improves global health outcomes for generations to come.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-neutral-100 hover:border-green-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="heading-sm font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container max-w-4xl">
          <h2 className="display-md font-bold text-neutral-900 text-center mb-12">Our Sustainability Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { value: "40%", label: "Renewable Energy", desc: "By 2026" },
              { value: "50%", label: "Water Reduction", desc: "Per unit by 2028" },
              { value: "Net Zero", label: "Carbon Emissions", desc: "By 2035" },
              { value: "100%", label: "Sustainable Packaging", desc: "By 2030" },
            ].map((goal) => (
              <div key={goal.label} className="text-center p-6 bg-white rounded-2xl border border-neutral-100">
                <div className="text-3xl font-bold text-green-600 mb-1">{goal.value}</div>
                <div className="font-semibold text-neutral-900">{goal.label}</div>
                <div className="text-sm text-neutral-500">{goal.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
