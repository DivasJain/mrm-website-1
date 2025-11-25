// Download utilities and data
export interface DownloadItem {
  id: string
  title: string
  description: string
  fileSize: string
  format: string
  category: "brochures" | "technical" | "media"
  requiresAuth?: boolean
  dealerOnly?: boolean
  downloadUrl?: string
}

export const downloadItems: DownloadItem[] = [
  // Brochures
  {
    id: "plywood-catalog",
    title: "MRM Plywood Complete Range",
    description: "Comprehensive catalog of all plywood products with specifications",
    fileSize: "12.5 MB",
    format: "PDF",
    category: "brochures",
    downloadUrl: "/downloads/mrm-plywood-catalog.pdf",
  },
  {
    id: "blockboards-laminates",
    title: "Ply and Boards & Laminates",
    description: "Detailed information on ply and boards and decorative laminates",
    fileSize: "8.2 MB",
    format: "PDF",
    category: "brochures",
    downloadUrl: "/downloads/mrm-plyandboards-laminates.pdf",
  },
  {
    id: "louvers-veneers",
    title: "Louvers & Veneers",
    description: "Architectural louvers and natural wood veneers catalog",
    fileSize: "6.8 MB",
    format: "PDF",
    category: "brochures",
    downloadUrl: "/downloads/mrm-louvers-veneers.pdf",
  },

  // Technical Documents
  {
    id: "installation-guide",
    title: "Installation Guidelines",
    description: "Step-by-step installation instructions for all products",
    fileSize: "4.1 MB",
    format: "PDF",
    category: "technical",
    requiresAuth: true,
    downloadUrl: "/downloads/mrm-installation-guide.pdf",
  },
  {
    id: "technical-specs",
    title: "Technical Specifications",
    description: "Detailed technical data sheets and certifications",
    fileSize: "2.8 MB",
    format: "PDF",
    category: "technical",
    requiresAuth: true,
    downloadUrl: "/downloads/mrm-technical-specs.pdf",
  },
  {
    id: "care-maintenance",
    title: "Care & Maintenance Guide",
    description: "Proper care instructions to maximize product lifespan",
    fileSize: "1.9 MB",
    format: "PDF",
    category: "technical",
    requiresAuth: true,
    downloadUrl: "/downloads/mrm-care-maintenance.pdf",
  },

  // Media Resources
  {
    id: "product-images",
    title: "Product Image Gallery",
    description: "High-resolution product images for presentations",
    fileSize: "45.2 MB",
    format: "ZIP",
    category: "media",
    dealerOnly: true,
    downloadUrl: "/downloads/mrm-product-images.zip",
  },
  {
    id: "installation-videos",
    title: "Installation Videos",
    description: "Video tutorials for proper installation techniques",
    fileSize: "128 MB",
    format: "MP4",
    category: "media",
    dealerOnly: true,
    downloadUrl: "/downloads/mrm-installation-videos.zip",
  },
  {
    id: "company-profile",
    title: "Company Profile Video",
    description: "Corporate presentation and facility tour",
    fileSize: "89 MB",
    format: "MP4",
    category: "media",
    downloadUrl: "/downloads/mrm-company-profile.mp4",
  },
]

export function getDownloadsByCategory(category: "brochures" | "technical" | "media"): DownloadItem[] {
  return downloadItems.filter((item) => item.category === category)
}

export function canUserDownload(item: DownloadItem, userRole?: string): boolean {
  if (item.dealerOnly && userRole !== "dealer") {
    return false
  }

  if (item.requiresAuth && !userRole) {
    return false
  }

  return true
}

export async function trackDownload(itemId: string, userId?: string): Promise<void> {
  // In a real app, this would send analytics to your backend
  console.log(`Download tracked: ${itemId} by user ${userId || "anonymous"}`)

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 100))
}
