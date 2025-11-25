import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LoginContent from "@/components/LoginContent"

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Welcome Back
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Access your account to download resources, view pricing, and manage your dealer portal
          </p>
        </div>
      </section>

      {/* Login Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <LoginContent />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LoginPage