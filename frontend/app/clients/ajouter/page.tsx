"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowLeft, UserPlus } from "lucide-react"
import Link from "next/link"

export default function AjouterClient() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setIsSubmitting(true)
        const formData = new FormData(e.currentTarget)
        const data = {
            civilite: formData.get('civilite'),
            prenom: formData.get('prenom'),
            nom: formData.get('nom')?.toString().toUpperCase(),
            mail: formData.get('mail'),
            tel: formData.get('tel')
        }
        try {
            await fetch("http://dako:3000/clients", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            router.push("/clients")
            router.refresh()
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"

    return (
        <div className="max-w-md mx-auto px-6 py-10">

            <Link href="/clients" className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium text-sm transition-colors w-fit mb-8">
                <ArrowLeft className="w-4 h-4" />
                Retour aux clients
            </Link>

            <h1 className="text-2xl font-bold text-gray-800 mb-1">Ajouter un client</h1>
            <p className="text-sm text-gray-400 mb-8">Remplissez les informations du nouveau client</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <select name="civilite" required className={inputClass}>
                    <option value="" disabled>-- Civilité --</option>
                    <option value="M">M.</option>
                    <option value="Mme">Mme.</option>
                </select>

                <div className="flex gap-3">
                    <input name="prenom" placeholder="Prénom" required className={inputClass} />
                    <input name="nom" placeholder="Nom" required className={inputClass} />
                </div>

                <input name="mail" type="email" placeholder="Email" className={inputClass} />
                <input name="tel" type="tel" maxLength={10} placeholder="Téléphone" required className={inputClass} />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                    <UserPlus className="w-4 h-4" />
                    {isSubmitting ? "Ajout en cours..." : "Ajouter le client"}
                </button>

            </form>
        </div>
    )
}