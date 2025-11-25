import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AboutContent from "@/components/AboutContent"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">About MRM</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Three decades of innovation, quality, and trust in building materials manufacturing
          </p>
        </div>
      </section>

      {/* About Content */}
      <AboutContent />

      <Footer />
    </div>
  )
}

export default AboutPage