import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Partners } from "./components/Partners"
import { Features } from "./components/Features"
import { Demo } from "./components/Demo"
import { Testimonials } from "./components/Testimonials"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Features />
        <Demo />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
