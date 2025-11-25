import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, ImageIcon, Video } from "lucide-react"

const downloadCategories = {
  brochures: [
    {
      title: "MRM Plywood Complete Range",
      description: "Comprehensive catalog of all plywood products with specifications",
      fileSize: "12.5 MB",
      format: "PDF",
      icon: FileText,
      url: "/brochures/mrm-plywood-complete-range.pdf"
    },
    {
      title: "Ply and Boards & Laminates",
      description: "Detailed information on ply and boards and decorative laminates",
      fileSize: "8.2 MB",
      format: "PDF",
      icon: FileText,
      url: "/brochures/ply-boards-laminates.pdf"
    },
    {
      title: "Louvers & Veneers",
      description: "Architectural louvers and natural wood veneers catalog",
      fileSize: "6.8 MB",
      format: "PDF",
      icon: FileText,
      url: "/brochures/louvers-veneers.pdf"
    },
  ],
  technical: [
    {
      title: "Installation Guidelines",
      description: "Step-by-step installation instructions for all products",
      fileSize: "4.1 MB",
      format: "PDF",
      icon: FileText,
      url: "/brochures/installation-guidelines.pdf"
    },
    {
      title: "Technical Specifications",
      description: "Detailed technical data sheets and certifications",
      fileSize: "2.8 MB",
      format: "PDF",
      icon: FileText,
      url: "/brochures/technical-specifications.pdf"
    },
    {
      title: "Care & Maintenance Guide",
      description: "Proper care instructions to maximize product lifespan",
      fileSize: "1.9 MB",
      format: "PDF",
      icon: FileText,
      url: "/brochures/care-maintenance.pdf"
    },
  ],
  media: [
    {
      title: "Product Image Gallery",
      description: "High-resolution product images for presentations",
      fileSize: "45.2 MB",
      format: "ZIP",
      icon: ImageIcon,
      url: "/brochures/product-images.zip"
    },
    {
      title: "Installation Videos",
      description: "Video tutorials for proper installation techniques",
      fileSize: "128 MB",
      format: "MP4",
      icon: Video,
      url: "/brochures/installation-videos.mp4"
    },
    {
      title: "Company Profile Video",
      description: "Corporate presentation and facility tour",
      fileSize: "89 MB",
      format: "MP4",
      icon: Video,
      url: "/brochures/company-profile.mp4"
    },
  ],
}

const DownloadContent = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof downloadCategories>("brochures")

  const handleDownload = (url: string, fileName: string) => {
    // In a real application, this would trigger the actual download
    console.log(`Downloading: ${fileName}`)
    // For now, just open the URL
    window.open(url, '_blank')
  }

  return (
    <div className="space-y-12">
      <Card className="bg-muted/30">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Download Center</h2>
          <p className="text-muted-foreground mb-6">
            Access our comprehensive product catalogs and technical resources. All downloads are available instantly.
          </p>
        </CardContent>
      </Card>

      {/* Download Categories */}
      <Tabs
        value={selectedCategory}
        onValueChange={(value) => setSelectedCategory(value as keyof typeof downloadCategories)}
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="brochures">Product Brochures</TabsTrigger>
          <TabsTrigger value="technical">Technical Docs</TabsTrigger>
          <TabsTrigger value="media">Media Resources</TabsTrigger>
        </TabsList>

        {Object.entries(downloadCategories).map(([category, items]) => (
          <TabsContent key={category} value={category} className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-muted-foreground">
                            {item.format} • {item.fileSize}
                          </div>
                          <Button
                            size="sm"
                            onClick={() => handleDownload(item.url, item.title)}
                            className=""
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Additional Information */}
      <Card className="bg-muted/30">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">Need Custom Information?</h3>
          <p className="text-muted-foreground mb-6">
            Looking for specific product data, custom specifications, or technical support? Our team is here to help.
          </p>
          <Button size="lg" variant="outline" className="bg-transparent">
            Contact Technical Support
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default DownloadContent
