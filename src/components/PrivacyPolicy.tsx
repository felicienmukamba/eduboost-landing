import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"

export function PrivacyPolicy() {
    const [email, setEmail] = useState("")
    const [reason, setReason] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            setSubmitStatus("success")
            setEmail("")
            setReason("")
        } catch (error) {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl">
            <div className="space-y-6">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Politique de Confidentialité</h1>
                    <p className="text-muted-foreground">Dernière mise à jour : 23 Janvier 2026</p>
                </div>

                <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-foreground/90">
                    <section>
                        <h3 className="text-xl font-bold mb-3">1. Collecte de l'information</h3>
                        <p>Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et / ou lorsque vous vous déconnectez. Les informations recueillies incluent :</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Votre nom et prénom</li>
                            <li>Votre adresse e-mail</li>
                            <li>Votre numéro de téléphone</li>
                            <li>Vos informations de paiement (traitées de manière sécurisée)</li>
                            <li>Votre progression et résultats académiques</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-3">2. Utilisation des informations</h3>
                        <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                            <li>Fournir un contenu éducatif personnalisé</li>
                            <li>Améliorer notre plateforme et nos services</li>
                            <li>Améliorer le service client et vos besoins de prise en charge</li>
                            <li>Vous envoyer des e-mails périodiques concernant votre compte ou vos études</li>
                            <li>Administrer un concours, une promotion, ou une enquête</li>
                            <li>Suivre votre progression académique et vous fournir des recommandations</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-3">3. Protection des informations</h3>
                        <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles :</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Chiffrement SSL pour toutes les transactions sensibles</li>
                            <li>Stockage sécurisé des données sur des serveurs protégés</li>
                            <li>Accès limité aux informations personnelles par les employés autorisés uniquement</li>
                            <li>Audits de sécurité réguliers</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-3">4. Confidentialité et partage des données</h3>
                        <p>Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction.</p>
                        <p className="mt-2">Nous pouvons partager vos informations avec :</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Les prestataires de services tiers qui nous aident à exploiter notre site</li>
                            <li>Les autorités légales si requis par la loi</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-3">5. Cookies</h3>
                        <p>Nous utilisons des cookies pour améliorer votre expérience utilisateur. Les cookies sont de petits fichiers stockés sur votre appareil qui nous aident à :</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Mémoriser vos préférences</li>
                            <li>Comprendre comment vous utilisez notre site</li>
                            <li>Maintenir votre session connectée</li>
                        </ul>
                        <p className="mt-2">Vous pouvez choisir de désactiver les cookies dans les paramètres de votre navigateur.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-3">6. Vos droits (RGPD)</h3>
                        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données personnelles</li>
                            <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes</li>
                            <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
                            <li><strong>Droit à la limitation :</strong> Vous pouvez demander la limitation du traitement de vos données</li>
                            <li><strong>Droit à la portabilité :</strong> Vous pouvez demander le transfert de vos données</li>
                            <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-3">7. Conservation des données</h3>
                        <p>Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services et conformément aux exigences légales. Les données des comptes inactifs peuvent être supprimées après une période de 3 ans d'inactivité.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-3">8. Modifications de la politique</h3>
                        <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications et clarifications prendront effet immédiatement après leur publication sur le site. Nous vous encourageons à consulter régulièrement cette page.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold mb-3">9. Contact</h3>
                        <p>Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à :</p>
                        <ul className="list-disc pl-5 space-y-1 mt-2">
                            <li>Email : privacy@edubooster.com</li>
                            <li>Téléphone : +243 XXX XXX XXX</li>
                            <li>Adresse : Kinshasa, République Démocratique du Congo</li>
                        </ul>
                    </section>

                    <Separator className="my-8" />

                    <section className="bg-muted/50 p-6 md:p-8 rounded-xl border">
                        <h3 className="text-xl font-bold mb-4">Demande de suppression de données</h3>
                        <p className="mb-6 text-muted-foreground">Conformément à vos droits RGPD, vous pouvez demander la suppression complète de vos données personnelles. Cette action est irréversible.</p>

                        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                            <div>
                                <Label htmlFor="deletion-email">Adresse e-mail associée à votre compte</Label>
                                <Input
                                    id="deletion-email"
                                    type="email"
                                    placeholder="votre@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="mt-1.5"
                                />
                            </div>

                            <div>
                                <Label htmlFor="deletion-reason">Raison de la suppression (optionnel)</Label>
                                <select
                                    id="deletion-reason"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1.5"
                                >
                                    <option value="">Sélectionner une raison</option>
                                    <option value="no-longer-need">Je n'ai plus besoin du service</option>
                                    <option value="privacy-concerns">Préoccupations de confidentialité</option>
                                    <option value="switching-service">Je change de service</option>
                                    <option value="other">Autre</option>
                                </select>
                            </div>

                            {submitStatus === "success" && (
                                <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-md text-sm">
                                    Votre demande a été envoyée avec succès. Nous traiterons votre demande dans un délai de 30 jours.
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-4 py-3 rounded-md text-sm">
                                    Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                                </div>
                            )}

                            <Button type="submit" disabled={isSubmitting} variant="destructive" className="w-full sm:w-auto">
                                {isSubmitting ? "Envoi en cours..." : "Demander la suppression"}
                            </Button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}
