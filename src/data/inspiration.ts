// Inspiration gallery data
export interface InspirationProject {
  id: number
  title: string
  category: "Living Room" | "Kitchen" | "Bedroom" | "Office" | "Commercial"
  image: string
  description: string
  products: string[]
  likes: number
  architect?: string
  location?: string
  year?: number
  area?: string
}

export const inspirationProjects: InspirationProject[] = [
  {
    id: 1,
    title: "Modern Kitchen Design",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    description: "Sleek kitchen featuring MRM laminates with woodgrain finish and premium plywood cabinetry.",
    products: ["MRM Gold BWP Plywood", "Woodgrain Laminates"],
    likes: 124,
    architect: "Design Studio Mumbai",
    location: "Mumbai, Maharashtra",
    year: 2023,
    area: "450 sq ft",
  },
  {
    id: 2,
    title: "Contemporary Living Space",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    description:
      "Elegant living room with natural wood veneers and charcoal louvers creating a sophisticated ambiance.",
    products: ["Natural Wood Veneers", "MRM Charcoal Louvers"],
    likes: 89,
    architect: "Arch Interiors",
    location: "Bangalore, Karnataka",
    year: 2023,
    area: "600 sq ft",
  },
  {
    id: 3,
    title: "Luxury Bedroom Suite",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    description: "Premium bedroom furniture crafted with MRM blockboards and finished with designer laminates.",
    products: ["MRM Premium Blockboard", "Designer Laminates"],
    likes: 156,
    architect: "Elite Designs",
    location: "Delhi, NCR",
    year: 2023,
    area: "350 sq ft",
  },
  {
    id: 4,
    title: "Executive Office Design",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description: "Professional office space featuring solid color laminates and premium plywood construction.",
    products: ["Solid Color Laminates", "MRM Gold BWP Plywood"],
    likes: 73,
    architect: "Corporate Interiors",
    location: "Pune, Maharashtra",
    year: 2023,
    area: "800 sq ft",
  },
  {
    id: 5,
    title: "Retail Store Interior",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    description: "Modern retail space with stone texture laminates and architectural louvers for visual appeal.",
    products: ["Stone Laminates", "MRM Charcoal Louvers"],
    likes: 92,
    architect: "Retail Design Co.",
    location: "Chennai, Tamil Nadu",
    year: 2023,
    area: "1200 sq ft",
  },
  {
    id: 6,
    title: "Cozy Reading Nook",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    description: "Intimate reading space with natural veneers and custom plywood shelving.",
    products: ["Natural Wood Veneers", "MRM Gold MR Plywood"],
    likes: 67,
    architect: "Home Studio",
    location: "Hyderabad, Telangana",
    year: 2023,
    area: "150 sq ft",
  },
  {
    id: 7,
    title: "Modern Restaurant Interior",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    description: "Stunning restaurant design with premium blockboards and decorative laminates.",
    products: ["MRM Premium Blockboard", "Woodgrain Laminates"],
    likes: 108,
    architect: "F&B Designs",
    location: "Goa",
    year: 2023,
    area: "2000 sq ft",
  },
  {
    id: 8,
    title: "Minimalist Home Office",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description: "Clean and functional home office with solid color laminates and efficient storage solutions.",
    products: ["Solid Color Laminates", "MRM Gold MR Plywood"],
    likes: 85,
    architect: "Minimal Spaces",
    location: "Kochi, Kerala",
    year: 2023,
    area: "200 sq ft",
  },
]

export const inspirationCategories = ["All", "Living Room", "Kitchen", "Bedroom", "Office", "Commercial"]

export function getProjectsByCategory(category: string): InspirationProject[] {
  if (category === "All") {
    return inspirationProjects
  }
  return inspirationProjects.filter((project) => project.category === category)
}

export function getProjectById(id: number): InspirationProject | undefined {
  return inspirationProjects.find((project) => project.id === id)
}
