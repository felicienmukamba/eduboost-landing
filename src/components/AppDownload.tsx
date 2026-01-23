import { Smartphone, Download, Star, Shield, Zap, Users } from "lucide-react"
import { Button } from "./ui/button"

export function AppDownload() {
    return (
        <section id="download" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Download className="h-4 w-4" />
                        Disponible sur mobile
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        Téléchargez l'application Edubooster
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Emportez vos révisions partout avec vous. Apprenez hors ligne, suivez votre progression et révisez vos cours à tout moment.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left: Phone Mockup */}
                    <div className="relative flex justify-center">
                        <div className="relative">
                            {/* Phone frame */}
                            <div className="relative w-[280px] h-[560px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-[3rem] p-3 shadow-2xl border border-primary/20">
                                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-2xl z-10" />

                                    {/* Screen content preview */}
                                    <div className="p-6 pt-10 h-full flex flex-col bg-gradient-to-b from-primary/10 to-background">
                                        <div className="text-center mb-6">
                                            <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg">
                                                <Smartphone className="h-8 w-8 text-primary-foreground" />
                                            </div>
                                            <h3 className="font-bold text-lg">Edubooster</h3>
                                            <p className="text-xs text-muted-foreground">Révision d'État RDC</p>
                                        </div>

                                        <div className="space-y-3 flex-1">
                                            <div className="bg-muted/50 h-12 rounded-lg animate-pulse" />
                                            <div className="bg-muted/50 h-12 rounded-lg animate-pulse delay-75" />
                                            <div className="bg-muted/50 h-12 rounded-lg animate-pulse delay-150" />
                                            <div className="grid grid-cols-2 gap-2 mt-4">
                                                <div className="bg-primary/20 h-20 rounded-lg" />
                                                <div className="bg-primary/20 h-20 rounded-lg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 bg-background border-2 border-primary rounded-full p-3 shadow-lg">
                                <Star className="h-6 w-6 text-primary fill-primary" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-background border-2 border-primary rounded-full p-3 shadow-lg">
                                <Zap className="h-6 w-6 text-primary" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Download Info & Buttons */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Pourquoi télécharger l'app ?</h3>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Download className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Accès hors ligne</h4>
                                        <p className="text-sm text-muted-foreground">Téléchargez vos cours et révisez même sans connexion internet</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Zap className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Révision rapide</h4>
                                        <p className="text-sm text-muted-foreground">Interface optimisée pour les sessions de révision courtes et efficaces</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Shield className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Sécurisé & Privé</h4>
                                        <p className="text-sm text-muted-foreground">Vos données sont protégées et synchronisées en toute sécurité</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">+10,000 étudiants</h4>
                                        <p className="text-sm text-muted-foreground">Rejoignez la communauté d'étudiants qui réussissent leurs examens</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Download Buttons */}
                        <div className="space-y-4">
                            <h4 className="font-semibold text-lg">Téléchargez maintenant</h4>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button
                                    size="lg"
                                    className="gap-2 bg-black hover:bg-black/90 text-white flex-1"
                                    onClick={() => window.open("#", "_blank")}
                                >
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs">Télécharger sur</div>
                                        <div className="text-sm font-semibold">App Store</div>
                                    </div>
                                </Button>

                                <Button
                                    size="lg"
                                    className="gap-2 bg-black hover:bg-black/90 text-white flex-1"
                                    onClick={() => window.open("#", "_blank")}
                                >
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs">Disponible sur</div>
                                        <div className="text-sm font-semibold">Google Play</div>
                                    </div>
                                </Button>
                            </div>

                            {/* QR Code placeholder */}
                            <div className="pt-4 border-t">
                                <p className="text-sm text-muted-foreground mb-3">Ou scannez le QR code</p>
                                <div className="flex gap-4">
                                    <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed">
                                        <div className="text-center">
                                            <Smartphone className="h-8 w-8 mx-auto mb-1 text-muted-foreground" />
                                            <p className="text-xs text-muted-foreground">QR Code</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12 border-t">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">4.8★</div>
                        <div className="text-sm text-muted-foreground">Note moyenne</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                        <div className="text-sm text-muted-foreground">Téléchargements</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">500+</div>
                        <div className="text-sm text-muted-foreground">Questions</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                        <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                </div>

                {/* System Requirements */}
                <div className="mt-16 max-w-2xl mx-auto bg-muted/30 rounded-2xl p-8">
                    <h3 className="font-semibold text-lg mb-4 text-center">Configuration requise</h3>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                iOS
                            </h4>
                            <ul className="space-y-1 text-muted-foreground">
                                <li>• iOS 13.0 ou supérieur</li>
                                <li>• iPhone, iPad et iPod touch</li>
                                <li>• 50 MB d'espace libre</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                </svg>
                                Android
                            </h4>
                            <ul className="space-y-1 text-muted-foreground">
                                <li>• Android 6.0 ou supérieur</li>
                                <li>• Tous les appareils Android</li>
                                <li>• 50 MB d'espace libre</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
