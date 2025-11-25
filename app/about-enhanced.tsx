import { Suspense } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AboutContent from "@/components/AboutContent"

export const metadata = {
  title: "About MRM Woodcraft - 30+ Years of Excellence in Building Materials",
  description:
    "Learn about MRM Woodcraft's journey since 1990, our state-of-the-art manufacturing facilities, quality certifications, and commitment to premium building materials.",
}

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <AboutContent />
      </Suspense>
      <Footer />
    </div>
  )
}

export default AboutPage
