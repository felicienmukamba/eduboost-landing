import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "@/assets/logo.png"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="Edubooster Logo" className="h-6 w-auto" />
                            <span className="text-xl font-bold">Edubooster</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            La meilleure application pour la réussite de vos examens d'État en RDC.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Produit</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/#features" className="hover:text-primary">Fonctionnalités</Link></li>
                            <li><Link to="/download" className="hover:text-primary">Télécharger l'App</Link></li>
                            <li><Link to="/#pricing" className="hover:text-primary">Tarifs</Link></li>
                            <li><Link to="/#testimonials" className="hover:text-primary">Témoignages</Link></li>
                            <li><Link to="/#faq" className="hover:text-primary">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Entreprise</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/#about" className="hover:text-primary">À propos</Link></li>
                            <li><a href="#" className="hover:text-primary">Carrières</a></li>
                            <li><a href="#" className="hover:text-primary">Blog</a></li>
                            <li><Link to="/#contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Légal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link to="/privacy" className="hover:text-primary cursor-pointer text-left">Confidentialité</Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-primary cursor-pointer text-left">Conditions d'utilisation</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Edubooster. Tous droits réservés.
                </div>
            </div>
        </footer>
    )
}
