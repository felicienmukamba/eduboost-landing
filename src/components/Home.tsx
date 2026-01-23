import { Hero } from "./Hero"
import { Partners } from "./Partners"
import { Features } from "./Features"
import { Demo } from "./Demo"
import { Testimonials } from "./Testimonials"
import { Pricing } from "./Pricing"
import { Contact } from "./Contact"
import { FAQ } from "./FAQ"
import { PreorderSection } from "./PreorderSection"

export function Home() {
    return (
        <>
            <Hero />
            <Partners />
            <Features />
            <Demo />
            <Testimonials />
            <Pricing />
            <Contact />
            <FAQ />
            <PreorderSection />
        </>
    )
}
