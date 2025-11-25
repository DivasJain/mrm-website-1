export type ProductCategory = "plyandboards" | "laminateliners" | "laminates" | "louvers" | "veneers"

export interface Product {
  name: string
  description?: string
  warranty?: string
  tags?: string[]
  thicknessOptions?: number[]
  productImages?: string[]
  specifications?: Record<string, string>
}

export const productsData: Record<ProductCategory, Product[]> = {
  plyandboards: [
    {
      name: "MRM Gold BWP Plywood (Lifetime)",
      description:
        "Premium boiling water proof plywood with lifetime warranty for ultimate durability and peace of mind.",
      warranty: "Lifetime Warranty",
      tags: ["BWP", "Lifetime", "Premium"],
      thicknessOptions: [4, 6, 9, 12, 15, 18, 25],
      productImages: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      specifications: {
        Grade: "BWP (Boiling Water Proof)",
        Warranty: "Lifetime",
        "Moisture Content": "6-12%",
        Density: "550-650 kg/m³",
        "Formaldehyde Emission": "E1 Grade",
      },
    },
    {
      name: "MRM Gold BWP Plywood (25 Years)",
      description: "High-quality boiling water proof plywood with 25-year warranty for long-lasting performance.",
      warranty: "25 Years Warranty",
      tags: ["BWP", "25 Years", "Premium"],
      thicknessOptions: [4, 6, 9, 12, 15, 18, 25],
      productImages: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      specifications: {
        Grade: "BWP (Boiling Water Proof)",
        Warranty: "25 Years",
        "Moisture Content": "6-12%",
        Density: "550-650 kg/m³",
      },
    },
    {
      name: "MRM Gold MR Plywood",
      description: "Moisture resistant plywood ideal for interior applications with excellent finish quality.",
      warranty: "15 Years Warranty",
      tags: ["MR", "Interior", "Premium"],
      thicknessOptions: [4, 6, 9, 12, 15, 18],
      productImages: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "MRM Calibrated BWP Plywood",
      description: "Premium calibrated boiling water proof plywood with superior thickness tolerance and enhanced durability for precision applications.",
      warranty: "15 Years Warranty",
      tags: ["BWP", "Calibrated", "Precision", "Premium"],
      thicknessOptions: [4, 6, 9, 12, 15, 18, 25],
      productImages: [
        "/assets/CalibratedBWP.JPG",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      specifications: {
        Grade: "BWP (Boiling Water Proof)",
        Calibration: "Precision Calibrated",
        "Thickness Tolerance": "±0.2mm",
        "Moisture Content": "6-12%",
        Density: "550-650 kg/m³",
        "Formaldehyde Emission": "E1 Grade",
      },
    },
    {
      name: "MRM Calibrated BWR Plywood",
      description: "High-quality calibrated boiling water resistant plywood offering excellent dimensional stability and consistent thickness for demanding applications.",
      warranty: "12 Years Warranty",
      tags: ["BWR", "Calibrated", "Precision", "Durable"],
      thicknessOptions: [4, 6, 9, 12, 15, 18, 25],
      productImages: [
        "/assets/CalibratedBWR.JPG",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      specifications: {
        Grade: "BWR (Boiling Water Resistant)",
        Calibration: "Precision Calibrated",
        "Thickness Tolerance": "±0.2mm",
        "Moisture Content": "6-12%",
        Density: "550-650 kg/m³",
        "Formaldehyde Emission": "E1 Grade",
      },
    },
    {
      name: "MRM Premium Blockboard",
      description:
        "High-strength blockboards perfect for furniture and construction applications with superior stability.",
      warranty: "10 Years Warranty",
      tags: ["Premium", "Furniture", "Construction"],
      thicknessOptions: [16, 19, 25, 32],
      productImages: [
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      specifications: {
        Core: "Solid Wood Strips",
        "Face/Back": "Hardwood Veneer",
        "Moisture Content": "8-12%",
        Density: "500-600 kg/m³",
      },
    },
  ],
  laminateliners: [
    {
      name: "MRM Laminate Liners",
      description: "Laminate Liners are used on the inner sides of wardrobes, cabinets, and drawers to provide a neat finish and protect the surface. They offer a smooth texture and reliable surface protection ideal for interiors.",
      tags: ["Kraft Paper", "Interior", "Protection"],
      thicknessOptions: [0.7, 0.8],
      productImages: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
      specifications: {
        Material: "Kraft Paper",
        Size: "8x4 feet",
        "Coverage Area": "32 sqft",
        Thickness: "0.7mm & 0.8mm",
        Application: "Residential and Commercial (Interior)",
      },
    },
  ],
  laminates: [
    {
      name: "Woodgrain Laminates",
      description: "Natural wood texture laminates that bring warmth and elegance to any interior space.",
      tags: ["Woodgrain", "Natural", "Interior"],
      thicknessOptions: [0.8, 1.0],
      productImages: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Stone Laminates",
      description: "Realistic stone texture laminates for contemporary and modern interior designs.",
      tags: ["Stone", "Modern", "Contemporary"],
      thicknessOptions: [0.8, 1.0],
      productImages: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      name: "Solid Color Laminates",
      description: "Vibrant solid color laminates available in a wide range of colors for creative applications.",
      tags: ["Solid Color", "Vibrant", "Creative"],
      thicknessOptions: [0.8, 1.0],
      productImages: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],
  louvers: [
    {
      name: "MRM Charcoal Louvers",
      description: "Elegant charcoal louvers for stylish feature walls and modern ceiling designs.",
      tags: ["Charcoal", "Feature Wall", "Modern"],
      productImages: [
        "https://images.unsplash.com/photo-1587387119725-76351a1a456c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],
  veneers: [
    {
      name: "Natural Wood Veneers",
      description: "Premium natural wood veneers for luxury finishes and sophisticated interior applications.",
      tags: ["Natural", "Luxury", "Premium"],
      thicknessOptions: [0.6, 0.8],
      productImages: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],
}
