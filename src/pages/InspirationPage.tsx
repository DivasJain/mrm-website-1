import Header from "@/components/Header"
import Footer from "@/components/Footer"
import InspirationContent from "@/components/InspirationContent"

const InspirationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Design Inspiration
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Discover stunning interiors and furniture designs created with MRM products by leading architects and
            designers
          </p>
        </div>
      </section>

      {/* Inspiration Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InspirationContent />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default InspirationPage