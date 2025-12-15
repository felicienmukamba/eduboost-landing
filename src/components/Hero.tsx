import { useRef } from "react"
import { Button } from "./ui/button"
import { Download } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const phoneRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Initial reveal
        gsap.from(textRef.current?.children || [], {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        })

        // Float animation
        gsap.to(phoneRef.current, {
            y: 15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        })

        // Mouse tilt effect
        const container = containerRef.current
        const phone = phoneRef.current

        if (!container || !phone) return

        const handleMouseMove = (e: MouseEvent) => {
            const { left, top, width, height } = container.getBoundingClientRect()
            const x = (e.clientX - left) / width - 0.5
            const y = (e.clientY - top) / height - 0.5

            gsap.to(phone, {
                rotationY: x * 20, // Rotate Y based on X position
                rotationX: -y * 20, // Rotate X based on Y position (inverted)
                transformPerspective: 1000,
                duration: 0.5,
                ease: "power1.out",
            })
        }

        const handleMouseLeave = () => {
            gsap.to(phone, {
                rotationY: 0,
                rotationX: 0,
                duration: 1,
                ease: "power3.out",
            })
        }

        container.addEventListener("mousemove", handleMouseMove)
        container.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            container.removeEventListener("mousemove", handleMouseMove)
            container.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, { scope: containerRef })

    return (
        <section id="hero" ref={containerRef} className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16 perspective-1000">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div ref={textRef} className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:to-blue-400">
                                L'Examen d'État n'a jamais été aussi simple
                            </h1>
                            <p className=" text-muted-foreground md:text-xl leading-relaxed">
                                Préparez-vous efficacement avec des milliers de questions, des résumés de cours et un suivi personnalisé.
                                Rejoignez des milliers d'élèves en RDC qui réussissent grâce à Edubooster.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row">
                            <Button size="lg" className="gap-2 transition-transform hover:scale-105">
                                <Download className="h-4 w-4" /> Télécharger sur Android
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2 transition-transform hover:scale-105">
                                <Download className="h-4 w-4" /> Télécharger sur iOS
                            </Button>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`h-8 w-8 rounded-full border-2 border-background bg-gray-${i * 100} flex items-center justify-center text-xs font-bold overflow-hidden bg-muted`}>
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p>Déjà 10k+ téléchargements</p>
                        </div>
                    </div>
                    <div ref={phoneRef} className="relative mx-auto w-full max-w-[250px] lg:max-w-[300px] will-change-transform">
                        {/* Abstract Background Blob */}
                        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl opacity-50 animate-pulse"></div>
                        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl opacity-50"></div>

                        {/* Phone Mockup Placeholder */}
                        <div className="relative z-10 rounded-[2.5rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
                            <div className="h-full w-full bg-background rounded-[2rem] overflow-hidden relative">
                                {/* Top Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-xl z-20"></div>

                                {/* App Content Placeholder */}
                                <div className="flex flex-col h-full w-full bg-gray-100 dark:bg-gray-900">
                                    <div className="h-40 bg-primary/10 w-full p-6 flex flex-col justify-end">
                                        <div className="h-8 w-3/4 bg-primary/30 rounded mb-2"></div>
                                        <div className="h-4 w-1/2 bg-primary/20 rounded"></div>
                                    </div>
                                    <div className="p-4 space-y-4">
                                        <div className="h-24 bg-card rounded-xl shadow-sm"></div>
                                        <div className="h-24 bg-card rounded-xl shadow-sm"></div>
                                        <div className="h-24 bg-card rounded-xl shadow-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
