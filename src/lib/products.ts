import { productsData, type ProductCategory, type Product } from "@/data/enhanced-products"

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

export function getProductBySlug(category: string, slug: string): Product | null {
  if (!Object.keys(productsData).includes(category)) {
    return null
  }

  const products = productsData[category as ProductCategory]
  return products.find((p) => slugify(p.name) === slug) || null
}

export function getAllProductSlugs(): Array<{ category: string; product: string }> {
  const slugs: Array<{ category: string; product: string }> = []

  Object.entries(productsData).forEach(([category, products]) => {
    products.forEach((product) => {
      slugs.push({
        category,
        product: slugify(product.name),
      })
    })
  })

  return slugs
}

export function getCategoryProducts(category: string): Product[] {
  if (!Object.keys(productsData).includes(category)) {
    return []
  }

  return productsData[category as ProductCategory]
}
