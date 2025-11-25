import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductImageSliderEnhanced from "@/components/ui/ProductImageSliderEnhanced"
import SpecificationTable from "@/components/SpecificationTable"
import type { Product } from "@/data/enhanced-products"

interface ProductDetailContentProps {
  product: Product
  category: string
}

const ProductDetailContent = ({ product, category }: ProductDetailContentProps) => {
  const [selectedThickness, setSelectedThickness] = useState<number | null>(product.thicknessOptions?.[0] || null)

  return (
    <div className="space-y-12">
      {/* Product Header */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Slider */}
        <div className="space-y-4">
          <ProductImageSliderEnhanced images={product.productImages || []} productName={product.name} />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {product.warranty && (
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-amber-100 text-amber-800">
              {product.warranty}
            </Badge>
          )}

          {product.tags && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <Badge key={index} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Thickness Options */}
          {product.thicknessOptions && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Available Thickness (mm)</h3>
              <div className="flex flex-wrap gap-2">
                {product.thicknessOptions.map((thickness) => (
                  <Button
                    key={thickness}
                    variant={selectedThickness === thickness ? "default" : "outline"}
                    onClick={() => setSelectedThickness(thickness)}
                    className="min-w-[60px]"
                  >
                    {thickness}mm
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 w-full sm:w-auto">
                Request Quote
              </Button>
            </Link>
            <Link to="/download">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Download Brochure
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="specifications" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="installation">Installation</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications" className="mt-8">
          <Card>
            <CardContent className="p-6">
              {product.specifications ? (
                <SpecificationTable specifications={product.specifications} />
              ) : (
                <p className="text-gray-600">Detailed specifications available on request.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applications" className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recommended Applications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {getApplications(category).map((app, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{app.title}</h4>
                      <p className="text-gray-600 text-sm">{app.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="installation" className="mt-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Installation Guidelines</h3>
              <div className="space-y-4">
                {getInstallationSteps(category).map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function getApplications(category: string) {
  const applications = {
    plyandboards: [
      { title: "Furniture Manufacturing", description: "Cabinets, wardrobes, and custom furniture" },
      { title: "Interior Paneling", description: "Wall panels and decorative applications" },
      { title: "Flooring", description: "Subflooring and engineered flooring systems" },
      { title: "Construction", description: "Structural applications and formwork" },
      { title: "Furniture Core", description: "Table tops, shelving, and cabinet construction" },
      { title: "Partitions", description: "Room dividers and office partitions" },
      { title: "Doors", description: "Interior door cores and panels" },
      { title: "Shelving", description: "Heavy-duty shelving systems" },
    ],
    laminateliners: [
      { title: "Wardrobe Interiors", description: "Inner sides of wardrobes for neat finish" },
      { title: "Cabinet Linings", description: "Cabinet interiors and drawer bases" },
      { title: "Drawer Construction", description: "Drawer sides and bottom panels" },
      { title: "Furniture Protection", description: "Surface protection for furniture interiors" },
    ],
    laminates: [
      { title: "Kitchen Cabinets", description: "Durable and easy-to-clean surfaces" },
      { title: "Furniture Surfaces", description: "Tables, desks, and storage units" },
      { title: "Wall Cladding", description: "Decorative wall applications" },
      { title: "Commercial Spaces", description: "Retail and office interiors" },
    ],
    louvers: [
      { title: "Feature Walls", description: "Accent walls and design elements" },
      { title: "Ceiling Design", description: "Suspended and integrated ceiling systems" },
      { title: "Ventilation", description: "Functional ventilation solutions" },
      { title: "Privacy Screens", description: "Decorative room dividers" },
    ],
    veneers: [
      { title: "Luxury Furniture", description: "High-end furniture finishing" },
      { title: "Architectural Millwork", description: "Custom millwork and trim" },
      { title: "Interior Design", description: "Wall panels and decorative elements" },
      { title: "Restoration", description: "Antique and heritage furniture restoration" },
    ],
  }
  return applications[category as keyof typeof applications] || []
}

function getInstallationSteps(category: string) {
  const steps = {
    plyandboards: [
      { title: "Surface Preparation", description: "Ensure the substrate is clean, dry, and level" },
      { title: "Acclimatization", description: "Allow plywood to acclimatize to room conditions for 24-48 hours" },
      { title: "Cutting", description: "Use appropriate tools with fine-tooth blades to prevent chipping" },
      { title: "Installation", description: "Secure with appropriate fasteners, maintaining proper spacing" },
      { title: "Finishing", description: "Apply primer and finish as per manufacturer recommendations" },
      { title: "Planning", description: "Plan the layout and measure accurately before cutting" },
      { title: "Edge Treatment", description: "Apply edge banding or trim to exposed edges" },
      { title: "Assembly", description: "Use appropriate adhesives and mechanical fasteners" },
    ],
    laminateliners: [
      { title: "Surface Preparation", description: "Ensure substrate surface is clean and smooth" },
      { title: "Measurement", description: "Measure and cut laminate liner to required size" },
      { title: "Adhesive Application", description: "Apply appropriate adhesive to substrate surface" },
      { title: "Positioning", description: "Carefully position liner and press firmly" },
      { title: "Trimming", description: "Trim excess material and ensure proper fit" },
    ],
    laminates: [
      { title: "Surface Preparation", description: "Ensure substrate is smooth, clean, and dry" },
      { title: "Adhesive Application", description: "Apply contact adhesive evenly to both surfaces" },
      { title: "Positioning", description: "Carefully position laminate - contact adhesive bonds immediately" },
      { title: "Pressing", description: "Apply even pressure using a roller or press" },
      { title: "Trimming", description: "Trim excess material with a router or sharp knife" },
    ],
    louvers: [
      { title: "Layout Planning", description: "Plan the louver arrangement and spacing" },
      { title: "Framework", description: "Install supporting framework if required" },
      { title: "Mounting", description: "Secure louvers to framework or wall structure" },
      { title: "Alignment", description: "Ensure proper alignment and spacing between louvers" },
      { title: "Finishing", description: "Apply protective finish if needed" },
    ],
    veneers: [
      { title: "Substrate Preparation", description: "Prepare smooth, stable substrate surface" },
      { title: "Veneer Selection", description: "Match grain patterns and color consistency" },
      { title: "Adhesive Application", description: "Apply appropriate veneer adhesive evenly" },
      { title: "Pressing", description: "Use veneer press or vacuum bag for proper bonding" },
      { title: "Sanding & Finishing", description: "Sand carefully and apply protective finish" },
    ],
  }
  return steps[category as keyof typeof steps] || []
}

export default ProductDetailContent
