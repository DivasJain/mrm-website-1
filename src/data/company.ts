// Company information and data
export interface CompanyStats {
  yearsOfExperience: number
  happyDealers: number
  projectsCompleted: number
  citiesServed: number
}

export interface Certification {
  name: string
  description: string
  color: string
}

export interface TeamMember {
  name: string
  position: string
  image: string
  bio: string
}

export const companyStats: CompanyStats = {
  yearsOfExperience: 30,
  happyDealers: 1000,
  projectsCompleted: 5000,
  citiesServed: 50,
}

export const certifications: Certification[] = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    color: "from-amber-50 to-orange-50",
  },
  {
    name: "BWP Grade",
    description: "Boiling Water Proof Certification",
    color: "from-green-50 to-emerald-50",
  },
  {
    name: "IS 303",
    description: "Indian Standards Compliance",
    color: "from-blue-50 to-cyan-50",
  },
  {
    name: "CE Marking",
    description: "European Conformity Standards",
    color: "from-purple-50 to-pink-50",
  },
]

export const companyMilestones = [
  {
    year: "1990",
    title: "Company Founded",
    description: "Started as a small family business with a vision for quality",
  },
  {
    year: "1995",
    title: "First Manufacturing Unit",
    description: "Established our first state-of-the-art manufacturing facility",
  },
  {
    year: "2000",
    title: "ISO Certification",
    description: "Achieved ISO 9001 certification for quality management",
  },
  {
    year: "2005",
    title: "Product Diversification",
    description: "Expanded into laminates and decorative products",
  },
  {
    year: "2010",
    title: "Pan-India Presence",
    description: "Established dealer network across major Indian cities",
  },
  {
    year: "2015",
    title: "Technology Upgrade",
    description: "Invested in advanced German machinery for precision manufacturing",
  },
  {
    year: "2020",
    title: "Sustainability Initiative",
    description: "Launched eco-friendly product lines and sustainable practices",
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description: "Embraced digital technologies for better customer experience",
  },
]

export const coreValues = [
  {
    title: "Quality First",
    description: "Uncompromising commitment to product quality and customer satisfaction",
    icon: "🏆",
  },
  {
    title: "Innovation",
    description: "Continuous investment in research and development for better products",
    icon: "💡",
  },
  {
    title: "Sustainability",
    description: "Responsible manufacturing practices for a better tomorrow",
    icon: "🌱",
  },
  {
    title: "Trust",
    description: "Building lasting relationships through transparency and reliability",
    icon: "🤝",
  },
]
