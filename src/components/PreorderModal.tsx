import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useState } from "react"
import { Bell, CheckCircle } from "lucide-react"

export function PreorderModal({ children }: { children: React.ReactNode }) {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        console.log("Preorder submitted:", { name, email })
        setSubmitted(true)
        setIsLoading(false)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md border-0 bg-background/95 backdrop-blur-xl shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Soyez le premier informé 🚀</DialogTitle>
                    <DialogDescription className="text-base">
                        Le lancement est imminent. Inscrivez-vous pour recevoir votre lien de téléchargement exclusif.
                    </DialogDescription>
                </DialogHeader>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-5 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium">Nom complet</Label>
                            <Input
                                id="name"
                                placeholder="Sarah Masika"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="h-11 bg-muted/50 border-input/50 focus:bg-background transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">Adresse Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="sarah@exemple.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-11 bg-muted/50 border-input/50 focus:bg-background transition-all"
                            />
                        </div>
                        <Button type="submit" size="lg" className="w-full gap-2 text-base font-semibold rounded-full h-12" disabled={isLoading}>
                            {isLoading ? (
                                <span className="animate-pulse">Traitement...</span>
                            ) : (
                                <>
                                    <Bell className="h-4 w-4" />
                                    M'avertir du lancement
                                </>
                            )}
                        </Button>
                    </form>
                ) : (
                    <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                        <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto shadow-sm">
                            <CheckCircle className="h-8 w-8" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-xl">C'est noté !</h3>
                            <p className="text-muted-foreground">
                                Merci <span className="font-semibold text-foreground">{name}</span>. Nous avons bien reçu votre demande.
                                <br />Vous recevrez une notification dès que l'app est disponible.
                            </p>
                        </div>
                        <Button variant="outline" className="mt-4 rounded-full" onClick={() => setSubmitted(false)}>
                            Fermer
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
